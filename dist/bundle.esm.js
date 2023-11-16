import"bootstrap/dist/css/bootstrap.css";import"react";import r from"prop-types";function o(r,o){void 0===o&&(o={});var n=o.insertAt;if(r&&"undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&e.firstChild?e.insertBefore(a,e.firstChild):e.appendChild(a),a.styleSheet?a.styleSheet.cssText=r:a.appendChild(document.createTextNode(r))}}o(':root {\r\n  --primary-color: rgb(19, 122, 160);\r\n  --primary-text-color: rgb(255, 255, 255);\r\n  --secondary-color: rgb(109, 118, 126);\r\n  --secondary-text-color: rgb(255, 255, 255);\r\n  --success-color: rgb(25, 134, 83);\r\n  --success-text-color: rgb(255, 255, 255);\r\n  --warning-color: rgb(255, 193, 7);\r\n  --warning-text-color: rgb(255, 255, 255);\r\n  --danger-color: rgb(220, 56, 72);\r\n  --danger-text-color: rgb(255, 255, 255);\r\n\r\n  --disable-button-opacity: 0.5;\r\n\r\n  --button-padding: 8px 32px;\r\n  --border-radius: 24px;\r\n  --font-weight: 700;\r\n  --button-height: 50px;\r\n  --box-shadow: 0px 4px 4px 0px #00000040;\r\n  --font-family: "Inter", sans-serif;\r\n  --font-size: 18px;\r\n  --font-style: normal;\r\n  --line-height: normal;\r\n  --letter-spacing: 0em;\r\n}\r\n');var n;o("@import url(../../../styles/global.css);\r\n\r\n.button {\r\n  padding: var(--button-padding);\r\n  border-radius: var(--border-radius);\r\n  font-weight: var(--font-weight);\r\n  height: var(--button-height);\r\n  box-shadow: var(--box-shadow);\r\n  border: none;\r\n  font-family: var(--font-family);\r\n  font-size: var(--font-size);\r\n  font-style: var(--font-style);\r\n  line-height: var(--line-height);\r\n  letter-spacing: var(--letter-spacing);\r\n  white-space: nowrap;\r\n}\r\n\r\n.disabled-button {\r\n  opacity: var(--disable-button-opacity);\r\n  cursor: not-allowed;\r\n}\r\n\r\n.primary {\r\n  background-color: var(--primary-color);\r\n  color: var(--primary-text-color);\r\n}\r\n.secondary {\r\n  background-color: var(--secondary-color);\r\n  color: var(--secondary-text-color);\r\n}\r\n.success {\r\n  background-color: var(--success-color);\r\n  color: var(--success-text-color);\r\n}\r\n.warning {\r\n  background-color: var(--warning-color);\r\n  color: var(--warning-text-color);\r\n}\r\n.danger {\r\n  background-color: var(--danger-color);\r\n  color: var(--danger-text-color);\r\n}\r\n\r\n.outline-primary {\r\n  border: 2px solid var(--primary-color);\r\n  color: var(--primary-color);\r\n  background-color: white;\r\n}\r\n.outline-primary:hover {\r\n  background-color: var(--primary-color);\r\n  color: var(--primary-text-color);\r\n}\r\n\r\n.outline-secondary {\r\n  border: 2px solid var(--secondary-color);\r\n  color: var(--secondary-color);\r\n  background-color: white;\r\n}\r\n.outline-secondary:hover {\r\n  background-color: var(--secondary-color);\r\n  color: var(--secondary-text-color);\r\n}\r\n\r\n.outline-success {\r\n  border: 2px solid var(--success-color);\r\n  color: var(--success-color);\r\n  background-color: white;\r\n}\r\n.outline-success:hover {\r\n  background-color: var(--success-color);\r\n  color: var(--success-text-color);\r\n}\r\n\r\n.outline-warning {\r\n  border: 2px solid var(--warning-color);\r\n  color: var(--warning-color);\r\n  background-color: white;\r\n}\r\n.outline-warning:hover {\r\n  background-color: var(--warning-color);\r\n  color: var(--warning-text-color);\r\n}\r\n\r\n.outline-danger {\r\n  border: 2px solid var(--danger-color);\r\n  color: var(--danger-color);\r\n  background-color: white;\r\n}\r\n.outline-danger:hover {\r\n  background-color: var(--danger-color);\r\n  color: var(--danger-text-color);\r\n}"),function(r){r.PRIMARY="primary",r.SECONDARY="secondary",r.SUCCESS="success",r.WARNING="warning",r.DANGER="danger",r.OUTLINE_PRIMARY="outline-primary",r.OUTLINE_SECONDARY="outline-secondary",r.OUTLINE_SUCCESS="outline-success",r.OUTLINE_WARNING="outline-warning",r.OUTLINE_DANGER="outline-danger"}(n||(n={})),r.string.isRequired,r.func.isRequired,r.oneOf(Object.values(n)).isRequired,r.string,r.bool;export{n as ButtonVariants};
//# sourceMappingURL=bundle.esm.js.map
