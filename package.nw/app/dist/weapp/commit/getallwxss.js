'use strict';var _exports;function init(){function a(d,e,f){function g(C,D,E,F){if(D+E.length<=C.length&&C.substr(D,E.length)==E){var G=C.indexOf(F,D);if(0>G&&'*/'==F)throw y+': lack of */';else if(0>G)return C.length-D;return G+=F.length,G-D-1}return 0}function h(C,D,E){if(C[D]==E){for(var F=D+1;F<C.length;F++)if('\\'==C[F])F++;else if(C[F]==E)return F-D;throw y+': lack of '+E}else return 0}function j(C,D){o[++u]=C.id,q[u]=p[D.id],p[D.id]=u,t[C.id]++}function k(C){for(var D=0,E=0;0<=E;)E=C.indexOf(c.sep,D+1),0<=E&&(D=E);return 0==D?c.sep:C.substring(0,D)}function l(C,D){var E={dis:0,file:''},F;if('@import'==C.substr(D,7)){for(var G=D+8;G<C.length;){if(F=g(C,G,'//','\n'))G+=F;else if(F=g(C,G,'/*','*/'))G+=F;else if('\''==C[G]||'"'==C[G])break;G++}if('\''==C[G]||'"'==C[G]){for(F=h(C,G,C[G]);0<='\t\n\r '.indexOf(C[G+1]);)G++;E.file=C.substr(G+1,F-1),E.dis=G+F-D}}return E}function m(C,D){var E;if('undefined'!=typeof r[C])return s[r[C]];r[C]=v++,E={id:r[C],path:C},s.push(E),t[E.id]=0;var F;try{F=b.readFileSync(C,'utf8'),y=C;var G,H=k(C);A[E.id]=!0,z.push(E);for(var I=0;I<F.length;I++)if(G=g(F,I,'//','\n'))I+=G;else if(G=g(F,I,'/*','*/'))I+=G;else if(G=h(F,I,'\''))I+=G;else if(G=h(F,I,'"'))I+=G;else{var J=l(F,I);if(J.dis){I+=J.dis;var K;if(K='\\'==J.file[0]||'/'==J.file[0]?m(c.join(D,J.file),D):m(c.join(H,J.file),D),j(E,K),A[K.id])for(var L=c.relative(D,K.path);!0;){var M=z.pop();if(L=c.relative(D,M.path)+' -> '+L,M.id==K.id)throw'Circular dependencies:\n'+L}}}}catch(N){throw N}return z.pop(),A[E.id]=!1,E}function n(C){var D='.'+s[C].path.substring(e.length);x.push(D),t[C]=-1,w--;for(var E=p[C];E;E=q[E]){var F=o[E];t[F]--,0==t[F]&&n(F)}}var o=[],p=[],q=[],r=[],s=[],t=[],u=0,v=0,w,x=[],y='',z=[],A=[];try{m(d,e),w=v;for(var B=0;B<v;B++)0==t[B]&&n(B);0<w,f(null,x)}catch(C){f(C,null)}}const b=require('fs'),c=require('path');_exports=(d,e,f)=>{a(d,e,(g,h)=>{f(g,h)})}}init(),module.exports=_exports;