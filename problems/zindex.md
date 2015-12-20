# Z-Index

`z-index` is how you control the order of overlapping layers.

For this example, you need to use the following html:

    <div class="box green"></div>
    <div class="box blue"></div>
    <div class="box red"></div>

By default, these boxes would be stacked with green on the bottom, red on top, and blue in the middle.
We're going to manipulate that.


## Notes:
* Only elements with a set `position` (not the default) can have `z-index`. That's not an issue for this case,
because we need to set a position to get the squares to overlap anyway.
* `z-index: 10;` sets an arbitrary number. Higher ones go on top.
* It's a good idea to leave some space between layers so if you need to place things between them in the future, you don't need to alter all the values. 
    * `z-index:1;` and `z-index:2`; is a bad idea. 
    * `z-index:10;` and `index:20;` is better.
