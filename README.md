# rawdom

Create raw dom objects easily:

## install

```sh
npm install rawdom
```

## usage

### it can be included with es6 import syntax:
```javascript
import {main,ul,li,a,h1,button} from './node_modules/rawdom/jsdist/rawdom.js';

document.body.appendChild(
    main(
        ul(
            li(
                a(
                    {
                        href: 'https://xkcd.com',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                    },
                    'xkcd comics'
                )
            ),
            li(
                a(
                    {
                        href: 'http://phdcomics.com/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                    },
                    'phd comics'
                )
            )
        ),
        h1('Click above links for humor'),
        button(
            {
                onclick: () => {alert('BUTTON CLICKED')}
            },
            'click here to alert'
        )
    )
)
```

### it can be included globally for legacy projects:

```html
<script type="text/javascript" src="node_modules/rawdom/dist/rawdom.iife.js"></script>
<script type="text/javascript">
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
</script>
```

This produces:

<a href="https://xkcd.com" target="_blank" rel="noopener noreferrer">xkcd comics</a>

see testGlobalUse/test.html

### it can also be used with import together with webpack, rollup, etc. packaging:

```javascript
import {main,ul,li,a,h1,button} from 'rawdom';

document.body.appendChild(
    main(
        ul(
            li(
                a(
                    {
                        href: 'https://xkcd.com',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                    },
                    'xkcd comics'
                )
            ),
            li(
                a(
                    {
                        href: 'http://phdcomics.com/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                    },
                    'phd comics'
                )
            )
        ),
        h1('Click above links for humor'),
        button(
            {
                onclick: () => {alert('BUTTON CLICKED')}
            },
            'click here to alert'
        )
    )
)

```

you can use the boilerplate to see this in detail:
```sh
npm install rawdom-boilerplate
```

for details of the boilerplate:

- https://www.npmjs.com/package/rawdom-boilerplate
- https://github.com/ddaghan/rawdom-boilerplate

## api

Every html tag has a corresponding function, which takes any number of parameters where if the parameter is a:
- json object, members are added as html attributes, including event listeners
- html element, it is added as child
- string, it is added as text-node child
- see examples above.

# License

MIT