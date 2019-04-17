## trends

[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=Performance)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=PWA)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=Accessibility)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=Best%20Practices)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=SEO)](https://github.com/ebidel/lighthouse-badge)

> browse trending github repos written in your favorite language with this high performance progressive web application

<img src='https://github.com/hanford/trends/blob/master/trends.gif' alt='preview gif' width='600px' />

[View the application](https://trends.now.sh)

Trends is an ultra high performance progressive web application built with React + Next.js and GraphQL. Trends pushes the performance needle forward by only using React on the server and then using the absolute minimum client side code to register a service worker totaling around [~15 lines of code](https://github.com/hanford/trends/blob/master/www/pages/_document.tsx#L98)

Checkout the perfect performance audit 💯
<img src='https://github.com/hanford/trends/blob/master/audit.jpg' alt='perf audit' width='600px' />

## Features

- Filter by time since repo created or by language
- Progressive web app
  - offline
  - install prompts on supported platforms
- [15 lines of client side code](https://github.com/hanford/trends/blob/master/www/pages/_document.tsx#L98)
- Server side rendering
- GraphQL
- Next.js
- Now 2.0
- lerna / yarn workspace
- [AMP](https://nextjs.org/blog/next-8-1)
- automatic darkmode [(in supported browsers)](https://caniuse.com/#search=prefers-color-scheme)

## Setting the project up locally

```sh
$ git clone https://github.com/hanford/trends.git
$ cd trends
$ yarn bootstrap
$ yarn dev
```

Questions? Feedback? [Please let me know](https://github.com/hanford/trends/issues/new)

## License (MIT)

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Copyright © 2017-present [Jack Hanford](http://jackhanford.com) jackhanford@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#### Related links

- [HN Discussion](https://news.ycombinator.com/item?id=17603219)
- [Reddit Discussion](https://www.reddit.com/r/reactjs/comments/91j386/trends_an_ulta_high_performance_github_trending/)

#### Alternatives

- [github-trending-repos](https://github.com/vitalets/github-trending-repos)
