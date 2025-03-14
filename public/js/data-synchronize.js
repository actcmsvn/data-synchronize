(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new A(n||[]);return i(a,"_invoke",{value:S(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var d="suspendedStart",v="suspendedYield",g="executing",m="completed",y={};function b(){}function w(){}function x(){}var L={};f(L,u,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(N([])));E&&E!==o&&a.call(E,u)&&(L=E);var k=x.prototype=b.prototype=Object.create(L);function j(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(e,r){function n(o,i,c,u){var l=p(e[o],e,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}})}function S(t,e,n){var o=d;return function(a,i){if(o===g)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=F(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=g;var l=p(t,e,n);if("normal"===l.type){if(o=n.done?m:v,l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function F(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,F(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=p(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,y;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return w.prototype=x,i(k,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},j(O.prototype),f(O.prototype,l,(function(){return this})),n.AsyncIterator=O,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new O(h(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(k),f(k,s,"Generator"),f(k,u,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=N,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),$(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;$(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},n}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,l=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}$((function(){var t=function(t,n,a){var i=$httpClient.make().withResponseType("blob");a&&i.withButtonLoading(a),i.post(t.prop("action"),n).then(function(){var n,a=(n=e().mark((function n(o){var a,i,c,u,l,s,f,h,p,d;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=o.headers,i=o.data,void 0!==a["content-disposition"]){e.next=14;break}if(c=function(t){return t instanceof Blob&&"application/json"===t.type},!c(i)){e.next=9;break}return e.next=6,null==i?void 0:i.text();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=i||{};case 10:return u=e.t0,l="string"==typeof u?JSON.parse(u):u,Actcms.showError((null==l?void 0:l.message)||t.data("error-message")),e.abrupt("return");case 14:s=a["content-disposition"].split("filename="),(f=r(s,2))[0],h=f[1],p=window.URL.createObjectURL(i),(d=document.createElement("a")).href=p,d.download=h,d.click(),window.URL.revokeObjectURL(p),Actcms.showSuccess(t.data("success-message"));case 22:case"end":return e.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,a){var i=n.apply(t,e);function c(t){o(i,r,a,c,u,"next",t)}function u(t){o(i,r,a,c,u,"throw",t)}c(void 0)}))});return function(t){return a.apply(this,arguments)}}()).catch((function(e){console.log(e),Actcms.showError(t.data("error-message"))}))},n=$(document).find('[data-bb-toggle="import-form"]');if(n.length>0){var a=new FormData(n.get(0)),i=n.find('button[type="submit"]'),c=n.find('[data-bb-toggle="import-errors"]'),u=n.find('[data-bb-toggle="import-failures"]'),l=$("#failures-template"),s=n.find(".data-synchronize-import-output"),f=[],h=[],p=null;n.on("change",(function(t){a.set(t.target.name,t.target.value)}));var d=function(t,e){e?s.append('<p class="text-'.concat(e,'">').concat(t,"</p>")):s.append("<p>".concat(t,"</p>")),s.scrollTop(s[0].scrollHeight)},v=new Dropzone(n.find(".dropzone").get(0),{url:n.prop("action"),headers:{"X-CSRF-TOKEN":n.find('input[name="_token"]').val()},previewTemplate:$("#data-synchronize-import-preview-template").html(),acceptedFiles:n.data("accepted-files"),maxFiles:1,autoProcessQueue:!1,chunking:!0,chunkSize:1048576,maxfilesexceeded:function(t){this.removeAllFiles(),this.addFile(t)}}),g=function(){Actcms.hideButtonLoading(i),i.prop("disabled",!0).addClass("disabled"),v.removeAllFiles()},m=function t(e,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:parseInt(n.find("input[name=chunk_size]").val()),i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;a.set("file_name",e),a.set("offset",r),a.set("limit",o),a.set("total",i),$httpClient.make().post(n.data("import-url"),a).then((function(r){var n=r.data;n.data.failures.length>0&&(h=h.concat(n.data.failures)),n.data.count>0?(d(n.message),t(e,n.data.offset+o,o,n.data.total)):(d(n.message,"success"),g(),h.length>0&&(u.find("tbody").html(h.map((function(t){return l.html().replace(new RegExp("__index__","g"),"#".concat(t.row)).replace(new RegExp("__attribute__","g"),t.attribute).replace(new RegExp("__errors__","g"),t.errors.map((function(t){return"<li>".concat(t,"</li>")})).join(""))})).join("")),u.show()))})).catch((function(){return g()}))},y=function t(e,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:parseInt(n.find("input[name=chunk_size]").val());a.set("file_name",e),a.set("offset",r),a.set("limit",o),$httpClient.make().post(n.data("validate-url"),a).then((function(e){var r=e.data;r.data.errors.length>0&&(f=f.concat(r.data.errors)),null===p&&(p=r.data.total),r.message&&d(r.message),r.data.count>0?t(r.data.file_name,r.data.offset+o,o):0===f.length?m(r.data.file_name,0):d(n.data("validate-failed-message"),"danger"),f.length>0&&(c.find("ul").html(f.map((function(t){return"<li>".concat(t,"</li>")})).join("")),c.show(),g())})).catch((function(){return g()}))};v.on("sending",(function(){s.empty(),s.show(),f=[],h=[],d(n.data("uploading-message")),Actcms.showButtonLoading(i)})),v.on("success",(function(t,e){var r=e.data,n=e.error,o=e.message;if(n)return d(o,"danger"),void g();d(o),y(r.file_name,0)})),v.on("addedfile",(function(){i.prop("disabled",!1).removeClass("disabled")})),n.on("submit",(function(t){t.preventDefault(),v.getQueuedFiles().length>0&&v.processQueue()}))}$(document).on("click",'[data-bb-toggle="export-data"] button',(function(e){e.preventDefault();var r=$(e.currentTarget),n=r.closest("form");t(n,n.serialize(),r)})).on("click",'[data-bb-toggle="quick-export"]',(function(e){e.preventDefault(),t($('[data-bb-toggle="export-data"]'),{format:$(e.currentTarget).data("value")})}))}))})();