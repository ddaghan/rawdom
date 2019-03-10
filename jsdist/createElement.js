import frag from './frag.js';
import addAttributes from './addAttributes.js';
function createElementWithAttributesAndChildren(tag, attr = {}, ...children) {
    const el = document.createElement(tag);
    addAttributes(el, attr);
    el.appendChild(frag(...children));
    return el;
}
export default function (tag, attrOrChild = {}, ...children) {
    if (attrOrChild instanceof HTMLElement || typeof attrOrChild === 'string') {
        return createElementWithAttributesAndChildren(tag, {}, attrOrChild, ...children);
    }
    return createElementWithAttributesAndChildren(tag, attrOrChild, ...children);
}
