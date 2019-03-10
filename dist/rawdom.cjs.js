'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var frag = function (...children) {
    const documentFragment = document.createDocumentFragment();
    for (let child of children) {
        if (typeof child === 'string') {
            documentFragment.appendChild(document.createTextNode(child));
        }
        else {
            documentFragment.appendChild(child);
        }
    }
    return documentFragment;
};

function isEventListener(attrName, attrValue) {
    attrValue;
    return attrName.substr(0, 2).toLowerCase() === 'on';
}
var addAttributes = function (el, attr = {}) {
    for (let attrName in attr) {
        if (!attr.hasOwnProperty(attrName)) {
            continue;
        }
        const attrValue = attr[attrName];
        if (isEventListener(attrName, attrValue)) {
            const eventName = attrName.substr(2).toLowerCase();
            el.addEventListener(eventName, attrValue);
            continue;
        }
        el.setAttribute(attrName, attrValue);
    }
};

function createElementWithAttributesAndChildren(tag, attr = {}, ...children) {
    const el = document.createElement(tag);
    addAttributes(el, attr);
    el.appendChild(frag(...children));
    return el;
}
var createElement = function (tag, attrOrChild = {}, ...children) {
    if (attrOrChild instanceof HTMLElement || typeof attrOrChild === 'string') {
        return createElementWithAttributesAndChildren(tag, {}, attrOrChild, ...children);
    }
    return createElementWithAttributesAndChildren(tag, attrOrChild, ...children);
};

var empty = function (el) {
    while (el.lastChild) {
        el.removeChild(el.lastChild);
    }
};

const c = (tag) => createElement.bind(null, tag);
const a = c('a');
const abbr = c('abbr');
const address = c('address');
const article = c('article');
const aside = c('aside');
const audio = c('audio');
const b = c('b');
const bdi = c('bdi');
const bdo = c('bdo');
const blockquote = c('blockquote');
const body = c('body');
const button = c('button');
const canvas = c('canvas');
const caption = c('caption');
const cite = c('cite');
const code = c('code');
const colgroup = c('colgroup');
const data = c('data');
const datalist = c('datalist');
const dd = c('dd');
const del = c('del');
const details = c('details');
const dfn = c('dfn');
const dialog = c('dialog');
const div = c('div');
const dl = c('dl');
const dt = c('dt');
const em = c('em');
const fieldset = c('fieldset');
const figcaption = c('figcaption');
const figure = c('figure');
const footer = c('footer');
const form = c('form');
const h1 = c('h1');
const h2 = c('h2');
const h3 = c('h3');
const h4 = c('h4');
const h5 = c('h5');
const h6 = c('h6');
const head = c('head');
const header = c('header');
const hgroup = c('hgroup');
const html = c('html');
const i = c('i');
const iframe = c('iframe');
const ins = c('ins');
const kbd = c('kbd');
const keygen = c('keygen');
const label = c('label');
const legend = c('legend');
const li = c('li');
const main = c('main');
const map = c('map');
const mark = c('mark');
const math = c('math');
const menu = c('menu');
const meter = c('meter');
const nav = c('nav');
const noscript = c('noscript');
const object = c('object');
const ol = c('ol');
const optgroup = c('optgroup');
const option = c('option');
const output = c('output');
const p = c('p');
const picture = c('picture');
const pre = c('pre');
const progress = c('progress');
const q = c('q');
const rb = c('rb');
const rp = c('rp');
const rt = c('rt');
const rtc = c('rtc');
const ruby = c('ruby');
const s = c('s');
const samp = c('samp');
const script = c('script');
const section = c('section');
const select = c('select');
const slot = c('slot');
const small = c('small');
const span = c('span');
const strong = c('strong');
const style = c('style');
const sub = c('sub');
const summary = c('summary');
const sup = c('sup');
const svg = c('svg');
const table = c('table');
const tbody = c('tbody');
const td = c('td');
const template = c('template');
const textarea = c('textarea');
const tfoot = c('tfoot');
const th = c('th');
const thead = c('thead');
const time = c('time');
const title = c('title');
const tr = c('tr');
const u = c('u');
const ul = c('ul');
const varr = c('var');
const video = c('video');
const area = c('area');
const base = c('base');
const br = c('br');
const col = c('col');
const embed = c('embed');
const hr = c('hr');
const img = c('img');
const input = c('input');
const link = c('link');
const meta = c('meta');
const param = c('param');
const source = c('source');
const track = c('track');
const wbr = c('wbr');

exports.empty = empty;
exports.a = a;
exports.abbr = abbr;
exports.address = address;
exports.article = article;
exports.aside = aside;
exports.audio = audio;
exports.b = b;
exports.bdi = bdi;
exports.bdo = bdo;
exports.blockquote = blockquote;
exports.body = body;
exports.button = button;
exports.canvas = canvas;
exports.caption = caption;
exports.cite = cite;
exports.code = code;
exports.colgroup = colgroup;
exports.data = data;
exports.datalist = datalist;
exports.dd = dd;
exports.del = del;
exports.details = details;
exports.dfn = dfn;
exports.dialog = dialog;
exports.div = div;
exports.dl = dl;
exports.dt = dt;
exports.em = em;
exports.fieldset = fieldset;
exports.figcaption = figcaption;
exports.figure = figure;
exports.footer = footer;
exports.form = form;
exports.h1 = h1;
exports.h2 = h2;
exports.h3 = h3;
exports.h4 = h4;
exports.h5 = h5;
exports.h6 = h6;
exports.head = head;
exports.header = header;
exports.hgroup = hgroup;
exports.html = html;
exports.i = i;
exports.iframe = iframe;
exports.ins = ins;
exports.kbd = kbd;
exports.keygen = keygen;
exports.label = label;
exports.legend = legend;
exports.li = li;
exports.main = main;
exports.map = map;
exports.mark = mark;
exports.math = math;
exports.menu = menu;
exports.meter = meter;
exports.nav = nav;
exports.noscript = noscript;
exports.object = object;
exports.ol = ol;
exports.optgroup = optgroup;
exports.option = option;
exports.output = output;
exports.p = p;
exports.picture = picture;
exports.pre = pre;
exports.progress = progress;
exports.q = q;
exports.rb = rb;
exports.rp = rp;
exports.rt = rt;
exports.rtc = rtc;
exports.ruby = ruby;
exports.s = s;
exports.samp = samp;
exports.script = script;
exports.section = section;
exports.select = select;
exports.slot = slot;
exports.small = small;
exports.span = span;
exports.strong = strong;
exports.style = style;
exports.sub = sub;
exports.summary = summary;
exports.sup = sup;
exports.svg = svg;
exports.table = table;
exports.tbody = tbody;
exports.td = td;
exports.template = template;
exports.textarea = textarea;
exports.tfoot = tfoot;
exports.th = th;
exports.thead = thead;
exports.time = time;
exports.title = title;
exports.tr = tr;
exports.u = u;
exports.ul = ul;
exports.varr = varr;
exports.video = video;
exports.area = area;
exports.base = base;
exports.br = br;
exports.col = col;
exports.embed = embed;
exports.hr = hr;
exports.img = img;
exports.input = input;
exports.link = link;
exports.meta = meta;
exports.param = param;
exports.source = source;
exports.track = track;
exports.wbr = wbr;
