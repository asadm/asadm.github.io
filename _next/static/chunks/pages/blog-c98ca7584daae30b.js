(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{677:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r(8143)}])},8418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,o=(a=r(7294))&&a.__esModule?a:{default:a},c=r(6273),i=r(387),l=r(7190);var u={};function s(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,a=i.useRouter(),f=o.default.useMemo((function(){var t=n(c.resolveHref(a,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?c.resolveHref(a,e.as):o||r}}),[a,e.href,e.as]),d=f.href,v=f.as,p=e.children,h=e.replace,m=e.shallow,y=e.scroll,b=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var g=(t=o.default.Children.only(p))&&"object"===typeof t&&t.ref,x=n(l.useIntersection({rootMargin:"200px"}),2),w=x[0],_=x[1],N=o.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);o.default.useEffect((function(){var e=_&&r&&c.isLocalURL(d),t="undefined"!==typeof b?b:a&&a.locale,n=u[d+"%"+v+(t?"%"+t:"")];e&&!n&&s(a,d,v,{locale:t})}),[v,d,_,b,r,a]);var E={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:l,scroll:i}))}(e,a,d,v,h,m,y,b)},onMouseEnter:function(e){c.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(a,d,v,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var j="undefined"!==typeof b?b:a&&a.locale,M=a&&a.isLocaleDomain&&c.getDomainLocale(v,j,a&&a.locales,a&&a.domainLocales);E.href=M||c.addBasePath(c.addLocale(v,j,a&&a.defaultLocale))}return o.default.cloneElement(t,E)};t.default=f},7190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,l=a.useRef(),u=n(a.useState(!1),2),s=u[0],f=u[1],d=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||s||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,c=n.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,s]);return a.useEffect((function(){if(!c&&!s){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[s]),[d,s]};var a=r(7294),o=r(9311),c="undefined"!==typeof IntersectionObserver;var i=new Map},8143:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return o}});var n=r(5893),a=r(1664),o=!0;t.default=function(e){var t=e.posts;return(0,n.jsx)("div",{className:"mt-5",children:t.map((function(e,t){return(0,n.jsx)(a.default,{href:"/blog/"+e.slug,passHref:!0,children:(0,n.jsx)("div",{className:"card mb-3 pointer",style:{maxWidth:"540px"},children:(0,n.jsxs)("div",{className:"row g-0",children:[(0,n.jsx)("div",{className:"col-md-8",children:(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("h5",{className:"card-title",children:e.frontMatter.title}),(0,n.jsx)("p",{className:"card-text",children:e.frontMatter.description}),(0,n.jsx)("p",{className:"card-text",children:(0,n.jsx)("small",{className:"text-muted",children:e.frontMatter.date})})]})}),(0,n.jsx)("div",{className:"col-md-4 m-auto",children:(0,n.jsx)("img",{src:e.frontMatter.thumbnailUrl,className:"img-fluid mt-1 rounded-start",alt:"thumbnail",width:500,height:400,objectFit:"cover"})})]})})},t)}))})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=677,e(e.s=t);var t}));var t=e.O();_N_E=t}]);