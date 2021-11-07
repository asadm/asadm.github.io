(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return d},mdx:function(){return f},useMDXComponents:function(){return u},withMDXComponents:function(){return c}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){return function(t){var n=u(t.components);return r.createElement(e,a({},t,{components:n}))}},u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"===typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9717:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/screenshothero",function(){return n(4124)}])},4124:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});n(7294);var r=n(3905);function o(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a={};function i(e){var t=e.components,n=o(e,["components"]);return(0,r.mdx)("wrapper",Object.assign({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("hr",null),(0,r.mdx)("img",{src:"/projects/screenshothero/icon.png",width:"100",style:{borderRadius:"20px"}}),(0,r.mdx)("h2",null,"Screenshot Hero"),(0,r.mdx)("p",null,"Screenshot Hero scans through your screenshots (and other saved photos) and makes then instantly searchable by text in them."),(0,r.mdx)("video",{style:{maxHeight:"100vh",border:"1px solid #000"},controls:!0,autoPlay:!0},(0,r.mdx)("source",{src:"/projects/screenshothero/preview.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),(0,r.mdx)("h3",null,"Highlights"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Images are all processed ",(0,r.mdx)("strong",{parentName:"li"},"on-device")," and nothing is sent to any server."),(0,r.mdx)("li",{parentName:"ul"},"Tested to work with ",(0,r.mdx)("strong",{parentName:"li"},"thousands of images"),"."),(0,r.mdx)("li",{parentName:"ul"},"Best and most ",(0,r.mdx)("strong",{parentName:"li"},"performant OCR technology"),".")),(0,r.mdx)("a",{href:"https://apps.apple.com/us/app/screenshot-hero/id1493170794?ls=1"},(0,r.mdx)("img",{style:{margin:"10px 0px"},width:"120",src:"/projects/screenshothero/badge.png"})),(0,r.mdx)("hr",null),(0,r.mdx)("h2",null,"Technical Details"),(0,r.mdx)("p",null,"I wanted to build a simple utility app that would run OCR through my photos (all 5000+ of them) and make them searchable. I had following constraints for it:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"It has to be ",(0,r.mdx)("strong",{parentName:"li"},"fast"),". The UI needs to be fluid even for thousands of images."),(0,r.mdx)("li",{parentName:"ul"},"All processing should happen ",(0,r.mdx)("strong",{parentName:"li"},"on-device"),", should not be uploading photos to a cloud service."),(0,r.mdx)("li",{parentName:"ul"},"I need to ",(0,r.mdx)("strong",{parentName:"li"},"make it quick")," (I only had a week allocated for this project).")),(0,r.mdx)("p",null,"I am primarily a web developer and am not a skilled mobile developer. So I attempted this project with three different frameworks and here are my notes:"),(0,r.mdx)("h3",null,"SwiftUI"),(0,r.mdx)("p",null,"SwiftUI is appealing as it's a React-like framework. I wanted to learn SwiftUI but I struggled with the documentation and even writing a simple grid of photos was challenging. The community is tiny so there aren't that many samples online either. I really wanted to use this but it was taking a bit too much of my time. Sadly, I had to ditch SwiftUI."),(0,r.mdx)("h3",null,"Expo.io"),(0,r.mdx)("p",null,"Expo is a React Native framework which bypasses the whole Android SDK + XCode step of making the app. It's very easy to get started and the dev experience is great. Having written a React Native app before, I really wanted this to work. The only problem occured when I wanted to write the OCR part: ",(0,r.mdx)("inlineCode",{parentName:"p"},"expo eject")," workflow is kinda broken. In my case, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"CameraRoll")," API broke due to some unlinked native module when I tried to run it via XCode after ejecting the app. I spent a few hours fixing the native modules but that didn't work. "),(0,r.mdx)("p",null,"Without ejecting, I could have gone with ",(0,r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/naptha/tesseract.js#tesseractjs"}),"Tessaract.js")," but it's not fast enough to process thousands of images quickly."),(0,r.mdx)("p",null,"There also isn't a way to do background processing with Expo. I feel expo is great for simple CRUD apps for now and will fail you if your app needs a custom functionality."),(0,r.mdx)("h3",null,"React Native"),(0,r.mdx)("p",null,"In the end, I had to fallback to what I already knew. I copied views which I had created earlier for expo.io into a new ReactNative project. I then created a custom Swift native module which had all my business logic:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Methods to fetch all photos and process newer ones."),(0,r.mdx)("li",{parentName:"ul"},"Queue to process only N photos concurrently."),(0,r.mdx)("li",{parentName:"ul"},"Storage Model, went with ",(0,r.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/Tencent/MMKV"}),"MKKV")," as it was quick to set up."),(0,r.mdx)("li",{parentName:"ul"},"OCR, used Apple's ",(0,r.mdx)("a",Object.assign({parentName:"li"},{href:"https://developer.apple.com/documentation/vision"}),"Vision API")," which is surprisingly accurate and fastest on-device."),(0,r.mdx)("li",{parentName:"ul"},"Set up ",(0,r.mdx)("a",Object.assign({parentName:"li"},{href:"https://developer.apple.com/documentation/backgroundtasks"}),"BackgroundTasks")," to schedule photo processing for later, when the app is sent to background mid-processing (remember we may have 10,000+ photos in our queue, each photo takes ~1s to process).")),(0,r.mdx)("h2",null,"Conclusion"),(0,r.mdx)("p",null,"I learned that React Native is fast enough if used only for views (and maybe lightweight logic) only. I used ",(0,r.mdx)("inlineCode",{parentName:"p"},"FlatList")," for the grid photo view (with some optimizations to lazy load photos) and it is very smooth even for thousands of photos. Real-time searching/filtering is also really smooth. React Native also has great community support."),(0,r.mdx)("p",null,"This means writing more backend code per platform, which sucks but is straight-forward. It's still better than writing front-end for each platform and dealing with all the quirks of each of them."),(0,r.mdx)("p",null,"Try Screenshot Hero ",(0,r.mdx)("a",Object.assign({parentName:"p"},{href:"https://apps.apple.com/us/app/screenshot-hero/id1493170794?ls=1"}),"here"),"."))}i.isMDXComponent=!0}},function(e){e.O(0,[774,888,179],(function(){return t=9717,e(e.s=t);var t}));var t=e.O();_N_E=t}]);