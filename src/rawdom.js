'use strict';

export function createElement(tagName, ...childOrProps) {
    
    let el = document.createElement(tagName);
    
    for (let childOrProp of childOrProps) {
        if (childOrProp instanceof HTMLElement) {
            el.appendChild(childOrProp)
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
export function a(...childOrProps) {return createElement('a', ...childOrProps);}
export function abbr(...childOrProps) {return createElement('abbr', ...childOrProps);}
export function acronym(...childOrProps) {return createElement('acronym', ...childOrProps);}
export function address(...childOrProps) {return createElement('address', ...childOrProps);}
export function applet(...childOrProps) {return createElement('applet', ...childOrProps);}
export function area(...childOrProps) {return createElement('area', ...childOrProps);}
export function article(...childOrProps) {return createElement('article', ...childOrProps);}
export function aside(...childOrProps) {return createElement('aside', ...childOrProps);}
export function audio(...childOrProps) {return createElement('audio', ...childOrProps);}
export function b(...childOrProps) {return createElement('b', ...childOrProps);}
export function base(...childOrProps) {return createElement('base', ...childOrProps);}
export function basefont(...childOrProps) {return createElement('basefont', ...childOrProps);}
export function bdi(...childOrProps) {return createElement('bdi', ...childOrProps);}
export function bdo(...childOrProps) {return createElement('bdo', ...childOrProps);}
export function big(...childOrProps) {return createElement('big', ...childOrProps);}
export function blockquote(...childOrProps) {return createElement('blockquote', ...childOrProps);}
export function body(...childOrProps) {return createElement('body', ...childOrProps);}
export function br(...childOrProps) {return createElement('br', ...childOrProps);}
export function button(...childOrProps) {return createElement('button', ...childOrProps);}
export function canvas(...childOrProps) {return createElement('canvas', ...childOrProps);}
export function caption(...childOrProps) {return createElement('caption', ...childOrProps);}
export function center(...childOrProps) {return createElement('center', ...childOrProps);}
export function cite(...childOrProps) {return createElement('cite', ...childOrProps);}
export function code(...childOrProps) {return createElement('code', ...childOrProps);}
export function col(...childOrProps) {return createElement('col', ...childOrProps);}
export function colgroup(...childOrProps) {return createElement('colgroup', ...childOrProps);}
export function datalist(...childOrProps) {return createElement('datalist', ...childOrProps);}
export function dd(...childOrProps) {return createElement('dd', ...childOrProps);}
export function del(...childOrProps) {return createElement('del', ...childOrProps);}
export function details(...childOrProps) {return createElement('details', ...childOrProps);}
export function dfn(...childOrProps) {return createElement('dfn', ...childOrProps);}
export function dialog(...childOrProps) {return createElement('dialog', ...childOrProps);}
export function dir(...childOrProps) {return createElement('dir', ...childOrProps);}
export function div(...childOrProps) {return createElement('div', ...childOrProps);}
export function dl(...childOrProps) {return createElement('dl', ...childOrProps);}
export function dt(...childOrProps) {return createElement('dt', ...childOrProps);}
export function em(...childOrProps) {return createElement('em', ...childOrProps);}
export function embed(...childOrProps) {return createElement('embed', ...childOrProps);}
export function fieldset(...childOrProps) {return createElement('fieldset', ...childOrProps);}
export function figcaption(...childOrProps) {return createElement('figcaption', ...childOrProps);}
export function figure(...childOrProps) {return createElement('figure', ...childOrProps);}
export function font(...childOrProps) {return createElement('font', ...childOrProps);}
export function footer(...childOrProps) {return createElement('footer', ...childOrProps);}
export function form(...childOrProps) {return createElement('form', ...childOrProps);}
export function frame(...childOrProps) {return createElement('frame', ...childOrProps);}
export function frameset(...childOrProps) {return createElement('frameset', ...childOrProps);}
export function h1(...childOrProps) {return createElement('h1', ...childOrProps);}
export function h2(...childOrProps) {return createElement('h2', ...childOrProps);}
export function h3(...childOrProps) {return createElement('h3', ...childOrProps);}
export function h4(...childOrProps) {return createElement('h4', ...childOrProps);}
export function h5(...childOrProps) {return createElement('h5', ...childOrProps);}
export function h6(...childOrProps) {return createElement('h6', ...childOrProps);}
export function head(...childOrProps) {return createElement('head', ...childOrProps);}
export function header(...childOrProps) {return createElement('header', ...childOrProps);}
export function hr(...childOrProps) {return createElement('hr', ...childOrProps);}
export function html(...childOrProps) {return createElement('html', ...childOrProps);}
export function i(...childOrProps) {return createElement('i', ...childOrProps);}
export function iframe(...childOrProps) {return createElement('iframe', ...childOrProps);}
export function img(...childOrProps) {return createElement('img', ...childOrProps);}
export function input(...childOrProps) {return createElement('input', ...childOrProps);}
export function ins(...childOrProps) {return createElement('ins', ...childOrProps);}
export function kbd(...childOrProps) {return createElement('kbd', ...childOrProps);}
export function keygen(...childOrProps) {return createElement('keygen', ...childOrProps);}
export function label(...childOrProps) {return createElement('label', ...childOrProps);}
export function legend(...childOrProps) {return createElement('legend', ...childOrProps);}
export function li(...childOrProps) {return createElement('li', ...childOrProps);}
export function link(...childOrProps) {return createElement('link', ...childOrProps);}
export function main(...childOrProps) {return createElement('main', ...childOrProps);}
export function map(...childOrProps) {return createElement('map', ...childOrProps);}
export function mark(...childOrProps) {return createElement('mark', ...childOrProps);}
export function menu(...childOrProps) {return createElement('menu', ...childOrProps);}
export function menuitem(...childOrProps) {return createElement('menuitem', ...childOrProps);}
export function meta(...childOrProps) {return createElement('meta', ...childOrProps);}
export function meter(...childOrProps) {return createElement('meter', ...childOrProps);}
export function nav(...childOrProps) {return createElement('nav', ...childOrProps);}
export function noframes(...childOrProps) {return createElement('noframes', ...childOrProps);}
export function noscript(...childOrProps) {return createElement('noscript', ...childOrProps);}
export function object(...childOrProps) {return createElement('object', ...childOrProps);}
export function ol(...childOrProps) {return createElement('ol', ...childOrProps);}
export function optgroup(...childOrProps) {return createElement('optgroup', ...childOrProps);}
export function option(...childOrProps) {return createElement('option', ...childOrProps);}
export function output(...childOrProps) {return createElement('output', ...childOrProps);}
export function p(...childOrProps) {return createElement('p', ...childOrProps);}
export function param(...childOrProps) {return createElement('param', ...childOrProps);}
export function pre(...childOrProps) {return createElement('pre', ...childOrProps);}
export function progress(...childOrProps) {return createElement('progress', ...childOrProps);}
export function q(...childOrProps) {return createElement('q', ...childOrProps);}
export function rp(...childOrProps) {return createElement('rp', ...childOrProps);}
export function rt(...childOrProps) {return createElement('rt', ...childOrProps);}
export function ruby(...childOrProps) {return createElement('ruby', ...childOrProps);}
export function s(...childOrProps) {return createElement('s', ...childOrProps);}
export function samp(...childOrProps) {return createElement('samp', ...childOrProps);}
export function script(...childOrProps) {return createElement('script', ...childOrProps);}
export function section(...childOrProps) {return createElement('section', ...childOrProps);}
export function select(...childOrProps) {return createElement('select', ...childOrProps);}
export function small(...childOrProps) {return createElement('small', ...childOrProps);}
export function source(...childOrProps) {return createElement('source', ...childOrProps);}
export function span(...childOrProps) {return createElement('span', ...childOrProps);}
export function strike(...childOrProps) {return createElement('strike', ...childOrProps);}
export function strong(...childOrProps) {return createElement('strong', ...childOrProps);}
export function style(...childOrProps) {return createElement('style', ...childOrProps);}
export function sub(...childOrProps) {return createElement('sub', ...childOrProps);}
export function summary(...childOrProps) {return createElement('summary', ...childOrProps);}
export function sup(...childOrProps) {return createElement('sup', ...childOrProps);}
export function table(...childOrProps) {return createElement('table', ...childOrProps);}
export function tbody(...childOrProps) {return createElement('tbody', ...childOrProps);}
export function td(...childOrProps) {return createElement('td', ...childOrProps);}
export function textarea(...childOrProps) {return createElement('textarea', ...childOrProps);}
export function tfoot(...childOrProps) {return createElement('tfoot', ...childOrProps);}
export function th(...childOrProps) {return createElement('th', ...childOrProps);}
export function thead(...childOrProps) {return createElement('thead', ...childOrProps);}
export function time(...childOrProps) {return createElement('time', ...childOrProps);}
export function title(...childOrProps) {return createElement('title', ...childOrProps);}
export function tr(...childOrProps) {return createElement('tr', ...childOrProps);}
export function track(...childOrProps) {return createElement('track', ...childOrProps);}
export function tt(...childOrProps) {return createElement('tt', ...childOrProps);}
export function u(...childOrProps) {return createElement('u', ...childOrProps);}
export function ul(...childOrProps) {return createElement('ul', ...childOrProps);}
export function video(...childOrProps) {return createElement('video', ...childOrProps);}
export function wbr(...childOrProps) {return createElement('wbr', ...childOrProps);}


// SVG tags:
export function altGlyph(...childOrProps) {return createElement('altGlyph', ...childOrProps);}
export function altGlyphDef(...childOrProps) {return createElement('altGlyphDef', ...childOrProps);}
export function altGlyphItem(...childOrProps) {return createElement('altGlyphItem', ...childOrProps);}
export function animate(...childOrProps) {return createElement('animate', ...childOrProps);}
export function animateColor(...childOrProps) {return createElement('animateColor', ...childOrProps);}
export function animateMotion(...childOrProps) {return createElement('animateMotion', ...childOrProps);}
export function animateTransform(...childOrProps) {return createElement('animateTransform', ...childOrProps);}
export function animation(...childOrProps) {return createElement('animation', ...childOrProps);}
export function circle(...childOrProps) {return createElement('circle', ...childOrProps);}
export function clipPath(...childOrProps) {return createElement('clipPath', ...childOrProps);}
export function colorprofile(...childOrProps) {return createElement('colorprofile', ...childOrProps);}
export function cursor(...childOrProps) {return createElement('cursor', ...childOrProps);}
export function defs(...childOrProps) {return createElement('defs', ...childOrProps);}
export function desc(...childOrProps) {return createElement('desc', ...childOrProps);}
export function discard(...childOrProps) {return createElement('discard', ...childOrProps);}
export function ellipse(...childOrProps) {return createElement('ellipse', ...childOrProps);}
export function feBlend(...childOrProps) {return createElement('feBlend', ...childOrProps);}
export function feColorMatrix(...childOrProps) {return createElement('feColorMatrix', ...childOrProps);}
export function feComponentTransfer(...childOrProps) {return createElement('feComponentTransfer', ...childOrProps);}
export function feComposite(...childOrProps) {return createElement('feComposite', ...childOrProps);}
export function feConvolveMatrix(...childOrProps) {return createElement('feConvolveMatrix', ...childOrProps);}
export function feDiffuseLighting(...childOrProps) {return createElement('feDiffuseLighting', ...childOrProps);}
export function feDisplacementMap(...childOrProps) {return createElement('feDisplacementMap', ...childOrProps);}
export function feDistantLight(...childOrProps) {return createElement('feDistantLight', ...childOrProps);}
export function feDropShadow(...childOrProps) {return createElement('feDropShadow', ...childOrProps);}
export function feFlood(...childOrProps) {return createElement('feFlood', ...childOrProps);}
export function feFuncA(...childOrProps) {return createElement('feFuncA', ...childOrProps);}
export function feFuncB(...childOrProps) {return createElement('feFuncB', ...childOrProps);}
export function feFuncG(...childOrProps) {return createElement('feFuncG', ...childOrProps);}
export function feFuncR(...childOrProps) {return createElement('feFuncR', ...childOrProps);}
export function feGaussianBlur(...childOrProps) {return createElement('feGaussianBlur', ...childOrProps);}
export function feImage(...childOrProps) {return createElement('feImage', ...childOrProps);}
export function feMerge(...childOrProps) {return createElement('feMerge', ...childOrProps);}
export function feMergeNode(...childOrProps) {return createElement('feMergeNode', ...childOrProps);}
export function feMorphology(...childOrProps) {return createElement('feMorphology', ...childOrProps);}
export function feOffset(...childOrProps) {return createElement('feOffset', ...childOrProps);}
export function fePointLight(...childOrProps) {return createElement('fePointLight', ...childOrProps);}
export function feSpecularLighting(...childOrProps) {return createElement('feSpecularLighting', ...childOrProps);}
export function feSpotLight(...childOrProps) {return createElement('feSpotLight', ...childOrProps);}
export function feTile(...childOrProps) {return createElement('feTile', ...childOrProps);}
export function feTurbulence(...childOrProps) {return createElement('feTurbulence', ...childOrProps);}
export function filter(...childOrProps) {return createElement('filter', ...childOrProps);}
export function foreignObject(...childOrProps) {return createElement('foreignObject', ...childOrProps);}
export function g(...childOrProps) {return createElement('g', ...childOrProps);}
export function glyph(...childOrProps) {return createElement('glyph', ...childOrProps);}
export function glyphRef(...childOrProps) {return createElement('glyphRef', ...childOrProps);}
export function handler(...childOrProps) {return createElement('handler', ...childOrProps);}
export function hatch(...childOrProps) {return createElement('hatch', ...childOrProps);}
export function hatchpath(...childOrProps) {return createElement('hatchpath', ...childOrProps);}
export function hkern(...childOrProps) {return createElement('hkern', ...childOrProps);}
export function image(...childOrProps) {return createElement('image', ...childOrProps);}
export function line(...childOrProps) {return createElement('line', ...childOrProps);}
export function linearGradient(...childOrProps) {return createElement('linearGradient', ...childOrProps);}
export function listener(...childOrProps) {return createElement('listener', ...childOrProps);}
export function marker(...childOrProps) {return createElement('marker', ...childOrProps);}
export function mask(...childOrProps) {return createElement('mask', ...childOrProps);}
export function mesh(...childOrProps) {return createElement('mesh', ...childOrProps);}
export function meshgradient(...childOrProps) {return createElement('meshgradient', ...childOrProps);}
export function meshpatch(...childOrProps) {return createElement('meshpatch', ...childOrProps);}
export function meshrow(...childOrProps) {return createElement('meshrow', ...childOrProps);}
export function metadata(...childOrProps) {return createElement('metadata', ...childOrProps);}
export function missingglyph(...childOrProps) {return createElement('missingglyph', ...childOrProps);}
export function mpath(...childOrProps) {return createElement('mpath', ...childOrProps);}
export function path(...childOrProps) {return createElement('path', ...childOrProps);}
export function pattern(...childOrProps) {return createElement('pattern', ...childOrProps);}
export function polygon(...childOrProps) {return createElement('polygon', ...childOrProps);}
export function polyline(...childOrProps) {return createElement('polyline', ...childOrProps);}
export function prefetch(...childOrProps) {return createElement('prefetch', ...childOrProps);}
export function radialGradient(...childOrProps) {return createElement('radialGradient', ...childOrProps);}
export function rect(...childOrProps) {return createElement('rect', ...childOrProps);}
export function set(...childOrProps) {return createElement('set', ...childOrProps);}
export function solidColor(...childOrProps) {return createElement('solidColor', ...childOrProps);}
export function solidcolor(...childOrProps) {return createElement('solidcolor', ...childOrProps);}
export function stop(...childOrProps) {return createElement('stop', ...childOrProps);}
export function switcH(...childOrProps) {return createElement('switch', ...childOrProps);}
export function symbol(...childOrProps) {return createElement('symbol', ...childOrProps);}
export function tbreak(...childOrProps) {return createElement('tbreak', ...childOrProps);}
export function text(...childOrProps) {return createElement('text', ...childOrProps);}
export function textArea(...childOrProps) {return createElement('textArea', ...childOrProps);}
export function textPath(...childOrProps) {return createElement('textPath', ...childOrProps);}
export function tref(...childOrProps) {return createElement('tref', ...childOrProps);}
export function tspan(...childOrProps) {return createElement('tspan', ...childOrProps);}
export function unknown(...childOrProps) {return createElement('unknown', ...childOrProps);}
export function use(...childOrProps) {return createElement('use', ...childOrProps);}
export function view(...childOrProps) {return createElement('view', ...childOrProps);}
export function vkern(...childOrProps) {return createElement('vkern', ...childOrProps);}