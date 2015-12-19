var app = {};

app.template = _.template(document.getElementById("template").innerHTML);
app.markdown = new showdown.Converter();

// Cookies have the worst js api ever
app.cookies = function() {

    function get(key) {
        var match = _.filter(document.cookie.split(";"), function(k, v, collection) {
            return k.split("=")[0].trim() === key;
        })[0];
        if (match) {
            return match.split("=")[1];
        }
        return undefined;
    }
    
    function set(key, value, timeout) {
        var expires = "";
        if (timeout) {
            var date = new Date();
            date.setTime(date.getTime() + timeout);
            expires = "; expires=" + date.toGMTString();
        }
        document.cookie = key + "=" + value + expires + "; path=/";
        return value;
    }

    function remove(key) {
        return set(key, "", -1);
    }

    return {
        "get": get,
        "set": set,
        "remove": remove
    };
}();

// State is kept in a cookie, which needs
// updating, and defaults to the intro.
Object.defineProperty(app, "state", {
    get: function() {
        return app._state || app.cookies.get("state") || "intro";
    },
    set: function(slug) {
        app.cookies.set("state", slug);
        app._state = slug;
    }
});


app.render = function(slug) {
    app.state = slug;
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

// Onload, render the default state.
app.render(app.state);

// Event Listeners
document.addEventListener("click", function(e) {
    var match = app.getEventPath(e, ".problems [data-slug]");
    if (match.length) {
        app.render(e.target.getAttribute("data-slug"));
    }
});
