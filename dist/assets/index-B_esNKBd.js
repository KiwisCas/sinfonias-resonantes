(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ea="169",Sl=0,ya=1,yl=2,Do=1,El=2,sn=3,Tn=0,Se=1,qe=2,Mn=0,oi=1,Ea=2,Ta=3,Aa=4,na=5,rn=100,Tl=101,Al=102,bl=103,wl=104,Rl=200,on=201,Cl=202,Pl=203,ur=204,dr=205,Dl=206,Ll=207,Ul=208,Il=209,Nl=210,Fl=211,Ol=212,Bl=213,zl=214,fr=0,pr=1,mr=2,ui=3,gr=4,vr=5,_r=6,xr=7,Lo=0,kl=1,Hl=2,Sn=0,Gl=1,Vl=2,Wl=3,ql=4,Xl=5,Yl=6,Kl=7,Uo=300,di=301,fi=302,Mr=303,Sr=304,Ts=306,yr=1e3,Fn=1001,Er=1002,fe=1003,$l=1004,Bi=1005,Qt=1006,Us=1007,On=1008,Ge=1009,Io=1010,No=1011,Ri=1012,ia=1013,zn=1014,Ye=1015,Hn=1016,sa=1017,ra=1018,pi=1020,Fo=35902,Oo=1021,Bo=1022,Le=1023,zo=1024,ko=1025,li=1026,mi=1027,Ho=1028,aa=1029,Go=1030,oa=1031,la=1033,cs=33776,hs=33777,us=33778,ds=33779,Tr=35840,Ar=35841,br=35842,wr=35843,Rr=36196,Cr=37492,Pr=37496,Dr=37808,Lr=37809,Ur=37810,Ir=37811,Nr=37812,Fr=37813,Or=37814,Br=37815,zr=37816,kr=37817,Hr=37818,Gr=37819,Vr=37820,Wr=37821,fs=36492,qr=36494,Xr=36495,Vo=36283,Yr=36284,Kr=36285,$r=36286,jl=3200,Zl=3201,Jl=0,Ql=1,xn="",Ve="srgb",An="srgb-linear",ca="display-p3",As="display-p3-linear",vs="linear",Jt="srgb",_s="rec709",xs="p3",Vn=7680,ba=519,tc=512,ec=513,nc=514,Wo=515,ic=516,sc=517,rc=518,ac=519,wa=35044,Ms="300 es",ln=2e3,Ss=2001;class vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ra=1234567;const bi=Math.PI/180,Ci=180/Math.PI;function _i(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ue[i&255]+ue[i>>8&255]+ue[i>>16&255]+ue[i>>24&255]+"-"+ue[t&255]+ue[t>>8&255]+"-"+ue[t>>16&15|64]+ue[t>>24&255]+"-"+ue[e&63|128]+ue[e>>8&255]+"-"+ue[e>>16&255]+ue[e>>24&255]+ue[n&255]+ue[n>>8&255]+ue[n>>16&255]+ue[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function ha(i,t){return(i%t+t)%t}function oc(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function lc(i,t,e){return i!==t?(e-i)/(t-i):0}function wi(i,t,e){return(1-e)*i+e*t}function cc(i,t,e,n){return wi(i,t,1-Math.exp(-e*n))}function hc(i,t=1){return t-Math.abs(ha(i,t*2)-t)}function uc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function dc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function fc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function pc(i,t){return i+Math.random()*(t-i)}function mc(i){return i*(.5-Math.random())}function gc(i){i!==void 0&&(Ra=i);let t=Ra+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vc(i){return i*bi}function _c(i){return i*Ci}function xc(i){return(i&i-1)===0&&i!==0}function Mc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yc(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function si(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Is={DEG2RAD:bi,RAD2DEG:Ci,generateUUID:_i,clamp:ge,euclideanModulo:ha,mapLinear:oc,inverseLerp:lc,lerp:wi,damp:cc,pingpong:hc,smoothstep:uc,smootherstep:dc,randInt:fc,randFloat:pc,randFloatSpread:mc,seededRandom:gc,degToRad:vc,radToDeg:_c,isPowerOfTwo:xc,ceilPowerOfTwo:Mc,floorPowerOfTwo:Sc,setQuaternionFromProperEuler:yc,normalize:pe,denormalize:si};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,e,n,s,r,a,o,l,c){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],E=s[1],y=s[4],b=s[7],L=s[2],w=s[5],T=s[8];return r[0]=a*x+o*E+l*L,r[3]=a*p+o*y+l*w,r[6]=a*m+o*b+l*T,r[1]=c*x+h*E+d*L,r[4]=c*p+h*y+d*w,r[7]=c*m+h*b+d*T,r[2]=u*x+f*E+g*L,r[5]=u*p+f*y+g*w,r[8]=u*m+f*b+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ns.makeScale(t,e)),this}rotate(t){return this.premultiply(Ns.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ns.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new Pt;function qo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ec(){const i=ys("canvas");return i.style.display="block",i}const Ca={};function ps(i){i in Ca||(Ca[i]=!0,console.warn(i))}function Tc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ac(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pa=new Pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Da=new Pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mi={[An]:{transfer:vs,primaries:_s,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ve]:{transfer:Jt,primaries:_s,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[As]:{transfer:vs,primaries:xs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Da),fromReference:i=>i.applyMatrix3(Pa)},[ca]:{transfer:Jt,primaries:xs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Da),fromReference:i=>i.applyMatrix3(Pa).convertLinearToSRGB()}},wc=new Set([An,As]),Wt={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!wc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Mi[t].toReference,s=Mi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Mi[i].primaries},getTransfer:function(i){return i===xn?vs:Mi[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Mi[t].luminanceCoefficients)}};function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wn;class Rc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wn===void 0&&(Wn=ys("canvas")),Wn.width=t.width,Wn.height=t.height;const n=Wn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ys("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cc=0;class Xo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Os(s[a].image)):r.push(Os(s[a]))}else r=Os(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Os(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pc=0;class _e extends vi{constructor(t=_e.DEFAULT_IMAGE,e=_e.DEFAULT_MAPPING,n=Fn,s=Fn,r=Qt,a=On,o=Le,l=Ge,c=_e.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=_i(),this.name="",this.source=new Xo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yr:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Er:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yr:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Er:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_e.DEFAULT_IMAGE=null;_e.DEFAULT_MAPPING=Uo;_e.DEFAULT_ANISOTROPY=1;class wt{constructor(t=0,e=0,n=0,s=1){wt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,b=(f+1)/2,L=(m+1)/2,w=(h+u)/4,T=(d+x)/4,U=(g+p)/4;return y>b&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=T/n):b>L?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=U/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=T/r,s=U/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-x)/E,this.z=(u-h)/E,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dc extends vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new wt(0,0,t,e),this.scissorTest=!1,this.viewport=new wt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new _e(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ce extends Dc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yo extends _e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fe,this.minFilter=fe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lc extends _e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fe,this.minFilter=fe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const u=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==u||c!==f||h!==g){let p=1-o;const m=l*u+c*f+h*g+d*x,E=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const L=Math.sqrt(y),w=Math.atan2(L,m*E);p=Math.sin(p*w)/L,o=Math.sin(o*w)/L}const b=o*E;if(l=l*p+u*b,c=c*p+f*b,h=h*p+g*b,d=d*p+x*b,p===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(La.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(La.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bs.copy(this).projectOnVector(t),this.sub(Bs)}reflect(t){return this.sub(Bs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bs=new F,La=new Di;class Li{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ne.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ne.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ne.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ne):Ne.fromBufferAttribute(r,a),Ne.applyMatrix4(t.matrixWorld),this.expandByPoint(Ne);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zi.copy(n.boundingBox)),zi.applyMatrix4(t.matrixWorld),this.union(zi)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ne),Ne.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Si),ki.subVectors(this.max,Si),qn.subVectors(t.a,Si),Xn.subVectors(t.b,Si),Yn.subVectors(t.c,Si),dn.subVectors(Xn,qn),fn.subVectors(Yn,Xn),Rn.subVectors(qn,Yn);let e=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-Rn.z,Rn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,Rn.z,0,-Rn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-Rn.y,Rn.x,0];return!zs(e,qn,Xn,Yn,ki)||(e=[1,0,0,0,1,0,0,0,1],!zs(e,qn,Xn,Yn,ki))?!1:(Hi.crossVectors(dn,fn),e=[Hi.x,Hi.y,Hi.z],zs(e,qn,Xn,Yn,ki))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ne).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ne).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ze=[new F,new F,new F,new F,new F,new F,new F,new F],Ne=new F,zi=new Li,qn=new F,Xn=new F,Yn=new F,dn=new F,fn=new F,Rn=new F,Si=new F,ki=new F,Hi=new F,Cn=new F;function zs(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Cn.fromArray(i,r);const o=s.x*Math.abs(Cn.x)+s.y*Math.abs(Cn.y)+s.z*Math.abs(Cn.z),l=t.dot(Cn),c=e.dot(Cn),h=n.dot(Cn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Uc=new Li,yi=new F,ks=new F;class bs{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Uc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yi.subVectors(t,this.center);const e=yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(yi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yi.copy(t.center).add(ks)),this.expandByPoint(yi.copy(t.center).sub(ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Je=new F,Hs=new F,Gi=new F,pn=new F,Gs=new F,Vi=new F,Vs=new F;class ua{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Je.copy(this.origin).addScaledVector(this.direction,e),Je.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Hs.copy(t).add(e).multiplyScalar(.5),Gi.copy(e).sub(t).normalize(),pn.copy(this.origin).sub(Hs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Gi),o=pn.dot(this.direction),l=-pn.dot(Gi),c=pn.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Hs).addScaledVector(Gi,u),f}intersectSphere(t,e){Je.subVectors(t.center,this.origin);const n=Je.dot(this.direction),s=Je.dot(Je)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Je)!==null}intersectTriangle(t,e,n,s,r){Gs.subVectors(e,t),Vi.subVectors(n,t),Vs.crossVectors(Gs,Vi);let a=this.direction.dot(Vs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pn.subVectors(this.origin,t);const l=o*this.direction.dot(Vi.crossVectors(pn,Vi));if(l<0)return null;const c=o*this.direction.dot(Gs.cross(pn));if(c<0||l+c>a)return null;const h=-o*pn.dot(Vs);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,x,p){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,x,p)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Kn.setFromMatrixColumn(t,0).length(),r=1/Kn.setFromMatrixColumn(t,1).length(),a=1/Kn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){const u=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ic,t,Nc)}lookAt(t,e,n){const s=this.elements;return be.subVectors(t,e),be.lengthSq()===0&&(be.z=1),be.normalize(),mn.crossVectors(n,be),mn.lengthSq()===0&&(Math.abs(n.z)===1?be.x+=1e-4:be.z+=1e-4,be.normalize(),mn.crossVectors(n,be)),mn.normalize(),Wi.crossVectors(be,mn),s[0]=mn.x,s[4]=Wi.x,s[8]=be.x,s[1]=mn.y,s[5]=Wi.y,s[9]=be.y,s[2]=mn.z,s[6]=Wi.z,s[10]=be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],E=n[3],y=n[7],b=n[11],L=n[15],w=s[0],T=s[4],U=s[8],W=s[12],v=s[1],S=s[5],I=s[9],O=s[13],V=s[2],K=s[6],k=s[10],j=s[14],H=s[3],ot=s[7],lt=s[11],gt=s[15];return r[0]=a*w+o*v+l*V+c*H,r[4]=a*T+o*S+l*K+c*ot,r[8]=a*U+o*I+l*k+c*lt,r[12]=a*W+o*O+l*j+c*gt,r[1]=h*w+d*v+u*V+f*H,r[5]=h*T+d*S+u*K+f*ot,r[9]=h*U+d*I+u*k+f*lt,r[13]=h*W+d*O+u*j+f*gt,r[2]=g*w+x*v+p*V+m*H,r[6]=g*T+x*S+p*K+m*ot,r[10]=g*U+x*I+p*k+m*lt,r[14]=g*W+x*O+p*j+m*gt,r[3]=E*w+y*v+b*V+L*H,r[7]=E*T+y*S+b*K+L*ot,r[11]=E*U+y*I+b*k+L*lt,r[15]=E*W+y*O+b*j+L*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*f-n*l*f)+x*(+e*l*f-e*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+p*(+e*c*d-e*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+m*(-s*o*h-e*l*d+e*o*u+s*a*d-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],E=d*p*c-x*u*c+x*l*f-o*p*f-d*l*m+o*u*m,y=g*u*c-h*p*c-g*l*f+a*p*f+h*l*m-a*u*m,b=h*x*c-g*d*c+g*o*f-a*x*f-h*o*m+a*d*m,L=g*d*l-h*x*l-g*o*u+a*x*u+h*o*p-a*d*p,w=e*E+n*y+s*b+r*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=E*T,t[1]=(x*u*r-d*p*r-x*s*f+n*p*f+d*s*m-n*u*m)*T,t[2]=(o*p*r-x*l*r+x*s*c-n*p*c-o*s*m+n*l*m)*T,t[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*f-n*l*f)*T,t[4]=y*T,t[5]=(h*p*r-g*u*r+g*s*f-e*p*f-h*s*m+e*u*m)*T,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*m-e*l*m)*T,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*f+e*l*f)*T,t[8]=b*T,t[9]=(g*d*r-h*x*r-g*n*f+e*x*f+h*n*m-e*d*m)*T,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*m+e*o*m)*T,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*f-e*o*f)*T,t[12]=L*T,t[13]=(h*x*s-g*d*s+g*n*u-e*x*u-h*n*p+e*d*p)*T,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*p-e*o*p)*T,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*u+e*o*u)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,x=a*h,p=a*d,m=o*d,E=l*c,y=l*h,b=l*d,L=n.x,w=n.y,T=n.z;return s[0]=(1-(x+m))*L,s[1]=(f+b)*L,s[2]=(g-y)*L,s[3]=0,s[4]=(f-b)*w,s[5]=(1-(u+m))*w,s[6]=(p+E)*w,s[7]=0,s[8]=(g+y)*T,s[9]=(p-E)*T,s[10]=(1-(u+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Kn.set(s[0],s[1],s[2]).length();const a=Kn.set(s[4],s[5],s[6]).length(),o=Kn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Fe.copy(this);const c=1/r,h=1/a,d=1/o;return Fe.elements[0]*=c,Fe.elements[1]*=c,Fe.elements[2]*=c,Fe.elements[4]*=h,Fe.elements[5]*=h,Fe.elements[6]*=h,Fe.elements[8]*=d,Fe.elements[9]*=d,Fe.elements[10]*=d,e.setFromRotationMatrix(Fe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ln){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let f,g;if(o===ln)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ss)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ln){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(a-r),u=(e+t)*c,f=(n+s)*h;let g,x;if(o===ln)g=(a+r)*d,x=-2*d;else if(o===Ss)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Kn=new F,Fe=new ee,Ic=new F(0,0,0),Nc=new F(1,1,1),mn=new F,Wi=new F,be=new F,Ua=new ee,Ia=new Di;class hn{constructor(t=0,e=0,n=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ua.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ua,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ia.setFromEuler(this),this.setFromQuaternion(Ia,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class da{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fc=0;const Na=new F,$n=new Di,Qe=new ee,qi=new F,Ei=new F,Oc=new F,Bc=new Di,Fa=new F(1,0,0),Oa=new F(0,1,0),Ba=new F(0,0,1),za={type:"added"},zc={type:"removed"},jn={type:"childadded",child:null},Ws={type:"childremoved",child:null};class ye extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new F,e=new hn,n=new Di,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new Pt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(Fa,t)}rotateY(t){return this.rotateOnAxis(Oa,t)}rotateZ(t){return this.rotateOnAxis(Ba,t)}translateOnAxis(t,e){return Na.copy(t).applyQuaternion(this.quaternion),this.position.add(Na.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fa,t)}translateY(t){return this.translateOnAxis(Oa,t)}translateZ(t){return this.translateOnAxis(Ba,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qi.copy(t):qi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(Ei,qi,this.up):Qe.lookAt(qi,Ei,this.up),this.quaternion.setFromRotationMatrix(Qe),s&&(Qe.extractRotation(s.matrixWorld),$n.setFromRotationMatrix(Qe),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(za),jn.child=t,this.dispatchEvent(jn),jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zc),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(za),jn.child=t,this.dispatchEvent(jn),jn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,t,Oc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,Bc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ye.DEFAULT_UP=new F(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oe=new F,tn=new F,qs=new F,en=new F,Zn=new F,Jn=new F,ka=new F,Xs=new F,Ys=new F,Ks=new F,$s=new wt,js=new wt,Zs=new wt;class He{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Oe.subVectors(t,e),s.cross(Oe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Oe.subVectors(s,e),tn.subVectors(n,e),qs.subVectors(t,e);const a=Oe.dot(Oe),o=Oe.dot(tn),l=Oe.dot(qs),c=tn.dot(tn),h=tn.dot(qs),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,en)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,en.x),l.addScaledVector(a,en.y),l.addScaledVector(o,en.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return $s.setScalar(0),js.setScalar(0),Zs.setScalar(0),$s.fromBufferAttribute(t,e),js.fromBufferAttribute(t,n),Zs.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector($s,r.x),a.addScaledVector(js,r.y),a.addScaledVector(Zs,r.z),a}static isFrontFacing(t,e,n,s){return Oe.subVectors(n,e),tn.subVectors(t,e),Oe.cross(tn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oe.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Oe.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return He.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Zn.subVectors(s,n),Jn.subVectors(r,n),Xs.subVectors(t,n);const l=Zn.dot(Xs),c=Jn.dot(Xs);if(l<=0&&c<=0)return e.copy(n);Ys.subVectors(t,s);const h=Zn.dot(Ys),d=Jn.dot(Ys);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Zn,a);Ks.subVectors(t,r);const f=Zn.dot(Ks),g=Jn.dot(Ks);if(g>=0&&f<=g)return e.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Jn,o);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return ka.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(ka,o);const m=1/(p+x+u);return a=x*m,o=u*m,e.copy(n).addScaledVector(Zn,a).addScaledVector(Jn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ko={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},Xi={h:0,s:0,l:0};function Js(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=ha(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Js(a,r,t+1/3),this.g=Js(a,r,t),this.b=Js(a,r,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=Ko[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return Wt.fromWorkingColorSpace(de.copy(this),t),Math.round(ge(de.r*255,0,255))*65536+Math.round(ge(de.g*255,0,255))*256+Math.round(ge(de.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(de.copy(this),e);const n=de.r,s=de.g,r=de.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(de.copy(this),e),t.r=de.r,t.g=de.g,t.b=de.b,t}getStyle(t=Ve){Wt.fromWorkingColorSpace(de.copy(this),t);const e=de.r,n=de.g,s=de.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gn),this.setHSL(gn.h+t,gn.s+e,gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gn),t.getHSL(Xi);const n=wi(gn.h,Xi.h,e),s=wi(gn.s,Xi.s,e),r=wi(gn.l,Xi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const de=new Yt;Yt.NAMES=Ko;let kc=0;class Ui extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=oi,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ur,this.blendDst=dr,this.blendEquation=rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ur&&(n.blendSrc=this.blendSrc),this.blendDst!==dr&&(n.blendDst=this.blendDst),this.blendEquation!==rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ba&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $o extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const se=new F,Yi=new Lt;class re{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wa,this.updateRanges=[],this.gpuType=Ye,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yi.fromBufferAttribute(this,e),Yi.applyMatrix3(t),this.setXY(e,Yi.x,Yi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wa&&(t.usage=this.usage),t}}class jo extends re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zo extends re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Bn extends re{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hc=0;const Pe=new ee,Qs=new ye,Qn=new F,we=new Li,Ti=new Li,le=new F;class $e extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qo(t)?Zo:jo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pe.makeRotationFromQuaternion(t),this.applyMatrix4(Pe),this}rotateX(t){return Pe.makeRotationX(t),this.applyMatrix4(Pe),this}rotateY(t){return Pe.makeRotationY(t),this.applyMatrix4(Pe),this}rotateZ(t){return Pe.makeRotationZ(t),this.applyMatrix4(Pe),this}translate(t,e,n){return Pe.makeTranslation(t,e,n),this.applyMatrix4(Pe),this}scale(t,e,n){return Pe.makeScale(t,e,n),this.applyMatrix4(Pe),this}lookAt(t){return Qs.lookAt(t),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Bn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];we.setFromBufferAttribute(r),this.morphTargetsRelative?(le.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(le),le.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(le)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ti.setFromBufferAttribute(o),this.morphTargetsRelative?(le.addVectors(we.min,Ti.min),we.expandByPoint(le),le.addVectors(we.max,Ti.max),we.expandByPoint(le)):(we.expandByPoint(Ti.min),we.expandByPoint(Ti.max))}we.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(le));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)le.fromBufferAttribute(o,c),l&&(Qn.fromBufferAttribute(t,c),le.add(Qn)),s=Math.max(s,n.distanceToSquared(le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new re(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new F,l[U]=new F;const c=new F,h=new F,d=new F,u=new Lt,f=new Lt,g=new Lt,x=new F,p=new F;function m(U,W,v){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,W),d.fromBufferAttribute(n,v),u.fromBufferAttribute(r,U),f.fromBufferAttribute(r,W),g.fromBufferAttribute(r,v),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(S),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),o[U].add(x),o[W].add(x),o[v].add(x),l[U].add(p),l[W].add(p),l[v].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let U=0,W=E.length;U<W;++U){const v=E[U],S=v.start,I=v.count;for(let O=S,V=S+I;O<V;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new F,b=new F,L=new F,w=new F;function T(U){L.fromBufferAttribute(s,U),w.copy(L);const W=o[U];y.copy(W),y.sub(L.multiplyScalar(L.dot(W))).normalize(),b.crossVectors(w,W);const S=b.dot(l[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,S)}for(let U=0,W=E.length;U<W;++U){const v=E[U],S=v.start,I=v.count;for(let O=S,V=S+I;O<V;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)le.fromBufferAttribute(t,e),le.normalize(),t.setXYZ(e,le.x,le.y,le.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new re(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new $e,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ha=new ee,Pn=new ua,Ki=new bs,Ga=new F,$i=new F,ji=new F,Zi=new F,tr=new F,Ji=new F,Va=new F,Qi=new F;class Ue extends ye{constructor(t=new $e,e=new $o){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ji.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(tr.fromBufferAttribute(d,t),a?Ji.addScaledVector(tr,h):Ji.addScaledVector(tr.sub(e),h))}e.add(Ji)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(r),Pn.copy(t.ray).recast(t.near),!(Ki.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(Ki,Ga)===null||Pn.origin.distanceToSquared(Ga)>(t.far-t.near)**2))&&(Ha.copy(r).invert(),Pn.copy(t.ray).applyMatrix4(Ha),!(n.boundingBox!==null&&Pn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const p=u[g],m=a[p.materialIndex],E=Math.max(p.start,f.start),y=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let b=E,L=y;b<L;b+=3){const w=o.getX(b),T=o.getX(b+1),U=o.getX(b+2);s=ts(this,m,t,n,c,h,d,w,T,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const E=o.getX(p),y=o.getX(p+1),b=o.getX(p+2);s=ts(this,a,t,n,c,h,d,E,y,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const p=u[g],m=a[p.materialIndex],E=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=E,L=y;b<L;b+=3){const w=b,T=b+1,U=b+2;s=ts(this,m,t,n,c,h,d,w,T,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const E=p,y=p+1,b=p+2;s=ts(this,a,t,n,c,h,d,E,y,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Gc(i,t,e,n,s,r,a,o){let l;if(t.side===Se?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Tn,o),l===null)return null;Qi.copy(o),Qi.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Qi);return c<e.near||c>e.far?null:{distance:c,point:Qi.clone(),object:i}}function ts(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,$i),i.getVertexPosition(l,ji),i.getVertexPosition(c,Zi);const h=Gc(i,t,e,n,$i,ji,Zi,Va);if(h){const d=new F;He.getBarycoord(Va,$i,ji,Zi,d),s&&(h.uv=He.getInterpolatedAttribute(s,o,l,c,d,new Lt)),r&&(h.uv1=He.getInterpolatedAttribute(r,o,l,c,d,new Lt)),a&&(h.normal=He.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new F,materialIndex:0};He.getNormal($i,ji,Zi,u.normal),h.face=u,h.barycoord=d}return h}class Ii extends $e{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(h,3)),this.setAttribute("uv",new Bn(d,2));function g(x,p,m,E,y,b,L,w,T,U,W){const v=b/T,S=L/U,I=b/2,O=L/2,V=w/2,K=T+1,k=U+1;let j=0,H=0;const ot=new F;for(let lt=0;lt<k;lt++){const gt=lt*S-O;for(let kt=0;kt<K;kt++){const qt=kt*v-I;ot[x]=qt*E,ot[p]=gt*y,ot[m]=V,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[p]=0,ot[m]=w>0?1:-1,h.push(ot.x,ot.y,ot.z),d.push(kt/T),d.push(1-lt/U),j+=1}}for(let lt=0;lt<U;lt++)for(let gt=0;gt<T;gt++){const kt=u+gt+K*lt,qt=u+gt+K*(lt+1),q=u+(gt+1)+K*(lt+1),J=u+(gt+1)+K*lt;l.push(kt,qt,J),l.push(qt,q,J),H+=6}o.addGroup(f,H,W),f+=H,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function me(i){const t={};for(let e=0;e<i.length;e++){const n=gi(i[e]);for(const s in n)t[s]=n[s]}return t}function Vc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jo(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const Wc={clone:gi,merge:me};var qc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Re extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qc,this.fragmentShader=Xc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gi(t.uniforms),this.uniformsGroups=Vc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qo extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vn=new F,Wa=new Lt,qa=new Lt;class De extends Qo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ci*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ci*2*Math.atan(Math.tan(bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vn.x,vn.y).multiplyScalar(-t/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vn.x,vn.y).multiplyScalar(-t/vn.z)}getViewSize(t,e){return this.getViewBounds(t,Wa,qa),e.subVectors(qa,Wa)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(bi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ti=-90,ei=1;class Yc extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new De(ti,ei,t,e);s.layers=this.layers,this.add(s);const r=new De(ti,ei,t,e);r.layers=this.layers,this.add(r);const a=new De(ti,ei,t,e);a.layers=this.layers,this.add(a);const o=new De(ti,ei,t,e);o.layers=this.layers,this.add(o);const l=new De(ti,ei,t,e);l.layers=this.layers,this.add(l);const c=new De(ti,ei,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class tl extends _e{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:di,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kc extends ce{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new tl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qt}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ii(5,5,5),r=new Re({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:Mn});r.uniforms.tEquirect.value=e;const a=new Ue(s,r),o=e.minFilter;return e.minFilter===On&&(e.minFilter=Qt),new Yc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const er=new F,$c=new F,jc=new Pt;class _n{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=er.subVectors(n,e).cross($c.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(er),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jc.getNormalMatrix(t),s=this.coplanarPoint(er).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new bs,es=new F;class el{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,a=new _n){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],x=s[10],p=s[11],m=s[12],E=s[13],y=s[14],b=s[15];if(n[0].setComponents(l-r,u-c,p-f,b-m).normalize(),n[1].setComponents(l+r,u+c,p+f,b+m).normalize(),n[2].setComponents(l+a,u+h,p+g,b+E).normalize(),n[3].setComponents(l-a,u-h,p-g,b-E).normalize(),n[4].setComponents(l-o,u-d,p-x,b-y).normalize(),e===ln)n[5].setComponents(l+o,u+d,p+x,b+y).normalize();else if(e===Ss)n[5].setComponents(o,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(t){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(es.x=s.normal.x>0?t.max.x:t.min.x,es.y=s.normal.y>0?t.max.y:t.min.y,es.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(es)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zc(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class kn extends $e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){const E=m*u-a;for(let y=0;y<c;y++){const b=y*d-r;g.push(b,-E,0),x.push(0,0,1),p.push(y/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){const y=E+c*m,b=E+c*(m+1),L=E+1+c*(m+1),w=E+1+c*m;f.push(y,b,w),f.push(b,L,w)}this.setIndex(f),this.setAttribute("position",new Bn(g,3)),this.setAttribute("normal",new Bn(x,3)),this.setAttribute("uv",new Bn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qc=`#ifdef USE_ALPHAHASH
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
#endif`,th=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ih=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sh=`#ifdef USE_AOMAP
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
#endif`,rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ah=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,oh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ch=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uh=`#ifdef USE_IRIDESCENCE
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
#endif`,dh=`#ifdef USE_BUMPMAP
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
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sh=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eh=`vec3 transformedNormal = objectNormal;
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
#endif`,Th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ch=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
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
}`,Ph=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lh=`#ifdef USE_ENVMAP
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
#endif`,Uh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ih=`#ifdef USE_ENVMAP
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
#endif`,Nh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Oh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zh=`#ifdef USE_GRADIENTMAP
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
}`,kh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vh=`uniform bool receiveShadow;
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
#endif`,Wh=`#ifdef USE_ENVMAP
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
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$h=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
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
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
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
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zh=`
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
#endif`,Jh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,su=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ru=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,au=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ou=`#if defined( USE_POINTS_UV )
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
#endif`,lu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,du=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fu=`#ifdef USE_MORPHTARGETS
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
#endif`,pu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mu=`#ifdef USE_NORMALMAP
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
#endif`,Su=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Au=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ru=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Du=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
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
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
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
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Iu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fu=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Ou=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bu=`#ifdef USE_SKINNING
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
#endif`,zu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ku=`#ifdef USE_SKINNING
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
#endif`,Hu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qu=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xu=`#ifdef USE_TRANSMISSION
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
#endif`,Yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ju=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ju=`uniform sampler2D t2D;
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
}`,Qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,td=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,id=`#include <common>
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
}`,sd=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rd=`#define DISTANCE
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
}`,ad=`#define DISTANCE
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
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ld=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cd=`uniform float scale;
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
}`,hd=`uniform vec3 diffuse;
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
}`,ud=`#include <common>
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
}`,dd=`uniform vec3 diffuse;
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
}`,fd=`#define LAMBERT
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
}`,pd=`#define LAMBERT
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
}`,md=`#define MATCAP
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
}`,gd=`#define MATCAP
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
}`,vd=`#define NORMAL
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
}`,_d=`#define NORMAL
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
}`,xd=`#define PHONG
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
}`,Md=`#define PHONG
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
}`,Sd=`#define STANDARD
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
}`,yd=`#define STANDARD
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
}`,Ed=`#define TOON
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
}`,Td=`#define TOON
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
}`,Ad=`uniform float size;
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
}`,bd=`uniform vec3 diffuse;
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
}`,wd=`#include <common>
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
}`,Rd=`uniform vec3 color;
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
}`,Cd=`uniform float rotation;
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
}`,Pd=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:Jc,alphahash_pars_fragment:Qc,alphamap_fragment:th,alphamap_pars_fragment:eh,alphatest_fragment:nh,alphatest_pars_fragment:ih,aomap_fragment:sh,aomap_pars_fragment:rh,batching_pars_vertex:ah,batching_vertex:oh,begin_vertex:lh,beginnormal_vertex:ch,bsdfs:hh,iridescence_fragment:uh,bumpmap_pars_fragment:dh,clipping_planes_fragment:fh,clipping_planes_pars_fragment:ph,clipping_planes_pars_vertex:mh,clipping_planes_vertex:gh,color_fragment:vh,color_pars_fragment:_h,color_pars_vertex:xh,color_vertex:Mh,common:Sh,cube_uv_reflection_fragment:yh,defaultnormal_vertex:Eh,displacementmap_pars_vertex:Th,displacementmap_vertex:Ah,emissivemap_fragment:bh,emissivemap_pars_fragment:wh,colorspace_fragment:Rh,colorspace_pars_fragment:Ch,envmap_fragment:Ph,envmap_common_pars_fragment:Dh,envmap_pars_fragment:Lh,envmap_pars_vertex:Uh,envmap_physical_pars_fragment:Wh,envmap_vertex:Ih,fog_vertex:Nh,fog_pars_vertex:Fh,fog_fragment:Oh,fog_pars_fragment:Bh,gradientmap_pars_fragment:zh,lightmap_pars_fragment:kh,lights_lambert_fragment:Hh,lights_lambert_pars_fragment:Gh,lights_pars_begin:Vh,lights_toon_fragment:qh,lights_toon_pars_fragment:Xh,lights_phong_fragment:Yh,lights_phong_pars_fragment:Kh,lights_physical_fragment:$h,lights_physical_pars_fragment:jh,lights_fragment_begin:Zh,lights_fragment_maps:Jh,lights_fragment_end:Qh,logdepthbuf_fragment:tu,logdepthbuf_pars_fragment:eu,logdepthbuf_pars_vertex:nu,logdepthbuf_vertex:iu,map_fragment:su,map_pars_fragment:ru,map_particle_fragment:au,map_particle_pars_fragment:ou,metalnessmap_fragment:lu,metalnessmap_pars_fragment:cu,morphinstance_vertex:hu,morphcolor_vertex:uu,morphnormal_vertex:du,morphtarget_pars_vertex:fu,morphtarget_vertex:pu,normal_fragment_begin:mu,normal_fragment_maps:gu,normal_pars_fragment:vu,normal_pars_vertex:_u,normal_vertex:xu,normalmap_pars_fragment:Mu,clearcoat_normal_fragment_begin:Su,clearcoat_normal_fragment_maps:yu,clearcoat_pars_fragment:Eu,iridescence_pars_fragment:Tu,opaque_fragment:Au,packing:bu,premultiplied_alpha_fragment:wu,project_vertex:Ru,dithering_fragment:Cu,dithering_pars_fragment:Pu,roughnessmap_fragment:Du,roughnessmap_pars_fragment:Lu,shadowmap_pars_fragment:Uu,shadowmap_pars_vertex:Iu,shadowmap_vertex:Nu,shadowmask_pars_fragment:Fu,skinbase_vertex:Ou,skinning_pars_vertex:Bu,skinning_vertex:zu,skinnormal_vertex:ku,specularmap_fragment:Hu,specularmap_pars_fragment:Gu,tonemapping_fragment:Vu,tonemapping_pars_fragment:Wu,transmission_fragment:qu,transmission_pars_fragment:Xu,uv_pars_fragment:Yu,uv_pars_vertex:Ku,uv_vertex:$u,worldpos_vertex:ju,background_vert:Zu,background_frag:Ju,backgroundCube_vert:Qu,backgroundCube_frag:td,cube_vert:ed,cube_frag:nd,depth_vert:id,depth_frag:sd,distanceRGBA_vert:rd,distanceRGBA_frag:ad,equirect_vert:od,equirect_frag:ld,linedashed_vert:cd,linedashed_frag:hd,meshbasic_vert:ud,meshbasic_frag:dd,meshlambert_vert:fd,meshlambert_frag:pd,meshmatcap_vert:md,meshmatcap_frag:gd,meshnormal_vert:vd,meshnormal_frag:_d,meshphong_vert:xd,meshphong_frag:Md,meshphysical_vert:Sd,meshphysical_frag:yd,meshtoon_vert:Ed,meshtoon_frag:Td,points_vert:Ad,points_frag:bd,shadow_vert:wd,shadow_frag:Rd,sprite_vert:Cd,sprite_frag:Pd},et={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},We={basic:{uniforms:me([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:me([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:me([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:me([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:me([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:me([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:me([et.points,et.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:me([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:me([et.common,et.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:me([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:me([et.sprite,et.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:me([et.common,et.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:me([et.lights,et.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};We.physical={uniforms:me([We.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const ns={r:0,b:0,g:0},Ln=new hn,Dd=new ee;function Ld(i,t,e,n,s,r,a){const o=new Yt(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function x(E){let y=!1;const b=g(E);b===null?m(o,l):b&&b.isColor&&(m(b,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===Ts)?(h===void 0&&(h=new Ue(new Ii(1,1,1),new Re({name:"BackgroundCubeMaterial",uniforms:gi(We.backgroundCube.uniforms),vertexShader:We.backgroundCube.vertexShader,fragmentShader:We.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ln.copy(y.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dd.makeRotationFromEuler(Ln)),h.material.toneMapped=Wt.getTransfer(b.colorSpace)!==Jt,(d!==b||u!==b.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=b,u=b.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ue(new kn(2,2),new Re({name:"BackgroundMaterial",uniforms:gi(We.background.uniforms),vertexShader:We.background.vertexShader,fragmentShader:We.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(b.colorSpace)!==Jt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,u=b.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,y){E.getRGB(ns,Jo(i)),n.buffers.color.setClear(ns.r,ns.g,ns.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(o,l)},render:x,addToRenderList:p}}function Ud(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(v,S,I,O,V){let K=!1;const k=d(O,I,S);r!==k&&(r=k,c(r.object)),K=f(v,O,I,V),K&&g(v,O,I,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,b(v,S,I,O),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,S,I){const O=I.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let K=V[S.id];K===void 0&&(K={},V[S.id]=K);let k=K[O];return k===void 0&&(k=u(l()),K[O]=k),k}function u(v){const S=[],I=[],O=[];for(let V=0;V<e;V++)S[V]=0,I[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:I,attributeDivisors:O,object:v,attributes:{},index:null}}function f(v,S,I,O){const V=r.attributes,K=S.attributes;let k=0;const j=I.getAttributes();for(const H in j)if(j[H].location>=0){const lt=V[H];let gt=K[H];if(gt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(gt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(gt=v.instanceColor)),lt===void 0||lt.attribute!==gt||gt&&lt.data!==gt.data)return!0;k++}return r.attributesNum!==k||r.index!==O}function g(v,S,I,O){const V={},K=S.attributes;let k=0;const j=I.getAttributes();for(const H in j)if(j[H].location>=0){let lt=K[H];lt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor));const gt={};gt.attribute=lt,lt&&lt.data&&(gt.data=lt.data),V[H]=gt,k++}r.attributes=V,r.attributesNum=k,r.index=O}function x(){const v=r.newAttributes;for(let S=0,I=v.length;S<I;S++)v[S]=0}function p(v){m(v,0)}function m(v,S){const I=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;I[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),V[v]!==S&&(i.vertexAttribDivisor(v,S),V[v]=S)}function E(){const v=r.newAttributes,S=r.enabledAttributes;for(let I=0,O=S.length;I<O;I++)S[I]!==v[I]&&(i.disableVertexAttribArray(I),S[I]=0)}function y(v,S,I,O,V,K,k){k===!0?i.vertexAttribIPointer(v,S,I,V,K):i.vertexAttribPointer(v,S,I,O,V,K)}function b(v,S,I,O){x();const V=O.attributes,K=I.getAttributes(),k=S.defaultAttributeValues;for(const j in K){const H=K[j];if(H.location>=0){let ot=V[j];if(ot===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),ot!==void 0){const lt=ot.normalized,gt=ot.itemSize,kt=t.get(ot);if(kt===void 0)continue;const qt=kt.buffer,q=kt.type,J=kt.bytesPerElement,pt=q===i.INT||q===i.UNSIGNED_INT||ot.gpuType===ia;if(ot.isInterleavedBufferAttribute){const ct=ot.data,Rt=ct.stride,St=ot.offset;if(ct.isInstancedInterleavedBuffer){for(let Nt=0;Nt<H.locationSize;Nt++)m(H.location+Nt,ct.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Nt=0;Nt<H.locationSize;Nt++)p(H.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let Nt=0;Nt<H.locationSize;Nt++)y(H.location+Nt,gt/H.locationSize,q,lt,Rt*J,(St+gt/H.locationSize*Nt)*J,pt)}else{if(ot.isInstancedBufferAttribute){for(let ct=0;ct<H.locationSize;ct++)m(H.location+ct,ot.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ct=0;ct<H.locationSize;ct++)p(H.location+ct);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let ct=0;ct<H.locationSize;ct++)y(H.location+ct,gt/H.locationSize,q,lt,gt*J,gt/H.locationSize*ct*J,pt)}}else if(k!==void 0){const lt=k[j];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(H.location,lt);break;case 3:i.vertexAttrib3fv(H.location,lt);break;case 4:i.vertexAttrib4fv(H.location,lt);break;default:i.vertexAttrib1fv(H.location,lt)}}}}E()}function L(){U();for(const v in n){const S=n[v];for(const I in S){const O=S[I];for(const V in O)h(O[V].object),delete O[V];delete S[I]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const S=n[v.id];for(const I in S){const O=S[I];for(const V in O)h(O[V].object),delete O[V];delete S[I]}delete n[v.id]}function T(v){for(const S in n){const I=n[S];if(I[v.id]===void 0)continue;const O=I[v.id];for(const V in O)h(O[V].object),delete O[V];delete I[v.id]}}function U(){W(),a=!0,r!==s&&(r=s,c(r.object))}function W(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:W,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:E}}function Id(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x];for(let x=0;x<u.length;x++)e.update(g,n,u[x])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Nd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Le&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const U=T===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ge&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ye&&!U)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:L,maxSamples:w}}function Fd(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new _n,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const E=r?0:n,y=E*4;let b=m.clippingState||null;l.value=b,b=h(g,u,y,f);for(let L=0;L!==y;++L)b[L]=e[L];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=f+x*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,b=f;y!==x;++y,b+=4)a.copy(d[y]).applyMatrix4(E,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Od(i){let t=new WeakMap;function e(a,o){return o===Mr?a.mapping=di:o===Sr&&(a.mapping=fi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mr||o===Sr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Kc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ws extends Qo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ri=4,Xa=[.125,.215,.35,.446,.526,.582],Nn=20,nr=new ws,Ya=new Yt;let ir=null,sr=0,rr=0,ar=!1;const In=(1+Math.sqrt(5))/2,ni=1/In,Ka=[new F(-In,ni,0),new F(In,ni,0),new F(-ni,0,In),new F(ni,0,In),new F(0,In,-ni),new F(0,In,ni),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class $a{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel(),ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Za(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ir,sr,rr),this._renderer.xr.enabled=ar,t.scissorTest=!1,is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===di||t.mapping===fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel(),ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Hn,format:Le,colorSpace:An,depthBuffer:!1},s=ja(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ja(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bd(r)),this._blurMaterial=zd(r,t,e)}return s}_compileMaterial(t){const e=new Ue(this._lodPlanes[0],t);this._renderer.compile(e,nr)}_sceneToCubeUV(t,e,n,s){const o=new De(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ya),h.toneMapping=Sn,h.autoClear=!1;const f=new $o({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),g=new Ue(new Ii,f);let x=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(Ya),x=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):E===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const y=this._cubeSize;is(s,E*y,m>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===di||t.mapping===fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Za());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ue(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;is(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,nr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ka[(s-r-1)%Ka.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ue(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Nn-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Nn;p>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Nn}`);const m=[];let E=0;for(let T=0;T<Nn;++T){const U=T/x,W=Math.exp(-U*U/2);m.push(W),T===0?E+=W:T<p&&(E+=2*W)}for(let T=0;T<m.length;T++)m[T]=m[T]/E;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const b=this._sizeLods[s],L=3*b*(s>y-ri?s-y+ri:0),w=4*(this._cubeSize-b);is(e,L,w,3*b,2*b),l.setRenderTarget(e),l.render(d,nr)}}function Bd(i){const t=[],e=[],n=[];let s=i;const r=i-ri+1+Xa.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ri?l=Xa[a-i+ri-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,p=2,m=1,E=new Float32Array(x*g*f),y=new Float32Array(p*g*f),b=new Float32Array(m*g*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,U=w>2?0:-1,W=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];E.set(W,x*g*w),y.set(u,p*g*w);const v=[w,w,w,w,w,w];b.set(v,m*g*w)}const L=new $e;L.setAttribute("position",new re(E,x)),L.setAttribute("uv",new re(y,p)),L.setAttribute("faceIndex",new re(b,m)),t.push(L),s>ri&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ja(i,t,e){const n=new ce(i,t,e);return n.texture.mapping=Ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function is(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function zd(i,t,e){const n=new Float32Array(Nn),s=new F(0,1,0);return new Re({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fa(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Za(){return new Re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ja(){return new Re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function fa(){return`

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
	`}function kd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Mr||l===Sr,h=l===di||l===fi;if(c||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new $a(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new $a(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Hd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ps("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gd(i,t,e,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const x=f[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let x=0;if(f!==null){const E=f.array;x=f.version;for(let y=0,b=E.length;y<b;y+=3){const L=E[y+0],w=E[y+1],T=E[y+2];u.push(L,w,w,T,T,L)}}else if(g!==void 0){const E=g.array;x=g.version;for(let y=0,b=E.length/3-1;y<b;y+=3){const L=y+0,w=y+1,T=y+2;u.push(L,w,w,T,T,L)}}else return;const p=new(qo(u)?Zo:jo)(u,1);p.version=x;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Vd(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*a,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function d(u,f,g,x){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/a,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,x,0,g);let m=0;for(let E=0;E<g;E++)m+=f[E];for(let E=0;E<x.length;E++)e.update(m,n,x[E])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Wd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qd(i,t,e){const n=new WeakMap,s=new wt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let v=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),x===!0&&(b=2),p===!0&&(b=3);let L=o.attributes.position.count*b,w=1;L>t.maxTextureSize&&(w=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const T=new Float32Array(L*w*4*d),U=new Yo(T,L,w,d);U.type=Ye,U.needsUpdate=!0;const W=b*4;for(let S=0;S<d;S++){const I=m[S],O=E[S],V=y[S],K=L*w*4*S;for(let k=0;k<I.count;k++){const j=k*W;g===!0&&(s.fromBufferAttribute(I,k),T[K+j+0]=s.x,T[K+j+1]=s.y,T[K+j+2]=s.z,T[K+j+3]=0),x===!0&&(s.fromBufferAttribute(O,k),T[K+j+4]=s.x,T[K+j+5]=s.y,T[K+j+6]=s.z,T[K+j+7]=0),p===!0&&(s.fromBufferAttribute(V,k),T[K+j+8]=s.x,T[K+j+9]=s.y,T[K+j+10]=s.z,T[K+j+11]=V.itemSize===4?s.w:1)}}u={count:d,texture:U,size:new Lt(L,w)},n.set(o,u),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Xd(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class il extends _e{constructor(t,e,n,s,r,a,o,l,c,h=li){if(h!==li&&h!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===li&&(n=zn),n===void 0&&h===mi&&(n=pi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:fe,this.minFilter=l!==void 0?l:fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const sl=new _e,Qa=new il(1,1),rl=new Yo,al=new Lc,ol=new tl,to=[],eo=[],no=new Float32Array(16),io=new Float32Array(9),so=new Float32Array(4);function xi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=to[s];if(r===void 0&&(r=new Float32Array(s),to[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rs(i,t){let e=eo[t];e===void 0&&(e=new Int32Array(t),eo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Kd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2fv(this.addr,t),oe(e,t)}}function $d(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ae(e,t))return;i.uniform3fv(this.addr,t),oe(e,t)}}function jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4fv(this.addr,t),oe(e,t)}}function Zd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;so.set(n),i.uniformMatrix2fv(this.addr,!1,so),oe(e,n)}}function Jd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;io.set(n),i.uniformMatrix3fv(this.addr,!1,io),oe(e,n)}}function Qd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),oe(e,t)}else{if(ae(e,n))return;no.set(n),i.uniformMatrix4fv(this.addr,!1,no),oe(e,n)}}function tf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ef(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2iv(this.addr,t),oe(e,t)}}function nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;i.uniform3iv(this.addr,t),oe(e,t)}}function sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4iv(this.addr,t),oe(e,t)}}function rf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ae(e,t))return;i.uniform2uiv(this.addr,t),oe(e,t)}}function of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ae(e,t))return;i.uniform3uiv(this.addr,t),oe(e,t)}}function lf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ae(e,t))return;i.uniform4uiv(this.addr,t),oe(e,t)}}function cf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qa.compareFunction=Wo,r=Qa):r=sl,e.setTexture2D(t||r,s)}function hf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||al,s)}function uf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ol,s)}function df(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rl,s)}function ff(i){switch(i){case 5126:return Yd;case 35664:return Kd;case 35665:return $d;case 35666:return jd;case 35674:return Zd;case 35675:return Jd;case 35676:return Qd;case 5124:case 35670:return tf;case 35667:case 35671:return ef;case 35668:case 35672:return nf;case 35669:case 35673:return sf;case 5125:return rf;case 36294:return af;case 36295:return of;case 36296:return lf;case 35678:case 36198:case 36298:case 36306:case 35682:return cf;case 35679:case 36299:case 36307:return hf;case 35680:case 36300:case 36308:case 36293:return uf;case 36289:case 36303:case 36311:case 36292:return df}}function pf(i,t){i.uniform1fv(this.addr,t)}function mf(i,t){const e=xi(t,this.size,2);i.uniform2fv(this.addr,e)}function gf(i,t){const e=xi(t,this.size,3);i.uniform3fv(this.addr,e)}function vf(i,t){const e=xi(t,this.size,4);i.uniform4fv(this.addr,e)}function _f(i,t){const e=xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xf(i,t){const e=xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mf(i,t){const e=xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Sf(i,t){i.uniform1iv(this.addr,t)}function yf(i,t){i.uniform2iv(this.addr,t)}function Ef(i,t){i.uniform3iv(this.addr,t)}function Tf(i,t){i.uniform4iv(this.addr,t)}function Af(i,t){i.uniform1uiv(this.addr,t)}function bf(i,t){i.uniform2uiv(this.addr,t)}function wf(i,t){i.uniform3uiv(this.addr,t)}function Rf(i,t){i.uniform4uiv(this.addr,t)}function Cf(i,t,e){const n=this.cache,s=t.length,r=Rs(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||sl,r[a])}function Pf(i,t,e){const n=this.cache,s=t.length,r=Rs(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||al,r[a])}function Df(i,t,e){const n=this.cache,s=t.length,r=Rs(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ol,r[a])}function Lf(i,t,e){const n=this.cache,s=t.length,r=Rs(e,s);ae(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||rl,r[a])}function Uf(i){switch(i){case 5126:return pf;case 35664:return mf;case 35665:return gf;case 35666:return vf;case 35674:return _f;case 35675:return xf;case 35676:return Mf;case 5124:case 35670:return Sf;case 35667:case 35671:return yf;case 35668:case 35672:return Ef;case 35669:case 35673:return Tf;case 5125:return Af;case 36294:return bf;case 36295:return wf;case 36296:return Rf;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return Df;case 36289:case 36303:case 36311:case 36292:return Lf}}class If{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ff(e.type)}}class Nf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Uf(e.type)}}class Ff{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const or=/(\w+)(\])?(\[|\.)?/g;function ro(i,t){i.seq.push(t),i.map[t.id]=t}function Of(i,t,e){const n=i.name,s=n.length;for(or.lastIndex=0;;){const r=or.exec(n),a=or.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ro(e,c===void 0?new If(o,i,t):new Nf(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Ff(o),ro(e,d)),e=d}}}class ms{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Of(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ao(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Bf=37297;let zf=0;function kf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Hf(i){const t=Wt.getPrimaries(Wt.workingColorSpace),e=Wt.getPrimaries(i);let n;switch(t===e?n="":t===xs&&e===_s?n="LinearDisplayP3ToLinearSRGB":t===_s&&e===xs&&(n="LinearSRGBToLinearDisplayP3"),i){case An:case As:return[n,"LinearTransferOETF"];case Ve:case ca:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function oo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+kf(i.getShaderSource(t),a)}else return s}function Gf(i,t){const e=Hf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Vf(i,t){let e;switch(t){case Gl:e="Linear";break;case Vl:e="Reinhard";break;case Wl:e="Cineon";break;case ql:e="ACESFilmic";break;case Yl:e="AgX";break;case Kl:e="Neutral";break;case Xl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ss=new F;function Wf(){Wt.getLuminanceCoefficients(ss);const i=ss.x.toFixed(4),t=ss.y.toFixed(4),e=ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ai).join(`
`)}function Xf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ai(i){return i!==""}function lo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function co(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kf=/^[ \t]*#include +<([\w\d./]+)>/gm;function jr(i){return i.replace(Kf,jf)}const $f=new Map;function jf(i,t){let e=Dt[t];if(e===void 0){const n=$f.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jr(e)}const Zf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ho(i){return i.replace(Zf,Jf)}function Jf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uo(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Do?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===El?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===sn&&(t="SHADOWMAP_TYPE_VSM"),t}function tp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case di:case fi:t="ENVMAP_TYPE_CUBE";break;case Ts:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ep(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fi:t="ENVMAP_MODE_REFRACTION";break}return t}function np(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lo:t="ENVMAP_BLENDING_MULTIPLY";break;case kl:t="ENVMAP_BLENDING_MIX";break;case Hl:t="ENVMAP_BLENDING_ADD";break}return t}function ip(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function sp(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Qf(e),c=tp(e),h=ep(e),d=np(e),u=ip(e),f=qf(e),g=Xf(r),x=s.createProgram();let p,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ai).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ai).join(`
`),m.length>0&&(m+=`
`)):(p=[uo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),m=[uo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?Vf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,Gf("linearToOutputTexel",e.outputColorSpace),Wf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ai).join(`
`)),a=jr(a),a=lo(a,e),a=co(a,e),o=jr(o),o=lo(o,e),o=co(o,e),a=ho(a),o=ho(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Ms?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ms?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=E+p+a,b=E+m+o,L=ao(s,s.VERTEX_SHADER,y),w=ao(s,s.FRAGMENT_SHADER,b);s.attachShader(x,L),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(S){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(L).trim(),V=s.getShaderInfoLog(w).trim();let K=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,L,w);else{const j=oo(s,L,"vertex"),H=oo(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+I+`
`+j+`
`+H)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(O===""||V==="")&&(k=!1);k&&(S.diagnostics={runnable:K,programLog:I,vertexShader:{log:O,prefix:p},fragmentShader:{log:V,prefix:m}})}s.deleteShader(L),s.deleteShader(w),U=new ms(s,x),W=Yf(s,x)}let U;this.getUniforms=function(){return U===void 0&&T(this),U};let W;this.getAttributes=function(){return W===void 0&&T(this),W};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,Bf)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zf++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=w,this}let rp=0;class ap{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new op(t),e.set(t,n)),n}}class op{constructor(t){this.id=rp++,this.code=t,this.usedTimes=0}}function lp(i,t,e,n,s,r,a){const o=new da,l=new ap,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,I,O,V){const K=O.fog,k=V.geometry,j=v.isMeshStandardMaterial?O.environment:null,H=(v.isMeshStandardMaterial?e:t).get(v.envMap||j),ot=H&&H.mapping===Ts?H.image.height:null,lt=x[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const gt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,kt=gt!==void 0?gt.length:0;let qt=0;k.morphAttributes.position!==void 0&&(qt=1),k.morphAttributes.normal!==void 0&&(qt=2),k.morphAttributes.color!==void 0&&(qt=3);let q,J,pt,ct;if(lt){const Me=We[lt];q=Me.vertexShader,J=Me.fragmentShader}else q=v.vertexShader,J=v.fragmentShader,l.update(v),pt=l.getVertexShaderID(v),ct=l.getFragmentShaderID(v);const Rt=i.getRenderTarget(),St=V.isInstancedMesh===!0,Nt=V.isBatchedMesh===!0,Kt=!!v.map,Ft=!!v.matcap,R=!!H,Ee=!!v.aoMap,Ut=!!v.lightMap,Bt=!!v.bumpMap,Et=!!v.normalMap,jt=!!v.displacementMap,bt=!!v.emissiveMap,A=!!v.metalnessMap,_=!!v.roughnessMap,N=v.anisotropy>0,Y=v.clearcoat>0,Z=v.dispersion>0,X=v.iridescence>0,vt=v.sheen>0,nt=v.transmission>0,ht=N&&!!v.anisotropyMap,zt=Y&&!!v.clearcoatMap,Q=Y&&!!v.clearcoatNormalMap,ut=Y&&!!v.clearcoatRoughnessMap,Tt=X&&!!v.iridescenceMap,At=X&&!!v.iridescenceThicknessMap,dt=vt&&!!v.sheenColorMap,It=vt&&!!v.sheenRoughnessMap,Ct=!!v.specularMap,$t=!!v.specularColorMap,C=!!v.specularIntensityMap,rt=nt&&!!v.transmissionMap,G=nt&&!!v.thicknessMap,$=!!v.gradientMap,it=!!v.alphaMap,at=v.alphaTest>0,Ot=!!v.alphaHash,ie=!!v.extensions;let xe=Sn;v.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(xe=i.toneMapping);const Ht={shaderID:lt,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:J,defines:v.defines,customVertexShaderID:pt,customFragmentShaderID:ct,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Nt,batchingColor:Nt&&V._colorsTexture!==null,instancing:St,instancingColor:St&&V.instanceColor!==null,instancingMorph:St&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Rt===null?i.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:An,alphaToCoverage:!!v.alphaToCoverage,map:Kt,matcap:Ft,envMap:R,envMapMode:R&&H.mapping,envMapCubeUVHeight:ot,aoMap:Ee,lightMap:Ut,bumpMap:Bt,normalMap:Et,displacementMap:f&&jt,emissiveMap:bt,normalMapObjectSpace:Et&&v.normalMapType===Ql,normalMapTangentSpace:Et&&v.normalMapType===Jl,metalnessMap:A,roughnessMap:_,anisotropy:N,anisotropyMap:ht,clearcoat:Y,clearcoatMap:zt,clearcoatNormalMap:Q,clearcoatRoughnessMap:ut,dispersion:Z,iridescence:X,iridescenceMap:Tt,iridescenceThicknessMap:At,sheen:vt,sheenColorMap:dt,sheenRoughnessMap:It,specularMap:Ct,specularColorMap:$t,specularIntensityMap:C,transmission:nt,transmissionMap:rt,thicknessMap:G,gradientMap:$,opaque:v.transparent===!1&&v.blending===oi&&v.alphaToCoverage===!1,alphaMap:it,alphaTest:at,alphaHash:Ot,combine:v.combine,mapUv:Kt&&p(v.map.channel),aoMapUv:Ee&&p(v.aoMap.channel),lightMapUv:Ut&&p(v.lightMap.channel),bumpMapUv:Bt&&p(v.bumpMap.channel),normalMapUv:Et&&p(v.normalMap.channel),displacementMapUv:jt&&p(v.displacementMap.channel),emissiveMapUv:bt&&p(v.emissiveMap.channel),metalnessMapUv:A&&p(v.metalnessMap.channel),roughnessMapUv:_&&p(v.roughnessMap.channel),anisotropyMapUv:ht&&p(v.anisotropyMap.channel),clearcoatMapUv:zt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Q&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:At&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:It&&p(v.sheenRoughnessMap.channel),specularMapUv:Ct&&p(v.specularMap.channel),specularColorMapUv:$t&&p(v.specularColorMap.channel),specularIntensityMapUv:C&&p(v.specularIntensityMap.channel),transmissionMapUv:rt&&p(v.transmissionMap.channel),thicknessMapUv:G&&p(v.thicknessMap.channel),alphaMapUv:it&&p(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Et||N),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!k.attributes.uv&&(Kt||it),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:V.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:kt,morphTextureStride:qt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:Kt&&v.map.isVideoTexture===!0&&Wt.getTransfer(v.map.colorSpace)===Jt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===qe,flipSided:v.side===Se,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function E(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)S.push(I),S.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(y(S,v),b(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function y(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function b(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),v.push(o.mask)}function L(v){const S=x[v.type];let I;if(S){const O=We[S];I=Wc.clone(O.uniforms)}else I=v.uniforms;return I}function w(v,S){let I;for(let O=0,V=h.length;O<V;O++){const K=h[O];if(K.cacheKey===S){I=K,++I.usedTimes;break}}return I===void 0&&(I=new sp(i,S,v,r),h.push(I)),I}function T(v){if(--v.usedTimes===0){const S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function U(v){l.remove(v)}function W(){l.dispose()}return{getParameters:m,getProgramCacheKey:E,getUniforms:L,acquireProgram:w,releaseProgram:T,releaseShaderCache:U,programs:h,dispose:W}}function cp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function hp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function fo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function po(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,f,g,x,p){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},i[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=x,m.group=p),t++,m}function o(d,u,f,g,x,p){const m=a(d,u,f,g,x,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(d,u,f,g,x,p){const m=a(d,u,f,g,x,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(d,u){e.length>1&&e.sort(d||hp),n.length>1&&n.sort(u||fo),s.length>1&&s.sort(u||fo)}function h(){for(let d=t,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function up(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new po,i.set(n,[a])):s>=r.length?(a=new po,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function dp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Yt};break;case"SpotLight":e={position:new F,direction:new F,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function fp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let pp=0;function mp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function gp(i){const t=new dp,e=fp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,r=new ee,a=new ee;function o(c){let h=0,d=0,u=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,E=0,y=0,b=0,L=0,w=0,T=0;c.sort(mp);for(let W=0,v=c.length;W<v;W++){const S=c[W],I=S.color,O=S.intensity,V=S.distance,K=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=I.r*O,d+=I.g*O,u+=I.b*O;else if(S.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(S.sh.coefficients[k],O);T++}else if(S.isDirectionalLight){const k=t.get(S);if(k.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const j=S.shadow,H=e.get(S);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=S.shadow.matrix,E++}n.directional[f]=k,f++}else if(S.isSpotLight){const k=t.get(S);k.position.setFromMatrixPosition(S.matrixWorld),k.color.copy(I).multiplyScalar(O),k.distance=V,k.coneCos=Math.cos(S.angle),k.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),k.decay=S.decay,n.spot[x]=k;const j=S.shadow;if(S.map&&(n.spotLightMap[L]=S.map,L++,j.updateMatrices(S),S.castShadow&&w++),n.spotLightMatrix[x]=j.matrix,S.castShadow){const H=e.get(S);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=K,b++}x++}else if(S.isRectAreaLight){const k=t.get(S);k.color.copy(I).multiplyScalar(O),k.halfWidth.set(S.width*.5,0,0),k.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=k,p++}else if(S.isPointLight){const k=t.get(S);if(k.color.copy(S.color).multiplyScalar(S.intensity),k.distance=S.distance,k.decay=S.decay,S.castShadow){const j=S.shadow,H=e.get(S);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=S.shadow.matrix,y++}n.point[g]=k,g++}else if(S.isHemisphereLight){const k=t.get(S);k.skyColor.copy(S.color).multiplyScalar(O),k.groundColor.copy(S.groundColor).multiplyScalar(O),n.hemi[m]=k,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==p||U.hemiLength!==m||U.numDirectionalShadows!==E||U.numPointShadows!==y||U.numSpotShadows!==b||U.numSpotMaps!==L||U.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+L-w,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,U.directionalLength=f,U.pointLength=g,U.spotLength=x,U.rectAreaLength=p,U.hemiLength=m,U.numDirectionalShadows=E,U.numPointShadows=y,U.numSpotShadows=b,U.numSpotMaps=L,U.numLightProbes=T,n.version=pp++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0;const p=h.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){const y=c[m];if(y.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(y.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const b=n.point[u];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function mo(i){const t=new gp(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function vp(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new mo(i),t.set(s,[o])):r>=a.length?(o=new mo(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class _p extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xp extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Mp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sp=`uniform sampler2D shadow_pass;
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
}`;function yp(i,t,e){let n=new el;const s=new Lt,r=new Lt,a=new wt,o=new _p({depthPacking:Zl}),l=new xp,c={},h=e.maxTextureSize,d={[Tn]:Se,[Se]:Tn,[qe]:qe},u=new Re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Mp,fragmentShader:Sp}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new $e;g.setAttribute("position",new re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ue(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Do;let m=this.type;this.render=function(w,T,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const W=i.getRenderTarget(),v=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Mn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=m!==sn&&this.type===sn,V=m===sn&&this.type!==sn;for(let K=0,k=w.length;K<k;K++){const j=w[K],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ot=H.getFrameExtents();if(s.multiply(ot),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,H.mapSize.y=r.y)),H.map===null||O===!0||V===!0){const gt=this.type!==sn?{minFilter:fe,magFilter:fe}:{};H.map!==null&&H.map.dispose(),H.map=new ce(s.x,s.y,gt),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const lt=H.getViewportCount();for(let gt=0;gt<lt;gt++){const kt=H.getViewport(gt);a.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),I.viewport(a),H.updateMatrices(j,gt),n=H.getFrustum(),b(T,U,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===sn&&E(H,U),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(W,v,S)};function E(w,T){const U=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ce(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,U,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,U,f,x,null)}function y(w,T,U,W){let v=null;const S=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(S!==void 0)v=S;else if(v=U.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=v.uuid,O=T.uuid;let V=c[I];V===void 0&&(V={},c[I]=V);let K=V[O];K===void 0&&(K=v.clone(),V[O]=K,T.addEventListener("dispose",L)),v=K}if(v.visible=T.visible,v.wireframe=T.wireframe,W===sn?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:d[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=i.properties.get(v);I.light=U}return v}function b(w,T,U,W,v){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===sn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const O=t.update(w),V=w.material;if(Array.isArray(V)){const K=O.groups;for(let k=0,j=K.length;k<j;k++){const H=K[k],ot=V[H.materialIndex];if(ot&&ot.visible){const lt=y(w,ot,W,v);w.onBeforeShadow(i,w,T,U,O,lt,H),i.renderBufferDirect(U,null,O,lt,w,H),w.onAfterShadow(i,w,T,U,O,lt,H)}}}else if(V.visible){const K=y(w,V,W,v);w.onBeforeShadow(i,w,T,U,O,K,null),i.renderBufferDirect(U,null,O,K,w,null),w.onAfterShadow(i,w,T,U,O,K,null)}}const I=w.children;for(let O=0,V=I.length;O<V;O++)b(I[O],T,U,W,v)}function L(w){w.target.removeEventListener("dispose",L);for(const U in c){const W=c[U],v=w.target.uuid;v in W&&(W[v].dispose(),delete W[v])}}}const Ep={[fr]:pr,[mr]:_r,[gr]:xr,[ui]:vr,[pr]:fr,[_r]:mr,[xr]:gr,[vr]:ui};function Tp(i){function t(){let C=!1;const rt=new wt;let G=null;const $=new wt(0,0,0,0);return{setMask:function(it){G!==it&&!C&&(i.colorMask(it,it,it,it),G=it)},setLocked:function(it){C=it},setClear:function(it,at,Ot,ie,xe){xe===!0&&(it*=ie,at*=ie,Ot*=ie),rt.set(it,at,Ot,ie),$.equals(rt)===!1&&(i.clearColor(it,at,Ot,ie),$.copy(rt))},reset:function(){C=!1,G=null,$.set(-1,0,0,0)}}}function e(){let C=!1,rt=!1,G=null,$=null,it=null;return{setReversed:function(at){rt=at},setTest:function(at){at?pt(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(at){G!==at&&!C&&(i.depthMask(at),G=at)},setFunc:function(at){if(rt&&(at=Ep[at]),$!==at){switch(at){case fr:i.depthFunc(i.NEVER);break;case pr:i.depthFunc(i.ALWAYS);break;case mr:i.depthFunc(i.LESS);break;case ui:i.depthFunc(i.LEQUAL);break;case gr:i.depthFunc(i.EQUAL);break;case vr:i.depthFunc(i.GEQUAL);break;case _r:i.depthFunc(i.GREATER);break;case xr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=at}},setLocked:function(at){C=at},setClear:function(at){it!==at&&(i.clearDepth(at),it=at)},reset:function(){C=!1,G=null,$=null,it=null}}}function n(){let C=!1,rt=null,G=null,$=null,it=null,at=null,Ot=null,ie=null,xe=null;return{setTest:function(Ht){C||(Ht?pt(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(Ht){rt!==Ht&&!C&&(i.stencilMask(Ht),rt=Ht)},setFunc:function(Ht,Me,je){(G!==Ht||$!==Me||it!==je)&&(i.stencilFunc(Ht,Me,je),G=Ht,$=Me,it=je)},setOp:function(Ht,Me,je){(at!==Ht||Ot!==Me||ie!==je)&&(i.stencilOp(Ht,Me,je),at=Ht,Ot=Me,ie=je)},setLocked:function(Ht){C=Ht},setClear:function(Ht){xe!==Ht&&(i.clearStencil(Ht),xe=Ht)},reset:function(){C=!1,rt=null,G=null,$=null,it=null,at=null,Ot=null,ie=null,xe=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],f=null,g=!1,x=null,p=null,m=null,E=null,y=null,b=null,L=null,w=new Yt(0,0,0),T=0,U=!1,W=null,v=null,S=null,I=null,O=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,k=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=k>=1):j.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=k>=2);let H=null,ot={};const lt=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),kt=new wt().fromArray(lt),qt=new wt().fromArray(gt);function q(C,rt,G,$){const it=new Uint8Array(4),at=i.createTexture();i.bindTexture(C,at),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<G;Ot++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(rt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return at}const J={};J[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),r.setFunc(ui),Ut(!1),Bt(ya),pt(i.CULL_FACE),R(Mn);function pt(C){c[C]!==!0&&(i.enable(C),c[C]=!0)}function ct(C){c[C]!==!1&&(i.disable(C),c[C]=!1)}function Rt(C,rt){return h[C]!==rt?(i.bindFramebuffer(C,rt),h[C]=rt,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=rt),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function St(C,rt){let G=u,$=!1;if(C){G=d.get(rt),G===void 0&&(G=[],d.set(rt,G));const it=C.textures;if(G.length!==it.length||G[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Ot=it.length;at<Ot;at++)G[at]=i.COLOR_ATTACHMENT0+at;G.length=it.length,$=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,$=!0);$&&i.drawBuffers(G)}function Nt(C){return f!==C?(i.useProgram(C),f=C,!0):!1}const Kt={[rn]:i.FUNC_ADD,[Tl]:i.FUNC_SUBTRACT,[Al]:i.FUNC_REVERSE_SUBTRACT};Kt[bl]=i.MIN,Kt[wl]=i.MAX;const Ft={[Rl]:i.ZERO,[on]:i.ONE,[Cl]:i.SRC_COLOR,[ur]:i.SRC_ALPHA,[Nl]:i.SRC_ALPHA_SATURATE,[Ul]:i.DST_COLOR,[Dl]:i.DST_ALPHA,[Pl]:i.ONE_MINUS_SRC_COLOR,[dr]:i.ONE_MINUS_SRC_ALPHA,[Il]:i.ONE_MINUS_DST_COLOR,[Ll]:i.ONE_MINUS_DST_ALPHA,[Fl]:i.CONSTANT_COLOR,[Ol]:i.ONE_MINUS_CONSTANT_COLOR,[Bl]:i.CONSTANT_ALPHA,[zl]:i.ONE_MINUS_CONSTANT_ALPHA};function R(C,rt,G,$,it,at,Ot,ie,xe,Ht){if(C===Mn){g===!0&&(ct(i.BLEND),g=!1);return}if(g===!1&&(pt(i.BLEND),g=!0),C!==na){if(C!==x||Ht!==U){if((p!==rn||y!==rn)&&(i.blendEquation(i.FUNC_ADD),p=rn,y=rn),Ht)switch(C){case oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ea:i.blendFunc(i.ONE,i.ONE);break;case Ta:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Aa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ea:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ta:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Aa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}m=null,E=null,b=null,L=null,w.set(0,0,0),T=0,x=C,U=Ht}return}it=it||rt,at=at||G,Ot=Ot||$,(rt!==p||it!==y)&&(i.blendEquationSeparate(Kt[rt],Kt[it]),p=rt,y=it),(G!==m||$!==E||at!==b||Ot!==L)&&(i.blendFuncSeparate(Ft[G],Ft[$],Ft[at],Ft[Ot]),m=G,E=$,b=at,L=Ot),(ie.equals(w)===!1||xe!==T)&&(i.blendColor(ie.r,ie.g,ie.b,xe),w.copy(ie),T=xe),x=C,U=!1}function Ee(C,rt){C.side===qe?ct(i.CULL_FACE):pt(i.CULL_FACE);let G=C.side===Se;rt&&(G=!G),Ut(G),C.blending===oi&&C.transparent===!1?R(Mn):R(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),s.setMask(C.colorWrite);const $=C.stencilWrite;a.setTest($),$&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),jt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(C){W!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),W=C)}function Bt(C){C!==Sl?(pt(i.CULL_FACE),C!==v&&(C===ya?i.cullFace(i.BACK):C===yl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),v=C}function Et(C){C!==S&&(K&&i.lineWidth(C),S=C)}function jt(C,rt,G){C?(pt(i.POLYGON_OFFSET_FILL),(I!==rt||O!==G)&&(i.polygonOffset(rt,G),I=rt,O=G)):ct(i.POLYGON_OFFSET_FILL)}function bt(C){C?pt(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function A(C){C===void 0&&(C=i.TEXTURE0+V-1),H!==C&&(i.activeTexture(C),H=C)}function _(C,rt,G){G===void 0&&(H===null?G=i.TEXTURE0+V-1:G=H);let $=ot[G];$===void 0&&($={type:void 0,texture:void 0},ot[G]=$),($.type!==C||$.texture!==rt)&&(H!==G&&(i.activeTexture(G),H=G),i.bindTexture(C,rt||J[C]),$.type=C,$.texture=rt)}function N(){const C=ot[H];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function nt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function zt(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function At(C){kt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),kt.copy(C))}function dt(C){qt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),qt.copy(C))}function It(C,rt){let G=l.get(rt);G===void 0&&(G=new WeakMap,l.set(rt,G));let $=G.get(C);$===void 0&&($=i.getUniformBlockIndex(rt,C.name),G.set(C,$))}function Ct(C,rt){const $=l.get(rt).get(C);o.get(rt)!==$&&(i.uniformBlockBinding(rt,$,C.__bindingPointIndex),o.set(rt,$))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,ot={},h={},d=new WeakMap,u=[],f=null,g=!1,x=null,p=null,m=null,E=null,y=null,b=null,L=null,w=new Yt(0,0,0),T=0,U=!1,W=null,v=null,S=null,I=null,O=null,kt.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:pt,disable:ct,bindFramebuffer:Rt,drawBuffers:St,useProgram:Nt,setBlending:R,setMaterial:Ee,setFlipSided:Ut,setCullFace:Bt,setLineWidth:Et,setPolygonOffset:jt,setScissorTest:bt,activeTexture:A,bindTexture:_,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:ut,texImage3D:Tt,updateUBOMapping:It,uniformBlockBinding:Ct,texStorage2D:zt,texStorage3D:Q,texSubImage2D:X,texSubImage3D:vt,compressedTexSubImage2D:nt,compressedTexSubImage3D:ht,scissor:At,viewport:dt,reset:$t}}function go(i,t,e,n){const s=Ap(n);switch(e){case Oo:return i*t;case zo:return i*t;case ko:return i*t*2;case Ho:return i*t/s.components*s.byteLength;case aa:return i*t/s.components*s.byteLength;case Go:return i*t*2/s.components*s.byteLength;case oa:return i*t*2/s.components*s.byteLength;case Bo:return i*t*3/s.components*s.byteLength;case Le:return i*t*4/s.components*s.byteLength;case la:return i*t*4/s.components*s.byteLength;case cs:case hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case us:case ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ar:case wr:return Math.max(i,16)*Math.max(t,8)/4;case Tr:case br:return Math.max(i,8)*Math.max(t,8)/2;case Rr:case Cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ur:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ir:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Nr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Or:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Br:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case kr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Hr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Gr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fs:case qr:case Xr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vo:case Yr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Kr:case $r:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ap(i){switch(i){case Ge:case Io:return{byteLength:1,components:1};case Ri:case No:case Hn:return{byteLength:2,components:1};case sa:case ra:return{byteLength:2,components:4};case zn:case ia:case Ye:return{byteLength:4,components:1};case Fo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function bp(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return f?new OffscreenCanvas(A,_):ys("canvas")}function x(A,_,N){let Y=1;const Z=bt(A);if((Z.width>N||Z.height>N)&&(Y=N/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(Y*Z.width),vt=Math.floor(Y*Z.height);d===void 0&&(d=g(X,vt));const nt=_?g(X,vt):d;return nt.width=X,nt.height=vt,nt.getContext("2d").drawImage(A,0,0,X,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+vt+")."),nt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==fe&&A.minFilter!==Qt}function m(A){i.generateMipmap(A)}function E(A,_,N,Y,Z=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=_;if(_===i.RED&&(N===i.FLOAT&&(X=i.R32F),N===i.HALF_FLOAT&&(X=i.R16F),N===i.UNSIGNED_BYTE&&(X=i.R8)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.R8UI),N===i.UNSIGNED_SHORT&&(X=i.R16UI),N===i.UNSIGNED_INT&&(X=i.R32UI),N===i.BYTE&&(X=i.R8I),N===i.SHORT&&(X=i.R16I),N===i.INT&&(X=i.R32I)),_===i.RG&&(N===i.FLOAT&&(X=i.RG32F),N===i.HALF_FLOAT&&(X=i.RG16F),N===i.UNSIGNED_BYTE&&(X=i.RG8)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RG8UI),N===i.UNSIGNED_SHORT&&(X=i.RG16UI),N===i.UNSIGNED_INT&&(X=i.RG32UI),N===i.BYTE&&(X=i.RG8I),N===i.SHORT&&(X=i.RG16I),N===i.INT&&(X=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGB8UI),N===i.UNSIGNED_SHORT&&(X=i.RGB16UI),N===i.UNSIGNED_INT&&(X=i.RGB32UI),N===i.BYTE&&(X=i.RGB8I),N===i.SHORT&&(X=i.RGB16I),N===i.INT&&(X=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),N===i.UNSIGNED_INT&&(X=i.RGBA32UI),N===i.BYTE&&(X=i.RGBA8I),N===i.SHORT&&(X=i.RGBA16I),N===i.INT&&(X=i.RGBA32I)),_===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),_===i.RGBA){const vt=Z?vs:Wt.getTransfer(Y);N===i.FLOAT&&(X=i.RGBA32F),N===i.HALF_FLOAT&&(X=i.RGBA16F),N===i.UNSIGNED_BYTE&&(X=vt===Jt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function y(A,_){let N;return A?_===null||_===zn||_===pi?N=i.DEPTH24_STENCIL8:_===Ye?N=i.DEPTH32F_STENCIL8:_===Ri&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zn||_===pi?N=i.DEPTH_COMPONENT24:_===Ye?N=i.DEPTH_COMPONENT32F:_===Ri&&(N=i.DEPTH_COMPONENT16),N}function b(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==fe&&A.minFilter!==Qt?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function L(A){const _=A.target;_.removeEventListener("dispose",L),T(_),_.isVideoTexture&&h.delete(_)}function w(A){const _=A.target;_.removeEventListener("dispose",w),W(_)}function T(A){const _=n.get(A);if(_.__webglInit===void 0)return;const N=A.source,Y=u.get(N);if(Y){const Z=Y[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&U(A),Object.keys(Y).length===0&&u.delete(N)}n.remove(A)}function U(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const N=A.source,Y=u.get(N);delete Y[_.__cacheKey],a.memory.textures--}function W(A){const _=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let Z=0;Z<_.__webglFramebuffer[Y].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[Y][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=A.textures;for(let Y=0,Z=N.length;Y<Z;Y++){const X=n.get(N[Y]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(A)}let v=0;function S(){v=0}function I(){const A=v;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),v+=1,A}function O(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function V(A,_){const N=n.get(A);if(A.isVideoTexture&&Et(A),A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qt(N,A,_);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function K(A,_){const N=n.get(A);if(A.version>0&&N.__version!==A.version){qt(N,A,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function k(A,_){const N=n.get(A);if(A.version>0&&N.__version!==A.version){qt(N,A,_);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function j(A,_){const N=n.get(A);if(A.version>0&&N.__version!==A.version){q(N,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}const H={[yr]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Er]:i.MIRRORED_REPEAT},ot={[fe]:i.NEAREST,[$l]:i.NEAREST_MIPMAP_NEAREST,[Bi]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[Us]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},lt={[tc]:i.NEVER,[ac]:i.ALWAYS,[ec]:i.LESS,[Wo]:i.LEQUAL,[nc]:i.EQUAL,[rc]:i.GEQUAL,[ic]:i.GREATER,[sc]:i.NOTEQUAL};function gt(A,_){if(_.type===Ye&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Qt||_.magFilter===Us||_.magFilter===Bi||_.magFilter===On||_.minFilter===Qt||_.minFilter===Us||_.minFilter===Bi||_.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,H[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,H[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,H[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ot[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ot[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,lt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===fe||_.minFilter!==Bi&&_.minFilter!==On||_.type===Ye&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function kt(A,_){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",L));const Y=_.source;let Z=u.get(Y);Z===void 0&&(Z={},u.set(Y,Z));const X=O(_);if(X!==A.__cacheKey){Z[X]===void 0&&(Z[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[X].usedTimes++;const vt=Z[A.__cacheKey];vt!==void 0&&(Z[A.__cacheKey].usedTimes--,vt.usedTimes===0&&U(_)),A.__cacheKey=X,A.__webglTexture=Z[X].texture}return N}function qt(A,_,N){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);const Z=kt(A,_),X=_.source;e.bindTexture(Y,A.__webglTexture,i.TEXTURE0+N);const vt=n.get(X);if(X.version!==vt.__version||Z===!0){e.activeTexture(i.TEXTURE0+N);const nt=Wt.getPrimaries(Wt.workingColorSpace),ht=_.colorSpace===xn?null:Wt.getPrimaries(_.colorSpace),zt=_.colorSpace===xn||nt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let Q=x(_.image,!1,s.maxTextureSize);Q=jt(_,Q);const ut=r.convert(_.format,_.colorSpace),Tt=r.convert(_.type);let At=E(_.internalFormat,ut,Tt,_.colorSpace,_.isVideoTexture);gt(Y,_);let dt;const It=_.mipmaps,Ct=_.isVideoTexture!==!0,$t=vt.__version===void 0||Z===!0,C=X.dataReady,rt=b(_,Q);if(_.isDepthTexture)At=y(_.format===mi,_.type),$t&&(Ct?e.texStorage2D(i.TEXTURE_2D,1,At,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,At,Q.width,Q.height,0,ut,Tt,null));else if(_.isDataTexture)if(It.length>0){Ct&&$t&&e.texStorage2D(i.TEXTURE_2D,rt,At,It[0].width,It[0].height);for(let G=0,$=It.length;G<$;G++)dt=It[G],Ct?C&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,dt.width,dt.height,ut,Tt,dt.data):e.texImage2D(i.TEXTURE_2D,G,At,dt.width,dt.height,0,ut,Tt,dt.data);_.generateMipmaps=!1}else Ct?($t&&e.texStorage2D(i.TEXTURE_2D,rt,At,Q.width,Q.height),C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,ut,Tt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,At,Q.width,Q.height,0,ut,Tt,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ct&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,At,It[0].width,It[0].height,Q.depth);for(let G=0,$=It.length;G<$;G++)if(dt=It[G],_.format!==Le)if(ut!==null)if(Ct){if(C)if(_.layerUpdates.size>0){const it=go(dt.width,dt.height,_.format,_.type);for(const at of _.layerUpdates){const Ot=dt.data.subarray(at*it/dt.data.BYTES_PER_ELEMENT,(at+1)*it/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,at,dt.width,dt.height,1,ut,Ot,0,0)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,dt.width,dt.height,Q.depth,ut,dt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,At,dt.width,dt.height,Q.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,dt.width,dt.height,Q.depth,ut,Tt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,At,dt.width,dt.height,Q.depth,0,ut,Tt,dt.data)}else{Ct&&$t&&e.texStorage2D(i.TEXTURE_2D,rt,At,It[0].width,It[0].height);for(let G=0,$=It.length;G<$;G++)dt=It[G],_.format!==Le?ut!==null?Ct?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,At,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?C&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,dt.width,dt.height,ut,Tt,dt.data):e.texImage2D(i.TEXTURE_2D,G,At,dt.width,dt.height,0,ut,Tt,dt.data)}else if(_.isDataArrayTexture)if(Ct){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,At,Q.width,Q.height,Q.depth),C)if(_.layerUpdates.size>0){const G=go(Q.width,Q.height,_.format,_.type);for(const $ of _.layerUpdates){const it=Q.data.subarray($*G/Q.data.BYTES_PER_ELEMENT,($+1)*G/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,ut,Tt,it)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ut,Tt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,Q.width,Q.height,Q.depth,0,ut,Tt,Q.data);else if(_.isData3DTexture)Ct?($t&&e.texStorage3D(i.TEXTURE_3D,rt,At,Q.width,Q.height,Q.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ut,Tt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,At,Q.width,Q.height,Q.depth,0,ut,Tt,Q.data);else if(_.isFramebufferTexture){if($t)if(Ct)e.texStorage2D(i.TEXTURE_2D,rt,At,Q.width,Q.height);else{let G=Q.width,$=Q.height;for(let it=0;it<rt;it++)e.texImage2D(i.TEXTURE_2D,it,At,G,$,0,ut,Tt,null),G>>=1,$>>=1}}else if(It.length>0){if(Ct&&$t){const G=bt(It[0]);e.texStorage2D(i.TEXTURE_2D,rt,At,G.width,G.height)}for(let G=0,$=It.length;G<$;G++)dt=It[G],Ct?C&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ut,Tt,dt):e.texImage2D(i.TEXTURE_2D,G,At,ut,Tt,dt);_.generateMipmaps=!1}else if(Ct){if($t){const G=bt(Q);e.texStorage2D(i.TEXTURE_2D,rt,At,G.width,G.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Tt,Q)}else e.texImage2D(i.TEXTURE_2D,0,At,ut,Tt,Q);p(_)&&m(Y),vt.__version=X.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function q(A,_,N){if(_.image.length!==6)return;const Y=kt(A,_),Z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+N);const X=n.get(Z);if(Z.version!==X.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);const vt=Wt.getPrimaries(Wt.workingColorSpace),nt=_.colorSpace===xn?null:Wt.getPrimaries(_.colorSpace),ht=_.colorSpace===xn||vt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const zt=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,ut=[];for(let $=0;$<6;$++)!zt&&!Q?ut[$]=x(_.image[$],!0,s.maxCubemapSize):ut[$]=Q?_.image[$].image:_.image[$],ut[$]=jt(_,ut[$]);const Tt=ut[0],At=r.convert(_.format,_.colorSpace),dt=r.convert(_.type),It=E(_.internalFormat,At,dt,_.colorSpace),Ct=_.isVideoTexture!==!0,$t=X.__version===void 0||Y===!0,C=Z.dataReady;let rt=b(_,Tt);gt(i.TEXTURE_CUBE_MAP,_);let G;if(zt){Ct&&$t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,It,Tt.width,Tt.height);for(let $=0;$<6;$++){G=ut[$].mipmaps;for(let it=0;it<G.length;it++){const at=G[it];_.format!==Le?At!==null?Ct?C&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,it,0,0,at.width,at.height,At,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,it,It,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,it,0,0,at.width,at.height,At,dt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,it,It,at.width,at.height,0,At,dt,at.data)}}}else{if(G=_.mipmaps,Ct&&$t){G.length>0&&rt++;const $=bt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,It,$.width,$.height)}for(let $=0;$<6;$++)if(Q){Ct?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ut[$].width,ut[$].height,At,dt,ut[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,It,ut[$].width,ut[$].height,0,At,dt,ut[$].data);for(let it=0;it<G.length;it++){const Ot=G[it].image[$].image;Ct?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,it+1,0,0,Ot.width,Ot.height,At,dt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,it+1,It,Ot.width,Ot.height,0,At,dt,Ot.data)}}else{Ct?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,At,dt,ut[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,It,At,dt,ut[$]);for(let it=0;it<G.length;it++){const at=G[it];Ct?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,it+1,0,0,At,dt,at.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,it+1,It,At,dt,at.image[$])}}}p(_)&&m(i.TEXTURE_CUBE_MAP),X.__version=Z.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function J(A,_,N,Y,Z,X){const vt=r.convert(N.format,N.colorSpace),nt=r.convert(N.type),ht=E(N.internalFormat,vt,nt,N.colorSpace);if(!n.get(_).__hasExternalTextures){const Q=Math.max(1,_.width>>X),ut=Math.max(1,_.height>>X);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,X,ht,Q,ut,_.depth,0,vt,nt,null):e.texImage2D(Z,X,ht,Q,ut,0,vt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Bt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Z,n.get(N).__webglTexture,0,Ut(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Z,n.get(N).__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(A,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const Y=_.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,X=y(_.stencilBuffer,Z),vt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=Ut(_);Bt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,X,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,X,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,X,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,A)}else{const Y=_.textures;for(let Z=0;Z<Y.length;Z++){const X=Y[Z],vt=r.convert(X.format,X.colorSpace),nt=r.convert(X.type),ht=E(X.internalFormat,vt,nt,X.colorSpace),zt=Ut(_);N&&Bt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,ht,_.width,_.height):Bt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt,ht,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ht,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V(_.depthTexture,0);const Y=n.get(_.depthTexture).__webglTexture,Z=Ut(_);if(_.depthTexture.format===li)Bt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(_.depthTexture.format===mi)Bt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Rt(A){const _=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=Y}if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ct(_.__webglFramebuffer,A)}else if(N){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),pt(_.__webglDepthbuffer[Y],A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),pt(_.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(A,_,N){const Y=n.get(A);_!==void 0&&J(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Rt(A)}function Nt(A){const _=A.texture,N=n.get(A),Y=n.get(_);A.addEventListener("dispose",w);const Z=A.textures,X=A.isWebGLCubeRenderTarget===!0,vt=Z.length>1;if(vt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),X){N.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[nt]=[];for(let ht=0;ht<_.mipmaps.length;ht++)N.__webglFramebuffer[nt][ht]=i.createFramebuffer()}else N.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let nt=0;nt<_.mipmaps.length;nt++)N.__webglFramebuffer[nt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(vt)for(let nt=0,ht=Z.length;nt<ht;nt++){const zt=n.get(Z[nt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Bt(A)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let nt=0;nt<Z.length;nt++){const ht=Z[nt];N.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[nt]);const zt=r.convert(ht.format,ht.colorSpace),Q=r.convert(ht.type),ut=E(ht.internalFormat,zt,Q,ht.colorSpace,A.isXRRenderTarget===!0),Tt=Ut(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,ut,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,N.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(N.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),gt(i.TEXTURE_CUBE_MAP,_);for(let nt=0;nt<6;nt++)if(_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)J(N.__webglFramebuffer[nt][ht],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ht);else J(N.__webglFramebuffer[nt],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);p(_)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let nt=0,ht=Z.length;nt<ht;nt++){const zt=Z[nt],Q=n.get(zt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),gt(i.TEXTURE_2D,zt),J(N.__webglFramebuffer,A,zt,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,0),p(zt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(nt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,Y.__webglTexture),gt(nt,_),_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)J(N.__webglFramebuffer[ht],A,_,i.COLOR_ATTACHMENT0,nt,ht);else J(N.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,nt,0);p(_)&&m(nt),e.unbindTexture()}A.depthBuffer&&Rt(A)}function Kt(A){const _=A.textures;for(let N=0,Y=_.length;N<Y;N++){const Z=_[N];if(p(Z)){const X=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(Z).__webglTexture;e.bindTexture(X,vt),m(X),e.unbindTexture()}}}const Ft=[],R=[];function Ee(A){if(A.samples>0){if(Bt(A)===!1){const _=A.textures,N=A.width,Y=A.height;let Z=i.COLOR_BUFFER_BIT;const X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(A),nt=_.length>1;if(nt)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ht]);const zt=n.get(_[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,Z,i.NEAREST),l===!0&&(Ft.length=0,R.length=0,Ft.push(i.COLOR_ATTACHMENT0+ht),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ft.push(X),R.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ht]);const zt=n.get(_[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ut(A){return Math.min(s.maxSamples,A.samples)}function Bt(A){const _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Et(A){const _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function jt(A,_){const N=A.colorSpace,Y=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==An&&N!==xn&&(Wt.getTransfer(N)===Jt?(Y!==Le||Z!==Ge)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=S,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=k,this.setTextureCube=j,this.rebindTextures=St,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Bt}function wp(i,t){function e(n,s=xn){let r;const a=Wt.getTransfer(s);if(n===Ge)return i.UNSIGNED_BYTE;if(n===sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Io)return i.BYTE;if(n===No)return i.SHORT;if(n===Ri)return i.UNSIGNED_SHORT;if(n===ia)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===Ye)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===Oo)return i.ALPHA;if(n===Bo)return i.RGB;if(n===Le)return i.RGBA;if(n===zo)return i.LUMINANCE;if(n===ko)return i.LUMINANCE_ALPHA;if(n===li)return i.DEPTH_COMPONENT;if(n===mi)return i.DEPTH_STENCIL;if(n===Ho)return i.RED;if(n===aa)return i.RED_INTEGER;if(n===Go)return i.RG;if(n===oa)return i.RG_INTEGER;if(n===la)return i.RGBA_INTEGER;if(n===cs||n===hs||n===us||n===ds)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===us)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tr||n===Ar||n===br||n===wr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ar)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===br)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rr||n===Cr||n===Pr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rr||n===Cr)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dr||n===Lr||n===Ur||n===Ir||n===Nr||n===Fr||n===Or||n===Br||n===zr||n===kr||n===Hr||n===Gr||n===Vr||n===Wr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ur)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ir)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Or)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Br)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fs||n===qr||n===Xr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fs)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vo||n===Yr||n===Kr||n===$r)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$r)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Rp extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ai extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cp={type:"move"};class lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Pp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dp=`
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

}`;class Lp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new _e,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Re({vertexShader:Pp,fragmentShader:Dp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ue(new kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Up extends vi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const x=new Lp,p=e.getContextAttributes();let m=null,E=null;const y=[],b=[],L=new Lt;let w=null;const T=new De;T.layers.enable(1),T.viewport=new wt;const U=new De;U.layers.enable(2),U.viewport=new wt;const W=[T,U],v=new Rp;v.layers.enable(1),v.layers.enable(2);let S=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=y[q];return J===void 0&&(J=new lr,y[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=y[q];return J===void 0&&(J=new lr,y[q]=J),J.getGripSpace()},this.getHand=function(q){let J=y[q];return J===void 0&&(J=new lr,y[q]=J),J.getHandSpace()};function O(q){const J=b.indexOf(q.inputSource);if(J===-1)return;const pt=y[J];pt!==void 0&&(pt.update(q.inputSource,q.frame,c||a),pt.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",K);for(let q=0;q<y.length;q++){const J=b[q];J!==null&&(b[q]=null,y[q].disconnect(J))}S=null,I=null,x.reset(),t.setRenderTarget(m),f=null,u=null,d=null,s=null,E=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new ce(f.framebufferWidth,f.framebufferHeight,{format:Le,type:Ge,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,pt=null,ct=null;p.depth&&(ct=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=p.stencil?mi:li,pt=p.stencil?pi:zn);const Rt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Rt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new ce(u.textureWidth,u.textureHeight,{format:Le,type:Ge,depthTexture:new il(u.textureWidth,u.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(q){for(let J=0;J<q.removed.length;J++){const pt=q.removed[J],ct=b.indexOf(pt);ct>=0&&(b[ct]=null,y[ct].disconnect(pt))}for(let J=0;J<q.added.length;J++){const pt=q.added[J];let ct=b.indexOf(pt);if(ct===-1){for(let St=0;St<y.length;St++)if(St>=b.length){b.push(pt),ct=St;break}else if(b[St]===null){b[St]=pt,ct=St;break}if(ct===-1)break}const Rt=y[ct];Rt&&Rt.connect(pt)}}const k=new F,j=new F;function H(q,J,pt){k.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(pt.matrixWorld);const ct=k.distanceTo(j),Rt=J.projectionMatrix.elements,St=pt.projectionMatrix.elements,Nt=Rt[14]/(Rt[10]-1),Kt=Rt[14]/(Rt[10]+1),Ft=(Rt[9]+1)/Rt[5],R=(Rt[9]-1)/Rt[5],Ee=(Rt[8]-1)/Rt[0],Ut=(St[8]+1)/St[0],Bt=Nt*Ee,Et=Nt*Ut,jt=ct/(-Ee+Ut),bt=jt*-Ee;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(bt),q.translateZ(jt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const A=Nt+jt,_=Kt+jt,N=Bt-bt,Y=Et+(ct-bt),Z=Ft*Kt/_*A,X=R*Kt/_*A;q.projectionMatrix.makePerspective(N,Y,Z,X,A,_),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ot(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let J=q.near,pt=q.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(pt=x.depthFar)),v.near=U.near=T.near=J,v.far=U.far=T.far=pt,(S!==v.near||I!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,I=v.far);const ct=q.parent,Rt=v.cameras;ot(v,ct);for(let St=0;St<Rt.length;St++)ot(Rt[St],ct);Rt.length===2?H(v,T,U):v.projectionMatrix.copy(T.projectionMatrix),lt(q,v,ct)};function lt(q,J,pt){pt===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(pt.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ci*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let gt=null;function kt(q,J){if(h=J.getViewerPose(c||a),g=J,h!==null){const pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let ct=!1;pt.length!==v.cameras.length&&(v.cameras.length=0,ct=!0);for(let St=0;St<pt.length;St++){const Nt=pt[St];let Kt=null;if(f!==null)Kt=f.getViewport(Nt);else{const R=d.getViewSubImage(u,Nt);Kt=R.viewport,St===0&&(t.setRenderTargetTextures(E,R.colorTexture,u.ignoreDepthValues?void 0:R.depthStencilTexture),t.setRenderTarget(E))}let Ft=W[St];Ft===void 0&&(Ft=new De,Ft.layers.enable(St),Ft.viewport=new wt,W[St]=Ft),Ft.matrix.fromArray(Nt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Nt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),St===0&&(v.matrix.copy(Ft.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ct===!0&&v.cameras.push(Ft)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const St=d.getDepthInformation(pt[0]);St&&St.isValid&&St.texture&&x.init(t,St,s.renderState)}}for(let pt=0;pt<y.length;pt++){const ct=b[pt],Rt=y[pt];ct!==null&&Rt!==void 0&&Rt.update(ct,J,c||a)}gt&&gt(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const qt=new nl;qt.setAnimationLoop(kt),this.setAnimationLoop=function(q){gt=q},this.dispose=function(){}}}const Un=new hn,Ip=new ee;function Np(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Jo(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,E,y,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,E,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Se&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Se&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const E=t.get(m),y=E.envMap,b=E.envMapRotation;y&&(p.envMap.value=y,Un.copy(b),Un.x*=-1,Un.y*=-1,Un.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),p.envMapRotation.value.setFromMatrix4(Ip.makeRotationFromEuler(Un)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,E,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Se&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const E=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fp(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const b=y.program;n.uniformBlockBinding(E,b)}function c(E,y){let b=s[E.id];b===void 0&&(g(E),b=h(E),s[E.id]=b,E.addEventListener("dispose",p));const L=y.program;n.updateUBOMapping(E,L);const w=t.render.frame;r[E.id]!==w&&(u(E),r[E.id]=w)}function h(E){const y=d();E.__bindingPointIndex=y;const b=i.createBuffer(),L=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const y=s[E.id],b=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,T=b.length;w<T;w++){const U=Array.isArray(b[w])?b[w]:[b[w]];for(let W=0,v=U.length;W<v;W++){const S=U[W];if(f(S,w,W,L)===!0){const I=S.__offset,O=Array.isArray(S.value)?S.value:[S.value];let V=0;for(let K=0;K<O.length;K++){const k=O[K],j=x(k);typeof k=="number"||typeof k=="boolean"?(S.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,I+V,S.__data)):k.isMatrix3?(S.__data[0]=k.elements[0],S.__data[1]=k.elements[1],S.__data[2]=k.elements[2],S.__data[3]=0,S.__data[4]=k.elements[3],S.__data[5]=k.elements[4],S.__data[6]=k.elements[5],S.__data[7]=0,S.__data[8]=k.elements[6],S.__data[9]=k.elements[7],S.__data[10]=k.elements[8],S.__data[11]=0):(k.toArray(S.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,y,b,L){const w=E.value,T=y+"_"+b;if(L[T]===void 0)return typeof w=="number"||typeof w=="boolean"?L[T]=w:L[T]=w.clone(),!0;{const U=L[T];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return L[T]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(E){const y=E.uniforms;let b=0;const L=16;for(let T=0,U=y.length;T<U;T++){const W=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,S=W.length;v<S;v++){const I=W[v],O=Array.isArray(I.value)?I.value:[I.value];for(let V=0,K=O.length;V<K;V++){const k=O[V],j=x(k),H=b%L,ot=H%j.boundary,lt=H+ot;b+=ot,lt!==0&&L-lt<j.storage&&(b+=L-lt),I.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=j.storage}}}const w=b%L;return w>0&&(b+=L-w),E.__size=b,E.__cache={},this}function x(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function p(E){const y=E.target;y.removeEventListener("dispose",p);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Op{constructor(t={}){const{canvas:e=Ec(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const f=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const m=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=Sn,this.toneMappingExposure=1;const y=this;let b=!1,L=0,w=0,T=null,U=-1,W=null;const v=new wt,S=new wt;let I=null;const O=new Yt(0);let V=0,K=e.width,k=e.height,j=1,H=null,ot=null;const lt=new wt(0,0,K,k),gt=new wt(0,0,K,k);let kt=!1;const qt=new el;let q=!1,J=!1;const pt=new ee,ct=new ee,Rt=new F,St=new wt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function Ft(){return T===null?j:1}let R=n;function Ee(M,P){return e.getContext(M,P)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ea}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",at,!1),R===null){const P="webgl2";if(R=Ee(P,M),R===null)throw Ee(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ut,Bt,Et,jt,bt,A,_,N,Y,Z,X,vt,nt,ht,zt,Q,ut,Tt,At,dt,It,Ct,$t,C;function rt(){Ut=new Hd(R),Ut.init(),Ct=new wp(R,Ut),Bt=new Nd(R,Ut,t,Ct),Et=new Tp(R),Bt.reverseDepthBuffer&&Et.buffers.depth.setReversed(!0),jt=new Wd(R),bt=new cp,A=new bp(R,Ut,Et,bt,Bt,Ct,jt),_=new Od(y),N=new kd(y),Y=new Zc(R),$t=new Ud(R,Y),Z=new Gd(R,Y,jt,$t),X=new Xd(R,Z,Y,jt),At=new qd(R,Bt,A),Q=new Fd(bt),vt=new lp(y,_,N,Ut,Bt,$t,Q),nt=new Np(y,bt),ht=new up,zt=new vp(Ut),Tt=new Ld(y,_,N,Et,X,u,l),ut=new yp(y,X,Bt),C=new Fp(R,jt,Bt,Et),dt=new Id(R,Ut,jt),It=new Vd(R,Ut,jt),jt.programs=vt.programs,y.capabilities=Bt,y.extensions=Ut,y.properties=bt,y.renderLists=ht,y.shadowMap=ut,y.state=Et,y.info=jt}rt();const G=new Up(y,R);this.xr=G,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=Ut.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ut.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize(K,k,!1))},this.getSize=function(M){return M.set(K,k)},this.setSize=function(M,P,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=M,k=P,e.width=Math.floor(M*j),e.height=Math.floor(P*j),B===!0&&(e.style.width=M+"px",e.style.height=P+"px"),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(K*j,k*j).floor()},this.setDrawingBufferSize=function(M,P,B){K=M,k=P,j=B,e.width=Math.floor(M*B),e.height=Math.floor(P*B),this.setViewport(0,0,M,P)},this.getCurrentViewport=function(M){return M.copy(v)},this.getViewport=function(M){return M.copy(lt)},this.setViewport=function(M,P,B,z){M.isVector4?lt.set(M.x,M.y,M.z,M.w):lt.set(M,P,B,z),Et.viewport(v.copy(lt).multiplyScalar(j).round())},this.getScissor=function(M){return M.copy(gt)},this.setScissor=function(M,P,B,z){M.isVector4?gt.set(M.x,M.y,M.z,M.w):gt.set(M,P,B,z),Et.scissor(S.copy(gt).multiplyScalar(j).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(M){Et.setScissorTest(kt=M)},this.setOpaqueSort=function(M){H=M},this.setTransparentSort=function(M){ot=M},this.getClearColor=function(M){return M.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(M=!0,P=!0,B=!0){let z=0;if(M){let D=!1;if(T!==null){const tt=T.texture.format;D=tt===la||tt===oa||tt===aa}if(D){const tt=T.texture.type,st=tt===Ge||tt===zn||tt===Ri||tt===pi||tt===sa||tt===ra,ft=Tt.getClearColor(),mt=Tt.getClearAlpha(),Mt=ft.r,yt=ft.g,_t=ft.b;st?(f[0]=Mt,f[1]=yt,f[2]=_t,f[3]=mt,R.clearBufferuiv(R.COLOR,0,f)):(g[0]=Mt,g[1]=yt,g[2]=_t,g[3]=mt,R.clearBufferiv(R.COLOR,0,g))}else z|=R.COLOR_BUFFER_BIT}P&&(z|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ht.dispose(),zt.dispose(),bt.dispose(),_.dispose(),N.dispose(),X.dispose(),$t.dispose(),C.dispose(),vt.dispose(),G.dispose(),G.removeEventListener("sessionstart",pa),G.removeEventListener("sessionend",ma),wn.stop()};function $(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const M=jt.autoReset,P=ut.enabled,B=ut.autoUpdate,z=ut.needsUpdate,D=ut.type;rt(),jt.autoReset=M,ut.enabled=P,ut.autoUpdate=B,ut.needsUpdate=z,ut.type=D}function at(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ot(M){const P=M.target;P.removeEventListener("dispose",Ot),ie(P)}function ie(M){xe(M),bt.remove(M)}function xe(M){const P=bt.get(M).programs;P!==void 0&&(P.forEach(function(B){vt.releaseProgram(B)}),M.isShaderMaterial&&vt.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,B,z,D,tt){P===null&&(P=Nt);const st=D.isMesh&&D.matrixWorld.determinant()<0,ft=vl(M,P,B,z,D);Et.setMaterial(z,st);let mt=B.index,Mt=1;if(z.wireframe===!0){if(mt=Z.getWireframeAttribute(B),mt===void 0)return;Mt=2}const yt=B.drawRange,_t=B.attributes.position;let Xt=yt.start*Mt,Zt=(yt.start+yt.count)*Mt;tt!==null&&(Xt=Math.max(Xt,tt.start*Mt),Zt=Math.min(Zt,(tt.start+tt.count)*Mt)),mt!==null?(Xt=Math.max(Xt,0),Zt=Math.min(Zt,mt.count)):_t!=null&&(Xt=Math.max(Xt,0),Zt=Math.min(Zt,_t.count));const te=Zt-Xt;if(te<0||te===1/0)return;$t.setup(D,z,ft,B,mt);let Te,Gt=dt;if(mt!==null&&(Te=Y.get(mt),Gt=It,Gt.setIndex(Te)),D.isMesh)z.wireframe===!0?(Et.setLineWidth(z.wireframeLinewidth*Ft()),Gt.setMode(R.LINES)):Gt.setMode(R.TRIANGLES);else if(D.isLine){let xt=z.linewidth;xt===void 0&&(xt=1),Et.setLineWidth(xt*Ft()),D.isLineSegments?Gt.setMode(R.LINES):D.isLineLoop?Gt.setMode(R.LINE_LOOP):Gt.setMode(R.LINE_STRIP)}else D.isPoints?Gt.setMode(R.POINTS):D.isSprite&&Gt.setMode(R.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Gt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))Gt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const xt=D._multiDrawStarts,he=D._multiDrawCounts,Vt=D._multiDrawCount,Ie=mt?Y.get(mt).bytesPerElement:1,Gn=bt.get(z).currentProgram.getUniforms();for(let Ae=0;Ae<Vt;Ae++)Gn.setValue(R,"_gl_DrawID",Ae),Gt.render(xt[Ae]/Ie,he[Ae])}else if(D.isInstancedMesh)Gt.renderInstances(Xt,te,D.count);else if(B.isInstancedBufferGeometry){const xt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,he=Math.min(B.instanceCount,xt);Gt.renderInstances(Xt,te,he)}else Gt.render(Xt,te)};function Ht(M,P,B){M.transparent===!0&&M.side===qe&&M.forceSinglePass===!1?(M.side=Se,M.needsUpdate=!0,Oi(M,P,B),M.side=Tn,M.needsUpdate=!0,Oi(M,P,B),M.side=qe):Oi(M,P,B)}this.compile=function(M,P,B=null){B===null&&(B=M),p=zt.get(B),p.init(P),E.push(p),B.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),M!==B&&M.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const z=new Set;return M.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const tt=D.material;if(tt)if(Array.isArray(tt))for(let st=0;st<tt.length;st++){const ft=tt[st];Ht(ft,B,D),z.add(ft)}else Ht(tt,B,D),z.add(tt)}),E.pop(),p=null,z},this.compileAsync=function(M,P,B=null){const z=this.compile(M,P,B);return new Promise(D=>{function tt(){if(z.forEach(function(st){bt.get(st).currentProgram.isReady()&&z.delete(st)}),z.size===0){D(M);return}setTimeout(tt,10)}Ut.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Me=null;function je(M){Me&&Me(M)}function pa(){wn.stop()}function ma(){wn.start()}const wn=new nl;wn.setAnimationLoop(je),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(M){Me=M,G.setAnimationLoop(M),M===null?wn.stop():wn.start()},G.addEventListener("sessionstart",pa),G.addEventListener("sessionend",ma),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(P),P=G.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,P,T),p=zt.get(M,E.length),p.init(P),E.push(p),ct.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),qt.setFromProjectionMatrix(ct),J=this.localClippingEnabled,q=Q.init(this.clippingPlanes,J),x=ht.get(M,m.length),x.init(),m.push(x),G.enabled===!0&&G.isPresenting===!0){const tt=y.xr.getDepthSensingMesh();tt!==null&&Cs(tt,P,-1/0,y.sortObjects)}Cs(M,P,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(H,ot),Kt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Kt&&Tt.addToRenderList(x,M),this.info.render.frame++,q===!0&&Q.beginShadows();const B=p.state.shadowsArray;ut.render(B,M,P),q===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=x.opaque,D=x.transmissive;if(p.setupLights(),P.isArrayCamera){const tt=P.cameras;if(D.length>0)for(let st=0,ft=tt.length;st<ft;st++){const mt=tt[st];va(z,D,M,mt)}Kt&&Tt.render(M);for(let st=0,ft=tt.length;st<ft;st++){const mt=tt[st];ga(x,M,mt,mt.viewport)}}else D.length>0&&va(z,D,M,P),Kt&&Tt.render(M),ga(x,M,P);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(y,M,P),$t.resetDefaultState(),U=-1,W=null,E.pop(),E.length>0?(p=E[E.length-1],q===!0&&Q.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Cs(M,P,B,z){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||qt.intersectsSprite(M)){z&&St.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ct);const st=X.update(M),ft=M.material;ft.visible&&x.push(M,st,ft,B,St.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||qt.intersectsObject(M))){const st=X.update(M),ft=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),St.copy(M.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),St.copy(st.boundingSphere.center)),St.applyMatrix4(M.matrixWorld).applyMatrix4(ct)),Array.isArray(ft)){const mt=st.groups;for(let Mt=0,yt=mt.length;Mt<yt;Mt++){const _t=mt[Mt],Xt=ft[_t.materialIndex];Xt&&Xt.visible&&x.push(M,st,Xt,B,St.z,_t)}}else ft.visible&&x.push(M,st,ft,B,St.z,null)}}const tt=M.children;for(let st=0,ft=tt.length;st<ft;st++)Cs(tt[st],P,B,z)}function ga(M,P,B,z){const D=M.opaque,tt=M.transmissive,st=M.transparent;p.setupLightsView(B),q===!0&&Q.setGlobalState(y.clippingPlanes,B),z&&Et.viewport(v.copy(z)),D.length>0&&Fi(D,P,B),tt.length>0&&Fi(tt,P,B),st.length>0&&Fi(st,P,B),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function va(M,P,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new ce(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float")?Hn:Ge,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[z.id],st=z.viewport||v;tt.setSize(st.z,st.w);const ft=y.getRenderTarget();y.setRenderTarget(tt),y.getClearColor(O),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),Kt&&Tt.render(B);const mt=y.toneMapping;y.toneMapping=Sn;const Mt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),q===!0&&Q.setGlobalState(y.clippingPlanes,z),Fi(M,B,z),A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let _t=0,Xt=P.length;_t<Xt;_t++){const Zt=P[_t],te=Zt.object,Te=Zt.geometry,Gt=Zt.material,xt=Zt.group;if(Gt.side===qe&&te.layers.test(z.layers)){const he=Gt.side;Gt.side=Se,Gt.needsUpdate=!0,_a(te,B,z,Te,Gt,xt),Gt.side=he,Gt.needsUpdate=!0,yt=!0}}yt===!0&&(A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt))}y.setRenderTarget(ft),y.setClearColor(O,V),Mt!==void 0&&(z.viewport=Mt),y.toneMapping=mt}function Fi(M,P,B){const z=P.isScene===!0?P.overrideMaterial:null;for(let D=0,tt=M.length;D<tt;D++){const st=M[D],ft=st.object,mt=st.geometry,Mt=z===null?st.material:z,yt=st.group;ft.layers.test(B.layers)&&_a(ft,P,B,mt,Mt,yt)}}function _a(M,P,B,z,D,tt){M.onBeforeRender(y,P,B,z,D,tt),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),D.onBeforeRender(y,P,B,z,M,tt),D.transparent===!0&&D.side===qe&&D.forceSinglePass===!1?(D.side=Se,D.needsUpdate=!0,y.renderBufferDirect(B,P,z,D,M,tt),D.side=Tn,D.needsUpdate=!0,y.renderBufferDirect(B,P,z,D,M,tt),D.side=qe):y.renderBufferDirect(B,P,z,D,M,tt),M.onAfterRender(y,P,B,z,D,tt)}function Oi(M,P,B){P.isScene!==!0&&(P=Nt);const z=bt.get(M),D=p.state.lights,tt=p.state.shadowsArray,st=D.state.version,ft=vt.getParameters(M,D.state,tt,P,B),mt=vt.getProgramCacheKey(ft);let Mt=z.programs;z.environment=M.isMeshStandardMaterial?P.environment:null,z.fog=P.fog,z.envMap=(M.isMeshStandardMaterial?N:_).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?P.environmentRotation:M.envMapRotation,Mt===void 0&&(M.addEventListener("dispose",Ot),Mt=new Map,z.programs=Mt);let yt=Mt.get(mt);if(yt!==void 0){if(z.currentProgram===yt&&z.lightsStateVersion===st)return Ma(M,ft),yt}else ft.uniforms=vt.getUniforms(M),M.onBeforeCompile(ft,y),yt=vt.acquireProgram(ft,mt),Mt.set(mt,yt),z.uniforms=ft.uniforms;const _t=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(_t.clippingPlanes=Q.uniform),Ma(M,ft),z.needsLights=xl(M),z.lightsStateVersion=st,z.needsLights&&(_t.ambientLightColor.value=D.state.ambient,_t.lightProbe.value=D.state.probe,_t.directionalLights.value=D.state.directional,_t.directionalLightShadows.value=D.state.directionalShadow,_t.spotLights.value=D.state.spot,_t.spotLightShadows.value=D.state.spotShadow,_t.rectAreaLights.value=D.state.rectArea,_t.ltc_1.value=D.state.rectAreaLTC1,_t.ltc_2.value=D.state.rectAreaLTC2,_t.pointLights.value=D.state.point,_t.pointLightShadows.value=D.state.pointShadow,_t.hemisphereLights.value=D.state.hemi,_t.directionalShadowMap.value=D.state.directionalShadowMap,_t.directionalShadowMatrix.value=D.state.directionalShadowMatrix,_t.spotShadowMap.value=D.state.spotShadowMap,_t.spotLightMatrix.value=D.state.spotLightMatrix,_t.spotLightMap.value=D.state.spotLightMap,_t.pointShadowMap.value=D.state.pointShadowMap,_t.pointShadowMatrix.value=D.state.pointShadowMatrix),z.currentProgram=yt,z.uniformsList=null,yt}function xa(M){if(M.uniformsList===null){const P=M.currentProgram.getUniforms();M.uniformsList=ms.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function Ma(M,P){const B=bt.get(M);B.outputColorSpace=P.outputColorSpace,B.batching=P.batching,B.batchingColor=P.batchingColor,B.instancing=P.instancing,B.instancingColor=P.instancingColor,B.instancingMorph=P.instancingMorph,B.skinning=P.skinning,B.morphTargets=P.morphTargets,B.morphNormals=P.morphNormals,B.morphColors=P.morphColors,B.morphTargetsCount=P.morphTargetsCount,B.numClippingPlanes=P.numClippingPlanes,B.numIntersection=P.numClipIntersection,B.vertexAlphas=P.vertexAlphas,B.vertexTangents=P.vertexTangents,B.toneMapping=P.toneMapping}function vl(M,P,B,z,D){P.isScene!==!0&&(P=Nt),A.resetTextureUnits();const tt=P.fog,st=z.isMeshStandardMaterial?P.environment:null,ft=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:An,mt=(z.isMeshStandardMaterial?N:_).get(z.envMap||st),Mt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,yt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),_t=!!B.morphAttributes.position,Xt=!!B.morphAttributes.normal,Zt=!!B.morphAttributes.color;let te=Sn;z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(te=y.toneMapping);const Te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Gt=Te!==void 0?Te.length:0,xt=bt.get(z),he=p.state.lights;if(q===!0&&(J===!0||M!==W)){const Ce=M===W&&z.id===U;Q.setState(z,M,Ce)}let Vt=!1;z.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==he.state.version||xt.outputColorSpace!==ft||D.isBatchedMesh&&xt.batching===!1||!D.isBatchedMesh&&xt.batching===!0||D.isBatchedMesh&&xt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&xt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&xt.instancing===!1||!D.isInstancedMesh&&xt.instancing===!0||D.isSkinnedMesh&&xt.skinning===!1||!D.isSkinnedMesh&&xt.skinning===!0||D.isInstancedMesh&&xt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&xt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&xt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&xt.instancingMorph===!1&&D.morphTexture!==null||xt.envMap!==mt||z.fog===!0&&xt.fog!==tt||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==Q.numPlanes||xt.numIntersection!==Q.numIntersection)||xt.vertexAlphas!==Mt||xt.vertexTangents!==yt||xt.morphTargets!==_t||xt.morphNormals!==Xt||xt.morphColors!==Zt||xt.toneMapping!==te||xt.morphTargetsCount!==Gt)&&(Vt=!0):(Vt=!0,xt.__version=z.version);let Ie=xt.currentProgram;Vt===!0&&(Ie=Oi(z,P,D));let Gn=!1,Ae=!1,Ps=!1;const ne=Ie.getUniforms(),un=xt.uniforms;if(Et.useProgram(Ie.program)&&(Gn=!0,Ae=!0,Ps=!0),z.id!==U&&(U=z.id,Ae=!0),Gn||W!==M){Bt.reverseDepthBuffer?(pt.copy(M.projectionMatrix),Ac(pt),bc(pt),ne.setValue(R,"projectionMatrix",pt)):ne.setValue(R,"projectionMatrix",M.projectionMatrix),ne.setValue(R,"viewMatrix",M.matrixWorldInverse);const Ce=ne.map.cameraPosition;Ce!==void 0&&Ce.setValue(R,Rt.setFromMatrixPosition(M.matrixWorld)),Bt.logarithmicDepthBuffer&&ne.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ne.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),W!==M&&(W=M,Ae=!0,Ps=!0)}if(D.isSkinnedMesh){ne.setOptional(R,D,"bindMatrix"),ne.setOptional(R,D,"bindMatrixInverse");const Ce=D.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),ne.setValue(R,"boneTexture",Ce.boneTexture,A))}D.isBatchedMesh&&(ne.setOptional(R,D,"batchingTexture"),ne.setValue(R,"batchingTexture",D._matricesTexture,A),ne.setOptional(R,D,"batchingIdTexture"),ne.setValue(R,"batchingIdTexture",D._indirectTexture,A),ne.setOptional(R,D,"batchingColorTexture"),D._colorsTexture!==null&&ne.setValue(R,"batchingColorTexture",D._colorsTexture,A));const Ds=B.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0)&&At.update(D,B,Ie),(Ae||xt.receiveShadow!==D.receiveShadow)&&(xt.receiveShadow=D.receiveShadow,ne.setValue(R,"receiveShadow",D.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(un.envMap.value=mt,un.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&P.environment!==null&&(un.envMapIntensity.value=P.environmentIntensity),Ae&&(ne.setValue(R,"toneMappingExposure",y.toneMappingExposure),xt.needsLights&&_l(un,Ps),tt&&z.fog===!0&&nt.refreshFogUniforms(un,tt),nt.refreshMaterialUniforms(un,z,j,k,p.state.transmissionRenderTarget[M.id]),ms.upload(R,xa(xt),un,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ms.upload(R,xa(xt),un,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ne.setValue(R,"center",D.center),ne.setValue(R,"modelViewMatrix",D.modelViewMatrix),ne.setValue(R,"normalMatrix",D.normalMatrix),ne.setValue(R,"modelMatrix",D.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ce=z.uniformsGroups;for(let Ls=0,Ml=Ce.length;Ls<Ml;Ls++){const Sa=Ce[Ls];C.update(Sa,Ie),C.bind(Sa,Ie)}}return Ie}function _l(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function xl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,P,B){bt.get(M.texture).__webglTexture=P,bt.get(M.depthTexture).__webglTexture=B;const z=bt.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,P){const B=bt.get(M);B.__webglFramebuffer=P,B.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,B=0){T=M,L=P,w=B;let z=!0,D=null,tt=!1,st=!1;if(M){const mt=bt.get(M);if(mt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(R.FRAMEBUFFER,null),z=!1;else if(mt.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(mt.__hasExternalTextures)A.rebindTextures(M,bt.get(M.texture).__webglTexture,bt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const _t=M.depthTexture;if(mt.__boundDepthTexture!==_t){if(_t!==null&&bt.has(_t)&&(M.width!==_t.image.width||M.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}const Mt=M.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(st=!0);const yt=bt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(yt[P])?D=yt[P][B]:D=yt[P],tt=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?D=bt.get(M).__webglMultisampledFramebuffer:Array.isArray(yt)?D=yt[B]:D=yt,v.copy(M.viewport),S.copy(M.scissor),I=M.scissorTest}else v.copy(lt).multiplyScalar(j).floor(),S.copy(gt).multiplyScalar(j).floor(),I=kt;if(Et.bindFramebuffer(R.FRAMEBUFFER,D)&&z&&Et.drawBuffers(M,D),Et.viewport(v),Et.scissor(S),Et.setScissorTest(I),tt){const mt=bt.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+P,mt.__webglTexture,B)}else if(st){const mt=bt.get(M.texture),Mt=P||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,mt.__webglTexture,B||0,Mt)}U=-1},this.readRenderTargetPixels=function(M,P,B,z,D,tt,st){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=bt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&st!==void 0&&(ft=ft[st]),ft){Et.bindFramebuffer(R.FRAMEBUFFER,ft);try{const mt=M.texture,Mt=mt.format,yt=mt.type;if(!Bt.textureFormatReadable(Mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-z&&B>=0&&B<=M.height-D&&R.readPixels(P,B,z,D,Ct.convert(Mt),Ct.convert(yt),tt)}finally{const mt=T!==null?bt.get(T).__webglFramebuffer:null;Et.bindFramebuffer(R.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(M,P,B,z,D,tt,st){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=bt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&st!==void 0&&(ft=ft[st]),ft){const mt=M.texture,Mt=mt.format,yt=mt.type;if(!Bt.textureFormatReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=M.width-z&&B>=0&&B<=M.height-D){Et.bindFramebuffer(R.FRAMEBUFFER,ft);const _t=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,_t),R.bufferData(R.PIXEL_PACK_BUFFER,tt.byteLength,R.STREAM_READ),R.readPixels(P,B,z,D,Ct.convert(Mt),Ct.convert(yt),0);const Xt=T!==null?bt.get(T).__webglFramebuffer:null;Et.bindFramebuffer(R.FRAMEBUFFER,Xt);const Zt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Tc(R,Zt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,_t),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,tt),R.deleteBuffer(_t),R.deleteSync(Zt),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,P=null,B=0){M.isTexture!==!0&&(ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,M=arguments[1]);const z=Math.pow(2,-B),D=Math.floor(M.image.width*z),tt=Math.floor(M.image.height*z),st=P!==null?P.x:0,ft=P!==null?P.y:0;A.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,st,ft,D,tt),Et.unbindTexture()},this.copyTextureToTexture=function(M,P,B=null,z=null,D=0){M.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,M=arguments[1],P=arguments[2],D=arguments[3]||0,B=null);let tt,st,ft,mt,Mt,yt;B!==null?(tt=B.max.x-B.min.x,st=B.max.y-B.min.y,ft=B.min.x,mt=B.min.y):(tt=M.image.width,st=M.image.height,ft=0,mt=0),z!==null?(Mt=z.x,yt=z.y):(Mt=0,yt=0);const _t=Ct.convert(P.format),Xt=Ct.convert(P.type);A.setTexture2D(P,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,P.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,P.unpackAlignment);const Zt=R.getParameter(R.UNPACK_ROW_LENGTH),te=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Te=R.getParameter(R.UNPACK_SKIP_PIXELS),Gt=R.getParameter(R.UNPACK_SKIP_ROWS),xt=R.getParameter(R.UNPACK_SKIP_IMAGES),he=M.isCompressedTexture?M.mipmaps[D]:M.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,he.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,he.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ft),R.pixelStorei(R.UNPACK_SKIP_ROWS,mt),M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,D,Mt,yt,tt,st,_t,Xt,he.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,D,Mt,yt,he.width,he.height,_t,he.data):R.texSubImage2D(R.TEXTURE_2D,D,Mt,yt,tt,st,_t,Xt,he),R.pixelStorei(R.UNPACK_ROW_LENGTH,Zt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,te),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Te),R.pixelStorei(R.UNPACK_SKIP_ROWS,Gt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,xt),D===0&&P.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Et.unbindTexture()},this.copyTextureToTexture3D=function(M,P,B=null,z=null,D=0){M.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,M=arguments[2],P=arguments[3],D=arguments[4]||0);let tt,st,ft,mt,Mt,yt,_t,Xt,Zt;const te=M.isCompressedTexture?M.mipmaps[D]:M.image;B!==null?(tt=B.max.x-B.min.x,st=B.max.y-B.min.y,ft=B.max.z-B.min.z,mt=B.min.x,Mt=B.min.y,yt=B.min.z):(tt=te.width,st=te.height,ft=te.depth,mt=0,Mt=0,yt=0),z!==null?(_t=z.x,Xt=z.y,Zt=z.z):(_t=0,Xt=0,Zt=0);const Te=Ct.convert(P.format),Gt=Ct.convert(P.type);let xt;if(P.isData3DTexture)A.setTexture3D(P,0),xt=R.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)A.setTexture2DArray(P,0),xt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,P.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,P.unpackAlignment);const he=R.getParameter(R.UNPACK_ROW_LENGTH),Vt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ie=R.getParameter(R.UNPACK_SKIP_PIXELS),Gn=R.getParameter(R.UNPACK_SKIP_ROWS),Ae=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,te.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,te.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,mt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Mt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,yt),M.isDataTexture||M.isData3DTexture?R.texSubImage3D(xt,D,_t,Xt,Zt,tt,st,ft,Te,Gt,te.data):P.isCompressedArrayTexture?R.compressedTexSubImage3D(xt,D,_t,Xt,Zt,tt,st,ft,Te,te.data):R.texSubImage3D(xt,D,_t,Xt,Zt,tt,st,ft,Te,Gt,te),R.pixelStorei(R.UNPACK_ROW_LENGTH,he),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Vt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ie),R.pixelStorei(R.UNPACK_SKIP_ROWS,Gn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ae),D===0&&P.generateMipmaps&&R.generateMipmap(xt),Et.unbindTexture()},this.initRenderTarget=function(M){bt.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),Et.unbindTexture()},this.resetState=function(){L=0,w=0,T=null,Et.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ca?"display-p3":"srgb",e.unpackColorSpace=Wt.workingColorSpace===As?"display-p3":"srgb"}}class Es extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ll extends _e{constructor(t=null,e=1,n=1,s,r,a,o,l,c=fe,h=fe,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bp extends Ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vo=new ee,Zr=new ua,rs=new bs,as=new F;class zp extends ye{constructor(t=new $e,e=new Bp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(s),rs.radius+=r,t.ray.intersectsSphere(rs)===!1)return;vo.copy(s).invert(),Zr.copy(t.ray).applyMatrix4(vo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,x=f;g<x;g++){const p=c.getX(g);as.fromBufferAttribute(d,p),_o(as,p,l,s,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,x=f;g<x;g++)as.fromBufferAttribute(d,g),_o(as,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function _o(i,t,e,n,s,r,a){const o=Zr.distanceSqToPoint(i);if(o<e){const l=new F;Zr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class cl extends Re{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const xo=new ee;class kp{constructor(t,e,n=0,s=1/0){this.ray=new ua(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new da,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xo.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xo),this}intersectObject(t,e=!0,n=[]){return Jr(t,this,n,e),n.sort(Mo),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Jr(t[s],this,n,e);return n.sort(Mo),n}}function Mo(i,t){return i.distance-t.distance}function Jr(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Jr(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ea);const bn=`
float hash12(vec2 p){
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f*f*(3.0 - 2.0*f);
  float a = hash12(i), b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0)), d = hash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
const mat2 ROT_FBM = mat2(1.6, 1.2, -1.2, 1.6);
float fbm2(vec2 p){ return 0.6667*vnoise(p) + 0.3333*vnoise(ROT_FBM*p + 5.3); }
float fbm4(vec2 p){
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = ROT_FBM*p + 3.7; a *= 0.5; }
  return s/0.9375;
}
`,hl=`
const vec3 PAPER = vec3(0.955, 0.940, 0.905);
// Rotación alrededor del eje acromático: desplaza el tono de una absorbancia
// sin cambiar su densidad total.
vec3 hueRotate(vec3 c, float a){
  const vec3 k = vec3(0.57735);
  float ca = cos(a), sa = sin(a);
  return c*ca + cross(k, c)*sa + k*dot(k, c)*(1.0 - ca);
}
// Banda cromática digital acotada (cian -> violeta -> magenta) en absorbancia.
vec3 digitalA(float s){
  s = clamp(s, 0.0, 1.0);
  vec3 c = vec3(1.6, 0.22, 0.08), v = vec3(0.69, 1.02, 0.09), m = vec3(0.13, 1.2, 0.25);
  return s < 0.5 ? mix(c, v, s*2.0) : mix(v, m, s*2.0 - 1.0);
}
// Desplaza un pigmento hacia la banda digital conservando su densidad:
// produce intermedios (azul-violeta, magenta-cian) sin derivar a verdes.
vec3 hybridTint(vec3 A, float s, float k){
  float d = dot(A, vec3(0.3333));
  vec3 T = digitalA(s);
  T *= d/dot(T, vec3(0.3333));
  return mix(A, T, k);
}
`,Hp=`
uniform mat3 uPalM0;
uniform mat3 uPalM1;
uniform vec3 uPaper0;
uniform vec3 uPaper1;
uniform vec3 uGround0;
uniform vec3 uGround1;
uniform float uNight0;
uniform float uNight1;
uniform vec4 uPalWave;
float paletteK(vec2 q){
  if (uPalWave.w < 0.5) return 0.0;
  float d = length(q - uPalWave.xy) + (vnoise(q*6.0) - 0.5)*0.14;
  return 1.0 - smoothstep(uPalWave.z - 0.2, uPalWave.z, d);
}
vec3 palApply(vec3 A, float k){ return max(mix(uPalM0*A, uPalM1*A, k), 0.0); }
vec3 palPaper(float k){ return mix(uPaper0, uPaper1, k); }
vec3 palGround(float k){ return mix(uGround0, uGround1, k); }
float palNight(float k){ return mix(uNight0, uNight1, k); }
// Tono saturado de un pigmento, independiente de su densidad.
vec3 pigHue(vec3 A){ float d = max(dot(A, vec3(0.3333)), 0.04); return exp(-A/d*0.85); }
// Día: papel que absorbe. Noche: el pigmento emite su propio tono sobre un fondo de tinta.
vec3 renderPigment(vec3 A, float night, float k, float paperTex){
  vec3 day = palPaper(k)*paperTex*exp(-A);
  float dens = dot(A, vec3(0.3333));
  float cov = 1.0 - exp(-dens*2.6);
  vec3 glow = pigHue(A)*(0.45 + 0.8*cov);
  vec3 nightC = palGround(k)*(0.85 + 0.3*paperTex) + glow*cov*1.15;
  return mix(day, nightC, night);
}
`,ul=`
float waveZ(vec2 q){
  float z = 0.0;
  for (int i = 0; i < 8; i++){
    vec4 w = uWave[i];
    if (w.w == 0.0) continue;
    float age = uTime - w.z;
    if (age < 0.0 || age > 5.0) continue;
    float r = length(q - w.xy);
    float x = r - age*0.32;
    z += w.w*sin(x*55.0)*exp(-x*x*110.0)*exp(-age*0.75);
  }
  return z;
}
`,dl=`
float foldHeight(vec2 q, out float crease){
  float z = 0.0; crease = 0.0;
  for (int i = 0; i < 6; i++){
    vec4 f = uFold[i];
    if (abs(f.w) < 1e-5) continue;
    vec4 b = uFoldB[i];
    vec2 dir = vec2(cos(f.z), sin(f.z));
    vec2 r = q - f.xy;
    float d = dot(r, vec2(-dir.y, dir.x));
    float t = dot(r, dir);
    float along = 1.0 - smoothstep(b.y*0.55, b.y, abs(t));
    float prof = pow(max(0.0, 1.0 - sqrt(d*d + 1e-6)/b.x), 1.5);
    z += f.w*along*prof;
    crease = max(crease, along*(1.0 - smoothstep(0.0006, 0.0022, abs(d)))*smoothstep(0.0, 0.004, abs(f.w)));
  }
  return z;
}
`,Gp=`
vec3 rdHueA(float s){
  vec3 a = vec3(1.83, 1.51, 0.46), b = vec3(0.80, 1.31, 0.48);
  vec3 c = vec3(0.30, 1.70, 0.90), d = vec3(0.20, 0.48, 1.14);
  s = clamp(s, 0.0, 1.0)*3.0;
  return s < 1.0 ? mix(a, b, s) : s < 2.0 ? mix(b, c, s - 1.0) : mix(c, d, s - 2.0);
}
`,Vp=`
precision highp float;
precision highp sampler2D;
in vec2 vUv;
out vec4 oRD;
uniform sampler2D tState;
uniform sampler2D tDry;
uniform sampler2D tWet;
uniform sampler2D tField;
uniform vec2 uTexel;
uniform float uAspect;
uniform float uTime;
uniform float uAdvect;
uniform float uStepDt;
uniform float uIterSec;
uniform float uActive;
uniform float uGrowR;
uniform vec2 uOrigin;
uniform float uSeedRate;
uniform vec4 uMouse;
uniform vec4 uStroke[16];
uniform int uStrokeCount;
${bn}
const vec2 OFF[8] = vec2[8](vec2(1.0, 0.0), vec2(-1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, -1.0),
                            vec2(1.0, 1.0), vec2(-1.0, 1.0), vec2(1.0, -1.0), vec2(-1.0, -1.0));
const float WT[8] = float[8](0.2, 0.2, 0.2, 0.2, 0.05, 0.05, 0.05, 0.05);

void main(){
  vec2 q = vUv*vec2(uAspect, 1.0);
  vec2 vel = texture(tField, vUv).rg;
  vec2 uv = vUv - vel*uAdvect/vec2(uAspect, 1.0);
  vec4 c = texture(tState, uv);
  float U = 1.0 - c.r, V = c.g, age = c.b, hue = c.a;

  // Orientación: el campo compartido más una corriente lenta propia, para que
  // las vetas fluyan incluso donde el campo está en calma.
  float th = vnoise(q*1.3 + uTime*0.004)*6.2831853;
  vec2 fdir = normalize(vel*8.0 + vec2(cos(th), sin(th))*0.15 + 1e-5);
  float an = 0.45;

  // Laplaciano anisótropo: difunde más a lo largo del flujo que a través de él.
  vec2 lap = vec2(0.0);
  float wsum = 0.0, hueW = 0.0, hueS = 0.0;
  for (int i = 0; i < 8; i++){
    vec4 n = texture(tState, uv + OFF[i]*uTexel);
    float al = dot(normalize(OFF[i]), fdir);
    float w = WT[i]*(1.0 + an*(2.0*al*al - 1.0));
    lap += w*vec2(1.0 - n.r - U, n.g - V);
    wsum += w;
    hueS += n.a*n.g*WT[i];
    hueW += n.g*WT[i];
  }
  lap /= wsum;

  vec3 A = texture(tDry, vUv).rgb + texture(tWet, vUv).rgb;
  float d = dot(A, vec3(0.3333));
  float food = smoothstep(0.03, 0.25, d);

  // Régimen variable por zonas (laberinto <-> huella dactilar); el pigmento nutre.
  float z = vnoise(q*1.7 + 3.1);
  // Sobre papel desnudo hay menos alimento: el frente avanza desde las manchas, despacio.
  float F = mix(0.029, 0.039, z) + food*0.004 - (1.0 - food)*0.002;
  float K = mix(0.057, 0.0595, z) + food*0.0005;
  // Envejecimiento: tras ~40-60 s la zona se retira y deja espacio para regenerarse.
  K += smoothstep(40.0, 60.0, age)*0.012;
  K += (1.0 - uActive)*0.03;

  float r = U*V*V;
  // Escala del patrón variable por zonas: vetas anchas y finas conviven.
  float ds = mix(0.65, 1.3, vnoise(q*0.9 + 7.7));
  // El tiempo corre más despacio sobre el papel: el patrón se adentra poco a poco.
  float ts = uStepDt*mix(0.3, 1.0, food);
  U += ts*(ds*lap.x - r + F*(1.0 - U));
  V += ts*(0.5*ds*lap.y + r - (F + K)*V);

  age = V > 0.15 ? age + uIterSec : max(0.0, age - uIterSec*3.0);
  // El tono viaja con el crecimiento y se tiñe del pigmento que atraviesa.
  float sPig = clamp(0.5 + (A.b - A.r)*0.45/max(d, 0.05), 0.0, 1.0);
  hue = hueW > 1e-3 ? mix(hue, hueS/hueW, 0.25) : hue;
  hue = mix(hue, sPig, 0.04*food);

  if (uActive > 0.5){
    float dist = length(q - uOrigin);
    float front = 1.0 - smoothstep(0.0, 0.1, abs(dist - uGrowR));
    float blob = vnoise(q*60.0 + floor(uTime*0.5)*13.7);
    // Semillas suaves (manchas de ruido, no píxeles) donde hay pigmento.
    if (dist < uGrowR && blob > 1.0 - (0.08*front + uSeedRate)*food){ V = max(V, 0.5); hue = sPig; age = 0.0; }
    for (int i = 0; i < 16; i++){
      if (i >= uStrokeCount) break;
      if (length(q - uStroke[i].xy) < 0.01){ V = max(V, 0.5); hue = sPig; age = 0.0; }
    }
    float dm = length(q - uMouse.xy);
    if (uMouse.w > 0.5 && dm < 0.014){ V = max(V, 0.45); age = 0.0; }
    if (uMouse.w < -0.5) V *= mix(1.0, 0.85, exp(-dm*dm/0.0025));
  }
  oRD = vec4(clamp(1.0 - U, 0.0, 1.0), clamp(V, 0.0, 1.0), age, hue);
}
`,fl=`
uniform float uAspect;
uniform float uScale;
uniform float uTime;
uniform float uTech;
uniform float uHybrid;
uniform float uAgitation;
uniform float uRelief;
uniform float uNetGlow;
uniform vec4 uFold[6];
uniform vec4 uFoldB[6];
uniform vec4 uWave[8];
uniform vec4 uCharge;
uniform vec3 uLight;
uniform sampler2D tWet;
uniform sampler2D tDry;
uniform sampler2D tField;
uniform sampler2D tPaper;
uniform sampler2D tTrail;
uniform sampler2D tRD;
uniform vec2 uRDTexel;
uniform float uRDVis;
uniform float uRupT;
uniform vec2 uRupO;
`,Wp=fl+bn+ul+dl+`
varying vec2 vUv;
varying vec2 vGradOther;
varying vec3 vWorld;

float densAt(vec2 q){
  vec2 uv = q/vec2(uAspect, 1.0);
  return dot(texture(tDry, uv).rgb + texture(tWet, uv).rgb, vec3(0.3333));
}

// Desplazamientos que no son pliegues (los pliegues se sombrean por píxel).
float otherDisp(vec2 q){
  float z = waveZ(q)*(0.25 + 0.75*uTech);
  vec2 dc = q - uCharge.xy;
  z -= uCharge.z*0.012*exp(-dot(dc, dc)/0.003);
  vec2 uv = q/vec2(uAspect, 1.0);
  if (uRelief > 0.0){
    // El cuadro se eleva: la densidad de pigmento se vuelve topografía.
    const float r = 0.006;
    float d = densAt(q)*0.4 + (densAt(q + vec2(r, 0.0)) + densAt(q - vec2(r, 0.0)) + densAt(q + vec2(0.0, r)) + densAt(q - vec2(0.0, r)))*0.15;
    z += (1.0 - exp(-d*1.6))*uRelief;
    z += (1.0 - exp(-texture(tTrail, uv).r*0.04))*uRelief*0.18;
    // Los patrones de reacción-difusión se graban en relieve sobre la mancha.
    z += smoothstep(0.15, 0.4, texture(tRD, uv).g)*uRelief*0.1*uRDVis;
  }
  float hyb = texture(tField, uv).b*uHybrid;
  z += hyb*densAt(q)*0.006;
  return z;
}

void main(){
  vUv = uv;
  vec2 q = uv*vec2(uAspect, 1.0);
  float cr;
  float zf = foldHeight(q, cr);
  float e = 0.004;
  float z0 = otherDisp(q);
  float zx = otherDisp(q + vec2(e, 0.0));
  float zy = otherDisp(q + vec2(0.0, e));
  vGradOther = vec2(zx - z0, zy - z0)/e;
  vec3 world = vec3(position.xy, (zf + z0)*uScale);
  vWorld = world;
  gl_Position = projectionMatrix*modelViewMatrix*vec4(world, 1.0);
}
`,qp=fl+bn+hl+dl+Hp+Gp+`
uniform vec2 uPaperTexel;
varying vec2 vUv;
varying vec2 vGradOther;
varying vec3 vWorld;

// Voronoi (distancia al borde de celda + identificador): las grietas de la ruptura.
vec2 hash22(vec2 p){ return vec2(hash12(p), hash12(p + 17.31)); }
vec2 voronoiCrack(vec2 x){
  vec2 n = floor(x), f = fract(x), mg = vec2(0.0), mr = vec2(0.0);
  float md = 8.0;
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++){
    vec2 g = vec2(float(i), float(j));
    vec2 r = g + hash22(n + g) - f;
    float d = dot(r, r);
    if (d < md){ md = d; mr = r; mg = g; }
  }
  md = 8.0;
  for (int j = -2; j <= 2; j++) for (int i = -2; i <= 2; i++){
    vec2 g = mg + vec2(float(i), float(j));
    vec2 r = g + hash22(n + g) - f;
    if (dot(mr - r, mr - r) > 1e-5) md = min(md, dot(0.5*(mr + r), normalize(r - mr)));
  }
  return vec2(md, hash12(n + mg));
}

void main(){
  vec2 q0 = vUv*vec2(uAspect, 1.0);
  vec4 F = texture(tField, vUv);
  float hyb = F.b*uHybrid;
  float pk = paletteK(q0);

  // Fase II: el campo deforma las marcas y separa los canales del pigmento.
  float deform = uTech*(1.0 - 0.6*hyb);
  vec2 q = q0 + F.rg*0.07*deform;
  vec2 dc = q - uCharge.xy;
  float gc = exp(-dot(dc, dc)/0.006)*uCharge.z;
  q -= dc*gc*0.45;
  q += vec2(-dc.y, dc.x)*gc*0.7;

  // RUPTURA — digitalización forzada. Implosión, impacto, grietas que irradian,
  // fragmentos desplazados, pixelado creciente, color que se escurre y apagón.
  float rs = uRupT;
  bool rup = rs >= 0.0 && rs < 8.0;
  float crack = 0.0, crackFresh = 0.0, drain = 0.0, vanish = 0.0, flash = 0.0;
  if (rup){
    vec2 rel = q0 - uRupO;
    float rd = length(rel);
    float implode = smoothstep(0.0, 0.55, rs)*(1.0 - smoothstep(0.6, 0.8, rs));
    q -= rel*implode*0.22*exp(-rd*1.2);
    vec2 vc = voronoiCrack(q0*vec2(7.0, 9.0) + 3.7);
    float cid = vc.y;
    float front = max(0.0, rs - 0.6)*1.15;
    float reached = 1.0 - smoothstep(front - 0.06, front, rd);
    float shatter = smoothstep(0.6, 1.1, rs)*(1.0 - smoothstep(5.0, 7.0, rs))*reached;
    vec2 away = rel/max(rd, 1e-3);
    q -= (away*(0.006 + 0.03*cid) + vec2(0.0, -0.05*cid*smoothstep(1.5, 5.0, rs)))*shatter;
    float pix = smoothstep(1.0, 3.2, rs)*(1.0 - smoothstep(5.2, 7.2, rs))*reached;
    float bs = 0.03*(0.4 + cid)*pix;
    if (bs > 0.0015) q = (floor(q/bs) + 0.5)*bs;
    float tear = smoothstep(0.6, 0.68, rs)*(1.0 - smoothstep(0.7, 1.9, rs));
    float band = floor(q0.y*70.0);
    q.x += (hash12(vec2(band, floor(rs*24.0))) - 0.5)*0.07*tear*step(0.72, hash12(vec2(band, 3.0)));
    crack = (1.0 - smoothstep(0.0, 0.012, vc.x))*reached*(1.0 - smoothstep(6.0, 7.5, rs));
    crackFresh = exp(-max(front - rd, 0.0)*7.0)*step(0.6, rs);
    drain = smoothstep(0.7, 2.4, rs)*(1.0 - smoothstep(5.6, 7.5, rs));
    vanish = smoothstep(2.4 + cid*2.2, 3.0 + cid*2.2, rs)*(1.0 - smoothstep(5.8, 7.5, rs))*reached;
    flash = step(0.6, rs)*(1.0 - smoothstep(0.6, 1.1, rs))*exp(-rd*2.0);
  }
  vec2 uv = q/vec2(uAspect, 1.0);
  vec2 split = F.rg*0.022*deform/vec2(uAspect, 1.0) + vec2(0.0012, 0.0)*deform;
  vec4 W = texture(tWet, uv);
  vec3 A = texture(tDry, uv).rgb + W.rgb;
  // Separación de canales sólo cuando la tecnología deforma (ahorra 4 lecturas en la fase I).
  if (deform > 0.001){
    A.r = texture(tDry, uv + split).r + texture(tWet, uv + split).r;
    A.b = texture(tDry, uv - split).b + texture(tWet, uv - split).b;
  }

  vec4 P = texture(tPaper, vUv);
  float hx = texture(tPaper, vUv + vec2(uPaperTexel.x, 0.0)).r - texture(tPaper, vUv - vec2(uPaperTexel.x, 0.0)).r;
  float hy = texture(tPaper, vUv + vec2(0.0, uPaperTexel.y)).r - texture(tPaper, vUv - vec2(0.0, uPaperTexel.y)).r;

  float dens = dot(A, vec3(0.3333));
  float gran = 0.3 + 0.6*clamp((A.r - A.b)*0.5, 0.0, 1.0);
  A *= 1.0 + gran*(0.5 - P.r)*1.2*smoothstep(0.03, 0.5, dens);

  float ang = atan(F.g, F.r + 1e-6);
  A = hybridTint(A, 0.5 + 0.5*sin(ang*2.0 + uTime*0.1), hyb*0.28);
  A = palApply(A, pk);
  dens = dot(A, vec3(0.3333));

  // Noche: la tecnología apaga el papel y el pigmento emite; el encuentro devuelve la luz.
  float night = max(uTech*(1.0 - hyb), palNight(pk));
  float paperTex = 0.975 + 0.035*P.a;
  vec3 col = renderPigment(A, night, pk, paperTex);
  if (rup){
    // El color se escurre y los fragmentos se apagan uno a uno hacia la oscuridad.
    float g = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(col, vec3(g)*vec3(0.92, 0.95, 1.05), drain*0.85);
    col = mix(col, vec3(0.02, 0.025, 0.05), vanish*0.92);
  }

  vec3 L = normalize(uLight);
  vec3 pn = normalize(vec3(-hx*0.9, -hy*0.9, 1.0));
  float relief = dot(pn, L) - L.z;
  col *= 1.0 + relief*0.22*(0.3 + 0.7*exp(-dens*2.5))*(1.0 - 0.6*night);

  float wet = smoothstep(0.03, 0.5, W.a);
  col *= 1.0 - 0.05*wet*(1.0 - night);
  col += wet*0.035*smoothstep(0.02, 0.08, relief);

  // Reacción-difusión: vetas finas que fluyen desde las manchas hacia el papel,
  // con el tono que transportan desde su origen. Emiten de noche, entintan de día.
  if (uRDVis > 0.001){
    vec4 RDs = texture(tRD, uv);
    float rv = RDs.g;
    float pat = smoothstep(0.18, 0.42, rv)*uRDVis;
    vec2 rg = vec2(texture(tRD, uv + vec2(uRDTexel.x, 0.0)).g - texture(tRD, uv - vec2(uRDTexel.x, 0.0)).g,
                   texture(tRD, uv + vec2(0.0, uRDTexel.y)).g - texture(tRD, uv - vec2(0.0, uRDTexel.y)).g);
    float rEdge = smoothstep(0.05, 0.3, length(rg))*uRDVis;
    // Las zonas viejas se desvanecen antes de retirarse.
    float rLife = 1.0 - smoothstep(35.0, 58.0, RDs.b);
    vec3 rA = mix(palApply(rdHueA(RDs.a), pk), A/max(dens, 0.05)*0.9, 0.35*smoothstep(0.05, 0.3, dens));
    vec3 rHue = pigHue(rA);
    vec3 rNight = col + rHue*(pat*0.22 + rEdge*0.45)*rLife;
    vec3 rDay = col*exp(-rA*(pat*0.28 + rEdge*0.18)*rLife);
    col = mix(rDay, rNight, night);
  }

  // Pliegues + relieve: luz rasante, más dramática de noche.
  float crease = 0.0, cx, cy;
  vec2 fg = vec2(0.0);
  if (uTech > 0.001){
    float fe = 0.0015;
    float f0 = foldHeight(q0, crease);
    float fx = foldHeight(q0 + vec2(fe, 0.0), cx);
    float fy = foldHeight(q0 + vec2(0.0, fe), cy);
    fg = vec2(fx - f0, fy - f0)/fe;
  }
  vec3 n = normalize(vec3(-(fg + vGradOther), 1.0));
  float sh = dot(n, L) - L.z;
  col *= clamp(1.0 + sh*mix(0.75, 1.5, night), 0.5, 1.2);
  vec3 hue = pigHue(A + vec3(0.03));
  col += night*max(sh, 0.0)*hue*0.35*smoothstep(0.05, 0.4, dens);
  col = mix(col, vec3(0.86, 0.97, 1.0), crease*mix(0.45, 0.12, night)*uTech*(1.0 - 0.6*uHybrid));

  // Red de physarum: filamentos luminosos de noche, tinta de día.
  if (uNetGlow > 0.001){
    float tr = texture(tTrail, vUv).r;
    float net = (1.0 - exp(-tr*0.09))*uNetGlow;
    float core = smoothstep(4.0, 30.0, tr)*uNetGlow;
    vec3 netGlow = (mix(vec3(0.3, 0.62, 0.95), hue*1.2, 0.8*smoothstep(0.02, 0.3, dens))*net + vec3(0.85, 0.94, 1.0)*core*0.22)*0.8;
    vec3 inkA = palApply(digitalA(0.5 + 0.5*sin(q0.x*3.0 + q0.y*2.0 + uTime*0.05)), pk);
    vec3 dayNet = col*exp(-inkA*net*0.9);
    col = mix(dayNet, col + netGlow, night);
  }

  // Lectura algorítmica: curvas de nivel del pigmento (topografía luminosa de noche).
  float lev = dens*6.0;
  float fw = max(fwidth(lev), 1e-4);
  float dl = min(fract(lev), 1.0 - fract(lev))/fw;
  float line = 1.0 - smoothstep(0.5, 1.5, dl);
  float mask = uTech*0.45*smoothstep(0.05, 0.15, dens);
  vec3 lineCol = mix(mix(vec3(0.72, 0.93, 1.0), col*0.55, hyb), hue*1.4 + 0.08, night);
  col = mix(col, lineCol, line*mask*(0.55 + 0.25*(1.0 - uAgitation)));

  if (rup){
    vec3 crackCol = mix(vec3(0.02, 0.02, 0.04), vec3(0.85, 0.95, 1.0), crackFresh);
    col = mix(col, crackCol, crack*(0.65 + 0.35*crackFresh));
    col += vec3(0.9, 0.95, 1.0)*flash*0.6;
  }

  // Señal de umbral (ratón o manos): hacia la ruptura el mundo se enfría y se apaga
  // a latidos; hacia el encuentro amanece una luz cálida.
  float cz = uCharge.z;
  if (cz > 0.0){
    float beat = 0.7 + 0.3*sin(uTime*(5.0 + cz*7.0));
    float far = smoothstep(0.1, 1.0, length(q0 - uCharge.xy));
    if (uCharge.w < 1.5){
      float g = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(col, vec3(g)*vec3(0.75, 0.8, 0.95), cz*0.6);
      col *= 1.0 - cz*0.5*far*beat;
    } else {
      col = mix(col, col*vec3(1.12, 1.0, 0.8) + vec3(0.14, 0.1, 0.05)*(1.0 - far), cz*0.65*beat);
      col += vec3(0.55, 0.4, 0.22)*cz*cz*(1.0 - far)*0.55*beat;
    }
  }

  float vig = length(vUv - 0.5)*1.25;
  col *= 1.0 - mix(0.16, 0.45, night)*pow(vig, 2.2);
  gl_FragColor = vec4(col, 1.0);
}
`,Be=(i,t,e)=>[-Math.log(i),-Math.log(t),-Math.log(e)],ze=[{name:"ultramar",A:Be(.16,.22,.63)},{name:"cerúleo",A:Be(.22,.55,.74)},{name:"violeta",A:Be(.45,.27,.62)},{name:"magenta",A:Be(.8,.22,.55)},{name:"carmín",A:Be(.74,.14,.24)},{name:"ocre",A:Be(.82,.62,.32)},{name:"amarillo cálido",A:Be(.97,.8,.28)}],Xe=[{name:"cian eléctrico",A:Be(.2,.8,.92)},{name:"azul profundo",A:Be(.1,.16,.48)},{name:"violeta",A:Be(.5,.36,.92)},{name:"magenta",A:Be(.88,.3,.78)}];function hi(i,t,e,n=[0,0,0]){for(let s=0;s<3;s++)n[s]=i[s]+(t[s]-i[s])*e;return n}const So=[1,0,0,0,1,0,0,0,1];function cr(i,t=.35){const e=(i[0]+i[1]+i[2])/3,n=i.map(r=>r/e),s=[];for(let r=0;r<3;r++)for(let a=0;a<3;a++)s.push((r===a?t:0)+(1-t)*n[r]/3);return s}const ii=[{name:"papel",M:So,paper:[.955,.94,.905],ground:[.025,.03,.07],night:0,ink:Xe[2].A},{name:"terracota",M:cr([.35,.95,1.25],.45),paper:[.965,.945,.915],ground:[.04,.03,.035],night:0,ink:Xe[1].A},{name:"nocturno",M:So,paper:[.955,.94,.905],ground:[.018,.026,.065],night:1,ink:Xe[0].A},{name:"tinta",M:cr([1.55,1.25,.35]),paper:[.97,.945,.885],ground:[.03,.03,.06],night:0,ink:Xe[3].A},{name:"brasas",M:cr([.2,.85,1.6],.4),paper:[.95,.93,.92],ground:[.05,.022,.045],night:1,ink:Xe[3].A}];class Xp{constructor(t){this.shared=t,Object.assign(t,{uPalM0:{value:new Pt},uPalM1:{value:new Pt},uPaper0:{value:new F},uPaper1:{value:new F},uGround0:{value:new F},uGround1:{value:new F},uNight0:{value:0},uNight1:{value:0},uPalWave:{value:new wt(0,0,0,0)}}),this.dissolve=new wt(0,0,0,0),this.reset()}set(t,e){const n=this.shared;n["uPalM"+t].value.set(...e.M),n["uPaper"+t].value.fromArray(e.paper),n["uGround"+t].value.fromArray(e.ground),n["uNight"+t].value=e.night}reset(){this.index=0,this.set(0,ii[0]),this.set(1,ii[0]),this.shared.uPalWave.value.set(0,0,0,0),this.dissolve.set(0,0,0,0),this.active=!1,this.shifts=0}get current(){return ii[this.index]}get transitioning(){return this.active}shift(t){if(this.active)return!1;const e=(this.index+1)%ii.length;return this.set(1,ii[e]),this.next=e,this.radius=0,this.origin=t.slice(),this.active=!0,this.shifts++,!0}update(t,e){if(!this.active){this.dissolve.w=0;return}this.radius+=t*.32,this.shared.uPalWave.value.set(this.origin[0],this.origin[1],this.radius,1),this.dissolve.set(this.origin[0],this.origin[1],this.radius,.8),this.radius>Math.hypot(e,1)+.3&&(this.index=this.next,this.set(0,ii[this.index]),this.shared.uPalWave.value.w=0,this.dissolve.w=0,this.active=!1)}}const nn=10,yo=.93;class Yp{constructor(t){this.renderer=new Op({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setClearColor(15328472,1),this.scene=new Es,this.camera=new De(30,1,.1,200),this.camDist=nn*yo*.5/Math.tan(Is.degToRad(15)),this.camera.position.set(0,0,this.camDist),this.shared={uTime:{value:0},uAspect:{value:1},uScale:{value:nn},uTech:{value:0},uHybrid:{value:0},uAgitation:{value:0},uWave:{value:Array.from({length:8},()=>new wt(0,0,0,0))},uFold:{value:Array.from({length:6},()=>new wt(0,0,0,0))},uFoldB:{value:Array.from({length:6},()=>new wt(0,0,0,0))},uCharge:{value:new wt(0,0,0,0)},uLight:{value:new F(-.45,.55,.7).normalize()},tWet:{value:null},tDry:{value:null},tField:{value:null},tPaper:{value:null},tTrail:{value:null},uRelief:{value:0},uNetGlow:{value:0},uRupT:{value:-1},uRupO:{value:new Lt},tRD:{value:null},uRDTexel:{value:new Lt(1/560,1/330)},uRDVis:{value:0}},this.palette=new Xp(this.shared),this.canvasUniforms={...this.shared,uPaperTexel:{value:new Lt}},this.canvasMat=new Re({vertexShader:Wp,fragmentShader:qp,uniforms:this.canvasUniforms}),this.canvasMesh=new Ue(new kn(1,1),this.canvasMat),this.canvasMesh.frustumCulled=!1,this.canvasMesh.renderOrder=0,this.scene.add(this.canvasMesh),this.shadowGroup=new ai,this.structGroup=new ai,this.scene.add(this.shadowGroup,this.structGroup),this.footScene=new Es,this.footCamera=new ws(-1,1,1,-1,-50,50),this.raycaster=new kp,this.plane=new _n(new F(0,0,1),0),this.ndc=new Lt,this.hit=new F,this.drift=new Lt,this.lookTarget=new F}resize(t,e,n){this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.width=t,this.height=e,this.aspect=t/e,this.shared.uAspect.value=this.aspect,this.camera.aspect=this.aspect,this.camera.updateProjectionMatrix(),this.canvasMesh.geometry.dispose(),this.canvasMesh.geometry=new kn(this.aspect*nn,nn,300,180);const s=this.aspect*nn/2,r=nn/2;return Object.assign(this.footCamera,{left:-s,right:s,top:r,bottom:-r}),this.footCamera.position.set(0,0,10),this.footCamera.updateProjectionMatrix(),this.aspect}setPaper(t,e,n){this.shared.tPaper.value=t,this.canvasUniforms.uPaperTexel.value.set(1/e,1/n)}screenToQ(t,e,n=[0,0]){return this.ndc.set(t/this.width*2-1,-(e/this.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.camera),this.raycaster.ray.intersectPlane(this.plane,this.hit)?(n[0]=this.hit.x/nn+this.aspect/2,n[1]=this.hit.y/nn+.5,n):null}updateCamera(t,e,n,s,r=0){const a=(1-yo)*.5*nn*1.4,o=a*Math.min(1,this.aspect),l=a*Math.min(1,1/this.aspect),c=Is.clamp((Math.sin(e*.071)*.35+(s?s[0]*.25:0))*n,-o,o),h=Is.clamp((Math.sin(e*.053+1.3)*.25+(s?s[1]*.18:0))*n,-l,l),d=Math.min(1,t*.8);this.drift.x+=(c-this.drift.x)*d,this.drift.y+=(h-this.drift.y)*d;const u=r*(Math.sin(e*71.3)*.6+Math.sin(e*43.7+1.1)*.4)*.12,f=r*(Math.sin(e*63.1+2.3)*.6+Math.sin(e*37.9)*.4)*.12;this.camera.position.set(this.drift.x+u,this.drift.y+f,this.camDist),this.lookTarget.set(this.drift.x*.6+u*.3,this.drift.y*.6+f*.3,0),this.camera.lookAt(this.lookTarget)}renderFootprint(t){const e=this.renderer;e.setRenderTarget(t),e.setClearColor(0,0),e.clear(!0,!1,!1),e.render(this.footScene,this.footCamera),e.setClearColor(15328472,1),e.setRenderTarget(null)}render(){this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)}}const Kp=`
precision highp float;
in vec3 position;
in vec2 uv;
out vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,$p=new kn(2,2);function yn(i,t){return new cl({glslVersion:Ms,vertexShader:Kp,fragmentShader:i,uniforms:t,depthTest:!1,depthWrite:!1})}class En{constructor(t){this.material=t,this.mesh=new Ue($p,t),this.mesh.frustumCulled=!1,this.scene=new Es,this.scene.add(this.mesh),this.camera=new ws(-1,1,1,-1,0,1)}render(t,e){t.setRenderTarget(e),t.render(this.scene,this.camera)}dispose(){this.material.dispose()}}function Ke(i,t){i.setRenderTarget(t),i.setClearColor(0,0),i.clear(!0,!1,!1)}const an=16,Ni=`
precision highp float;
precision highp sampler2D;
in vec2 vUv;
`,jp=Ni+`
out vec4 oPaper;
uniform float uAspect;
${bn}
void main(){
  vec2 q = vec2(vUv.x*uAspect, vUv.y);
  float cells = fbm4(q*140.0);
  float f1 = vnoise(mat2(0.8, -0.6, 0.6, 0.8)*q*vec2(1100.0, 70.0));
  float f2 = vnoise(mat2(0.28, 0.96, -0.96, 0.28)*q*vec2(900.0, 60.0));
  float fiber = smoothstep(0.55, 0.95, f1)*0.6 + smoothstep(0.6, 0.95, f2)*0.5;
  float h = clamp(cells*0.8 + fiber*0.3 + vnoise(q*700.0)*0.15 - 0.12, 0.0, 1.0);
  float absb = fbm4(q*22.0 + 4.1)*0.72 + vnoise(q*75.0)*0.28;
  float tone = fbm4(q*3.0 + 9.0);
  oPaper = vec4(h, absb, fiber, tone);
}
`,Zp=Ni+`
layout(location = 0) out vec4 oWet;
layout(location = 1) out vec4 oDry;
uniform sampler2D tWet;
uniform sampler2D tDry;
uniform sampler2D tField;
uniform sampler2D tPaper;
uniform sampler2D tDeposit;
uniform vec2 uTexel;
uniform float uAspect;
uniform float uDt;
uniform float uAdvect;
uniform float uAniso;
uniform float uDepositAmt;
uniform int uSegCount;
uniform vec4 uSeg[${an}];
uniform vec4 uSegP[${an}];
uniform vec4 uSegC[${an}];
uniform vec4 uDrop;
uniform sampler2D tTrail;
uniform float uDryAdvect;
uniform float uNetDeposit;
uniform vec3 uNetA;
uniform vec4 uDissolve;
uniform sampler2D tRD;
uniform float uRDDeposit;
uniform vec4 uBlot;
${bn}
const vec2 OFF[8] = vec2[8](vec2(1.0, 0.0), vec2(-1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, -1.0),
                            vec2(1.0, 1.0), vec2(-1.0, 1.0), vec2(1.0, -1.0), vec2(-1.0, -1.0));
const float WT[8] = float[8](1.0, 1.0, 1.0, 1.0, 0.7071, 0.7071, 0.7071, 0.7071);

float perm(vec4 pp, float damp){
  float a = pp.g*0.86 + pp.r*0.14;
  return mix(0.16 + 0.84*smoothstep(0.32, 0.7, a), 1.0, damp*0.85);
}

void main(){
  vec2 q = vec2(vUv.x*uAspect, vUv.y);
  vec4 F = texture(tField, vUv);
  vec2 vel = F.rg;
  float fl = length(vel);
  vec2 fdir = fl > 1e-5 ? vel/fl : vec2(1.0, 0.0);
  float an = uAniso*F.b*smoothstep(0.004, 0.05, fl);
  vec2 uv0 = vUv - vel*uAdvect*uDt*vec2(1.0/uAspect, 1.0);

  vec4 C = texture(tWet, uv0);
  // Marmolado (fase II): el campo arrastra también el pigmento seco.
  vec4 D = texture(tDry, vUv - vel*uDryAdvect*uDt*vec2(1.0/uAspect, 1.0));
  vec4 Pp = texture(tPaper, vUv);
  float w = C.a;
  float pC = perm(Pp, D.a);
  vec3 cC = min(C.rgb/max(w, 0.02), vec3(12.0));

  vec3 dP = vec3(0.0);
  float dW = 0.0;
  for (int i = 0; i < 8; i++){
    vec2 o = OFF[i]*uTexel;
    vec4 N = texture(tWet, uv0 + o);
    float pN = perm(texture(tPaper, vUv + o), texture(tDry, vUv + o).a);
    float al = abs(dot(normalize(OFF[i]), fdir));
    float g = WT[i]*mix(1.0, 0.4 + 1.2*al*al, an);
    float f = 0.055*0.5*(pC + pN)*g*(N.a - w);
    f *= smoothstep(0.003, 0.04, max(N.a, w));
    // Frente húmedo sobre papel seco: el agua sólo cruza si la lámina vecina
    // supera un umbral que depende de la absorción local -> bordes duros e irregulares.
    if (f > 0.0 && w < 0.012) f *= smoothstep(0.05 + 0.3*(1.0 - pC), 0.1 + 0.3*(1.0 - pC), N.a);
    if (f < 0.0 && N.a < 0.012) f *= smoothstep(0.05 + 0.3*(1.0 - pN), 0.1 + 0.3*(1.0 - pN), w);
    vec3 cN = min(N.rgb/max(N.a, 0.02), vec3(12.0));
    dP += f > 0.0 ? f*cN : f*cC;
    dW += f;
    dP += 0.02*g*(N.rgb - C.rgb)*smoothstep(0.02, 0.2, min(N.a, w));
  }

  vec3 P = max(C.rgb + dP, 0.0);
  float wn = w + dW;
  float thin = 1.0 - smoothstep(0.02, 0.25, wn);
  wn -= uDt*(0.010 + 0.05*thin);

  // Sedimentación: más rápida cuando el agua se agota y en los valles del papel (granulación).
  float h = Pp.r;
  float settle = uDt*(0.05 + 1.6*(1.0 - smoothstep(0.0, 0.08, wn)))*(1.3 - 0.75*h);
  vec3 dep = P*clamp(settle, 0.0, 1.0);
  if (wn < 0.002) dep = P;
  // Re-humectación: el agua nueva levanta parte del pigmento seco (floraciones).
  vec3 lift = D.rgb*uDt*0.02*smoothstep(0.25, 0.9, wn);

  // Depósito del pincel: cápsulas deformadas por dominio, carga desigual.
  vec3 pAdd = vec3(0.0);
  float wAdd = 0.0;
  for (int i = 0; i < ${an}; i++){
    if (i >= uSegCount) break;
    vec4 s = uSeg[i]; vec4 sp = uSegP[i]; vec4 sc = uSegC[i];
    float r = sp.x;
    vec2 ba = s.zw - s.xy;
    float L2 = dot(ba, ba);
    vec2 pa0 = q - s.xy;
    float t0 = L2 > 1e-10 ? clamp(dot(pa0, ba)/L2, 0.0, 1.0) : 0.0;
    if (length(pa0 - ba*t0) > r*1.9) continue;
    float seed = sp.w;
    float fq = 2.2/r;
    vec2 wq = q + (vec2(fbm2(q*fq + seed), fbm2(q*fq + seed + 17.1)) - 0.5)*r*(0.5 + 0.9*sc.a);
    vec2 pa = wq - s.xy;
    float t = L2 > 1e-10 ? clamp(dot(pa, ba)/L2, 0.0, 1.0) : 0.0;
    float d = length(pa - ba*t);
    float rr = r*(0.78 + 0.5*vnoise(q*(5.0/r) + seed*1.7));
    float m = 1.0 - smoothstep(rr*0.82, rr, d);
    if (m <= 0.0) continue;
    float side = L2 > 1e-10 ? (pa.x*ba.y - pa.y*ba.x)/(sqrt(L2)*r) : 0.0;
    float dens = (0.5 + 1.0*fbm2(q*(3.5/r) + seed*3.1))*(1.0 + 0.5*side*(fract(seed*7.13)*2.0 - 1.0));
    dens *= (0.85 + 0.3*vnoise(q*240.0))*(1.2 - 0.45*h);
    wAdd += m*sp.y;
    pAdd += m*sp.z*max(dens, 0.05)*sc.rgb;
  }
  if (uDrop.w > 0.0){
    float n = fbm2(q*(2.0/uDrop.z) + 3.0);
    float dd = length(q - uDrop.xy)*(0.75 + 0.5*n);
    wAdd += uDrop.w*(1.0 - smoothstep(uDrop.z*0.45, uDrop.z, dd));
  }
  // La red de physarum entinta los huecos entre las manchas (complementa, no tapa).
  if (uNetDeposit > 0.0){
    float tr = texture(tTrail, vUv).r;
    float net = 1.0 - exp(-tr*0.05);
    float dl = dot(D.rgb + P, vec3(0.3333));
    float tone = 0.5 + 0.5*sin(q.x*5.0 + q.y*3.0);
    pAdd += uNetA*(0.7 + 0.6*tone)*net*(1.0 - smoothstep(0.15, 0.7, dl))*uNetDeposit*F.b*0.0012;
  }
  // Fase III: los patrones se vuelven pigmento del mismo tono que la mancha que los aloja.
  if (uRDDeposit > 0.0){
    float rv = smoothstep(0.15, 0.4, texture(tRD, vUv).g);
    vec3 Ah = D.rgb + P;
    float dh = dot(Ah, vec3(0.3333));
    // Sólo refuerza dentro de manchas existentes: nunca las expande (evita el crecimiento desbocado).
    float inside = smoothstep(0.12, 0.25, dh)*(1.0 - smoothstep(0.6, 1.1, dh));
    pAdd += Ah/max(dh, 0.05)*rv*inside*uRDDeposit*F.b*0.0006;
  }
  vec4 dep4 = texture(tDeposit, vUv);
  pAdd += dep4.rgb*uDepositAmt;
  wAdd += dep4.a*uDepositAmt;
  // Techo de saturación: la obra no se ennegrece con el tiempo.
  float tot = dot(D.rgb + P, vec3(0.3333));
  pAdd *= 1.0 - smoothstep(1.6, 3.0, tot);

  vec3 Pn = max(P - dep + lift + pAdd, 0.0);
  wn = clamp(wn + wAdd, 0.0, 1.6);
  vec3 Dn = max(D.rgb + dep - lift, 0.0);
  // Papel secante (puño en la fase I): absorbe agua y pigmento húmedo, roza el seco.
  if (uBlot.w > 0.0){
    float bd = length(q - uBlot.xy)*(0.85 + 0.3*vnoise(q*60.0));
    float k = clamp((1.0 - smoothstep(uBlot.z*0.6, uBlot.z, bd))*uBlot.w*uDt, 0.0, 1.0);
    Pn *= 1.0 - k;
    wn *= 1.0 - k;
    Dn *= 1.0 - k*0.25;
  }
  // Cambio de paleta: tras el frente, el cuadro anterior se aclara y deja espacio.
  if (uDissolve.w > 0.0){
    float dd = length(q - uDissolve.xy);
    float band = smoothstep(uDissolve.z - 0.5, uDissolve.z - 0.3, dd)*(1.0 - smoothstep(uDissolve.z - 0.05, uDissolve.z, dd));
    float keep = 1.0 - clamp(band*uDissolve.w*uDt, 0.0, 1.0);
    Dn *= keep;
    Pn *= keep;
  }
  float damp = max(D.a - uDt*0.045, smoothstep(0.01, 0.12, wn));
  oWet = vec4(Pn, wn);
  oDry = vec4(Dn, damp);
}
`,Jp=Ni+`
layout(location = 0) out vec4 oWet;
layout(location = 1) out vec4 oDry;
uniform sampler2D tWet;
uniform sampler2D tDry;
void main(){ oWet = texture(tWet, vUv); oDry = texture(tDry, vUv); }
`,Qp=Ni+`
out vec4 oField;
uniform sampler2D tField;
uniform sampler2D tDry;
uniform sampler2D tWet;
uniform vec2 uTexel;
uniform float uAspect;
uniform float uDt;
uniform float uTime;
uniform float uTech;
uniform float uHybrid;
uniform vec4 uMouse;
uniform float uMouseGain;
uniform vec4 uVortex[8];
uniform int uVortexCount;
uniform vec4 uCharge;
uniform vec4 uRegions[16];
uniform int uRegionCount;
uniform vec4 uHyb;
uniform vec3 uHybDir;
${bn}
vec2 curl(vec2 p){
  float e = 0.02;
  float a = fbm2(p + vec2(0.0, e)), b = fbm2(p - vec2(0.0, e));
  float c = fbm2(p + vec2(e, 0.0)), d = fbm2(p - vec2(e, 0.0));
  return vec2(a - b, -(c - d))/(2.0*e);
}
float dens(vec2 uv){ return dot(texture(tDry, uv).rgb + texture(tWet, uv).rgb, vec3(0.3333)); }
void main(){
  vec2 q = vec2(vUv.x*uAspect, vUv.y);
  vec4 cur = texture(tField, vUv);
  vec2 back = vUv - cur.rg*uDt*vec2(1.0/uAspect, 1.0);
  vec2 vel = texture(tField, back).rg*exp(-uDt*0.5);
  float act = max(uTech, uHybrid);

  // Flujo de base: ruido rotacional coherente, lento.
  vec2 base = curl(q*1.8 + vec2(uTime*0.015, -uTime*0.01))*0.035*act;
  vel += (base - vel)*min(uDt*0.4, 1.0);

  vec2 dm = q - uMouse.xy;
  vel += uMouse.zw*exp(-dot(dm, dm)/0.006)*uDt*4.0*uMouseGain;

  for (int i = 0; i < 8; i++){
    if (i >= uVortexCount) break;
    vec4 v = uVortex[i];
    vec2 d = q - v.xy;
    float r2 = dot(d, d);
    float rr = v.w*v.w;
    vel += v.z*vec2(-d.y, d.x)/sqrt(r2 + rr)*exp(-r2/(rr*3.0));
  }

  vec2 dc = uCharge.xy - q;
  float gc = exp(-dot(dc, dc)/0.03)*uCharge.z;
  vel += (dc*1.5 + vec2(-dc.y, dc.x)*3.0)*gc*uDt*act;

  // Retroalimentación: el pigmento curva el campo (fluye a lo largo de los contornos).
  float hyb = cur.b;
  vec2 e = uTexel*1.5;
  vec2 g = vec2(dens(vUv + vec2(e.x, 0.0)) - dens(vUv - vec2(e.x, 0.0)),
                dens(vUv + vec2(0.0, e.y)) - dens(vUv - vec2(0.0, e.y)));
  vel += (vec2(-g.y, g.x)*0.9 - g*0.3)*hyb*uHybrid*uDt*0.35;

  float L = length(vel);
  if (L > 0.45) vel *= 0.45/L;

  // Máscara del encuentro: frente orgánico, alargado hacia donde apunta el gesto.
  vec2 rel = q - uHyb.xy;
  float al = dot(rel, uHybDir.xy);
  float pe = dot(rel, vec2(-uHybDir.y, uHybDir.x));
  float da = length(vec2(al/(1.0 + uHybDir.z*step(0.0, al)), pe));
  float edge = uHyb.z + (fbm2(q*5.0 + uTime*0.05) - 0.5)*0.2;
  hyb = max(hyb, (1.0 - smoothstep(edge - 0.15, edge, da))*uHyb.w);

  float lift = 0.0;
  for (int i = 0; i < 16; i++){
    if (i >= uRegionCount) break;
    vec4 r = uRegions[i];
    float d = length(q - r.xy) + (fbm2(q*12.0 + float(i)*3.1) - 0.5)*r.z*0.6;
    lift = max(lift, (1.0 - smoothstep(r.z*0.55, r.z*1.1, d))*r.w);
  }
  oField = vec4(vel, hyb, lift);
}
`,tm=Ni+`
out vec4 oDens;
uniform sampler2D tWet;
uniform sampler2D tDry;
uniform vec2 uTexel;
void main(){
  vec3 A = vec3(0.0);
  for (int j = 0; j < 2; j++) for (int i = 0; i < 2; i++){
    vec2 uv = vUv + (vec2(float(i), float(j)) - 0.5)*uTexel*0.5;
    A += texture(tDry, uv).rgb + texture(tWet, uv).rgb;
  }
  A *= 0.25;
  float d = dot(A, vec3(0.3333));
  oDens = vec4(clamp(A/4.0, 0.0, 1.0), clamp(d/2.0, 0.0, 1.0));
}
`;class em{constructor(t,e){this.renderer=t,this.type=e,this.segs=Array.from({length:an},()=>new wt(0,0,0,0)),this.segP=Array.from({length:an},()=>new wt(0,0,0,0)),this.segC=Array.from({length:an},()=>new wt(0,0,0,0)),this.segCount=0,this.drop=new wt(0,0,0,0),this.blank=new ll(new Uint8Array(4),1,1),this.blank.needsUpdate=!0,this.u={tWet:{value:null},tDry:{value:null},tField:{value:this.blank},tPaper:{value:null},tDeposit:{value:this.blank},uTexel:{value:new Lt},uAspect:{value:1},uDt:{value:.016},uAdvect:{value:0},uAniso:{value:0},uDepositAmt:{value:0},uSegCount:{value:0},uSeg:{value:this.segs},uSegP:{value:this.segP},uSegC:{value:this.segC},uDrop:{value:this.drop},tTrail:{value:this.blank},uDryAdvect:{value:0},uNetDeposit:{value:0},uNetA:{value:new F(1,1,1)},uDissolve:{value:new wt(0,0,0,0)},tRD:{value:this.blank},uRDDeposit:{value:0},uBlot:{value:new wt(0,0,0,0)}},this.simPass=new En(yn(Zp,this.u)),this.paperU={uAspect:{value:1}},this.paperPass=new En(yn(jp,this.paperU)),this.copyU={tWet:{value:null},tDry:{value:null}},this.copyPass=new En(yn(Jp,this.copyU)),this.read=null,this.write=null,this.paperRT=null}makeRT(t,e){return new ce(t,e,{count:2,type:this.type,format:Le,minFilter:Qt,magFilter:Qt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1})}resize(t,e,n,s){const r=this.makeRT(e,n),a=this.makeRT(e,n);this.read?(this.copyU.tWet.value=this.read.textures[0],this.copyU.tDry.value=this.read.textures[1],this.copyPass.render(this.renderer,r),this.read.dispose(),this.write.dispose()):Ke(this.renderer,r),Ke(this.renderer,a),this.read=r,this.write=a,this.u.uTexel.value.set(1/e,1/n),this.u.uAspect.value=t,this.width=e,this.height=n,this.paperRT&&this.paperRT.dispose();const o=Math.round(s),l=Math.round(s/t);this.paperRT=new ce(o,l,{type:Ge,minFilter:Qt,magFilter:Qt,depthBuffer:!1,generateMipmaps:!1}),this.paperU.uAspect.value=t,this.paperPass.render(this.renderer,this.paperRT),this.u.tPaper.value=this.paperRT.texture,this.renderer.setRenderTarget(null)}get wet(){return this.read.textures[0]}get dry(){return this.read.textures[1]}get paper(){return this.paperRT.texture}addSegment(t,e,n,s,r,a,o,l,c,h){if(this.segCount>=an)return!1;const d=this.segCount++;return this.segs[d].set(t,e,n,s),this.segP[d].set(r,a,o,h),this.segC[d].set(l[0],l[1],l[2],c),!0}get freeSegments(){return an-this.segCount}addDrop(t,e,n,s){this.drop.set(t,e,n,s)}step(t,e,n,s,r){const a=this.u;a.uDt.value=t/r,a.tField.value=e||this.blank,a.tDeposit.value=n||this.blank,a.uAdvect.value=s.advect,a.uAniso.value=s.aniso,a.uDryAdvect.value=s.dryAdvect||0,a.uNetDeposit.value=s.netDeposit||0,a.tTrail.value=s.trail||this.blank,a.tRD.value=s.rd||this.blank,a.uRDDeposit.value=s.rdDeposit||0,s.blot?a.uBlot.value.copy(s.blot):a.uBlot.value.w=0,s.netA&&a.uNetA.value.fromArray(s.netA),s.dissolve?a.uDissolve.value.copy(s.dissolve):a.uDissolve.value.w=0;for(let o=0;o<r;o++){a.uSegCount.value=o===0?this.segCount:0,a.uDepositAmt.value=o===0?s.depositAmt:0,o>0&&(this.drop.w=0),a.tWet.value=this.read.textures[0],a.tDry.value=this.read.textures[1],this.simPass.render(this.renderer,this.write);const l=this.read;this.read=this.write,this.write=l}this.segCount=0,this.drop.w=0}clear(){Ke(this.renderer,this.read),Ke(this.renderer,this.write),this.segCount=0,this.drop.w=0}dispose(){this.read?.dispose(),this.write?.dispose(),this.paperRT?.dispose(),this.simPass.dispose(),this.paperPass.dispose(),this.copyPass.dispose(),this.blank.dispose()}}class nm{constructor(t,e){this.renderer=t,this.type=e,this.vortices=Array.from({length:8},()=>new wt(0,0,0,0)),this.vortexCount=0,this.regions=Array.from({length:16},()=>new wt(0,0,0,0)),this.u={tField:{value:null},tDry:{value:null},tWet:{value:null},uTexel:{value:new Lt},uAspect:{value:1},uDt:{value:.016},uTime:{value:0},uTech:{value:0},uHybrid:{value:0},uMouse:{value:new wt(0,0,0,0)},uMouseGain:{value:0},uVortex:{value:this.vortices},uVortexCount:{value:0},uCharge:{value:new wt(0,0,0,0)},uRegions:{value:this.regions},uRegionCount:{value:0},uHyb:{value:new wt(0,0,0,0)},uHybDir:{value:new F(1,0,0)}},this.pass=new En(yn(Qp,this.u))}resize(t){const n=Math.max(48,Math.round(192/t));this.read?.dispose(),this.write?.dispose();const s={type:this.type,minFilter:Qt,magFilter:Qt,depthBuffer:!1,generateMipmaps:!1};this.read=new ce(192,n,s),this.write=new ce(192,n,s),this.clear(),this.u.uTexel.value.set(1/192,1/n),this.u.uAspect.value=t}get texture(){return this.read.texture}addVortex(t,e,n,s){this.vortexCount>=8||this.vortices[this.vortexCount++].set(t,e,n,s)}setRegions(t){const e=Math.min(16,t.length);for(let n=0;n<e;n++)this.regions[n].set(t[n].x,t[n].y,t[n].r,t[n].p);this.u.uRegionCount.value=e}step(t,e,n){const s=this.u;s.uDt.value=t,s.tField.value=this.read.texture,s.tWet.value=e,s.tDry.value=n,s.uVortexCount.value=this.vortexCount,this.pass.render(this.renderer,this.write);const r=this.read;this.read=this.write,this.write=r,this.vortexCount=0}clear(){Ke(this.renderer,this.read),Ke(this.renderer,this.write),this.u.uRegionCount.value=0,this.u.uHyb.value.set(0,0,0,0)}}class im{constructor(t){this.renderer=t,this.u={tWet:{value:null},tDry:{value:null},uTexel:{value:new Lt}},this.pass=new En(yn(tm,this.u)),this.rt=null}ensure(t){const n=Math.max(40,Math.round(144/t));this.rt&&this.rt.width===144&&this.rt.height===n||(this.rt?.dispose(),this.rt=new ce(144,n,{type:Ge,minFilter:Qt,magFilter:Qt,depthBuffer:!1,generateMipmaps:!1}),this.buf=new Uint8Array(144*n*4))}render(t,e,n){this.ensure(n);const{width:s,height:r}=this.rt;this.u.tWet.value=t,this.u.tDry.value=e,this.u.uTexel.value.set(1/s,1/r),this.pass.render(this.renderer,this.rt)}analyze(t,e,n){return this.render(t,e,n),this.renderer.readRenderTargetPixels(this.rt,0,0,this.rt.width,this.rt.height,this.buf),this.renderer.setRenderTarget(null),this.decode(n)}analyzeAsync(t,e,n){if(this.pending)return this.pending;this.render(t,e,n);const{width:s,height:r}=this.rt;return this.pending=this.renderer.readRenderTargetPixelsAsync(this.rt,0,0,s,r,this.buf).then(()=>this.decode(n)).finally(()=>{this.pending=null}),this.renderer.setRenderTarget(null),this.pending}decode(t){const{width:e,height:n}=this.rt,s=e*n,r=new Float32Array(s),a=new Float32Array(s*3);for(let o=0;o<s;o++)a[o*3]=this.buf[o*4]/255*4,a[o*3+1]=this.buf[o*4+1]/255*4,a[o*3+2]=this.buf[o*4+2]/255*4,r[o]=this.buf[o*4+3]/255*2;return new sm(e,n,t,r,a)}}class sm{constructor(t,e,n,s,r){this.gw=t,this.gh=e,this.aspect=n,this.dens=s,this.absb=r,this.zoneId=new Int16Array(t*e).fill(-1),this.zones=[],this.computeZones()}cell(t,e){const n=Math.min(this.gw-1,Math.max(0,Math.floor(t/this.aspect*this.gw)));return Math.min(this.gh-1,Math.max(0,Math.floor(e*this.gh)))*this.gw+n}cellQ(t,e){return[(t+.5)/this.gw*this.aspect,(e+.5)/this.gh]}densAt(t,e){return this.dens[this.cell(t,e)]}zoneAt(t,e){return this.zoneId[this.cell(t,e)]}absAt(t,e){const n=this.cell(t,e)*3;return[this.absb[n],this.absb[n+1],this.absb[n+2]]}totalDensity(){let t=0;for(const e of this.dens)t+=e;return t/this.dens.length}coverage(t=.12){let e=0;for(const n of this.dens)n>t&&e++;return e/this.dens.length}gradAt(t,e,n=[0,0]){const s=this.aspect/this.gw,r=1/this.gh;return n[0]=(this.densAt(t+s,e)-this.densAt(t-s,e))/(2*s),n[1]=(this.densAt(t,e+r)-this.densAt(t,e-r))/(2*r),n}computeZones(){const{gw:t,gh:e,dens:n}=this,s=.09,r=new Float32Array(t*e);for(let f=0;f<e;f++)for(let g=0;g<t;g++){let x=0,p=0;for(let m=-1;m<=1;m++)for(let E=-1;E<=1;E++){const y=g+E,b=f+m;y<0||b<0||y>=t||b>=e||(x+=n[b*t+y],p++)}r[f*t+g]=x/p}const a=[];for(let f=0;f<t*e;f++)r[f]>s*1.5&&a.push(f);a.sort((f,g)=>r[g]-r[f]);const o=Math.max(5,Math.round(t*.05)),l=[];for(const f of a){const g=f%t,x=f/t|0;if(l.every(p=>(p[0]-g)**2+(p[1]-x)**2>o*o)&&l.push([g,x]),l.length>=14)break}if(!l.length)return;const c=l.map(()=>({count:0,sx:0,sy:0,sxx:0,syy:0,sxy:0,A:[0,0,0],d:0,ds:[]})),h=(o*3.5)**2;for(let f=0;f<e;f++)for(let g=0;g<t;g++){const x=f*t+g;if(n[x]<s)continue;let p=-1,m=h;for(let L=0;L<l.length;L++){const w=(l[L][0]-g)**2+(l[L][1]-f)**2;w<m&&(m=w,p=L)}if(p<0)continue;this.zoneId[x]=p;const E=c[p],[y,b]=this.cellQ(g,f);E.count++,E.sx+=y,E.sy+=b,E.sxx+=y*y,E.syy+=b*b,E.sxy+=y*b,E.A[0]+=this.absb[x*3],E.A[1]+=this.absb[x*3+1],E.A[2]+=this.absb[x*3+2],E.d+=n[x],E.ds.push(n[x])}const d=this.aspect/t*(1/e),u=[0,0];c.forEach((f,g)=>{if(f.count<6){for(let W=0;W<this.zoneId.length;W++)this.zoneId[W]===g&&(this.zoneId[W]=-1);return}const x=f.sx/f.count,p=f.sy/f.count,m=f.sxx/f.count-x*x,E=f.syy/f.count-p*p,y=f.sxy/f.count-x*p,b=m+E,L=m*E-y*y,w=b/2+Math.sqrt(Math.max(0,b*b/4-L)),T=Math.max(1e-6,b-w);f.ds.sort((W,v)=>W-v);const U={id:g,center:[x,p],count:f.count,area:f.count*d,axis:.5*Math.atan2(2*y,m-E),major:Math.sqrt(w)*2,minor:Math.sqrt(T)*2,A:f.A.map(W=>W/f.count),meanDens:f.d/f.count,shardThr:f.ds[Math.floor(f.ds.length*.45)],radius:0,boundary:[]};for(let W=0;W<e;W++)for(let v=0;v<t;v++){const S=W*t+v;if(this.zoneId[S]!==g)continue;const[I,O]=this.cellQ(v,W);if(U.radius=Math.max(U.radius,Math.hypot(I-x,O-p)),v>0&&n[S-1]<s||v<t-1&&n[S+1]<s||W>0&&n[S-t]<s||W<e-1&&n[S+t]<s){this.gradAt(I,O,u);const K=Math.hypot(u[0],u[1])||1;U.boundary.push([I,O,-u[0]/K,-u[1]/K])}}this.zones.push(U)})}}class rm{constructor(t,e,n,s,{renderOrder:r=2,depthWrite:a=!1}={}){const o={vertexShader:e,fragmentShader:n,uniforms:s,transparent:!0,side:qe};this.materials=[new Re({...o,defines:{MODE:0},depthWrite:a}),new Re({...o,defines:{MODE:1},depthWrite:!1,depthTest:!1}),new Re({...o,defines:{MODE:2},depthWrite:!1,depthTest:!1,blending:na,blendEquation:rn,blendSrc:on,blendDst:on,blendSrcAlpha:on,blendDstAlpha:on})],this.geometry=t,this.uniforms=s,this.meshes=this.materials.map(l=>{const c=new Ue(t,l);return c.frustumCulled=!1,c}),this.meshes[0].renderOrder=r,this.meshes[1].renderOrder=1}attach(t){t.main.add(this.meshes[0]),t.shadow.add(this.meshes[1]),t.foot.add(this.meshes[2])}dispose(){for(const t of this.meshes)t.parent?.remove(t);for(const t of this.materials)t.dispose();this.geometry.dispose()}}const am=`
uniform float uTime;
uniform float uAspect;
uniform float uScale;
uniform float uTech;
uniform float uHybrid;
uniform float uAgitation;
uniform vec4 uWave[8];
uniform vec3 uLight;
uniform sampler2D tWet;
uniform sampler2D tDry;
uniform sampler2D tField;
vec2 qToUv(vec2 q){ return q/vec2(uAspect, 1.0); }
vec3 toWorld(vec3 q){ return vec3((q.xy - vec2(uAspect*0.5, 0.5))*uScale, q.z*uScale); }
vec3 absAt(vec2 q){ vec2 uv = qToUv(q); return texture(tDry, uv).rgb + texture(tWet, uv).rgb; }
`,om=`
vec4 projectShadow(vec3 world){
  vec3 L = normalize(uLight);
  world.xy -= L.xy/L.z*world.z;
  world.z = 0.01;
  return projectionMatrix*viewMatrix*vec4(world, 1.0);
}
`,pl=am+bn+hl+ul,lm=pl+om,cm=lm+`
attribute vec2 aTan;
attribute float aSide;
attribute float aWidth;
attribute float aBirth;
attribute float aArc;
attribute float aDepth;
attribute vec3 aPig;
uniform float uStart;
uniform float uFade;
uniform float uLookBias;
varying float vSide;
varying float vGrow;
varying float vDepth;
varying float vArc;
varying float vLook;
varying vec2 vQ;
varying vec3 vPig;
void main(){
  float age = uTime - uStart;
  float grow = clamp((age - aBirth)*3.0, 0.0, 1.0);
  vec4 F = texture(tField, qToUv(position.xy));
  float look = clamp(F.b*uHybrid + uLookBias, 0.0, 1.0);
  // La curvatura inducida por el campo crece con la distancia a la raíz, acotada.
  vec2 bend = F.rg*min(aArc, 0.25)*0.7;
  vec2 p = position.xy + bend;
  vec2 tg = normalize(aTan + F.rg*min(aArc, 0.25)*3.0 + 1e-5);
  vec2 nr = vec2(-tg.y, tg.x);
  float w = max(aWidth, 0.0018)*grow*uFade;
  p += nr*aSide*w*0.5;
  float z = 0.002 + aArc*0.06*(1.0 - 0.7*look) + waveZ(position.xy)*0.5;
  vec3 world = toWorld(vec3(p, z));
  vSide = aSide; vGrow = grow; vDepth = aDepth; vArc = aArc; vLook = look; vQ = p; vPig = aPig;
#if MODE == 1
  gl_Position = projectShadow(world);
#else
  gl_Position = projectionMatrix*viewMatrix*vec4(world, 1.0);
#endif
}
`,hm=pl+`
uniform float uStart;
uniform float uFade;
uniform float uShed;
varying float vSide;
varying float vGrow;
varying float vDepth;
varying float vArc;
varying float vLook;
varying vec2 vQ;
varying vec3 vPig;
void main(){
  if (vGrow <= 0.0) discard;
  float s = abs(vSide);
#if MODE == 0
  // Nervadura plana: cuerpo índigo, filo cian fino y eje luminoso sólo en los troncos.
  vec3 deep = vec3(0.07, 0.1, 0.34);
  vec3 cy = vec3(0.42, 0.84, 0.96);
  vec3 dig = mix(deep, cy, smoothstep(0.62, 0.9, s)*0.7);
  float spine = (1.0 - smoothstep(0.0, 0.16, s))*(1.0 - smoothstep(0.0, 1.5, vDepth));
  dig = mix(dig, vec3(0.9, 0.98, 1.0), spine*0.7);
  float a = smoothstep(1.0, 0.82, s)*mix(0.9, 0.6, vDepth/3.0);
  // Aspecto pigmentado: borde irregular y marea más oscura en el perímetro.
  float rag = fbm2(vQ*500.0 + vArc*30.0);
  float sp = s + (rag - 0.5)*0.55*vLook;
  vec3 Ah = hybridTint(vPig, 0.5 + 0.5*sin(vArc*20.0 + vDepth), 0.35);
  vec3 pig = PAPER*exp(-Ah*(0.55 + 0.9*smoothstep(0.35, 0.95, sp)));
  vec3 col = mix(dig, pig, vLook);
  float ap = smoothstep(1.0, 0.8, sp)*0.88;
  a = mix(a, ap, vLook)*uFade*uTech;
  gl_FragColor = vec4(col, a);
#elif MODE == 1
  gl_FragColor = vec4(0.05, 0.05, 0.12, 0.13*smoothstep(1.0, 0.5, s)*uFade*uTech*(1.0 - 0.6*vLook));
#else
  float amt = vLook*uShed*uFade*smoothstep(1.0, 0.4, s)*(0.15 + uAgitation);
  gl_FragColor = vec4(vPig*0.004*amt, 0.0012*amt);
#endif
}
`,ve=(i,t,e)=>Math.min(e,Math.max(t,i)),ke=(i,t,e)=>i+(t-i)*e,cn=(i,t,e)=>{const n=ve((e-i)/(t-i),0,1);return n*n*(3-2*n)},Qr=i=>(i=ve(i,0,1),i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2);function Eo(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function os(i,t){let e=i*374761393+t*668265263|0;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function ta(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,a=s*s*(3-2*s),o=r*r*(3-2*r),l=os(e,n),c=os(e+1,n),h=os(e,n+1),d=os(e+1,n+1);return ke(ke(l,c,a),ke(h,d,a),o)}const um=i=>ta(i,.5);function dm(i,t,e=[0,0]){const s=(r,a)=>ta(r,a)*.67+ta(r*2.1+5.3,a*2.1)*.33;return e[0]=(s(i,t+.05)-s(i,t-.05))/(2*.05),e[1]=-(s(i+.05,t)-s(i-.05,t))/(2*.05),e}function fm(i,t,e,n,s,r=[]){const a=[0,0],o=[0,0],l=(c,h,d,u,f,g)=>{const x=[c.slice()],p=[f],m=[g],E=Math.round(e.steps*Math.pow(.72,u)*(.75+n()*.5)),y=e.step*(1-.12*u);let[b,L]=h,[w,T]=c;for(let v=0;v<E;v++){s?s.gradAt(w,T,a):a[0]=a[1]=0,dm(w*e.curlScale+e.seed,T*e.curlScale,o);const S=Math.hypot(o[0],o[1])||1;b+=-a[0]*e.avoid*.02+o[0]/S*e.wander+(n()-.5)*.12,L+=-a[1]*e.avoid*.02+o[1]/S*e.wander+(n()-.5)*.12;const I=Math.hypot(b,L)||1;if(b/=I,L/=I,w+=b*y,T+=L*y,f+=y,w<.01||T<.01||w>e.aspect-.01||T>.99)break;if(x.push([w,T]),p.push(f),m.push(g+(f-p[0])/e.speed),u<e.maxDepth&&v>1&&v<E-2&&n()<e.branchProb){const V=(n()<.5?-1:1)*(.45+n()*.45),K=Math.cos(V),k=Math.sin(V);l([w,T],[b*K-L*k,b*k+L*K],d*.62,u+1,f,m[m.length-1]);const j=Math.cos(-V*.35),H=Math.sin(-V*.35);[b,L]=[b*j-L*H,b*H+L*j]}}const U=x.length;if(U<2)return;const W=x.map((v,S)=>d*Math.pow(1-S/U,.75));r.push({pts:x,width:W,arc:p,birth:m,depth:u,pig:e.pig})};return l(i,t,e.width,0,0,e.delay),r}function pm(i){let t=0,e=0;for(const x of i)t+=x.pts.length*2,e+=(x.pts.length-1)*6;const n=new Float32Array(t*3),s=new Float32Array(t*2),r=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t),l=new Float32Array(t),c=new Float32Array(t),h=new Float32Array(t*3),d=new Uint32Array(e);let u=0,f=0;for(const x of i){const p=x.pts.length,m=u;for(let E=0;E<p;E++){const y=x.pts[Math.max(0,E-1)],b=x.pts[Math.min(p-1,E+1)];let L=b[0]-y[0],w=b[1]-y[1];const T=Math.hypot(L,w)||1;L/=T,w/=T;for(let U=0;U<2;U++)n[u*3]=x.pts[E][0],n[u*3+1]=x.pts[E][1],n[u*3+2]=0,s[u*2]=L,s[u*2+1]=w,r[u]=U===0?-1:1,a[u]=x.width[E],o[u]=x.birth[E],l[u]=x.arc[E],c[u]=x.depth,h[u*3]=x.pig[0],h[u*3+1]=x.pig[1],h[u*3+2]=x.pig[2],u++}for(let E=0;E<p-1;E++){const y=m+E*2;d[f++]=y,d[f++]=y+1,d[f++]=y+2,d[f++]=y+1,d[f++]=y+3,d[f++]=y+2}}const g=new $e;return g.setAttribute("position",new re(n,3)),g.setAttribute("aTan",new re(s,2)),g.setAttribute("aSide",new re(r,1)),g.setAttribute("aWidth",new re(a,1)),g.setAttribute("aBirth",new re(o,1)),g.setAttribute("aArc",new re(l,1)),g.setAttribute("aDepth",new re(c,1)),g.setAttribute("aPig",new re(h,3)),g.setIndex(new re(d,1)),g}class mm extends rm{constructor(t,e,n,s=0){const r={uStart:{value:n},uFade:{value:1},uShed:{value:.4},uLookBias:{value:s}};super(pm(e),cm,hm,{...t,...r},{renderOrder:3}),this.own=r,this.polys=e}}class gm{constructor(t){this.comp=t,this.shared=t.shared,this.groups={main:t.structGroup,shadow:t.shadowGroup,foot:t.footScene},this.structures=[],this.trees=[],this.folds=[],this.forest=null,this.waveIdx=0,this.lastHybridStart=1/0}addWave(t,e,n,s){this.shared.uWave.value[this.waveIdx].set(t,e,s,n),this.waveIdx=(this.waveIdx+1)%8}add(t){return t.attach(this.groups),this.structures.push(t),t}buildRupture(t,e,n,s){const r=Eo(n*1e3|0),a=t.zones.map(c=>{const h=Math.hypot(c.center[0]-e[0],c.center[1]-e[1]);return{...c,distO:h,delay:.35+h*2.4}}),o=c=>c.area*c.meanDens,l=[...a].sort((c,h)=>o(h)-o(c));this.folds=[],this.folds.push({cx:e[0],cy:e[1],angle:r()*Math.PI,amp0:.014,width:.16,halfLen:.7,delay:0,phase:r()*6,extra:0,start:n});for(const c of l.slice(0,4))this.folds.push({cx:c.center[0],cy:c.center[1],angle:c.axis+(r()<.5?0:Math.PI/2),amp0:(r()<.5?-1:1)*(.01+r()*.012),width:.1+r()*.1,halfLen:ve(c.major*1.5+.15,.25,.8),delay:c.delay+.2,phase:r()*6,extra:0,start:n});return this.addWave(e[0],e[1],.012,n),{zones:a.length}}spawnTree(t,e,n,s,r,a,o=1){const l=Eo(Math.random()*1e9|0),c=fm(t,e,{steps:Math.round(18*o),step:.008,maxDepth:3,branchProb:.2,speed:.09,avoid:.25,wander:.45,curlScale:4,aspect:a,width:.0034*o,delay:0,seed:l()*50,pig:n},l,r);if(!c.length)return null;const d={forest:this.add(new mm(this.shared,c,s,.65)),polys:c,start:s,life:45+Math.random()*15,injected:0};if(this.trees.push(d),this.trees.length>18){const u=this.trees.find(f=>f.life>s-f.start+6);u&&(u.life=s-u.start+5)}return d}get active(){return this.folds.length>0||this.structures.length>0}update(t,e,n){const{mouse:s,vel:r,speed:a,hybrid:o}=n,l=this.shared.uFold.value,c=this.shared.uFoldB.value,h=cn(.02,.1,a)*(1-cn(.5,1.2,a)),d=Math.hypot(r[0],r[1])||1;for(let u=0;u<6;u++){const f=this.folds[u];if(!f){l[u].set(0,0,0,0);continue}if(s){const p=Math.cos(f.angle),m=Math.sin(f.angle),E=s[0]-f.cx,y=s[1]-f.cy,b=-E*m+y*p,L=E*p+y*m,w=Math.exp(-((b/(f.width*1.5))**2))*(Math.abs(L)<f.halfLen?1:.3),T=ve((-r[0]*m+r[1]*p)*3,-1,1)*w*h;f.extra+=(T-f.extra)*Math.min(1,t*1.2)*w,f.angle+=t*.3*w*h*((p*r[1]-m*r[0])/d)}f.extra*=Math.exp(-t*.15);const g=Qr((e-f.start-f.delay)/3),x=f.amp0*g*(1+.15*Math.sin(e*.21+f.phase))*(1+.7*f.extra)*(1-.5*o);l[u].set(f.cx,f.cy,f.angle,x),c[u].set(f.width,f.halfLen,0,0)}for(let u=this.trees.length-1;u>=0;u--){const f=this.trees[u],g=e-f.start;f.forest.own.uFade.value=1-cn(f.life-6,f.life,g),f.forest.own.uShed.value=Math.exp(-g/20)}for(let u=this.structures.length-1;u>=0;u--){const f=this.structures[u];if(f.own.uFade&&f.own.uFade.value<=0){f.dispose(),this.structures.splice(u,1);const g=this.trees.findIndex(x=>x.forest===f);g>=0&&this.trees.splice(g,1)}}}clear(){for(const t of this.structures)t.dispose();this.structures=[],this.trees=[],this.folds=[],this.forest=null,this.lastHybridStart=1/0;for(const t of this.shared.uWave.value)t.set(0,0,0,0);for(const t of this.shared.uFold.value)t.set(0,0,0,0)}}class vm{constructor(t){this.exp=t,this.reset()}reset(){this.active=!1,this.origin=[0,0],this.radius=0,this.dir=[1,0],this.stretch=0,this.echo=[],this.echoMode=0}nextEchoMode(){this.echoMode=(this.echoMode+1)%3}record(t,e){if(!(!t||!t.segs||!t.A)){for(const n of t.segs)this.echo.push({seg:n,A:t.A.slice(),t:e});this.echo.length>400&&this.echo.splice(0,this.echo.length-400)}}emitEcho(t){const e=this.exp.watercolor,n=this.exp.aspect,s=1.3;for(;this.echo.length&&this.echo[0].t+s+2.5<t;)this.echo.shift();let r=Math.min(3,e.freeSegments-1);const a=Xe[(this.echoMode+1)%Xe.length].A,o=this.echoMode===0?(l,c)=>[n-l,c]:this.echoMode===1?(l,c)=>[n-l,1-c]:(l,c)=>[l,1-c];for(;r>0&&this.echo.length&&this.echo[0].t+s<=t;){const{seg:l,A:c}=this.echo.shift(),[h,d,u,f,g,x,p]=l;e.addSegment(...o(h,d),...o(u,f),g*.75,x*.8,p*.5,hi(c,a,.45),.9,Math.random()*40),r--}}begin(t,e){this.active=!0,this.origin=t.slice(),this.radius=.04,this.start=e,this.exp.digital.lastHybridStart=e}insideFront(t,e){const n=t-this.origin[0],s=e-this.origin[1],r=n*this.dir[0]+s*this.dir[1],a=-n*this.dir[1]+s*this.dir[0];return Math.hypot(r/(1+this.stretch*(r>0?1:0)),a)<this.radius-.05}update(t,e,n,s){const r=this.exp.field;if(!this.active){r.u.uHyb.value.w=0;return}const a=this.exp.transition;if(this.exp.watercolor,a.transitioning&&n){const o=n[0]-this.origin[0],l=n[1]-this.origin[1],c=Math.hypot(o,l);if(c>.02){const h=Math.min(1,t*1.5);this.dir[0]+=(o/c-this.dir[0])*h,this.dir[1]+=(l/c-this.dir[1])*h;const d=Math.hypot(this.dir[0],this.dir[1])||1;this.dir[0]/=d,this.dir[1]/=d,this.stretch+=(ve(c*3,0,1.6)-this.stretch)*h}}if(this.radius+=t*(a.transitioning?.2:.12),r.u.uHyb.value.set(this.origin[0],this.origin[1],this.radius,1),r.u.uHybDir.value.set(this.dir[0],this.dir[1],this.stretch),a.hybrid>.5){for(const o of s)this.record(o,e);this.emitEcho(e)}}get depositAmount(){return this.active?cn(.1,.8,this.exp.transition.hybrid):0}}class _m{constructor(){this.pi=Math.floor(Math.random()*ze.length),this.cur=ze[this.pi].A.slice(),this.target=this.cur.slice(),this.tmp=[0,0,0],this.digitalIdx=0,this.last=null,this.lastDir=null,this.speed=0,this.idle=10,this.travel=0,this.t=0,this.seed=Math.random()*100,this.side=1}reset(){this.last=null,this.lastDir=null,this.idle=10,this.speed=0}newStroke(t){const e=ze.length,n=(Math.random()<.6?1:2)*(Math.random()<.35?-1:1);this.pi=(this.pi+n+e)%e,hi(this.cur,ze[this.pi].A,.9,this.cur),this.target=ze[this.pi].A.slice(),t>.3&&(this.digitalIdx=(this.digitalIdx+1)%Xe.length),this.seed=Math.random()*100}update(t,e,n,s){if(this.t+=t,!e.length)return this.idle+=t,this.speed*=Math.exp(-t*8),null;if(!this.last)return this.last=e[e.length-1].slice(),null;const r=[this.last],a=Math.max(1,Math.ceil(e.length/4));for(let T=a-1;T<e.length;T+=a)r.push(e[T]);r[r.length-1]!==e[e.length-1]&&r.push(e[e.length-1]);let o=0;for(let T=1;T<r.length;T++)o+=Math.hypot(r[T][0]-r[T-1][0],r[T][1]-r[T-1][1]);const l=o/Math.max(t,.001);this.speed+=(l-this.speed)*Math.min(1,t*10);const c=r[0],h=r[r.length-1];if(this.last=h.slice(),o<1e-5)return this.idle+=t,null;this.idle>.7&&this.newStroke(n.hybrid),this.idle=0;const d=[(h[0]-c[0])/o,(h[1]-c[1])/o];let u=0;if(this.lastDir){const T=this.lastDir[0]*d[1]-this.lastDir[1]*d[0],U=this.lastDir[0]*d[0]+this.lastDir[1]*d[1];u=Math.atan2(T,U)}if(this.lastDir=d,this.travel+=o,this.travel>.9){this.travel=0;const T=ze.length;this.target=ze[(this.pi+(Math.random()<.5?1:T-1))%T].A.slice()}hi(this.cur,this.target,Math.min(1,t*.5),this.cur);const f={pos:h,dir:d,speed:this.speed,turn:u,total:o},g=n.amount;if(g<=.002)return f;let x=this.cur;if(n.hybrid>0){const T=.5+.5*Math.sin(this.t*.7+h[0]*6);x=hi(this.cur,Xe[this.digitalIdx].A,n.hybrid*(.25+.45*T),this.tmp)}f.A=x;const p=cn(.06,1.5,this.speed),m=Math.min(t*60,2.5),E=n.fine?.35:1,y=ke(.0075,.03,p)*(.85+.3*um(this.t*1.7+this.seed))*E,b=ke(.2,.55,p)*m,L=ke(.3,.11,p)*g*m*(n.fine?1.5:1),w=ke(.35,1,p);f.segs=[];for(let T=1;T<r.length;T++){const U=r[T-1],W=r[T],v=Math.hypot(W[0]-U[0],W[1]-U[1])/o;if(v<=0)continue;const S=[U[0],U[1],W[0],W[1],y,b*Math.max(v,.35),L*Math.max(v,.35)];s.addSegment(...S,x,w,this.seed+T*.37),f.segs.push(S)}if(Math.abs(u)>.75&&this.speed>.1&&(s.addSegment(c[0],c[1],c[0]+d[0]*y*.4,c[1]+d[1]*y*.4,y*1.35,b*.7,L*1.9,x,.8,this.seed+3.1),f.accent=!0),p>.45&&Math.random()<.55){const T=p>.8?2:1;for(let U=0;U<T;U++){const W=Math.random();this.side=-this.side;const v=y*(1.5+Math.random()*2.4)*this.side,S=ke(c[0],h[0],W)-d[1]*v,I=ke(c[1],h[1],W)+d[0]*v;s.addSegment(S,I,S+d[0]*y*.7,I+d[1]*y*.7,y*(.25+Math.random()*.25),.5*m,L*.8,x,1,Math.random()*50)}}return f}}const ml=`
precision highp float;
precision highp sampler2D;
in vec2 vUv;
`,xm=ml+`
out vec4 oAgent;
uniform sampler2D tAgent;
uniform sampler2D tTrail;
uniform sampler2D tDry;
uniform sampler2D tWet;
uniform sampler2D tField;
uniform float uAspect;
uniform float uDt;
uniform float uTime;
uniform float uActive;
uniform float uGrowR;
uniform vec2 uOrigin;
uniform float uHybrid;
uniform float uSpawnRate;
uniform float uStrokeSteal;
uniform vec4 uMouse;
uniform vec4 uStroke[16];
uniform int uStrokeCount;
uniform float uSA;
uniform float uRA;
uniform float uSD;
uniform float uSpeed;
${bn}
vec2 toUv(vec2 q){ return q/vec2(uAspect, 1.0); }
float food(vec2 q){
  vec2 uv = toUv(q);
  vec3 A = texture(tDry, uv).rgb + texture(tWet, uv).rgb*mix(1.0, 4.0, uHybrid);
  return dot(A, vec3(0.3333));
}
float sense(vec2 q){
  float t = texture(tTrail, toUv(q)).r;
  vec2 dm = q - uMouse.xy;
  return t + food(q)*2.2 + uMouse.w*10.0*exp(-dot(dm, dm)/0.006);
}
void main(){
  vec4 a = texture(tAgent, vUv);
  float t = uTime;
  // El gesto recluta agentes: nacen sobre el trazo con su misma dirección como
  // "caminantes jóvenes" (w > 1) que avanzan rectos y luego la red los absorbe.
  // uStroke: xy = posición, zw = dirección del gesto.
  if (uActive > 0.5 && uStrokeCount > 0 && hash12(vUv*7.3 + t*2.1) < uStrokeSteal){
    int k = int(floor(hash12(vUv*19.1 + t)*float(uStrokeCount)));
    vec4 st = uStroke[k];
    vec2 cand = st.xy + (vec2(hash12(vUv*3.7 + t), hash12(vUv*8.9 - t)) - 0.5)*0.008;
    float head = length(st.zw) > 1e-4 ? atan(st.w, st.z) : hash12(vUv + t)*6.2831853;
    oAgent = vec4(cand, head + (hash12(vUv*5.3 - t) - 0.5)*1.3, 2.0);
    return;
  }
  if (a.w <= 0.0){
    oAgent = a;
    if (uActive < 0.5 || hash12(vUv*311.7 + t*1.37) > uSpawnRate) return;
    vec2 cand = vec2(hash12(vUv*53.1 + t), hash12(vUv*91.7 - t*0.7))*vec2(uAspect, 1.0);
    bool inside = length(cand - uOrigin) < uGrowR;
    if (inside && (food(cand) > 0.08 || hash12(vUv*3.3 + t) < 0.04))
      oAgent = vec4(cand, hash12(vUv + t)*6.2831853, 1.0);
    return;
  }
  vec2 p = a.xy;
  float ang = a.z;
  float rnd = hash12(vUv*131.1 + t*3.7);
  bool young = a.w > 1.0;
  if (young){
    // Trazo propio: casi recto, con leve ondulación.
    ang += (rnd - 0.5)*0.12;
  } else {
    float sa = uSA, ra = uRA*min(uDt*60.0, 2.0);
    float sF = sense(p + vec2(cos(ang), sin(ang))*uSD);
    float sL = sense(p + vec2(cos(ang + sa), sin(ang + sa))*uSD);
    float sR = sense(p + vec2(cos(ang - sa), sin(ang - sa))*uSD);
    if (sF > sL && sF > sR) ang += (rnd - 0.5)*0.1;
    else if (sF < sL && sF < sR) ang += (rnd - 0.5)*2.0*ra;
    else if (sL > sR) ang += ra;
    else ang -= ra;
  }
  vec2 F = texture(tField, toUv(p)).rg;
  p += (vec2(cos(ang), sin(ang))*uSpeed*(young ? 1.6 : 1.0) + F*0.5)*uDt;
  if (p.x < 0.003 || p.x > uAspect - 0.003){ ang = 3.14159265 - ang; p.x = clamp(p.x, 0.003, uAspect - 0.003); }
  if (p.y < 0.003 || p.y > 0.997){ ang = -ang; p.y = clamp(p.y, 0.003, 0.997); }
  float life = young ? max(1.0, a.w - uDt*0.7) : a.w - uDt*0.012;
  if (uActive < 0.5) life -= uDt*0.6;
  // Renovación lenta: la red nunca se congela.
  if (!young && hash12(vUv*77.7 + t*0.91) < 0.0015) life = 0.0;
  oAgent = vec4(p, ang, life);
}
`,Mm=ml+`
out vec4 oTrail;
uniform sampler2D tTrail;
uniform vec2 uTexel;
uniform float uDecay;
void main(){
  float c = texture(tTrail, vUv).r;
  float s = 0.0;
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++)
    s += texture(tTrail, vUv + vec2(float(i), float(j))*uTexel).r;
  oTrail = vec4(mix(c, s/9.0, 0.3)*uDecay, 0.0, 0.0, 1.0);
}
`,Sm=`
precision highp float;
precision highp sampler2D;
in vec3 position;
uniform sampler2D tAgent;
uniform float uSize;
uniform float uAspect;
out float vAlive;
void main(){
  float id = float(gl_VertexID);
  vec2 ref = (vec2(mod(id, uSize), floor(id/uSize)) + 0.5)/uSize;
  vec4 a = texture(tAgent, ref);
  vAlive = a.w;
  gl_PointSize = 1.0;
  gl_Position = a.w > 0.0 ? vec4((a.xy/vec2(uAspect, 1.0))*2.0 - 1.0, 0.0, 1.0) : vec4(2.0, 2.0, 2.0, 1.0);
}
`,ym=`
precision highp float;
in float vAlive;
out vec4 oTrail;
uniform float uDeposit;
void main(){ oTrail = vec4(uDeposit*min(vAlive*4.0, 1.0)*(vAlive > 1.0 ? 2.5 : 1.0), 0.0, 0.0, 0.0); }
`;class Em{constructor(t,e,n=256){this.renderer=t,this.size=n;const s={type:e,minFilter:fe,magFilter:fe,depthBuffer:!1,generateMipmaps:!1};this.agents=[new ce(n,n,s),new ce(n,n,s)],this.blank=new ll(new Uint8Array(4),1,1),this.blank.needsUpdate=!0,this.strokes=Array.from({length:16},()=>new wt(0,0,0,0)),this.u={tAgent:{value:null},tTrail:{value:null},tDry:{value:null},tWet:{value:null},tField:{value:null},uAspect:{value:1},uDt:{value:.016},uTime:{value:0},uActive:{value:0},uGrowR:{value:0},uOrigin:{value:new Lt},uHybrid:{value:0},uSpawnRate:{value:.03},uStrokeSteal:{value:0},uMouse:{value:new wt(-9,-9,0,0)},uStroke:{value:this.strokes},uStrokeCount:{value:0},uSA:{value:.62},uRA:{value:.38},uSD:{value:.011},uSpeed:{value:.085}},this.agentPass=new En(yn(xm,this.u)),this.trailU={tTrail:{value:null},uTexel:{value:new Lt},uDecay:{value:.95}},this.trailPass=new En(yn(Mm,this.trailU));const r=n*n,a=new $e;a.setAttribute("position",new re(new Float32Array(r*3),3)),this.depU={tAgent:{value:null},uSize:{value:n},uAspect:this.u.uAspect,uDeposit:{value:.35}};const o=new cl({glslVersion:Ms,vertexShader:Sm,fragmentShader:ym,uniforms:this.depU,depthTest:!1,depthWrite:!1,transparent:!0,blending:na,blendEquation:rn,blendSrc:on,blendDst:on,blendSrcAlpha:on,blendDstAlpha:on});this.points=new zp(a,o),this.points.frustumCulled=!1,this.depScene=new Es,this.depScene.add(this.points),this.depCam=new ws(-1,1,1,-1,0,1),this.trails=null,this.reset()}resize(t){const n=Math.max(160,Math.round(640/t));this.trails?.forEach(r=>r.dispose());const s={type:Hn,minFilter:Qt,magFilter:Qt,depthBuffer:!1,generateMipmaps:!1};this.trails=[new ce(640,n,s),new ce(640,n,s)],this.trails.forEach(r=>Ke(this.renderer,r)),this.trailU.uTexel.value.set(1/640,1/n),this.u.uAspect.value=t}reset(){this.agents.forEach(t=>Ke(this.renderer,t)),this.trails?.forEach(t=>Ke(this.renderer,t)),this.active=!1,this.alive=0}get trail(){return this.trails[0].texture}setStrokes(t){const e=Math.min(16,t.length);for(let n=0;n<e;n++)this.strokes[n].set(t[n][0],t[n][1],t[n][3]||0,t[n][4]||0);this.u.uStrokeCount.value=e}burst(t){this.pendingBurst=t}update(t,e){if(!e.active&&!this.active)return;this.active=e.active||this.alive>0,this.alive=e.active?1:Math.max(0,this.alive-t*.5);const n=this.u;if(n.uDt.value=t,n.uTime.value=e.time,n.uActive.value=e.active?1:0,n.uGrowR.value=e.growR,n.uOrigin.value.set(e.origin[0],e.origin[1]),n.uHybrid.value=e.hybrid,n.uSpawnRate.value=e.spawnRate,n.uStrokeSteal.value=e.strokeSteal,this.pendingBurst){const r=this.pendingBurst.slice(0,16);for(let a=0;a<r.length;a++)this.strokes[a].set(...r[a]);n.uStrokeCount.value=r.length,n.uStrokeSteal.value=.025,this.pendingBurst=null}n.uMouse.value.copy(e.mouse),n.tDry.value=e.dry,n.tWet.value=e.wet,n.tField.value=e.field,n.tTrail.value=this.trails[0].texture,n.tAgent.value=this.agents[0].texture,this.agentPass.render(this.renderer,this.agents[1]),this.agents.reverse(),this.trailU.tTrail.value=this.trails[0].texture,this.trailU.uDecay.value=Math.pow(.9,t*60),this.trailPass.render(this.renderer,this.trails[1]),this.depU.tAgent.value=this.agents[0].texture;const s=this.renderer;s.autoClear=!1,s.setRenderTarget(this.trails[1]),s.render(this.depScene,this.depCam),s.autoClear=!0,s.setRenderTarget(null),this.trails.reverse()}}class Tm{constructor(t,e){this.renderer=t,this.type=e,this.strokes=Array.from({length:16},()=>new wt(0,0,0,0)),this.u={tState:{value:null},tDry:{value:null},tWet:{value:null},tField:{value:null},uTexel:{value:new Lt},uAspect:{value:1},uTime:{value:0},uAdvect:{value:0},uStepDt:{value:.45},uIterSec:{value:0},uActive:{value:0},uGrowR:{value:0},uOrigin:{value:new Lt},uSeedRate:{value:0},uMouse:{value:new wt(-9,-9,0,0)},uStroke:{value:this.strokes},uStrokeCount:{value:0}},this.pass=new En(yn(Vp,this.u)),this.rts=null,this.alive=0}resize(t){const n=Math.max(200,Math.round(720/t));this.rts?.forEach(r=>r.dispose());const s={type:this.type,minFilter:Qt,magFilter:Qt,depthBuffer:!1,generateMipmaps:!1};this.rts=[new ce(720,n,s),new ce(720,n,s)],this.reset(),this.u.uTexel.value.set(1/720,1/n),this.u.uAspect.value=t,this.texel=[1/720,1/n]}reset(){this.rts?.forEach(t=>Ke(this.renderer,t)),this.alive=0}get texture(){return this.rts[0].texture}setStrokes(t){const e=Math.min(16,t.length);for(let n=0;n<e;n++)this.strokes[n].set(t[n][0],t[n][1],0,0);this.u.uStrokeCount.value=e}update(t,e,n){if(this.alive=e.active?4:this.alive-t,this.alive<=0)return;const s=this.u;s.uTime.value=e.time,s.uActive.value=e.active?1:0,s.uGrowR.value=e.growR,s.uOrigin.value.set(e.origin[0],e.origin[1]),s.uSeedRate.value=e.seedRate,s.uMouse.value.copy(e.mouse),s.uAdvect.value=t/n*.8,s.uIterSec.value=t/n,s.tDry.value=e.dry,s.tWet.value=e.wet,s.tField.value=e.field;for(let r=0;r<n;r++)s.tState.value=this.rts[0].texture,this.pass.render(this.renderer,this.rts[1]),this.rts.reverse(),r===0&&(s.uStrokeCount.value=0,s.uMouse.value.w=0);this.renderer.setRenderTarget(null)}}const Am=1.1,bm=7.5,To=2.4,wm=10;class Rm{constructor(){this.listeners={},this.reset()}on(t,e){var n;((n=this.listeners)[t]||(n[t]=[])).push(e)}emit(t,...e){(this.listeners[t]||[]).forEach(n=>n(...e))}reset(){this.phase=1,this.charge=0,this.holding=!1,this.holdPos=[0,0],this.rate=1,this.trans=null,this.tech=0,this.hybrid=0,this.ruptureT=-1}get transitioning(){return!!this.trans}beginHold(t,e=0,n=1){return this.trans||this.phase===3?!1:(this.holding=!0,this.holdPos=t.slice(),this.rate=(this.phase===2?ve(1.25-e*1.4,.35,1):1)*n,!0)}moveHold(t){this.holding&&(this.holdPos=t.slice())}endHold(){this.holding=!1}update(t,e){if(this.holding&&!this.trans){if(this.charge+=t/Am*this.rate,this.charge>=1){this.charge=1,this.holding=!1;const n=this.phase+1;this.trans={to:n,start:e,duration:n===2?bm:wm,origin:this.holdPos.slice()},this.phase=n,this.emit("trigger",n,this.holdPos.slice(),e)}}else this.charge=Math.max(0,this.charge-t*(this.trans?.6:1.4));if(this.trans){const n=ve((e-this.trans.start)/this.trans.duration,0,1);this.trans.to===2?this.tech=Qr((e-this.trans.start-To)/(this.trans.duration-To-.5)):this.hybrid=Qr(ve(n*1.6,0,1)),n>=1&&(this.emit("complete",this.trans.to,e),this.trans=null)}this.progress=this.trans?ve((e-this.trans.start)/this.trans.duration,0,1):1,this.ruptureT=this.trans&&this.trans.to===2?e-this.trans.start:this.phase>=2?99:-1}}class Cm{constructor(t){this.onChange=t,this.tier=0,this.avg=1/60,this.slowFor=0,this.cooldown=3}sample(t){this.avg+=(t-this.avg)*.05,this.cooldown-=t,!(this.cooldown>0)&&(this.avg>1/48?this.slowFor+=t:this.slowFor=Math.max(0,this.slowFor-t*.5),this.slowFor>1.5&&this.tier<gs.length-1&&(this.tier++,this.slowFor=0,this.cooldown=3,this.avg=1/60,this.onChange(this.tier)))}}const gs=[{pixelRatio:1.5,simMax:1024,substeps:2,rdIterations:4},{pixelRatio:1.25,simMax:860,substeps:2,rdIterations:3},{pixelRatio:1,simMax:720,substeps:1,rdIterations:3},{pixelRatio:.85,simMax:600,substeps:1,rdIterations:2}];class Pm{constructor(t,e){this.el=t,this.input=e,this.onMove=n=>{const s=n.getCoalescedEvents?n.getCoalescedEvents():null;if(s&&s.length)for(const r of s)e.injectPointer(r.clientX,r.clientY);else e.injectPointer(n.clientX,n.clientY)},this.onDown=n=>{n.button===0&&(t.setPointerCapture?.(n.pointerId),e.injectPointer(n.clientX,n.clientY),e.injectDown(n.clientX,n.clientY))},this.onUp=n=>{n.button===0&&e.injectUp(n.clientX,n.clientY)},this.onLeave=()=>e.injectLeave(),this.onKey=n=>{if(n.repeat||n.ctrlKey||n.metaKey||n.altKey)return;const s=n.key.toLowerCase();(s==="r"||s==="h"||s==="m"||s==="c"||s==="f")&&e.injectKey(s)},this.onContext=n=>n.preventDefault(),t.addEventListener("pointermove",this.onMove),t.addEventListener("pointerdown",this.onDown),t.addEventListener("pointerup",this.onUp),t.addEventListener("pointercancel",this.onUp),t.addEventListener("pointerleave",this.onLeave),t.addEventListener("contextmenu",this.onContext),window.addEventListener("keydown",this.onKey)}dispose(){const t=this.el;t.removeEventListener("pointermove",this.onMove),t.removeEventListener("pointerdown",this.onDown),t.removeEventListener("pointerup",this.onUp),t.removeEventListener("pointercancel",this.onUp),t.removeEventListener("pointerleave",this.onLeave),t.removeEventListener("contextmenu",this.onContext),window.removeEventListener("keydown",this.onKey)}}class Dm{constructor(t){this.listeners={},this.streams=new Map,this.pointer={x:0,y:0,inside:!1,down:!1},this.press=null,this.HOLD_BREAK_PX=14,this.TAP_MAX_S=.25,this.sources=[new Pm(t,this)]}on(t,e){var n;((n=this.listeners)[t]||(n[t]=[])).push(e)}emit(t,...e){(this.listeners[t]||[]).forEach(n=>n(...e))}addSource(t){this.sources.push(t)}stream(t){let e=this.streams.get(t);return e||(e={id:t,pts:[],fine:!1,down:!1,brk:!1},this.streams.set(t,e)),e}injectPointer(t,e){this.pointer.x=t,this.pointer.y=e,this.pointer.inside=!0,this.stream("mouse").pts.push([t,e]),this.press&&!this.press.broken&&Math.hypot(t-this.press.x,e-this.press.y)>this.HOLD_BREAK_PX&&(this.press.broken=!0,this.emit("hold:end",{broken:!0}))}injectLeave(){this.pointer.inside=!1}injectStroke(t,e,n,s,r){const a=this.stream(t);s&&(a.down||(a.brk=!0),a.pts.push([e,n]),a.fine=r),a.down=s}endStroke(t){this.streams.delete(t)}setPointer(t,e,n){n&&(this.pointer.x=t,this.pointer.y=e),this.pointer.inside=n}injectDown(t,e){this.pointer.down=!0,this.press={x:t,y:e,t:performance.now(),broken:!1},this.emit("hold:start",{x:t,y:e})}injectUp(t,e){this.pointer.down=!1;const n=this.press;if(this.press=null,!n)return;n.broken||this.emit("hold:end",{broken:!1});const s=(performance.now()-n.t)/1e3;!n.broken&&s<this.TAP_MAX_S&&this.emit("tap",{x:t,y:e})}injectKey(t){this.emit("key",t)}consumeStreams(t=[]){t.length=0;for(const e of this.streams.values())t.push({id:e.id,pts:e.pts,fine:e.fine,brk:e.brk}),e.pts=[],e.brk=!1;return t}}const Lm="modulepreload",Um=function(i){return"/"+i},Ao={},Im=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");s=Promise.allSettled(e.map(l=>{if(l=Um(l),l in Ao)return;Ao[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":Lm,c||(d.as="script"),d.crossOrigin="",d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((u,f)=>{d.addEventListener("load",u),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})},Nm="0.10.14",Fm=`https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${Nm}/wasm`,Om="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",Bm=[4,8,12,16,20],bo=1.3,zm=.3,km=.25,Hm=.8,ls=(i,t)=>Math.hypot(i.x-t.x,i.y-t.y,(i.z||0)-(t.z||0)),wo=i=>i>Math.PI?i-2*Math.PI:i<-Math.PI?i+2*Math.PI:i;class Pi{constructor(t=1.4,e=.006,n=1){this.minCutoff=t,this.beta=e,this.dCutoff=n,this.t=null}static alpha(t,e){return 1/(1+1/(2*Math.PI*e)/t)}filter(t,e){if(this.t===null)return this.t=e,this.x=t,this.dx=0,t;const n=Math.max(e-this.t,.001);return this.t=e,this.dx+=Pi.alpha(n,this.dCutoff)*((t-this.x)/n-this.dx),this.x+=Pi.alpha(n,this.minCutoff+this.beta*Math.abs(this.dx))*(t-this.x),this.x}}class Gm{constructor(t){this.input=t,this.enabled=!1,this.landmarker=null,this.video=null,this.lastVideoTime=-1,this.tracks=[],this.hands=[],this.pose=null,this.nextId=0}async enable(t){if(this.enabled)return;const{FilesetResolver:e,HandLandmarker:n}=await Im(async()=>{const{FilesetResolver:o,HandLandmarker:l}=await import("./vision_bundle-B5dWli7Q.js");return{FilesetResolver:o,HandLandmarker:l}},[]),s=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!1});this.video=t,t.srcObject=s,await t.play();const r=await e.forVisionTasks(Fm),a=o=>({baseOptions:{modelAssetPath:Om,delegate:o},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.55,minHandPresenceConfidence:.5,minTrackingConfidence:.5});try{this.landmarker=await n.createFromOptions(r,a("GPU"))}catch{this.landmarker=await n.createFromOptions(r,a("CPU"))}this.enabled=!0}disable(){this.enabled=!1,this.video?.srcObject?.getTracks().forEach(t=>t.stop()),this.video&&(this.video.srcObject=null),this.landmarker?.close(),this.landmarker=null;for(const t of this.tracks)this.input.endStroke(t.id);this.tracks=[],this.hands=[],this.setPose(null),this.input.setPointer(0,0,!1)}update(t){if(!this.enabled||!this.video||this.video.readyState<2||this.video.currentTime===this.lastVideoTime||t-(this.lastDetect||0)<40)return;this.lastDetect=t,this.lastVideoTime=this.video.currentTime;const e=this.landmarker.detectForVideo(this.video,t),n=(e.landmarks||[]).map((s,r)=>({lm:s,wlm:e.worldLandmarks?.[r]}));this.process(n,t/1e3)}toScreen(t){const e=window.innerWidth,n=window.innerHeight,s=(1-t.x-.5)*bo+.5,r=(t.y-.5)*bo+.5;return[Math.min(1,Math.max(0,s))*e,Math.min(1,Math.max(0,r))*n]}match(t,e){const n=[];t.forEach((a,o)=>this.tracks.forEach((l,c)=>{const h=Math.hypot(a.palmN.x-l.palmN.x,a.palmN.y-l.palmN.y);h<km&&n.push([h,o,c])})),n.sort((a,o)=>a[0]-o[0]);const s=new Set,r=new Set;for(const[,a,o]of n)s.has(a)||r.has(o)||(s.add(a),r.add(o),t[a].track=this.tracks[o]);for(const a of t)a.track||(a.track={id:"hand"+this.nextId++,fx:new Pi,fy:new Pi,open:!1,closed:!1,pinch:!1,fist:!1,closedAt:-9,wasOpen:!1,closedFor:0,twistAcc:0,twistV:0,lastT:null},this.tracks.push(a.track));for(const a of t)a.track.palmN=a.palmN,a.track.lastSeen=e}process(t,e){const n=this.input,s=t.map(({lm:o,wlm:l})=>({lm:o,P:l||o,palmN:[0,5,9,13,17].reduce((c,h)=>({x:c.x+o[h].x/5,y:c.y+o[h].y/5}),{x:0,y:0})}));this.match(s,e);for(const o of s)this.gestures(o,o.track,e);this.tracks=this.tracks.filter(o=>e-o.lastSeen<=zm?!0:(n.endStroke(o.id),o.fist&&n.emit("gesture",{type:"fist",stage:"end",palm:o.hand.palm}),!1));const r=this.tracks.filter(o=>o.hand);this.hands=r.map(o=>o.hand),this.updatePose(r,e);let a=null;for(const o of s){const l=o.track,c=l.hand,h=!this.pose&&(c.pointing||c.pinch),d=c.pinch?[(c.tips[0][0]+c.tips[1][0])/2,(c.tips[0][1]+c.tips[1][1])/2]:c.tips[1],u=[l.fx.filter(d[0],e),l.fy.filter(d[1],e)];c.pen=h,c.penPos=u,n.injectStroke(l.id,u[0],u[1],h,c.pinch),h&&c.pinch&&n.emit("gesture",{type:"pinch",pos:u}),(!a||h&&!a.pen)&&(a={pen:h,p:u})}a?n.setPointer(a.p[0],a.p[1],!0):r.length||n.setPointer(0,0,!1)}gestures(t,e,n){const s=this.input,{lm:r,P:a}=t,o=a[0],l=(I,O)=>ls(a[I],o)/Math.max(ls(a[O],o),1e-6),c=[l(8,6),l(12,10),l(16,14),l(20,18)],h=c.filter(I=>I>1.15).length,d=c.filter(I=>I<.95).length,u=Math.max(ls(a[0],a[9]),1e-6),f=ls(a[4],a[8])/u;e.open=e.open?h>=2:h>=3,e.closed=e.closed?h===0:d===4,e.pinch=e.pinch?f<.4:f<.26&&c[0]>.8;const g=!e.pinch&&c[0]>1.15&&c[1]<1.05&&c[2]<1.05,x=Bm.map(I=>this.toScreen(r[I])),p=this.toScreen(t.palmN);e.hand={id:e.id,tips:x,palm:p,pointing:g,pinch:e.pinch,open:e.open,closed:e.closed,nExt:h},e.closed&&(e.closedAt=n),e.open&&!e.wasOpen&&n-e.closedAt<Hm&&s.emit("gesture",{type:"bloom",tips:x,palm:p}),e.wasOpen=e.open;const m=e.lastT===null?1/25:Math.min(Math.max(n-e.lastT,1/120),.2);e.closed&&d>=3&&!e.pinch?(e.closedFor+=m,!e.fist&&e.closedFor>.3&&(e.fist=!0,s.emit("gesture",{type:"fist",stage:"start",palm:p})),e.fist&&s.emit("gesture",{type:"fist",stage:"hold",palm:p})):(e.closedFor=0,e.fist&&(e.fist=!1,s.emit("gesture",{type:"fist",stage:"end",palm:p})));const E=Math.atan2(r[17].y-r[5].y,r[17].x-r[5].x),y=a[5].x-o.x,b=a[5].y-o.y,L=(a[5].z||0)-(o.z||0),w=a[17].x-o.x,T=a[17].y-o.y,U=(a[17].z||0)-(o.z||0),W=b*U-L*T,v=y*T-b*w,S=Math.atan2(W,v);if(e.lastT!==null){const I=-wo(E-e.inplane),O=wo(S-e.yaw),V=Math.abs(I)>=Math.abs(O)?I:O;e.twistV+=(V/m-e.twistV)*.5,e.twistAcc=e.twistAcc*Math.exp(-m*3)+V}e.inplane=E,e.yaw=S,e.lastT=n,Math.abs(e.twistAcc)>.45&&Math.abs(e.twistV)>1.2&&h>=2&&s.emit("gesture",{type:"twist",palm:p,rate:e.twistV})}updatePose(t,e){let n=null;if(t.length===2){const[s,r]=t.map(l=>l.hand),a=Math.hypot(s.palm[0]-r.palm[0],s.palm[1]-r.palm[1])/window.innerWidth;s.nExt>=2&&r.nExt>=2&&a>(this.pose==="apart"?.42:.5)?n="apart":a<(this.pose==="together"?.26:.18)&&(n="together"),this.poseMid=[(s.palm[0]+r.palm[0])/2,(s.palm[1]+r.palm[1])/2],this.poseSep=a}n?this.poseSeen=e:this.pose&&e-(this.poseSeen??-9)<.35&&(n=this.pose),this.setPose(n)}setPose(t){t!==this.pose&&(this.pose=t,this.input.emit("pose",{pose:t,mid:this.poseMid}))}}class Vm{constructor(t){this.exp=t,this.blot=new wt(0,0,0,0),this.reset()}reset(){this.swirl=0,this.blotT=0,this.well=null,this.wellT=0,this.repel=null,this.repelT=0,this.tint=0}q(t){return this.exp.composition.screenToQ(t[0],t[1],[0,0])}handle(t){const e=this.exp;if(!e.started)return;const n=e.transition.phase,s=t.palm?t.palm[0]/window.innerWidth:t.pos?t.pos[0]/window.innerWidth:.5;(t.type!=="fist"||t.stage==="start")&&e.audio.gesture(t.type,n,s),t.type==="bloom"?this.bloom(t,n):t.type==="twist"?this.twist(t,n):t.type==="pinch"?this.pinch(t,n):t.type==="fist"&&this.fist(t,n)}bloom(t,e){const n=this.exp,s=n.watercolor,r=this.q(t.palm),a=t.tips.map(o=>this.q(o)).filter(Boolean);if(!(!r||!a.length))if(e===1)a.forEach((o,l)=>{const c=ze[(this.tint+l*2)%ze.length].A;s.addSegment(o[0],o[1],o[0]+.002,o[1],.016+Math.random()*.008,.45,.32,c,1,Math.random()*50)}),this.tint+=1;else if(e===2){const o=[];for(const l of a){const c=Math.atan2(l[1]-r[1],l[0]-r[0]);for(const h of[-.35,0,.35])o.push([l[0],l[1],Math.cos(c+h),Math.sin(c+h)])}n.physarum.burst(o)}else{const o=n.palette.current.ink;a.forEach((l,c)=>{const h=hi(ze[(this.tint+c*2)%ze.length].A,o,.5);s.addSegment(l[0],l[1],l[0]+.002,l[1],.012,.3,.18,h,1,Math.random()*50),n.seedStroke(l,[l[0]-r[0],l[1]-r[1]])}),this.tint+=1}}twist(t,e){const n=this.q(t.palm);if(!n)return;const s=ve(Math.abs(t.rate)/4,.3,2)*Math.sign(t.rate),r=e===1?.07:e===2?.12:.09;this.exp.field.addVortex(n[0],n[1],s*r,e===2?.1:.07),e===1&&(this.swirl=1)}pinch(t,e){if(e!==2)return;const n=this.q(t.pos);n&&(this.well=n,this.wellT=.25)}fist(t,e){const n=this.exp,s=this.q(t.palm);if(s){if(e===1)t.stage!=="end"&&(this.blot.set(s[0],s[1],.06,2.5),this.blotT=.15);else if(e===2&&t.stage==="start")n.digital.addWave(s[0],s[1],.014,n.time),this.repel=s,this.repelT=.8;else if(e===3&&t.stage==="start"){const r=hi(n.palette.current.ink,Xe[2].A,.3);n.watercolor.addSegment(s[0],s[1],s[0]+.003,s[1],.035,.18,.45,r,1,Math.random()*50);for(let a=0;a<6;a++){const o=a/6*Math.PI*2;n.seedStroke([s[0]+Math.cos(o)*.03,s[1]+Math.sin(o)*.03],[Math.cos(o),Math.sin(o)])}}}}update(t){this.swirl=Math.max(0,this.swirl-t*1.2),this.blotT-=t,this.blotT<=0&&(this.blot.w=0),this.wellT-=t,this.wellT<=0&&(this.well=null),this.repelT-=t,this.repelT<=0&&(this.repel=null)}agentOverride(t){return this.well?(t.set(this.well[0],this.well[1],0,2),!0):this.repel?(t.set(this.repel[0],this.repel[1],0,-2.5),!0):!1}}const Ro={1:[[220,261.63,329.63,493.88],[174.61,220,261.63,329.63],[130.81,196,329.63,392],[196,246.94,293.66,329.63]],2:[[110,116.54,164.81,174.61],[110,116.54,155.56,174.61]],3:[[146.83,185,220,329.63],[123.47,146.83,220,329.63],[98,146.83,185,246.94],[110,164.81,185,246.94]]},Co=[880,932.33,1318.51,1396.91],Wm=[880,987.77,1318.51,1174.66],gl=112,hr=60/gl*16;class qm{constructor(){this.ctx=null,this.muted=!1,this.lastPluck=0,this.queue=[],this.step=0,this.phase=1,this.chordIdx=0,this.lastGesture={},this.state={tech:0,hybrid:0,agitation:0,charge:0}}start(){if(this.ctx){this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t,n=e.currentTime;this.master=e.createGain(),this.master.gain.setValueAtTime(0,n),this.master.gain.linearRampToValueAtTime(this.muted?0:.9,n+3),this.duck=e.createGain();const s=e.createDynamicsCompressor();s.threshold.value=-20,s.ratio.value=3,s.attack.value=.01,s.release.value=.3,this.master.connect(this.duck).connect(s).connect(e.destination),this.reverb=e.createConvolver(),this.reverb.buffer=this.impulse(3.6);const r=e.createGain();r.gain.value=.55,this.reverb.connect(r).connect(this.master),this.dry=e.createGain(),this.dry.connect(this.master),this.send=e.createGain(),this.send.connect(this.reverb),this.buses=new Map,this.noise=this.noiseBuffer(4);const a=e.createBufferSource();a.buffer=this.noise,a.loop=!0,this.bedBP=e.createBiquadFilter(),this.bedBP.type="bandpass",this.bedBP.frequency.value=700,this.bedBP.Q.value=.9;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=2600,this.bedGain=e.createGain(),this.bedGain.gain.value=0,a.connect(this.bedBP).connect(o).connect(this.bedGain),this.out(this.bedGain,.5,.8),a.start(),this.padFilter=e.createBiquadFilter(),this.padFilter.type="lowpass",this.padFilter.frequency.value=900,this.padFilter.Q.value=.7,this.padGain=e.createGain(),this.padGain.gain.value=0,this.padFilter.connect(this.padGain),this.out(this.padGain,.35,1),this.padVoices=Ro[1][0].map(l=>[-7,7].map((c,h)=>{const d=e.createOscillator();d.type=h?"triangle":"sawtooth",d.frequency.value=l,d.detune.value=c;const u=e.createGain();return u.gain.value=h?.6:.35,d.connect(u).connect(this.padFilter),d.start(),d})),this.pulseOsc=e.createOscillator(),this.pulseOsc.type="sawtooth",this.pulseOsc.frequency.value=55,this.pulseFilt=e.createBiquadFilter(),this.pulseFilt.type="lowpass",this.pulseFilt.Q.value=9,this.pulseFilt.frequency.value=300,this.pulseVCA=e.createGain(),this.pulseVCA.gain.value=0,this.synthBus=e.createGain(),this.synthBus.gain.value=0,this.pulseOsc.connect(this.pulseFilt).connect(this.pulseVCA).connect(this.synthBus),this.out(this.synthBus,.8,.3),this.pulseOsc.start(),this.clusterBus=e.createGain(),this.clusterBus.gain.value=0,this.out(this.clusterBus,.5,.6),this.cluster=Co.map(l=>{const c=e.createOscillator();c.type="sine",c.frequency.value=l;const h=e.createGain();return h.gain.value=.25,c.connect(h).connect(this.clusterBus),c.start(),c}),this.chargeOsc=e.createOscillator(),this.chargeOsc.type="sine",this.chargeOsc.frequency.value=160,this.chargeOsc2=e.createOscillator(),this.chargeOsc2.type="triangle",this.chargeOsc2.frequency.value=161.5,this.chargeGain=e.createGain(),this.chargeGain.gain.value=0,this.chargeOsc.connect(this.chargeGain),this.chargeOsc2.connect(this.chargeGain),this.out(this.chargeGain,.5,.9),this.chargeOsc.start(),this.chargeOsc2.start(),this.nextStep=e.currentTime+.1,this.nextChord=e.currentTime+hr}out(t,e,n){const s=e+"|"+n;let r=this.buses.get(s);if(!r){r=this.ctx.createGain();const a=this.ctx.createGain();a.gain.value=e,r.connect(a).connect(this.dry);const o=this.ctx.createGain();o.gain.value=n,r.connect(o).connect(this.send),this.buses.set(s,r)}t.connect(r)}impulse(t){const e=this.ctx,n=Math.floor(e.sampleRate*t),s=e.createBuffer(2,n,e.sampleRate);for(let r=0;r<2;r++){const a=s.getChannelData(r);for(let o=0;o<n;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/n,2.6)}return s}noiseBuffer(t){const e=this.ctx,n=Math.floor(e.sampleRate*t),s=e.createBuffer(1,n,e.sampleRate),r=s.getChannelData(0);let a=0,o=0,l=0;for(let c=0;c<n;c++){const h=Math.random()*2-1;a=.99765*a+h*.099,o=.963*o+h*.2965,l=.57*l+h*1.0526,r[c]=(a+o+l+h*.1848)*.18}return s}setMuted(t){this.muted=t,this.ctx&&(this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.setTargetAtTime(t?0:this.level(),this.ctx.currentTime,.3))}level(){return .9*(1-.45*this.state.hybrid)}get chord(){const t=Ro[this.phase];return t[this.chordIdx%t.length]}setChord(t){const e=this.chord;this.padVoices.forEach((n,s)=>n.forEach(r=>r.frequency.setTargetAtTime(e[s],t,1.6))),this.phase===3&&this.pulseOsc.frequency.setTargetAtTime(e[0]/2,t,.4)}update(t,e){if(!this.ctx)return;this.state=e;const n=this.ctx.currentTime,{tech:s,hybrid:r,speed:a,charge:o,agitation:l}=e,c=r>.05?3:s>.05?2:1;c!==this.phase&&(this.phase=c,this.chordIdx=0,this.setChord(n),this.nextChord=n+hr);const h=ve(a/1.5,0,1),d=.15;this.muted||this.master.gain.setTargetAtTime(this.level(),n,.8),this.bedGain.gain.setTargetAtTime(.05*(1-.55*s+.4*r)+h*.09,n,d),this.bedBP.frequency.setTargetAtTime(450+1600*h+200*Math.sin(n*.13),n,.2);const u=c===1?.03:c===2?.018:.024;this.padGain.gain.setTargetAtTime(u,n,1.2),this.padFilter.frequency.setTargetAtTime((c===2?380:850)+350*Math.sin(n*.09)+500*h,n,.5),this.synthBus.gain.setTargetAtTime(.55*s*(1-.4*r),n,.4),this.pulseFilt.frequency.setTargetAtTime(220+1600*l*(1-.5*r)+300*r,n,.15),this.clusterBus.gain.setTargetAtTime(.03*s*(1-.5*r)*(.5+.5*l),n,.5),this.cluster.forEach((g,x)=>g.frequency.setTargetAtTime(ke(Co[x],Wm[x],r),n,1.2)),this.chargeGain.gain.setTargetAtTime(o*.05,n,.05),this.chargeOsc.frequency.setTargetAtTime(160+o*o*420,n,.05),this.chargeOsc2.frequency.setTargetAtTime(161.5+o*o*425+o*6,n,.05),n>this.nextChord&&(this.chordIdx++,this.setChord(n),this.nextChord=n+hr);const f=60/gl/4;for(;this.nextStep<n+.12;)this.tick(this.nextStep,this.step),this.nextStep+=f,this.step=(this.step+1)%16}tick(t,e){const{tech:n,hybrid:s,agitation:r,charge:a}=this.state;if(n>.05&&e%2===0){const o=e%8===0?1:e%4===0?.6:.35,l=this.pulseVCA.gain;l.setValueAtTime(1e-4,t),l.linearRampToValueAtTime(.3*o,t+.008),l.exponentialRampToValueAtTime(1e-4,t+.12+.18*s)}if(n>.2&&Math.random()<(.12+r*.35)*n*(1-.6*s)&&this.click(t,.03),a>.05&&(e===0||e===3||e===8||e===11)&&this.heartbeat(t,a*(e%8===0?1:.6)),s>.3&&e%2===0&&this.queue.length){const o=this.queue.shift();this.pluck(t,o.freq,o.vel,o.pan,!0)}}heartbeat(t,e){const n=this.ctx,s=n.createOscillator();s.type="sine",s.frequency.setValueAtTime(70,t),s.frequency.exponentialRampToValueAtTime(38,t+.18);const r=n.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.28*e,t+.01),r.gain.exponentialRampToValueAtTime(1e-4,t+.25),s.connect(r),this.out(r,.9,.2),s.start(t),s.stop(t+.3)}click(t,e=.05){const n=this.ctx,s=n.createBufferSource();s.buffer=this.noise;const r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=3e3+Math.random()*4e3,r.Q.value=6;const a=n.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(e,t+.002),a.gain.exponentialRampToValueAtTime(1e-4,t+.04);const o=n.createStereoPanner();o.pan.value=Math.random()*1.6-.8,s.connect(r).connect(a).connect(o),this.out(o,.6,.4),s.start(t,Math.random()*3,.06)}blip(t,e,n,s=.06,r="square"){const a=this.ctx,o=a.createOscillator();o.type=r,o.frequency.value=e;const l=a.createBiquadFilter();l.type="bandpass",l.frequency.value=e,l.Q.value=3;const c=a.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(n,t+.004),c.gain.exponentialRampToValueAtTime(1e-4,t+s),o.connect(l).connect(c),this.out(c,.5,.5),o.start(t),o.stop(t+s+.05)}birth(){if(!this.ctx)return;const t=this.ctx.currentTime;if(t-(this.lastBirth||0)<.07)return;this.lastBirth=t,this.click(t,.06);const e=this.chord;this.blip(t,e[Math.floor(Math.random()*e.length)]*8,.02,.05)}stroke({speed:t,x:e,y:n,density:s,accent:r}){if(!this.ctx)return;const a=this.ctx.currentTime,o=ke(.55,.11,ve(t/1.4,0,1));if(!r&&a-this.lastPluck<o)return;this.lastPluck=a;const l=this.chord,c=n<.33?1:n<.66?2:4,h=l[Math.floor(Math.random()*l.length)]*c,d=ve(.25+t*.3+(r?.3:0),0,.9)*(.6+Math.min(s,1)*.4),u=ve(e*2-1,-.9,.9);this.state.hybrid>.3?this.queue.length<4&&this.queue.push({freq:h,vel:d,pan:u}):this.state.tech<.5&&this.pluck(a,h,d,u,!1,s)}pluck(t,e,n,s,r,a=.3){const o=this.ctx,l=o.createOscillator();l.frequency.value=e;const c=o.createOscillator();c.frequency.value=e*(r?3.5:1);const h=o.createGain(),d=e*(r?1.8:.3+a*.8);h.gain.setValueAtTime(d,t),h.gain.exponentialRampToValueAtTime(d*.05+.01,t+(r?1.4:.8)),c.connect(h).connect(l.frequency);const u=o.createGain();u.gain.setValueAtTime(1e-4,t),u.gain.linearRampToValueAtTime(.06*n,t+(r?.004:.02)),u.gain.exponentialRampToValueAtTime(1e-4,t+(r?2.6:2));const f=o.createStereoPanner();f.pan.value=s,l.connect(u).connect(f),this.out(f,.45,.9),l.start(t),c.start(t),l.stop(t+2.8),c.stop(t+2.8)}wave(t=1){if(!this.ctx)return;const e=this.ctx,n=e.currentTime;this.sweep(n,190,45,.9,.12*t),this.whoosh(n,.6,1800,300,.05*t)}sweep(t,e,n,s,r,a="sine"){const o=this.ctx,l=o.createOscillator();l.type=a,l.frequency.setValueAtTime(e,t),l.frequency.exponentialRampToValueAtTime(n,t+s*.8);const c=o.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(r,t+.02),c.gain.exponentialRampToValueAtTime(1e-4,t+s),l.connect(c),this.out(c,.8,.4),l.start(t),l.stop(t+s+.1)}whoosh(t,e,n,s,r,a=2){const o=this.ctx,l=o.createBufferSource();l.buffer=this.noise;const c=o.createBiquadFilter();c.type="bandpass",c.Q.value=a,c.frequency.setValueAtTime(n,t),c.frequency.exponentialRampToValueAtTime(s,t+e);const h=o.createGain();h.gain.setValueAtTime(1e-4,t),h.gain.linearRampToValueAtTime(r,t+e*.3),h.gain.exponentialRampToValueAtTime(1e-4,t+e),l.connect(c).connect(h),this.out(h,.4,.9),l.start(t,Math.random()*2,e+.1)}drop(){if(!this.ctx)return;const t=this.ctx.currentTime;this.sweep(t,1300,520,.5,.05)}bloom(){if(!this.ctx)return;const t=this.chord;this.queue.length<4&&this.queue.push({freq:t[Math.floor(Math.random()*4)]*4,vel:.35,pan:Math.random()*1.2-.6})}gesture(t,e,n=.5){if(!this.ctx)return;const s=this.ctx.currentTime,r={bloom:.25,twist:.35,pinch:.18,fist:.3}[t]||.2;if(s-(this.lastGesture[t]||0)<r)return;this.lastGesture[t]=s;const a=this.chord,o=ve(n*2-1,-.9,.9);t==="bloom"?a.concat([a[0]*2]).forEach((l,c)=>{e===2?this.blip(s+c*.05,l*4,.025,.08):this.pluck(s+c*.06,l*2,.5,o,e===3)}):t==="twist"?this.whoosh(s,.7,e===2?2500:600,e===2?600:1800,.05,e===2?6:2):t==="pinch"?e===2?this.blip(s,a[1]*8,.012,.05,"sine"):this.click(s,.025):t==="fist"&&(e===1?this.whoosh(s,.5,400,150,.06,1):e===2?(this.sweep(s,120,30,1.2,.22),this.click(s,.1)):a.forEach((l,c)=>this.pluck(s+c*.02,l/2,.35,o,!1,.6)))}paletteShift(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime;this.chord.concat([this.chord[0]*2]).forEach((n,s)=>{const r=t.createOscillator();r.type=s%2?"triangle":"sine",r.frequency.value=n*2;const a=t.createGain();a.gain.setValueAtTime(1e-4,e+s*.18),a.gain.linearRampToValueAtTime(.022,e+1.2+s*.25),a.gain.exponentialRampToValueAtTime(1e-4,e+7);const o=t.createStereoPanner();o.pan.value=s/4*1.4-.7,r.connect(a).connect(o),this.out(o,.3,1),r.start(e),r.stop(e+7.5)}),this.whoosh(e,4,250,3e3,.03)}phaseStart(t){if(!this.ctx)return;const e=this.ctx,n=e.currentTime;if(t===2){const s=e.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(70,n),s.frequency.exponentialRampToValueAtTime(240,n+.6);const r=e.createBiquadFilter();r.type="lowpass",r.Q.value=8,r.frequency.setValueAtTime(200,n),r.frequency.exponentialRampToValueAtTime(2400,n+.6);const a=e.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.linearRampToValueAtTime(.12,n+.58),a.gain.setValueAtTime(1e-4,n+.61),s.connect(r).connect(a),this.out(a,.8,.3),s.start(n),s.stop(n+.7);const o=n+.6,l=e.createBufferSource();l.buffer=this.noise;const c=e.createBiquadFilter();c.type="highpass",c.frequency.value=1800;const h=e.createGain();h.gain.setValueAtTime(1e-4,o),h.gain.linearRampToValueAtTime(.4,o+.003),h.gain.exponentialRampToValueAtTime(1e-4,o+.35),l.connect(c).connect(h),this.out(h,.9,.8),l.start(o,.5,.4),this.sweep(o,75,26,3.2,.3);for(let d=0;d<18;d++){const u=1760*Math.pow(.86,d)*(1+(Math.random()-.5)*.04);this.blip(o+.2+d*.1,u,.04*(1-d/20),.07),d%3===0&&this.click(o+.25+d*.1,.05)}this.duck.gain.cancelScheduledValues(n),this.duck.gain.setValueAtTime(1,n),this.duck.gain.setValueAtTime(1,n+2.6),this.duck.gain.linearRampToValueAtTime(.12,n+3),this.duck.gain.setValueAtTime(.12,n+4.2),this.duck.gain.linearRampToValueAtTime(1,n+6.5),this.whoosh(n+4.3,3,60,220,.09,1)}else t===3?[220,329.63,493.88,659.25,987.77].forEach((s,r)=>{const a=e.createOscillator();a.type=r%2?"triangle":"sine",a.frequency.value=s;const o=e.createGain();o.gain.setValueAtTime(1e-4,n),o.gain.linearRampToValueAtTime(.022,n+2.5+r*.4),o.gain.exponentialRampToValueAtTime(1e-4,n+9),a.connect(o),this.out(o,.3,1),a.start(n),a.stop(n+9.5)}):t===1&&(this.queue=[],this.duck.gain.cancelScheduledValues(n),this.duck.gain.setValueAtTime(1,n))}}class Xm{constructor(t,e){this.canvas=t,this.overlay=e,this.composition=new Yp(t);const n=this.composition.renderer,s=n.extensions,r=s.has("EXT_color_buffer_float")&&s.has("OES_texture_float_linear");this.floatType=r?Ye:Hn,this.watercolor=new em(n,this.floatType),this.field=new nm(n,this.floatType),this.analyzer=new im(n),this.digital=new gm(this.composition),this.hybrid=new vm(this),this.transition=new Rm,this.input=new Dm(t),this.audio=new qm,this.brushes=new Map,this.streamList=[],this.gestureList=[],this.physarum=new Em(n,this.floatType),this.reaction=new Tm(n,this.floatType),this.palette=this.composition.palette,this.perf=new Cm(()=>this.resize()),this.hands=new Gm(this.input),this.gestures=new Vm(this),this.poseHold=!1,this.started=!1,this.time=0,this.frame=0,this.last=performance.now(),this.analysis=null,this.analysisTime=-99,this.pointerQ=[0,0],this.ndc=[0,0],this.mouse={vel:[0,0],speed:0,agitation:0,lastWave:-9,idle:0},this.ambientT=0,this.resetArmed=-99,this.strokePts=[],this.coverageT=0,this.lastShift=-99,this.rupture={origin:[0,0],start:0},this.agentMouse=new wt(-9,-9,0,0),this.agentCtx={},this.wireEvents(),this.resize(),this.warmup();let a=0;window.addEventListener("resize",()=>{clearTimeout(a),a=setTimeout(()=>this.resize(),150)}),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}begin(){this.started||(this.started=!0,this.audio.start(),this.overlay.hideIntro(),this.overlay.setPhase(1),this.brushes.forEach(t=>t.reset()))}async toggleHands(){if(this.hands.enabled){this.hands.disable(),this.overlay.setHands("off");return}this.overlay.setHands("loading");try{await this.hands.enable(this.overlay.video),this.overlay.setHands("on"),this.overlay.toast("manos activas · separa las manos y mantenlas para la ruptura",4e3)}catch(t){console.warn(t),this.overlay.setHands("off"),this.overlay.toast("no se pudo activar la cámara",3e3)}}seedStroke(t,e=[0,0]){const n=Math.hypot(e[0],e[1])||1;this.strokePts.push([t[0],t[1],this.time,e[0]/n,e[1]/n]),this.strokePts.length>16&&this.strokePts.shift()}toggleMute(){this.audio.setMuted(!this.audio.muted),this.overlay.setSound(!this.audio.muted)}wireEvents(){const t=this.input,e=this.transition;t.on("hold:start",({x:n,y:s})=>{if(!this.started)return;const r=this.composition.screenToQ(n,s,[0,0]);if(!r)return;let a=0;e.phase===2&&this.analysis&&(a=this.analysis.densAt(r[0],r[1])),this.requestAnalysis(),e.beginHold(r,a)}),t.on("hold:end",()=>e.endHold()),t.on("tap",({x:n,y:s})=>{if(!this.started)return;const r=this.composition.screenToQ(n,s,[0,0]);r&&this.handleTap(r)}),t.on("gesture",n=>this.gestures.handle(n)),t.on("pose",({pose:n,mid:s})=>{if(!this.started)return;if((n==="apart"&&e.phase===1||n==="together"&&e.phase===2)&&s){const a=this.composition.screenToQ(s[0],s[1],[0,0]);a&&e.beginHold(a,0,1.1/1.5)&&(this.poseHold=!0)}else this.poseHold&&(e.endHold(),this.poseHold=!1)}),t.on("key",n=>{n==="c"?this.toggleHands():n==="f"?this.overlay.toggleStats():n==="h"?this.overlay.toggleHints():n==="m"?this.toggleMute():n==="r"&&this.started&&(this.time-this.resetArmed<3?this.reset():(this.resetArmed=this.time,this.overlay.toast("pulsa R otra vez para reiniciar",3e3)))}),e.on("trigger",(n,s,r)=>{n===2?(this.analysis||this.analyzeNow(),this.digital.buildRupture(this.analysis,s,r,this.aspect),this.rupture={origin:s.slice(),start:r},this.composition.shared.uRupO.value.set(s[0],s[1]),this.poseHold=!1,this.audio.phaseStart(2),this.overlay.setPhase(2)):n===3&&(this.hybrid.begin(s,r),this.digital.addWave(s[0],s[1],.006,r),this.audio.phaseStart(3),this.overlay.setPhase(3),this.poseHold=!1)})}warmup(){const t=this.composition.renderer,e=this.physarum,n=this.reaction;e.agentPass.render(t,e.agents[1]),e.trailPass.render(t,e.trails[1]),t.autoClear=!1,t.setRenderTarget(e.trails[1]),t.render(e.depScene,e.depCam),t.autoClear=!0,n.u.tState.value=n.rts[0].texture,n.pass.render(t,n.rts[1]),this.analyzer.render(this.watercolor.wet,this.watercolor.dry,this.aspect),t.setRenderTarget(null),t.compile(this.composition.scene,this.composition.camera),e.reset(),n.reset()}analyzeNow(){this.analysis=this.analyzer.analyze(this.watercolor.wet,this.watercolor.dry,this.aspect),this.analysisTime=this.time}requestAnalysis(){if(this.analyzer.pending)return;const t=this.time;this.analysisRequested=t,this.analyzer.analyzeAsync(this.watercolor.wet,this.watercolor.dry,this.aspect).then(e=>{this.analysis=e,this.analysisTime=t}).catch(()=>{})}handleTap(t){this.transition.phase===1?(this.watercolor.addDrop(t[0],t[1],.035,.55),this.audio.drop()):(this.digital.addWave(t[0],t[1],.008,this.time),this.field.addVortex(t[0],t[1],(Math.random()<.5?-1:1)*.08,.06),this.audio.wave(.8))}reset(){this.watercolor.clear(),this.field.clear(),this.digital.clear(),this.hybrid.reset(),this.physarum.reset(),this.reaction.reset(),this.palette.reset(),this.strokePts=[],this.gestures.reset(),this.poseHold=!1,this.transition.reset(),this.brushes.forEach(t=>t.reset()),this.analysis=null,this.resetArmed=-99,this.audio.phaseStart(1),this.overlay.setPhase(1),this.overlay.toast("lienzo nuevo",1800)}resize(){const t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight),n=gs[this.perf.tier],s=Math.min(window.devicePixelRatio||1,n.pixelRatio),r=this.composition.resize(t,e,s);this.aspect=r;const a=r>=1?n.simMax:Math.round(n.simMax*r),o=r>=1?Math.round(n.simMax/r):n.simMax,l=Math.min(2560,Math.round(t*s));this.watercolor.resize(r,a,o,l),this.composition.setPaper(this.watercolor.paper,l,Math.round(l/r)),this.field.resize(r),this.physarum.resize(r),this.reaction.resize(r),this.composition.shared.uRDTexel.value.fromArray(this.reaction.texel)}ambient(t,e){const n=this.transition;if(!this.started||n.phase!==1||this.mouse.idle<6){this.ambientT=0;return}if(this.ambientT+=t,this.ambientT<11||(this.ambientT=0,!this.analysis))return;const s=this.analysis.zones.filter(o=>o.boundary.length);if(!s.length)return;const r=s[Math.floor(Math.random()*s.length)],a=r.boundary[Math.floor(Math.random()*r.boundary.length)];this.watercolor.addDrop(a[0]-a[2]*.01,a[1]-a[3]*.01,.028,.3)}brushFor(t){let e=this.brushes.get(t);return e||(e=new _m,this.brushes.set(t,e)),e}updateStrokeTrail(t,e,n){const s=this.strokePts;if(n>=2)for(const r of e)r.brush.trailTravel=(r.brush.trailTravel||0)+r.total,!(s.length&&r.brush.trailTravel<=.025)&&(r.brush.trailTravel=0,s.push([r.pos[0],r.pos[1],this.time,r.dir[0],r.dir[1]]),s.length>16&&s.shift());for(;s.length&&this.time-s[0][2]>2.5;)s.shift();this.physarum.setStrokes(s),this.reaction.setStrokes(s)}loop(t){requestAnimationFrame(this.loop);const e=Math.min(.05,Math.max(.001,(t-this.last)/1e3));this.last=t,this.time+=e;const n=this.time;this.perf.sample(e);const s=this.composition,r=s.shared,a=this.transition,o=this.watercolor,l=gs[this.perf.tier];this.hands.update(t);const c=this.input.consumeStreams(this.streamList),h=this.input.pointer,d=h.inside?s.screenToQ(h.x,h.y,this.pointerQ):null;if(this.ndc[0]=h.x/s.width*2-1,this.ndc[1]=-(h.y/s.height)*2+1,this.poseHold&&this.hands.poseMid){const I=s.screenToQ(this.hands.poseMid[0],this.hands.poseMid[1],[0,0]);I&&a.moveHold(I)}else a.holding&&d&&a.moveHold(d);a.update(e,n);const{tech:u,hybrid:f,phase:g}=a,x=this.gestureList;x.length=0;let p=null,m=0;if(this.started){const I=g===1?1:g===2?Math.max(0,1-u*2.5):f;for(const O of c){const V=this.brushFor(O.id);O.brk&&V.reset();const K=[];for(const j of O.pts){const H=s.screenToQ(j[0],j[1],[0,0]);H&&K.push(H)}const k=V.update(e,K,{amount:I,hybrid:g===3?f:0,fine:O.fine},o);k&&(k.brush=V,x.push(k),(!p||k.total>p.total)&&(p=k)),m=Math.max(m,V.speed)}}const E=this.mouse;if(p){const I=Math.min(1,e*8);E.vel[0]+=(p.dir[0]*p.speed-E.vel[0])*I,E.vel[1]+=(p.dir[1]*p.speed-E.vel[1])*I,E.idle=0}else{const I=Math.exp(-e*4);E.vel[0]*=I,E.vel[1]*=I,E.idle+=e}E.speed=m;const y=cn(.05,1.2,E.speed);E.agitation+=(y-E.agitation)*Math.min(1,e*(y>E.agitation?4:.6));for(const I of x){const[O,V]=I.pos;g===3&&(I.speed>1.1&&n-E.lastWave>.4&&(this.digital.addWave(O,V,.004+.003*Math.min(I.speed-1.1,2),n),this.audio.wave(.35+.25*Math.min(I.speed-1.1,1.5)),E.lastWave=n),Math.abs(I.turn)>.6&&I.speed>.2&&this.field.addVortex(O,V,Math.sign(I.turn)*.05*Math.min(I.speed,2),.07));const K=this.analysis?this.analysis.densAt(O,V):.3;this.audio.stroke({speed:I.speed,x:O/this.aspect,y:V,density:K,accent:I.accent})}const b=Math.pow(a.charge,1.4);r.uTime.value=n,r.uTech.value=u,r.uHybrid.value=f,r.uAgitation.value=E.agitation,r.uCharge.value.set(a.holdPos[0],a.holdPos[1],b,a.trans?a.trans.to-1:a.phase),r.uRupT.value=a.ruptureT;const L=this.field.u;L.uTime.value=n,L.uTech.value=u,L.uHybrid.value=f,L.uMouse.value.set(d?d[0]:-9,d?d[1]:-9,E.vel[0],E.vel[1]),L.uMouseGain.value=g===2?.15:g===3?.5:0,L.uCharge.value.copy(r.uCharge.value),this.started&&n-(this.analysisRequested??-99)>(g===3?2.5:2)&&this.requestAnalysis(),this.hybrid.update(e,n,d,x),this.field.step(e,o.wet,o.dry),this.digital.active&&this.digital.update(e,n,{mouse:d,vel:E.vel,speed:E.speed,hybrid:f}),this.ambient(e,n),this.updateStrokeTrail(e,x,g);const w=g>=2,T=g!==3||!d||E.idle>.4?0:E.speed>.9?-1:E.speed>.02?1:0;this.agentMouse.set(d?d[0]:-9,d?d[1]:-9,E.speed,T),this.gestures.agentOverride(this.agentMouse);const U=w?Math.max(0,n-this.rupture.start-2.6)*.3:0,W=this.agentCtx;if(Object.assign(W,{time:n,active:w,growR:U,origin:this.rupture.origin,hybrid:f,mouse:this.agentMouse,wet:o.wet,dry:o.dry,field:this.field.texture,spawnRate:.04,strokeSteal:a.ruptureT>2.6&&p?g===2?.0016:8e-4:0,seedRate:g===3?.001:.003}),this.physarum.update(e,W),g===2&&W.strokeSteal>0&&this.audio.birth(),this.reaction.update(e,W,l.rdIterations),r.tRD.value=this.reaction.alive>0?this.reaction.texture:null,r.uRDVis.value=cn(.2,1,u)*(1-.35*f),r.uNetGlow.value=cn(.1,.8,u),r.uRelief.value=u*.034*(1-.65*f),r.tTrail.value=this.physarum.trails?this.physarum.trail:null,this.palette.update(e,this.aspect),g===3&&f>.95&&(this.coverageT+=e,this.coverageT>2.5&&!this.palette.transitioning&&n-this.lastShift>14&&(this.coverageT=0,this.analysis&&this.analysisTime>this.lastShift+3&&this.analysis.coverage()>.42))){const I=this.strokePts.length?this.strokePts[this.strokePts.length-1]:[this.aspect/2,.5];this.palette.shift(I),this.hybrid.nextEchoMode(),this.lastShift=n,this.audio.paletteShift()}r.tWet.value=o.wet,r.tDry.value=o.dry,r.tField.value=this.field.texture,o.step(e,this.field.texture,null,{advect:Math.max(f*.22,this.gestures.swirl*.9),aniso:0,depositAmt:0,blot:this.gestures.blot.w>0?this.gestures.blot:null,dryAdvect:u*.4*(1-.7*f),trail:this.physarum.trails?this.physarum.trail:null,netDeposit:f,netA:this.palette.current.ink,rd:null,rdDeposit:0,dissolve:this.palette.transitioning?this.palette.dissolve:null},l.substeps),r.tWet.value=o.wet,r.tDry.value=o.dry;const v=a.ruptureT,S=v>=.6&&v<2.2?1-cn(.6,2.2,v):0;s.updateCamera(e,n,Math.max(u,f),h.inside?this.ndc:null,S*1.3+a.charge*a.charge*.6),s.render(),this.gestures.update(e),this.frame%30===0&&this.overlay.updateStats(Math.round(1/this.perf.avg),this.perf.tier,gs.length),this.overlay.moveCursor(h.x,h.y,a.charge,h.inside&&this.started&&!this.hands.enabled),this.overlay.drawHands(this.hands,a.charge,this.poseHold),this.audio.update(e,{tech:u,hybrid:f,speed:E.speed,charge:a.charge,agitation:E.agitation}),this.frame++}}const Po={1:["mueve el cursor para pintar","despacio concentra · rápido dispersa · clic breve: agua","mantén pulsado para abrir la ruptura"],2:["tu gesto ya no pinta: engendra líneas que la red absorbe","clic breve: perturbación","mantén pulsado en una zona libre para el encuentro"],3:["pinta: vetas, red y un eco en canon responden a tu trazo","mientras se abre, guía la expansión con el cursor","cuando el lienzo se llene, cambiará de color"],hands:["C: manos · índice = pincel · pinza = trazo fino","abrir la palma de golpe · girar la muñeca · puño","separa las manos para la ruptura · júntalas para el encuentro"]};class Ym{constructor(){this.intro=document.getElementById("intro"),this.hint=document.getElementById("hint"),this.toastEl=document.getElementById("toast"),this.soundBtn=document.getElementById("sound"),this.handsBtn=document.getElementById("handsBtn"),this.statsEl=document.getElementById("stats"),this.video=document.getElementById("cam"),this.handsEl=document.getElementById("hands"),this.ring=document.getElementById("ring"),this.tips=Array.from({length:10},()=>{const t=document.createElement("div");return t.className="tip",this.handsEl.appendChild(t),t}),this.cursor=document.getElementById("cursor"),this.hintsOn=!0,this.hintTimer=0,this.toastTimer=0}hideIntro(){this.intro.classList.add("gone")}setPhase(t){this.hint.innerHTML=Po[t].map(e=>`<span>${e}</span>`).join(""),this.showHints(10)}showHints(t){this.hintsOn&&(this.hint.classList.add("on"),clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>this.hint.classList.remove("on"),t*1e3))}toggleHints(){this.hintsOn=!this.hintsOn,clearTimeout(this.hintTimer),this.hint.classList.toggle("on",this.hintsOn)}toast(t,e=3e3,n=""){this.toastEl.textContent=t,this.toastEl.className="on "+n,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.toastEl.className=n,e)}setHands(t){this.handsBtn.textContent=t==="on"?"manos · sí":t==="loading"?"manos · …":"manos · no",this.video.classList.toggle("on",t==="on"),t==="on"&&(this.hint.innerHTML=Po.hands.map(e=>`<span>${e}</span>`).join(""),this.showHints(12))}drawHands(t,e,n){const s=t.enabled?t.hands:[];let r=0;for(const a of s)a.tips.forEach((o,l)=>{const c=this.tips[r++];c&&(c.style.transform=`translate(${o[0]}px, ${o[1]}px)`,c.style.opacity="1",c.classList.toggle("pen",l===1&&(a.pointing||a.pinch)))});for(;r<this.tips.length;r++)this.tips[r].style.opacity="0";if(s.length===2&&t.poseMid){const a=Math.max(60,t.poseSep*window.innerWidth*.9),o=this.ring.style;o.width=o.height=`${a}px`,o.transform=`translate(${t.poseMid[0]-a/2}px, ${t.poseMid[1]-a/2}px)`,o.opacity=t.pose?"0.9":"0.18",this.ring.style.setProperty("--p",n?e.toFixed(3):"0"),this.ring.style.setProperty("--c",t.pose==="together"?"255, 215, 160":"200, 220, 255")}else this.ring.style.opacity="0"}toggleStats(){this.statsOn=!this.statsOn,this.statsEl.classList.toggle("on",this.statsOn)}updateStats(t,e,n){this.statsOn&&(this.statsEl.textContent=`${t} fps · calidad ${n-e}/${n}`)}setSound(t){this.soundBtn.textContent=t?"sonido · sí":"sonido · no"}moveCursor(t,e,n,s){const r=this.cursor;r.style.transform=`translate(${t}px, ${e}px) scale(${1-n*.55})`,r.style.opacity=s?String(.55+n*.45):"0",r.style.setProperty("--charge",n.toFixed(3))}}const Km=document.getElementById("stage"),$m=new Ym;try{const i=new Xm(Km,$m),t=document.getElementById("intro"),e=()=>i.begin();t.addEventListener("click",e),t.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&e()}),document.getElementById("sound").addEventListener("click",()=>i.toggleMute()),document.getElementById("handsBtn").addEventListener("click",()=>i.toggleHands())}catch(i){console.error(i);const t=document.getElementById("fatal");t.textContent="Esta obra necesita WebGL2 con texturas de coma flotante. Prueba con un navegador de escritorio actualizado.",t.classList.add("on")}
