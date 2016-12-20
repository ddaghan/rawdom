import {a, div} from '../src/rawdom';

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