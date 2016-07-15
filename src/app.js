var app = {};

app.template = _.template(document.getElementById("template").innerHTML);
app.markdown = new showdown.Converter();

/**
 * Renders the page with a problem and tips.
 * You know, in any other project, I'd say this is dumb,
 * why not just have normal pages that link to each other.
 * But this is intended to be served as flat files with
 * no build process, so ¯\_(ツ)_/¯
 */
app.render = function(slug) {
    var context = {
        src: "problems/" + slug + ".html",
    };

    var request = new XMLHttpRequest();
    request.open('GET', "problems/" + slug + ".md");

    request.onload = function(e) {
        context.docs = app.markdown.makeHtml(e.target.response);
        document.getElementById("problem").innerHTML = app.template(context);
        
        _.each(document.querySelectorAll("pre code"), function(el){
            hljs.highlightBlock(el);
        });
    };

    request.send();
};

/**
 * Filter an event for whether it passed
 * through a matching query selector.
 */
app.getEventPath = function(e, matching) {
    var path = [];
    var el = e.target;
    var include;
    while (el && el !== e.currentTarget) {
        include = (!matching || el.matches(matching)) ? true : false;
        if (include) {
            path.push(el);
        }
        el = el.parentElement;
    }
    return path;
};

// Onload, render some content
app.render(window.location.search.split("?")[1] || "intro");

// Event Listeners
document.addEventListener("click", function(e) {
    var match = app.getEventPath(e, ".problems [data-slug]");
    if (match.length) {
        app.render(e.target.getAttribute("data-slug"));
    }
});
