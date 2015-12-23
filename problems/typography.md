# Typography

Code wise, this is easy. The hard part, and the part you should practice,
is eyeballing a comp and figuring out how to mirror the behavior of the type.

Your typography is the most part of your UI. If it sucks, it's hard to read,
and the user goes back to Facebook.

### Goals

* Match the font-size, line-length (there's a `max-width` on the body)
* Make the leading (`line-height`) readable an the space between paragraphs reasonable.
* Put some space between paragraphs and subheads. The `+` selector will be helpful for this.


### Tips

* Try using `em` units for margins. This way if the font-size changes, the margins
adjust proportionately.
* `line-height` should always be unitless. (`line-height: 1`, never `line-height:16px` 
or `line-height: 1.5em`). This way it scales if the font size changes.

### More on This

"Getting" type is more about understanding the design side than the code.

Jason Santa Maria has written a lot of good stuff about type on the web. 
You should start with [How We Read](http://alistapart.com/article/how-we-read)
on *A List Apart*.
