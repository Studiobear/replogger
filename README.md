# Replogger

This is a lightweight wrapper for `console.log` allowing simple console styling. Generally, one would use a full-feature log styler like [chalk](https://github.com/chalk/chalk), however, some termninal don't support it. 

Instead, we'll use [ANSI escape code](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors) to wrap our log statements in simple color and style forms. 

_Inspired by the desire for easier-to-read console statements using [repl.it](https://repl.it)_

## Getting Started

Intended for use as an ES module. Insert directly into an HTML file:
```html
<script type="module">
      import replogger from 'https://cdn.skypack.dev/replogger';
      const l = replogger();
      l.info('Hello, I should be cyan');
</script>
```

## Usage

