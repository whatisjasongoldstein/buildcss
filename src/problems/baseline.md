# The Baseline (Vertical Align, Line Height, etc.)

In typography, the baseline is a line the letter sit on. If you've never heard this term,
read the [Wikipedia entry](https://en.wikipedia.org/wiki/Baseline_\(typography\))
quickly.

`line-height` describes the amount of space between the baselines.

As you probably guessed, the boxes are `inline-block`s. Inline elements sit on the baseline, but you can adjust how they set using the `vertical-align` property. If you were to look this up on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align), you'll have the default is baseline, but you can make it hang in the middle or the top accordingly.

### Notes

* Always set `line-height` to a number without units, this way it becomes a multiple
of whatever the font-size is. This way, `line-height: 2;` is like double spacing,
and if the font-size changes, your typography holds together.
* Since `vertical-align` describes the relationship between things to the baseline, its
effect will be more pronounced when the baselines are further apart (bigger `line-height`).
