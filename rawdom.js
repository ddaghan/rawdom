(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.window = global.window || {})));
}(this, (function (exports) { 'use strict';

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
function abbr(...childOrProps) {return createElement('abbr', ...childOrProps);}
function acronym(...childOrProps) {return createElement('acronym', ...childOrProps);}
function address(...childOrProps) {return createElement('address', ...childOrProps);}
function applet(...childOrProps) {return createElement('applet', ...childOrProps);}
function area(...childOrProps) {return createElement('area', ...childOrProps);}
function article(...childOrProps) {return createElement('article', ...childOrProps);}
function aside(...childOrProps) {return createElement('aside', ...childOrProps);}
function audio(...childOrProps) {return createElement('audio', ...childOrProps);}
function b(...childOrProps) {return createElement('b', ...childOrProps);}
function base(...childOrProps) {return createElement('base', ...childOrProps);}
function basefont(...childOrProps) {return createElement('basefont', ...childOrProps);}
function bdi(...childOrProps) {return createElement('bdi', ...childOrProps);}
function bdo(...childOrProps) {return createElement('bdo', ...childOrProps);}
function big(...childOrProps) {return createElement('big', ...childOrProps);}
function blockquote(...childOrProps) {return createElement('blockquote', ...childOrProps);}
function body(...childOrProps) {return createElement('body', ...childOrProps);}
function br(...childOrProps) {return createElement('br', ...childOrProps);}
function button(...childOrProps) {return createElement('button', ...childOrProps);}
function canvas(...childOrProps) {return createElement('canvas', ...childOrProps);}
function caption(...childOrProps) {return createElement('caption', ...childOrProps);}
function center(...childOrProps) {return createElement('center', ...childOrProps);}
function cite(...childOrProps) {return createElement('cite', ...childOrProps);}
function code(...childOrProps) {return createElement('code', ...childOrProps);}
function col(...childOrProps) {return createElement('col', ...childOrProps);}
function colgroup(...childOrProps) {return createElement('colgroup', ...childOrProps);}
function datalist(...childOrProps) {return createElement('datalist', ...childOrProps);}
function dd(...childOrProps) {return createElement('dd', ...childOrProps);}
function del(...childOrProps) {return createElement('del', ...childOrProps);}
function details(...childOrProps) {return createElement('details', ...childOrProps);}
function dfn(...childOrProps) {return createElement('dfn', ...childOrProps);}
function dialog(...childOrProps) {return createElement('dialog', ...childOrProps);}
function dir(...childOrProps) {return createElement('dir', ...childOrProps);}
function div(...childOrProps) {return createElement('div', ...childOrProps);}
function dl(...childOrProps) {return createElement('dl', ...childOrProps);}
function dt(...childOrProps) {return createElement('dt', ...childOrProps);}
function em(...childOrProps) {return createElement('em', ...childOrProps);}
function embed(...childOrProps) {return createElement('embed', ...childOrProps);}
function fieldset(...childOrProps) {return createElement('fieldset', ...childOrProps);}
function figcaption(...childOrProps) {return createElement('figcaption', ...childOrProps);}
function figure(...childOrProps) {return createElement('figure', ...childOrProps);}
function font(...childOrProps) {return createElement('font', ...childOrProps);}
function footer(...childOrProps) {return createElement('footer', ...childOrProps);}
function form(...childOrProps) {return createElement('form', ...childOrProps);}
function frame(...childOrProps) {return createElement('frame', ...childOrProps);}
function frameset(...childOrProps) {return createElement('frameset', ...childOrProps);}
function h1(...childOrProps) {return createElement('h1', ...childOrProps);}
function h2(...childOrProps) {return createElement('h2', ...childOrProps);}
function h3(...childOrProps) {return createElement('h3', ...childOrProps);}
function h4(...childOrProps) {return createElement('h4', ...childOrProps);}
function h5(...childOrProps) {return createElement('h5', ...childOrProps);}
function h6(...childOrProps) {return createElement('h6', ...childOrProps);}
function head(...childOrProps) {return createElement('head', ...childOrProps);}
function header(...childOrProps) {return createElement('header', ...childOrProps);}
function hr(...childOrProps) {return createElement('hr', ...childOrProps);}
function html(...childOrProps) {return createElement('html', ...childOrProps);}
function i(...childOrProps) {return createElement('i', ...childOrProps);}
function iframe(...childOrProps) {return createElement('iframe', ...childOrProps);}
function img(...childOrProps) {return createElement('img', ...childOrProps);}
function input(...childOrProps) {return createElement('input', ...childOrProps);}
function ins(...childOrProps) {return createElement('ins', ...childOrProps);}
function kbd(...childOrProps) {return createElement('kbd', ...childOrProps);}
function keygen(...childOrProps) {return createElement('keygen', ...childOrProps);}
function label(...childOrProps) {return createElement('label', ...childOrProps);}
function legend(...childOrProps) {return createElement('legend', ...childOrProps);}
function li(...childOrProps) {return createElement('li', ...childOrProps);}
function link(...childOrProps) {return createElement('link', ...childOrProps);}
function main(...childOrProps) {return createElement('main', ...childOrProps);}
function map(...childOrProps) {return createElement('map', ...childOrProps);}
function mark(...childOrProps) {return createElement('mark', ...childOrProps);}
function menu(...childOrProps) {return createElement('menu', ...childOrProps);}
function menuitem(...childOrProps) {return createElement('menuitem', ...childOrProps);}
function meta(...childOrProps) {return createElement('meta', ...childOrProps);}
function meter(...childOrProps) {return createElement('meter', ...childOrProps);}
function nav(...childOrProps) {return createElement('nav', ...childOrProps);}
function noframes(...childOrProps) {return createElement('noframes', ...childOrProps);}
function noscript(...childOrProps) {return createElement('noscript', ...childOrProps);}
function object(...childOrProps) {return createElement('object', ...childOrProps);}
function ol(...childOrProps) {return createElement('ol', ...childOrProps);}
function optgroup(...childOrProps) {return createElement('optgroup', ...childOrProps);}
function option(...childOrProps) {return createElement('option', ...childOrProps);}
function output(...childOrProps) {return createElement('output', ...childOrProps);}
function p(...childOrProps) {return createElement('p', ...childOrProps);}
function param(...childOrProps) {return createElement('param', ...childOrProps);}
function pre(...childOrProps) {return createElement('pre', ...childOrProps);}
function progress(...childOrProps) {return createElement('progress', ...childOrProps);}
function q(...childOrProps) {return createElement('q', ...childOrProps);}
function rp(...childOrProps) {return createElement('rp', ...childOrProps);}
function rt(...childOrProps) {return createElement('rt', ...childOrProps);}
function ruby(...childOrProps) {return createElement('ruby', ...childOrProps);}
function s(...childOrProps) {return createElement('s', ...childOrProps);}
function samp(...childOrProps) {return createElement('samp', ...childOrProps);}
function script(...childOrProps) {return createElement('script', ...childOrProps);}
function section(...childOrProps) {return createElement('section', ...childOrProps);}
function select(...childOrProps) {return createElement('select', ...childOrProps);}
function small(...childOrProps) {return createElement('small', ...childOrProps);}
function source(...childOrProps) {return createElement('source', ...childOrProps);}
function span(...childOrProps) {return createElement('span', ...childOrProps);}
function strike(...childOrProps) {return createElement('strike', ...childOrProps);}
function strong(...childOrProps) {return createElement('strong', ...childOrProps);}
function style(...childOrProps) {return createElement('style', ...childOrProps);}
function sub(...childOrProps) {return createElement('sub', ...childOrProps);}
function summary(...childOrProps) {return createElement('summary', ...childOrProps);}
function sup(...childOrProps) {return createElement('sup', ...childOrProps);}
function table(...childOrProps) {return createElement('table', ...childOrProps);}
function tbody(...childOrProps) {return createElement('tbody', ...childOrProps);}
function td(...childOrProps) {return createElement('td', ...childOrProps);}
function textarea(...childOrProps) {return createElement('textarea', ...childOrProps);}
function tfoot(...childOrProps) {return createElement('tfoot', ...childOrProps);}
function th(...childOrProps) {return createElement('th', ...childOrProps);}
function thead(...childOrProps) {return createElement('thead', ...childOrProps);}
function time(...childOrProps) {return createElement('time', ...childOrProps);}
function title(...childOrProps) {return createElement('title', ...childOrProps);}
function tr(...childOrProps) {return createElement('tr', ...childOrProps);}
function track(...childOrProps) {return createElement('track', ...childOrProps);}
function tt(...childOrProps) {return createElement('tt', ...childOrProps);}
function u(...childOrProps) {return createElement('u', ...childOrProps);}
function ul(...childOrProps) {return createElement('ul', ...childOrProps);}
function video(...childOrProps) {return createElement('video', ...childOrProps);}
function wbr(...childOrProps) {return createElement('wbr', ...childOrProps);}


// SVG tags:
function altGlyph(...childOrProps) {return createElement('altGlyph', ...childOrProps);}
function altGlyphDef(...childOrProps) {return createElement('altGlyphDef', ...childOrProps);}
function altGlyphItem(...childOrProps) {return createElement('altGlyphItem', ...childOrProps);}
function animate(...childOrProps) {return createElement('animate', ...childOrProps);}
function animateColor(...childOrProps) {return createElement('animateColor', ...childOrProps);}
function animateMotion(...childOrProps) {return createElement('animateMotion', ...childOrProps);}
function animateTransform(...childOrProps) {return createElement('animateTransform', ...childOrProps);}
function animation(...childOrProps) {return createElement('animation', ...childOrProps);}
function circle(...childOrProps) {return createElement('circle', ...childOrProps);}
function clipPath(...childOrProps) {return createElement('clipPath', ...childOrProps);}
function colorprofile(...childOrProps) {return createElement('colorprofile', ...childOrProps);}
function cursor(...childOrProps) {return createElement('cursor', ...childOrProps);}
function defs(...childOrProps) {return createElement('defs', ...childOrProps);}
function desc(...childOrProps) {return createElement('desc', ...childOrProps);}
function discard(...childOrProps) {return createElement('discard', ...childOrProps);}
function ellipse(...childOrProps) {return createElement('ellipse', ...childOrProps);}
function feBlend(...childOrProps) {return createElement('feBlend', ...childOrProps);}
function feColorMatrix(...childOrProps) {return createElement('feColorMatrix', ...childOrProps);}
function feComponentTransfer(...childOrProps) {return createElement('feComponentTransfer', ...childOrProps);}
function feComposite(...childOrProps) {return createElement('feComposite', ...childOrProps);}
function feConvolveMatrix(...childOrProps) {return createElement('feConvolveMatrix', ...childOrProps);}
function feDiffuseLighting(...childOrProps) {return createElement('feDiffuseLighting', ...childOrProps);}
function feDisplacementMap(...childOrProps) {return createElement('feDisplacementMap', ...childOrProps);}
function feDistantLight(...childOrProps) {return createElement('feDistantLight', ...childOrProps);}
function feDropShadow(...childOrProps) {return createElement('feDropShadow', ...childOrProps);}
function feFlood(...childOrProps) {return createElement('feFlood', ...childOrProps);}
function feFuncA(...childOrProps) {return createElement('feFuncA', ...childOrProps);}
function feFuncB(...childOrProps) {return createElement('feFuncB', ...childOrProps);}
function feFuncG(...childOrProps) {return createElement('feFuncG', ...childOrProps);}
function feFuncR(...childOrProps) {return createElement('feFuncR', ...childOrProps);}
function feGaussianBlur(...childOrProps) {return createElement('feGaussianBlur', ...childOrProps);}
function feImage(...childOrProps) {return createElement('feImage', ...childOrProps);}
function feMerge(...childOrProps) {return createElement('feMerge', ...childOrProps);}
function feMergeNode(...childOrProps) {return createElement('feMergeNode', ...childOrProps);}
function feMorphology(...childOrProps) {return createElement('feMorphology', ...childOrProps);}
function feOffset(...childOrProps) {return createElement('feOffset', ...childOrProps);}
function fePointLight(...childOrProps) {return createElement('fePointLight', ...childOrProps);}
function feSpecularLighting(...childOrProps) {return createElement('feSpecularLighting', ...childOrProps);}
function feSpotLight(...childOrProps) {return createElement('feSpotLight', ...childOrProps);}
function feTile(...childOrProps) {return createElement('feTile', ...childOrProps);}
function feTurbulence(...childOrProps) {return createElement('feTurbulence', ...childOrProps);}
function filter(...childOrProps) {return createElement('filter', ...childOrProps);}
function foreignObject(...childOrProps) {return createElement('foreignObject', ...childOrProps);}
function g(...childOrProps) {return createElement('g', ...childOrProps);}
function glyph(...childOrProps) {return createElement('glyph', ...childOrProps);}
function glyphRef(...childOrProps) {return createElement('glyphRef', ...childOrProps);}
function handler(...childOrProps) {return createElement('handler', ...childOrProps);}
function hatch(...childOrProps) {return createElement('hatch', ...childOrProps);}
function hatchpath(...childOrProps) {return createElement('hatchpath', ...childOrProps);}
function hkern(...childOrProps) {return createElement('hkern', ...childOrProps);}
function image(...childOrProps) {return createElement('image', ...childOrProps);}
function line(...childOrProps) {return createElement('line', ...childOrProps);}
function linearGradient(...childOrProps) {return createElement('linearGradient', ...childOrProps);}
function listener(...childOrProps) {return createElement('listener', ...childOrProps);}
function marker(...childOrProps) {return createElement('marker', ...childOrProps);}
function mask(...childOrProps) {return createElement('mask', ...childOrProps);}
function mesh(...childOrProps) {return createElement('mesh', ...childOrProps);}
function meshgradient(...childOrProps) {return createElement('meshgradient', ...childOrProps);}
function meshpatch(...childOrProps) {return createElement('meshpatch', ...childOrProps);}
function meshrow(...childOrProps) {return createElement('meshrow', ...childOrProps);}
function metadata(...childOrProps) {return createElement('metadata', ...childOrProps);}
function missingglyph(...childOrProps) {return createElement('missingglyph', ...childOrProps);}
function mpath(...childOrProps) {return createElement('mpath', ...childOrProps);}
function path(...childOrProps) {return createElement('path', ...childOrProps);}
function pattern(...childOrProps) {return createElement('pattern', ...childOrProps);}
function polygon(...childOrProps) {return createElement('polygon', ...childOrProps);}
function polyline(...childOrProps) {return createElement('polyline', ...childOrProps);}
function prefetch(...childOrProps) {return createElement('prefetch', ...childOrProps);}
function radialGradient(...childOrProps) {return createElement('radialGradient', ...childOrProps);}
function rect(...childOrProps) {return createElement('rect', ...childOrProps);}
function set(...childOrProps) {return createElement('set', ...childOrProps);}
function solidColor(...childOrProps) {return createElement('solidColor', ...childOrProps);}
function solidcolor(...childOrProps) {return createElement('solidcolor', ...childOrProps);}
function stop(...childOrProps) {return createElement('stop', ...childOrProps);}
function switcH(...childOrProps) {return createElement('switch', ...childOrProps);}
function symbol(...childOrProps) {return createElement('symbol', ...childOrProps);}
function tbreak(...childOrProps) {return createElement('tbreak', ...childOrProps);}
function text(...childOrProps) {return createElement('text', ...childOrProps);}
function textArea(...childOrProps) {return createElement('textArea', ...childOrProps);}
function textPath(...childOrProps) {return createElement('textPath', ...childOrProps);}
function tref(...childOrProps) {return createElement('tref', ...childOrProps);}
function tspan(...childOrProps) {return createElement('tspan', ...childOrProps);}
function unknown(...childOrProps) {return createElement('unknown', ...childOrProps);}
function use(...childOrProps) {return createElement('use', ...childOrProps);}
function view(...childOrProps) {return createElement('view', ...childOrProps);}
function vkern(...childOrProps) {return createElement('vkern', ...childOrProps);}

exports.createElement = createElement;
exports.a = a;
exports.abbr = abbr;
exports.acronym = acronym;
exports.address = address;
exports.applet = applet;
exports.area = area;
exports.article = article;
exports.aside = aside;
exports.audio = audio;
exports.b = b;
exports.base = base;
exports.basefont = basefont;
exports.bdi = bdi;
exports.bdo = bdo;
exports.big = big;
exports.blockquote = blockquote;
exports.body = body;
exports.br = br;
exports.button = button;
exports.canvas = canvas;
exports.caption = caption;
exports.center = center;
exports.cite = cite;
exports.code = code;
exports.col = col;
exports.colgroup = colgroup;
exports.datalist = datalist;
exports.dd = dd;
exports.del = del;
exports.details = details;
exports.dfn = dfn;
exports.dialog = dialog;
exports.dir = dir;
exports.div = div;
exports.dl = dl;
exports.dt = dt;
exports.em = em;
exports.embed = embed;
exports.fieldset = fieldset;
exports.figcaption = figcaption;
exports.figure = figure;
exports.font = font;
exports.footer = footer;
exports.form = form;
exports.frame = frame;
exports.frameset = frameset;
exports.h1 = h1;
exports.h2 = h2;
exports.h3 = h3;
exports.h4 = h4;
exports.h5 = h5;
exports.h6 = h6;
exports.head = head;
exports.header = header;
exports.hr = hr;
exports.html = html;
exports.i = i;
exports.iframe = iframe;
exports.img = img;
exports.input = input;
exports.ins = ins;
exports.kbd = kbd;
exports.keygen = keygen;
exports.label = label;
exports.legend = legend;
exports.li = li;
exports.link = link;
exports.main = main;
exports.map = map;
exports.mark = mark;
exports.menu = menu;
exports.menuitem = menuitem;
exports.meta = meta;
exports.meter = meter;
exports.nav = nav;
exports.noframes = noframes;
exports.noscript = noscript;
exports.object = object;
exports.ol = ol;
exports.optgroup = optgroup;
exports.option = option;
exports.output = output;
exports.p = p;
exports.param = param;
exports.pre = pre;
exports.progress = progress;
exports.q = q;
exports.rp = rp;
exports.rt = rt;
exports.ruby = ruby;
exports.s = s;
exports.samp = samp;
exports.script = script;
exports.section = section;
exports.select = select;
exports.small = small;
exports.source = source;
exports.span = span;
exports.strike = strike;
exports.strong = strong;
exports.style = style;
exports.sub = sub;
exports.summary = summary;
exports.sup = sup;
exports.table = table;
exports.tbody = tbody;
exports.td = td;
exports.textarea = textarea;
exports.tfoot = tfoot;
exports.th = th;
exports.thead = thead;
exports.time = time;
exports.title = title;
exports.tr = tr;
exports.track = track;
exports.tt = tt;
exports.u = u;
exports.ul = ul;
exports.video = video;
exports.wbr = wbr;
exports.altGlyph = altGlyph;
exports.altGlyphDef = altGlyphDef;
exports.altGlyphItem = altGlyphItem;
exports.animate = animate;
exports.animateColor = animateColor;
exports.animateMotion = animateMotion;
exports.animateTransform = animateTransform;
exports.animation = animation;
exports.circle = circle;
exports.clipPath = clipPath;
exports.colorprofile = colorprofile;
exports.cursor = cursor;
exports.defs = defs;
exports.desc = desc;
exports.discard = discard;
exports.ellipse = ellipse;
exports.feBlend = feBlend;
exports.feColorMatrix = feColorMatrix;
exports.feComponentTransfer = feComponentTransfer;
exports.feComposite = feComposite;
exports.feConvolveMatrix = feConvolveMatrix;
exports.feDiffuseLighting = feDiffuseLighting;
exports.feDisplacementMap = feDisplacementMap;
exports.feDistantLight = feDistantLight;
exports.feDropShadow = feDropShadow;
exports.feFlood = feFlood;
exports.feFuncA = feFuncA;
exports.feFuncB = feFuncB;
exports.feFuncG = feFuncG;
exports.feFuncR = feFuncR;
exports.feGaussianBlur = feGaussianBlur;
exports.feImage = feImage;
exports.feMerge = feMerge;
exports.feMergeNode = feMergeNode;
exports.feMorphology = feMorphology;
exports.feOffset = feOffset;
exports.fePointLight = fePointLight;
exports.feSpecularLighting = feSpecularLighting;
exports.feSpotLight = feSpotLight;
exports.feTile = feTile;
exports.feTurbulence = feTurbulence;
exports.filter = filter;
exports.foreignObject = foreignObject;
exports.g = g;
exports.glyph = glyph;
exports.glyphRef = glyphRef;
exports.handler = handler;
exports.hatch = hatch;
exports.hatchpath = hatchpath;
exports.hkern = hkern;
exports.image = image;
exports.line = line;
exports.linearGradient = linearGradient;
exports.listener = listener;
exports.marker = marker;
exports.mask = mask;
exports.mesh = mesh;
exports.meshgradient = meshgradient;
exports.meshpatch = meshpatch;
exports.meshrow = meshrow;
exports.metadata = metadata;
exports.missingglyph = missingglyph;
exports.mpath = mpath;
exports.path = path;
exports.pattern = pattern;
exports.polygon = polygon;
exports.polyline = polyline;
exports.prefetch = prefetch;
exports.radialGradient = radialGradient;
exports.rect = rect;
exports.set = set;
exports.solidColor = solidColor;
exports.solidcolor = solidcolor;
exports.stop = stop;
exports.switcH = switcH;
exports.symbol = symbol;
exports.tbreak = tbreak;
exports.text = text;
exports.textArea = textArea;
exports.textPath = textPath;
exports.tref = tref;
exports.tspan = tspan;
exports.unknown = unknown;
exports.use = use;
exports.view = view;
exports.vkern = vkern;

Object.defineProperty(exports, '__esModule', { value: true });

})));
