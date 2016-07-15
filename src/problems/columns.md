# Columns

Columns are tricky. Try to build this.

## Notes

* The header is easy, that's just spanning the full width of the page.
* The two columns float next to each other at 50% width.
    * I'd like to give them some breathing space, so I set each to have some padding
    the inside. To make this be counted towards the 50% instead of add to it (which would
    make the elements over 50% each and not fit on the line), set `box-sizing:border-box`.
* To make the footer clear floats, it needs to be a block element with `clear:both`.
    * But by default, no matter how much `margin-top` you put on the footer, it won't create
    a gap between the footer and the columns.
        * This is because floats are broken out of from the regular layout, so they **only respect margins from other floats**.
        * The exception is margins coming from above. You can push a float down with a margin, but margins coming from the side or bottom will have no effect.
    * There are two ways to fix this:
        * Setting margin bottom on the columns.
        * We can fix this by putting a wrapping div around both elements, which can clear the floats
        using either `overflow:hidden` or an after clearfix, e.g., `.wrapper:after {content: ""; display:block; clear:both;}`.


### The "Wrong" Answer

You *could* put a `<div style="clear:both"></div>` between the footer and the columns. It would clear the floats and provide something that the footer's top margin could push against. But then you'd have an empty, unsemantic element that you don't need in your code.

The very thought of this should fill you with disgust, that such ugliness should be allowed to blight your code even though your users would never notice. 

### Aside

`columns: 2;` is a thing in CSS3, however, it still doesn't feel ready for prime time. [Read more on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/columns).

