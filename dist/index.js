"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("bootstrap/dist/css/bootstrap.css");var o=require("react"),r=require("prop-types");function e(o){return o&&"object"==typeof o&&"default"in o?o:{default:o}}var a=e(o),t=e(r);function n(o,r){void 0===r&&(r={});var e=r.insertAt;if(o&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css","top"===e&&a.firstChild?a.insertBefore(t,a.firstChild):a.appendChild(t),t.styleSheet?t.styleSheet.cssText=o:t.appendChild(document.createTextNode(o))}}n(':root{--primary-color:#137aa0;--primary-text-color:#fff;--secondary-color:#6d767e;--secondary-text-color:#fff;--success-color:#198653;--success-text-color:#fff;--warning-color:#ffc107;--warning-text-color:#fff;--danger-color:#dc3848;--danger-text-color:#fff;--disable-button-opacity:0.5;--button-padding:8px 32px;--border-radius:24px;--font-weight:700;--button-height:50px;--box-shadow:0px 4px 4px 0px #00000040;--font-family:"Inter",sans-serif;--font-size:18px;--font-style:normal;--line-height:normal;--letter-spacing:0em}');n("@import url(../../../styles/global.css);.button{border:none;border-radius:var(--border-radius);box-shadow:var(--box-shadow);font-family:var(--font-family);font-size:var(--font-size);font-style:var(--font-style);font-weight:var(--font-weight);height:var(--button-height);letter-spacing:var(--letter-spacing);line-height:var(--line-height);padding:var(--button-padding);white-space:nowrap}.disabled-button{cursor:not-allowed;opacity:var(--disable-button-opacity)}.primary{background-color:var(--primary-color);color:var(--primary-text-color)}.secondary{background-color:var(--secondary-color);color:var(--secondary-text-color)}.success{background-color:var(--success-color);color:var(--success-text-color)}.warning{background-color:var(--warning-color);color:var(--warning-text-color)}.danger{background-color:var(--danger-color);color:var(--danger-text-color)}.outline-primary{background-color:#fff;border:2px solid var(--primary-color);color:var(--primary-color)}.outline-primary:hover{background-color:var(--primary-color);color:var(--primary-text-color)}.outline-secondary{background-color:#fff;border:2px solid var(--secondary-color);color:var(--secondary-color)}.outline-secondary:hover{background-color:var(--secondary-color);color:var(--secondary-text-color)}.outline-success{background-color:#fff;border:2px solid var(--success-color);color:var(--success-color)}.outline-success:hover{background-color:var(--success-color);color:var(--success-text-color)}.outline-warning{background-color:#fff;border:2px solid var(--warning-color);color:var(--warning-color)}.outline-warning:hover{background-color:var(--warning-color);color:var(--warning-text-color)}.outline-danger{background-color:#fff;border:2px solid var(--danger-color);color:var(--danger-color)}.outline-danger:hover{background-color:var(--danger-color);color:var(--danger-text-color)}");const l={PRIMARY:"primary",SECONDARY:"secondary",SUCCESS:"success",WARNING:"warning",DANGER:"danger",OUTLINE_PRIMARY:"outline-primary",OUTLINE_SECONDARY:"outline-secondary",OUTLINE_SUCCESS:"outline-success",OUTLINE_WARNING:"outline-warning",OUTLINE_DANGER:"outline-danger"},c=o=>{let{label:r,onClick:e,variant:t,classNames:n="",isDisabled:l=!1}=o;const c=r.length<=13;return c||(l=!0),a.default.createElement(a.default.Fragment,null,a.default.createElement("button",{className:`button ${t} ${n} ${l?"disabled-button":""}`,onClick:e,disabled:l},a.default.createElement("span",null,r.slice(0,13))),!c&&a.default.createElement(a.default.Fragment,null,a.default.createElement("br",null),a.default.createElement("span",{className:"text-danger d-inline-block mt-1"},"Button labels must be no longer than ",13," characters")))};c.propTypes={label:t.default.string.isRequired,onClick:t.default.func.isRequired,variant:t.default.oneOf(Object.values(l)).isRequired,classNames:t.default.string,isDisabled:t.default.bool},exports.Button=c,exports.ButtonVariants=l;
