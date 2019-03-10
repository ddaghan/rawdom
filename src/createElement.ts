import {HTMLAttributes} from './htmlAttributes';
import frag from './frag';
import addAttributes from './addAttributes';
import {HtmlTagName} from './htmlTagName';

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