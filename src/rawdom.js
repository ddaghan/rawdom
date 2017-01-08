'use strict';

export function createElement(tag) {
    var el;
    var restParams = Array.prototype.slice.call(arguments,1);

    if (typeof tag === 'function') {
        el = tag.apply(null, restParams);
    } else {
        el = document.createElement(tag);
    }
    
    for (var i in restParams) {
        var childOrProp = restParams[i];
        if (childOrProp instanceof HTMLElement) {
            el.appendChild(childOrProp)
        } else if (typeof childOrProp === 'string') {
            el.appendChild(document.createTextNode(childOrProp));
        } else {
            var attr = childOrProp;
            for (var attrName in attr){
                if (attr.hasOwnProperty(attrName)) {
                    if (attrName.substr(0,2).toLowerCase() === 'on'){
                        var eventName = attrName.substr(2).toLowerCase();
                        var eventHandler = attr[attrName];
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

var c = function (tag) {
    return createElement.bind(null, tag);
}

exports.a=c('a');
exports.abbr=c('abbr');
exports.address=c('address');
exports.altGlyph=c('altGlyph');
exports.altGlyphDef=c('altGlyphDef');
exports.altGlyphItem=c('altGlyphItem');
exports.animate=c('animate');
exports.animateColor=c('animateColor');
exports.animateMotion=c('animateMotion');
exports.animateTransform=c('animateTransform');
exports.animation=c('animation');
exports.area=c('area');
exports.article=c('article');
exports.aside=c('aside');
exports.audio=c('audio');
exports.b=c('b');
exports.base=c('base');
exports.bdi=c('bdi');
exports.bdo=c('bdo');
exports.blockquote=c('blockquote');
exports.body=c('body');
exports.br=c('br');
exports.button=c('button');
exports.canvas=c('canvas');
exports.caption=c('caption');
exports.circle=c('circle');
exports.cite=c('cite');
exports.clipPath=c('clipPath');
exports.code=c('code');
exports.col=c('col');
exports.colgroup=c('colgroup');
exports.cursor=c('cursor');
exports.data=c('data');
exports.datalist=c('datalist');
exports.dd=c('dd');
exports.defs=c('defs');
exports.del=c('del');
exports.desc=c('desc');
exports.details=c('details');
exports.dfn=c('dfn');
exports.dialog=c('dialog');
exports.discard=c('discard');
exports.div=c('div');
exports.dl=c('dl');
exports.dt=c('dt');
exports.ellipse=c('ellipse');
exports.em=c('em');
exports.embed=c('embed');
exports.feBlend=c('feBlend');
exports.feColorMatrix=c('feColorMatrix');
exports.feComponentTransfer=c('feComponentTransfer');
exports.feComposite=c('feComposite');
exports.feConvolveMatrix=c('feConvolveMatrix');
exports.feDiffuseLighting=c('feDiffuseLighting');
exports.feDisplacementMap=c('feDisplacementMap');
exports.feDistantLight=c('feDistantLight');
exports.feDropShadow=c('feDropShadow');
exports.feFlood=c('feFlood');
exports.feFuncA=c('feFuncA');
exports.feFuncB=c('feFuncB');
exports.feFuncG=c('feFuncG');
exports.feFuncR=c('feFuncR');
exports.feGaussianBlur=c('feGaussianBlur');
exports.feImage=c('feImage');
exports.feMerge=c('feMerge');
exports.feMergeNode=c('feMergeNode');
exports.feMorphology=c('feMorphology');
exports.feOffset=c('feOffset');
exports.fePointLight=c('fePointLight');
exports.feSpecularLighting=c('feSpecularLighting');
exports.feSpotLight=c('feSpotLight');
exports.feTile=c('feTile');
exports.feTurbulence=c('feTurbulence');
exports.fieldset=c('fieldset');
exports.figcaption=c('figcaption');
exports.figure=c('figure');
exports.filter=c('filter');
exports.font=c('font');
exports.footer=c('footer');
exports.foreignObject=c('foreignObject');
exports.form=c('form');
exports.g=c('g');
exports.glyph=c('glyph');
exports.glyphRef=c('glyphRef');
exports.h1=c('h1');
exports.h2=c('h2');
exports.h3=c('h3');
exports.h4=c('h4');
exports.h5=c('h5');
exports.h6=c('h6');
exports.handler=c('handler');
exports.hatch=c('hatch');
exports.hatchpath=c('hatchpath');
exports.head=c('head');
exports.header=c('header');
exports.hkern=c('hkern');
exports.hr=c('hr');
exports.html=c('html');
exports.i=c('i');
exports.iframe=c('iframe');
exports.image=c('image');
exports.img=c('img');
exports.input=c('input');
exports.ins=c('ins');
exports.kbd=c('kbd');
exports.label=c('label');
exports.legend=c('legend');
exports.li=c('li');
exports.line=c('line');
exports.linearGradient=c('linearGradient');
exports.link=c('link');
exports.listener=c('listener');
exports.main=c('main');
exports.map=c('map');
exports.mark=c('mark');
exports.marker=c('marker');
exports.mask=c('mask');
exports.math=c('math');
exports.menu=c('menu');
exports.menuitem=c('menuitem');
exports.mesh=c('mesh');
exports.meshgradient=c('meshgradient');
exports.meshpatch=c('meshpatch');
exports.meshrow=c('meshrow');
exports.meta=c('meta');
exports.metadata=c('metadata');
exports.meter=c('meter');
exports.mpath=c('mpath');
exports.nav=c('nav');
exports.noscript=c('noscript');
exports.object=c('object');
exports.ol=c('ol');
exports.optgroup=c('optgroup');
exports.option=c('option');
exports.output=c('output');
exports.p=c('p');
exports.param=c('param');
exports.path=c('path');
exports.pattern=c('pattern');
exports.picture=c('picture');
exports.polygon=c('polygon');
exports.polyline=c('polyline');
exports.pre=c('pre');
exports.prefetch=c('prefetch');
exports.progress=c('progress');
exports.q=c('q');
exports.radialGradient=c('radialGradient');
exports.rb=c('rb');
exports.rect=c('rect');
exports.rp=c('rp');
exports.rt=c('rt');
exports.rtc=c('rtc');
exports.ruby=c('ruby');
exports.s=c('s');
exports.samp=c('samp');
exports.script=c('script');
exports.section=c('section');
exports.select=c('select');
exports.set=c('set');
exports.small=c('small');
exports.solidColor=c('solidColor');
exports.solidcolor=c('solidcolor');
exports.source=c('source');
exports.span=c('span');
exports.stop=c('stop');
exports.strong=c('strong');
exports.style=c('style');
exports.sub=c('sub');
exports.summary=c('summary');
exports.sup=c('sup');
exports.svg=c('svg');
exports.switch=c('switch');
exports.symbol=c('symbol');
exports.table=c('table');
exports.tbody=c('tbody');
exports.tbreak=c('tbreak');
exports.td=c('td');
exports.template=c('template');
exports.text=c('text');
exports.textArea=c('textArea');
exports.textPath=c('textPath');
exports.textarea=c('textarea');
exports.tfoot=c('tfoot');
exports.th=c('th');
exports.thead=c('thead');
exports.time=c('time');
exports.title=c('title');
exports.tr=c('tr');
exports.track=c('track');
exports.tref=c('tref');
exports.tspan=c('tspan');
exports.u=c('u');
exports.ul=c('ul');
exports.unknown=c('unknown');
exports.use=c('use');
exports.var=c('var');
exports.video=c('video');
exports.view=c('view');
exports.vkern=c('vkern');
exports.wbr=c('wbr');