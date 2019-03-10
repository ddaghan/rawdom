export type HtmlTagNameWithChildren = "a"|"abbr"|"address"|"article"|"aside"|"audio"|"b"|"bdi"|"bdo"|"blockquote"|"body"|
"button"|"canvas"|"caption"|"cite"|"code"|"colgroup"|"data"|"datalist"|"dd"|"del"|"details"|"dfn"|"dialog"|"div"|"dl"|"dt"|
"em"|"fieldset"|"figcaption"|"figure"|"footer"|"form"|"h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"head"|"header"|"hgroup"|"html"|"i"|
"iframe"|"ins"|"kbd"|"keygen"|"label"|"legend"|"li"|"main"|"map"|"mark"|"math"|"menu"|"meter"|"nav"|"noscript"|"object"|
"ol"|"optgroup"|"option"|"output"|"p"|"picture"|"pre"|"progress"|"q"|"rb"|"rp"|"rt"|"rtc"|"ruby"|"s"|"samp"|"script"|
"section"|"select"|"slot"|"small"|"span"|"strong"|"style"|"sub"|"summary"|"sup"|"svg"|"table"|"tbody"|"td"|"template"|
"textarea"|"tfoot"|"th"|"thead"|"time"|"title"|"tr"|"u"|"ul"|"var"|"video";

export type HtmlTagNameSelfClosing = "area"|"base"|"br"|"col"|"embed"|"hr"|"img"|"input"|"link"|"menuitem"|"meta"|
"param"|"source"|"track"|"wbr";

export type HtmlTagName = HtmlTagNameWithChildren | HtmlTagNameSelfClosing;