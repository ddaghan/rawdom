# rawdom

Create raw dom objects easily:

## install

```sh
npm install rawdom
```

## usage

```javascript
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
```

This produces:

<a href="https://xkcd.com" target="_blank" rel="noopener noreferrer">xkcd comics</a>

You can also nest them, and add event listeners:

```javascript
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
);
```

It is umd, thus

- it can be included globally:

```html
<script type="text/javascript" src="node_modules/rawdom/rawdom.js"></script>
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

- it can also be referenced via commonjs or amd:

```javascript
import {a, div} from 'rawdom';

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
```

# License

MIT