(()=>{var e={63166:(e,t,r)=>{"use strict";r.d(t,{fc:()=>i});let o="";function n(e){if("https://subscribe.wordpress.com"===e.origin&&e.data){const t=JSON.parse(e.data);if(t&&t.result&&t.result.jwt_token&&(o=t.result.jwt_token,a(o)),t&&"close"===t.action&&o)window.location.reload(!0);else if(t&&"close"===t.action){window.removeEventListener("message",n);document.getElementById("memberships-modal-window").close(),document.body.classList.remove("modal-open")}}}function s(e){e.addEventListener("click",(t=>(t.preventDefault(),function(e){document.body.classList.add("modal-open");const t=document.getElementById("memberships-modal-window");t&&document.body.removeChild(t);const r=document.createElement("dialog");r.setAttribute("id","memberships-modal-window");const o=document.createElement("iframe"),s=document.querySelector('input[name="lang"]');let i=null;s&&(i=s.value),o.setAttribute("id","memberships-modal-iframe"),o.innerText="This feature requires inline frames. You have iframes disabled or your browser does not support them.",o.src=e+"&display=alternate&jwt_token="+c(),i&&(o.src=o.src+"&lang="+i),o.setAttribute("frameborder","0"),o.setAttribute("allowtransparency","true"),o.setAttribute("allowfullscreen","true"),r.classList.add("jetpack-memberships-modal"),document.body.appendChild(r),r.appendChild(o),window.addEventListener("message",n,!1),r.showModal()}(e.getAttribute("href")),this.blur(),!1)))}const i=e=>{Array.prototype.slice.call(document.querySelectorAll(e)).forEach((e=>{if("true"!==e.getAttribute("data-jetpack-memberships-button-initialized")){try{s(e)}catch(e){console.error("Problem setting up Modal",e)}e.setAttribute("data-jetpack-memberships-button-initialized","true")}}))},c=function(){const e=`; ${document.cookie}`.split("; wp-jp-premium-content-session=");if(2===e.length)return e.pop().split(";").shift()},a=function(e){const t=new Date,r=new Date(t.setMonth(t.getMonth()+1));document.cookie=`wp-jp-premium-content-session=${e}; expires=${r.toGMTString()}; path=/`}},80425:(e,t,r)=>{"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(r.p=window.Jetpack_Block_Assets_Base_Url)},47701:e=>{"use strict";e.exports=window.wp.domReady}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})(),(()=>{"use strict";r(80425)})(),(()=>{"use strict";var e=r(47701),t=r.n(e),o=r(63166);const n=[{querySelector:".wp-block-premium-content-container",blockType:"paid-content"},{querySelector:".wp-block-jetpack-payment-buttons",blockType:"payment-button"},{querySelector:".jetpack-subscribe-paywall",blockType:"paywall"},{querySelector:".wp-block-jetpack-donations",blockType:"donations"}];"undefined"!=typeof window&&t()((()=>{(0,o.fc)(".wp-block-jetpack-recurring-payments a"),setTimeout((()=>{const e=new URL(window.location.href);if(document.querySelectorAll(".wp-block-button__link").forEach((e=>{if(e.href){const t=new URL(e.href),r=n.filter((t=>e.closest(t.querySelector)?.contains(e)));1===r.length&&(t.searchParams.set("block_type",r[0].blockType),e.href=t.toString())}})),e.searchParams.has("recurring_payments")&&window.history.replaceState){const t=`recurring-payments-${e.searchParams.get("recurring_payments")}`;e.searchParams.delete("recurring_payments"),window.history.replaceState({},"",e),document.getElementById(t)?.click()}}),100)}))})()})();