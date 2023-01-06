/*! For license information please see dashboard.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,,,,,,,function(t,e,a){var r=a(11);"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(6)(r,n);r.locals&&(t.exports=r.locals)},function(t,e,a){var r=a(13);"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(6)(r,n);r.locals&&(t.exports=r.locals)},,function(t,e,a){"use strict";a(7)},function(t,e,a){(t.exports=a(5)(!1)).push([t.i,".dots{width:13.4px;height:13.4px;border-radius:50%;box-shadow:13.4px 0,-26.9px 0;animation:dots-h5boszmd .5s linear infinite alternate}@keyframes dots-h5boszmd{50%{box-shadow:13.4px 0,-13.4px 0}to{box-shadow:26.9px 0,-13.4px 0}}",""])},function(t,e,a){"use strict";a(8)},function(t,e,a){(t.exports=a(5)(!1)).push([t.i,".multiselect--active[data-v-574d083c],.multiselect__content-wrapper[data-v-574d083c]{z-index:1}",""])},,,,function(t,e,a){"use strict";a.r(e);var r=a(3),n=a.n(r),s=a(2),i=a(0);i.f.register(i.q,i.r,i.h,i.c,i.e,i.k);var o={name:"BarChart",components:{Bar:s.a},props:{chartId:{type:String,default:"bar-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:function(){}},plugins:{type:Array,default:function(){return[]}},labels:{type:Array,default:function(){return[]}},datasets:{type:Array,default:function(){return[]}}},data:function(){return{chartData:{labels:[],datasets:[]},chartOptions:{responsive:!0,maintainAspectRatio:!1}}},methods:{refresh:function(){this.chartData.labels=this.labels,this.chartData.datasets=this.datasets,this.labels.length<=0&&(this.chartData.labels=["Kosong"],this.chartData.datasets=[{label:"Kosong",data:[0]}])}},mounted:function(){this.refresh()},watch:{labels:function(t){this.refresh()},datasets:function(t){this.refresh()}}},l=a(1),c=Object(l.a)(o,(function(){var t=this;return(0,t._self._c)("Bar",{attrs:{"chart-options":t.chartOptions,"chart-data":t.chartData,"chart-id":t.chartId,"dataset-id-key":t.datasetIdKey,plugins:t.plugins,"css-classes":t.cssClasses,styles:t.styles,width:t.width,height:t.height}})}),[],!1,null,null,null).exports;i.f.register(i.q,i.r,i.h,i.j,i.k,i.e,i.m);var u={name:"LineChart",components:{LineChartGenerator:s.b},props:{chartId:{type:String,default:"line-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:function(){}},plugins:{type:Array,default:function(){return[]}},labels:{type:Array,default:function(){return[]}},datasets:{type:Array,default:function(){return[]}}},data:function(){return{chartData:{labels:[],datasets:[]},chartOptions:{responsive:!0,maintainAspectRatio:!1}}},methods:{refresh:function(){this.chartData.labels=this.labels,this.chartData.datasets=this.datasets}},mounted:function(){this.refresh()},watch:{labels:function(t){this.refresh()},datasets:function(t){this.refresh()}}},d=Object(l.a)(u,(function(){var t=this;return(0,t._self._c)("LineChartGenerator",{attrs:{"chart-options":t.chartOptions,"chart-data":t.chartData,"chart-id":t.chartId,"dataset-id-key":t.datasetIdKey,plugins:t.plugins,"css-classes":t.cssClasses,styles:t.styles,width:t.width,height:t.height}})}),[],!1,null,null,null).exports,h=(a(10),Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",[t("div",{staticClass:"dots bg-orange-400 text-orange-400"})])}],!1,null,null,null).exports);i.f.register(i.q,i.r,i.h,i.a,i.e);var f={name:"PieChart",components:{Pie:s.c},props:{chartId:{type:String,default:"pie-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:function(){}},plugins:{type:Array,default:function(){return[]}},labels:{type:Array,default:function(){return[]}},datasets:{type:Array,default:function(){return[]}}},data:function(){return{chartData:{labels:[],datasets:[]},chartOptions:{responsive:!0,maintainAspectRatio:!1}}},methods:{refresh:function(){this.chartData.labels=this.labels,this.chartData.datasets=this.datasets,this.labels.length<=0&&(this.chartData.labels=["Kosong"],this.chartData.datasets=[{label:"Kosong",data:[0]}])}},mounted:function(){this.refresh()},watch:{labels:function(t){this.refresh()},datasets:function(t){this.refresh()}}},p=Object(l.a)(f,(function(){var t=this;return(0,t._self._c)("Pie",{attrs:{"chart-options":t.chartOptions,"chart-data":t.chartData,"chart-id":t.chartId,"dataset-id-key":t.datasetIdKey,plugins:t.plugins,"css-classes":t.cssClasses,styles:t.styles,width:t.width,height:t.height}})}),[],!1,null,null,null).exports,m={components:{BarChart:c,LineChart:d,Loader:h,Multiselect:n.a,PieChart:p},props:{chartId:{type:String,default:"bar-chart"},labels:{type:Array,default:function(){return[]}},datasets:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!0},title:{type:String,default:"-"}},computed:{pieDatasets:function(){return[{backgroundColor:this.datasets.map((function(t){return t.backgroundColor})),data:this.datasets.map((function(t){return t.data.reduce((function(t,e){return t+e}))}))}]}},data:function(){return{type:{id:"bar",name:"Bar"},lists:[{id:"bar",name:"Bar Chart"},{id:"line",name:"Line Chart"},{id:"pie",name:"Pie Chart"}],piePlugins:{datalabels:{formatter:function(t,e){console.log("s");var a=0;return e.chart.data.datasets[0].data.map((function(t){a+=t})),(100*t/a).toFixed(2)+"%"},color:"#000"}}}}},v=(a(12),Object(l.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"border-b-4 border-slate-500/75 flex flex-col md:flex-row justify-between"},[e("h3",{staticClass:"md:w-3/4 text-2xl font-black text-slate-500/75 dark:text-slate-300/90"},[t._v("\n            "+t._s(t.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"md:w-1/6 mb-5"},[e("Multiselect",{attrs:{options:t.lists,label:"name","track-by":"id",allowEmpty:!1},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1)]),t._v(" "),t.loading?e("div",{staticClass:"flex min-h-[20px] justify-center items-center"},[e("Loader")],1):t._e(),t._v(" "),"bar"===t.type.id?e("BarChart",{attrs:{chartId:t.chartId,labels:t.labels,datasets:t.datasets}}):t._e(),t._v(" "),"line"===t.type.id?e("LineChart",{attrs:{chartId:t.chartId,labels:t.labels,datasets:t.datasets}}):t._e(),t._v(" "),"pie"===t.type.id?e("PieChart",{attrs:{chartId:t.chartId,labels:t.datasets.map((function(t){return t.label})),datasets:t.pieDatasets,plugins:[t.piePlugins]}}):t._e()],1)}),[],!1,null,"574d083c",null).exports);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}function C(){C=function(){return t};var t={},e=Object.prototype,a=e.hasOwnProperty,r=Object.defineProperty||function(t,e,a){t[e]=a.value},n="function"==typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function l(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,a){return t[e]=a}}function c(t,e,a,n){var s=e&&e.prototype instanceof h?e:h,i=Object.create(s.prototype),o=new P(n||[]);return r(i,"_invoke",{value:_(t,a,o)}),i}function u(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var d={};function h(){}function f(){}function p(){}var m={};l(m,s,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(A([])));g&&g!==e&&a.call(g,s)&&(m=g);var b=p.prototype=h.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;r(this,"_invoke",{value:function(r,s){function i(){return new e((function(n,i){!function r(n,s,i,o){var l=u(t[n],t,s);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==y(d)&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,o)}),(function(t){r("throw",t,i,o)})):e.resolve(d).then((function(t){c.value=t,i(c)}),(function(t){return r("throw",t,i,o)}))}o(l.arg)}(r,s,n,i)}))}return n=n?n.then(i,i):i()}})}function _(t,e,a){var r="suspendedStart";return function(n,s){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw s;return j()}for(a.method=n,a.arg=s;;){var i=a.delegate;if(i){var o=k(i,a);if(o){if(o===d)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var l=u(t,e,a);if("normal"===l.type){if(r=a.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r="completed",a.method="throw",a.arg=l.arg)}}}function k(t,e){var a=e.method,r=t.iterator[a];if(void 0===r)return e.delegate=null,"throw"===a&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==a&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+a+"' method")),d;var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var s=n.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function A(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=p,r(b,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:f,configurable:!0}),f.displayName=l(p,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,o,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(w.prototype),l(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,a,r,n,s){void 0===s&&(s=Promise);var i=new w(c(e,a,r,n),s);return t.isGeneratorFunction(a)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(b),l(b,o,"Generator"),l(b,s,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),a=[];for(var r in e)a.push(r);return a.reverse(),function t(){for(;a.length;){var r=a.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=A,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(a,r){return i.type="throw",i.arg=t,e.next=a,r&&(e.method="next",e.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n],i=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var o=a.call(s,"catchLoc"),l=a.call(s,"finallyLoc");if(o&&l){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(o){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=t,i.arg=e,s?(this.method="next",this.next=s.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),L(a),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var n=r.arg;L(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:A(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),d}},t}function x(t,e,a,r,n,s,i){try{var o=t[s](i),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(r,n)}function w(t){return function(){var e=this,a=arguments;return new Promise((function(r,n){var s=t.apply(e,a);function i(t){x(s,r,n,i,o,"next",t)}function o(t){x(s,r,n,i,o,"throw",t)}i(void 0)}))}}var _=a(14),k={props:{isDarkMode:{type:Boolean,default:!0}},components:{Multiselect:n.a,BarChart:c,LineChart:d,Loader:h,ChartContainer:v},data:function(){return{source:{items:[],customers:[],year:[{id:"2017",name:"2017"},{id:"2018",name:"2018"},{id:"2019",name:"2019"},{id:"2020",name:"2020"},{id:"2021",name:"2021"},{id:"2022",name:"2022"}],periode:[{id:"all",name:"Semua",all:!0},{id:"Q1",name:"Q1",all:!1},{id:"Q2",name:"Q2",all:!1},{id:"Q3",name:"Q3",all:!1},{id:"Q4",name:"Q4",all:!1},{id:"S1",name:"Semester I",all:!1},{id:"S2",name:"Semester II",all:!1}]},model:{year:{id:"2017",name:"2017"},endYear:{id:"2021",name:"2021"},periode:{id:"all",name:"Semua"},item:[],customer:{id:"all",name:"Semua"}},chart:{sales:{labels:[],datasets:[]},salesQty:{labels:[],datasets:[]},salesCustomer:{labels:[],datasets:[]}},loading:{sales:!0,salesQty:!0,salesCustomer:!0},controller:{sales:null,salesQty:null,salesCustomer:null}}},computed:{chartSales:function(){return this.chart.sales},chartSalesQty:function(){return this.chart.salesQty},chartSalesCustomer:function(){return this.chart.salesCustomer},showAllPeriode:function(){return this.model.year.id==this.model.endYear.id},getPeriode:function(){return this.showAllPeriode?this.source.periode:this.source.periode.filter((function(t){return t.all}))}},mounted:function(){this.fetchChart(),this.fetchMasterData(),this.controller.salesQty=new AbortController,this.controller.salesCustomer=new AbortController},methods:{toggleDarkMode:function(){this.$emit("change-mode")},getParams:function(){var t=this.model.year.id,e=this.model.endYear.id,a=this.model.periode.id,r=this.model.item.map((function(t){return t.id})).join(","),n=this.model.customer.id||"";return"year=".concat(t,"&to=").concat(e,"&item_ids=").concat(r,"&customer_ids=").concat(n,"&periode=").concat(a)},fetchSalesChart:function(){var t=this;return w(C().mark((function e(){var a,r,n,s;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading.sales=!0,e.next=3,axios.get("/sales?".concat(t.getParams()));case 3:a=e.sent,r=a.data,n=r.labels,s=r.datasets,t.chart.sales.labels=n,t.chart.sales.datasets=s,t.loading.sales=!1;case 9:case"end":return e.stop()}}),e)})))()},fetchSalesQtyChart:function(){var t=this;return w(C().mark((function e(){var a,r,n,s;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading.salesQty=!0,e.next=3,axios.get("/sales?type=qty&".concat(t.getParams()));case 3:a=e.sent,r=a.data,n=r.labels,s=r.datasets,t.chart.salesQty.labels=n,t.chart.salesQty.datasets=s,t.loading.salesQty=!1;case 9:case"end":return e.stop()}}),e)})))()},fetchSalesCustomerChart:function(){var t=this;return w(C().mark((function e(){var a,r,n,s;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading.salesCustomer=!0,e.next=3,axios.get("/sales?type=customer&".concat(t.getParams()));case 3:a=e.sent,r=a.data,n=r.labels,s=r.datasets,t.chart.salesCustomer.labels=n,t.chart.salesCustomer.datasets=s,t.loading.salesCustomer=!1;case 9:case"end":return e.stop()}}),e)})))()},fetchChart:function(){this.fetchSalesChart(),this.fetchSalesQtyChart(),this.fetchSalesCustomerChart()},fetchItems:function(){var t=this;return w(C().mark((function e(){var a,r;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/items");case 2:a=e.sent,r=a.data.data,t.source.items=g(r);case 5:case"end":return e.stop()}}),e)})))()},fetchCustomers:function(){var t=this;return w(C().mark((function e(){var a,r;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/customers");case 2:a=e.sent,r=a.data.data,t.source.customers=[{id:"all",name:"Semua"}].concat(g(r));case 5:case"end":return e.stop()}}),e)})))()},fetchMasterData:function(){this.fetchItems(),this.fetchCustomers()}},watch:{"model.year":_((function(t){this.fetchChart()}),500),"model.endYear":_((function(t){this.fetchChart()}),500),"model.periode":_((function(t){this.fetchChart()}),500),"model.item":_((function(t){this.fetchChart(),this.fetchMasterData()}),500),"model.customer":_((function(t){this.fetchChart(),this.fetchMasterData()}),500)}},S=(a(15),{components:{Chart:Object(l.a)(k,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-slate-50 dark:bg-slate-900 min-h-screen w-screen"},[e("div",{staticClass:"container px-5 py-5 md:px-10 md:py-10 mx-auto"},[e("div",{staticClass:"flex flex-col gap-y-5"},[e("div",{staticClass:"flex justify-between items-center"},[t._m(0),t._v(" "),e("div",{staticClass:"cursor-pointer",on:{click:t.toggleDarkMode}},[t.isDarkMode?t._e():e("div",[e("svg",{attrs:{width:"32",height:"32",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M54.0001 47.9401C48.6758 48.3913 43.3394 47.2236 38.6901 44.5901C32.5091 41.1095 27.9615 35.3188 26.0454 28.4889C24.1294 21.6589 25.0014 14.3478 28.4701 8.16008C29.1317 6.99108 29.8769 5.87149 30.7001 4.81008C30.846 4.61735 30.9338 4.38701 30.9533 4.14611C30.9727 3.90521 30.9231 3.66374 30.8101 3.45008C30.6939 3.23543 30.5174 3.0595 30.3024 2.94399C30.0874 2.82849 29.8432 2.77846 29.6001 2.80008C24.7695 3.213 20.1175 4.82099 16.063 7.47923C12.0085 10.1375 8.6789 13.7625 6.37403 18.0278C4.06917 22.2931 2.86144 27.0647 2.85962 31.9129C2.8578 36.7611 4.06195 41.5336 6.36361 45.8007C8.66527 50.0677 11.9922 53.6952 16.0447 56.3565C20.0971 59.0178 24.748 60.6292 29.5782 61.0458C34.4085 61.4623 39.2666 60.6709 43.7148 58.7427C48.1631 56.8144 52.0619 53.8101 55.0601 50.0001C55.2095 49.8073 55.3003 49.5757 55.3216 49.3327C55.3429 49.0898 55.2938 48.8459 55.1801 48.6301C55.0687 48.4153 54.8988 48.2365 54.6899 48.1144C54.4811 47.9923 54.2419 47.9318 54.0001 47.9401Z",fill:"black"}}),t._v(" "),e("path",{attrs:{d:"M59.19 15.29C59.1175 15.0701 58.9858 14.8745 58.8094 14.7245C58.633 14.5746 58.4187 14.4761 58.19 14.44L51 13.4L47.79 6.90001C47.6866 6.69134 47.5269 6.51571 47.3291 6.39293C47.1312 6.27014 46.9029 6.20508 46.67 6.20508C46.4371 6.20508 46.2089 6.27014 46.011 6.39293C45.8131 6.51571 45.6534 6.69134 45.55 6.90001L42.34 13.4L35.16 14.4C34.9313 14.4361 34.717 14.5346 34.5406 14.6845C34.3642 14.8345 34.2325 15.0301 34.16 15.25C34.0901 15.4737 34.083 15.7123 34.1395 15.9398C34.1959 16.1673 34.3137 16.3749 34.48 16.54L39.67 21.6L38.45 28.75C38.4177 28.9294 38.4253 29.1137 38.4723 29.2899C38.5193 29.466 38.6046 29.6296 38.722 29.769C38.8395 29.9084 38.9862 30.0202 39.1518 30.0964C39.3174 30.1727 39.4977 30.2114 39.68 30.21C39.8816 30.2089 40.0801 30.161 40.26 30.07L46.68 26.69L53.1 30.07C53.3077 30.1774 53.5411 30.225 53.7742 30.2073C54.0073 30.1897 54.2309 30.1075 54.42 29.97C54.6087 29.8338 54.755 29.6469 54.8417 29.431C54.9284 29.215 54.9521 28.9789 54.91 28.75L53.69 21.6L58.88 16.54C59.0393 16.3788 59.1522 16.1776 59.2068 15.9576C59.2613 15.7376 59.2555 15.507 59.19 15.29V15.29Z",fill:"black"}})])]),t._v(" "),t.isDarkMode?e("div",[e("svg",{staticStyle:{"enable-background":"new 0 0 16 16"},attrs:{fill:"white",width:"32",height:"32",version:"1.1",id:"Layer_1_1_",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 16 16","xml:space":"preserve"}},[e("circle",{attrs:{cx:"8.5",cy:"7.5",r:"4.5"}}),t._v(" "),e("rect",{attrs:{x:"8",width:"1",height:"2"}}),t._v(" "),e("rect",{attrs:{x:"8",y:"13",width:"1",height:"2"}}),t._v(" "),e("rect",{attrs:{x:"14",y:"7",width:"2",height:"1"}}),t._v(" "),e("rect",{attrs:{x:"1",y:"7",width:"2",height:"1"}}),t._v(" "),e("rect",{attrs:{x:"12.596",y:"11.096",transform:"matrix(0.7071 -0.7071 0.7071 0.7071 -4.7175 12.8033)",width:"1",height:"2"}}),t._v(" "),e("rect",{attrs:{x:"3.404",y:"1.904",transform:"matrix(0.7071 -0.7071 0.7071 0.7071 -0.9099 3.6109)",width:"1",height:"2"}}),t._v(" "),e("rect",{attrs:{x:"2.904",y:"11.596",transform:"matrix(0.7071 -0.7071 0.7071 0.7071 -7.4099 6.3033)",width:"2",height:"1"}}),t._v(" "),e("rect",{attrs:{x:"12.096",y:"2.404",transform:"matrix(0.7071 -0.7071 0.7071 0.7071 1.7823 10.1107)",width:"2",height:"1"}})])]):t._e()])]),t._v(" "),e("div",{staticClass:"bg-slate-500 dark:bg-slate-900/75 border rounded-xl py-3 px-6 md:sticky top-0 backdrop-blur z-[9999]"},[e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full md:w-1/5 mb-3 md:mb-2"},[e("div",{staticClass:"px-1"},[e("label",{staticClass:"text-slate-50 font-bold",attrs:{for:""}},[t._v("Tahun Awal")]),t._v(" "),e("multiselect",{attrs:{options:t.source.year,label:"name","track-by":"id",placeholder:"Pilih Tahun",allowEmpty:!1},model:{value:t.model.year,callback:function(e){t.$set(t.model,"year",e)},expression:"model.year"}})],1)]),t._v(" "),e("div",{staticClass:"w-full md:w-1/5 mb-3 md:mb-2"},[e("div",{staticClass:"px-1"},[e("label",{staticClass:"text-slate-50 font-bold",attrs:{for:""}},[t._v("Tahun Akhir")]),t._v(" "),e("multiselect",{attrs:{options:t.source.year,label:"name","track-by":"id",placeholder:"Pilih Tahun",allowEmpty:!1},model:{value:t.model.endYear,callback:function(e){t.$set(t.model,"endYear",e)},expression:"model.endYear"}})],1)]),t._v(" "),e("div",{staticClass:"w-full md:w-1/5 mb-3 md:mb-2 mx:px-2"},[e("div",{staticClass:"px-1"},[e("label",{staticClass:"text-slate-50 font-bold"},[t._v("Periode")]),t._v(" "),e("multiselect",{attrs:{options:t.getPeriode,label:"name","track-by":"id",placeholder:"Pilih Periode",allowEmpty:!1},model:{value:t.model.periode,callback:function(e){t.$set(t.model,"periode",e)},expression:"model.periode"}})],1)]),t._v(" "),e("div",{staticClass:"w-full md:w-1/5 mb-3 md:mb-2 mx:px-2"},[e("div",{staticClass:"px-1"},[e("label",{staticClass:"text-slate-50 font-bold"},[t._v("Barang")]),t._v(" "),e("multiselect",{attrs:{options:t.source.items,label:"name","track-by":"id",placeholder:"Pilih Barang",multiple:""},model:{value:t.model.item,callback:function(e){t.$set(t.model,"item",e)},expression:"model.item"}})],1)]),t._v(" "),e("div",{staticClass:"w-full md:w-1/5 mb-3 md:mb-2 mx:px-2"},[e("div",{staticClass:"px-1"},[e("label",{staticClass:"text-slate-50 font-bold"},[t._v("Pelanggan")]),t._v(" "),e("multiselect",{attrs:{options:t.source.customers,label:"name","track-by":"id",placeholder:"Pilih Pelanggan",allowEmpty:!1},model:{value:t.model.customer,callback:function(e){t.$set(t.model,"customer",e)},expression:"model.customer"}})],1)])])]),t._v(" "),e("div",[e("ChartContainer",{attrs:{chartId:"chart-penjualan",title:"Total Pendapatan Penjualan",loading:t.loading.sales,labels:t.chartSales.labels,datasets:t.chartSales.datasets}})],1),t._v(" "),e("div",{staticClass:"my-1"}),t._v(" "),e("div",[e("ChartContainer",{ref:"chart-penjualan-barang",attrs:{title:"Total Penjualan Barang",chartId:"chart-penjualan-barang",loading:t.loading.salesQty,labels:t.chartSalesQty.labels,datasets:t.chartSalesQty.datasets}})],1),t._v(" "),e("div",{staticClass:"my-1"}),t._v(" "),e("div",[e("ChartContainer",{ref:"chart-penjualan-barang-customer",attrs:{title:"Total Penjualan oleh Pelanggan",chartId:"chart-penjualan-barang-customer",loading:t.loading.salesCustomer,labels:t.chartSalesCustomer.labels,datasets:t.chartSalesCustomer.datasets}})],1)])]),t._v(" "),t._m(1)])}),[function(){var t=this._self._c;return t("div",[t("h3",{staticClass:"text-3xl font-black text-orange-500 dark:text-orange-400"},[this._v("Dashboard")]),this._v(" "),t("span",{staticClass:"text-slate-500 dark:text-slate-300"},[this._v("Menampilkan grafik data penjualan, penjualan oleh barang, penjualan oleh pelanggan")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-slate-500 dark:bg-slate-900 overflow-x-hidden"},[e("div",{staticClass:"border-b"}),t._v(" "),e("div",{staticClass:"text-center pt-5 text-slate-300 pb-5"},[e("h3",{staticClass:"font-bold"},[t._v("Dosen Mata Kuliah Data Warehouse")]),t._v(" "),e("span",[t._v("\n                SAWALI WAHYU, S.Kom, M.Kom., CEAA, CITAP, CGRCPA, CITGP\n            ")]),t._v(" "),e("div",{staticClass:"my-4"}),t._v(" "),e("h3",{staticClass:"font-bold"},[t._v("Anggota Kelompok")]),t._v(" "),e("ul",[e("li",[t._v("Adi Putra Sukma Pratama (20200801266)")]),t._v(" "),e("li",[t._v("Asep Yayat (20200801305)")]),t._v(" "),e("li",[t._v("Dimas Dwi Yulianto (20200801315)")]),t._v(" "),e("li",[t._v("Syaiful Fajri (20200803108)")]),t._v(" "),e("li",[t._v("Yun Prasetyo (20200801267)")])])])])}],!1,null,null,null).exports},data:function(){return{loginDashboard:!1,darkMode:!1}},computed:{isLogin:function(){var t=window.localStorage.getItem("loginsss");return t||this.loginDashboard},isDarkMode:function(){return this.darkMode}},methods:{login:function(){window.localStorage.setItem("loginsss","232"),this.loginDashboard=!0},onChangeMode:function(){this.darkMode=!this.darkMode}}}),L=Object(l.a)(S,(function(){var t=this,e=t._self._c;return e("div",{class:{dark:t.isDarkMode}},[t.isLogin?e("Chart",{attrs:{isDarkMode:t.isDarkMode},on:{"change-mode":t.onChangeMode}}):e("div",{staticClass:"flex bg-slate-50 min-h-screen w-screen justify-center items-center"},[e("div",{staticClass:"bg-white rounded-xl border w-[350px] px-6 py-4 text-center"},[e("h3",{staticClass:"text-3xl text-center font-bold text-slate-900"},[t._v("\n                Login Dashboard\n            ")]),t._v(" "),e("div",{staticClass:"my-2"}),t._v(" "),e("span",{staticClass:"text-center text-slate-500"},[t._v("Masuk untuk melihat grafik penjualan barang")]),t._v(" "),e("div",{staticClass:"my-7"}),t._v(" "),e("div",[e("input",{staticClass:"bg-slate-200/60 border rounded-xl px-6 w-full h-[40px]",attrs:{type:"text",placeholder:"Masukkan Username",autocomplete:"off",value:"asep@gmail.com"}})]),t._v(" "),e("div",{staticClass:"my-3"}),t._v(" "),e("div",[e("input",{staticClass:"bg-slate-200/60 border rounded-xl px-6 w-full h-[40px]",attrs:{type:"password",placeholder:"Masukkan Kata Sandi",autocomplete:"off",value:"xxxx"}})]),t._v(" "),e("div",{staticClass:"my-4"}),t._v(" "),e("button",{staticClass:"bg-slate-900 rounded-xl px-6 w-full h-[40px]",on:{click:t.login}},[e("span",{staticClass:"text-xl font-bold text-slate-50"},[t._v("Masuk")])]),t._v(" "),e("div",{staticClass:"my-4 border-b"}),t._v(" "),e("div",{staticClass:"text-slate-400"},[t._v("\n                Dosen Mata Kuliah\n            ")]),t._v(" "),e("h3",{staticClass:"font-bold text-slate-800"},[t._v("\n                SAWALI WAHYU, S.Kom, M.Kom., CEAA, CITAP, CGRCPA, CITGP\n            ")])])])],1)}),[],!1,null,null,null);e.default=L.exports}]]);