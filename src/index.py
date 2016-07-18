import os
from beagle.decorators import action
from beagle.commands import Page, Copy, Concat

PROBLEMS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "problems")

@action
def pages():

    # Get the slugs from the list of files in the problems folder
    slugs = set([filename.split(".")[0] for filename in os.listdir(PROBLEMS_DIR)])
    actions = []

    # For each slug, render an html page, and copy the example
    for slug in slugs:
        if slug == "intro":
            filename = "index.html"
        else:
            filename = "%s.html" % slug
        page = Page(template="index.html", output=filename, context={
            "iframe_src": "problems/%s.html" % slug,
            "text": "problems/%s.md" % slug,
        })
        iframe = Copy(infile="problems/%s.html" % slug)
        actions.append(page)
        actions.append(iframe)
    return actions

@action
def assets():
    things = ["micromarkdown.js", "underscore-min.js", "app.css", "app.js", "problems"]
    copies = [Copy(**{"infile": thing}) for thing in things]
    return copies

@action
def js():
    return Concat(filenames=["underscore-min.js", "app.js"],
        destination="app.min.js")