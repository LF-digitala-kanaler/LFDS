import React, { useState, useEffect } from 'react';



const LfuiWrapper = ({children, script}) => {
  const validation = `function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).Pristine=r()}(this,function(){"use strict";var t={required:"This field is required",email:"This field requires a valid e-mail address",number:"This field requires a number",integer:"This field requires an integer value",url:"This field requires a valid website URL",tel:"This field requires a valid telephone number",maxlength:"This fields length must be < ${1}",minlength:"This fields length must be > ${1}",min:"Minimum value for this field is ${1}",max:"Maximum value for this field is ${1}",pattern:"Please match the requested format",equals:"The two fields do not match"};function f(e){var t=arguments;return this.replace(/\${([^{}]*)}/g,function(e,r){return t[r]})}function n(e){return e.pristine.self.form.querySelectorAll('input[name="'+e.getAttribute("name")+'"]:checked').length}function s(e,r){r.name=e,r.msg||(r.msg=t[e]),void 0===r.priority&&(r.priority=1),d[e]=r}var c={classTo:"form-group",errorClass:"has-danger",successClass:"has-success",errorTextParent:"form-group",errorTextTag:"div",errorTextClass:"text-help"},p="pristine-error",m=["required","min","max","minlength","maxlength","pattern"],r=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,d={};function e(e,r,t){var n,i,s,o=this;function a(e,r,t,n){var i,s=d[t];s&&(e.push(s),n&&((i="pattern"===t?[n]:n.split(",")).unshift(null),r[t]=i))}function l(e){if(e.errorElements)return e.errorElements;var r=function(e,r){for(;(e=e.parentElement)&&!e.classList.contains(r););return e}(e.input,o.config.classTo),t=null,n=null;return(t=o.config.classTo===o.config.errorTextParent?r:r.querySelector("."+o.config.errorTextParent))&&((n=t.querySelector("."+p))||((n=document.createElement(o.config.errorTextTag)).className=p+" "+o.config.errorTextClass,t.appendChild(n),n.pristineDisplay=n.style.display)),e.errorElements=[r,n]}function u(e){var r=l(e),t=r[0],n=r[1];t&&(t.classList.remove(o.config.successClass),t.classList.add(o.config.errorClass)),n&&(n.innerHTML=e.errors.join("<br/>"),n.style.display=n.pristineDisplay||"")}return i=r,s=t,(n=e).setAttribute("novalidate","true"),o.form=n,o.config=function(e,r){for(var t in r)t in e||(e[t]=r[t]);return e}(i||{},c),o.live=!(!1===s),o.fields=Array.from(n.querySelectorAll("input:not([type^=hidden]):not([type^=submit]), select, textarea")).map(function(e){var t=[],n={},i={};return[].forEach.call(e.attributes,function(e){if(/^data-pristine-/.test(e.name)){var r=e.name.substr(14);if(r.endsWith("-message"))return void(i[r.slice(0,r.length-8)]=e.value);"type"===r&&(r=e.value),a(t,n,r,e.value)}else~m.indexOf(e.name)?a(t,n,e.name,e.value):"type"===e.name&&a(t,n,e.value)}),t.sort(function(e,r){return r.priority-e.priority}),o.live&&e.addEventListener(~["radio","checkbox"].indexOf(e.getAttribute("type"))?"change":"input",function(e){o.validate(e.target)}.bind(o)),e.pristine={input:e,validators:t,params:n,messages:i,self:o}}.bind(o)),o.validate=function(e,r){r=e&&!0===r||!0===e;var t=o.fields;!0!==e&&!1!==e&&(e instanceof HTMLElement?t=[e.pristine]:(e instanceof NodeList||e instanceof(window.$||Array)||e instanceof Array)&&(t=Array.from(e).map(function(e){return e.pristine})));for(var n,i=!0,s=0;t[s];s++){var a=t[s];!function(e){for(var r=[],t=!0,n=0;e.validators[n];n++){var i,s=e.validators[n],a=e.params[s.name]?e.params[s.name]:[];if(a[0]=e.input.value,!s.fn.apply(e.input,a))if(t=!1,!function(e){return e&&e.constructor&&e.call&&e.apply}(s.msg)?(i=e.messages[s.name]||s.msg,r.push(f.apply(i,a))):r.push(s.msg(e.input.value,a)),!0===s.halt)break}return e.errors=r,t}(a)?(i=!1,r||u(a)):r||(n=void 0,(n=function(e){var r=l(e),t=r[0],n=r[1];t&&(t.classList.remove(o.config.errorClass),t.classList.remove(o.config.successClass));n&&(n.innerHTML="",n.style.display="none");return r}(a)[0])&&n.classList.add(o.config.successClass))}return i},o.getErrors=function(e){if(e)return(!e.tagName||"select"!==e.tagName.toLowerCase())&&e.length?e[0].pristine.errors:e.pristine.errors;for(var r=[],t=0;t<o.fields.length;t++){var n=o.fields[t];n.errors.length&&r.push({input:n.input,errors:n.errors})}return r},o.addValidator=function(e,r,t,n,i){e instanceof HTMLElement?(e.pristine.validators.push({fn:r,msg:t,priority:n,halt:i}),e.pristine.validators.sort(function(e,r){return r.priority-e.priority})):console.warn("The parameter elem must be a dom element")},o.addError=function(e,r){(e=e.length?e[0]:e).pristine.errors.push(r),u(e.pristine)},o.reset=function(){for(var e=0;o.fields[e];e++)o.fields[e].errorElements=null;Array.from(o.form.querySelectorAll("."+p)).map(function(e){e.parentNode.removeChild(e)}),Array.from(o.form.querySelectorAll("."+o.config.classTo)).map(function(e){e.classList.remove(o.config.successClass),e.classList.remove(o.config.errorClass)})},o.destroy=function(){o.reset(),o.fields.forEach(function(e){delete e.input.pristine}),o.fields=[]},o.setGlobalConfig=function(e){c=e},o}return s("text",{fn:function(){return!0},priority:0}),s("required",{fn:function(e){return"radio"===this.type||"checkbox"===this.type?n(this):void 0!==e&&""!==e},priority:99,halt:!0}),s("email",{fn:function(e){return!e||r.test(e)}}),s("number",{fn:function(e){return!e||!isNaN(parseFloat(e))},priority:2}),s("integer",{fn:function(e){return!e||/^\d+$/.test(e)}}),s("minlength",{fn:function(e,r){return!e||e.length>=parseInt(r)}}),s("maxlength",{fn:function(e,r){return!e||e.length<=parseInt(r)}}),s("min",{fn:function(e,r){return!e||("checkbox"===this.type?n(this)>=parseInt(r):parseFloat(e)>=parseFloat(r))}}),s("max",{fn:function(e,r){return!e||("checkbox"===this.type?n(this)<=parseInt(r):parseFloat(e)<=parseFloat(r))}}),s("pattern",{fn:function(e,r){var t=r.match(new RegExp("^/(.*?)/([gimy]*)$"));return!e||new RegExp(t[1],t[2]).test(e)}}),s("equals",{fn:function(e,r){var t=document.querySelector(r);return t&&(!e&&!t.value||t.value===e)}}),e.addValidator=function(e,r,t,n,i){s(e,{fn:r,msg:t,priority:n,halt:i})},e});` // eslint-disable-line no-useless-escape
  const [js, setJs] = useState("");
  
  useEffect(() => {
    
    
    setJs(script)
    
  }, []);
  
  return (
    <article className="lfui-theme">
      <script>{validation}</script>
      {children}
      <script>{eval(js)}</script>
      
    </article>
    
  )
};

export default LfuiWrapper;

