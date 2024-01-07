(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2949:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(9008),s=r(5893);function o(e){var t=e.title,r=e.description,o=e.url,a=e.image;return(0,s.jsxs)(n.default,{children:[(0,s.jsxs)("title",{children:[t," \u2013 Asad Memon"]}),(0,s.jsx)("meta",{name:"description",content:r||"Asad Memon's homepage."}),(0,s.jsx)("meta",{property:"og:title",content:"".concat(t," \u2013 Asad Memon")}),(0,s.jsx)("meta",{property:"og:type",content:"article"}),(0,s.jsx)("meta",{property:"og:url",content:"https://asadmemon.com".concat(o)}),(0,s.jsx)("link",{rel:"apple-touch-icon",href:"/assets/favicon.png"}),(0,s.jsx)("link",{rel:"shortcut icon",href:"/assets/favicon.png"}),(0,s.jsx)("meta",{property:"og:image",content:"https://asadmemon.com/".concat(a||"assets/img/main1.jpg")}),(0,s.jsx)("meta",{property:"og:description",content:r||"Asad Memon's homepage."}),(0,s.jsx)("a",{href:"//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,500",rel:"stylesheet",type:"text/css"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=0.8"}),(0,s.jsx)("script",{dangerouslySetInnerHTML:{__html:'\n// Head scripts for the site\n\n// google analytics\n(function (i, s, o, g, r, a, m) {\n  i[\'GoogleAnalyticsObject\'] = r; i[r] = i[r] || function () {\n    (i[r].q = i[r].q || []).push(arguments)\n  }, i[r].l = 1 * new Date(); a = s.createElement(o),\n    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)\n  })(window, document, \'script\', \'//www.google-analytics.com/analytics.js\', \'ga\');\n\n  ga(\'create\', \'UA-58030862-1\', \'auto\');\n  ga(\'send\', \'pageview\');\n\n// heap analytics\nwindow.heap = window.heap || [], heap.load = function (e, t) { window.heap.appid = e, window.heap.config = t = t || {}; var r = t.forceSSL || "https:" === document.location.protocol, a = document.createElement("script"); a.type = "text/javascript", a.async = !0, a.src = (r ? "https:" : "http:") + "//cdn.heapanalytics.com/js/heap-" + e + ".js"; var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(a, n); for (var o = function (e) { return function () { heap.push([e].concat(Array.prototype.slice.call(arguments, 0))) } }, p = ["addEventProperties", "addUserProperties", "clearEventProperties", "identify", "removeEventProperty", "setEventProperties", "track", "unsetEventProperty"], c = 0; c < p.length; c++)heap[p[c]] = o(p[c]) };\nheap.load("1855799973");\n'}})]})}},8e3:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var s=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=s},5646:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=a,t.useAmp=function(){return a(s.default.useContext(o.AmpStateContext))};var n,s=(n=r(7294))&&n.__esModule?n:{default:n},o=r(8e3);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,s=void 0!==n&&n,o=e.hasQuery,a=void 0!==o&&o;return r||s&&a}},2717:function(e,t,r){"use strict";var n=r(1682);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),i=(o=r(1585))&&o.__esModule?o:{default:o},c=r(8e3),l=r(5850),p=r(5646);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var u=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(h,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(s){var o=!0,a=!1;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){a=!0;var i=s.key.slice(s.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(s.type){case"title":case"base":t.has(s.type)?o=!1:t.add(s.type);break;case"meta":for(var c=0,l=u.length;c<l;c++){var p=u[c];if(s.props.hasOwnProperty(p))if("charSet"===p)r.has(p)?o=!1:r.add(p);else{var d=s.props[p],h=n[p]||new Set;"name"===p&&a||!h.has(d)?(h.add(d),n[p]=h):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,a.default.cloneElement(e,i)}return a.default.cloneElement(e,{key:o})}))}var f=function(e){var t=e.children,r=a.useContext(c.AmpStateContext),n=a.useContext(l.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:m,headManager:n,inAmpMode:p.isInAmpMode(r)},t)};t.default=f},1585:function(e,t,r){"use strict";var n=r(3115),s=r(2553),o=r(2012),a=(r(450),r(9807)),i=r(7690),c=r(9828);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var s=c(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return i(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var d=function(e){a(r,e);var t=l(r);function r(e){var o;return s(this,r),(o=t.call(this,e)).emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(p.Component);t.default=d},2748:function(e,t,r){"use strict";r.r(t),r.d(t,{config:function(){return o},default:function(){return a}});var n=r(2949),s=r(5893),o={unstable_runtimeJS:!1};function a(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.Z,{title:"Home"}),(0,s.jsxs)("div",{id:"hero",children:[(0,s.jsx)("h1",{children:"Hi, I'm Asad!"}),(0,s.jsxs)("h2",{children:["I make stuff on computer.",(0,s.jsx)("br",{}),"You may know me as:"]}),(0,s.jsxs)("ul",{id:"homepage-projects",children:[(0,s.jsxs)("li",{children:["Making ",(0,s.jsxs)("a",{href:"https://joinplayroom.com/",target:"_blank",className:"project-link",children:[(0,s.jsx)("img",{src:"/assets/img/icons/playroom.png"}),"Playroom"]}),"."]}),(0,s.jsxs)("li",{children:["Software Engineer at ",(0,s.jsxs)("a",{href:"https://google.com/",target:"_blank",className:"project-link",children:[(0,s.jsx)("img",{src:"/assets/img/icons/google.png"}),"Google"]}),"."]}),(0,s.jsxs)("li",{children:["Previously, Co-founder and CTO of",(0,s.jsxs)("a",{href:"https://codeinterview.io",target:"_blank",className:"project-link",children:[(0,s.jsx)("img",{src:"/assets/img/icons/ci.png"}),"CodeInterview.io"]})," &",(0,s.jsxs)("a",{href:"https://remoteinterview.io",target:"_blank",className:"project-link",children:[(0,s.jsx)("img",{src:"/assets/img/icons/ri.png"}),"RemoteInterview.io"]}),".",(0,s.jsx)("br",{}),"Two products with one goal: accurately measure candidates' coding skills.",(0,s.jsx)("br",{}),"Backed by Draper Associates & Alchemist Accelerator."]}),(0,s.jsxs)("li",{children:["Memon behind the weekly newsletter ",(0,s.jsx)("a",{href:"http://asad.substack.com/",target:"_blank",className:"project-link",children:"Memon Mondays"}),"."]}),(0,s.jsxs)("li",{children:["Creator of",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsxs)("a",{href:"https://www.codecaptcha.io",target:"_blank",className:"project-link",children:[(0,s.jsx)("img",{src:"/assets/img/icons/codecaptcha.png"}),"CodeCaptcha.io"]})," \u2013 Hide your web link behind a coding challenge.",(0,s.jsxs)("a",{title:"Hacker News Discussion",target:"_blank",href:"https://news.ycombinator.com/item?id=29993948",className:"badge hn",children:[(0,s.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("title",{children:"Y Combinator icon"}),(0,s.jsx)("path",{d:"M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z"})]})," ",(0,s.jsx)("span",{children:"162"})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsxs)("a",{href:"/projects/screenshothero/",className:"project-link",children:[(0,s.jsx)("img",{src:"/assets/img/icons/screenshothero.png"}),"Screenshot Hero"]})," \u2013 iOS app that scans through screenshots and makes them searchable by text in them.",(0,s.jsxs)("a",{title:"Hacker News Discussion",target:"_blank",href:"https://news.ycombinator.com/item?id=22065333",className:"badge hn",children:[(0,s.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("title",{children:"Y Combinator icon"}),(0,s.jsx)("path",{d:"M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z"})]})," ",(0,s.jsx)("span",{children:"429"})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsxs)("a",{href:"https://zeroserver.io",target:"_blank",className:"project-link",children:[(0,s.jsx)("img",{src:"/assets/img/icons/zero.png"}),"Zero"]})," \u2013 Web framework that abstracts complex project configuration for routing, bundling, etc. to make it web-dev easy.",(0,s.jsxs)("a",{title:"Hacker News Discussion",target:"_blank",href:"https://news.ycombinator.com/item?id=19254828",className:"badge hn",children:[(0,s.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("title",{children:"Y Combinator icon"}),(0,s.jsx)("path",{d:"M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z"})]})," ",(0,s.jsx)("span",{children:"513"})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsxs)("a",{href:"https://apps.apple.com/us/app/coco-music/id1401506547/",target:"_blank",className:"project-link",children:[(0,s.jsx)("img",{src:"/assets/img/icons/coco.png"}),"Coco Music"]})," \u2013 A fast music streaming client for iOS and Android, specially optimized and co-located for South Asian users."]}),(0,s.jsxs)("li",{children:[(0,s.jsxs)("a",{href:"https://apps.apple.com/us/app/double-recorder/id1480805574",target:"_blank",className:"project-link",children:[(0,s.jsx)("img",{src:"/assets/img/icons/doublerecorder.png"}),"Double Recorder"]})," \u2013 iOS video recorder to record from both cameras (front and back) simultaneously."]}),(0,s.jsxs)("li",{children:[(0,s.jsxs)("a",{href:"https://www.allmydesktops.com/",target:"_blank",className:"project-link",children:[(0,s.jsx)("img",{src:"/assets/img/icons/allmydesktops.png"}),"AllMyDesktops.com"]})," \u2013 Fastest browser-based client for RDP and VNC. Zero installations.",(0,s.jsxs)("a",{title:"Hacker News Discussion",target:"_blank",href:"https://news.ycombinator.com/item?id=16358774",className:"badge hn",children:[(0,s.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("title",{children:"Y Combinator icon"}),(0,s.jsx)("path",{d:"M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z"})]})," ",(0,s.jsx)("span",{children:"65"})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsxs)("a",{href:"https://github.com/asadm/urduscript/",target:"_blank",className:"project-link",children:[(0,s.jsx)("img",{src:"/assets/img/icons/urduscript.png"}),"UrduScript"]})," \u2013 JavaScript dialect in Urdish, with a goal to make programming more accessible for beginners from South Asia."]}),(0,s.jsxs)("li",{children:[(0,s.jsxs)("a",{href:"https://recordscreen.io/",target:"_blank",className:"project-link",children:[(0,s.jsx)("img",{src:"/assets/img/icons/recordscreen.png"}),"RecordScreen.io"]})," \u2013 Screen recorder right in the browser. No installation required.",(0,s.jsxs)("a",{title:"Featured on Product Hunt",href:"https://www.producthunt.com/posts/recordscreen-io",className:"badge ph",children:[(0,s.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("title",{children:"Product Hunt icon"}),(0,s.jsx)("path",{d:"M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.805-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201z"})]})," ",(0,s.jsx)("span",{children:"897"})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsxs)("a",{href:"https://www.startuplist.pk/",target:"_blank",className:"project-link",children:[(0,s.jsx)("img",{src:"/assets/img/icons/startuplist.png"}),"Startuplist.pk"]})," \u2013 Pakistani startup database."]}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:"project-link",href:"/projects",children:"See all projects"})})]})]})]})]})]})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2748)}])},9008:function(e,t,r){e.exports=r(2717)},8164:function(e,t,r){var n=r(4360);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3115:function(e,t,r){var n=r(8164),s=r(7381),o=r(3585),a=r(5725);e.exports=function(e){return n(e)||s(e)||o(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);