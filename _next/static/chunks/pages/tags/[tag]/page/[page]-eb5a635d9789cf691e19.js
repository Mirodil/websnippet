(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[568],{321:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var n=t(6156),a=t(5893);var s=t(2307),i=t(8994);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){var r,t=e.name,n=e.i,s=e.count;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("a",{href:"tags/".concat((r=t,r.toLowerCase().replace(/[^a-z0-9\-]/g,"-"))),title:t,rel:"tag",children:t}),function(e){return e+1<s?", ":""}(n)]})}function o(e){var r=e.tags;if(!r||!r.length)return null;var t=r.length;return(0,a.jsxs)("span",{children:[(0,a.jsx)("i",{className:"fa fa-tags","aria-hidden":"true"})," ",r.map((function(e,r){return(0,a.jsx)(l,{name:e,i:r,count:t},e)}))]})}function u(e){var r=e.title,t=e.description,n=e.date,c=e.tags,l=e.permalink,u=e.thumbnail;return(0,a.jsxs)("article",{className:"post",children:[(0,a.jsx)("div",{className:"page-header",children:(0,a.jsx)("h2",{children:(0,a.jsx)("a",{href:l,title:r,rel:"bookmark",children:r})})}),(0,a.jsxs)("div",{className:"meta text-muted",children:[(0,a.jsx)(i.Z,{value:n}),(0,a.jsx)(o,{tags:c}),(0,a.jsxs)("span",{className:"pull-right",children:[(0,a.jsx)("i",{className:"fa fa-comments"})," ",(0,a.jsx)("a",{href:l,title:r,children:"0 comment"})]})]}),(0,a.jsxs)("div",{className:"content",children:[(0,a.jsxs)("div",{className:"entry-colors",children:[(0,a.jsx)("div",{className:"red"}),(0,a.jsx)("div",{className:"blue"}),(0,a.jsx)("div",{className:"gray"})]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-xs-12 col-md-4 text-center",children:(0,a.jsx)("img",{src:u||"http://placehold.it/200x150",alt:r})}),(0,a.jsx)("div",{className:"col-xs-12 col-md-8",children:t}),(0,a.jsx)("div",{className:"col-md-12 clearfix",children:(0,a.jsx)("a",{href:l,className:"more pull-right",children:"Continue reading \u2192"})})]}),(0,a.jsx)(s.Z,{title:r,permalink:l})]})]})}function d(e){var r=e.posts;return(0,a.jsx)(a.Fragment,{children:r.map((function(e){return(0,a.jsx)(u,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e),e.slug)}))})}},8994:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(5893);function a(e){var r=e.value,t=new Date(r),a=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(t);return(0,n.jsxs)("time",{dateTime:t.toISOString(),children:[(0,n.jsx)("i",{className:"fa fa-clock-o"})," ",a]})}},3968:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var n=t(5893);function a(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/";return 1===e?r:"".concat(r).concat(r.endsWith("/")?"":"/","page/").concat(e)}function s(e){var r=e.page,t=e.total,s=e.base,i=void 0===s?"/":s,c=(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:a(r-1,i),"aria-label":"Previous",children:(0,n.jsx)("span",{"aria-hidden":"true",children:"\xab"})})},"previous");1===r&&(c=(0,n.jsx)("li",{className:"disabled",children:(0,n.jsx)("span",{"aria-label":"Previous",children:(0,n.jsx)("span",{"aria-hidden":"true",children:"\xab"})})},"previous"));var l=(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:a(r+1,i),"aria-label":"Next",children:(0,n.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})});r===t&&(l=(0,n.jsx)("li",{className:"disabled",children:(0,n.jsx)("span",{"aria-label":"Next",children:(0,n.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})}));var o=Array(t).fill(null).map((function(e,t){return(t+=1)===r?(0,n.jsx)("li",{className:"active",children:(0,n.jsxs)("a",{href:a(t,i),children:[t," ",(0,n.jsx)("span",{className:"sr-only",children:"(current)"})]})},t):(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:a(t,i),children:t})},t)}));return(0,n.jsx)("nav",{"aria-label":"Page navigation",className:"text-center",children:(0,n.jsxs)("ul",{className:"pagination",children:[c,o,l]})})}},526:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return h},default:function(){return j}});var n=t(6156),a=t(5893),s=t(9008),i=t(150),c=t(8477),l=t(321),o=t(3968);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var h=!0;function j(e){var r=e.categories,t=e.tags,n=e.posts,u=e.paginator,h=e.tag;return(0,a.jsxs)(c.Z,{categories:r,tags:t,children:[(0,a.jsx)(s.default,{children:(0,a.jsxs)("title",{children:[i.TN," - Web Resources | ",i.f.u]})}),(0,a.jsx)(l.Z,{posts:n}),(0,a.jsx)("hr",{}),(0,a.jsx)(o.Z,d(d({},u),{},{base:"/tags/".concat(h)}))]})}},8443:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[tag]/page/[page]",function(){return t(526)}])}},function(e){e.O(0,[689,774,888,179],(function(){return r=8443,e(e.s=r);var r}));var r=e.O();_N_E=r}]);