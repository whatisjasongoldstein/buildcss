from beagle.decorators import action
from beagle.commands import Page, Copy


@action
def pages():
    return Page(template="index.html", output="index.html", context={})

@action
def assets():
    things = ["micromarkdown.js", "underscore-min.js", "app.css", "app.js", "problems"]
    copies = [Copy(**{"infile": thing}) for thing in things]
    return copies