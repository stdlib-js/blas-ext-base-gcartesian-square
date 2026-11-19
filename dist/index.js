"use strict";var b=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(i){throw a=0,i}}};var R=b(function(Y,p){"use strict";var k=require("@stdlib/ndarray-base-assert-is-row-major");function C(r,a,i,q,n,e,l,m){var c,s,g,f,o,v,u,y,x,j;if(c=a.data,s=n.data,g=a.accessors[0],f=n.accessors[1],o=q,u=m,k([e,l])){for(x=0;x<r;x++){for(y=g(c,o),v=q,j=0;j<r;j++)f(s,u,y),f(s,u+l,g(c,v)),v+=i,u+=e;o+=i}return n}for(x=0;x<r;x++){for(y=g(c,o),j=0;j<r;j++)f(s,u,y),u+=e;o+=i}for(u=m+l,x=0;x<r;x++)for(v=q,j=0;j<r;j++)f(s,u,g(c,v)),v+=i,u+=e;return n}p.exports=C});var w=b(function(Z,E){"use strict";var S=require("@stdlib/array-base-arraylike2object"),F=require("@stdlib/ndarray-base-assert-is-row-major"),T=require("@stdlib/blas-ext-base-gfill").ndarray,t=require("@stdlib/blas-base-gcopy").ndarray,z=R();function A(r,a,i,q,n,e,l,m){var c,s,g,f,o,v,u;if(r<=0)return n;if(c=S(a),s=S(n),c.accessorProtocol||s.accessorProtocol)return z(r,c,i,q,s,e,l,m),n;if(g=q,o=m,F([e,l])){for(v=0;v<r;v++){for(f=q,u=0;u<r;u++)n[o]=a[g],n[o+l]=a[f],f+=i,o+=e;g+=i}return n}for(v=0;v<r;v++)T(r,a[g],n,e,o),g+=i,o+=r*e;for(o=m+l,v=0;v<r;v++)t(r,a,i,q,n,e,o),o+=r*e;return n}E.exports=A});var V=b(function(_,M){"use strict";var B=require("@stdlib/blas-base-layout-resolve-str"),G=require("@stdlib/ndarray-base-assert-is-column-major-string"),H=require("@stdlib/strided-base-stride2offset"),I=require("@stdlib/math-base-special-fast-max"),h=require("@stdlib/string-format"),J=w();function K(r,a,i,q,n,e){var l,m,c;if(c=B(r),c===null)throw new TypeError(h("invalid argument. First argument must be a valid order. Value: `%s`.",r));if(G(c)){if(e<I(1,a*a))throw new RangeError(h("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",a*a,e));l=1,m=e}else{if(e<2)throw new RangeError(h("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",2,e));l=e,m=1}return J(a,i,q,H(a,q),n,l,m,0)}M.exports=K});var Q=require("@stdlib/utils-define-nonenumerable-read-only-property"),P=V(),U=w();Q(P,"ndarray",U);module.exports=P;
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
