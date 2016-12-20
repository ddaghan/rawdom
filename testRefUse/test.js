(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

function createElement(tagName, ...childOrProps) {
    
    let el = document.createElement(tagName);
    
    for (let childOrProp of childOrProps) {
        if (childOrProp instanceof HTMLElement) {
            el.appendChild(childOrProp);
        } else if (typeof childOrProp === 'string') {
            el.appendChild(document.createTextNode(childOrProp));
        } else {
            let attr = childOrProp;
            for (let attrName in attr){
                if (attr.hasOwnProperty(attrName)) {
                    if (attrName.substr(0,2).toLowerCase() === 'on'){
                        let eventName = attrName.substr(2).toLowerCase();
                        let eventHandler = attr[attrName];
                        el.addEventListener(eventName, eventHandler);
                    } else {
                        if (attrName === 'className') attrName = 'class';
                        if (attrName === 'htmlFor') attrName = 'for';
                        el.setAttribute(attrName, attr[attrName]);
                    }
                }
            }
        }
    }
    return el;
}

// HTML tags:
function a(...childOrProps) {return createElement('a', ...childOrProps);}

























































































































// SVG tags:

document.body.appendChild(
    a(
        {
            href: 'https://xkcd.com',
            target: '_blank',
            rel: 'noopener noreferrer'
        },
        'xkcd comics'
    )
);

})));
