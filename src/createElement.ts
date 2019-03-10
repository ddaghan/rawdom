import {HTMLAttributes} from './htmlAttributes.js';
import frag from './frag.js';
import addAttributes from './addAttributes.js';
import {HtmlTagName} from './htmlTagName.js';

export type ChildType = HTMLElement | string;

function createElementWithAttributesAndChildren(tag:  HtmlTagName, attr: HTMLAttributes = {}, ...children: ChildType[]) {
    const el: HTMLElement = document.createElement(tag);
    addAttributes(el, attr);
    el.appendChild(frag(...children));
    return el;
}

export default function (tag: HtmlTagName, attrOrChild: HTMLAttributes | ChildType = {}, ...children: ChildType[]) {
    if (attrOrChild instanceof HTMLElement || typeof attrOrChild === 'string') {
        return createElementWithAttributesAndChildren(tag, {}, attrOrChild, ...children);
    }
    return createElementWithAttributesAndChildren(tag, attrOrChild, ...children);
}