from beagle.decorators import action
from beagle.commands import Page, Copy, Concat

@action
def pages():
    return Page(template="index.html", output="index.html", context={})

@action
def assets():
    things = ["micromarkdown.js", "underscore-min.js", "app.css", "app.js", "problems"]
    copies = [Copy(**{"infile": thing}) for thing in things]
    return copies

@action
def js():
    return Concat(filenames=["micromarkdown.js", "underscore-min.js", "app.js"],
        destination="app.min.js")