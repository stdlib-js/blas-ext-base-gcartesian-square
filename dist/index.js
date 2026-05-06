"use strict";var b=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var R=b(function(Y,p){"use strict";var P=require("@stdlib/ndarray-base-assert-is-row-major");function k(r,a,u,q,v,e,c,m){var s,l,g,f,o,n,i,y,x,j;if(s=a.data,l=v.data,g=a.accessors[0],f=v.accessors[1],o=q,i=m,P([e,c])){for(x=0;x<r;x++){for(y=g(s,o),n=q,j=0;j<r;j++)f(l,i,y),f(l,i+c,g(s,n)),n+=u,i+=e;o+=u}return l}for(x=0;x<r;x++){for(y=g(s,o),j=0;j<r;j++)f(l,i,y),i+=e;o+=u}for(i=m+c,x=0;x<r;x++)for(n=q,j=0;j<r;j++)f(l,i,g(s,n)),n+=u,i+=e;return l}p.exports=k});var w=b(function(Z,t){"use strict";var S=require("@stdlib/array-base-arraylike2object"),C=require("@stdlib/ndarray-base-assert-is-row-major"),F=require("@stdlib/blas-ext-base-gfill").ndarray,T=require("@stdlib/blas-base-gcopy").ndarray,z=R();function A(r,a,u,q,v,e,c,m){var s,l,g,f,o,n,i;if(r<=0)return v;if(s=S(a),l=S(v),s.accessorProtocol||l.accessorProtocol)return z(r,s,u,q,l,e,c,m);if(g=q,o=m,C([e,c])){for(n=0;n<r;n++){for(f=q,i=0;i<r;i++)v[o]=a[g],v[o+c]=a[f],f+=u,o+=e;g+=u}return v}for(n=0;n<r;n++)F(r,a[g],v,e,o),g+=u,o+=r*e;for(o=m+c,n=0;n<r;n++)T(r,a,u,q,v,e,o),o+=r*e;return v}t.exports=A});var M=b(function(_,E){"use strict";var B=require("@stdlib/blas-base-assert-is-layout"),G=require("@stdlib/ndarray-base-assert-is-column-major-string"),H=require("@stdlib/strided-base-stride2offset"),I=require("@stdlib/math-base-special-fast-max"),h=require("@stdlib/string-format"),J=w();function K(r,a,u,q,v,e){var c,m;if(!B(r))throw new TypeError(h("invalid argument. First argument must be a valid order. Value: `%s`.",r));if(G(r)){if(e<I(1,a*a))throw new RangeError(h("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",a*a,e));c=1,m=e}else{if(e<2)throw new RangeError(h("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",2,e));c=e,m=1}return J(a,u,q,H(a,q),v,c,m,0)}E.exports=K});var Q=require("@stdlib/utils-define-nonenumerable-read-only-property"),V=M(),U=w();Q(V,"ndarray",U);module.exports=V;
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
