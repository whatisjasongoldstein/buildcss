# An intro to building shit

This is not a tutorial; it's a series of examples.

CSS is full of counterintuitive things. For example, **float**
throws off a lot of people. According to MDN, the definition is:

> The float CSS property specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it.

But this doesn't help you use it to build layouts.

## This series is for you if

1. You know the syntax - you can write CSS, but have trouble figuring out how to build complex things in it.
2. You understand [specificity](http://sixrevisions.com/css/css-specificity/). If not, do that first. You don't understand CSS if you don't understand specificity. 

## Format

Each problem is an example of something made with html in CSS. Your job is to recreate it, without looking at the code. Some hints may be provided. The goal, of course, isn't to build stupid little UI things, but to understand *how* they can be built by illustrating one or two concepts per example.

**Clicking the image above opens the finished html document.** You should view source, read it, open it in the *inspector*, and fiddle with it until you understand what's happening and why. This case is easy - you need two `<p>`'s and something like
    
    .a {color: red;}
    .b {color: blue;}

**Need a place to write code?** You should get used to working with plain html files on your desktop.
But you can also 
