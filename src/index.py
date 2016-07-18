import os
from beagle.decorators import action
from beagle.commands import Page, Copy, Concat

PROBLEMS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "problems")
SITE_PREFIX = "/buildcss/"

@action
def pages():

    # Get the slugs from the list of files in the problems folder
    slugs = set([filename.split(".")[0] for filename in os.listdir(PROBLEMS_DIR)])
    actions = []

    # For each slug, render an html page, and copy the example
    for slug in slugs:
        if slug == "intro":
            filename = "index.html"
            redirect = True
        else:
            filename = "%s/index.html" % slug
            redirect = False
        page = Page(template="problem.html", outfile=filename, context={
            "iframe_src": "%sproblems/%s.html" % (SITE_PREFIX, slug),
            "text": "problems/%s.md" % slug,
            "redirect": redirect,
            "site_url": SITE_PREFIX,
        })
        iframe = Copy(infile="problems/%s.html" % slug)
        actions.append(page)
        actions.append(iframe)
    return actions

@action
def assets():
    things = ["micromarkdown.js", "underscore-min.js", "app.css", "problems", "README.md"]
    copies = [Copy(**{"infile": thing}) for thing in things]
    return copies

@action
def js():
    return Concat(infiles=["underscore-min.js", "app.js"],
        outfile="app.min.js")