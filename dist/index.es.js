import e from"react";import{PropTypes as t}from"prop-types";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},r.apply(this,arguments)}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===r&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}('@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");.button{border:none;border-radius:8px;cursor:pointer;font-family:Roboto,sans-serif;font-size:.95rem;font-style:normal;font-weight:400;letter-spacing:.5px;line-height:normal;padding:8px 13px;text-align:center;text-decoration:none;word-spacing:normal}.primary{background-color:#b300ff;color:#fff}.secondary{background-color:#ff1744;color:#fff}');const o=t=>{let{label:o,variant:n,className:a,...s}=t;return e.createElement(e.Fragment,null,e.createElement("button",r({type:"button",className:`button ${n} ${a}`},s),o))};o.propTypes={label:t.string.isRequired,variant:t.oneOf(Object.values({PRIMARY:"primary",SECONDARY:"secondary"})).isRequired,className:t.string};export{o as Button};
