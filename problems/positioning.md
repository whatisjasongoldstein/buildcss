# Positions

## Goals:

1. The gray box should have a number in each corner.
2. It should also have a span that's pushed from the top and left by `50px`
3. Make a sticky header

### Notes:

* `position: absolute;` makes `top`/`left`/`bottom`/`right` set the exact
number of pixels an element will appear relative to its innermost container that *also*
has a postiion set.
    * So putting an absolutely position element inside a relative or absolute positioned
    element would work like you expect. But if you don't set the position on the parent
    (the default position is `static`) it would be ignored, and the position will be set based
    on the next container up the DOM that does have a position (or the whole page).
    * This is odd, but useful.
    * Absolute positioned elements don't take up space in the layout, so they will sometimes
    wind up on top of other things. 
* `position: relative` moves things around from their default position. This means
    `position:relative; left: 10px;` would slide an element to the left by 10 pixels.
* `position:fixed` makes something sticky, and it will stay put as you scroll.
