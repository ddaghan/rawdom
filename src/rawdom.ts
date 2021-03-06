import createElement, {ChildType} from './createElement.js';
import {HTMLAttributes} from './htmlAttributes.js';
import {HtmlTagName} from './htmlTagName.js';
import empty from './empty.js';
import frag from './frag.js';
export {empty, frag};

type CreateHTMLElement = (attrOrChild?: ChildType|HTMLAttributes, ...children: ChildType[]) => HTMLElement;
type CreateSelfClosingHTMLElement = (attr?: HTMLAttributes) => HTMLElement;

const c = (tag: HtmlTagName) => createElement.bind(null, tag);

export const
a: CreateHTMLElement = c('a'),
abbr: CreateHTMLElement = c('abbr'),
address: CreateHTMLElement = c('address'),
article: CreateHTMLElement = c('article'),
aside: CreateHTMLElement = c('aside'),
audio: CreateHTMLElement = c('audio'),
b: CreateHTMLElement = c('b'),
bdi: CreateHTMLElement = c('bdi'),
bdo: CreateHTMLElement = c('bdo'),
blockquote: CreateHTMLElement = c('blockquote'),
body: CreateHTMLElement = c('body'),
button: CreateHTMLElement = c('button'),
canvas: CreateHTMLElement = c('canvas'),
caption: CreateHTMLElement = c('caption'),
cite: CreateHTMLElement = c('cite'),
code: CreateHTMLElement = c('code'),
colgroup: CreateHTMLElement = c('colgroup'),
data: CreateHTMLElement = c('data'),
datalist: CreateHTMLElement = c('datalist'),
dd: CreateHTMLElement = c('dd'),
del: CreateHTMLElement = c('del'),
details: CreateHTMLElement = c('details'),
dfn: CreateHTMLElement = c('dfn'),
dialog: CreateHTMLElement = c('dialog'),
div: CreateHTMLElement = c('div'),
dl: CreateHTMLElement = c('dl'),
dt: CreateHTMLElement = c('dt'),
em: CreateHTMLElement = c('em'),
fieldset: CreateHTMLElement = c('fieldset'),
figcaption: CreateHTMLElement = c('figcaption'),
figure: CreateHTMLElement = c('figure'),
footer: CreateHTMLElement = c('footer'),
form: CreateHTMLElement = c('form'),
h1: CreateHTMLElement = c('h1'),
h2: CreateHTMLElement = c('h2'),
h3: CreateHTMLElement = c('h3'),
h4: CreateHTMLElement = c('h4'),
h5: CreateHTMLElement = c('h5'),
h6: CreateHTMLElement = c('h6'),
head: CreateHTMLElement = c('head'),
header: CreateHTMLElement = c('header'),
hgroup: CreateHTMLElement = c('hgroup'),
html: CreateHTMLElement = c('html'),
i: CreateHTMLElement = c('i'),
iframe: CreateHTMLElement = c('iframe'),
ins: CreateHTMLElement = c('ins'),
kbd: CreateHTMLElement = c('kbd'),
keygen: CreateHTMLElement = c('keygen'),
label: CreateHTMLElement = c('label'),
legend: CreateHTMLElement = c('legend'),
li: CreateHTMLElement = c('li'),
main: CreateHTMLElement = c('main'),
map: CreateHTMLElement = c('map'),
mark: CreateHTMLElement = c('mark'),
math: CreateHTMLElement = c('math'),
menu: CreateHTMLElement = c('menu'),
meter: CreateHTMLElement = c('meter'),
nav: CreateHTMLElement = c('nav'),
noscript: CreateHTMLElement = c('noscript'),
object: CreateHTMLElement = c('object'),
ol: CreateHTMLElement = c('ol'),
optgroup: CreateHTMLElement = c('optgroup'),
option: CreateHTMLElement = c('option'),
output: CreateHTMLElement = c('output'),
p: CreateHTMLElement = c('p'),
picture: CreateHTMLElement = c('picture'),
pre: CreateHTMLElement = c('pre'),
progress: CreateHTMLElement = c('progress'),
q: CreateHTMLElement = c('q'),
rb: CreateHTMLElement = c('rb'),
rp: CreateHTMLElement = c('rp'),
rt: CreateHTMLElement = c('rt'),
rtc: CreateHTMLElement = c('rtc'),
ruby: CreateHTMLElement = c('ruby'),
s: CreateHTMLElement = c('s'),
samp: CreateHTMLElement = c('samp'),
script: CreateHTMLElement = c('script'),
section: CreateHTMLElement = c('section'),
select: CreateHTMLElement = c('select'),
slot: CreateHTMLElement = c('slot'),
small: CreateHTMLElement = c('small'),
span: CreateHTMLElement = c('span'),
strong: CreateHTMLElement = c('strong'),
style: CreateHTMLElement = c('style'),
sub: CreateHTMLElement = c('sub'),
summary: CreateHTMLElement = c('summary'),
sup: CreateHTMLElement = c('sup'),
svg: CreateHTMLElement = c('svg'),
table: CreateHTMLElement = c('table'),
tbody: CreateHTMLElement = c('tbody'),
td: CreateHTMLElement = c('td'),
template: CreateHTMLElement = c('template'),
textarea: CreateHTMLElement = c('textarea'),
tfoot: CreateHTMLElement = c('tfoot'),
th: CreateHTMLElement = c('th'),
thead: CreateHTMLElement = c('thead'),
time: CreateHTMLElement = c('time'),
title: CreateHTMLElement = c('title'),
tr: CreateHTMLElement = c('tr'),
u: CreateHTMLElement = c('u'),
ul: CreateHTMLElement = c('ul'),
varr: CreateHTMLElement = c('var'),
video: CreateHTMLElement = c('video'),
// self closing:
area: CreateSelfClosingHTMLElement = c('area'),
base: CreateSelfClosingHTMLElement = c('base'),
br: CreateSelfClosingHTMLElement = c('br'),
col: CreateSelfClosingHTMLElement = c('col'),
embed: CreateSelfClosingHTMLElement = c('embed'),
hr: CreateSelfClosingHTMLElement = c('hr'),
img: CreateSelfClosingHTMLElement = c('img'),
input: CreateSelfClosingHTMLElement = c('input'),
link: CreateSelfClosingHTMLElement = c('link'),
// DEPRECATED: menuitem: CreateSelfClosingHTMLElement = c('menuitem'),
meta: CreateSelfClosingHTMLElement = c('meta'),
param: CreateSelfClosingHTMLElement = c('param'),
source: CreateSelfClosingHTMLElement = c('source'),
track: CreateSelfClosingHTMLElement = c('track'),
wbr: CreateSelfClosingHTMLElement = c('wbr');