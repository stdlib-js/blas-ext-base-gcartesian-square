"use strict";var b=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var R=b(function(Y,p){"use strict";var k=require("@stdlib/ndarray-base-assert-is-row-major");function C(r,a,c,q,n,e,u,g){var m,s,l,f,o,v,i,y,x,j;if(m=a.data,s=n.data,l=a.accessors[0],f=n.accessors[1],o=q,i=g,k([e,u])){for(x=0;x<r;x++){for(y=l(m,o),v=q,j=0;j<r;j++)f(s,i,y),f(s,i+u,l(m,v)),v+=c,i+=e;o+=c}return n}for(x=0;x<r;x++){for(y=l(m,o),j=0;j<r;j++)f(s,i,y),i+=e;o+=c}for(i=g+u,x=0;x<r;x++)for(v=q,j=0;j<r;j++)f(s,i,l(m,v)),v+=c,i+=e;return n}p.exports=C});var w=b(function(Z,E){"use strict";var S=require("@stdlib/array-base-arraylike2object"),F=require("@stdlib/ndarray-base-assert-is-row-major"),T=require("@stdlib/blas-ext-base-gfill").ndarray,t=require("@stdlib/blas-base-gcopy").ndarray,z=R();function A(r,a,c,q,n,e,u,g){var m,s,l,f,o,v,i;if(r<=0)return n;if(m=S(a),s=S(n),m.accessorProtocol||s.accessorProtocol)return z(r,m,c,q,s,e,u,g),n;if(l=q,o=g,F([e,u])){for(v=0;v<r;v++){for(f=q,i=0;i<r;i++)n[o]=a[l],n[o+u]=a[f],f+=c,o+=e;l+=c}return n}for(v=0;v<r;v++)T(r,a[l],n,e,o),l+=c,o+=r*e;for(o=g+u,v=0;v<r;v++)t(r,a,c,q,n,e,o),o+=r*e;return n}E.exports=A});var V=b(function(_,M){"use strict";var B=require("@stdlib/blas-base-assert-is-layout"),G=require("@stdlib/ndarray-base-assert-is-column-major-string"),H=require("@stdlib/strided-base-stride2offset"),I=require("@stdlib/math-base-special-fast-max"),h=require("@stdlib/string-format"),J=w();function K(r,a,c,q,n,e){var u,g;if(!B(r))throw new TypeError(h("invalid argument. First argument must be a valid order. Value: `%s`.",r));if(G(r)){if(e<I(1,a*a))throw new RangeError(h("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",a*a,e));u=1,g=e}else{if(e<2)throw new RangeError(h("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",2,e));u=e,g=1}return J(a,c,q,H(a,q),n,u,g,0)}M.exports=K});var Q=require("@stdlib/utils-define-nonenumerable-read-only-property"),P=V(),U=w();Q(P,"ndarray",U);module.exports=P;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
