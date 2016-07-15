# Advanced Selectors

I assume you already know how to style stuff by its `id`, `class`, or `element`.

## Goals
1. Headlines (`<h1>`) followed by a subhead (`<h2>`) shouldn't have space between them.
2. Subheads that follow a headline should have a red line (`border-bottom`) under them.
    * Subheads elsewhere should have normal margin and no bottom border
3. Italics `<i>` inside of h1 or h2 should be blue. But not elsewhere.
4. In the list, even items should have a yellow background.

## Notes

* `.a + .b` is an adjacent selector. It matches elements with a class `b` that are right after elements with a class `.a`.
* `nth-child` is pretty cool. You should [read about it](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Anth-child).
