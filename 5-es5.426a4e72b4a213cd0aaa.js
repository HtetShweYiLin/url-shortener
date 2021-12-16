function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var l=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,o=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(i){a=!0,l=i}finally{try{s||null==n.return||n.return()}finally{if(a)throw l}}return o}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}/*! For license information please see 5-es2015.426a4e72b4a213cd0aaa.js.LICENSE.txt */(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"uP/6":function(e,t,n){"use strict";n.r(t);var r=n("8Y7J"),l=function e(){_classCallCheck(this,e)},o=n("pMnS"),s=function(){function e(){_classCallCheck(this,e),this.onClickBtn=new r.l,this.option=1,this.longUrl="",this.urlObj={type:1,longUrl:""}}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onKeyUp",value:function(e){this.longUrl=e}},{key:"handleChange",value:function(e){this.option=e.target.value,console.log("handleChange",this.option)}},{key:"onClickButton",value:function(){this.urlObj.type=this.option,this.urlObj.longUrl=this.longUrl,console.log("onClickButton",this.urlObj),this.onClickBtn.emit(this.urlObj)}}]),e}(),a=r.kb({encapsulation:0,styles:[['.url-shortener-wrapper[_ngcontent-%COMP%]{padding:32px;margin:20px 0;box-shadow:2px 4px 32px rgba(0,0,0,.08);border-radius:16px}.option-label[_ngcontent-%COMP%]{padding-right:10px}.url_input[_ngcontent-%COMP%]{width:92%;height:48px;padding:12px;border:1px solid #ced4da;border-radius:8px}.url_input[_ngcontent-%COMP%]:focus{outline:#2ad0d1 solid 1px;border:none}.primary_btn[_ngcontent-%COMP%]{width:18%;height:48px;padding:12px;margin-left:30px;color:#fff;background:#2ad0d1;border-radius:8px;border:none;outline:0}.primary_btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:no-drop}.toggle-option[_ngcontent-%COMP%]{border:3px solid #2ad0d1;color:#2ad0d1;display:inline-block;padding:5px;position:relative;text-align:center;transition:background .6s ease,color .6s ease}input[type=radio].toggle[_ngcontent-%COMP%]{display:none}input[type=radio].toggle[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{cursor:pointer;min-width:60px}input[type=radio].toggle[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover{background:0 0;color:#2ad0d1}input[type=radio].toggle[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after{background:#2ad0d1;content:"";height:100%;position:absolute;top:0;transition:left .2s cubic-bezier(.77,0,.175,1);width:100%;z-index:-1}input[type=radio].toggle.toggle-left[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{border-right:0;border-radius:4px 0 0 4px}input[type=radio].toggle.toggle-left[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after{left:100%}input[type=radio].toggle.toggle-right[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{border-radius:0 4px 4px 0}input[type=radio].toggle.toggle-right[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after{left:-100%}input[type=radio].toggle[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{cursor:default;color:#fff;transition:color .2s}input[type=radio].toggle[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:after{left:0}']],data:{}});function i(e){return r.Db(0,[(e()(),r.mb(0,0,null,null,14,"div",[["class","url-shortener-wrapper"]],null,null,null,null,null)),(e()(),r.mb(1,0,null,null,9,"div",[["class","d-flex align-items-center pb-3"]],null,null,null,null,null)),(e()(),r.mb(2,0,null,null,1,"div",[["class","caption text-c300 option-label"]],null,null,null,null,null)),(e()(),r.Bb(-1,null,[" Anyone can see and copy the shorten URL. "])),(e()(),r.mb(4,0,null,null,6,"div",[],null,null,null,null,null)),(e()(),r.mb(5,0,null,null,0,"input",[["class","toggle toggle-left"],["id","toggle-on"],["name","toggle"],["type","radio"],["value","1"]],[[8,"checked",0]],[[null,"change"]],(function(e,t,n){var r=!0;return"change"===t&&(r=!1!==e.component.handleChange(n)&&r),r}),null,null)),(e()(),r.mb(6,0,null,null,1,"label",[["class","toggle-option"],["for","toggle-on"]],null,null,null,null,null)),(e()(),r.Bb(-1,null,["Yes"])),(e()(),r.mb(8,0,null,null,0,"input",[["class","toggle toggle-right"],["id","toggle-off"],["name","toggle"],["type","radio"],["value","0"]],[[8,"checked",0]],[[null,"change"]],(function(e,t,n){var r=!0;return"change"===t&&(r=!1!==e.component.handleChange(n)&&r),r}),null,null)),(e()(),r.mb(9,0,null,null,1,"label",[["class","toggle-option"],["for","toggle-off"]],null,null,null,null,null)),(e()(),r.Bb(-1,null,["No"])),(e()(),r.mb(11,0,null,null,3,"div",[["class","d-flex input_wrapper"]],null,null,null,null,null)),(e()(),r.mb(12,0,[["url",1]],null,0,"input",[["class","url_input"],["placeholder","Paste your original URL here"]],null,[[null,"keyup"]],(function(e,t,n){var l=!0;return"keyup"===t&&(l=!1!==e.component.onKeyUp(r.xb(e,12).value)&&l),l}),null,null)),(e()(),r.mb(13,0,null,null,1,"button",[["class","primary_btn"]],[[8,"disabled",0]],[[null,"click"]],(function(e,t,n){var r=!0;return"click"===t&&(r=!1!==e.component.onClickButton()&&r),r}),null,null)),(e()(),r.Bb(-1,null,["Shorten it"]))],null,(function(e,t){var n=t.component;e(t,5,0,1==n.option),e(t,8,0,0==n.option),e(t,13,0,""==n.longUrl)}))}var u=n("SVse"),c=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"copyShortUrl",value:function(e){navigator.clipboard.writeText(e)}}]),e}(),h=r.kb({encapsulation:0,styles:[[".col-wrapper[_ngcontent-%COMP%]{padding:10px 0}.first-col[_ngcontent-%COMP%]{width:14%;padding-right:40px}.second-col[_ngcontent-%COMP%]{width:52%;padding-right:40px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.third-col[_ngcontent-%COMP%]{width:34%}.third-col[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-right:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.shorturl-link[_ngcontent-%COMP%]{text-decoration:none}.shorturl-link[_ngcontent-%COMP%]:hover{color:#5c6773}.copy-btn[_ngcontent-%COMP%]{cursor:pointer}.copy-btn[_ngcontent-%COMP%]:hover{color:#3394ab}"]],data:{}});function p(e){return r.Db(0,[(e()(),r.mb(0,0,null,null,10,"div",[["class","text-c300 caption-bold d-flex col-wrapper"]],null,null,null,null,null)),(e()(),r.mb(1,0,null,null,2,"div",[["class","first-col"]],null,null,null,null,null)),(e()(),r.Bb(2,null,[" "," "])),r.zb(3,2),(e()(),r.mb(4,0,null,null,1,"div",[["class","second-col"]],null,null,null,null,null)),(e()(),r.Bb(5,null,[" "," "])),(e()(),r.mb(6,0,null,null,4,"div",[["class","d-flex justify-content-between third-col"]],null,null,null,null,null)),(e()(),r.mb(7,0,null,null,1,"a",[["class","text-s700 shorturl-link"]],[[8,"href",4]],null,null,null,null)),(e()(),r.Bb(8,null,[" "," "])),(e()(),r.mb(9,0,null,null,1,"div",[],null,null,null,null,null)),(e()(),r.mb(10,0,null,null,0,"i",[["class","far fa-copy text-c100 copy-btn"]],null,[[null,"click"]],(function(e,t,n){var r=!0;return"click"===t&&(r=!1!==e.component.copyShortUrl(e.context.$implicit.shortUrl)&&r),r}),null,null))],null,(function(e,t){var n=r.Cb(t,2,0,e(t,3,0,r.xb(t.parent,0),t.context.$implicit.date,"MMM d, y"));e(t,2,0,n),e(t,5,0,t.context.$implicit.longUrl),e(t,7,0,r.qb(1,"",t.context.$implicit.shortUrl,"")),e(t,8,0,t.context.$implicit.shortUrl)}))}function d(e){return r.Db(0,[r.yb(0,u.d,[r.r]),(e()(),r.mb(1,0,null,null,2,"div",[],null,null,null,null,null)),(e()(),r.bb(16777216,null,null,1,null,p)),r.lb(3,278528,null,0,u.i,[r.K,r.H,r.p],{ngForOf:[0,"ngForOf"]},null)],(function(e,t){e(t,3,0,t.component.urlList)}),null)}var f=function(){function e(t){_classCallCheck(this,e),this._shortenUrlService=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.getAllShortenUrls()}},{key:"getAllShortenUrls",value:function(){var e=this;this._shortenUrlService.getAllUrls().subscribe((function(t){console.log("res",t),e.shortenUrlList=t}))}},{key:"shortenUrl",value:function(e){var t=this;console.log("shortenUrl",e),this._shortenUrlService.shortenUrl(e).subscribe((function(e){console.log("res",e),t.getAllShortenUrls()}))}}]),e}(),y=n("LRne"),b=n("HDdC"),g=n("bOdf"),v=n("pLZG"),m=n("lJxs"),C=function e(){_classCallCheck(this,e)},k=function e(){_classCallCheck(this,e)},_=function(){function e(t){var n=this;_classCallCheck(this,e),this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?function(){n.headers=new Map,t.split("\n").forEach((function(e){var t=e.indexOf(":");if(t>0){var r=e.slice(0,t),l=r.toLowerCase(),o=e.slice(t+1).trim();n.maybeSetNormalizedName(r,l),n.headers.has(l)?n.headers.get(l).push(o):n.headers.set(l,[o])}}))}:function(){n.headers=new Map,Object.keys(t).forEach((function(e){var r=t[e],l=e.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(n.headers.set(l,r),n.maybeSetNormalizedName(e,l))}))}:this.headers=new Map}return _createClass(e,[{key:"has",value:function(e){return this.init(),this.headers.has(e.toLowerCase())}},{key:"get",value:function(e){this.init();var t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}},{key:"keys",value:function(){return this.init(),Array.from(this.normalizedNames.values())}},{key:"getAll",value:function(e){return this.init(),this.headers.get(e.toLowerCase())||null}},{key:"append",value:function(e,t){return this.clone({name:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return this.clone({name:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return this.clone({name:e,value:t,op:"d"})}},{key:"maybeSetNormalizedName",value:function(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}},{key:"init",value:function(){var t=this;this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach((function(e){return t.applyUpdate(e)})),this.lazyUpdate=null))}},{key:"copyFrom",value:function(e){var t=this;e.init(),Array.from(e.headers.keys()).forEach((function(n){t.headers.set(n,e.headers.get(n)),t.normalizedNames.set(n,e.normalizedNames.get(n))}))}},{key:"clone",value:function(t){var n=new e;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([t]),n}},{key:"applyUpdate",value:function(e){var t=e.name.toLowerCase();switch(e.op){case"a":case"s":var n=e.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(e.name,t);var r=("a"===e.op?this.headers.get(t):void 0)||[];r.push.apply(r,_toConsumableArray(n)),this.headers.set(t,r);break;case"d":var l=e.value;if(l){var o=this.headers.get(t);if(!o)return;0===(o=o.filter((function(e){return-1===l.indexOf(e)}))).length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}else this.headers.delete(t),this.normalizedNames.delete(t)}}},{key:"forEach",value:function(e){var t=this;this.init(),Array.from(this.normalizedNames.keys()).forEach((function(n){return e(t.normalizedNames.get(n),t.headers.get(n))}))}}]),e}(),w=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"encodeKey",value:function(e){return O(e)}},{key:"encodeValue",value:function(e){return O(e)}},{key:"decodeKey",value:function(e){return decodeURIComponent(e)}},{key:"decodeValue",value:function(e){return decodeURIComponent(e)}}]),e}();function O(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var x=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(_classCallCheck(this,e),this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new w,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){var n=new Map;return e.length>0&&e.split("&").forEach((function(e){var r=e.indexOf("="),l=_slicedToArray(-1==r?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,r)),t.decodeValue(e.slice(r+1))],2),o=l[0],s=l[1],a=n.get(o)||[];a.push(s),n.set(o,a)})),n}(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach((function(e){var r=n.fromObject[e];t.map.set(e,Array.isArray(r)?r:[r])}))):this.map=null}return _createClass(e,[{key:"has",value:function(e){return this.init(),this.map.has(e)}},{key:"get",value:function(e){this.init();var t=this.map.get(e);return t?t[0]:null}},{key:"getAll",value:function(e){return this.init(),this.map.get(e)||null}},{key:"keys",value:function(){return this.init(),Array.from(this.map.keys())}},{key:"append",value:function(e,t){return this.clone({param:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return this.clone({param:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return this.clone({param:e,value:t,op:"d"})}},{key:"toString",value:function(){var e=this;return this.init(),this.keys().map((function(t){var n=e.encoder.encodeKey(t);return e.map.get(t).map((function(t){return n+"="+e.encoder.encodeValue(t)})).join("&")})).join("&")}},{key:"clone",value:function(t){var n=new e({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat([t]),n}},{key:"init",value:function(){var e=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach((function(t){return e.map.set(t,e.cloneFrom.map.get(t))})),this.updates.forEach((function(t){switch(t.op){case"a":case"s":var n=("a"===t.op?e.map.get(t.param):void 0)||[];n.push(t.value),e.map.set(t.param,n);break;case"d":if(void 0===t.value){e.map.delete(t.param);break}var r=e.map.get(t.param)||[],l=r.indexOf(t.value);-1!==l&&r.splice(l,1),r.length>0?e.map.set(t.param,r):e.map.delete(t.param)}})),this.cloneFrom=this.updates=null)}}]),e}();function P(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function T(e){return"undefined"!=typeof Blob&&e instanceof Blob}function A(e){return"undefined"!=typeof FormData&&e instanceof FormData}var U=function(){function e(t,n,r,l){var o;if(_classCallCheck(this,e),this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||l?(this.body=void 0!==r?r:null,o=l):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.params&&(this.params=o.params)),this.headers||(this.headers=new _),this.params){var s=this.params.toString();if(0===s.length)this.urlWithParams=n;else{var a=n.indexOf("?");this.urlWithParams=n+(-1===a?"?":a<n.length-1?"&":"")+s}}else this.params=new x,this.urlWithParams=n}return _createClass(e,[{key:"serializeBody",value:function(){return null===this.body?null:P(this.body)||T(this.body)||A(this.body)||"string"==typeof this.body?this.body:this.body instanceof x?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}},{key:"detectContentTypeHeader",value:function(){return null===this.body||A(this.body)?null:T(this.body)?this.body.type||null:P(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof x?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null}},{key:"clone",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.method||this.method,r=t.url||this.url,l=t.responseType||this.responseType,o=void 0!==t.body?t.body:this.body,s=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,a=void 0!==t.reportProgress?t.reportProgress:this.reportProgress,i=t.headers||this.headers,u=t.params||this.params;return void 0!==t.setHeaders&&(i=Object.keys(t.setHeaders).reduce((function(e,n){return e.set(n,t.setHeaders[n])}),i)),t.setParams&&(u=Object.keys(t.setParams).reduce((function(e,n){return e.set(n,t.setParams[n])}),u)),new e(n,r,o,{params:u,headers:i,reportProgress:a,responseType:l,withCredentials:s})}}]),e}(),j=function(){var e={Sent:0,UploadProgress:1,ResponseHeader:2,DownloadProgress:3,Response:4,User:5};return e[e.Sent]="Sent",e[e.UploadProgress]="UploadProgress",e[e.ResponseHeader]="ResponseHeader",e[e.DownloadProgress]="DownloadProgress",e[e.Response]="Response",e[e.User]="User",e}(),S=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"OK";_classCallCheck(this,e),this.headers=t.headers||new _,this.status=void 0!==t.status?t.status:n,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300},M=function(e){_inherits(n,e);var t=_createSuper(n);function n(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _classCallCheck(this,n),(e=t.call(this,r)).type=j.ResponseHeader,e}return _createClass(n,[{key:"clone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new n({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}]),n}(S),E=function(e){_inherits(n,e);var t=_createSuper(n);function n(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _classCallCheck(this,n),(e=t.call(this,r)).type=j.Response,e.body=void 0!==r.body?r.body:null,e}return _createClass(n,[{key:"clone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new n({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}]),n}(S),R=function(e){_inherits(n,e);var t=_createSuper(n);function n(e){var r;return _classCallCheck(this,n),(r=t.call(this,e,0,"Unknown Error")).name="HttpErrorResponse",r.ok=!1,r.message=r.status>=200&&r.status<300?"Http failure during parsing for "+(e.url||"(unknown url)"):"Http failure response for ".concat(e.url||"(unknown url)",": ").concat(e.status," ").concat(e.statusText),r.error=e.error||null,r}return n}(S);function N(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}var L,I=function(){function e(t){_classCallCheck(this,e),this.handler=t}return _createClass(e,[{key:"request",value:function(e,t){var n,r=this,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e instanceof U)n=e;else{var o=void 0;o=l.headers instanceof _?l.headers:new _(l.headers);var s=void 0;l.params&&(s=l.params instanceof x?l.params:new x({fromObject:l.params})),n=new U(e,t,void 0!==l.body?l.body:null,{headers:o,params:s,reportProgress:l.reportProgress,responseType:l.responseType||"json",withCredentials:l.withCredentials})}var a=Object(y.a)(n).pipe(Object(g.a)((function(e){return r.handler.handle(e)})));if(e instanceof U||"events"===l.observe)return a;var i=a.pipe(Object(v.a)((function(e){return e instanceof E})));switch(l.observe||"body"){case"body":switch(n.responseType){case"arraybuffer":return i.pipe(Object(m.a)((function(e){if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body})));case"blob":return i.pipe(Object(m.a)((function(e){if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body})));case"text":return i.pipe(Object(m.a)((function(e){if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body})));case"json":default:return i.pipe(Object(m.a)((function(e){return e.body})))}case"response":return i;default:throw new Error("Unreachable: unhandled observe type ".concat(l.observe,"}"))}}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("DELETE",e,t)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("GET",e,t)}},{key:"head",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("HEAD",e,t)}},{key:"jsonp",value:function(e,t){return this.request("JSONP",e,{params:(new x).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}},{key:"options",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("OPTIONS",e,t)}},{key:"patch",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PATCH",e,N(n,t))}},{key:"post",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("POST",e,N(n,t))}},{key:"put",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PUT",e,N(n,t))}}]),e}(),z=function(){function e(t,n){_classCallCheck(this,e),this.next=t,this.interceptor=n}return _createClass(e,[{key:"handle",value:function(e){return this.interceptor.intercept(e,this.next)}}]),e}(),B=new r.n("HTTP_INTERCEPTORS"),H=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"intercept",value:function(e,t){return t.handle(e)}}]),e}(),F=/^\)\]\}',?\n/,D=function e(){_classCallCheck(this,e)},q=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"build",value:function(){return new XMLHttpRequest}}]),e}(),K=function(){function e(t){_classCallCheck(this,e),this.xhrFactory=t}return _createClass(e,[{key:"handle",value:function(e){var t=this;if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new b.a((function(n){var r=t.xhrFactory.build();if(r.open(e.method,e.urlWithParams),e.withCredentials&&(r.withCredentials=!0),e.headers.forEach((function(e,t){return r.setRequestHeader(e,t.join(","))})),e.headers.has("Accept")||r.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){var l=e.detectContentTypeHeader();null!==l&&r.setRequestHeader("Content-Type",l)}if(e.responseType){var o=e.responseType.toLowerCase();r.responseType="json"!==o?o:"text"}var s=e.serializeBody(),a=null,i=function(){if(null!==a)return a;var t=1223===r.status?204:r.status,n=r.statusText||"OK",l=new _(r.getAllResponseHeaders()),o=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(r)||e.url;return a=new M({headers:l,status:t,statusText:n,url:o})},u=function(){var t=i(),l=t.headers,o=t.status,s=t.statusText,a=t.url,u=null;204!==o&&(u=void 0===r.response?r.responseText:r.response),0===o&&(o=u?200:0);var c=o>=200&&o<300;if("json"===e.responseType&&"string"==typeof u){var h=u;u=u.replace(F,"");try{u=""!==u?JSON.parse(u):null}catch(p){u=h,c&&(c=!1,u={error:p,text:u})}}c?(n.next(new E({body:u,headers:l,status:o,statusText:s,url:a||void 0})),n.complete()):n.error(new R({error:u,headers:l,status:o,statusText:s,url:a||void 0}))},c=function(e){var t=i().url,l=new R({error:e,status:r.status||0,statusText:r.statusText||"Unknown Error",url:t||void 0});n.error(l)},h=!1,p=function(t){h||(n.next(i()),h=!0);var l={type:j.DownloadProgress,loaded:t.loaded};t.lengthComputable&&(l.total=t.total),"text"===e.responseType&&r.responseText&&(l.partialText=r.responseText),n.next(l)},d=function(e){var t={type:j.UploadProgress,loaded:e.loaded};e.lengthComputable&&(t.total=e.total),n.next(t)};return r.addEventListener("load",u),r.addEventListener("error",c),e.reportProgress&&(r.addEventListener("progress",p),null!==s&&r.upload&&r.upload.addEventListener("progress",d)),r.send(s),n.next({type:j.Sent}),function(){r.removeEventListener("error",c),r.removeEventListener("load",u),e.reportProgress&&(r.removeEventListener("progress",p),null!==s&&r.upload&&r.upload.removeEventListener("progress",d)),r.abort()}}))}}]),e}(),J=new r.n("XSRF_COOKIE_NAME"),W=new r.n("XSRF_HEADER_NAME"),X=function e(){_classCallCheck(this,e)},V=function(){function e(t,n,r){_classCallCheck(this,e),this.doc=t,this.platform=n,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}return _createClass(e,[{key:"getToken",value:function(){if("server"===this.platform)return null;var e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(u.r)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}]),e}(),$=function(){function e(t,n){_classCallCheck(this,e),this.tokenService=t,this.headerName=n}return _createClass(e,[{key:"intercept",value:function(e,t){var n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return t.handle(e);var r=this.tokenService.getToken();return null===r||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,r)})),t.handle(e)}}]),e}(),G=function(){function e(t,n){_classCallCheck(this,e),this.backend=t,this.injector=n,this.chain=null}return _createClass(e,[{key:"handle",value:function(e){if(null===this.chain){var t=this.injector.get(B,[]);this.chain=t.reduceRight((function(e,t){return new z(e,t)}),this.backend)}return this.chain.handle(e)}}]),e}(),Y=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"disable",value:function(){return{ngModule:e,providers:[{provide:$,useClass:H}]}}},{key:"withOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:e,providers:[t.cookieName?{provide:J,useValue:t.cookieName}:[],t.headerName?{provide:W,useValue:t.headerName}:[]]}}}]),e}(),Z=function e(){_classCallCheck(this,e)},Q=n("AytR"),ee=((L=function(){function e(t){_classCallCheck(this,e),this.http=t,this.baseurl=Q.a.apiurl+"/api/url"}return _createClass(e,[{key:"getAllUrls",value:function(){var e=this.baseurl,t={headers:new _({"Content-Type":"application/json"})};return this.http.get(e,t).pipe(Object(m.a)((function(e){return e})))}},{key:"shortenUrl",value:function(e){var t=this.baseurl+"/shorten",n={headers:new _({"Content-Type":"application/json"})};return this.http.post(t,e,n).pipe(Object(m.a)((function(e){return e})))}}]),e}()).ngInjectableDef=r.Hb({factory:function(){return new L(r.Ib(I))},token:L,providedIn:"root"}),L),te=r.kb({encapsulation:0,styles:[[".url-shortener-container[_ngcontent-%COMP%]{width:70%;margin:0 auto;padding:20px 0}"]],data:{}});function ne(e){return r.Db(0,[(e()(),r.mb(0,0,null,null,6,"div",[["class","url-shortener-container"]],null,null,null,null,null)),(e()(),r.mb(1,0,null,null,1,"div",[["class","text-s700 h2-strong"]],null,null,null,null,null)),(e()(),r.Bb(-1,null,[" Shortly "])),(e()(),r.mb(3,0,null,null,1,"app-shorten-url",[],null,[[null,"onClickBtn"]],(function(e,t,n){var r=!0;return"onClickBtn"===t&&(r=!1!==e.component.shortenUrl(n)&&r),r}),i,a)),r.lb(4,114688,null,0,s,[],null,{onClickBtn:"onClickBtn"}),(e()(),r.mb(5,0,null,null,1,"app-url-list",[],null,null,null,d,h)),r.lb(6,114688,null,0,c,[],{urlList:[0,"urlList"]},null)],(function(e,t){var n=t.component;e(t,4,0),e(t,6,0,n.shortenUrlList)}),null)}var re=r.ib("app-home",f,(function(e){return r.Db(0,[(e()(),r.mb(0,0,null,null,1,"app-home",[],null,null,null,ne,te)),r.lb(1,114688,null,0,f,[ee],null,null)],(function(e,t){e(t,1,0)}),null)}),{},{},[]),le=n("iInd"),oe=function e(){_classCallCheck(this,e)};n.d(t,"DashboardModuleNgFactory",(function(){return se}));var se=r.jb(l,[],(function(e){return r.vb([r.wb(512,r.j,r.U,[[8,[o.a,re]],[3,r.j],r.u]),r.wb(4608,u.k,u.j,[r.r,[2,u.q]]),r.wb(4608,X,V,[u.c,r.y,J]),r.wb(4608,$,$,[X,W]),r.wb(5120,B,(function(e){return[e]}),[$]),r.wb(4608,q,q,[]),r.wb(6144,D,null,[q]),r.wb(4608,K,K,[D]),r.wb(6144,k,null,[K]),r.wb(4608,C,G,[k,r.o]),r.wb(4608,I,I,[C]),r.wb(4608,ee,ee,[I]),r.wb(1073742336,u.b,u.b,[]),r.wb(1073742336,Y,Y,[]),r.wb(1073742336,Z,Z,[]),r.wb(1073742336,le.l,le.l,[[2,le.q],[2,le.k]]),r.wb(1073742336,oe,oe,[]),r.wb(1073742336,l,l,[]),r.wb(256,J,"XSRF-TOKEN",[]),r.wb(256,W,"X-XSRF-TOKEN",[]),r.wb(1024,le.i,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);