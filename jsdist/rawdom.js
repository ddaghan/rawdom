import createElement from './createElement.js';
import empty from './empty.js';
import frag from './frag.js';
export { empty, frag };
const c = (tag) => createElement.bind(null, tag);
export const a = c('a'), abbr = c('abbr'), address = c('address'), article = c('article'), aside = c('aside'), audio = c('audio'), b = c('b'), bdi = c('bdi'), bdo = c('bdo'), blockquote = c('blockquote'), body = c('body'), button = c('button'), canvas = c('canvas'), caption = c('caption'), cite = c('cite'), code = c('code'), colgroup = c('colgroup'), data = c('data'), datalist = c('datalist'), dd = c('dd'), del = c('del'), details = c('details'), dfn = c('dfn'), dialog = c('dialog'), div = c('div'), dl = c('dl'), dt = c('dt'), em = c('em'), fieldset = c('fieldset'), figcaption = c('figcaption'), figure = c('figure'), footer = c('footer'), form = c('form'), h1 = c('h1'), h2 = c('h2'), h3 = c('h3'), h4 = c('h4'), h5 = c('h5'), h6 = c('h6'), head = c('head'), header = c('header'), hgroup = c('hgroup'), html = c('html'), i = c('i'), iframe = c('iframe'), ins = c('ins'), kbd = c('kbd'), keygen = c('keygen'), label = c('label'), legend = c('legend'), li = c('li'), main = c('main'), map = c('map'), mark = c('mark'), math = c('math'), menu = c('menu'), meter = c('meter'), nav = c('nav'), noscript = c('noscript'), object = c('object'), ol = c('ol'), optgroup = c('optgroup'), option = c('option'), output = c('output'), p = c('p'), picture = c('picture'), pre = c('pre'), progress = c('progress'), q = c('q'), rb = c('rb'), rp = c('rp'), rt = c('rt'), rtc = c('rtc'), ruby = c('ruby'), s = c('s'), samp = c('samp'), script = c('script'), section = c('section'), select = c('select'), slot = c('slot'), small = c('small'), span = c('span'), strong = c('strong'), style = c('style'), sub = c('sub'), summary = c('summary'), sup = c('sup'), svg = c('svg'), table = c('table'), tbody = c('tbody'), td = c('td'), template = c('template'), textarea = c('textarea'), tfoot = c('tfoot'), th = c('th'), thead = c('thead'), time = c('time'), title = c('title'), tr = c('tr'), u = c('u'), ul = c('ul'), varr = c('var'), video = c('video'), area = c('area'), base = c('base'), br = c('br'), col = c('col'), embed = c('embed'), hr = c('hr'), img = c('img'), input = c('input'), link = c('link'), meta = c('meta'), param = c('param'), source = c('source'), track = c('track'), wbr = c('wbr');
