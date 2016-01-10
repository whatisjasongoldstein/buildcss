# Bear Awareness (in Grid Form)

A comment way to lay out a list of visual things is a grid like above.

This one may be difficult. Especially since you have to use this markup:

    <ul class="images">
        <li>
            <figure>
                <a href="#">
                    <img src="https://placebear.com/300/200">
                    <figcaption>Be Aware of the Bear</figcaption>
                </a>
            </figure>        
        </li>
        <li>
            <figure>
                <a href="#">
                    <img src="https://placebear.com/300/201">
                    <figcaption>Smokey</figcaption>
                </a>
            </figure>  
        </li>

        <li>
            <figure>
                <a href="#">
                    <img src="https://placebear.com/300/202">
                    <figcaption>Gone Fishin</figcaption>
                </a>
            </figure>  
        </li>

        <li>
            <figure>
                <a href="#">
                    <img src="https://placebear.com/301/203">
                    <figcaption>I'm stuck</figcaption>
                </a>
            </figure>        
        </li>
        <li>
            <figure>
                <a href="#">
                    <img src="https://placebear.com/305/205">
                    <figcaption>PDA?</figcaption>
                </a>
            </figure>  
        </li>

        <li>
            <figure>
                <a href="#">
                    <img src="https://placebear.com/301/202">
                    <figcaption>Hello?</figcaption>
                </a>
            </figure>  
        </li>
    </ul>

### Notes
* By default, `img` is an inline element, and will get a mysterious space around it
when when margin is set to zero. This is because inline elements get space around them
from the `line-height`. You'll want to set your `.figure img` to `display: block` so it fills
the space and doesn't have weird layout effects.
* Because I like to make things hard, the container has a very thing gray line around it. This means
you have to use margins to create space between items, but not pressing the container. But.. how?
    * There are many ways to do this. I take this approach:
        1. The items in the list are in charge of layout. If there was no space between them, they'd
        be 33.3333% wide with a `float: left`. But I want to use 1% of that space for margin on each item.
            * Since there's only space between the first/middle and last/middle item in each row,
            I subtract 2% from the whole, and each item is 32.6666% wide.
                * Don't worry about these ridiculous percentages. The browser will usually take care of it. Usually.
        2. Set this 1% to `margin-left` only. Now you don't have to worry about the items at the end of the line - they'll set neatly against the edge.
            * This is okay because combined margins doesn't add them together.
        3. However, we need to ensure the first item in a line doesn't have a leading margin. For that, I style `.images li:nth-child(3n+1)` to `clear: left` and `margin-left: 0`.
            * `nth-child` is a psuedoclass that can select even, odd, third, etc, of the matching elements. This is useful for striping tables, or clearing the margin of every third+1 element. Read about it on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Anth-child).
            * Why does it match the first row? Because if `n` is `0`, 3n+1 is 1, or the first element.
* The `figcaption` is on top of the image. Perhaps `position: absolute` is a useful tool for this.
* The `figcaption` is also transparent. You can do that with `rgba` colors. If you've never seen this before, you should [look it up on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgba()).
    * You may be sensing a pattern here. When in doubt, use MDN.

The images are from [placebear.com](https://placebear.com). It's exactly what it sounds like it is.
There's also [placekitten.com](https://placekitten.com), if you want to make "I can haz placeholder art" jokes.

### For Bonus Points

Right now, if there were a 7th image, it would hang on the left.
What if you wanted it centered?

Perhaps, rather than floating, you could make a layout like this where the `li`'s are 
`inline-block`s, and set `text-align:center;` on the parent, so if there's 3 the fill the row, 
but if there's 1 or 2 they're centered across the row.

I bet that would work 😉

