'use strict';

export function createElement(tag) {
    var el;

    if (typeof tag === 'function') {
        el = tag();
    } else {
        el = document.createElement(tag);
    }
    
    for (var i = 1; i < arguments.length; ++i) {
        var childOrProp = arguments[i];
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

// 116 html tags 101 svg tags, only 9 common so no need to uniq:
var htmlTags = ["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];

var svgTagNames = ["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","animation","audio","canvas","circle","clipPath","color-profile","cursor","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","handler","hatch","hatchpath","hkern","iframe","image","line","linearGradient","listener","marker","mask","mesh","meshgradient","meshpatch","meshrow","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","prefetch","radialGradient","rect","script","set","solidColor","solidcolor","stop","style","svg","switch","symbol","tbreak","text","textArea","textPath","title","tref","tspan","unknown","use","video","view","vkern"];

var allTags = htmlTags.concat(svgTagNames);

allTags.forEach((tag) => {
    exports[tag] = createElement.bind(null, tag);
});
