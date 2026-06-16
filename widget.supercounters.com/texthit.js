function sc_text_hit(id, label, fcolor) {
    var info;
    var d = document;
    if (fcolor.search("#") == -1) fcolor = "#" + fcolor;

    if (encodeURIComponent) {
        info = '&ua=' + encodeURIComponent(navigator.userAgent);
        info = info + '&ref=' + encodeURIComponent(document.referrer);
        info = info + '&url=' + encodeURIComponent(window.location);
    } else {
        info = '&ua=' + escape(navigator.userAgent);
        info = info + '&ref=' + escape(document.referrer);
        info = info + '&url=' + escape(window.location);

    }

    info = info + '&sw=' + screen.width;
    info = info + '&sh=' + screen.height;
    info = info + '&rand=' + Math.round(100 * Math.random());
    sc_texthit_var["color"] = fcolor;
    sc_texthit_var["label"] = label;
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = "//service.supercounters.com/fc.php?id=" + id + "&w=0&v=1" + info; (d.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0]).appendChild(ga);
}

function sc_show_hit(id, count, style, min) {
    var p = document.createElement("p");
    var html = "<a style='color: " +  sc_texthit_var["color"] +"' href='http://www.supercounters.com/stats/" + id + "'>" + count + " " + sc_texthit_var["label"] + "</a>";
    p.innerHTML = html;
    p.style.display = 'inline';
    ct_insert(p, "supercounters.com/texthit.js");
}

function ct_insert(c, d) {
    var a = document.getElementsByTagName("script");
    for (var b = 0; b < a.length; b++) {
        if (a[b].src.indexOf(d) > 0) {
            a[b].parentNode.insertBefore(c, a[b].nextSibling)
        }
    }
}

function errorMsg(msg) {
    var w = msg.length * 7;
    var cd = document.createElement("div");
    cd.style.position = "relative";
    cd.style.display = "inline-block";
    cd.style.width = w + "px";
    cd.style.height = "15px";
    cd.style.overflow = "hidden";
    cd.style.cursor = "pointer";
    cd.style.fontFamily = "Arial";
    cd.style.fontSize = "12px";
    cd.style.color = "#ff0000";
    cd.style.borderColor = "#ffffff";
    cd.style.borderWidth = "1px";
    cd.style.borderStyle = "solid";
    cd.style.backgroundColor = "#ffffff";
    cd.title = "Supercounters";
    cd.innerHTML = msg;
    cd.onclick = function() {
        window.location = "http://www.supercounters.com/";
    };
    ct_insert(cd, "supercounters.com/texthit.js");
}
