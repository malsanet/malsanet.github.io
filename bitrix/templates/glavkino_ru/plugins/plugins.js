/*! jQuery UI - v1.12.1 - 2017-02-11
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}t.ui=t.ui||{},t.ui.version="1.12.1";var i=0,s=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,n,o=s.call(arguments,1),a=0,r=o.length;r>a;a++)for(i in o[a])n=o[a][i],o[a].hasOwnProperty(i)&&void 0!==n&&(e[i]=t.isPlainObject(n)?t.isPlainObject(e[i])?t.widget.extend({},e[i],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=s.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r),i!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new i(o,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o=Math.max,a=Math.abs,r=/left|center|right/,l=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",t=h.exec(i[0]),e=h.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(k.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var s,r,l=t(this),h=l.outerWidth(),c=l.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=h+d+i(this,"marginRight")+y.width,C=c+_+i(this,"marginBottom")+y.height,D=t.extend({},m),T=e(k.my,l.outerWidth(),l.outerHeight());"right"===n.my[0]?D.left-=h:"center"===n.my[0]&&(D.left-=h/2),"bottom"===n.my[1]?D.top-=c:"center"===n.my[1]&&(D.top-=c/2),D.left+=T[0],D.top+=T[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:h,elemHeight:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+T[0],u[1]+T[1]],my:n.my,at:n.at,within:b,elem:l})}),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-h,s=g.top-D.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:l,left:D.left,top:D.top,width:h,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};h>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(s+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,u)}),l.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-r-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>a(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-r-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,(i>0||u>a(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}}),t.ui.focusable=function(i,s){var n,o,a,r,l,h=i.nodeName.toLowerCase();return"area"===h?(n=i.parentNode,o=n.name,i.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(h)?(r=!i.disabled,r&&(l=t(i).closest("fieldset")[0],l&&(r=!l.disabled))):r="a"===h?i.href||s:s,r&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){function s(e,i,s,o){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,s(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,s(this,e,!0,n)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1")}}(),t.fn.labels=function(){var e,i,s,n,o;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),s=this.attr("id"),s&&(e=this.eq(0).parents().last(),o=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(s)+"']",n=n.add(o.find(i).addBack(i))),this.pushStack(n))},t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),s=null!=i;return(!s||i>=0)&&t.ui.focusable(e,s)}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}})});
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&Q(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),N.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=X.call(this,c[0],"y"),c[1]=X.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=ne()?0:d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",G(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",G(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&Q(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){o.data(a);N.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),N.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),$(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),$(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir='"+n.langDir+"' /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=oe(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' "+r+" />","<a href='#' class='"+d[14]+"' "+r+" />","<a href='#' class='"+d[15]+"' "+r+" />","<a href='#' class='"+d[16]+"' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(Q(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),G(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),G(t,"_resetX")}},T=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),W.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(I.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}P.call(this),U.call(this),i.advanced.autoScrollOnFocus&&H.call(this),i.scrollButtons.enable&&F.call(this),i.keyboard.enable&&q.call(this),n.bindEvents=!0}},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents&&(e(document).add(e(!A()||top.document)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),$(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),$(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),$(s[0],"onCompleteTimeout"),o.bindEvents=!1)},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document&&null!==frameElement?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=A()&&t.target.ownerDocument!==top.document&&null!==frameElement?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){function t(e,t,a,n){if(h[0].idleTimer=d.scrollInertia<233?250:0,o.attr("id")===f[1])var i="x",s=(o[0].offsetLeft-t+n)*l.scrollRatio.x;else var i="y",s=(o[0].offsetTop-e+a)*l.scrollRatio.y;G(r,s.toString(),{dir:i,drag:!0})}var o,n,i,r=e(this),l=r.data(a),d=l.opt,u=a+"_"+l.idx,f=["mCSB_"+l.idx+"_dragger_vertical","mCSB_"+l.idx+"_dragger_horizontal"],h=e("#mCSB_"+l.idx+"_container"),m=e("#"+f[0]+",#"+f[1]),p=d.advanced.releaseDraggableSelectors?m.add(e(d.advanced.releaseDraggableSelectors)):m,g=d.advanced.extraDraggableSelectors?e(!A()||top.document).add(e(d.advanced.extraDraggableSelectors)):e(!A()||top.document);m.bind("contextmenu."+u,function(e){e.preventDefault()}).bind("mousedown."+u+" touchstart."+u+" pointerdown."+u+" MSPointerDown."+u,function(t){if(t.stopImmediatePropagation(),t.preventDefault(),ee(t)){c=!0,s&&(document.onselectstart=function(){return!1}),L.call(h,!1),Q(r),o=e(this);var a=o.offset(),l=O(t)[0]-a.top,u=O(t)[1]-a.left,f=o.height()+a.top,m=o.width()+a.left;f>l&&l>0&&m>u&&u>0&&(n=l,i=u),C(o,"active",d.autoExpandScrollbar)}}).bind("touchmove."+u,function(e){e.stopImmediatePropagation(),e.preventDefault();var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;t(n,i,r,l)}),e(document).add(g).bind("mousemove."+u+" pointermove."+u+" MSPointerMove."+u,function(e){if(o){var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;if(n===r&&i===l)return;t(n,i,r,l)}}).add(p).bind("mouseup."+u+" touchend."+u+" pointerup."+u+" MSPointerUp."+u,function(){o&&(C(o,"active",d.autoExpandScrollbar),o=null),c=!1,s&&(document.onselectstart=null),L.call(h,!0)})},D=function(){function o(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,b=0,C=0,d=1,y.removeClass("mCS_touch_action");var o=I.offset();u=O(e)[0]-o.top,f=O(e)[1]-o.left,z=[O(e)[0],O(e)[1]]}function n(e){if(te(e)&&!c&&!O(e)[2]&&(T.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!C||b)&&d)){g=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left,n="mcsLinearOut";if(E.push(o),W.push(a),z[2]=Math.abs(O(e)[0]-z[0]),z[3]=Math.abs(O(e)[1]-z[1]),B.overflowed[0])var i=D[0].parent().height()-D[0].height(),r=u-o>0&&o-u>-(i*B.scrollRatio.y)&&(2*z[3]<z[2]||"yx"===T.axis);if(B.overflowed[1])var l=D[1].parent().width()-D[1].width(),h=f-a>0&&a-f>-(l*B.scrollRatio.x)&&(2*z[2]<z[3]||"yx"===T.axis);r||h?(U||e.preventDefault(),b=1):(C=1,y.addClass("mCS_touch_action")),U&&e.preventDefault(),w="yx"===T.axis?[u-o,f-a]:"x"===T.axis?[null,f-a]:[u-o,null],I[0].idleTimer=250,B.overflowed[0]&&s(w[0],R,n,"y","all",!0),B.overflowed[1]&&s(w[1],R,n,"x",L,!0)}}function i(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),Q(y),p=K();var o=M.offset();h=O(e)[0]-o.top,m=O(e)[1]-o.left,E=[],W=[]}function r(e){if(te(e)&&!c&&!O(e)[2]){d=0,e.stopImmediatePropagation(),b=0,C=0,v=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left;if(!(v-g>30)){_=1e3/(v-p);var n="mcsEaseOut",i=2.5>_,r=i?[E[E.length-2],W[W.length-2]]:[0,0];x=i?[o-r[0],a-r[1]]:[o-h,a-m];var u=[Math.abs(x[0]),Math.abs(x[1])];_=i?[Math.abs(x[0]/4),Math.abs(x[1]/4)]:[_,_];var f=[Math.abs(I[0].offsetTop)-x[0]*l(u[0]/_[0],_[0]),Math.abs(I[0].offsetLeft)-x[1]*l(u[1]/_[1],_[1])];w="yx"===T.axis?[f[0],f[1]]:"x"===T.axis?[null,f[1]]:[f[0],null],S=[4*u[0]+T.scrollInertia,4*u[1]+T.scrollInertia];var y=parseInt(T.contentTouchScroll)||0;w[0]=u[0]>y?w[0]:0,w[1]=u[1]>y?w[1]:0,B.overflowed[0]&&s(w[0],S[0],n,"y",L,!1),B.overflowed[1]&&s(w[1],S[1],n,"x",L,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&G(y,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C,y=e(this),B=y.data(a),T=B.opt,k=a+"_"+B.idx,M=e("#mCSB_"+B.idx),I=e("#mCSB_"+B.idx+"_container"),D=[e("#mCSB_"+B.idx+"_dragger_vertical"),e("#mCSB_"+B.idx+"_dragger_horizontal")],E=[],W=[],R=0,L="yx"===T.axis?"none":"all",z=[],P=I.find("iframe"),H=["touchstart."+k+" pointerdown."+k+" MSPointerDown."+k,"touchmove."+k+" pointermove."+k+" MSPointerMove."+k,"touchend."+k+" pointerup."+k+" MSPointerUp."+k],U=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;I.bind(H[0],function(e){o(e)}).bind(H[1],function(e){n(e)}),M.bind(H[0],function(e){i(e)}).bind(H[2],function(e){r(e)}),P.length&&P.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(H[0],function(e){o(e),i(e)}).bind(H[1],function(e){n(e)}).bind(H[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,j(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=O(e)[0]-a.top+f[0].offsetTop,c=O(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u+" dragend."+u,function(){t||(i&&(i=0,n("off",null)),c=!1)})},W=function(){function t(t,a){if(Q(o),!z(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100,d=i.scrollInertia;if("x"===i.axis||"x"===i.mouseWheel.axis)var u="x",f=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.width()?.9*l.width():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),p=c[1][0].offsetLeft,g=c[1].parent().width()-c[1].width(),v="y"===i.mouseWheel.axis?t.deltaY||a:t.deltaX;else var u="y",f=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.height()?.9*l.height():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),p=c[0][0].offsetTop,g=c[0].parent().height()-c[0].height(),v=t.deltaY||a;"y"===u&&!n.overflowed[0]||"x"===u&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),i.mouseWheel.normalizeDelta&&(v=0>v?-1:1),(v>0&&0!==p||0>v&&p!==g||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),t.deltaFactor<5&&!i.mouseWheel.normalizeDelta&&(h=t.deltaFactor,d=17),G(o,(m-v*h).toString(),{dir:u,dur:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},R=new Object,A=function(t){var o=!1,a=!1,n=null;if(void 0===t?a="#empty":void 0!==e(t).attr("id")&&(a=e(t).attr("id")),a!==!1&&void 0!==R[a])return R[a];if(t){try{var i=t.contentDocument||t.contentWindow.document;n=i.body.innerHTML}catch(r){}o=null!==n}else{try{var i=top.document;n=i.body.innerHTML}catch(r){}o=null!==n}return a!==!1&&(R[a]=o),o},L=function(e){var t=this.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}},z=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},P=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){Q(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-u*(.9*l.width())}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-u*(.9*l.height())}G(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},H=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(){var o=e(document.activeElement),a=r.find(".mCustomScrollBox").length,i=0;o.is(n.advanced.autoScrollOnFocus)&&(Q(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=a?(i+17)*a:0,t[0]._focusTimeout=setTimeout(function(){var e=[ae(o)[0],ae(o)[1]],a=[r[0].offsetTop,r[0].offsetLeft],s=[a[0]+e[0]>=0&&a[0]+e[0]<l.height()-o.outerHeight(!1),a[1]+e[1]>=0&&a[0]+e[1]<l.width()-o.outerWidth(!1)],c="yx"!==n.axis||s[0]||s[1]?"all":"none";"x"===n.axis||s[0]||G(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i}),"y"===n.axis||s[1]||G(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i})},t[0]._focusTimer))})},U=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(){0===i.scrollTop()&&0===i.scrollLeft()||e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("contextmenu."+r,function(e){e.preventDefault()}).bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,j(t,e,o)}if(a.preventDefault(),ee(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},q=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||j(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){Q(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-f*(.9*d.width());else var h="y",m=Math.abs(c[0].offsetTop)-f*(.9*d.height());G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},j=function(t,o,n,i,r){function l(e){u.snapAmount&&(f.scrollAmount=u.snapAmount instanceof Array?"x"===f.dir[0]?u.snapAmount[1]:u.snapAmount[0]:u.snapAmount);var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],m="x"===f.dir[0]?s[1]+f.dir[1]*(d[1]*n):s[0]+f.dir[1]*(d[0]*n),v="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),x="auto"!==f.scrollAmount?v:m,_=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",w=!!e;return e&&17>a&&(x="x"===f.dir[0]?s[1]:s[0]),G(t,x.toString(),{dir:f.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),$(f,"step"),Q(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],Q(t),oe(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},X=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1)-s.width():l.outerHeight(!1)-s.height(),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?ae(m)[1]:ae(m)[0];case"string":case"number":if(oe(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&oe(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?ae(m)[1]:ae(m)[0]}return e(t).length?"x"===o?ae(e(t))[1]:ae(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},N=function(t){function o(){return clearTimeout(f[0].autoUpdate),0===l.parents("html").length?void(l=null):void(f[0].autoUpdate=setTimeout(function(){return c.advanced.updateOnSelectorChange&&(s.poll.change.n=i(),s.poll.change.n!==s.poll.change.o)?(s.poll.change.o=s.poll.change.n,void r(3)):c.advanced.updateOnContentResize&&(s.poll.size.n=l[0].scrollHeight+l[0].scrollWidth+f[0].offsetHeight+l[0].offsetHeight+l[0].offsetWidth,s.poll.size.n!==s.poll.size.o)?(s.poll.size.o=s.poll.size.n,void r(1)):!c.advanced.updateOnImageLoad||"auto"===c.advanced.updateOnImageLoad&&"y"===c.axis||(s.poll.img.n=f.find("img").length,s.poll.img.n===s.poll.img.o)?void((c.advanced.updateOnSelectorChange||c.advanced.updateOnContentResize||c.advanced.updateOnImageLoad)&&o()):(s.poll.img.o=s.poll.img.n,void f.find("img").each(function(){n(this)}))},c.advanced.autoUpdateTimeout))}function n(t){function o(e,t){return function(){
    return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),r(2)}if(e(t).hasClass(d[2]))return void r();var n=new Image;n.onload=o(n,a),n.src=t.src}function i(){c.advanced.updateOnSelectorChange===!0&&(c.advanced.updateOnSelectorChange="*");var e=0,t=f.find(c.advanced.updateOnSelectorChange);return c.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function r(e){clearTimeout(f[0].autoUpdate),u.update.call(null,l[0],e)}var l=e(this),s=l.data(a),c=s.opt,f=e("#mCSB_"+s.idx+"_container");return t?(clearTimeout(f[0].autoUpdate),void $(f[0],"autoUpdate")):void o()},V=function(e,t,o){return Math.round(e/t)*t-o},Q=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){Z.call(this)})},G=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||w>=S[0]+y,c.callbacks.alwaysTriggerOffsets||-B>=w]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,0===m.scrollTop()&&0===m.scrollLeft()||(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===n.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;o=V(o,v,c.snapOffset)}switch(n.dir){case"x":var x=e("#mCSB_"+s.idx+"_dragger_horizontal"),_="left",w=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/s.scrollRatio.x],y=p[1],B=g[1],T=y>0?y/s.scrollRatio.x:0,k=B>0?B/s.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+s.idx+"_dragger_vertical"),_="top",w=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/s.scrollRatio.y],y=p[0],B=g[0],T=y>0?y/s.scrollRatio.y:0,k=B>0?B/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),J(x[0],_,Math.round(b[1]),u[1],n.scrollEasing),!s.tweenRunning&&(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0])||J(h[0],_,Math.round(b[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,C(x),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&b[1]>=S[1]-T&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&b[1]<=k&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,C(x,"hide")},e)}}})}},J=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=K()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=K(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},K=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Z=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},$=function(e,t){try{delete e[t]}catch(o){e[t]=null}},ee=function(e){return!(e.which&&1!==e.which)},te=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},oe=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ae=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},ne=function(){function e(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}var t=e();return t?document[t]:!1};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).bind("load",function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+ae(n)[0]>=0&&a[0]+ae(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+ae(n)[1]>=0&&a[1]+ae(n)[1]<o.width()-n.outerWidth(!1)},mcsInSight:e.expr[":"].mcsInSight||function(t,o,a){var n,i,r,l,s=e(t),c=s.parents(".mCSB_container"),d="exact"===a[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(c.length)return n=[s.outerHeight(!1),s.outerWidth(!1)],r=[c[0].offsetTop+ae(s)[0],c[0].offsetLeft+ae(s)[1]],i=[c.parent()[0].offsetHeight,c.parent()[0].offsetWidth],l=[n[0]<i[0]?d[0]:d[1],n[1]<i[1]?d[0]:d[1]],r[0]-i[0]*l[0][0]<0&&r[0]+n[0]-i[0]*l[0][1]>=0&&r[1]-i[1]*l[1][0]<0&&r[1]+n[1]-i[1]*l[1][1]>=0},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});

/**
 * jQuery-viewport-checker - v1.8.7 - 2015-12-17
 * https://github.com/dirkgroenen/jQuery-viewport-checker
 *
 * Copyright (c) 2015 Dirk Groenen
 * Licensed MIT <https://github.com/dirkgroenen/jQuery-viewport-checker/blob/master/LICENSE>
 */

!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);//# sourceMappingURL=jquery.viewportchecker.min.js.map
/*! PhotoSwipe - v4.1.1 - 2015-12-24
 * http://photoswipe.com
 * Copyright (c) 2015 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipe=b()}(this,function(){"use strict";var a=function(a,b,c,d){var e={features:null,bind:function(a,b,c,d){var e=(d?"remove":"add")+"EventListener";b=b.split(" ");for(var f=0;f<b.length;f++)b[f]&&a[e](b[f],c,!1)},isArray:function(a){return a instanceof Array},createEl:function(a,b){var c=document.createElement(b||"div");return a&&(c.className=a),c},getScrollY:function(){var a=window.pageYOffset;return void 0!==a?a:document.documentElement.scrollTop},unbind:function(a,b,c){e.bind(a,b,c,!0)},removeClass:function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(a,b){e.hasClass(a,b)||(a.className+=(a.className?" ":"")+b)},hasClass:function(a,b){return a.className&&new RegExp("(^|\\s)"+b+"(\\s|$)").test(a.className)},getChildByClass:function(a,b){for(var c=a.firstChild;c;){if(e.hasClass(c,b))return c;c=c.nextSibling}},arraySearch:function(a,b,c){for(var d=a.length;d--;)if(a[d][c]===b)return d;return-1},extend:function(a,b,c){for(var d in b)if(b.hasOwnProperty(d)){if(c&&a.hasOwnProperty(d))continue;a[d]=b[d]}},easing:{sine:{out:function(a){return Math.sin(a*(Math.PI/2))},inOut:function(a){return-(Math.cos(Math.PI*a)-1)/2}},cubic:{out:function(a){return--a*a*a+1}}},detectFeatures:function(){if(e.features)return e.features;var a=e.createEl(),b=a.style,c="",d={};if(d.oldIE=document.all&&!document.addEventListener,d.touch="ontouchstart"in window,window.requestAnimationFrame&&(d.raf=window.requestAnimationFrame,d.caf=window.cancelAnimationFrame),d.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!d.pointerEvent){var f=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var g=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);g&&g.length>0&&(g=parseInt(g[1],10),g>=1&&8>g&&(d.isOldIOSPhone=!0))}var h=f.match(/Android\s([0-9\.]*)/),i=h?h[1]:0;i=parseFloat(i),i>=1&&(4.4>i&&(d.isOldAndroid=!0),d.androidVersion=i),d.isMobileOpera=/opera mini|opera mobi/i.test(f)}for(var j,k,l=["transform","perspective","animationName"],m=["","webkit","Moz","ms","O"],n=0;4>n;n++){c=m[n];for(var o=0;3>o;o++)j=l[o],k=c+(c?j.charAt(0).toUpperCase()+j.slice(1):j),!d[j]&&k in b&&(d[j]=k);c&&!d.raf&&(c=c.toLowerCase(),d.raf=window[c+"RequestAnimationFrame"],d.raf&&(d.caf=window[c+"CancelAnimationFrame"]||window[c+"CancelRequestAnimationFrame"]))}if(!d.raf){var p=0;d.raf=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-p)),d=window.setTimeout(function(){a(b+c)},c);return p=b+c,d},d.caf=function(a){clearTimeout(a)}}return d.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,e.features=d,d}};e.detectFeatures(),e.features.oldIE&&(e.bind=function(a,b,c,d){b=b.split(" ");for(var e,f=(d?"detach":"attach")+"Event",g=function(){c.handleEvent.call(c)},h=0;h<b.length;h++)if(e=b[h])if("object"==typeof c&&c.handleEvent){if(d){if(!c["oldIE"+e])return!1}else c["oldIE"+e]=g;a[f]("on"+e,c["oldIE"+e])}else a[f]("on"+e,c)});var f=this,g=25,h=3,i={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(a){return"A"===a.tagName},getDoubleTapZoom:function(a,b){return a?1:b.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};e.extend(i,d);var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la=function(){return{x:0,y:0}},ma=la(),na=la(),oa=la(),pa={},qa=0,ra={},sa=la(),ta=0,ua=!0,va=[],wa={},xa=!1,ya=function(a,b){e.extend(f,b.publicMethods),va.push(a)},za=function(a){var b=_b();return a>b-1?a-b:0>a?b+a:a},Aa={},Ba=function(a,b){return Aa[a]||(Aa[a]=[]),Aa[a].push(b)},Ca=function(a){var b=Aa[a];if(b){var c=Array.prototype.slice.call(arguments);c.shift();for(var d=0;d<b.length;d++)b[d].apply(f,c)}},Da=function(){return(new Date).getTime()},Ea=function(a){ia=a,f.bg.style.opacity=a*i.bgOpacity},Fa=function(a,b,c,d,e){(!xa||e&&e!==f.currItem)&&(d/=e?e.fitRatio:f.currItem.fitRatio),a[E]=u+b+"px, "+c+"px"+v+" scale("+d+")"},Ga=function(a){da&&(a&&(s>f.currItem.fitRatio?xa||(lc(f.currItem,!1,!0),xa=!0):xa&&(lc(f.currItem),xa=!1)),Fa(da,oa.x,oa.y,s))},Ha=function(a){a.container&&Fa(a.container.style,a.initialPosition.x,a.initialPosition.y,a.initialZoomLevel,a)},Ia=function(a,b){b[E]=u+a+"px, 0px"+v},Ja=function(a,b){if(!i.loop&&b){var c=m+(sa.x*qa-a)/sa.x,d=Math.round(a-sb.x);(0>c&&d>0||c>=_b()-1&&0>d)&&(a=sb.x+d*i.mainScrollEndFriction)}sb.x=a,Ia(a,n)},Ka=function(a,b){var c=tb[a]-ra[a];return na[a]+ma[a]+c-c*(b/t)},La=function(a,b){a.x=b.x,a.y=b.y,b.id&&(a.id=b.id)},Ma=function(a){a.x=Math.round(a.x),a.y=Math.round(a.y)},Na=null,Oa=function(){Na&&(e.unbind(document,"mousemove",Oa),e.addClass(a,"pswp--has_mouse"),i.mouseUsed=!0,Ca("mouseUsed")),Na=setTimeout(function(){Na=null},100)},Pa=function(){e.bind(document,"keydown",f),N.transform&&e.bind(f.scrollWrap,"click",f),i.mouseUsed||e.bind(document,"mousemove",Oa),e.bind(window,"resize scroll",f),Ca("bindEvents")},Qa=function(){e.unbind(window,"resize",f),e.unbind(window,"scroll",r.scroll),e.unbind(document,"keydown",f),e.unbind(document,"mousemove",Oa),N.transform&&e.unbind(f.scrollWrap,"click",f),U&&e.unbind(window,p,f),Ca("unbindEvents")},Ra=function(a,b){var c=hc(f.currItem,pa,a);return b&&(ca=c),c},Sa=function(a){return a||(a=f.currItem),a.initialZoomLevel},Ta=function(a){return a||(a=f.currItem),a.w>0?i.maxSpreadZoom:1},Ua=function(a,b,c,d){return d===f.currItem.initialZoomLevel?(c[a]=f.currItem.initialPosition[a],!0):(c[a]=Ka(a,d),c[a]>b.min[a]?(c[a]=b.min[a],!0):c[a]<b.max[a]?(c[a]=b.max[a],!0):!1)},Va=function(){if(E){var b=N.perspective&&!G;return u="translate"+(b?"3d(":"("),void(v=N.perspective?", 0px)":")")}E="left",e.addClass(a,"pswp--ie"),Ia=function(a,b){b.left=a+"px"},Ha=function(a){var b=a.fitRatio>1?1:a.fitRatio,c=a.container.style,d=b*a.w,e=b*a.h;c.width=d+"px",c.height=e+"px",c.left=a.initialPosition.x+"px",c.top=a.initialPosition.y+"px"},Ga=function(){if(da){var a=da,b=f.currItem,c=b.fitRatio>1?1:b.fitRatio,d=c*b.w,e=c*b.h;a.width=d+"px",a.height=e+"px",a.left=oa.x+"px",a.top=oa.y+"px"}}},Wa=function(a){var b="";i.escKey&&27===a.keyCode?b="close":i.arrowKeys&&(37===a.keyCode?b="prev":39===a.keyCode&&(b="next")),b&&(a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||(a.preventDefault?a.preventDefault():a.returnValue=!1,f[b]()))},Xa=function(a){a&&(X||W||ea||S)&&(a.preventDefault(),a.stopPropagation())},Ya=function(){f.setScrollOffset(0,e.getScrollY())},Za={},$a=0,_a=function(a){Za[a]&&(Za[a].raf&&I(Za[a].raf),$a--,delete Za[a])},ab=function(a){Za[a]&&_a(a),Za[a]||($a++,Za[a]={})},bb=function(){for(var a in Za)Za.hasOwnProperty(a)&&_a(a)},cb=function(a,b,c,d,e,f,g){var h,i=Da();ab(a);var j=function(){if(Za[a]){if(h=Da()-i,h>=d)return _a(a),f(c),void(g&&g());f((c-b)*e(h/d)+b),Za[a].raf=H(j)}};j()},db={shout:Ca,listen:Ba,viewportSize:pa,options:i,isMainScrollAnimating:function(){return ea},getZoomLevel:function(){return s},getCurrentIndex:function(){return m},isDragging:function(){return U},isZooming:function(){return _},setScrollOffset:function(a,b){ra.x=a,M=ra.y=b,Ca("updateScrollOffset",ra)},applyZoomPan:function(a,b,c,d){oa.x=b,oa.y=c,s=a,Ga(d)},init:function(){if(!j&&!k){var c;f.framework=e,f.template=a,f.bg=e.getChildByClass(a,"pswp__bg"),J=a.className,j=!0,N=e.detectFeatures(),H=N.raf,I=N.caf,E=N.transform,L=N.oldIE,f.scrollWrap=e.getChildByClass(a,"pswp__scroll-wrap"),f.container=e.getChildByClass(f.scrollWrap,"pswp__container"),n=f.container.style,f.itemHolders=y=[{el:f.container.children[0],wrap:0,index:-1},{el:f.container.children[1],wrap:0,index:-1},{el:f.container.children[2],wrap:0,index:-1}],y[0].el.style.display=y[2].el.style.display="none",Va(),r={resize:f.updateSize,scroll:Ya,keydown:Wa,click:Xa};var d=N.isOldIOSPhone||N.isOldAndroid||N.isMobileOpera;for(N.animationName&&N.transform&&!d||(i.showAnimationDuration=i.hideAnimationDuration=0),c=0;c<va.length;c++)f["init"+va[c]]();if(b){var g=f.ui=new b(f,e);g.init()}Ca("firstUpdate"),m=m||i.index||0,(isNaN(m)||0>m||m>=_b())&&(m=0),f.currItem=$b(m),(N.isOldIOSPhone||N.isOldAndroid)&&(ua=!1),a.setAttribute("aria-hidden","false"),i.modal&&(ua?a.style.position="fixed":(a.style.position="absolute",a.style.top=e.getScrollY()+"px")),void 0===M&&(Ca("initialLayout"),M=K=e.getScrollY());var l="pswp--open ";for(i.mainClass&&(l+=i.mainClass+" "),i.showHideOpacity&&(l+="pswp--animate_opacity "),l+=G?"pswp--touch":"pswp--notouch",l+=N.animationName?" pswp--css_animation":"",l+=N.svg?" pswp--svg":"",e.addClass(a,l),f.updateSize(),o=-1,ta=null,c=0;h>c;c++)Ia((c+o)*sa.x,y[c].el.style);L||e.bind(f.scrollWrap,q,f),Ba("initialZoomInEnd",function(){f.setContent(y[0],m-1),f.setContent(y[2],m+1),y[0].el.style.display=y[2].el.style.display="block",i.focus&&a.focus(),Pa()}),f.setContent(y[1],m),f.updateCurrItem(),Ca("afterInit"),ua||(w=setInterval(function(){$a||U||_||s!==f.currItem.initialZoomLevel||f.updateSize()},1e3)),e.addClass(a,"pswp--visible")}},close:function(){j&&(j=!1,k=!0,Ca("close"),Qa(),bc(f.currItem,null,!0,f.destroy))},destroy:function(){Ca("destroy"),Wb&&clearTimeout(Wb),a.setAttribute("aria-hidden","true"),a.className=J,w&&clearInterval(w),e.unbind(f.scrollWrap,q,f),e.unbind(window,"scroll",f),yb(),bb(),Aa=null},panTo:function(a,b,c){c||(a>ca.min.x?a=ca.min.x:a<ca.max.x&&(a=ca.max.x),b>ca.min.y?b=ca.min.y:b<ca.max.y&&(b=ca.max.y)),oa.x=a,oa.y=b,Ga()},handleEvent:function(a){a=a||window.event,r[a.type]&&r[a.type](a)},goTo:function(a){a=za(a);var b=a-m;ta=b,m=a,f.currItem=$b(m),qa-=b,Ja(sa.x*qa),bb(),ea=!1,f.updateCurrItem()},next:function(){f.goTo(m+1)},prev:function(){f.goTo(m-1)},updateCurrZoomItem:function(a){if(a&&Ca("beforeChange",0),y[1].el.children.length){var b=y[1].el.children[0];da=e.hasClass(b,"pswp__zoom-wrap")?b.style:null}else da=null;ca=f.currItem.bounds,t=s=f.currItem.initialZoomLevel,oa.x=ca.center.x,oa.y=ca.center.y,a&&Ca("afterChange")},invalidateCurrItems:function(){x=!0;for(var a=0;h>a;a++)y[a].item&&(y[a].item.needsUpdate=!0)},updateCurrItem:function(a){if(0!==ta){var b,c=Math.abs(ta);if(!(a&&2>c)){f.currItem=$b(m),xa=!1,Ca("beforeChange",ta),c>=h&&(o+=ta+(ta>0?-h:h),c=h);for(var d=0;c>d;d++)ta>0?(b=y.shift(),y[h-1]=b,o++,Ia((o+2)*sa.x,b.el.style),f.setContent(b,m-c+d+1+1)):(b=y.pop(),y.unshift(b),o--,Ia(o*sa.x,b.el.style),f.setContent(b,m+c-d-1-1));if(da&&1===Math.abs(ta)){var e=$b(z);e.initialZoomLevel!==s&&(hc(e,pa),lc(e),Ha(e))}ta=0,f.updateCurrZoomItem(),z=m,Ca("afterChange")}}},updateSize:function(b){if(!ua&&i.modal){var c=e.getScrollY();if(M!==c&&(a.style.top=c+"px",M=c),!b&&wa.x===window.innerWidth&&wa.y===window.innerHeight)return;wa.x=window.innerWidth,wa.y=window.innerHeight,a.style.height=wa.y+"px"}if(pa.x=f.scrollWrap.clientWidth,pa.y=f.scrollWrap.clientHeight,Ya(),sa.x=pa.x+Math.round(pa.x*i.spacing),sa.y=pa.y,Ja(sa.x*qa),Ca("beforeResize"),void 0!==o){for(var d,g,j,k=0;h>k;k++)d=y[k],Ia((k+o)*sa.x,d.el.style),j=m+k-1,i.loop&&_b()>2&&(j=za(j)),g=$b(j),g&&(x||g.needsUpdate||!g.bounds)?(f.cleanSlide(g),f.setContent(d,j),1===k&&(f.currItem=g,f.updateCurrZoomItem(!0)),g.needsUpdate=!1):-1===d.index&&j>=0&&f.setContent(d,j),g&&g.container&&(hc(g,pa),lc(g),Ha(g));x=!1}t=s=f.currItem.initialZoomLevel,ca=f.currItem.bounds,ca&&(oa.x=ca.center.x,oa.y=ca.center.y,Ga(!0)),Ca("resize")},zoomTo:function(a,b,c,d,f){b&&(t=s,tb.x=Math.abs(b.x)-oa.x,tb.y=Math.abs(b.y)-oa.y,La(na,oa));var g=Ra(a,!1),h={};Ua("x",g,h,a),Ua("y",g,h,a);var i=s,j={x:oa.x,y:oa.y};Ma(h);var k=function(b){1===b?(s=a,oa.x=h.x,oa.y=h.y):(s=(a-i)*b+i,oa.x=(h.x-j.x)*b+j.x,oa.y=(h.y-j.y)*b+j.y),f&&f(b),Ga(1===b)};c?cb("customZoomTo",0,1,c,d||e.easing.sine.inOut,k):k(1)}},eb=30,fb=10,gb={},hb={},ib={},jb={},kb={},lb=[],mb={},nb=[],ob={},pb=0,qb=la(),rb=0,sb=la(),tb=la(),ub=la(),vb=function(a,b){return a.x===b.x&&a.y===b.y},wb=function(a,b){return Math.abs(a.x-b.x)<g&&Math.abs(a.y-b.y)<g},xb=function(a,b){return ob.x=Math.abs(a.x-b.x),ob.y=Math.abs(a.y-b.y),Math.sqrt(ob.x*ob.x+ob.y*ob.y)},yb=function(){Y&&(I(Y),Y=null)},zb=function(){U&&(Y=H(zb),Pb())},Ab=function(){return!("fit"===i.scaleMode&&s===f.currItem.initialZoomLevel)},Bb=function(a,b){return a&&a!==document?a.getAttribute("class")&&a.getAttribute("class").indexOf("pswp__scroll-wrap")>-1?!1:b(a)?a:Bb(a.parentNode,b):!1},Cb={},Db=function(a,b){return Cb.prevent=!Bb(a.target,i.isClickableElement),Ca("preventDragEvent",a,b,Cb),Cb.prevent},Eb=function(a,b){return b.x=a.pageX,b.y=a.pageY,b.id=a.identifier,b},Fb=function(a,b,c){c.x=.5*(a.x+b.x),c.y=.5*(a.y+b.y)},Gb=function(a,b,c){if(a-P>50){var d=nb.length>2?nb.shift():{};d.x=b,d.y=c,nb.push(d),P=a}},Hb=function(){var a=oa.y-f.currItem.initialPosition.y;return 1-Math.abs(a/(pa.y/2))},Ib={},Jb={},Kb=[],Lb=function(a){for(;Kb.length>0;)Kb.pop();return F?(ka=0,lb.forEach(function(a){0===ka?Kb[0]=a:1===ka&&(Kb[1]=a),ka++})):a.type.indexOf("touch")>-1?a.touches&&a.touches.length>0&&(Kb[0]=Eb(a.touches[0],Ib),a.touches.length>1&&(Kb[1]=Eb(a.touches[1],Jb))):(Ib.x=a.pageX,Ib.y=a.pageY,Ib.id="",Kb[0]=Ib),Kb},Mb=function(a,b){var c,d,e,g,h=0,j=oa[a]+b[a],k=b[a]>0,l=sb.x+b.x,m=sb.x-mb.x;return c=j>ca.min[a]||j<ca.max[a]?i.panEndFriction:1,j=oa[a]+b[a]*c,!i.allowPanToNext&&s!==f.currItem.initialZoomLevel||(da?"h"!==fa||"x"!==a||W||(k?(j>ca.min[a]&&(c=i.panEndFriction,h=ca.min[a]-j,d=ca.min[a]-na[a]),(0>=d||0>m)&&_b()>1?(g=l,0>m&&l>mb.x&&(g=mb.x)):ca.min.x!==ca.max.x&&(e=j)):(j<ca.max[a]&&(c=i.panEndFriction,h=j-ca.max[a],d=na[a]-ca.max[a]),(0>=d||m>0)&&_b()>1?(g=l,m>0&&l<mb.x&&(g=mb.x)):ca.min.x!==ca.max.x&&(e=j))):g=l,"x"!==a)?void(ea||Z||s>f.currItem.fitRatio&&(oa[a]+=b[a]*c)):(void 0!==g&&(Ja(g,!0),Z=g===mb.x?!1:!0),ca.min.x!==ca.max.x&&(void 0!==e?oa.x=e:Z||(oa.x+=b.x*c)),void 0!==g)},Nb=function(a){if(!("mousedown"===a.type&&a.button>0)){if(Zb)return void a.preventDefault();if(!T||"mousedown"!==a.type){if(Db(a,!0)&&a.preventDefault(),Ca("pointerDown"),F){var b=e.arraySearch(lb,a.pointerId,"id");0>b&&(b=lb.length),lb[b]={x:a.pageX,y:a.pageY,id:a.pointerId}}var c=Lb(a),d=c.length;$=null,bb(),U&&1!==d||(U=ga=!0,e.bind(window,p,f),R=ja=ha=S=Z=X=V=W=!1,fa=null,Ca("firstTouchStart",c),La(na,oa),ma.x=ma.y=0,La(jb,c[0]),La(kb,jb),mb.x=sa.x*qa,nb=[{x:jb.x,y:jb.y}],P=O=Da(),Ra(s,!0),yb(),zb()),!_&&d>1&&!ea&&!Z&&(t=s,W=!1,_=V=!0,ma.y=ma.x=0,La(na,oa),La(gb,c[0]),La(hb,c[1]),Fb(gb,hb,ub),tb.x=Math.abs(ub.x)-oa.x,tb.y=Math.abs(ub.y)-oa.y,aa=ba=xb(gb,hb))}}},Ob=function(a){if(a.preventDefault(),F){var b=e.arraySearch(lb,a.pointerId,"id");if(b>-1){var c=lb[b];c.x=a.pageX,c.y=a.pageY}}if(U){var d=Lb(a);if(fa||X||_)$=d;else if(sb.x!==sa.x*qa)fa="h";else{var f=Math.abs(d[0].x-jb.x)-Math.abs(d[0].y-jb.y);Math.abs(f)>=fb&&(fa=f>0?"h":"v",$=d)}}},Pb=function(){if($){var a=$.length;if(0!==a)if(La(gb,$[0]),ib.x=gb.x-jb.x,ib.y=gb.y-jb.y,_&&a>1){if(jb.x=gb.x,jb.y=gb.y,!ib.x&&!ib.y&&vb($[1],hb))return;La(hb,$[1]),W||(W=!0,Ca("zoomGestureStarted"));var b=xb(gb,hb),c=Ub(b);c>f.currItem.initialZoomLevel+f.currItem.initialZoomLevel/15&&(ja=!0);var d=1,e=Sa(),g=Ta();if(e>c)if(i.pinchToClose&&!ja&&t<=f.currItem.initialZoomLevel){var h=e-c,j=1-h/(e/1.2);Ea(j),Ca("onPinchClose",j),ha=!0}else d=(e-c)/e,d>1&&(d=1),c=e-d*(e/3);else c>g&&(d=(c-g)/(6*e),d>1&&(d=1),c=g+d*e);0>d&&(d=0),aa=b,Fb(gb,hb,qb),ma.x+=qb.x-ub.x,ma.y+=qb.y-ub.y,La(ub,qb),oa.x=Ka("x",c),oa.y=Ka("y",c),R=c>s,s=c,Ga()}else{if(!fa)return;if(ga&&(ga=!1,Math.abs(ib.x)>=fb&&(ib.x-=$[0].x-kb.x),Math.abs(ib.y)>=fb&&(ib.y-=$[0].y-kb.y)),jb.x=gb.x,jb.y=gb.y,0===ib.x&&0===ib.y)return;if("v"===fa&&i.closeOnVerticalDrag&&!Ab()){ma.y+=ib.y,oa.y+=ib.y;var k=Hb();return S=!0,Ca("onVerticalDrag",k),Ea(k),void Ga()}Gb(Da(),gb.x,gb.y),X=!0,ca=f.currItem.bounds;var l=Mb("x",ib);l||(Mb("y",ib),Ma(oa),Ga())}}},Qb=function(a){if(N.isOldAndroid){if(T&&"mouseup"===a.type)return;a.type.indexOf("touch")>-1&&(clearTimeout(T),T=setTimeout(function(){T=0},600))}Ca("pointerUp"),Db(a,!1)&&a.preventDefault();var b;if(F){var c=e.arraySearch(lb,a.pointerId,"id");if(c>-1)if(b=lb.splice(c,1)[0],navigator.pointerEnabled)b.type=a.pointerType||"mouse";else{var d={4:"mouse",2:"touch",3:"pen"};b.type=d[a.pointerType],b.type||(b.type=a.pointerType||"mouse")}}var g,h=Lb(a),j=h.length;if("mouseup"===a.type&&(j=0),2===j)return $=null,!0;1===j&&La(kb,h[0]),0!==j||fa||ea||(b||("mouseup"===a.type?b={x:a.pageX,y:a.pageY,type:"mouse"}:a.changedTouches&&a.changedTouches[0]&&(b={x:a.changedTouches[0].pageX,y:a.changedTouches[0].pageY,type:"touch"})),Ca("touchRelease",a,b));var k=-1;if(0===j&&(U=!1,e.unbind(window,p,f),yb(),_?k=0:-1!==rb&&(k=Da()-rb)),rb=1===j?Da():-1,g=-1!==k&&150>k?"zoom":"swipe",_&&2>j&&(_=!1,1===j&&(g="zoomPointerUp"),Ca("zoomGestureEnded")),$=null,X||W||ea||S)if(bb(),Q||(Q=Rb()),Q.calculateSwipeSpeed("x"),S){var l=Hb();if(l<i.verticalDragRange)f.close();else{var m=oa.y,n=ia;cb("verticalDrag",0,1,300,e.easing.cubic.out,function(a){oa.y=(f.currItem.initialPosition.y-m)*a+m,Ea((1-n)*a+n),Ga()}),Ca("onVerticalDrag",1)}}else{if((Z||ea)&&0===j){var o=Tb(g,Q);if(o)return;g="zoomPointerUp"}if(!ea)return"swipe"!==g?void Vb():void(!Z&&s>f.currItem.fitRatio&&Sb(Q))}},Rb=function(){var a,b,c={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(d){nb.length>1?(a=Da()-P+50,b=nb[nb.length-2][d]):(a=Da()-O,b=kb[d]),c.lastFlickOffset[d]=jb[d]-b,c.lastFlickDist[d]=Math.abs(c.lastFlickOffset[d]),c.lastFlickDist[d]>20?c.lastFlickSpeed[d]=c.lastFlickOffset[d]/a:c.lastFlickSpeed[d]=0,Math.abs(c.lastFlickSpeed[d])<.1&&(c.lastFlickSpeed[d]=0),c.slowDownRatio[d]=.95,c.slowDownRatioReverse[d]=1-c.slowDownRatio[d],c.speedDecelerationRatio[d]=1},calculateOverBoundsAnimOffset:function(a,b){c.backAnimStarted[a]||(oa[a]>ca.min[a]?c.backAnimDestination[a]=ca.min[a]:oa[a]<ca.max[a]&&(c.backAnimDestination[a]=ca.max[a]),void 0!==c.backAnimDestination[a]&&(c.slowDownRatio[a]=.7,c.slowDownRatioReverse[a]=1-c.slowDownRatio[a],c.speedDecelerationRatioAbs[a]<.05&&(c.lastFlickSpeed[a]=0,c.backAnimStarted[a]=!0,cb("bounceZoomPan"+a,oa[a],c.backAnimDestination[a],b||300,e.easing.sine.out,function(b){oa[a]=b,Ga()}))))},calculateAnimOffset:function(a){c.backAnimStarted[a]||(c.speedDecelerationRatio[a]=c.speedDecelerationRatio[a]*(c.slowDownRatio[a]+c.slowDownRatioReverse[a]-c.slowDownRatioReverse[a]*c.timeDiff/10),c.speedDecelerationRatioAbs[a]=Math.abs(c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]),c.distanceOffset[a]=c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]*c.timeDiff,oa[a]+=c.distanceOffset[a])},panAnimLoop:function(){return Za.zoomPan&&(Za.zoomPan.raf=H(c.panAnimLoop),c.now=Da(),c.timeDiff=c.now-c.lastNow,c.lastNow=c.now,c.calculateAnimOffset("x"),c.calculateAnimOffset("y"),Ga(),c.calculateOverBoundsAnimOffset("x"),c.calculateOverBoundsAnimOffset("y"),c.speedDecelerationRatioAbs.x<.05&&c.speedDecelerationRatioAbs.y<.05)?(oa.x=Math.round(oa.x),oa.y=Math.round(oa.y),Ga(),void _a("zoomPan")):void 0}};return c},Sb=function(a){return a.calculateSwipeSpeed("y"),ca=f.currItem.bounds,a.backAnimDestination={},a.backAnimStarted={},Math.abs(a.lastFlickSpeed.x)<=.05&&Math.abs(a.lastFlickSpeed.y)<=.05?(a.speedDecelerationRatioAbs.x=a.speedDecelerationRatioAbs.y=0,a.calculateOverBoundsAnimOffset("x"),a.calculateOverBoundsAnimOffset("y"),!0):(ab("zoomPan"),a.lastNow=Da(),void a.panAnimLoop())},Tb=function(a,b){var c;ea||(pb=m);var d;if("swipe"===a){var g=jb.x-kb.x,h=b.lastFlickDist.x<10;g>eb&&(h||b.lastFlickOffset.x>20)?d=-1:-eb>g&&(h||b.lastFlickOffset.x<-20)&&(d=1)}var j;d&&(m+=d,0>m?(m=i.loop?_b()-1:0,j=!0):m>=_b()&&(m=i.loop?0:_b()-1,j=!0),(!j||i.loop)&&(ta+=d,qa-=d,c=!0));var k,l=sa.x*qa,n=Math.abs(l-sb.x);return c||l>sb.x==b.lastFlickSpeed.x>0?(k=Math.abs(b.lastFlickSpeed.x)>0?n/Math.abs(b.lastFlickSpeed.x):333,k=Math.min(k,400),k=Math.max(k,250)):k=333,pb===m&&(c=!1),ea=!0,Ca("mainScrollAnimStart"),cb("mainScroll",sb.x,l,k,e.easing.cubic.out,Ja,function(){bb(),ea=!1,pb=-1,(c||pb!==m)&&f.updateCurrItem(),Ca("mainScrollAnimComplete")}),c&&f.updateCurrItem(!0),c},Ub=function(a){return 1/ba*a*t},Vb=function(){var a=s,b=Sa(),c=Ta();b>s?a=b:s>c&&(a=c);var d,g=1,h=ia;return ha&&!R&&!ja&&b>s?(f.close(),!0):(ha&&(d=function(a){Ea((g-h)*a+h)}),f.zoomTo(a,0,200,e.easing.cubic.out,d),!0)};ya("Gestures",{publicMethods:{initGestures:function(){var a=function(a,b,c,d,e){A=a+b,B=a+c,C=a+d,D=e?a+e:""};F=N.pointerEvent,F&&N.touch&&(N.touch=!1),F?navigator.pointerEnabled?a("pointer","down","move","up","cancel"):a("MSPointer","Down","Move","Up","Cancel"):N.touch?(a("touch","start","move","end","cancel"),G=!0):a("mouse","down","move","up"),p=B+" "+C+" "+D,q=A,F&&!G&&(G=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),f.likelyTouchDevice=G,r[A]=Nb,r[B]=Ob,r[C]=Qb,D&&(r[D]=r[C]),N.touch&&(q+=" mousedown",p+=" mousemove mouseup",r.mousedown=r[A],r.mousemove=r[B],r.mouseup=r[C]),G||(i.allowPanToNext=!1)}}});var Wb,Xb,Yb,Zb,$b,_b,ac,bc=function(b,c,d,g){Wb&&clearTimeout(Wb),Zb=!0,Yb=!0;var h;b.initialLayout?(h=b.initialLayout,b.initialLayout=null):h=i.getThumbBoundsFn&&i.getThumbBoundsFn(m);var j=d?i.hideAnimationDuration:i.showAnimationDuration,k=function(){_a("initialZoom"),d?(f.template.removeAttribute("style"),f.bg.removeAttribute("style")):(Ea(1),c&&(c.style.display="block"),e.addClass(a,"pswp--animated-in"),Ca("initialZoom"+(d?"OutEnd":"InEnd"))),g&&g(),Zb=!1};if(!j||!h||void 0===h.x)return Ca("initialZoom"+(d?"Out":"In")),s=b.initialZoomLevel,La(oa,b.initialPosition),Ga(),a.style.opacity=d?0:1,Ea(1),void(j?setTimeout(function(){k()},j):k());var n=function(){var c=l,g=!f.currItem.src||f.currItem.loadError||i.showHideOpacity;b.miniImg&&(b.miniImg.style.webkitBackfaceVisibility="hidden"),d||(s=h.w/b.w,oa.x=h.x,oa.y=h.y-K,f[g?"template":"bg"].style.opacity=.001,Ga()),ab("initialZoom"),d&&!c&&e.removeClass(a,"pswp--animated-in"),g&&(d?e[(c?"remove":"add")+"Class"](a,"pswp--animate_opacity"):setTimeout(function(){e.addClass(a,"pswp--animate_opacity")},30)),Wb=setTimeout(function(){if(Ca("initialZoom"+(d?"Out":"In")),d){var f=h.w/b.w,i={x:oa.x,y:oa.y},l=s,m=ia,n=function(b){1===b?(s=f,oa.x=h.x,oa.y=h.y-M):(s=(f-l)*b+l,oa.x=(h.x-i.x)*b+i.x,oa.y=(h.y-M-i.y)*b+i.y),Ga(),g?a.style.opacity=1-b:Ea(m-b*m)};c?cb("initialZoom",0,1,j,e.easing.cubic.out,n,k):(n(1),Wb=setTimeout(k,j+20))}else s=b.initialZoomLevel,La(oa,b.initialPosition),Ga(),Ea(1),g?a.style.opacity=1:Ea(1),Wb=setTimeout(k,j+20)},d?25:90)};n()},cc={},dc=[],ec={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Xb.length}},fc=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},gc=function(a,b,c){var d=a.bounds;d.center.x=Math.round((cc.x-b)/2),d.center.y=Math.round((cc.y-c)/2)+a.vGap.top,d.max.x=b>cc.x?Math.round(cc.x-b):d.center.x,d.max.y=c>cc.y?Math.round(cc.y-c)+a.vGap.top:d.center.y,d.min.x=b>cc.x?0:d.center.x,d.min.y=c>cc.y?a.vGap.top:d.center.y},hc=function(a,b,c){if(a.src&&!a.loadError){var d=!c;if(d&&(a.vGap||(a.vGap={top:0,bottom:0}),Ca("parseVerticalMargin",a)),cc.x=b.x,cc.y=b.y-a.vGap.top-a.vGap.bottom,d){var e=cc.x/a.w,f=cc.y/a.h;a.fitRatio=f>e?e:f;var g=i.scaleMode;"orig"===g?c=1:"fit"===g&&(c=a.fitRatio),c>1&&(c=1),a.initialZoomLevel=c,a.bounds||(a.bounds=fc())}if(!c)return;return gc(a,a.w*c,a.h*c),d&&c===a.initialZoomLevel&&(a.initialPosition=a.bounds.center),a.bounds}return a.w=a.h=0,a.initialZoomLevel=a.fitRatio=1,a.bounds=fc(),a.initialPosition=a.bounds.center,a.bounds},ic=function(a,b,c,d,e,g){b.loadError||d&&(b.imageAppended=!0,lc(b,d,b===f.currItem&&xa),c.appendChild(d),g&&setTimeout(function(){b&&b.loaded&&b.placeholder&&(b.placeholder.style.display="none",b.placeholder=null)},500))},jc=function(a){a.loading=!0,a.loaded=!1;var b=a.img=e.createEl("pswp__img","img"),c=function(){a.loading=!1,a.loaded=!0,a.loadComplete?a.loadComplete(a):a.img=null,b.onload=b.onerror=null,b=null};return b.onload=c,b.onerror=function(){a.loadError=!0,c()},b.src=a.src,b},kc=function(a,b){return a.src&&a.loadError&&a.container?(b&&(a.container.innerHTML=""),a.container.innerHTML=i.errorMsg.replace("%url%",a.src),!0):void 0},lc=function(a,b,c){if(a.src){b||(b=a.container.lastChild);var d=c?a.w:Math.round(a.w*a.fitRatio),e=c?a.h:Math.round(a.h*a.fitRatio);a.placeholder&&!a.loaded&&(a.placeholder.style.width=d+"px",a.placeholder.style.height=e+"px"),b.style.width=d+"px",b.style.height=e+"px"}},mc=function(){if(dc.length){for(var a,b=0;b<dc.length;b++)a=dc[b],a.holder.index===a.index&&ic(a.index,a.item,a.baseDiv,a.img,!1,a.clearPlaceholder);dc=[]}};ya("Controller",{publicMethods:{lazyLoadItem:function(a){a=za(a);var b=$b(a);b&&(!b.loaded&&!b.loading||x)&&(Ca("gettingData",a,b),b.src&&jc(b))},initController:function(){e.extend(i,ec,!0),f.items=Xb=c,$b=f.getItemAt,_b=i.getNumItemsFn,ac=i.loop,_b()<3&&(i.loop=!1),Ba("beforeChange",function(a){var b,c=i.preload,d=null===a?!0:a>=0,e=Math.min(c[0],_b()),g=Math.min(c[1],_b());for(b=1;(d?g:e)>=b;b++)f.lazyLoadItem(m+b);for(b=1;(d?e:g)>=b;b++)f.lazyLoadItem(m-b)}),Ba("initialLayout",function(){f.currItem.initialLayout=i.getThumbBoundsFn&&i.getThumbBoundsFn(m)}),Ba("mainScrollAnimComplete",mc),Ba("initialZoomInEnd",mc),Ba("destroy",function(){for(var a,b=0;b<Xb.length;b++)a=Xb[b],a.container&&(a.container=null),a.placeholder&&(a.placeholder=null),a.img&&(a.img=null),a.preloader&&(a.preloader=null),a.loadError&&(a.loaded=a.loadError=!1);dc=null})},getItemAt:function(a){return a>=0&&void 0!==Xb[a]?Xb[a]:!1},allowProgressiveImg:function(){return i.forceProgressiveLoading||!G||i.mouseUsed||screen.width>1200},setContent:function(a,b){i.loop&&(b=za(b));var c=f.getItemAt(a.index);c&&(c.container=null);var d,g=f.getItemAt(b);if(!g)return void(a.el.innerHTML="");Ca("gettingData",b,g),a.index=b,a.item=g;var h=g.container=e.createEl("pswp__zoom-wrap");if(!g.src&&g.html&&(g.html.tagName?h.appendChild(g.html):h.innerHTML=g.html),kc(g),hc(g,pa),!g.src||g.loadError||g.loaded)g.src&&!g.loadError&&(d=e.createEl("pswp__img","img"),d.style.opacity=1,d.src=g.src,lc(g,d),ic(b,g,h,d,!0));else{if(g.loadComplete=function(c){if(j){if(a&&a.index===b){if(kc(c,!0))return c.loadComplete=c.img=null,hc(c,pa),Ha(c),void(a.index===m&&f.updateCurrZoomItem());c.imageAppended?!Zb&&c.placeholder&&(c.placeholder.style.display="none",c.placeholder=null):N.transform&&(ea||Zb)?dc.push({item:c,baseDiv:h,img:c.img,index:b,holder:a,clearPlaceholder:!0}):ic(b,c,h,c.img,ea||Zb,!0)}c.loadComplete=null,c.img=null,Ca("imageLoadComplete",b,c)}},e.features.transform){var k="pswp__img pswp__img--placeholder";k+=g.msrc?"":" pswp__img--placeholder--blank";var l=e.createEl(k,g.msrc?"img":"");g.msrc&&(l.src=g.msrc),lc(g,l),h.appendChild(l),g.placeholder=l}g.loading||jc(g),f.allowProgressiveImg()&&(!Yb&&N.transform?dc.push({item:g,baseDiv:h,img:g.img,index:b,holder:a}):ic(b,g,h,g.img,!0,!0))}Yb||b!==m?Ha(g):(da=h.style,bc(g,d||g.img)),a.el.innerHTML="",a.el.appendChild(h)},cleanSlide:function(a){a.img&&(a.img.onload=a.img.onerror=null),a.loaded=a.loading=a.img=a.imageAppended=!1}}});var nc,oc={},pc=function(a,b,c){var d=document.createEvent("CustomEvent"),e={origEvent:a,target:a.target,releasePoint:b,pointerType:c||"touch"};d.initCustomEvent("pswpTap",!0,!0,e),a.target.dispatchEvent(d)};ya("Tap",{publicMethods:{initTap:function(){Ba("firstTouchStart",f.onTapStart),Ba("touchRelease",f.onTapRelease),Ba("destroy",function(){oc={},nc=null})},onTapStart:function(a){a.length>1&&(clearTimeout(nc),nc=null)},onTapRelease:function(a,b){if(b&&!X&&!V&&!$a){var c=b;if(nc&&(clearTimeout(nc),nc=null,wb(c,oc)))return void Ca("doubleTap",c);if("mouse"===b.type)return void pc(a,b,"mouse");var d=a.target.tagName.toUpperCase();if("BUTTON"===d||e.hasClass(a.target,"pswp__single-tap"))return void pc(a,b);La(oc,c),nc=setTimeout(function(){pc(a,b),nc=null},300)}}}});var qc;ya("DesktopZoom",{publicMethods:{initDesktopZoom:function(){L||(G?Ba("mouseUsed",function(){f.setupDesktopZoom()}):f.setupDesktopZoom(!0))},setupDesktopZoom:function(b){qc={};var c="wheel mousewheel DOMMouseScroll";Ba("bindEvents",function(){e.bind(a,c,f.handleMouseWheel)}),Ba("unbindEvents",function(){qc&&e.unbind(a,c,f.handleMouseWheel)}),f.mouseZoomedIn=!1;var d,g=function(){f.mouseZoomedIn&&(e.removeClass(a,"pswp--zoomed-in"),f.mouseZoomedIn=!1),1>s?e.addClass(a,"pswp--zoom-allowed"):e.removeClass(a,"pswp--zoom-allowed"),h()},h=function(){d&&(e.removeClass(a,"pswp--dragging"),d=!1)};Ba("resize",g),Ba("afterChange",g),Ba("pointerDown",function(){f.mouseZoomedIn&&(d=!0,e.addClass(a,"pswp--dragging"))}),Ba("pointerUp",h),b||g()},handleMouseWheel:function(a){if(s<=f.currItem.fitRatio)return i.modal&&(!i.closeOnScroll||$a||U?a.preventDefault():E&&Math.abs(a.deltaY)>2&&(l=!0,f.close())),!0;if(a.stopPropagation(),qc.x=0,"deltaX"in a)1===a.deltaMode?(qc.x=18*a.deltaX,qc.y=18*a.deltaY):(qc.x=a.deltaX,qc.y=a.deltaY);else if("wheelDelta"in a)a.wheelDeltaX&&(qc.x=-.16*a.wheelDeltaX),a.wheelDeltaY?qc.y=-.16*a.wheelDeltaY:qc.y=-.16*a.wheelDelta;else{if(!("detail"in a))return;qc.y=a.detail}Ra(s,!0);var b=oa.x-qc.x,c=oa.y-qc.y;(i.modal||b<=ca.min.x&&b>=ca.max.x&&c<=ca.min.y&&c>=ca.max.y)&&a.preventDefault(),f.panTo(b,c)},toggleDesktopZoom:function(b){b=b||{x:pa.x/2+ra.x,y:pa.y/2+ra.y};var c=i.getDoubleTapZoom(!0,f.currItem),d=s===c;f.mouseZoomedIn=!d,f.zoomTo(d?f.currItem.initialZoomLevel:c,b,333),e[(d?"remove":"add")+"Class"](a,"pswp--zoomed-in")}}});var rc,sc,tc,uc,vc,wc,xc,yc,zc,Ac,Bc,Cc,Dc={history:!0,galleryUID:1},Ec=function(){return Bc.hash.substring(1)},Fc=function(){rc&&clearTimeout(rc),tc&&clearTimeout(tc)},Gc=function(){var a=Ec(),b={};if(a.length<5)return b;var c,d=a.split("&");for(c=0;c<d.length;c++)if(d[c]){var e=d[c].split("=");e.length<2||(b[e[0]]=e[1])}if(i.galleryPIDs){var f=b.pid;for(b.pid=0,c=0;c<Xb.length;c++)if(Xb[c].pid===f){b.pid=c;break}}else b.pid=parseInt(b.pid,10)-1;return b.pid<0&&(b.pid=0),b},Hc=function(){if(tc&&clearTimeout(tc),$a||U)return void(tc=setTimeout(Hc,500));uc?clearTimeout(sc):uc=!0;var a=m+1,b=$b(m);b.hasOwnProperty("pid")&&(a=b.pid);var c=xc+"&gid="+i.galleryUID+"&pid="+a;yc||-1===Bc.hash.indexOf(c)&&(Ac=!0);var d=Bc.href.split("#")[0]+"#"+c;Cc?"#"+c!==window.location.hash&&history[yc?"replaceState":"pushState"]("",document.title,d):yc?Bc.replace(d):Bc.hash=c,yc=!0,sc=setTimeout(function(){uc=!1},60)};ya("History",{publicMethods:{initHistory:function(){if(e.extend(i,Dc,!0),i.history){Bc=window.location,Ac=!1,zc=!1,yc=!1,xc=Ec(),Cc="pushState"in history,xc.indexOf("gid=")>-1&&(xc=xc.split("&gid=")[0],xc=xc.split("?gid=")[0]),Ba("afterChange",f.updateURL),Ba("unbindEvents",function(){e.unbind(window,"hashchange",f.onHashChange)});var a=function(){wc=!0,zc||(Ac?history.back():xc?Bc.hash=xc:Cc?history.pushState("",document.title,Bc.pathname+Bc.search):Bc.hash=""),Fc()};Ba("unbindEvents",function(){l&&a()}),Ba("destroy",function(){wc||a()}),Ba("firstUpdate",function(){m=Gc().pid});var b=xc.indexOf("pid=");b>-1&&(xc=xc.substring(0,b),"&"===xc.slice(-1)&&(xc=xc.slice(0,-1))),setTimeout(function(){j&&e.bind(window,"hashchange",f.onHashChange)},40)}},onHashChange:function(){return Ec()===xc?(zc=!0,void f.close()):void(uc||(vc=!0,f.goTo(Gc().pid),vc=!1))},updateURL:function(){Fc(),vc||(yc?rc=setTimeout(Hc,800):Hc())}}}),e.extend(f,db)};return a});
/*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
 * http://photoswipe.com
 * Copyright (c) 2015 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipeUI_Default=b()}(this,function(){"use strict";var a=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=this,w=!1,x=!0,y=!0,z={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(a,b){return a.title?(b.children[0].innerHTML=a.title,!0):(b.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return a.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return a.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},A=function(a){if(r)return!0;a=a||window.event,q.timeToIdle&&q.mouseUsed&&!k&&K();for(var c,d,e=a.target||a.srcElement,f=e.getAttribute("class")||"",g=0;g<S.length;g++)c=S[g],c.onTap&&f.indexOf("pswp__"+c.name)>-1&&(c.onTap(),d=!0);if(d){a.stopPropagation&&a.stopPropagation(),r=!0;var h=b.features.isOldAndroid?600:30;s=setTimeout(function(){r=!1},h)}},B=function(){return!a.likelyTouchDevice||q.mouseUsed||screen.width>q.fitControlsWidth},C=function(a,c,d){b[(d?"add":"remove")+"Class"](a,"pswp__"+c)},D=function(){var a=1===q.getNumItemsFn();a!==p&&(C(d,"ui--one-slide",a),p=a)},E=function(){C(i,"share-modal--hidden",y)},F=function(){return y=!y,y?(b.removeClass(i,"pswp__share-modal--fade-in"),setTimeout(function(){y&&E()},300)):(E(),setTimeout(function(){y||b.addClass(i,"pswp__share-modal--fade-in")},30)),y||H(),!1},G=function(b){b=b||window.event;var c=b.target||b.srcElement;return a.shout("shareLinkClick",b,c),c.href?c.hasAttribute("download")?!0:(window.open(c.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),y||F(),!1):!1},H=function(){for(var a,b,c,d,e,f="",g=0;g<q.shareButtons.length;g++)a=q.shareButtons[g],c=q.getImageURLForShare(a),d=q.getPageURLForShare(a),e=q.getTextForShare(a),b=a.url.replace("{{url}}",encodeURIComponent(d)).replace("{{image_url}}",encodeURIComponent(c)).replace("{{raw_image_url}}",c).replace("{{text}}",encodeURIComponent(e)),f+='<a href="'+b+'" target="_blank" class="pswp__share--'+a.id+'"'+(a.download?"download":"")+">"+a.label+"</a>",q.parseShareButtonOut&&(f=q.parseShareButtonOut(a,f));i.children[0].innerHTML=f,i.children[0].onclick=G},I=function(a){for(var c=0;c<q.closeElClasses.length;c++)if(b.hasClass(a,"pswp__"+q.closeElClasses[c]))return!0},J=0,K=function(){clearTimeout(u),J=0,k&&v.setIdle(!1)},L=function(a){a=a?a:window.event;var b=a.relatedTarget||a.toElement;b&&"HTML"!==b.nodeName||(clearTimeout(u),u=setTimeout(function(){v.setIdle(!0)},q.timeToIdleOutside))},M=function(){q.fullscreenEl&&!b.features.isOldAndroid&&(c||(c=v.getFullscreenAPI()),c?(b.bind(document,c.eventK,v.updateFullscreen),v.updateFullscreen(),b.addClass(a.template,"pswp--supports-fs")):b.removeClass(a.template,"pswp--supports-fs"))},N=function(){q.preloaderEl&&(O(!0),l("beforeChange",function(){clearTimeout(o),o=setTimeout(function(){a.currItem&&a.currItem.loading?(!a.allowProgressiveImg()||a.currItem.img&&!a.currItem.img.naturalWidth)&&O(!1):O(!0)},q.loadingIndicatorDelay)}),l("imageLoadComplete",function(b,c){a.currItem===c&&O(!0)}))},O=function(a){n!==a&&(C(m,"preloader--active",!a),n=a)},P=function(a){var c=a.vGap;if(B()){var g=q.barsSize;if(q.captionEl&&"auto"===g.bottom)if(f||(f=b.createEl("pswp__caption pswp__caption--fake"),f.appendChild(b.createEl("pswp__caption__center")),d.insertBefore(f,e),b.addClass(d,"pswp__ui--fit")),q.addCaptionHTMLFn(a,f,!0)){var h=f.clientHeight;c.bottom=parseInt(h,10)||44}else c.bottom=g.top;else c.bottom="auto"===g.bottom?0:g.bottom;c.top=g.top}else c.top=c.bottom=0},Q=function(){q.timeToIdle&&l("mouseUsed",function(){b.bind(document,"mousemove",K),b.bind(document,"mouseout",L),t=setInterval(function(){J++,2===J&&v.setIdle(!0)},q.timeToIdle/2)})},R=function(){l("onVerticalDrag",function(a){x&&.95>a?v.hideControls():!x&&a>=.95&&v.showControls()});var a;l("onPinchClose",function(b){x&&.9>b?(v.hideControls(),a=!0):a&&!x&&b>.9&&v.showControls()}),l("zoomGestureEnded",function(){a=!1,a&&!x&&v.showControls()})},S=[{name:"caption",option:"captionEl",onInit:function(a){e=a}},{name:"share-modal",option:"shareEl",onInit:function(a){i=a},onTap:function(){F()}},{name:"button--share",option:"shareEl",onInit:function(a){h=a},onTap:function(){F()}},{name:"button--zoom",option:"zoomEl",onTap:a.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(a){g=a}},{name:"button--close",option:"closeEl",onTap:a.close},{name:"button--arrow--left",option:"arrowEl",onTap:a.prev},{name:"button--arrow--right",option:"arrowEl",onTap:a.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(a){m=a}}],T=function(){var a,c,e,f=function(d){if(d)for(var f=d.length,g=0;f>g;g++){a=d[g],c=a.className;for(var h=0;h<S.length;h++)e=S[h],c.indexOf("pswp__"+e.name)>-1&&(q[e.option]?(b.removeClass(a,"pswp__element--disabled"),e.onInit&&e.onInit(a)):b.addClass(a,"pswp__element--disabled"))}};f(d.children);var g=b.getChildByClass(d,"pswp__top-bar");g&&f(g.children)};v.init=function(){b.extend(a.options,z,!0),q=a.options,d=b.getChildByClass(a.scrollWrap,"pswp__ui"),l=a.listen,R(),l("beforeChange",v.update),l("doubleTap",function(b){var c=a.currItem.initialZoomLevel;a.getZoomLevel()!==c?a.zoomTo(c,b,333):a.zoomTo(q.getDoubleTapZoom(!1,a.currItem),b,333)}),l("preventDragEvent",function(a,b,c){var d=a.target||a.srcElement;d&&d.getAttribute("class")&&a.type.indexOf("mouse")>-1&&(d.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(d.tagName))&&(c.prevent=!1)}),l("bindEvents",function(){b.bind(d,"pswpTap click",A),b.bind(a.scrollWrap,"pswpTap",v.onGlobalTap),a.likelyTouchDevice||b.bind(a.scrollWrap,"mouseover",v.onMouseOver)}),l("unbindEvents",function(){y||F(),t&&clearInterval(t),b.unbind(document,"mouseout",L),b.unbind(document,"mousemove",K),b.unbind(d,"pswpTap click",A),b.unbind(a.scrollWrap,"pswpTap",v.onGlobalTap),b.unbind(a.scrollWrap,"mouseover",v.onMouseOver),c&&(b.unbind(document,c.eventK,v.updateFullscreen),c.isFullscreen()&&(q.hideAnimationDuration=0,c.exit()),c=null)}),l("destroy",function(){q.captionEl&&(f&&d.removeChild(f),b.removeClass(e,"pswp__caption--empty")),i&&(i.children[0].onclick=null),b.removeClass(d,"pswp__ui--over-close"),b.addClass(d,"pswp__ui--hidden"),v.setIdle(!1)}),q.showAnimationDuration||b.removeClass(d,"pswp__ui--hidden"),l("initialZoomIn",function(){q.showAnimationDuration&&b.removeClass(d,"pswp__ui--hidden")}),l("initialZoomOut",function(){b.addClass(d,"pswp__ui--hidden")}),l("parseVerticalMargin",P),T(),q.shareEl&&h&&i&&(y=!0),D(),Q(),M(),N()},v.setIdle=function(a){k=a,C(d,"ui--idle",a)},v.update=function(){x&&a.currItem?(v.updateIndexIndicator(),q.captionEl&&(q.addCaptionHTMLFn(a.currItem,e),C(e,"caption--empty",!a.currItem.title)),w=!0):w=!1,y||F(),D()},v.updateFullscreen=function(d){d&&setTimeout(function(){a.setScrollOffset(0,b.getScrollY())},50),b[(c.isFullscreen()?"add":"remove")+"Class"](a.template,"pswp--fs")},v.updateIndexIndicator=function(){q.counterEl&&(g.innerHTML=a.getCurrentIndex()+1+q.indexIndicatorSep+q.getNumItemsFn())},v.onGlobalTap=function(c){c=c||window.event;var d=c.target||c.srcElement;if(!r)if(c.detail&&"mouse"===c.detail.pointerType){if(I(d))return void a.close();b.hasClass(d,"pswp__img")&&(1===a.getZoomLevel()&&a.getZoomLevel()<=a.currItem.fitRatio?q.clickToCloseNonZoomable&&a.close():a.toggleDesktopZoom(c.detail.releasePoint))}else if(q.tapToToggleControls&&(x?v.hideControls():v.showControls()),q.tapToClose&&(b.hasClass(d,"pswp__img")||I(d)))return void a.close()},v.onMouseOver=function(a){a=a||window.event;var b=a.target||a.srcElement;C(d,"ui--over-close",I(b))},v.hideControls=function(){b.addClass(d,"pswp__ui--hidden"),x=!1},v.showControls=function(){x=!0,w||v.update(),b.removeClass(d,"pswp__ui--hidden")},v.supportsFullscreen=function(){var a=document;return!!(a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen)},v.getFullscreenAPI=function(){var b,c=document.documentElement,d="fullscreenchange";return c.requestFullscreen?b={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:d}:c.mozRequestFullScreen?b={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+d}:c.webkitRequestFullscreen?b={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+d}:c.msRequestFullscreen&&(b={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),b&&(b.enter=function(){return j=q.closeOnScroll,q.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?a.template[this.enterK]():void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},b.exit=function(){return q.closeOnScroll=j,document[this.exitK]()},b.isFullscreen=function(){return document[this.elementK]}),b}};return a});
// sly

;(function ($, w, undefined) {
    'use strict';

    var pluginName = 'sly';
    var className  = 'Sly';
    var namespace  = pluginName;

    // Local WindowAnimationTiming interface
    var cAF = w.cancelAnimationFrame || w.cancelRequestAnimationFrame;
    var rAF = w.requestAnimationFrame;

    // Support indicators
    var transform, gpuAcceleration;

    // Other global values
    var $doc = $(document);
    var dragInitEvents = 'touchstart.' + namespace + ' mousedown.' + namespace;
    var dragMouseEvents = 'mousemove.' + namespace + ' mouseup.' + namespace;
    var dragTouchEvents = 'touchmove.' + namespace + ' touchend.' + namespace;
    var wheelEvent = (document.implementation.hasFeature('Event.wheel', '3.0') ? 'wheel.' : 'mousewheel.') + namespace;
    var clickEvent = 'click.' + namespace;
    var mouseDownEvent = 'mousedown.' + namespace;
    var interactiveElements = ['INPUT', 'SELECT', 'BUTTON', 'TEXTAREA'];
    var tmpArray = [];
    var time;

    // Math shorthands
    var abs = Math.abs;
    var sqrt = Math.sqrt;
    var pow = Math.pow;
    var round = Math.round;
    var max = Math.max;
    var min = Math.min;

    // Keep track of last fired global wheel event
    var lastGlobalWheel = 0;
    $doc.on(wheelEvent, function (event) {
        var sly = event.originalEvent[namespace];
        var time = +new Date();
        // Update last global wheel time, but only when event didn't originate
        // in Sly frame, or the origin was less than scrollHijack time ago
        if (!sly || sly.options.scrollHijack < time - lastGlobalWheel) lastGlobalWheel = time;
    });

    /**
     * Sly.
     *
     * @class
     *
     * @param {Element} frame       DOM element of sly container.
     * @param {Object}  options     Object with options.
     * @param {Object}  callbackMap Callbacks map.
     */
    function Sly(frame, options, callbackMap) {
        if (!(this instanceof Sly)) return new Sly(frame, options, callbackMap);

        // Extend options
        var o = $.extend({}, Sly.defaults, options);

        // Private variables
        var self = this;
        var parallax = isNumber(frame);

        // Frame
        var $frame = $(frame);
        var $slidee = o.slidee ? $(o.slidee).eq(0) : $frame.children().eq(0);
        var frameSize = 0;
        var slideeSize = 0;
        var pos = {
            start: 0,
            center: 0,
            end: 0,
            cur: 0,
            dest: 0
        };

        // Scrollbar
        var $sb = $(o.scrollBar).eq(0);
        var $handle = $sb.children().eq(0);
        var sbSize = 0;
        var handleSize = 0;
        var hPos = {
            start: 0,
            end: 0,
            cur: 0
        };

        // Pagesbar
        var $pb = $(o.pagesBar);
        var $pages = 0;
        var pages = [];

        // Items
        var $items = 0;
        var items = [];
        var rel = {
            firstItem: 0,
            lastItem: 0,
            centerItem: 0,
            activeItem: null,
            activePage: 0
        };

        // Styles
        var frameStyles = new StyleRestorer($frame[0]);
        var slideeStyles = new StyleRestorer($slidee[0]);
        var sbStyles = new StyleRestorer($sb[0]);
        var handleStyles = new StyleRestorer($handle[0]);

        // Navigation type booleans
        var basicNav = o.itemNav === 'basic';
        var forceCenteredNav = o.itemNav === 'forceCentered';
        var centeredNav = o.itemNav === 'centered' || forceCenteredNav;
        var itemNav = !parallax && (basicNav || centeredNav || forceCenteredNav);

        // Miscellaneous
        var $scrollSource = o.scrollSource ? $(o.scrollSource) : $frame;
        var $dragSource = o.dragSource ? $(o.dragSource) : $frame;
        var $forwardButton = $(o.forward);
        var $backwardButton = $(o.backward);
        var $prevButton = $(o.prev);
        var $nextButton = $(o.next);
        var $prevPageButton = $(o.prevPage);
        var $nextPageButton = $(o.nextPage);
        var callbacks = {};
        var last = {};
        var animation = {};
        var move = {};
        var dragging = {
            released: 1
        };
        var scrolling = {
            last: 0,
            delta: 0,
            resetTime: 200
        };
        var renderID = 0;
        var historyID = 0;
        var cycleID = 0;
        var continuousID = 0;
        var i, l;

        // Normalizing frame
        if (!parallax) {
            frame = $frame[0];
        }

        // Expose properties
        self.initialized = 0;
        self.frame = frame;
        self.slidee = $slidee[0];
        self.pos = pos;
        self.rel = rel;
        self.items = items;
        self.pages = pages;
        self.isPaused = 0;
        self.options = o;
        self.dragging = dragging;

        /**
         * Loading function.
         *
         * Populate arrays, set sizes, bind events, ...
         *
         * @param {Boolean} [isInit] Whether load is called from within self.init().
         * @return {Void}
         */
        function load(isInit) {
            // Local variables
            var lastItemsCount = 0;
            var lastPagesCount = pages.length;

            // Save old position
            pos.old = $.extend({}, pos);

            // Reset global variables
            frameSize = parallax ? 0 : $frame[o.horizontal ? 'width' : 'height']();
            sbSize = $sb[o.horizontal ? 'width' : 'height']();
            slideeSize = parallax ? frame : $slidee[o.horizontal ? 'outerWidth' : 'outerHeight']();
            pages.length = 0;

            // Set position limits & relatives
            pos.start = 0;
            pos.end = max(slideeSize - frameSize, 0);

            // Sizes & offsets for item based navigations
            if (itemNav) {
                // Save the number of current items
                lastItemsCount = items.length;

                // Reset itemNav related variables
                $items = $slidee.children(o.itemSelector);
                items.length = 0;

                // Needed variables
                var paddingStart = getPx($slidee, o.horizontal ? 'paddingLeft' : 'paddingTop');
                var paddingEnd = getPx($slidee, o.horizontal ? 'paddingRight' : 'paddingBottom');
                var borderBox = $($items).css('boxSizing') === 'border-box';
                var areFloated = $items.css('float') !== 'none';
                var ignoredMargin = 0;
                var lastItemIndex = $items.length - 1;
                var lastItem;

                // Reset slideeSize
                slideeSize = 0;

                // Iterate through items
                $items.each(function (i, element) {
                    // Item
                    var $item = $(element);
                    var rect = element.getBoundingClientRect();
                    var itemSize = round(o.horizontal ? rect.width || rect.right - rect.left : rect.height || rect.bottom - rect.top);
                    //var itemSize = $item.css('width');
                    var itemMarginStart = getPx($item, o.horizontal ? 'marginLeft' : 'marginTop');
                    var itemMarginEnd = getPx($item, o.horizontal ? 'marginRight' : 'marginBottom');
                    var itemSizeFull = itemSize + itemMarginStart + itemMarginEnd;
                    var singleSpaced = !itemMarginStart || !itemMarginEnd;
                    var item = {};
                    item.el = element;
                    item.size = singleSpaced ? itemSize : itemSizeFull;
                    item.half = item.size / 2;
                    item.start = slideeSize + (singleSpaced ? itemMarginStart : 0);
                    item.center = item.start - round(frameSize / 2 - item.size / 2);
                    item.end = item.start - frameSize + item.size;

                    // Account for slidee padding
                    if (!i) {
                        slideeSize += paddingStart;
                    }

                    // Increment slidee size for size of the active element
                    slideeSize += itemSizeFull;

                    // Try to account for vertical margin collapsing in vertical mode
                    // It's not bulletproof, but should work in 99% of cases
                    if (!o.horizontal && !areFloated) {
                        // Subtract smaller margin, but only when top margin is not 0, and this is not the first element
                        if (itemMarginEnd && itemMarginStart && i > 0) {
                            slideeSize -= min(itemMarginStart, itemMarginEnd);
                        }
                    }

                    // Things to be done on last item
                    if (i === lastItemIndex) {
                        item.end += paddingEnd;
                        slideeSize += paddingEnd;
                        ignoredMargin = singleSpaced ? itemMarginEnd : 0;
                    }

                    // Add item object to items array
                    items.push(item);
                    lastItem = item;
                });
                // Resize SLIDEE to fit all items
                $slidee[0].style[o.horizontal ? 'width' : 'height'] = (borderBox ? slideeSize: slideeSize - paddingStart - paddingEnd) + 'px';

                // Adjust internal SLIDEE size for last margin
                slideeSize -= ignoredMargin;

                // Set limits
                if (items.length) {
                    pos.start =  items[0][forceCenteredNav ? 'center' : 'start'];
                    pos.end = forceCenteredNav ? lastItem.center : frameSize < slideeSize ? lastItem.end : pos.start;
                } else {
                    pos.start = pos.end = 0;
                }
            }

            // Calculate SLIDEE center position
            pos.center = round(pos.end / 2 + pos.start / 2);

            // Update relative positions
            updateRelatives();

            // Scrollbar
            if ($handle.length && sbSize > 0) {
                // Stretch scrollbar handle to represent the visible area
                if (o.dynamicHandle) {
                    handleSize = pos.start === pos.end ? sbSize : round(sbSize * frameSize / slideeSize);
                    handleSize = within(handleSize, o.minHandleSize, sbSize);
                    $handle[0].style[o.horizontal ? 'width' : 'height'] = handleSize + 'px';
                } else {
                    handleSize = $handle[o.horizontal ? 'outerWidth' : 'outerHeight']();
                }

                hPos.end = sbSize - handleSize;

                if (!renderID) {
                    syncScrollbar();
                }
            }

            // Pages
            if (!parallax && frameSize > 0) {
                var tempPagePos = pos.start;
                var pagesHtml = '';

                // Populate pages array
                if (itemNav) {
                    $.each(items, function (i, item) {
                        if (forceCenteredNav) {
                            pages.push(item.center);
                        } else if (item.start + item.size > tempPagePos && tempPagePos <= pos.end) {
                            tempPagePos = item.start;
                            pages.push(tempPagePos);
                            tempPagePos += frameSize;
                            if (tempPagePos > pos.end && tempPagePos < pos.end + frameSize) {
                                pages.push(pos.end);
                            }
                        }
                    });
                } else {
                    while (tempPagePos - frameSize < pos.end) {
                        pages.push(tempPagePos);
                        tempPagePos += frameSize;
                    }
                }

                // Pages bar
                if ($pb[0] && lastPagesCount !== pages.length) {
                    for (var i = 0; i < pages.length; i++) {
                        pagesHtml += o.pageBuilder.call(self, i);
                    }
                    $pages = $pb.html(pagesHtml).children();
                    $pages.eq(rel.activePage).addClass(o.activeClass);
                }
            }

            // Extend relative variables object with some useful info
            rel.slideeSize = slideeSize;
            rel.frameSize = frameSize;
            rel.sbSize = sbSize;
            rel.handleSize = handleSize;

            // Activate requested position
            if (itemNav) {
                if (isInit && o.startAt != null) {
                    activate(o.startAt);
                    self[centeredNav ? 'toCenter' : 'toStart'](o.startAt);
                }
                // Fix possible overflowing
                var activeItem = items[rel.activeItem];
                slideTo(centeredNav && activeItem ? activeItem.center : within(pos.dest, pos.start, pos.end));
            } else {
                if (isInit) {
                    if (o.startAt != null) slideTo(o.startAt, 1);
                } else {
                    // Fix possible overflowing
                    slideTo(within(pos.dest, pos.start, pos.end));
                }
            }

            // Trigger load event
            trigger('load');
        }
        self.reload = function () { load(); };

        /**
         * Animate to a position.
         *
         * @param {Int}  newPos    New position.
         * @param {Bool} immediate Reposition immediately without an animation.
         * @param {Bool} dontAlign Do not align items, use the raw position passed in first argument.
         *
         * @return {Void}
         */
        function slideTo(newPos, immediate, dontAlign) {
            // Align items
            if (itemNav && dragging.released && !dontAlign) {
                var tempRel = getRelatives(newPos);
                var isNotBordering = newPos > pos.start && newPos < pos.end;

                if (centeredNav) {
                    if (isNotBordering) {
                        newPos = items[tempRel.centerItem].center;
                    }
                    if (forceCenteredNav && o.activateMiddle) {
                        activate(tempRel.centerItem);
                    }
                } else if (isNotBordering) {
                    newPos = items[tempRel.firstItem].start;
                }
            }

            // Handle overflowing position limits
            if (dragging.init && dragging.slidee && o.elasticBounds) {
                if (newPos > pos.end) {
                    newPos = pos.end + (newPos - pos.end) / 6;
                } else if (newPos < pos.start) {
                    newPos = pos.start + (newPos - pos.start) / 6;
                }
            } else {
                newPos = within(newPos, pos.start, pos.end);
            }

            // Update the animation object
            animation.start = +new Date();
            animation.time = 0;
            animation.from = pos.cur;
            animation.to = newPos;
            animation.delta = newPos - pos.cur;
            animation.tweesing = dragging.tweese || dragging.init && !dragging.slidee;
            animation.immediate = !animation.tweesing && (immediate || dragging.init && dragging.slidee || !o.speed);

            // Reset dragging tweesing request
            dragging.tweese = 0;

            // Start animation rendering
            if (newPos !== pos.dest) {
                pos.dest = newPos;
                trigger('change');
                if (!renderID) {
                    render();
                }
            }

            // Reset next cycle timeout
            resetCycle();

            // Synchronize states
            updateRelatives();
            updateButtonsState();
            syncPagesbar();
        }

        /**
         * Render animation frame.
         *
         * @return {Void}
         */
        function render() {
            if (!self.initialized) {
                return;
            }

            // If first render call, wait for next animationFrame
            if (!renderID) {
                renderID = rAF(render);
                if (dragging.released) {
                    trigger('moveStart');
                }
                return;
            }

            // If immediate repositioning is requested, don't animate.
            if (animation.immediate) {
                pos.cur = animation.to;
            }
            // Use tweesing for animations without known end point
            else if (animation.tweesing) {
                animation.tweeseDelta = animation.to - pos.cur;
                // Fuck Zeno's paradox
                if (abs(animation.tweeseDelta) < 0.1) {
                    pos.cur = animation.to;
                } else {
                    pos.cur += animation.tweeseDelta * (dragging.released ? o.swingSpeed : o.syncSpeed);
                }
            }
            // Use tweening for basic animations with known end point
            else {
                animation.time = min(+new Date() - animation.start, o.speed);
                pos.cur = animation.from + animation.delta * $.easing[o.easing](animation.time/o.speed, animation.time, 0, 1, o.speed);
            }

            // If there is nothing more to render break the rendering loop, otherwise request new animation frame.
            if (animation.to === pos.cur) {
                pos.cur = animation.to;
                dragging.tweese = renderID = 0;
            } else {
                renderID = rAF(render);
            }

            trigger('move');

            // Update SLIDEE position
            if (!parallax) {
                if (transform) {
                    $slidee[0].style[transform] = gpuAcceleration + (o.horizontal ? 'translateX' : 'translateY') + '(' + (-pos.cur) + 'px)';
                } else {
                    $slidee[0].style[o.horizontal ? 'left' : 'top'] = -round(pos.cur) + 'px';
                }
            }

            // When animation reached the end, and dragging is not active, trigger moveEnd
            if (!renderID && dragging.released) {
                trigger('moveEnd');
            }

            syncScrollbar();
        }

        /**
         * Synchronizes scrollbar with the SLIDEE.
         *
         * @return {Void}
         */
        function syncScrollbar() {
            if ($handle.length) {
                hPos.cur = pos.start === pos.end ? 0 : (((dragging.init && !dragging.slidee) ? pos.dest : pos.cur) - pos.start) / (pos.end - pos.start) * hPos.end;
                hPos.cur = within(round(hPos.cur), hPos.start, hPos.end);
                if (last.hPos !== hPos.cur) {
                    last.hPos = hPos.cur;
                    if (transform) {
                        $handle[0].style[transform] = gpuAcceleration + (o.horizontal ? 'translateX' : 'translateY') + '(' + hPos.cur + 'px)';
                    } else {
                        $handle[0].style[o.horizontal ? 'left' : 'top'] = hPos.cur + 'px';
                    }
                }
            }
        }

        /**
         * Synchronizes pagesbar with SLIDEE.
         *
         * @return {Void}
         */
        function syncPagesbar() {
            if ($pages[0] && last.page !== rel.activePage) {
                last.page = rel.activePage;
                $pages.removeClass(o.activeClass).eq(rel.activePage).addClass(o.activeClass);
                trigger('activePage', last.page);
            }
        }

        /**
         * Returns the position object.
         *
         * @param {Mixed} item
         *
         * @return {Object}
         */
        self.getPos = function (item) {
            if (itemNav) {
                var index = getIndex(item);
                return index !== -1 ? items[index] : false;
            } else {
                var $item = $slidee.find(item).eq(0);

                if ($item[0]) {
                    var offset = o.horizontal ? $item.offset().left - $slidee.offset().left : $item.offset().top - $slidee.offset().top;
                    var size = $item[o.horizontal ? 'outerWidth' : 'outerHeight']();

                    return {
                        start: offset,
                        center: offset - frameSize / 2 + size / 2,
                        end: offset - frameSize + size,
                        size: size
                    };
                } else {
                    return false;
                }
            }
        };

        /**
         * Continuous move in a specified direction.
         *
         * @param  {Bool} forward True for forward movement, otherwise it'll go backwards.
         * @param  {Int}  speed   Movement speed in pixels per frame. Overrides options.moveBy value.
         *
         * @return {Void}
         */
        self.moveBy = function (speed) {
            move.speed = speed;
            // If already initiated, or there is nowhere to move, abort
            if (dragging.init || !move.speed || pos.cur === (move.speed > 0 ? pos.end : pos.start)) {
                return;
            }
            // Initiate move object
            move.lastTime = +new Date();
            move.startPos = pos.cur;
            // Set dragging as initiated
            continuousInit('button');
            dragging.init = 1;
            // Start movement
            trigger('moveStart');
            cAF(continuousID);
            moveLoop();
        };

        /**
         * Continuous movement loop.
         *
         * @return {Void}
         */
        function moveLoop() {
            // If there is nowhere to move anymore, stop
            if (!move.speed || pos.cur === (move.speed > 0 ? pos.end : pos.start)) {
                self.stop();
            }
            // Request new move loop if it hasn't been stopped
            continuousID = dragging.init ? rAF(moveLoop) : 0;
            // Update move object
            move.now = +new Date();
            move.pos = pos.cur + (move.now - move.lastTime) / 1000 * move.speed;
            // Slide
            slideTo(dragging.init ? move.pos : round(move.pos));
            // Normally, this is triggered in render(), but if there
            // is nothing to render, we have to do it manually here.
            if (!dragging.init && pos.cur === pos.dest) {
                trigger('moveEnd');
            }
            // Update times for future iteration
            move.lastTime = move.now;
        }

        /**
         * Stops continuous movement.
         *
         * @return {Void}
         */
        self.stop = function () {
            if (dragging.source === 'button') {
                dragging.init = 0;
                dragging.released = 1;
            }
        };

        /**
         * Activate previous item.
         *
         * @return {Void}
         */
        self.prev = function () {
            self.activate(rel.activeItem == null ? 0 : rel.activeItem - 1);
        };

        /**
         * Activate next item.
         *
         * @return {Void}
         */
        self.next = function () {
            self.activate(rel.activeItem == null ? 0 : rel.activeItem + 1);
        };

        /**
         * Activate previous page.
         *
         * @return {Void}
         */
        self.prevPage = function () {
            self.activatePage(rel.activePage - 1);
        };

        /**
         * Activate next page.
         *
         * @return {Void}
         */
        self.nextPage = function () {
            self.activatePage(rel.activePage + 1);
        };

        /**
         * Slide SLIDEE by amount of pixels.
         *
         * @param {Int}  delta     Pixels/Items. Positive means forward, negative means backward.
         * @param {Bool} immediate Reposition immediately without an animation.
         *
         * @return {Void}
         */
        self.slideBy = function (delta, immediate) {
            if (!delta) {
                return;
            }
            if (itemNav) {
                self[centeredNav ? 'toCenter' : 'toStart'](
                    within((centeredNav ? rel.centerItem : rel.firstItem) + o.scrollBy * delta, 0, items.length)
                );
            } else {
                slideTo(pos.dest + delta, immediate);
            }
        };

        /**
         * Animate SLIDEE to a specific position.
         *
         * @param {Int}  pos       New position.
         * @param {Bool} immediate Reposition immediately without an animation.
         *
         * @return {Void}
         */
        self.slideTo = function (pos, immediate) {
            slideTo(pos, immediate);
        };

        /**
         * Core method for handling `toLocation` methods.
         *
         * @param  {String} location
         * @param  {Mixed}  item
         * @param  {Bool}   immediate
         *
         * @return {Void}
         */
        function to(location, item, immediate) {
            // Optional arguments logic
            if (type(item) === 'boolean') {
                immediate = item;
                item = undefined;
            }

            if (item === undefined) {
                slideTo(pos[location], immediate);
            } else {
                // You can't align items to sides of the frame
                // when centered navigation type is enabled
                if (centeredNav && location !== 'center') {
                    return;
                }

                var itemPos = self.getPos(item);
                if (itemPos) {
                    slideTo(itemPos[location], immediate, !centeredNav);
                }
            }
        }

        /**
         * Animate element or the whole SLIDEE to the start of the frame.
         *
         * @param {Mixed} item      Item DOM element, or index starting at 0. Omitting will animate SLIDEE.
         * @param {Bool}  immediate Reposition immediately without an animation.
         *
         * @return {Void}
         */
        self.toStart = function (item, immediate) {
            to('start', item, immediate);
        };

        /**
         * Animate element or the whole SLIDEE to the end of the frame.
         *
         * @param {Mixed} item      Item DOM element, or index starting at 0. Omitting will animate SLIDEE.
         * @param {Bool}  immediate Reposition immediately without an animation.
         *
         * @return {Void}
         */
        self.toEnd = function (item, immediate) {
            to('end', item, immediate);
        };

        /**
         * Animate element or the whole SLIDEE to the center of the frame.
         *
         * @param {Mixed} item      Item DOM element, or index starting at 0. Omitting will animate SLIDEE.
         * @param {Bool}  immediate Reposition immediately without an animation.
         *
         * @return {Void}
         */
        self.toCenter = function (item, immediate) {
            to('center', item, immediate);
        };

        /**
         * Get the index of an item in SLIDEE.
         *
         * @param {Mixed} item     Item DOM element.
         *
         * @return {Int}  Item index, or -1 if not found.
         */
        function getIndex(item) {
            return item != null ?
                isNumber(item) ?
                    item >= 0 && item < items.length ? item : -1 :
                    $items.index(item) :
                -1;
        }
        // Expose getIndex without lowering the compressibility of it,
        // as it is used quite often throughout Sly.
        self.getIndex = getIndex;

        /**
         * Get index of an item in SLIDEE based on a variety of input types.
         *
         * @param  {Mixed} item DOM element, positive or negative integer.
         *
         * @return {Int}   Item index, or -1 if not found.
         */
        function getRelativeIndex(item) {
            return getIndex(isNumber(item) && item < 0 ? item + items.length : item);
        }

        /**
         * Activates an item.
         *
         * @param  {Mixed} item Item DOM element, or index starting at 0.
         *
         * @return {Mixed} Activated item index or false on fail.
         */
        function activate(item, force) {
            var index = getIndex(item);

            if (!itemNav || index < 0) {
                return false;
            }

            // Update classes, last active index, and trigger active event only when there
            // has been a change. Otherwise just return the current active index.
            if (last.active !== index || force) {
                // Update classes
                $items.eq(rel.activeItem-1).removeClass('pre-active');
                $items.eq(index - 1).addClass('pre-active');

                $items.eq(rel.activeItem).removeClass(o.activeClass);
                $items.eq(index).addClass(o.activeClass);

                if ($items.eq(index+1).length == 0) {
                    $items.eq(index - 1).removeClass('pre-active');
                    $items.eq(index).addClass('pre-active');
                }


                last.active = rel.activeItem = index;

                updateButtonsState();
                trigger('active', index);
            }

            return index;
        }

        /**
         * Activates an item and helps with further navigation when o.smart is enabled.
         *
         * @param {Mixed} item      Item DOM element, or index starting at 0.
         * @param {Bool}  immediate Whether to reposition immediately in smart navigation.
         *
         * @return {Void}
         */
        self.activate = function (item, immediate) {
            var index = activate(item);

            // Smart navigation
            if (o.smart && index !== false) {
                // When centeredNav is enabled, center the element.
                // Otherwise, determine where to position the element based on its current position.
                // If the element is currently on the far end side of the frame, assume that user is
                // moving forward and animate it to the start of the visible frame, and vice versa.
                if (centeredNav) {
                    self.toCenter(index, immediate);
                } else if (index >= rel.lastItem) {
                    self.toStart(index, immediate);
                } else if (index <= rel.firstItem) {
                    self.toEnd(index, immediate);
                } else {
                    resetCycle();
                }
            }
        };

        /**
         * Activates a page.
         *
         * @param {Int}  index     Page index, starting from 0.
         * @param {Bool} immediate Whether to reposition immediately without animation.
         *
         * @return {Void}
         */
        self.activatePage = function (index, immediate) {
            if (isNumber(index)) {
                slideTo(pages[within(index, 0, pages.length - 1)], immediate);
            }
        };

        /**
         * Return relative positions of items based on their visibility within FRAME.
         *
         * @param {Int} slideePos Position of SLIDEE.
         *
         * @return {Void}
         */
        function getRelatives(slideePos) {
            slideePos = within(isNumber(slideePos) ? slideePos : pos.dest, pos.start, pos.end);

            var relatives = {};
            var centerOffset = forceCenteredNav ? 0 : frameSize / 2;

            // Determine active page
            if (!parallax) {
                for (var p = 0, pl = pages.length; p < pl; p++) {
                    if (slideePos >= pos.end || p === pages.length - 1) {
                        relatives.activePage = pages.length - 1;
                        break;
                    }

                    if (slideePos <= pages[p] + centerOffset) {
                        relatives.activePage = p;
                        break;
                    }
                }
            }

            // Relative item indexes
            if (itemNav) {
                var first = false;
                var last = false;
                var center = false;

                // From start
                for (var i = 0, il = items.length; i < il; i++) {
                    // First item
                    if (first === false && slideePos <= items[i].start + items[i].half) {
                        first = i;
                    }

                    // Center item
                    if (center === false && slideePos <= items[i].center + items[i].half) {
                        center = i;
                    }

                    // Last item
                    if (i === il - 1 || slideePos <= items[i].end + items[i].half) {
                        last = i;
                        break;
                    }
                }

                // Safe assignment, just to be sure the false won't be returned
                relatives.firstItem = isNumber(first) ? first : 0;
                relatives.centerItem = isNumber(center) ? center : relatives.firstItem;
                relatives.lastItem = isNumber(last) ? last : relatives.centerItem;
            }

            return relatives;
        }

        /**
         * Update object with relative positions.
         *
         * @param {Int} newPos
         *
         * @return {Void}
         */
        function updateRelatives(newPos) {
            $.extend(rel, getRelatives(newPos));
        }

        /**
         * Disable navigation buttons when needed.
         *
         * Adds disabledClass, and when the button is <button> or <input>, activates :disabled state.
         *
         * @return {Void}
         */
        function updateButtonsState() {
            var isStart = pos.dest <= pos.start;
            var isEnd = pos.dest >= pos.end;
            var slideePosState = (isStart ? 1 : 0) | (isEnd ? 2 : 0);

            // Update paging buttons only if there has been a change in SLIDEE position
            if (last.slideePosState !== slideePosState) {
                last.slideePosState = slideePosState;

                if ($prevPageButton.is('button,input')) {
                    $prevPageButton.prop('disabled', isStart);
                }

                if ($nextPageButton.is('button,input')) {
                    $nextPageButton.prop('disabled', isEnd);
                }

                $prevPageButton.add($backwardButton)[isStart ? 'addClass' : 'removeClass'](o.disabledClass);
                $nextPageButton.add($forwardButton)[isEnd ? 'addClass' : 'removeClass'](o.disabledClass);
            }

            // Forward & Backward buttons need a separate state caching because we cannot "property disable"
            // them while they are being used, as disabled buttons stop emitting mouse events.
            if (last.fwdbwdState !== slideePosState && dragging.released) {
                last.fwdbwdState = slideePosState;

                if ($backwardButton.is('button,input')) {
                    $backwardButton.prop('disabled', isStart);
                }

                if ($forwardButton.is('button,input')) {
                    $forwardButton.prop('disabled', isEnd);
                }
            }

            // Item navigation
            if (itemNav && rel.activeItem != null) {
                var isFirst = rel.activeItem === 0;
                var isLast = rel.activeItem >= items.length - 1;
                var itemsButtonState = (isFirst ? 1 : 0) | (isLast ? 2 : 0);

                if (last.itemsButtonState !== itemsButtonState) {
                    last.itemsButtonState = itemsButtonState;

                    if ($prevButton.is('button,input')) {
                        $prevButton.prop('disabled', isFirst);
                    }

                    if ($nextButton.is('button,input')) {
                        $nextButton.prop('disabled', isLast);
                    }

                    $prevButton[isFirst ? 'addClass' : 'removeClass'](o.disabledClass);
                    $nextButton[isLast ? 'addClass' : 'removeClass'](o.disabledClass);
                }
            }
        }

        /**
         * Resume cycling.
         *
         * @param {Int} priority Resume pause with priority lower or equal than this. Used internally for pauseOnHover.
         *
         * @return {Void}
         */
        self.resume = function (priority) {
            if (!o.cycleBy || !o.cycleInterval || o.cycleBy === 'items' && (!items[0] || rel.activeItem == null) || priority < self.isPaused) {
                return;
            }

            self.isPaused = 0;

            if (cycleID) {
                cycleID = clearTimeout(cycleID);
            } else {
                trigger('resume');
            }

            cycleID = setTimeout(function () {
                trigger('cycle');
                switch (o.cycleBy) {
                    case 'items':
                        self.activate(rel.activeItem >= items.length - 1 ? 0 : rel.activeItem + 1);
                        break;

                    case 'pages':
                        self.activatePage(rel.activePage >= pages.length - 1 ? 0 : rel.activePage + 1);
                        break;
                }
            }, o.cycleInterval);
        };

        /**
         * Pause cycling.
         *
         * @param {Int} priority Pause priority. 100 is default. Used internally for pauseOnHover.
         *
         * @return {Void}
         */
        self.pause = function (priority) {
            if (priority < self.isPaused) {
                return;
            }

            self.isPaused = priority || 100;

            if (cycleID) {
                cycleID = clearTimeout(cycleID);
                trigger('pause');
            }
        };

        /**
         * Toggle cycling.
         *
         * @return {Void}
         */
        self.toggle = function () {
            self[cycleID ? 'pause' : 'resume']();
        };

        /**
         * Updates a signle or multiple option values.
         *
         * @param {Mixed} name  Name of the option that should be updated, or object that will extend the options.
         * @param {Mixed} value New option value.
         *
         * @return {Void}
         */
        self.set = function (name, value) {
            if ($.isPlainObject(name)) {
                $.extend(o, name);
            } else if (o.hasOwnProperty(name)) {
                o[name] = value;
            }
        };

        /**
         * Add one or multiple items to the SLIDEE end, or a specified position index.
         *
         * @param {Mixed} element Node element, or HTML string.
         * @param {Int}   index   Index of a new item position. By default item is appended at the end.
         *
         * @return {Void}
         */
        self.add = function (element, index) {
            var $element = $(element);

            if (itemNav) {
                // Insert the element(s)
                if (index == null || !items[0] || index >= items.length) {
                    $element.appendTo($slidee);
                } else if (items.length) {
                    $element.insertBefore(items[index].el);
                }

                // Adjust the activeItem index
                if (rel.activeItem != null && index <= rel.activeItem) {
                    last.active = rel.activeItem += $element.length;
                }
            } else {
                $slidee.append($element);
            }

            // Reload
            load();
        };

        /**
         * Remove an item from SLIDEE.
         *
         * @param {Mixed} element Item index, or DOM element.
         * @param {Int}   index   Index of a new item position. By default item is appended at the end.
         *
         * @return {Void}
         */
        self.remove = function (element) {
            if (itemNav) {
                var index = getRelativeIndex(element);

                if (index > -1) {
                    // Remove the element
                    $items.eq(index).remove();

                    // If the current item is being removed, activate new one after reload
                    var reactivate = index === rel.activeItem;

                    // Adjust the activeItem index
                    if (rel.activeItem != null && index < rel.activeItem) {
                        last.active = --rel.activeItem;
                    }

                    // Reload
                    load();

                    // Activate new item at the removed position
                    if (reactivate) {
                        last.active = null;
                        self.activate(rel.activeItem);
                    }
                }
            } else {
                $(element).remove();
                load();
            }
        };

        /**
         * Helps re-arranging items.
         *
         * @param  {Mixed} item     Item DOM element, or index starting at 0. Use negative numbers to select items from the end.
         * @param  {Mixed} position Item insertion anchor. Accepts same input types as item argument.
         * @param  {Bool}  after    Insert after instead of before the anchor.
         *
         * @return {Void}
         */
        function moveItem(item, position, after) {
            item = getRelativeIndex(item);
            position = getRelativeIndex(position);

            // Move only if there is an actual change requested
            if (item > -1 && position > -1 && item !== position && (!after || position !== item - 1) && (after || position !== item + 1)) {
                $items.eq(item)[after ? 'insertAfter' : 'insertBefore'](items[position].el);

                var shiftStart = item < position ? item : (after ? position : position - 1);
                var shiftEnd = item > position ? item : (after ? position + 1 : position);
                var shiftsUp = item > position;

                // Update activeItem index
                if (rel.activeItem != null) {
                    if (item === rel.activeItem) {
                        last.active = rel.activeItem = after ? (shiftsUp ? position + 1 : position) : (shiftsUp ? position : position - 1);
                    } else if (rel.activeItem > shiftStart && rel.activeItem < shiftEnd) {
                        last.active = rel.activeItem += shiftsUp ? 1 : -1;
                    }
                }

                // Reload
                load();
            }
        }

        /**
         * Move item after the target anchor.
         *
         * @param  {Mixed} item     Item to be moved. Can be DOM element or item index.
         * @param  {Mixed} position Target position anchor. Can be DOM element or item index.
         *
         * @return {Void}
         */
        self.moveAfter = function (item, position) {
            moveItem(item, position, 1);
        };

        /**
         * Move item before the target anchor.
         *
         * @param  {Mixed} item     Item to be moved. Can be DOM element or item index.
         * @param  {Mixed} position Target position anchor. Can be DOM element or item index.
         *
         * @return {Void}
         */
        self.moveBefore = function (item, position) {
            moveItem(item, position);
        };

        /**
         * Registers callbacks.
         *
         * @param  {Mixed} name  Event name, or callbacks map.
         * @param  {Mixed} fn    Callback, or an array of callback functions.
         *
         * @return {Void}
         */
        self.on = function (name, fn) {
            // Callbacks map
            if (type(name) === 'object') {
                for (var key in name) {
                    if (name.hasOwnProperty(key)) {
                        self.on(key, name[key]);
                    }
                }
                // Callback
            } else if (type(fn) === 'function') {
                var names = name.split(' ');
                for (var n = 0, nl = names.length; n < nl; n++) {
                    callbacks[names[n]] = callbacks[names[n]] || [];
                    if (callbackIndex(names[n], fn) === -1) {
                        callbacks[names[n]].push(fn);
                    }
                }
                // Callbacks array
            } else if (type(fn) === 'array') {
                for (var f = 0, fl = fn.length; f < fl; f++) {
                    self.on(name, fn[f]);
                }
            }
        };

        /**
         * Registers callbacks to be executed only once.
         *
         * @param  {Mixed} name  Event name, or callbacks map.
         * @param  {Mixed} fn    Callback, or an array of callback functions.
         *
         * @return {Void}
         */
        self.one = function (name, fn) {
            function proxy() {
                fn.apply(self, arguments);
                self.off(name, proxy);
            }
            self.on(name, proxy);
        };

        /**
         * Remove one or all callbacks.
         *
         * @param  {String} name Event name.
         * @param  {Mixed}  fn   Callback, or an array of callback functions. Omit to remove all callbacks.
         *
         * @return {Void}
         */
        self.off = function (name, fn) {
            if (fn instanceof Array) {
                for (var f = 0, fl = fn.length; f < fl; f++) {
                    self.off(name, fn[f]);
                }
            } else {
                var names = name.split(' ');
                for (var n = 0, nl = names.length; n < nl; n++) {
                    callbacks[names[n]] = callbacks[names[n]] || [];
                    if (fn == null) {
                        callbacks[names[n]].length = 0;
                    } else {
                        var index = callbackIndex(names[n], fn);
                        if (index !== -1) {
                            callbacks[names[n]].splice(index, 1);
                        }
                    }
                }
            }
        };

        /**
         * Returns callback array index.
         *
         * @param  {String}   name Event name.
         * @param  {Function} fn   Function
         *
         * @return {Int} Callback array index, or -1 if isn't registered.
         */
        function callbackIndex(name, fn) {
            for (var i = 0, l = callbacks[name].length; i < l; i++) {
                if (callbacks[name][i] === fn) {
                    return i;
                }
            }
            return -1;
        }

        /**
         * Reset next cycle timeout.
         *
         * @return {Void}
         */
        function resetCycle() {
            if (dragging.released && !self.isPaused) {
                self.resume();
            }
        }

        /**
         * Calculate SLIDEE representation of handle position.
         *
         * @param  {Int} handlePos
         *
         * @return {Int}
         */
        function handleToSlidee(handlePos) {
            return round(within(handlePos, hPos.start, hPos.end) / hPos.end * (pos.end - pos.start)) + pos.start;
        }

        /**
         * Keeps track of a dragging delta history.
         *
         * @return {Void}
         */
        function draggingHistoryTick() {
            // Looking at this, I know what you're thinking :) But as we need only 4 history states, doing it this way
            // as opposed to a proper loop is ~25 bytes smaller (when minified with GCC), a lot faster, and doesn't
            // generate garbage. The loop version would create 2 new variables on every tick. Unexaptable!
            dragging.history[0] = dragging.history[1];
            dragging.history[1] = dragging.history[2];
            dragging.history[2] = dragging.history[3];
            dragging.history[3] = dragging.delta;
        }

        /**
         * Initialize continuous movement.
         *
         * @return {Void}
         */
        function continuousInit(source) {
            dragging.released = 0;
            dragging.source = source;
            dragging.slidee = source === 'slidee';
        }

        /**
         * Dragging initiator.
         *
         * @param  {Event} event
         *
         * @return {Void}
         */
        function dragInit(event) {
            var isTouch = event.type === 'touchstart';
            var source = event.data.source;
            var isSlidee = source === 'slidee';

            // Ignore when already in progress, or interactive element in non-touch navivagion
            if (dragging.init || !isTouch && isInteractive(event.target)) {
                return;
            }

            // Handle dragging conditions
            if (source === 'handle' && (!o.dragHandle || hPos.start === hPos.end)) {
                return;
            }

            // SLIDEE dragging conditions
            if (isSlidee && !(isTouch ? o.touchDragging : o.mouseDragging && event.which < 2)) {
                return;
            }

            if (!isTouch) {
                // prevents native image dragging in Firefox
                stopDefault(event);
            }

            // Reset dragging object
            continuousInit(source);

            // Properties used in dragHandler
            dragging.init = 0;
            dragging.$source = $(event.target);
            dragging.touch = isTouch;
            dragging.pointer = isTouch ? event.originalEvent.touches[0] : event;
            dragging.initX = dragging.pointer.pageX;
            dragging.initY = dragging.pointer.pageY;
            dragging.initPos = isSlidee ? pos.cur : hPos.cur;
            dragging.start = +new Date();
            dragging.time = 0;
            dragging.path = 0;
            dragging.delta = 0;
            dragging.locked = 0;
            dragging.history = [0, 0, 0, 0];
            dragging.pathToLock = isSlidee ? isTouch ? 30 : 10 : 0;

            // Bind dragging events
            $doc.on(isTouch ? dragTouchEvents : dragMouseEvents, dragHandler);

            // Pause ongoing cycle
            self.pause(1);

            // Add dragging class
            (isSlidee ? $slidee : $handle).addClass(o.draggedClass);

            // Trigger moveStart event
            trigger('moveStart');

            // Keep track of a dragging path history. This is later used in the
            // dragging release swing calculation when dragging SLIDEE.
            if (isSlidee) {
                historyID = setInterval(draggingHistoryTick, 10);
            }
        }

        /**
         * Handler for dragging scrollbar handle or SLIDEE.
         *
         * @param  {Event} event
         *
         * @return {Void}
         */
        function dragHandler(event) {
            dragging.released = event.type === 'mouseup' || event.type === 'touchend';
            dragging.pointer = dragging.touch ? event.originalEvent[dragging.released ? 'changedTouches' : 'touches'][0] : event;
            dragging.pathX = dragging.pointer.pageX - dragging.initX;
            dragging.pathY = dragging.pointer.pageY - dragging.initY;
            dragging.path = sqrt(pow(dragging.pathX, 2) + pow(dragging.pathY, 2));
            dragging.delta = o.horizontal ? dragging.pathX : dragging.pathY;

            if (!dragging.released && dragging.path < 1) return;

            // We haven't decided whether this is a drag or not...
            if (!dragging.init) {
                // If the drag path was very short, maybe it's not a drag?
                if (dragging.path < o.dragThreshold) {
                    // If the pointer was released, the path will not become longer and it's
                    // definitely not a drag. If not released yet, decide on next iteration
                    return dragging.released ? dragEnd() : undefined;
                }
                else {
                    // If dragging path is sufficiently long we can confidently start a drag
                    // if drag is in different direction than scroll, ignore it
                    if (o.horizontal ? abs(dragging.pathX) > abs(dragging.pathY) : abs(dragging.pathX) < abs(dragging.pathY)) {
                        dragging.init = 1;
                    } else {
                        return dragEnd();
                    }
                }
            }

            stopDefault(event);

            // Disable click on a source element, as it is unwelcome when dragging
            if (!dragging.locked && dragging.path > dragging.pathToLock && dragging.slidee) {
                dragging.locked = 1;
                dragging.$source.on(clickEvent, disableOneEvent);
            }

            // Cancel dragging on release
            if (dragging.released) {
                dragEnd();

                // Adjust path with a swing on mouse release
                if (o.releaseSwing && dragging.slidee) {
                    dragging.swing = (dragging.delta - dragging.history[0]) / 40 * 300;
                    dragging.delta += dragging.swing;
                    dragging.tweese = abs(dragging.swing) > 10;
                }
            }

            slideTo(dragging.slidee ? round(dragging.initPos - dragging.delta) : handleToSlidee(dragging.initPos + dragging.delta));
        }

        /**
         * Stops dragging and cleans up after it.
         *
         * @return {Void}
         */
        function dragEnd() {
            clearInterval(historyID);
            dragging.released = true;
            $doc.off(dragging.touch ? dragTouchEvents : dragMouseEvents, dragHandler);
            (dragging.slidee ? $slidee : $handle).removeClass(o.draggedClass);

            // Make sure that disableOneEvent is not active in next tick.
            setTimeout(function () {
                dragging.$source.off(clickEvent, disableOneEvent);
            });

            // Normally, this is triggered in render(), but if there
            // is nothing to render, we have to do it manually here.
            if (pos.cur === pos.dest && dragging.init) {
                trigger('moveEnd');
            }

            // Resume ongoing cycle
            self.resume(1);

            dragging.init = 0;
        }

        /**
         * Check whether element is interactive.
         *
         * @return {Boolean}
         */
        function isInteractive(element) {
            return ~$.inArray(element.nodeName, interactiveElements) || $(element).is(o.interactive);
        }

        /**
         * Continuous movement cleanup on mouseup.
         *
         * @return {Void}
         */
        function movementReleaseHandler() {
            self.stop();
            $doc.off('mouseup', movementReleaseHandler);
        }

        /**
         * Buttons navigation handler.
         *
         * @param  {Event} event
         *
         * @return {Void}
         */
        function buttonsHandler(event) {
            /*jshint validthis:true */
            stopDefault(event);
            switch (this) {
                case $forwardButton[0]:
                case $backwardButton[0]:
                    self.moveBy($forwardButton.is(this) ? o.moveBy : -o.moveBy);
                    $doc.on('mouseup', movementReleaseHandler);
                    break;

                case $prevButton[0]:
                    self.prev();
                    break;

                case $nextButton[0]:
                    self.next();
                    break;

                case $prevPageButton[0]:
                    self.prevPage();
                    break;

                case $nextPageButton[0]:
                    self.nextPage();
                    break;
            }
        }

        /**
         * Mouse wheel delta normalization.
         *
         * @param  {Event} event
         *
         * @return {Int}
         */
        function normalizeWheelDelta(event) {
            // wheelDelta needed only for IE8-
            scrolling.curDelta = ((o.horizontal ? event.deltaY || event.deltaX : event.deltaY) || -event.wheelDelta);
            scrolling.curDelta /= event.deltaMode === 1 ? 3 : 100;
            if (!itemNav) {
                return scrolling.curDelta;
            }
            time = +new Date();
            if (scrolling.last < time - scrolling.resetTime) {
                scrolling.delta = 0;
            }
            scrolling.last = time;
            scrolling.delta += scrolling.curDelta;
            if (abs(scrolling.delta) < 1) {
                scrolling.finalDelta = 0;
            } else {
                scrolling.finalDelta = round(scrolling.delta / 1);
                scrolling.delta %= 1;
            }
            return scrolling.finalDelta;
        }

        /**
         * Mouse scrolling handler.
         *
         * @param  {Event} event
         *
         * @return {Void}
         */
        function scrollHandler(event) {
            // Mark event as originating in a Sly instance
            event.originalEvent[namespace] = self;
            // Don't hijack global scrolling
            var time = +new Date();
            if (lastGlobalWheel + o.scrollHijack > time && $scrollSource[0] !== document && $scrollSource[0] !== window) {
                lastGlobalWheel = time;
                return;
            }
            // Ignore if there is no scrolling to be done
            if (!o.scrollBy || pos.start === pos.end) {
                return;
            }
            var delta = normalizeWheelDelta(event.originalEvent);
            // Trap scrolling only when necessary and/or requested
            if (o.scrollTrap || delta > 0 && pos.dest < pos.end || delta < 0 && pos.dest > pos.start) {
                stopDefault(event, 1);
            }
            self.slideBy(o.scrollBy * delta);
        }

        /**
         * Scrollbar click handler.
         *
         * @param  {Event} event
         *
         * @return {Void}
         */
        function scrollbarHandler(event) {
            // Only clicks on scroll bar. Ignore the handle.
            if (o.clickBar && event.target === $sb[0]) {
                stopDefault(event);
                // Calculate new handle position and sync SLIDEE to it
                slideTo(handleToSlidee((o.horizontal ? event.pageX - $sb.offset().left : event.pageY - $sb.offset().top) - handleSize / 2));
            }
        }

        /**
         * Keyboard input handler.
         *
         * @param  {Event} event
         *
         * @return {Void}
         */
        function keyboardHandler(event) {
            if (!o.keyboardNavBy) {
                return;
            }

            switch (event.which) {
                // Left or Up
                case o.horizontal ? 37 : 38:
                    stopDefault(event);
                    self[o.keyboardNavBy === 'pages' ? 'prevPage' : 'prev']();
                    break;

                // Right or Down
                case o.horizontal ? 39 : 40:
                    stopDefault(event);
                    self[o.keyboardNavBy === 'pages' ? 'nextPage' : 'next']();
                    break;
            }
        }

        /**
         * Click on item activation handler.
         *
         * @param  {Event} event
         *
         * @return {Void}
         */
        function activateHandler(event) {
            /*jshint validthis:true */

            // Ignore clicks on interactive elements.
            if (isInteractive(this)) {
                event.originalEvent[namespace + 'ignore'] = true;
                return;
            }

            // Ignore events that:
            // - are not originating from direct SLIDEE children
            // - originated from interactive elements
            if (this.parentNode !== $slidee[0] || event.originalEvent[namespace + 'ignore']) return;

            self.activate(this);
        }

        /**
         * Click on page button handler.
         *
         * @param {Event} event
         *
         * @return {Void}
         */
        function activatePageHandler() {
            /*jshint validthis:true */
            // Accept only events from direct pages bar children.
            if (this.parentNode === $pb[0]) {
                self.activatePage($pages.index(this));
            }
        }

        /**
         * Pause on hover handler.
         *
         * @param  {Event} event
         *
         * @return {Void}
         */
        function pauseOnHoverHandler(event) {
            if (o.pauseOnHover) {
                self[event.type === 'mouseenter' ? 'pause' : 'resume'](2);
            }
        }

        /**
         * Trigger callbacks for event.
         *
         * @param  {String} name Event name.
         * @param  {Mixed}  argX Arguments passed to callbacks.
         *
         * @return {Void}
         */
        function trigger(name, arg1) {
            if (callbacks[name]) {
                l = callbacks[name].length;
                // Callbacks will be stored and executed from a temporary array to not
                // break the execution queue when one of the callbacks unbinds itself.
                tmpArray.length = 0;
                for (i = 0; i < l; i++) {
                    tmpArray.push(callbacks[name][i]);
                }
                // Execute the callbacks
                for (i = 0; i < l; i++) {
                    tmpArray[i].call(self, name, arg1);
                }
            }
        }

        /**
         * Destroys instance and everything it created.
         *
         * @return {Void}
         */
        self.destroy = function () {
            // Remove the reference to itself
            Sly.removeInstance(frame);

            // Unbind all events
            $scrollSource
                .add($handle)
                .add($sb)
                .add($pb)
                .add($forwardButton)
                .add($backwardButton)
                .add($prevButton)
                .add($nextButton)
                .add($prevPageButton)
                .add($nextPageButton)
                .off('.' + namespace);

            // Unbinding specifically as to not nuke out other instances
            $doc.off('keydown', keyboardHandler);

            // Remove classes
            $prevButton
                .add($nextButton)
                .add($prevPageButton)
                .add($nextPageButton)
                .removeClass(o.disabledClass);

            if ($items && rel.activeItem != null) {
                $items.eq(rel.activeItem).removeClass(o.activeClass);
            }

            // Remove page items
            $pb.empty();

            if (!parallax) {
                // Unbind events from frame
                $frame.off('.' + namespace);
                // Restore original styles
                frameStyles.restore();
                slideeStyles.restore();
                sbStyles.restore();
                handleStyles.restore();
                // Remove the instance from element data storage
                $.removeData(frame, namespace);
            }

            // Clean up collections
            items.length = pages.length = 0;
            last = {};

            // Reset initialized status and return the instance
            self.initialized = 0;
            return self;
        };

        /**
         * Initialize.
         *
         * @return {Object}
         */
        self.init = function () {
            if (self.initialized) {
                return;
            }

            // Disallow multiple instances on the same element
            if (Sly.getInstance(frame)) throw new Error('There is already a Sly instance on this element');

            // Store the reference to itself
            Sly.storeInstance(frame, self);

            // Register callbacks map
            self.on(callbackMap);

            // Save styles
            var holderProps = ['overflow', 'position'];
            var movableProps = ['position', 'webkitTransform', 'msTransform', 'transform', 'left', 'top', 'width', 'height'];
            frameStyles.save.apply(frameStyles, holderProps);
            sbStyles.save.apply(sbStyles, holderProps);
            slideeStyles.save.apply(slideeStyles, movableProps);
            handleStyles.save.apply(handleStyles, movableProps);

            // Set required styles
            var $movables = $handle;
            if (!parallax) {
                $movables = $movables.add($slidee);
                $frame.css('overflow', 'hidden');
                if (!transform && $frame.css('position') === 'static') {
                    $frame.css('position', 'relative');
                }
            }
            if (transform) {
                if (gpuAcceleration) {
                    $movables.css(transform, gpuAcceleration);
                }
            } else {
                if ($sb.css('position') === 'static') {
                    $sb.css('position', 'relative');
                }
                $movables.css({ position: 'absolute' });
            }

            // Navigation buttons
            if (o.forward) {
                $forwardButton.on(mouseDownEvent, buttonsHandler);
            }
            if (o.backward) {
                $backwardButton.on(mouseDownEvent, buttonsHandler);
            }
            if (o.prev) {
                $prevButton.on(clickEvent, buttonsHandler);
            }
            if (o.next) {
                $nextButton.on(clickEvent, buttonsHandler);
            }
            if (o.prevPage) {
                $prevPageButton.on(clickEvent, buttonsHandler);
            }
            if (o.nextPage) {
                $nextPageButton.on(clickEvent, buttonsHandler);
            }

            // Scrolling navigation
            $scrollSource.on(wheelEvent, scrollHandler);

            // Clicking on scrollbar navigation
            if ($sb[0]) {
                $sb.on(clickEvent, scrollbarHandler);
            }

            // Click on items navigation
            if (itemNav && o.activateOn) {
                $frame.on(o.activateOn + '.' + namespace, '*', activateHandler);
            }

            // Pages navigation
            if ($pb[0] && o.activatePageOn) {
                $pb.on(o.activatePageOn + '.' + namespace, '*', activatePageHandler);
            }

            // Dragging navigation
            $dragSource.on(dragInitEvents, { source: 'slidee' }, dragInit);

            // Scrollbar dragging navigation
            if ($handle) {
                $handle.on(dragInitEvents, { source: 'handle' }, dragInit);
            }

            // Keyboard navigation
            $doc.on('keydown', keyboardHandler);

            if (!parallax) {
                // Pause on hover
                $frame.on('mouseenter.' + namespace + ' mouseleave.' + namespace, pauseOnHoverHandler);
                // Reset native FRAME element scroll
                $frame.on('scroll.' + namespace, resetScroll);
            }

            // Mark instance as initialized
            self.initialized = 1;

            // Load
            load(true);

            // Initiate automatic cycling
            if (o.cycleBy && !parallax) {
                self[o.startPaused ? 'pause' : 'resume']();
            }

            // Return instance
            return self;
        };
    }

    Sly.getInstance = function (element) {
        return $.data(element, namespace);
    };

    Sly.storeInstance = function (element, sly) {
        return $.data(element, namespace, sly);
    };

    Sly.removeInstance = function (element) {
        return $.removeData(element, namespace);
    };

    /**
     * Return type of the value.
     *
     * @param  {Mixed} value
     *
     * @return {String}
     */
    function type(value) {
        if (value == null) {
            return String(value);
        }

        if (typeof value === 'object' || typeof value === 'function') {
            return Object.prototype.toString.call(value).match(/\s([a-z]+)/i)[1].toLowerCase() || 'object';
        }

        return typeof value;
    }

    /**
     * Event preventDefault & stopPropagation helper.
     *
     * @param {Event} event     Event object.
     * @param {Bool}  noBubbles Cancel event bubbling.
     *
     * @return {Void}
     */
    function stopDefault(event, noBubbles) {
        event.preventDefault();
        if (noBubbles) {
            event.stopPropagation();
        }
    }

    /**
     * Disables an event it was triggered on and unbinds itself.
     *
     * @param  {Event} event
     *
     * @return {Void}
     */
    function disableOneEvent(event) {
        /*jshint validthis:true */
        stopDefault(event, 1);
        $(this).off(event.type, disableOneEvent);
    }

    /**
     * Resets native element scroll values to 0.
     *
     * @return {Void}
     */
    function resetScroll() {
        /*jshint validthis:true */
        this.scrollLeft = 0;
        this.scrollTop = 0;
    }

    /**
     * Check if variable is a number.
     *
     * @param {Mixed} value
     *
     * @return {Boolean}
     */
    function isNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

    /**
     * Parse style to pixels.
     *
     * @param {Object}   $item    jQuery object with element.
     * @param {Property} property CSS property to get the pixels from.
     *
     * @return {Int}
     */
    function getPx($item, property) {
        return 0 | round(String($item.css(property)).replace(/[^\-0-9.]/g, ''));
    }

    /**
     * Make sure that number is within the limits.
     *
     * @param {Number} number
     * @param {Number} min
     * @param {Number} max
     *
     * @return {Number}
     */
    function within(number, min, max) {
        return number < min ? min : number > max ? max : number;
    }

    /**
     * Saves element styles for later restoration.
     *
     * Example:
     *   var styles = new StyleRestorer(frame);
     *   styles.save('position');
     *   element.style.position = 'absolute';
     *   styles.restore(); // restores to state before the assignment above
     *
     * @param {Element} element
     */
    function StyleRestorer(element) {
        var self = {};
        self.style = {};
        self.save = function () {
            if (!element || !element.nodeType) return;
            for (var i = 0; i < arguments.length; i++) {
                self.style[arguments[i]] = element.style[arguments[i]];
            }
            return self;
        };
        self.restore = function () {
            if (!element || !element.nodeType) return;
            for (var prop in self.style) {
                if (self.style.hasOwnProperty(prop)) element.style[prop] = self.style[prop];
            }
            return self;
        };
        return self;
    }

    // Local WindowAnimationTiming interface polyfill
    (function (w) {
        rAF = w.requestAnimationFrame
            || w.webkitRequestAnimationFrame
            || fallback;

        /**
         * Fallback implementation.
         */
        var prev = new Date().getTime();
        function fallback(fn) {
            var curr = new Date().getTime();
            var ms = Math.max(0, 16 - (curr - prev));
            var req = setTimeout(fn, ms);
            prev = curr;
            return req;
        }

        /**
         * Cancel.
         */
        var cancel = w.cancelAnimationFrame
            || w.webkitCancelAnimationFrame
            || w.clearTimeout;

        cAF = function(id){
            cancel.call(w, id);
        };
    }(window));

    // Feature detects
    (function () {
        var prefixes = ['', 'Webkit', 'Moz', 'ms', 'O'];
        var el = document.createElement('div');

        function testProp(prop) {
            for (var p = 0, pl = prefixes.length; p < pl; p++) {
                var prefixedProp = prefixes[p] ? prefixes[p] + prop.charAt(0).toUpperCase() + prop.slice(1) : prop;
                if (el.style[prefixedProp] != null) {
                    return prefixedProp;
                }
            }
        }

        // Global support indicators
        transform = testProp('transform');
        gpuAcceleration = testProp('perspective') ? 'translateZ(0) ' : '';
    }());

    // Expose class globally
    w[className] = Sly;

    // jQuery proxy
    $.fn[pluginName] = function (options, callbackMap) {
        var method, methodArgs;

        // Attributes logic
        if (!$.isPlainObject(options)) {
            if (type(options) === 'string' || options === false) {
                method = options === false ? 'destroy' : options;
                methodArgs = Array.prototype.slice.call(arguments, 1);
            }
            options = {};
        }

        // Apply to all elements
        return this.each(function (i, element) {
            // Call with prevention against multiple instantiations
            var plugin = Sly.getInstance(element);

            if (!plugin && !method) {
                // Create a new object if it doesn't exist yet
                plugin = new Sly(element, options, callbackMap).init();
            } else if (plugin && method) {
                // Call method
                if (plugin[method]) {
                    plugin[method].apply(plugin, methodArgs);
                }
            }
        });
    };

    // Default options
    Sly.defaults = {
        slidee:     null,  // Selector, DOM element, or jQuery object with DOM element representing SLIDEE.
        horizontal: false, // Switch to horizontal mode.

        // Item based navigation
        itemNav:        null,  // Item navigation type. Can be: 'basic', 'centered', 'forceCentered'.
        itemSelector:   null,  // Select only items that match this selector.
        smart:          false, // Repositions the activated item to help with further navigation.
        activateOn:     null,  // Activate an item on this event. Can be: 'click', 'mouseenter', ...
        activateMiddle: false, // Always activate the item in the middle of the FRAME. forceCentered only.

        // Scrolling
        scrollSource: null,  // Element for catching the mouse wheel scrolling. Default is FRAME.
        scrollBy:     0,     // Pixels or items to move per one mouse scroll. 0 to disable scrolling.
        scrollHijack: 300,   // Milliseconds since last wheel event after which it is acceptable to hijack global scroll.
        scrollTrap:   false, // Don't bubble scrolling when hitting scrolling limits.

        // Dragging
        dragSource:    null,  // Selector or DOM element for catching dragging events. Default is FRAME.
        mouseDragging: false, // Enable navigation by dragging the SLIDEE with mouse cursor.
        touchDragging: false, // Enable navigation by dragging the SLIDEE with touch events.
        releaseSwing:  false, // Ease out on dragging swing release.
        swingSpeed:    0.2,   // Swing synchronization speed, where: 1 = instant, 0 = infinite.
        elasticBounds: false, // Stretch SLIDEE position limits when dragging past FRAME boundaries.
        dragThreshold: 3,     // Distance in pixels before Sly recognizes dragging.
        interactive:   null,  // Selector for special interactive elements.

        // Scrollbar
        scrollBar:     null,  // Selector or DOM element for scrollbar container.
        dragHandle:    false, // Whether the scrollbar handle should be draggable.
        dynamicHandle: false, // Scrollbar handle represents the ratio between hidden and visible content.
        minHandleSize: 50,    // Minimal height or width (depends on sly direction) of a handle in pixels.
        clickBar:      false, // Enable navigation by clicking on scrollbar.
        syncSpeed:     0.5,   // Handle => SLIDEE synchronization speed, where: 1 = instant, 0 = infinite.

        // Pagesbar
        pagesBar:       null, // Selector or DOM element for pages bar container.
        activatePageOn: null, // Event used to activate page. Can be: click, mouseenter, ...
        pageBuilder:          // Page item generator.
            function (index) {
                return '<li>' + (index + 1) + '</li>';
            },

        // Navigation buttons
        forward:  null, // Selector or DOM element for "forward movement" button.
        backward: null, // Selector or DOM element for "backward movement" button.
        prev:     null, // Selector or DOM element for "previous item" button.
        next:     null, // Selector or DOM element for "next item" button.
        prevPage: null, // Selector or DOM element for "previous page" button.
        nextPage: null, // Selector or DOM element for "next page" button.

        // Automated cycling
        cycleBy:       null,  // Enable automatic cycling by 'items' or 'pages'.
        cycleInterval: 5000,  // Delay between cycles in milliseconds.
        pauseOnHover:  false, // Pause cycling when mouse hovers over the FRAME.
        startPaused:   false, // Whether to start in paused sate.

        // Mixed options
        moveBy:        300,     // Speed in pixels per second used by forward and backward buttons.
        speed:         0,       // Animations speed in milliseconds. 0 to disable animations.
        easing:        'swing', // Easing for duration based (tweening) animations.
        startAt:       null,    // Starting offset in pixels or items.
        keyboardNavBy: null,    // Enable keyboard navigation by 'items' or 'pages'.

        // Classes
        draggedClass:  'dragged', // Class for dragged elements (like SLIDEE or scrollbar handle).
        activeClass:   'active',  // Class for active items and pages.
        disabledClass: 'disabled' // Class for disabled navigation elements.
    };
}(jQuery, window));


/**
 * Social Likes
 * http://sapegin.github.com/social-likes
 *
 * Sharing buttons for Russian and worldwide social networks.
 *
 * @requires jQuery
 * @author Artem Sapegin
 * @copyright 2014 Artem Sapegin (sapegin.me)
 * @license MIT
 */

/*global define:false, socialLikesButtons:false */

(function(factory) {  // Try to register as an anonymous AMD module
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    }
    else {
        factory(jQuery);
    }
}(function($, undefined) {

    'use strict';

    var prefix = 'social-likes';
    var classPrefix = prefix + '__';
    var openClass = prefix + '_opened';
    var protocol = location.protocol === 'https:' ? 'https:' : 'http:';
    var isHttps = protocol === 'https:';


    /**
     * Buttons
     */
    var services = {
        facebook: {
            // https://developers.facebook.com/docs/reference/fql/link_stat/
            counterUrl: 'https://graph.facebook.com/fql?q=SELECT+total_count+FROM+link_stat+WHERE+url%3D%22{url}%22&callback=?',
            convertNumber: function(data) {
                return data.data[0].total_count;
            },
            faIcon: 'fa fa-facebook',
            popupUrl: 'https://www.facebook.com/sharer/sharer.php?u={url}',
            popupWidth: 600,
            popupHeight: 359
        },
        twitter: {
            popupUrl: 'https://twitter.com/intent/tweet?url={url}&text={title}',
            popupWidth: 600,
            popupHeight: 250,
            faIcon: 'fa fa-twitter',
            click: function() {
                // Add colon to improve readability
                if (!/[\.\?:\-â€“â€”]\s*$/.test(this.options.title)) this.options.title += ':';
                return true;
            }
        },
        mailru: {
            counterUrl: protocol + '//connect.mail.ru/share_count?url_list={url}&callback=1&func=?',
            convertNumber: function(data) {
                for (var url in data) {
                    if (data.hasOwnProperty(url)) {
                        return data[url].shares;
                    }
                }
            },
            popupUrl: 'https://connect.mail.ru/share?share_url={url}&title={title}',
            popupWidth: 492,
            popupHeight: 500
        },
        vkontakte: {
            counterUrl: 'https://vk.com/share.php?act=count&url={url}&index={index}',
            counter: function(jsonUrl, deferred) {
                var options = services.vkontakte;
                if (!options._) {
                    options._ = [];
                    if (!window.VK) window.VK = {};
                    window.VK.Share = {
                        count: function(idx, number) {
                            options._[idx].resolve(number);
                        }
                    };
                }

                var index = options._.length;
                options._.push(deferred);
                $.getScript(makeUrl(jsonUrl, {index: index}))
                    .fail(deferred.reject);
            },
            popupUrl: 'https://vk.com/share.php?url={url}&title={title}',
            faIcon: 'fa fa-vk',
            popupWidth: 655,
            popupHeight: 450
        },
        odnoklassniki: {
            counterUrl: protocol + '//connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}',
            counter: function(jsonUrl, deferred) {
                var options = services.odnoklassniki;
                if (!options._) {
                    options._ = [];
                    if (!window.ODKL) window.ODKL = {};
                    window.ODKL.updateCount = function(idx, number) {
                        options._[idx].resolve(number);
                    };
                }

                var index = options._.length;
                options._.push(deferred);
                $.getScript(makeUrl(jsonUrl, {index: index}))
                    .fail(deferred.reject);
            },
            popupUrl: 'https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}',
            popupWidth: 580,
            popupHeight: 336
        },
        plusone: {
            counterUrl: protocol + '//share.yandex.ru/gpp.xml?url={url}&callback=?',
            convertNumber: function(number) {
                return parseInt(number.replace(/\D/g, ''), 10);
            },
            popupUrl: 'https://plus.google.com/share?url={url}',
            popupWidth: 500,
            popupHeight: 550
        },
        pinterest: {
            counterUrl: protocol + '//api.pinterest.com/v1/urls/count.json?url={url}&callback=?',
            convertNumber: function(data) {
                return data.count;
            },
            popupUrl: 'https://pinterest.com/pin/create/button/?url={url}&description={title}',
            popupWidth: 740,
            popupHeight: 550
        }
    };


    /**
     * Counters manager
     */
    var counters = {
        promises: {},
        fetch: function(service, url, extraOptions) {
            if (!counters.promises[service]) counters.promises[service] = {};
            var servicePromises = counters.promises[service];

            if (!extraOptions.forceUpdate && servicePromises[url]) {
                return servicePromises[url];
            }
            else {
                var options = $.extend({}, services[service], extraOptions);
                var deferred = $.Deferred();
                var jsonUrl = options.counterUrl && makeUrl(options.counterUrl, {url: url});

                if (jsonUrl && $.isFunction(options.counter)) {
                    options.counter(jsonUrl, deferred);
                }
                else if (options.counterUrl) {
                    $.getJSON(jsonUrl)
                        .done(function(data) {
                            try {
                                var number = data;
                                if ($.isFunction(options.convertNumber)) {
                                    number = options.convertNumber(data);
                                }
                                deferred.resolve(number);
                            }
                            catch (e) {
                                deferred.reject();
                            }
                        })
                        .fail(deferred.reject);
                }
                else {
                    deferred.reject();
                }

                servicePromises[url] = deferred.promise();
                return servicePromises[url];
            }
        }
    };


    /**
     * jQuery plugin
     */
    $.fn.socialLikes = function(options) {
        return this.each(function() {
            var elem = $(this);
            var instance = elem.data(prefix);
            if (instance) {
                if ($.isPlainObject(options)) {
                    instance.update(options);
                }
            }
            else {
                instance = new SocialLikes(elem, $.extend({}, $.fn.socialLikes.defaults, options, dataToOptions(elem)));
                elem.data(prefix, instance);
            }
        });
    };

    $.fn.socialLikes.defaults = {
        url: window.location.href.replace(window.location.hash, ''),
        title: document.title,
        counters: true,
        zeroes: false,
        wait: 500,  // Show buttons only after counters are ready or after this amount of time
        timeout: 10000,  // Show counters after this amount of time even if they arenâ€™t ready
        popupCheckInterval: 500,
        singleTitle: 'Share'
    };

    function SocialLikes(container, options) {
        this.container = container;
        this.options = options;
        this.init();
    }

    SocialLikes.prototype = {
        init: function() {
            // Add class in case of manual initialization
            this.container.addClass(prefix);

            this.single = this.container.hasClass(prefix + '_single');

            this.initUserButtons();

            this.countersLeft = 0;
            this.number = 0;
            this.container.on('counter.' + prefix, $.proxy(this.updateCounter, this));

            var buttons = this.container.children();

            this.makeSingleButton();

            this.buttons = [];
            buttons.each($.proxy(function(idx, elem) {
                var button = new Button($(elem), this.options);
                this.buttons.push(button);
                if (button.options.counterUrl) this.countersLeft++;
            }, this));

            if (this.options.counters) {
                this.timer = setTimeout($.proxy(this.appear, this), this.options.wait);
                this.timeout = setTimeout($.proxy(this.ready, this, true), this.options.timeout);
            }
            else {
                this.appear();
            }
        },
        initUserButtons: function() {
            if (!this.userButtonInited && window.socialLikesButtons) {
                $.extend(true, services, socialLikesButtons);
            }
            this.userButtonInited = true;
        },
        makeSingleButton: function() {
            if (!this.single) return;

            var container = this.container;
            container.addClass(prefix + '_vertical');
            container.wrap($('<div>', {'class': prefix + '_single-w'}));
            container.wrapInner($('<div>', {'class': prefix + '__single-container'}));
            var wrapper = container.parent();

            // Widget
            var widget = $('<div>', {
                'class': getElementClassNames('widget', 'single')
            });
            var button = $(template(
                '<div class="{buttonCls}">' +
                '<span class="{iconCls}"></span>' +
                '{title}' +
                '</div>',
                {
                    buttonCls: getElementClassNames('button', 'single'),
                    iconCls: getElementClassNames('icon', 'single'),
                    title: this.options.singleTitle
                }
            ));
            widget.append(button);
            wrapper.append(widget);

            widget.on('click', function() {
                var activeClass = prefix + '__widget_active';
                widget.toggleClass(activeClass);
                if (widget.hasClass(activeClass)) {
                    container.css({left: -(container.width()-widget.width())/2,  top: -container.height()});
                    showInViewport(container);
                    closeOnClick(container, function() {
                        widget.removeClass(activeClass);
                    });
                }
                else {
                    container.removeClass(openClass);
                }
                return false;
            });

            this.widget = widget;
        },
        update: function(options) {
            if (!options.forceUpdate && options.url === this.options.url) return;

            // Reset counters
            this.number = 0;
            this.countersLeft = this.buttons.length;
            if (this.widget) this.widget.find('.' + prefix + '__counter').remove();

            // Update options
            $.extend(this.options, options);
            for (var buttonIdx = 0; buttonIdx < this.buttons.length; buttonIdx++) {
                this.buttons[buttonIdx].update(options);
            }
        },
        updateCounter: function(e, service, number) {
            number = number || 0;

            if (number || this.options.zeroes) {
                this.number += number;
                if (this.single) {
                    this.getCounterElem().text(this.number);
                }
            }

            if (this.countersLeft === 0) {
                this.appear();
                this.ready();
            }
            this.countersLeft--;
        },
        appear: function() {
            this.container.addClass(prefix + '_visible');
        },
        ready: function(silent) {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.container.addClass(prefix + '_ready');
            if (!silent) {
                this.container.trigger('ready.' + prefix, this.number);
            }
        },
        getCounterElem: function() {
            var counterElem = this.widget.find('.' + classPrefix + 'counter_single');
            if (!counterElem.length) {
                counterElem = $('<span>', {
                    'class': getElementClassNames('counter', 'single')
                });
                this.widget.append(counterElem);
            }
            return counterElem;
        }
    };


    function Button(widget, options) {
        this.widget = widget;
        this.options = $.extend({}, options);
        this.detectService();
        if (this.service) {
            this.init();
        }
    }

    Button.prototype = {
        init: function() {
            this.detectParams();
            this.initHtml();
            setTimeout($.proxy(this.initCounter, this), 0);
        },

        update: function(options) {
            $.extend(this.options, {forceUpdate: false}, options);
            this.widget.find('.' + prefix + '__counter').remove();  // Remove old counter
            this.initCounter();
        },

        detectService: function() {
            var service = this.widget.data('service');
            if (!service) {
                // class="facebook"
                var node = this.widget[0];
                var classes = node.classList || node.className.split(' ');
                for (var classIdx = 0; classIdx < classes.length; classIdx++) {
                    var cls = classes[classIdx];
                    if (services[cls]) {
                        service = cls;
                        break;
                    }
                }
                if (!service) return;
            }
            this.service = service;
            $.extend(this.options, services[service]);
        },

        detectParams: function() {
            var data = this.widget.data();

            // Custom page counter URL or number
            if (data.counter) {
                var number = parseInt(data.counter, 10);
                if (isNaN(number)) {
                    this.options.counterUrl = data.counter;
                }
                else {
                    this.options.counterNumber = number;
                }
            }

            // Custom page title
            if (data.title) {
                this.options.title = data.title;
            }

            // Custom page URL
            if (data.url) {
                this.options.url = data.url;
            }
        },

        initHtml: function() {
            var options = this.options;
            var widget = this.widget;

            // Old initialization HTML
            var a = widget.find('a');
            if (a.length) {
                this.cloneDataAttrs(a, widget);
            }

            // Button
            var button = $('<span>', {
                'class': this.getElementClassNames('button'),
                'text': widget.text()
            });
            if (options.clickUrl) {
                var url = makeUrl(options.clickUrl, {
                    url: options.url,
                    title: options.title
                });
                var link = $('<a>', {
                    href: url
                });
                this.cloneDataAttrs(widget, link);
                widget.replaceWith(link);
                this.widget = widget = link;
            }
            else {
                widget.on('click', $.proxy(this.click, this));
            }

            widget.removeClass(this.service);
            widget.addClass(this.getElementClassNames('widget'));

            // Icon
            button.prepend($('<span>', {'class': this.getElementClassNames('icon')}).html('<i class="' + options.faIcon + '"></i>'));

            widget.empty().append(button);
            this.button = button;
        },

        initCounter: function() {
            if (this.options.counters) {
                if (this.options.counterNumber) {
                    this.updateCounter(this.options.counterNumber);
                }
                else {
                    var extraOptions = {
                        counterUrl: this.options.counterUrl,
                        forceUpdate: this.options.forceUpdate
                    };
                    counters.fetch(this.service, this.options.url, extraOptions)
                        .always($.proxy(this.updateCounter, this));
                }
            }
        },

        cloneDataAttrs: function(source, destination) {
            var data = source.data();
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    destination.data(key, data[key]);
                }
            }
        },

        getElementClassNames: function(elem) {
            return getElementClassNames(elem, this.service);
        },

        updateCounter: function(number) {
            number = parseInt(number, 10) || 0;

            var params = {
                'class': this.getElementClassNames('counter'),
                'text': number
            };
            if (!number && !this.options.zeroes) {
                params['class'] += ' ' + prefix + '__counter_empty';
                params.text = '';
            }
            var counterElem = $('<span>', params);
            this.widget.append(counterElem);

            this.widget.trigger('counter.' + prefix, [this.service, number]);
        },

        click: function(e) {
            var options = this.options;
            var process = true;
            if ($.isFunction(options.click)) {
                process = options.click.call(this, e);
            }
            if (process) {
                var url = makeUrl(options.popupUrl, {
                    url: options.url,
                    title: options.title
                });
                url = this.addAdditionalParamsToUrl(url);
                this.openPopup(url, {
                    width: options.popupWidth,
                    height: options.popupHeight
                });
            }
            return false;
        },

        addAdditionalParamsToUrl: function(url) {
            var params = $.param($.extend(this.widget.data(), this.options.data));
            if ($.isEmptyObject(params)) return url;
            var glue = url.indexOf('?') === -1 ? '?' : '&';
            return url + glue + params;
        },

        openPopup: function(url, params) {
            var left = Math.round(screen.width/2 - params.width/2);
            var top = 0;
            if (screen.height > params.height) {
                top = Math.round(screen.height/3 - params.height/2);
            }

            var win = window.open(url, 'sl_' + this.service, 'left=' + left + ',top=' + top + ',' +
                'width=' + params.width + ',height=' + params.height + ',personalbar=0,toolbar=0,scrollbars=1,resizable=1');
            if (win) {
                win.focus();
                this.widget.trigger('popup_opened.' + prefix, [this.service, win]);
                var timer = setInterval($.proxy(function() {
                    if (!win.closed) return;
                    clearInterval(timer);
                    this.widget.trigger('popup_closed.' + prefix, this.service);
                }, this), this.options.popupCheckInterval);
            }
            else {
                location.href = url;
            }
        }
    };


    /**
     * Helpers
     */

    // Camelize data-attributes
    function dataToOptions(elem) {
        function upper(m, l) {
            return l.toUpper();
        }
        var options = {};
        var data = elem.data();
        for (var key in data) {
            var value = data[key];
            if (value === 'yes') value = true;
            else if (value === 'no') value = false;
            options[key.replace(/-(\w)/g, upper)] = value;
        }
        return options;
    }

    function makeUrl(url, context) {
        return template(url, context, encodeURIComponent);
    }

    function template(tmpl, context, filter) {
        return tmpl.replace(/\{([^\}]+)\}/g, function(m, key) {
            // If key doesn't exists in the context we should keep template tag as is
            return key in context ? (filter ? filter(context[key]) : context[key]) : m;
        });
    }

    function getElementClassNames(elem, mod) {
        var cls = classPrefix + elem;
        return cls + ' ' + cls + '_' + mod;
    }

    function closeOnClick(elem, callback) {
        function handler(e) {
            if ((e.type === 'keydown' && e.which !== 27) || $(e.target).closest(elem).length) return;
            elem.removeClass(openClass);
            doc.off(events, handler);
            if ($.isFunction(callback)) callback();
        }
        var doc = $(document);
        var events = 'click touchstart keydown';
        doc.on(events, handler);
    }

    function showInViewport(elem) {
        var offset = 10;
        if (document.documentElement.getBoundingClientRect) {
            var left = parseInt(elem.css('left'), 10);
            var top = parseInt(elem.css('top'), 10);

            var rect = elem[0].getBoundingClientRect();
            if (rect.left < offset)
                elem.css('left', offset - rect.left + left);
            else if (rect.right > window.innerWidth - offset)
                elem.css('left', window.innerWidth - rect.right - offset + left);

            if (rect.top < offset)
                elem.css('top', offset - rect.top + top);
            else if (rect.bottom > window.innerHeight - offset)
                elem.css('top', window.innerHeight - rect.bottom - offset + top);
        }
        elem.addClass(openClass);
    }


    /**
     * Auto initialization
     */
    $(function() {
        $('.' + prefix).socialLikes();
    });

}));

/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
 */
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
    if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
            u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
                h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
        a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
        y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);


/*! jQuery ellipsis - v1.1.1 - 2014-02-23
 * https://github.com/STAR-ZERO/jquery-ellipsis
 * Copyright (c) 2014 Kenji Abe; Licensed MIT */
!function(a){a.fn.ellipsis=function(b){var c={row:1,onlyFullWords:!1,"char":"...",callback:function(){},position:"tail"};return b=a.extend(c,b),this.each(function(){var c=a(this),d=c.text(),e=d,f=e.length,g=c.height();c.text("a");var h=parseFloat(c.css("lineHeight"),10),i=c.height(),j=h>i?h-i:0,k=j*(b.row-1)+i*b.row;if(k>=g)return c.text(d),void b.callback.call(this);var l=1,m=0,n=d.length;if("tail"===b.position){for(;n>l;)m=Math.ceil((l+n)/2),c.text(d.slice(0,m)+b["char"]),c.height()<=k?l=m:n=m-1;d=d.slice(0,l),b.onlyFullWords&&(d=d.replace(/[\u00AD\w\uac00-\ud7af]+$/,"")),d+=b["char"]}else if("middle"===b.position){for(var o=0;n>l;)m=Math.ceil((l+n)/2),o=Math.max(f-m,0),c.text(e.slice(0,Math.floor((f-o)/2))+b["char"]+e.slice(Math.floor((f+o)/2),f)),c.height()<=k?l=m:n=m-1;o=Math.max(f-l,0);var p=e.slice(0,Math.floor((f-o)/2)),q=e.slice(Math.floor((f+o)/2),f);b.onlyFullWords&&(p=p.replace(/[\u00AD\w\uac00-\ud7af]+$/,"")),d=p+b["char"]+q}c.text(d),b.callback.call(this)}),this}}(jQuery);



/*
 * jPreLoader - jQuery plugin
 * Create a Loading Screen to preload images and content for you website
 *
 * Name:			jPreLoader.js
 * Author:		Kenny Ooi - http://www.inwebson.com
 * Date:			July 11, 2012
 * Version:		2.1
 * Example:		http://www.inwebson.com/demo/jpreloader-v2/
 *
 */

(function($) {
    var items = new Array(),
        errors = new Array(),
        onComplete = function() {},
        current = 0;

    var jpreOptions = {
        splashVPos: '35%',
        loaderVPos: '75%',
        splashID: '#jpreContent',
        showSplash: true,
        showPercentage: true,
        autoClose: true,
        closeBtnText: 'Start!',
        onetimeLoad: false,
        debugMode: false,
        splashFunction: function() {}
    }

    //cookie
    var getCookie = function() {
        if( jpreOptions.onetimeLoad ) {
            var cookies = document.cookie.split('; ');
            for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
                if ((parts.shift()) === "jpreLoader") {
                    return (parts.join('='));
                }
            }
            return false;
        } else {
            return false;
        }

    }
    var setCookie = function(expires) {
        if( jpreOptions.onetimeLoad ) {
            var exdate = new Date();
            exdate.setDate( exdate.getDate() + expires );
            var c_value = ((expires==null) ? "" : "expires=" + exdate.toUTCString());
            document.cookie="jpreLoader=loaded; " + c_value;
        }
    }

    //create jpreLoader UI
    var createContainer = function() {

        jOverlay = $('<div></div>')
            .attr('id', 'jpreOverlay')
            .css({
                position: "fixed",
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 9999999
            })
            .appendTo('body');

        if(jpreOptions.showSplash) {
            jContent = $('<div></div>')
                .attr('id', 'jpreSlide')
                .appendTo(jOverlay);

            var conWidth = $(window).width() - $(jContent).width();
            $(jContent).css({
                position: "absolute",
                top: jpreOptions.splashVPos,
                left: Math.round((50 / $(window).width()) * conWidth) + '%'
            });
            $(jContent).html($(jpreOptions.splashID).wrap('<div/>').parent().html());
            $(jpreOptions.splashID).remove();
            jpreOptions.splashFunction()
        }

        jLoader = $('<div>'+$('#jpreLoader_svg').html()+'</div>')
            .attr('id', 'jpreLoader')
            .appendTo(jOverlay);

        var posWidth = $(window).width() - $(jLoader).width();
        $(jLoader).css({
            position: 'absolute',
            top: jpreOptions.loaderVPos,
            left: Math.round((50 / $(window).width()) * posWidth) + '%'
        });

        jBar = $('<div>'+$('#jpreBar_svg').html()+'</div>')
            .attr('id', 'jpreBar')
            .css({
                width: '0%',
                height: '100%'
            })
            .appendTo(jLoader);

        if(jpreOptions.showPercentage) {
            jPer = $('<div></div>')
                .attr('id', 'jprePercentage')
                .css({
                    position: 'relative',
                    height: '100%'
                })
                .appendTo(jLoader)
                .html('Loading...');
        }
        if( !jpreOptions.autoclose ) {
            jButton = $('<div></div>')
                .attr('id', 'jpreButton')
                .on('click', function() {
                    loadComplete();
                })
                .css({
                    position: 'relative',
                    height: '100%'
                })
                .appendTo(jLoader)
                .text(jpreOptions.closeBtnText)
                .hide();
        }
    }

    //get all images from css and <img> tag
    var getImages = function(element) {
        $(element).find('*:not(script)').each(function() {
            var url = "";

            if ($(this).css('background-image').indexOf('none') == -1 && $(this).css('background-image').indexOf('-gradient') == -1) {
                url = $(this).css('background-image');
                if(url.indexOf('url') != -1) {
                    var temp = url.match(/url\((.*?)\)/);
                    url = temp[1].replace(/\"/g, '');
                }
            } else if ($(this).get(0).nodeName.toLowerCase() == 'img' && typeof($(this).attr('src')) != 'undefined') {
                url = $(this).attr('src');
            }

            if (url.length > 0) {
                items.push(url);
            }
        });
    }

    //create preloaded image
    var preloading = function() {
        for (var i = 0; i < items.length; i++) {
            if(loadImg(items[i]));
        }
    }
    var loadImg = function(url) {
        var imgLoad = new Image();
        $(imgLoad)
            .load(function() {
                completeLoading();
            })
            .error(function() {
                errors.push($(this).attr('src'));
                completeLoading();
            })
            .attr('src', url);
    }

    //update progress bar once image loaded
    var completeLoading = function() {
        current++;

        var per = Math.round((current / items.length) * 100);
        $(jBar).stop().animate({
            width: per + '%'
        }, 500, 'linear');

        if(jpreOptions.showPercentage) {
            $(jPer).text(per+"%");
        }

        //if all images loaded
        if(current >= items.length) {
            current = items.length;
            setCookie();	//create cookie

            if(jpreOptions.showPercentage) {
                $(jPer).text("100%");
            }

            //fire debug mode
            if (jpreOptions.debugMode) {
                var error = debug();
            }


            //max progress bar
            $(jBar).stop().animate({
                width: '100%'
            }, 500, 'linear', function() {
                //autoclose on
                if( jpreOptions.autoClose )
                    loadComplete();
                else
                    $(jButton).fadeIn(1000);
            });
        }
    }

    //triggered when all images are loaded
    var loadComplete = function() {
        $(jOverlay).fadeOut(800, function() {
            $(jOverlay).remove();
            onComplete();	//callback function
        });
    }

    //debug mode
    var debug = function() {
        if(errors.length > 0) {
            var str = 'ERROR - IMAGE FILES MISSING!!!\n\r'
            str	+= errors.length + ' image files cound not be found. \n\r';
            str += 'Please check your image paths and filenames:\n\r';
            for (var i = 0; i < errors.length; i++) {
                str += '- ' + errors[i] + '\n\r';
            }
            return true;
        } else {
            return false;
        }
    }

    $.fn.jpreLoader = function(options, callback) {
        if(options) {
            $.extend(jpreOptions, options );
        }
        if(typeof callback == 'function') {
            onComplete = callback;
        }

        //show preloader once JS loaded
        $('body').css({
            'display': 'block'
        });

        return this.each(function() {
            if( !(getCookie()) ) {
                createContainer();
                getImages(this);
                preloading();
            }
            else {	//onetime load / cookie is set
                $(jpreOptions.splashID).remove();
                onComplete();
            }
        });
    };

})(jQuery);





/*jslint devel: true, bitwise: true, regexp: true, browser: true, confusion: true, unparam: true, eqeq: true, white: true, nomen: true, plusplus: true, maxerr: 50, indent: 4 */
/*globals jQuery */

/*!
 * Coverflow
 *
 * Copyright (c) 2013-2016 Martijn W. van der Lee
 * Licensed under the MIT.
 */

/* Lightweight and flexible coverflow effect using CSS3 transforms.
 * For modern browsers with some amount of graceful degradation.
 * Optional support for jQuery.interpolate() plugin.
 * Optional support for .reflect() plugins.
 *
 * Requires jQuery 1.7+ and jQueryUI 1.9+.
 * Recommended jQuery 1.8+ and jQueryUI 1.9+.
 */

;(function($, undefined) {
    "use strict";

    var sign		= function(number) {
            return number < 0 ? -1 : 1;
        },
        scl			= function(number, fromMin, fromMax, toMin, toMax) {
            return ((number - fromMin) * (toMax - toMin) / (fromMax - fromMin)) + toMin;
        },
        wheelEvents	= ('onwheel' in document) ? 'wheel' : 'mousewheel',	// FF
        getWheel	= function(event) {
            if ('deltaY' in event.originalEvent) {
                return 0 - event.originalEvent.deltaY;
            } else if ('wheelDelta' in event.originalEvent) {
                return event.originalEvent.wheelDelta;	// IE
            }
        };

    $.widget("vanderlee.coverflow", {
        options: {
            animateComplete:	undefined,
            animateStart:		undefined,
            animateStep:		undefined,
            density:			1,
            duration:			'normal',
            easing:				undefined,
            enableKeyboard:		'both',			// true, false, 'both', 'focus', 'hover', 'none'
            enableClick:		true,
            enableWheel:		false,
            index:				0,
            innerAngle:			-75,
            innerCss:			undefined,
            innerOffset:		100 / 3,
            innerScale:			0.75,
            outerAngle:			-30,
            outerCss:			undefined,
            outerScale:			0.25,
            selectedCss:		undefined,
            visible:			'density',		// 'density', 'all', NNN (exact)
            width:				undefined,

            change:				undefined,		// Whenever index is changed
            confirm:			undefined,		// Whenever clicking on the current item
            select:				undefined		// Whenever index is set (also on init)
        },

        _window_handler_resize:		null,
        _window_handler_keydown:	null,

        _create: function() {
            var that = this,
                covers = that._getCovers(),
                images = covers.filter('img').add('img', covers).filter(function() {
                    return !(this.complete || this.height > 0);
                }),
                maxHeight = Math.max.apply(null, covers.map(function(){
                    return $(this).height();
                }).get()),
                height;

            // Internal event prefix
            that.widgetEventPrefix	= 'vanderlee-coverflow';

            that.hovering			= false;
            that.pagesize			= 1;
            that.currentIndex		= that.options.index;

            // Fix height
            that.element.height(maxHeight);
            images.on(function() {
                height = that._getCovers().height();
                if (height > maxHeight) {
                    maxHeight = height;
                    that.element.height(maxHeight);
                }
            });

            // Hide all covers and set position to absolute
            covers.hide();

            // Add tabindex and autofocus if needed.
            if (this.element.not(':tabbable')) {
                this.element.attr('tabIndex', -1);
                if (this.element.attr('autofocus')) {
                    this.element.focus();
                }
            }

            // Enable click-jump
            that.element.on('mousedown tap click', '> *', function(event) {
                if (that.options.enableClick) {
                    var index = that._getCovers().index(this);
                    if (index === that.currentIndex) {
                        that._callback('confirm', event);
                    } else {
                        that._setIndex(index, true);
                    }
                }
            });

            // Mousewheel
            that.element.on(wheelEvents, function(event) {
                if (that.options.enableWheel) {
                    var delta = getWheel(event) > 0 ? 1 : -1;

                    event.preventDefault();
                    that._setIndex(that.options.index - delta, true);
                }
            });

            // Swipe
            if ($.isFunction(that.element.swipe)) {
                that.element.swipe({
                    allowPageScroll: "vertical",
                    swipe: function(event, direction, distance, duration, fingerCount) {
                        var count = Math.round((direction==="left"? 1 : (direction==="right"? -1 : 0 )) * 1.25 * that.pagesize * distance / that.element.width());
                        that._setIndex(that.options.index + count, true);
                    }
                });
            }

            // Keyboard
//			that.element.hover(
//				function() { that.hovering = true; }
//			,	function() { that.hovering = false; }
//			);

            // Refresh on resize
            that._window_handler_resize = function() {
                that.refresh();
            };
            $(window).on('resize', that._window_handler_resize);

            that._window_handler_keydown = function(event) {
                if (($.inArray(that.options.enableKeyboard, [true, 'both', 'focus']) >= 0 && that.element.is(':focus'))
                    || ($.inArray(that.options.enableKeyboard, [true, 'both', 'hover']) >= 0 >= 0 && that.element.is(':hover'))) {
                    switch (event.which) {
                        case 36:	// home
                            event.preventDefault();
                            that._setIndex(0, true);
                            break;

                        case 35:	// end
                            event.preventDefault();
                            that._setIndex(that._getCovers().length - 1, true);
                            break;

                        case 38:	// up
                        case 37:	// left
                            event.preventDefault();
                            that._setIndex(that.options.index - 1, true);
                            break;

                        case 40:	// down
                        case 39:	// right
                            event.preventDefault();
                            that._setIndex(that.options.index + 1, true);
                            break;

                        case 33:	// page up (towards home)
                            event.preventDefault();
                            that._setIndex(that.options.index - that.pagesize, true);
                            break;

                        case 34:	// page down (towards end)
                            event.preventDefault();
                            that._setIndex(that.options.index + that.pagesize, true);
                            break;
                    }
                }
            };
            $(window).on('keydown', that._window_handler_keydown);

            // Initialize
            that._setIndex(that.options.index, false, true);

            return that;
        },


        /**
         * Destroy this object
         * @returns {undefined}
         */
        _destroy: function() {
            $(window).off('resize', this._window_handler_resize);
            $(window).off('keydown', this._window_handler_keydown);
            this.element.height('');
        },

        /**
         * Returns the currently selected cover
         * @returns {jQuery} jQuery object
         */
        cover: function() {
            return $(this._getCovers()[this.options.index]);
        },

        /**
         *
         * @returns {unresolved}
         */
        _getCovers: function() {
            return $('> *', this.element);
        },

        _setIndex: function(index, animate, initial) {
            var that = this,
                covers = that._getCovers();

            index = Math.max(0, Math.min(index, covers.length - 1));

            if (index !== that.options.index) {
                // Fix reflections
                covers.css('position', 'absolute');
                this._frame(that.options.index);

                if (animate === true || that.options.duration === 0) {
                    that.options.index	= Math.round(index);

                    var duration	= typeof that.options.duration === "number"
                        ? that.options.duration
                        : jQuery.fx.speeds[that.options.duration] || jQuery.fx.speeds._default;

                    this.refresh(duration, that.options.index);
                } else {
                    that.options.index = Math.round(index);
                    that.refresh(0);
                }
            } else if (initial === true) {
                that.refresh();
                that._callback('select');
            }
        },

        _callback: function(callback, event) {
            this._trigger(callback, event, [this._getCovers().get(this.currentIndex), this.currentIndex]);
        },

        index: function(index) {
            if (index === undefined) {
                return this.options.index;
            }

            while (index < 0) {
                index += this._getCovers().length;
            }

            this._setIndex(index, true);
        },

        _frame: function(frame) {
            frame = frame.toFixed(6);

            var that		= this,
                covers		= that._getCovers(),
                count		= covers.length,
                parentWidth	= that.element.innerWidth(),
                coverWidth	= that.options.width || covers.eq(this.options.index).show().get(0).offsetWidth,
                visible		= that.options.visible === 'density'	? Math.round(parentWidth * that.options.density / coverWidth)
                    : $.isNumeric(that.options.visible)		? that.options.visible
                        : count,
                parentLeft	= that.element.position().left - ((1 - that.options.outerScale) * coverWidth * 0.5),
                space		= (parentWidth - (that.options.outerScale * coverWidth)) * 0.5;

            that.pagesize	= visible;

            covers.removeClass('current').each(function(index, cover) {
                var $cover		= $(cover),
                    position	= index - frame,
                    offset		= Math.min(Math.max(-1., position / visible), 1),
                    isMiddle	= position == 0,
                    zIndex		= count - Math.abs(Math.round(position)),
                    isVisible	= Math.abs(position) <= visible,
                    sin			= Math.sin(offset * Math.PI * 0.5),
                    cos			= Math.cos(offset * Math.PI * 0.5),
                    left		= sign(sin) * scl(Math.abs(sin), 0, 1, that.options.innerOffset * that.options.density, space),
                    scale		= isVisible ? scl(Math.abs(cos), 1, 0, that.options.innerScale, that.options.outerScale) : 0,
                    angle		= sign(sin) * scl(Math.abs(sin), 0, 1, that.options.innerAngle, that.options.outerAngle),
                    css			= isMiddle ? that.options.selectedCss || {}
                        : ( $.interpolate && that.options.outerCss && !$.isEmptyObject(that.options.outerCss) ? (
                                    isVisible ? $.interpolate(that.options.innerCss || {}, that.options.outerCss, Math.abs(sin))
                                        : that.options.outerCss
                                ) : {}
                        ),
                    transform;

                // bad behaviour for being in the middle
                if (Math.abs(position) < 1) {
                    angle	= 0 - (0 - angle) * Math.abs(position);
                    scale	= 1 - (1 - scale) * Math.abs(position);
                    left	= 0 - (0 - left) * Math.abs(position);
                }

                //@todo Test CSS for middle behaviour (or does $.interpolate handle it?)

                transform = 'scale(' + scale + ',' + scale + ') perspective(' + (parentWidth * 0.5) + 'px) rotateY(' + angle + 'deg)';

                $cover[isMiddle ? 'addClass' : 'removeClass']('current');
                $cover[isVisible ? 'show' : 'hide']();
                $cover.css($.extend
                (css, {
                    'left':					parentLeft + space + left,
                    'z-index':				zIndex,
                    '-webkit-transform':	transform,
                    '-ms-transform':		transform,
                    'transform':			transform
                }));

                that._trigger('animateStep', null, [cover, offset, isVisible, isMiddle, sin, cos]);

                if (frame == that.options.index) {
                    that._trigger('animateComplete', null, [cover, offset, isVisible, isMiddle, sin, cos]);
                }
            });
        },

        refresh: function(duration, index) {
            var that = this,
                previous = that.currentIndex,
                covers = that._getCovers(),
                covercount = covers.length,
                triggered = false;

            that._callback('before');

            covers.css('position', 'absolute');
            that.element.stop().animate({
                '__coverflow_frame':	index || that.options.index
            }, {
                'easing':	that.options.easing,
                'duration': duration || 0,
                'step':		function(now, fx) {
                    that._frame(now);

                    that.currentIndex = Math.max(0, Math.min(Math.round(now), covercount - 1));
                    if (previous !== that.currentIndex) {
                        previous = that.currentIndex;
                        that._callback('change');
                        if (that.currentIndex === that.options.index) {
                            triggered = true;
                        }
                    }
                },
                'complete':		function() {
                    that.currentIndex	= that.options.index;
                    that._callback('after');

                    if (!triggered) {
                        that._callback('change');
                    }
                    that._callback('select');
                }
            });
        }
    });
}(jQuery));
