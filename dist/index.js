!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){var t=e.extend(r(9)),n=null;Object.defineProperty(e.prototype,"$alert",{get:function(){return function(e){n||(n=new t({el:document.createElement("div"),data:function(){return{title:e.title,message:e.message,confirmTxt:e.confirmTxt||"OK"}},methods:{confirm:function(){n.$remove(),n=null}}}),n.$appendTo(document.body))}}})}"undefined"!=typeof window&&window.Vue&&Vue.use(n),e.exports=n},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(n[a]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&n[o[0]]||(r&&!o[2]?o[2]=r:r&&(o[2]="("+o[2]+") and ("+r+")"),e.push(o))}},e}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],i=p[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(f(n.parts[a],t))}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(f(n.parts[a],t));p[n.id]={id:n.id,refs:1,parts:o}}}}function i(e){for(var t=[],r={},n=0;n<e.length;n++){var i=e[n],a=i[0],o=i[1],s=i[2],A=i[3],f={css:o,media:s,sourceMap:A};r[a]?r[a].parts.push(f):t.push(r[a]={id:a,parts:[f]})}return t}function a(e,t){var r=u(),n=C[C.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),C.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=C.indexOf(e);t>=0&&C.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function A(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function f(e,t){var r,n,i;if(t.singleton){var a=h++;r=v||(v=s(t)),n=l.bind(null,r,a,!1),i=l.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=A(t),n=d.bind(null,r),i=function(){o(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(t),n=c.bind(null,r),i=function(){o(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}function l(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function c(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function d(e,t){var r=t.css,n=t.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}var p={},b=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=b(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),u=b(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,h=0,C=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=i(e);return n(r,t),function(e){for(var a=[],o=0;o<r.length;o++){var s=r[o],A=p[s.id];A.refs--,a.push(A)}if(e){var f=i(e);n(f,t)}for(var o=0;o<a.length;o++){var A=a[o];if(0===A.refs){for(var l=0;l<A.parts.length;l++)A.parts[l]();delete p[A.id]}}}};var g=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={}},function(e,t,r){t=e.exports=r(1)(),t.push([e.id,"@media screen and (min-width:320px){html{font-size:10px}}@media screen and (min-width:375px){html{font-size:12px}}@media screen and(min-width:414px){html{font-size:14px}}@media screen and(min-width:600px){html{font-size:16px}}","",{version:3,sources:["/./src/alert.vue.style"],names:[],mappings:"AAqBA,oCACA,KACA,cAAA,CACA,CACA,AAEA,oCACA,KACA,cAAA,CACA,CACA,AAEA,mCACA,KACA,cAAA,CACA,CACA,AAEA,mCACA,KACA,cAAA,CACA,CACA",file:"alert.vue",sourcesContent:['<template>\n    <div class="g-layerWrap">\n        <div class="m-alert">\n            <div class="alert-mainWrap">\n                <div class="alert-titleWrap" v-show="title">\n                    <h3 class="title f-bw">{{title}}</h3>\n                </div>\n                <div class="alert-ctnWrap" v-show="message">\n                    <p class="ctn f-bw">\n                        {{message}}\n                    </p>\n                </div>\n            </div>\n            <div class="alert-btnWrap retainbt">\n                <button  class="btn" v-on:click="confirm()" type="button">{{confirmTxt}}</button>\n            </div>\n        </div>\n    </div>\n</template>\n\n<style>\n    @media screen and (min-width: 320px) {\n        html {\n            font-size: 10px;\n        }\n    }\n\n    @media screen and (min-width: 375px) {\n        html {\n            font-size: 12px;\n        }\n    }\n\n    @media screen and(min-width: 414px) {\n        html {\n            font-size: 14px;\n        }\n    }\n\n    @media screen and(min-width: 600px) {\n        html {\n            font-size: 16px;\n        }\n    }\n</style>\n\n<style  lang="less" scoped>\n    @import "alert.less";\n</style>\n\n<script type="text/ecmascript-6" lang="babel">\n    export default {\n\n    };\n</script>'],sourceRoot:"webpack://"}])},function(e,t,r){t=e.exports=r(1)(),t.push([e.id,'.retainb[_v-2924823f],.retainbb[_v-2924823f],.retainbl[_v-2924823f],.retainbr[_v-2924823f],.retainbt[_v-2924823f]{position:relative;position:relative!important}.retainbb[_v-2924823f]:after,.retainbt[_v-2924823f]:before{pointer-events:none;position:absolute;content:"";height:.08333rem;max-height:1px;background:#ddd;left:0;right:0}.retainbt[_v-2924823f]:before{top:0}.retainbb[_v-2924823f]:after{bottom:0}.retainbl[_v-2924823f]:before,.retainbr[_v-2924823f]:after{pointer-events:none;position:absolute;content:"";width:.08333rem;max-width:1px;background:#ddd;top:0;bottom:0}.retainbl[_v-2924823f]:before{left:0}.retainbr[_v-2924823f]:after{right:0}.retainb[_v-2924823f]:after{position:absolute;content:"";top:0;left:0;box-sizing:border-box;width:100%;height:100%;border:1px solid #ddd;pointer-events:none}@media (-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5),(min-resolution:1.5dppx),(min-resolution:144dpi){.retainbb[_v-2924823f]:after,.retainbt[_v-2924823f]:before{-webkit-transform:scaleY(.5);transform:scaleY(.5)}.retainbl[_v-2924823f]:before,.retainbr[_v-2924823f]:after{-webkit-transform:scaleX(.5);transform:scaleX(.5)}.retainb[_v-2924823f]:after{width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5)}.retainb[_v-2924823f]:after,.retainbl[_v-2924823f]:before,.retainbt[_v-2924823f]:before{-webkit-transform-origin:0 0;transform-origin:0 0}.retainbb[_v-2924823f]:after,.retainbr[_v-2924823f]:after{-webkit-transform-origin:100% 100%;transform-origin:100% 100%}}@media (-webkit-device-pixel-ratio:1.5){.retainbb[_v-2924823f]:after,.retainbt[_v-2924823f]:before{-webkit-transform:scaleY(.6666);transform:scaleY(.6666)}.retainbl[_v-2924823f]:before,.retainbr[_v-2924823f]:after{-webkit-transform:scaleX(.6666);transform:scaleX(.6666)}.retainb[_v-2924823f]:after{width:150%;height:150%;-webkit-transform:scale(.6666);transform:scale(.6666)}}@media (-webkit-device-pixel-ratio:3){.retainbb[_v-2924823f]:after,.retainbt[_v-2924823f]:before{-webkit-transform:scaleY(.3333);transform:scaleY(.3333)}.retainbl[_v-2924823f]:before,.retainbr[_v-2924823f]:after{-webkit-transform:scaleX(.3333);transform:scaleX(.3333)}.retainb[_v-2924823f]:after{width:300%;height:300%;-webkit-transform:scale(.3333);transform:scale(.3333)}}.g-layerWrap[_v-2924823f]{position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.4)}.f-bw[_v-2924823f]{word-wrap:break-word;overflow:hidden}.m-alert[_v-2924823f]{position:absolute;top:20%;left:50%;width:22.5rem;margin-left:-135px;background-color:#fff;border-radius:5px}.m-alert .alert-mainWrap[_v-2924823f]{padding:1.66667rem 0}.m-alert .alert-titleWrap .title[_v-2924823f]{margin:0;line-height:1.1em;color:#333;font-size:1.41667rem;font-weight:400;text-align:center}.m-alert .alert-ctnWrap[_v-2924823f]{padding:1rem 0 0}.m-alert .alert-ctnWrap .ctn[_v-2924823f]{margin:0;line-height:1.2em;color:#333;font-size:1.08333rem;text-align:center}.m-alert .alert-btnWrap .btn[_v-2924823f]{padding:1rem 0;width:100%;border:none;outline:none;background-color:transparent;text-align:center;font-size:1.5rem;line-height:1.1em;color:#00bfbf}',"",{version:3,sources:["/./src/alert.vue.style"],names:[],mappings:"AAAA,kHAAiD,kBAAkB,2BAA4B,CAAC,2DAAiC,oBAAoB,kBAAkB,WAAW,iBAAW,eAAe,gBAAgB,OAAO,OAAO,CAAC,8BAAiB,KAAK,CAAC,6BAAgB,QAAQ,CAAC,2DAAiC,oBAAoB,kBAAkB,WAAW,gBAAU,cAAc,gBAAgB,MAAM,QAAQ,CAAC,8BAAiB,MAAM,CAAC,6BAAgB,OAAO,CAAC,4BAAe,kBAAkB,WAAW,MAAM,OAAO,sBAAoD,WAAW,YAAY,sBAAsB,mBAAmB,CAAC,0HAA0H,2DAAiC,6BAA6B,oBAAoB,CAAC,2DAAiC,6BAA6B,oBAAoB,CAAC,4BAAe,WAAW,YAAY,4BAA4B,mBAAmB,CAAC,wFAAiD,6BAA6B,oBAAoB,CAAC,0DAAgC,mCAAmC,0BAA0B,CAAC,CAAC,wCAAwC,2DAAiC,gCAAgC,uBAAuB,CAAC,2DAAiC,gCAAgC,uBAAuB,CAAC,4BAAe,WAAW,YAAY,+BAA+B,sBAAsB,CAAC,CAAC,sCAAsC,2DAAiC,gCAAgC,uBAAuB,CAAC,2DAAiC,gCAAgC,uBAAuB,CAAC,4BAAe,WAAW,YAAY,+BAA+B,sBAAsB,CAAC,CAAC,0BAAa,eAAe,OAAO,MAAM,WAAW,YAAY,+BAAgC,CAAC,mBAAM,qBAAqB,eAAe,CAAC,sBAAS,kBAAkB,QAAQ,SAAS,cAAY,mBAAmB,sBAAsB,iBAAiB,CAAC,sCAAyB,oBAAc,CAAC,8CAAiC,SAAS,kBAAkB,WAAW,qBAAe,gBAAmB,iBAAiB,CAAC,qCAAwB,gBAAkB,CAAC,0CAA6B,SAAS,kBAAkB,WAAW,qBAAe,iBAAiB,CAAC,0CAA6B,eAAe,WAAW,YAAY,aAAa,6BAA6B,kBAAkB,iBAAe,kBAAkB,aAAa,CAAC",file:"alert.vue",sourcesContent:['.retainbt,.retainbb,.retainbl,.retainbr,.retainb{position:relative;position:relative !important}.retainbt:before,.retainbb:after{pointer-events:none;position:absolute;content:"";height:1px;max-height:1px;background:#ddd;left:0;right:0}.retainbt:before{top:0}.retainbb:after{bottom:0}.retainbl:before,.retainbr:after{pointer-events:none;position:absolute;content:"";width:1px;max-width:1px;background:#ddd;top:0;bottom:0}.retainbl:before{left:0}.retainbr:after{right:0}.retainb:after{position:absolute;content:"";top:0;left:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;border:1px solid #ddd;pointer-events:none}@media (-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5),(min-resolution:144dpi),(min-resolution:1.5dppx){.retainbt:before,.retainbb:after{-webkit-transform:scaleY(.5);transform:scaleY(.5)}.retainbl:before,.retainbr:after{-webkit-transform:scaleX(.5);transform:scaleX(.5)}.retainb:after{width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5)}.retainbt:before,.retainbl:before,.retainb:after{-webkit-transform-origin:0 0;transform-origin:0 0}.retainbb:after,.retainbr:after{-webkit-transform-origin:100% 100%;transform-origin:100% 100%}}@media (-webkit-device-pixel-ratio:1.5){.retainbt:before,.retainbb:after{-webkit-transform:scaleY(.6666);transform:scaleY(.6666)}.retainbl:before,.retainbr:after{-webkit-transform:scaleX(.6666);transform:scaleX(.6666)}.retainb:after{width:150%;height:150%;-webkit-transform:scale(.6666);transform:scale(.6666)}}@media (-webkit-device-pixel-ratio:3){.retainbt:before,.retainbb:after{-webkit-transform:scaleY(.3333);transform:scaleY(.3333)}.retainbl:before,.retainbr:after{-webkit-transform:scaleX(.3333);transform:scaleX(.3333)}.retainb:after{width:300%;height:300%;-webkit-transform:scale(.3333);transform:scale(.3333)}}.g-layerWrap{position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.4)}.f-bw{word-wrap:break-word;overflow:hidden}.m-alert{position:absolute;top:20%;left:50%;width:270px;margin-left:-135px;background-color:#fff;border-radius:5px}.m-alert .alert-mainWrap{padding:20px 0}.m-alert .alert-titleWrap .title{margin:0;line-height:1.1em;color:#333;font-size:17px;font-weight:normal;text-align:center}.m-alert .alert-ctnWrap{padding:12px 0 0 0}.m-alert .alert-ctnWrap .ctn{margin:0;line-height:1.2em;color:#333;font-size:13px;text-align:center}.m-alert .alert-btnWrap .btn{padding:12px 0;width:100%;border:none;outline:none;background-color:transparent;text-align:center;font-size:18px;line-height:1.1em;color:#00BFBF}'],sourceRoot:"webpack://"}])},function(e,t,r){var n=r(4);"string"==typeof n&&(n=[[e.id,n,""]]);r(2)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,r){var n=r(5);"string"==typeof n&&(n=[[e.id,n,""]]);r(2)(n,{});n.locals&&(e.exports=n.locals)},function(e,t){e.exports=' <div class=g-layerWrap _v-2924823f=""> <div class=m-alert _v-2924823f=""> <div class=alert-mainWrap _v-2924823f=""> <div class=alert-titleWrap v-show=title _v-2924823f=""> <h3 class="title f-bw" _v-2924823f="">{{title}}</h3> </div> <div class=alert-ctnWrap v-show=message _v-2924823f=""> <p class="ctn f-bw" _v-2924823f=""> {{message}} </p> </div> </div> <div class="alert-btnWrap retainbt" _v-2924823f=""> <button class=btn v-on:click=confirm() type=button _v-2924823f="">{{confirmTxt}}</button> </div> </div> </div> '},function(e,t,r){var n,i;r(6),r(7),n=r(3),i=r(8),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options:e.exports).template=i)}])});