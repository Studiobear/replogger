# Replogger

[![GitHub license](https://img.shields.io/github/license/Studiobear/replogger)](https://github.com/Studiobear/replogger/blob/master/LICENSE) ![npm bundle size](https://img.shields.io/bundlephobia/min/@studiobear/replogger) ![GitHub package.json version](https://img.shields.io/github/package-json/v/Studiobear/replogger)

This is a lightweight wrapper for `console.log` allowing simple console styling. Generally, one would use a full-feature log styler like [chalk](https://github.com/chalk/chalk), however, some termninals don't support it. 

Instead, we'll use [ANSI escape code](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors) to wrap our log statements in simple color and style forms. 

_Inspired by the desire for easier-to-read console statements using [repl.it](https://repl.it)_

## Getting Started

Intended for use as an ES module. Insert directly into an HTML file:
```html
<script type="module">
      import replogger from 'https://cdn.skypack.dev/@studiobear/replogger'
      const l = replogger();
      l.info('Hello, I should be green');
</script>
```

## Usage
_[Coming soon...]_

- **log:** plain ole console
- **info:** green
- **note:** cyan
- **warn:** yellow
- **error:** red
- **hl:** yellow background
- **wrap:** apply color to string
- **getDefaults:** view defaults
- **setDefaults:** set defaults
- **styles:** use style snippets
- **colors:** use color snippets
- **bgs:** use background snippets
- **util:** use util snippets

