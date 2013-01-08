/**
 * almond 0.2.0 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/**
 * @license RequireJS text 2.0.3 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

(function(){var e,t,n;(function(i){function r(e,t){var n,i,r,o,a,s,c,u,l,d,f=t&&t.split("/"),v=y.map,p=v&&v["*"]||{};if(e&&"."===e.charAt(0)&&t){for(f=f.slice(0,f.length-1),e=f.concat(e.split("/")),u=0;e.length>u;u+=1)if(d=e[u],"."===d)e.splice(u,1),u-=1;else if(".."===d){if(1===u&&(".."===e[2]||".."===e[0]))break;u>0&&(e.splice(u-1,2),u-=2)}e=e.join("/")}if((f||p)&&v){for(n=e.split("/"),u=n.length;u>0;u-=1){if(i=n.slice(0,u).join("/"),f)for(l=f.length;l>0;l-=1)if(r=v[f.slice(0,l).join("/")],r&&(r=r[i])){o=r,a=u;break}if(o)break;!s&&p&&p[i]&&(s=p[i],c=u)}!o&&s&&(o=s,a=c),o&&(n.splice(0,a,o),e=n.join("/"))}return e}function o(e,t){return function(){return v.apply(i,w.call(arguments,0).concat([e,t]))}}function a(e){return function(t){return r(t,e)}}function s(e){return function(t){g[e]=t}}function c(e){if(h.hasOwnProperty(e)){var t=h[e];delete h[e],b[e]=!0,f.apply(i,t)}if(!g.hasOwnProperty(e)&&!b.hasOwnProperty(e))throw Error("No "+e);return g[e]}function u(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function l(t,n,i){e.onResourceLoad&&t&&e.onResourceLoad({defined:n},{id:t},i)}function d(e){return function(){return y&&y.config&&y.config[e]||{}}}var f,v,p,m,g={},h={},y={},b={},w=[].slice;p=function(e,t){var n,i=u(e),o=i[0];return e=i[1],o&&(o=r(o,t),n=c(o)),o?e=n&&n.normalize?n.normalize(e,a(t)):r(e,t):(e=r(e,t),i=u(e),o=i[0],e=i[1],o&&(n=c(o))),{f:o?o+"!"+e:e,n:e,pr:o,p:n}},m={require:function(e){return o(e)},exports:function(e){var t=g[e];return t!==void 0?t:g[e]={}},module:function(e){return{id:e,uri:"",exports:g[e],config:d(e)}}},f=function(e,t,n,r){var a,u,d,f,v,y,w=[];if(r=r||e,"function"==typeof n){for(t=!t.length&&n.length?["require","exports","module"]:t,v=0;t.length>v;v+=1)if(f=p(t[v],r),u=f.f,"require"===u)w[v]=m.require(e);else if("exports"===u)w[v]=m.exports(e),y=!0;else if("module"===u)a=w[v]=m.module(e);else if(g.hasOwnProperty(u)||h.hasOwnProperty(u)||b.hasOwnProperty(u))w[v]=c(u);else{if(!f.p)throw Error(e+" missing "+u);f.p.load(f.n,o(r,!0),s(u),{}),w[v]=g[u]}d=n.apply(g[e],w),e&&(a&&a.exports!==i&&a.exports!==g[e]?g[e]=a.exports:d===i&&y||(g[e]=d))}else e&&(g[e]=n);l(e,g,w)},e=t=v=function(e,t,n,r,o){return"string"==typeof e?m[e]?m[e](t):c(p(e,t).f):(e.splice||(y=e,t.splice?(e=t,t=n,n=null):e=i),t=t||function(){},"function"==typeof n&&(n=r,r=o),r?f(i,e,t,n):setTimeout(function(){f(i,e,t,n)},15),v)},v.config=function(e){return y=e,v},n=function(e,t,n){t.splice||(n=t,t=[]),h[e]=[e,t,n]},n.amd={jQuery:!0}})(),n("vendor/almond-custom",function(){}),n("durandal/system",["require"],function(t){var n=!0,i=Object.keys,r=Object.prototype.hasOwnProperty,o=Object.prototype.toString;Array.prototype.forEach&&Function.prototype.bind&&("object"==typeof console||"function"==typeof console)&&"object"==typeof console.log&&["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(e){console[e]=this.call(console[e],console)},Function.prototype.bind),e.onResourceLoad=function(e,t){var n=e.defined[t.id];if(n)return"function"==typeof n?(n.prototype.__moduleId__=t.id,void 0):("string"!=typeof n&&(n.__moduleId__=t.id),void 0)};var a={getModuleId:function(e){return e?e.__moduleId__:null},debug:function(e){return 1!=arguments.length?n:(n=e,n?this.log("Debug mode enabled."):this.log("Debug mode disabled."),void 0)},isArray:function(e){return"[object Array]"===o.call(e)},log:function(){if(n){var e=this;if("undefined"!=typeof console&&"function"==typeof console.log)if(window.opera)for(var t=0;arguments.length>t;)console.log("Item "+(t+1)+": "+arguments[t]),t++;else 1==Array.prototype.slice.call(arguments).length&&"string"==typeof Array.prototype.slice.call(arguments)[0]?console.log(""+Array.prototype.slice.call(arguments)):console.log(Array.prototype.slice.call(arguments));else if(Function.prototype.bind||"undefined"==typeof console||"object"!=typeof console.log)if(document.getElementById("firebug-lite"))setTimeout(function(){e.log(Array.prototype.slice.call(arguments))},500);else{var i=document.createElement("script");i.type="text/javascript",i.id="firebug-lite",i.src="https://getfirebug.com/firebug-lite.js",document.getElementsByTagName("HEAD")[0].appendChild(i),setTimeout(function(){e.log(Array.prototype.slice.call(arguments))},2e3)}else Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments))}},defer:function(e){return $.Deferred(e)},guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=0|16*Math.random(),n="x"==e?t:8|3&t;return n.toString(16)})},acquire:function(){var e=Array.prototype.slice.call(arguments,0);return this.defer(function(n){t(e,function(){var e=arguments;setTimeout(function(){n.resolve.apply(n,e)},1)})}).promise()}};return a.keys=i||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)r.call(e,n)&&(t[t.length]=n);return t},a}),n("durandal/dom",["require","./system"],function(e){var t=e("./system");return{ready:function(){return t.defer(function(e){$(function(){e.resolve()})}).promise()},getElementById:function(e){return document.getElementById(e)},createElement:function(e){return document.createElement(e)},parseHTML:function(e){return $(e).get(0)}}}),n("durandal/viewEngine",["require","./dom"],function(e){var t=e("./dom");return{viewExtension:".html",pluginPath:"text",createView:function(e,n){var i=t.parseHTML(n);return i.setAttribute("data-view",e),i}}}),n("durandal/viewLocator",["require","./system","./viewEngine"],function(e){var t=e("./system"),n=e("./viewEngine");return{locateViewForObject:function(e){var n;if(e.getView&&(n=e.getView()))return this.locateView(n);if(e.viewUrl)return this.locateView(e.viewUrl);var i=t.getModuleId(e);return i?this.locateView(this.convertModuleIdToViewUrl(i)):this.locateView(this.determineFallbackViewUrl(e))},convertModuleIdToViewUrl:function(e){return e},determineFallbackViewUrl:function(e){var t=/function (.{1,})\(/,n=t.exec(""+e.constructor),i=n&&n.length>1?n[1]:"";return"views/"+i},convertViewUrlToAreaUrl:function(e,t){return t},locateView:function(e,i){var r=this;return t.defer(function(o){if("string"==typeof e){-1!=e.indexOf(n.viewExtension)&&(e=e.substring(0,e.length-n.viewExtension.length)),i&&(e=r.convertViewUrlToAreaUrl(i,e));var a=n.pluginPath+"!"+e+n.viewExtension;t.acquire(a).then(function(t){o.resolve(n.createView(e,t))})}else o.resolve(e)}).promise()}}}),n("durandal/viewModelBinder",["require","./system"],function(e){function t(e,t,i){if(!t||!e)return n.log("Insufficent Information to Bind",t,e),void 0;if(!t.getAttribute)return n.log("Unexpected View Type",t,e),void 0;var r=t.getAttribute("data-view");try{n.log("Binding",r,e),i()}catch(o){n.log(o.message,r,e)}}var n=e("./system");return{bindContext:function(e,n,i){if(i){var r=e.createChildContext(i);t(r,n,function(){ko.applyBindingsToNode(n,null,r)})}else t(e,n,function(){ko.applyBindingsToNode(n,null,e)})},bind:function(e,n){t(e,n,function(){ko.applyBindings(e,n),e.setView&&e.setView(n)})}}}),n("durandal/composition",["require","./viewLocator","./viewModelBinder","./viewEngine","./system"],function(e){function t(e){return e.model.activate&&(s.activateDuringComposition&&void 0==e.activate||e.activate)}function n(e,n,i){i.transition(e,n,i).then(function(){n&&i.model&&(t(i)&&(a.log("Composition Activating",i.model),i.model.activate()),i.model.viewAttached&&i.model.viewAttached(n)),i.afterCompose&&i.afterCompose(e,n,i)})}var i=e("./viewLocator"),r=e("./viewModelBinder"),o=e("./viewEngine"),a=e("./system"),s={activateDuringComposition:!1,convertTransitionToModuleId:function(e){return"transitions/"+e},defaultTransition:function(e,t){return a.defer(function(n){t?ko.virtualElements.setDomNodeChildren(e,[t]):ko.virtualElements.emptyNode(e),n.resolve()}).promise()},switchContent:function(e,t,i){if(i.transition=i.transition||this.defaultTransition,"string"==typeof i.transition){var r=this.convertTransitionToModuleId(i.transition);a.acquire(r).then(function(r){i.transition=r,n(e,t,i)})}else n(e,t,i)},bindAndShow:function(e,t,n){n.beforeBind&&n.beforeBind(e,t,n),n.preserveContext&&n.bindingContext?r.bindContext(n.bindingContext,t,n.model):n.model?r.bind(n.model,t):t&&r.bind({},t),this.switchContent(e,t,n)},defaultStrategy:function(e){return i.locateViewForObject(e.model)},getSettings:function(e){var t={},n=ko.utils.unwrapObservable(e())||{};if("string"==typeof n)return n;var i=a.getModuleId(n);if(i)return{model:n};for(var r in n)if("string"==typeof r){var o=ko.utils.unwrapObservable(n[r]);t[r]=o}return t},executeStrategy:function(e,t){t.strategy(t).then(function(n){s.bindAndShow(e,n,t)})},inject:function(e,t){return t.model?t.view?(i.locateView(t.view,t.area).then(function(n){s.bindAndShow(e,n,t)}),void 0):((void 0===t.view||t.view)&&(t.strategy||(t.strategy=this.defaultStrategy),"string"==typeof t.strategy?a.acquire(t.strategy).then(function(n){t.strategy=n,s.executeStrategy(e,t)}):this.executeStrategy(e,t)),void 0):(this.bindAndShow(e,null,t),void 0)},compose:function(e,t,n){"string"==typeof t&&(t=-1!==t.indexOf(o.viewExtension,t.length-o.viewExtension.length)?{view:t}:{model:t});var r=a.getModuleId(t);r&&(t={model:t}),t.bindingContext=n,t.model?"string"==typeof t.model?a.acquire(t.model).then(function(n){t.model="function"==typeof n?new n(e,t):n,s.inject(e,t)}):s.inject(e,t):t.view?(t.area=t.area||"partial",t.preserveContext=!0,i.locateView(t.view,t.area).then(function(n){s.bindAndShow(e,n,t)})):this.bindAndShow(e,null,t)}};return ko.bindingHandlers.compose={update:function(e,t,n,i,r){var o=s.getSettings(t);s.compose(e,o,r)}},ko.virtualElements.allowedBindings.compose=!0,s}),n("durandal/widget",["require","./system","./composition"],function(e){var t=e("./system"),n=e("./composition"),i="data-part",r="["+i+"]",o={},a={},s={getParts:function(e){var n={};t.isArray(e)||(e=[e]);for(var o=0;e.length>o;o++){var a=e[o];if(a.getAttribute){var s=a.getAttribute(i);s&&(n[s]=a);for(var c=$(r,a),u=0;c.length>u;u++){var l=c.get(u);n[l.getAttribute(i)]=l}}}return n},getSettings:function(e){var t={},n=ko.utils.unwrapObservable(e())||{};if("string"==typeof n)t=n;else for(var i in n)if("string"==typeof i){var r=ko.utils.unwrapObservable(n[i]);t[i]=r}return t},registerKind:function(e){ko.bindingHandlers[e]={init:function(){return{controlsDescendantBindings:!0}},update:function(t,n,i,r,o){var a=s.getSettings(n);a.kind=e,s.create(t,a,o)}},ko.virtualElements.allowedBindings[e]=!0},mapKind:function(e,t,n){t&&(a[e]=t),n&&(o[e]=n)},convertKindToModuleId:function(e){return o[e]||"widgets/"+e+"/controller"},convertKindToView:function(e){return a[e]||"widgets/"+e+"/view"},beforeBind:function(e,t){var n=s.getParts(e),i=s.getParts(t);for(var r in n)$(i[r]).replaceWith(n[r])},createCompositionSettings:function(e){return e.model||(e.model=this.convertKindToModuleId(e.kind)),e.view||(e.view=this.convertKindToView(e.kind)),e.preserveContext=!0,e.beforeBind=this.beforeBind,e},create:function(e,t,i){"string"==typeof t&&(t={kind:t});var r=s.createCompositionSettings(t);n.compose(e,r,i)}};return ko.bindingHandlers.widget={init:function(){return{controlsDescendantBindings:!0}},update:function(e,t,n,i,r){var o=s.getSettings(t);s.create(e,o,r)}},ko.virtualElements.allowedBindings.widget=!0,s}),n("durandal/viewModel",["require","./system"],function(e){function t(e){return void 0==e&&(e={}),e.closeOnDeactivate||(e.closeOnDeactivate=!0),e.beforeActivate||(e.beforeActivate=function(e){return e}),e.afterDeactivate||(e.afterDeactivate=function(){}),e.interpretGuard||(e.interpretGuard=s.defaultInterpretGuard),e}function n(e,t,n,i){if(e&&e.deactivate){c.log("Deactivating",e);var r=e.deactivate(t);r&&r.then?r.then(function(){n.afterDeactivate(e,t),i.resolve(!0)}):(n.afterDeactivate(e,t),i.resolve(!0))}else e&&n.afterDeactivate(e,t),i.resolve(!0)}function i(e,t,n){if(e)if(e.activate){c.log("Activating",e);var i=e.activate();i&&i.then?i.then(function(){t(e),n(!0)}):(t(e),n(!0))}else t(e),n(!0);else n(!0)}function r(e,t,n){return c.defer(function(i){if(e&&e.canDeactivate){var r=e.canDeactivate(t);r.then?r.then(function(e){i.resolve(n.interpretGuard(e))}):i.resolve(n.interpretGuard(r))}else i.resolve(!0)}).promise()}function o(e,t,n){return c.defer(function(i){if(e==t())return i.resolve(!0),void 0;if(e&&e.canActivate){var r=e.canActivate();r.then?r.then(function(e){i.resolve(n.interpretGuard(e))}):i.resolve(n.interpretGuard(r))}else i.resolve(!0)}).promise()}function a(e,a){var s=ko.observable(null);a=t(a);var u=ko.computed({read:function(){return s()},write:function(e){u.activateItem(e)}});return u.isActivating=ko.observable(!1),u.canDeactivateItem=function(e,t){return r(e,t,a)},u.deactivateItem=function(e,t){return c.defer(function(i){u.canDeactivateItem(e,t).then(function(r){r?n(e,t,a,i):(u.notifySubscribers(),i.resolve(!1))})})},u.canActivateItem=function(e){return o(e,s,a)},u.activateItem=function(e){return c.defer(function(t){if(u.isActivating())return t.resolve(!1),void 0;u.isActivating(!0);var r=s();return r==e?(u.isActivating(!1),t.resolve(!0),void 0):(u.canDeactivateItem(r,a.closeOnDeactivate).then(function(o){o?u.canActivateItem(e).then(function(o){o?c.defer(function(e){n(r,a.closeOnDeactivate,a,e)}).promise().then(function(){e=a.beforeActivate(e),i(e,s,function(e){u.isActivating(!1),t.resolve(e)})}):(u.notifySubscribers(),u.isActivating(!1),t.resolve(!1))}):(u.notifySubscribers(),u.isActivating(!1),t.resolve(!1))}),void 0)}).promise()},u.canActivate=function(){var t;return e?(t=e,e=!1):t=u(),u.canActivateItem(t)},u.activate=function(){var t;return e?(t=e,e=!1):t=u(),u.activateItem(t)},u.canDeactivate=function(e){return u.canDeactivateItem(u(),e)},u.deactivate=function(e){return u.deactivateItem(u(),e)},u.includeIn=function(e){e.canActivate=function(){return u.canActivate()},e.activate=function(){return u.activate()},e.canDeactivate=function(e){return u.canDeactivate(e)},e.deactivate=function(e){return u.deactivate(e)}},a.includeIn?u.includeIn(a.includeIn):e&&u.activate(),u.forItems=function(e){a.closeOnDeactivate=!1,a.determineNextItemToActivate=function(e,t){var n=t-1;return-1==n&&e.length>1?e[1]:n>-1&&e.length-1>n?e[n]:null},a.beforeActivate=function(t){var n=u();if(t){var i=e.indexOf(t);-1==i?e.push(t):t=e()[i]}else t=a.determineNextItemToActivate(e,n?e.indexOf(n):0);return t},a.afterDeactivate=function(t,n){n&&e.remove(t)};var t=u.canDeactivate;u.canDeactivate=function(n){return n?c.defer(function(t){function i(){for(var e=0;o.length>e;e++)if(!o[e])return t.resolve(!1),void 0;t.resolve(!0)}for(var r=e(),o=[],a=0;r.length>a;a++)u.canDeactivateItem(r[a],n).then(function(e){o.push(e),o.length==r.length&&i()})}).promise():t};var n=u.deactivate;return u.deactivate=function(t){return t?c.defer(function(n){function i(i){u.deactivateItem(i,t).then(function(){o++,e.remove(i),o==a&&n.resolve()})}for(var r=e(),o=0,a=r.length,s=0;a>s;s++)i(r[s])}).promise():n},u},u}var s,c=e("./system");return s={defaultInterpretGuard:function(e){return"string"==typeof e?"Yes"==e||"Ok"==e:e},activator:a}}),n("durandal/modalDialog",["require","./composition","./system","./viewModel"],function(e){var t=e("./composition"),n=e("./system"),i=e("./viewModel"),r={},o=0,a={currentZIndex:1e3,getNextZIndex:function(){return++this.currentZIndex},isModalOpen:function(){return o>0},getContext:function(e){return r[e||"default"]},addContext:function(e,t){t.name=e,t.modals=ko.observableArray([]),t.activator=i.activator().forItems(t.modals),r[e]=t;var n="show"+e.substr(0,1).toUpperCase()+e.substr(1);this[n]=function(t){return this.show(t,e)}},createCompositionSettings:function(e,t){var n={model:e,activate:!1};return t.afterCompose&&(n.afterCompose=t.afterCompose),n},show:function(e,i){var a=this,s=r[i||"default"];return n.defer(function(n){s.activator.activateItem(e).then(function(i){if(i){var r=e.modal={owner:e,context:s,close:function(t){s.activator.deactivateItem(e,!0).then(function(i){i&&(o--,s.removeHost(r),delete e.modal,n.resolve(t))})}};r.settings=a.createCompositionSettings(e,s),s.addHost(r),o++,t.compose(r.host,r.settings)}else n.resolve(!1)})}).promise()}};return a.addContext("default",{blockoutOpacity:.2,removeDelay:200,addHost:function(e){var t=$("body"),n=$('<div class="modalBlockout"></div>').css({"z-index":a.getNextZIndex(),opacity:this.blockoutOpacity}).appendTo(t),i=$('<div class="modalHost"></div>').css({"z-index":a.getNextZIndex()}).appendTo(t);e.host=i.get(0),e.blockout=n.get(0)},removeHost:function(e){$(e.host).css("opacity",0),$(e.blockout).css("opacity",0),setTimeout(function(){$(e.host).remove(),$(e.blockout).remove()},this.removeDelay)},afterCompose:function(e,t,n){var i=$(t),r=i.width(),o=i.height();i.css({"margin-top":""+-o/2+"px","margin-left":""+-r/2+"px"}),$(n.model.modal.host).css("opacity",1),$(t).hasClass("autoclose")&&$(n.model.modal.blockout).click(function(){n.model.modal.close()}),$(".autofocus",t).each(function(){$(this).focus()})}}),a}),n("durandal/events",["require","./system"],function(e){var t=e("./system"),n=/\s+/,i=function(){},r=function(e,t){this.owner=e,this.events=t};return r.prototype.then=function(e,t){if(!e)return this;for(var n,i=this.owner.callbacks||(this.owner.callbacks={}),r=this.events,o=0;r.length>o;o++){var a=r[o];n=i[a]||(i[a]=[]),n.push(e,t)}return this},i.prototype.on=function(e,t,i){var o,a,s;if(e=e.split(n),t){for(o=this.callbacks||(this.callbacks={});a=e.shift();)s=o[a]||(o[a]=[]),s.push(t,i);return this}return new r(this,e)},i.prototype.off=function(e,i,r){var o,a,s,c;if(!(a=this.callbacks))return this;if(!(e||i||r))return delete this.callbacks,this;for(e=e?e.split(n):t.keys(a);o=e.shift();)if((s=a[o])&&(i||r))for(c=s.length-2;c>=0;c-=2)i&&s[c]!==i||r&&s[c+1]!==r||s.splice(c,2);else delete a[o];return this},i.prototype.trigger=function(e){var t,i,r,o,a,s,c,u;if(!(i=this.callbacks))return this;for(u=[],e=e.split(n),o=1,a=arguments.length;a>o;o++)u[o-1]=arguments[o];for(;t=e.shift();){if((c=i.all)&&(c=c.slice()),(r=i[t])&&(r=r.slice()),r)for(o=0,a=r.length;a>o;o+=2)r[o].apply(r[o+1]||this,u);if(c)for(s=[t].concat(u),o=0,a=c.length;a>o;o+=2)c[o].apply(c[o+1]||this,s)}return this},i.prototype.proxy=function(e){var t=this;return function(n){t.trigger(e,n)}},i.includeIn=function(e){e.on=i.prototype.on,e.off=i.prototype.off,e.trigger=i.prototype.trigger,e.proxy=i.prototype.proxy},i}),n("durandal/app",["require","./system","./viewEngine","./composition","./widget","./dom","./modalDialog","./events"],function(e){var t,n=e("./system"),i=e("./viewEngine"),r=e("./composition"),o=(e("./widget"),e("./dom")),a=e("./modalDialog"),s=e("./events"),c={showModal:function(e){return a.show(e)},showMessage:function(e,n,i){return a.show(new t(e,n,i))},start:function(){return n.defer(function(e){n.debug("true"===$("meta[name=debug]").attr("content")),o.ready().then(function(){n.log("Starting Application"),n.acquire("./messageBox").then(function(i){t=i,e.resolve(),n.log("Started Application")})})}).promise()},setRoot:function(e,t){var n=o.getElementById(t||"applicationHost"),a={activate:!0};"string"==typeof e?-1!=e.indexOf(i.viewExtension)?a.view=e:a.model=e:a.model=e,r.compose(n,a)},makeFit:function(){document.body.ontouchmove&&(document.body.ontouchmove=function(e){e.preventDefault()})}};return s.includeIn(c),c}),t.config({paths:{text:"vendor/text"}}),n("main",["require","durandal/app","durandal/viewLocator"],function(e){var t=e("durandal/app"),n=e("durandal/viewLocator");t.start().then(function(){n.convertModuleIdToViewUrl=function(e){return e.replace("viewModel","view")},t.makeFit(),t.setRoot("viewModels/shell")})}),n("durandal/http",[],function(){return{defaultJSONPCallbackParam:"callback",get:function(e,t){return $.ajax(e,t)},jsonp:function(e,t,n){return-1==e.indexOf("=?")&&(n=n||this.defaultJSONPCallbackParam,e+=-1==e.indexOf("?")?"?":"&",e+=n+"=?"),$.ajax({url:e,dataType:"jsonp",data:t})},post:function(e,t){return $.ajax({url:e,data:JSON.stringify(t),type:"POST",contentType:"application/json",dataType:"json"})}}}),n("text",["module"],function(e){var n,i,r=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],o=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,a=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,s="undefined"!=typeof location&&location.href,c=s&&location.protocol&&location.protocol.replace(/\:/,""),u=s&&location.hostname,l=s&&(location.port||void 0),d=[],f=e.config&&e.config()||{};return n={version:"2.0.3",strip:function(e){if(e){e=e.replace(o,"");var t=e.match(a);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:f.createXhr||function(){var e,t,n;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(t=0;3>t;t+=1){n=r[t];try{e=new ActiveXObject(n)}catch(i){}if(e){r=[n];break}}return e},parseName:function(e){var t=!1,n=e.indexOf("."),i=e.substring(0,n),r=e.substring(n+1,e.length);return n=r.indexOf("!"),-1!==n&&(t=r.substring(n+1,r.length),t="strip"===t,r=r.substring(0,n)),{moduleName:i,ext:r,strip:t}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,t,i,r){var o,a,s,c=n.xdRegExp.exec(e);return c?(o=c[2],a=c[3],a=a.split(":"),s=a[1],a=a[0],!(o&&o!==t||a&&a.toLowerCase()!==i.toLowerCase()||(s||a)&&s!==r)):!0},finishLoad:function(e,t,i,r){i=t?n.strip(i):i,f.isBuild&&(d[e]=i),r(i)},load:function(e,t,i,r){if(r.isBuild&&!r.inlineText)return i(),void 0;f.isBuild=r.isBuild;var o=n.parseName(e),a=o.moduleName+"."+o.ext,d=t.toUrl(a),v=f.useXhr||n.useXhr;!s||v(d,c,u,l)?n.get(d,function(t){n.finishLoad(e,o.strip,t,i)},function(e){i.error&&i.error(e)}):t([a],function(e){n.finishLoad(o.moduleName+"."+o.ext,o.strip,e,i)})},write:function(e,t,i){if(d.hasOwnProperty(t)){var r=n.jsEscape(d[t]);i.asModule(e+"!"+t,"define(function () { return '"+r+"';});\n")}},writeFile:function(e,t,i,r,o){var a=n.parseName(t),s=a.moduleName+"."+a.ext,c=i.toUrl(a.moduleName+"."+a.ext)+".js";n.load(s,i,function(){var t=function(e){return r(c,e)};t.asModule=function(e,t){return r.asModule(e,c,t)},n.write(e,s,t,o)},o)}},"node"===f.env||!f.env&&"undefined"!=typeof process&&process.versions&&process.versions.node?(i=t.nodeRequire("fs"),n.get=function(e,t){var n=i.readFileSync(e,"utf8");0===n.indexOf("﻿")&&(n=n.substring(1)),t(n)}):"xhr"===f.env||!f.env&&n.createXhr()?n.get=function(e,t,i){var r=n.createXhr();r.open("GET",e,!0),f.onXhr&&f.onXhr(r,e),r.onreadystatechange=function(){var n,o;4===r.readyState&&(n=r.status,n>399&&600>n?(o=Error(e+" HTTP status: "+n),o.xhr=r,i(o)):t(r.responseText))},r.send(null)}:("rhino"===f.env||!f.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java)&&(n.get=function(e,t){var n,i,r="utf-8",o=new java.io.File(e),a=java.lang.System.getProperty("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o),r)),c="";try{for(n=new java.lang.StringBuffer,i=s.readLine(),i&&i.length()&&65279===i.charAt(0)&&(i=i.substring(1)),n.append(i);null!==(i=s.readLine());)n.append(a),n.append(i);c=""+n+""}finally{s.close()}t(c)}),n}),n("text!durandal/messageBox.html",[],function(){return'<div class="messageBox">\r\n    <div class="modal-header">\r\n        <h3 data-bind="html: title"></h3>\r\n    </div>\r\n    <div class="modal-body">\r\n        <p class="message" data-bind="html: message"></p>\r\n    </div>\r\n    <div class="modal-footer" data-bind="foreach: options">\r\n        <button class="btn" data-bind="click: function () { $parent.selectOption($data); }, html: $data, css: { \'btn-primary\': $index() == 0, autofocus: $index() == 0 }"></button>\r\n    </div>\r\n</div>'}),n("durandal/messageBox",[],function(){var e=function(t,n,i){this.message=t,this.title=n||e.defaultTitle,this.options=i||e.defaultOptions};return e.prototype.selectOption=function(e){this.modal.close(e)},e.defaultTitle="Application",e.defaultOptions=["Ok"],e}),n("infrastructure/router",["require","durandal/system"],function(e){function t(e,t){function n(){return e.apply(this,t)}return n.prototype=e.prototype,new n}var n=e("durandal/system"),i={};return{navigation:[],mapRoute:function(e,t,n){var r={url:e,moduleId:t,name:n};i[e]=r,n&&this.navigation.push(r)},enable:function(e,r){function o(r){var o=r.split("/"),a=o[0],s=o.splice(1);n.acquire(i[a].moduleId).then(function(n){"function"==typeof n?e(t(n,s)):e(n)})}var a=Sammy(function(e){e.get("",function(){var e=this.path.split("#/");2==e.length?o(e[1]):o(r)})});a._checkFormSubmission=function(){return!1},a.run()}}}),n("viewModels/flickr",["require","durandal/http","durandal/app"],function(e){var t=e("durandal/http"),n=e("durandal/app"),i=function(){this.displayName="Flickr",this.images=ko.observableArray([])};return i.prototype.activate=function(){var e=this;return t.jsonp("http://api.flickr.com/services/feeds/photos_public.gne",{tags:"mount ranier",tagmode:"any",format:"json"},"jsoncallback").then(function(t){e.images(t.items)})},i.prototype.select=function(e){e.viewUrl="views/detail",n.showModal(e)},i}),n("viewModels/shell",["require","infrastructure/router","durandal/viewModel","durandal/app"],function(e){var t=e("infrastructure/router"),n=e("durandal/viewModel"),i=e("durandal/app"),r={activeItem:n.activator(),router:t,search:function(){i.showMessage("Search not yet implemented...")}};return t.mapRoute("welcome","viewModels/welcome","Welcome"),t.mapRoute("flickr","viewModels/flickr","Flickr"),t.enable(r.activeItem,"welcome"),r}),n("viewModels/welcome",["require"],function(){var e=function(){this.displayName="Welcome to the Durandal Starter Project!",this.description="Durandal is a cross-device, cross-platform client framework written in JavaScript and designed to make building Single Page Applications (SPAs) easy to create and maintain.",this.features=["Develop apps for PC, Mac, Linux, Android and iOS.","Built on top of the industry leading and proven libraries jQuery, Knockout and RequireJS.","Enables clean and simple MVC, MVVM and MVP patterned architecures through intuitive module conventions.","CommonJS Promises are embraced everywhere in the API for a robust, consistent approach to async programming.","The first HTML/JS framework where UI Composition is embraced at the very core and flows outward to everything.","A simple app model provides you with an app start lifecycle, modal dialogs, message boxes and an event aggregator.","Elegant creation of reusable, databindable, skinnable and templatable widgets.","Leverage optional components for screen activation and deactivation, enabling easy handling of complex screen states.","Optimize all your HTML and JavaScript into a single file for deploy.","Easily customize any part of the frameork.","Integrates beautifully with other libraries such as SammyJS and Bootstrap.","Works with any backend technology."]};return e}),n("text!views/detail.html",[],function(){return'<div class="messageBox autoclose" style="max-width: 425px">\r\n    <div class="modal-header">\r\n        <h3>Details</h3>\r\n    </div>\r\n    <div class="modal-body">\r\n        <p data-bind="html: description"></p>\r\n    </div>\r\n</div>'}),n("text!views/flickr.html",[],function(){return'<section>\r\n    <h2 data-bind="html: displayName"></h2>\r\n    <div class="row-fluid">\r\n        <ul class="thumbnails" data-bind="foreach: images">\r\n            <li>\r\n                <a href="#" class="thumbnail" data-bind="click:$parent.select">\r\n                    <img style="width: 260px; height: 180px;" data-bind="attr: { src: media.m }"/>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</section>'}),n("text!views/shell.html",[],function(){return'<div>\r\n    <div class="navbar navbar-fixed-top">\r\n        <div class="navbar-inner">\r\n            <a class="brand" href="/">\r\n                <i class="icon-home" style="font-size: 18px"></i>\r\n                <span>Durandal</span>\r\n            </a>\r\n            <ul class="nav" data-bind="foreach: router.navigation">\r\n                <li data-bind="css: { active: $parent.activeItem() && (moduleId == $parent.activeItem().__moduleId__) }">\r\n                    <a data-bind="attr: { href: \'#/\' + url }, html: name"></a>\r\n                </li>\r\n            </ul>\r\n            <div class="loader pull-right" data-bind="css: { active: !activeItem() || activeItem.isActivating }">\r\n                <i class="icon-spinner icon-2x icon-spin"></i>\r\n            </div>\r\n            <form class="navbar-search pull-right" data-bind="submit:search">\r\n                <input type="text" class="search-query" placeholder="Search">\r\n            </form>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class="container-fluid">\r\n        <!--ko compose: activeItem--><!--/ko-->\r\n    </div>\r\n</div>'}),n("text!views/welcome.html",[],function(){return'<section>\r\n    <h2 data-bind="html:displayName"></h2>\r\n    <blockquote data-bind="html:description"></blockquote>\r\n    <h3>Features</h3>\r\n    <ul data-bind="foreach: features">\r\n        <li data-bind="html: $data"></li>\r\n    </ul>\r\n    <div class="alert alert-success">\r\n      <h4>Read Me Please</h4>\r\n        For more information about this starter project\'s architecture, please see the readme file located in the root of the project.\r\n        For general documenation please visit <a href="https://github.com/EisenbergEffect/Durandal/wiki">the wiki</a> and if you can\'t find \r\n        answers to your questions there, we hope you will join our <a href="https://groups.google.com/forum/?fromgroups#!forum/durandaljs">google group</a>.\r\n    </div>\r\n</section>'}),t(["main"])})();