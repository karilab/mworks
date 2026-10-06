(function () {
  var SITE = window.SITE;
  if (!SITE) return;

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function fullName() {
    return SITE.nameFirst + " " + SITE.nameLast;
  }

  function projectUrl(id) {
    return "project.html?id=" + encodeURIComponent(id);
  }

  function findProject(id) {
    var projects = SITE.projects || [];
    var i;
    for (i = 0; i < projects.length; i++) {
      if (projects[i].id === id) return projects[i];
    }
    return null;
  }

  function queryId() {
    var match = /(?:\?|&)id=([^&]+)/.exec(window.location.search);
    return match ? decodeURIComponent(match[1].replace(/\+/g, " ")) : "";
  }

  function paragraphsHtml(paragraphs) {
    return (paragraphs || []).map(function (paragraph) {
      return "<p>" + esc(paragraph) + "</p>";
    }).join("");
  }

  function videoHtml(project) {
    var portrait = project.orientation === "portrait";
    var width = portrait ? 315 : 560;
    var height = portrait ? 560 : 315;
    return '<iframe width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/' + encodeURIComponent(project.youtube) + '" title="' + esc(project.title) + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  }

  function projectElementHtml(project) {
    var video = videoHtml(project);
    var title = esc(project.title);
    var body = paragraphsHtml(project.paragraphs);

    if (project.orientation === "portrait") {
      return ''
        + '<div class="content-element">'
        +   '<div class="row">'
        +     '<div class="col-md-4"><div class="media">' + video + '</div></div>'
        +     '<div class="col-md-8"><div class="row">'
        +       '<div class="col-md-12"><h1>' + title + '</h1></div>'
        +       '<div class="col-md-9">' + body + '</div>'
        +       '<div class="col-md-3"></div>'
        +     '</div></div>'
        +   '</div>'
        + '</div>';
    }

    return ''
      + '<div class="content-element">'
      +   '<div class="row"><div class="col-md-12"><div class="media">' + video + '</div></div></div>'
      +   '<div class="row">'
      +     '<div class="col-md-12"><h1>' + title + '</h1></div>'
      +     '<div class="col-md-9">' + body + '</div>'
      +     '<div class="col-md-3"></div>'
      +   '</div>'
      + '</div>';
  }

  function thumbnailHtml(project) {
    var href = projectUrl(project.id);
    var title = esc(project.title);
    return ''
      + '<div class="col-md-4 element ' + esc(project.category) + '">'
      +   '<div class="item-content">'
      +     '<div class="img"><a href="' + href + '" class="open-popup"><img width="283" src="' + esc(project.image) + '" class="attachment-project-thumb wp-post-image" alt="' + title + '"></a>'
      +       '<div class="img-hover"><a href="' + href + '" class="open-popup">View </a></div>'
      +     '</div>'
      +     '<div class="txt">'
      +       '<h4><a href="' + href + '" title="' + title + '" class="open-popup">' + title + '</a></h4>'
      +       '<p>' + esc(project.excerpt) + ' <a href="' + href + '" class="open-popup more">View</a> <i class="fa fa-film"></i></p>'
      +     '</div>'
      +   '</div>'
      + '</div>';
  }

  function setText(id, value) {
    var node = document.getElementById(id);
    if (node) node.textContent = value;
  }

  function fillShared() {
    var brands = document.querySelectorAll(".my-name");
    var footers = document.querySelectorAll(".cr");
    var i;

    for (i = 0; i < brands.length; i++) {
      brands[i].innerHTML = esc(SITE.nameFirst) + "<br><span>" + esc(SITE.nameLast) + "</span>";
    }
    for (i = 0; i < footers.length; i++) {
      footers[i].innerHTML = "<strong>" + esc(fullName()) + "</strong> &copy; " + esc(SITE.year) + " - All Rights Reserved";
    }
    setText("site-back", SITE.backLabel);
  }

  function renderHome() {
    var nav = document.getElementById("nav");
    var filters = document.getElementById("filters");
    var container = document.getElementById("container");
    var tagline = document.getElementById("site-tagline");
    var email = document.getElementById("site-email");
    var parallax = document.querySelector(".parallax");
    var description = document.querySelector('meta[name="description"]');
    var author = document.querySelector('meta[name="author"]');
    var socials;
    var i;

    if (!document.getElementById("home")) return;

    document.title = SITE.title;
    if (description) description.setAttribute("content", SITE.description);
    if (author) author.setAttribute("content", SITE.author);

    setText("site-heading", fullName());
    if (tagline) {
      tagline.innerHTML = esc(SITE.tagline).replace(/\n/g, "<br>");
    }
    setText("site-phone", SITE.phone);
    if (email) {
      email.textContent = SITE.email;
      email.setAttribute("href", "mailto:" + SITE.email);
    }

    socials = document.querySelectorAll("ul.social");
    for (i = 0; i < socials.length; i++) {
      socials[i].innerHTML = (SITE.links || []).map(function (link) {
        return '<li><a href="' + esc(link.href) + '" target="_blank" title="' + esc(link.label) + '" data-original-title="' + esc(link.label) + '"><i class="fa ' + esc(link.icon) + '"></i></a></li>';
      }).join("");
    }

    setText("site-intro", SITE.intro);
    setText("site-portfolio-title", SITE.portfolioTitle);
    setText("site-quote", SITE.quote);
    if (parallax && SITE.quoteImage) {
      parallax.style.backgroundImage = 'url("' + SITE.quoteImage.replace(/"/g, "") + '")';
    }

    if (nav) {
      nav.innerHTML = (SITE.nav || []).map(function (item, index) {
        return '<li' + (index === 0 ? ' class="active"' : '') + '><a href="' + esc(item.href) + '">' + esc(item.label) + '</a></li>';
      }).join("");
    }

    if (filters) {
      filters.innerHTML = (SITE.filters || []).map(function (filter, index, list) {
        var selector = filter.id === "*" ? "*" : "." + filter.id;
        var bull = index < list.length - 1 ? ' <span class="bull">&bull;</span>' : "";
        var active = index === 0 ? ' class="active"' : "";
        return '<li' + active + '><a href="#" data-filter="' + esc(selector) + '" title="' + esc(filter.label) + '">' + esc(filter.label) + '</a>' + bull + '</li>';
      }).join("");
    }

    if (container) {
      container.innerHTML = (SITE.projects || []).map(thumbnailHtml).join("");
    }
  }

  function renderProjectPage() {
    var root = document.getElementById("project-root");
    var project;

    if (!root) return;

    project = findProject(queryId());
    if (!project) {
      document.title = "Project | " + fullName();
      root.innerHTML = '<div class="content-element"><h1>Project not found</h1><p>This project is not in the portfolio.</p></div>';
      return;
    }

    document.title = project.title + " | " + fullName();
    root.innerHTML = projectElementHtml(project);
  }

  window.findProject = findProject;
  window.projectElementHtml = projectElementHtml;

  fillShared();
  renderHome();
  renderProjectPage();
})();
