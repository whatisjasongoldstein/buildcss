# Transforms

Transforms are a useful new property in CSS for rotating and warping.
You've already used it to center things vertically. We're going to do one more thing,
since transforms can be strange.

This is your markup: `<h1>Classified</h1>`

## Notes
* You'll need multiple tranform properties. One to rotate, and one to do the vertical centering.
    * Putting two transform properties on a CSS block, like having two `color` properties, causes
    one to overwrite the other. Instead, string the values together: `translate(-50%, -50%) transform: rotate(90deg) scale(1.5)`. (Obviously, these aren't the real values.)
* Also look up `transform-origin`. It might help.
* Since you're centering something verically, you'll need the container (`body`) to the width
and height fo the window.
* Rotating the element screws up the calculations for subsequent transforms. Do the `translate` step fo the `rotate()` first.
* Only IE10 and up support `transform`. When using cutting edge CSS tools, always consider them progress enhancements. Make sure the design works to your satisfaction without them.
