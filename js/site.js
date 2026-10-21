/* Renders the page from window.SITE, window.PUBS and window.UNDER_REVIEW (js/data.js). */
(function () {
  "use strict";

  var S = window.SITE || {};
  var PUBS = window.PUBS || [];
  var REVIEW = window.UNDER_REVIEW || [];
  var ME = (S.personal && S.personal.name) || "";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function el(id) { return document.getElementById(id); }
  function boldMe(authors) {
    var e = esc(authors);
    return ME ? e.split(esc(ME)).join("<strong>" + esc(ME) + "</strong>") : e;
  }

  function entry(title, period, sub, desc) {
    return '<div class="entry"><div class="entry-head"><span class="entry-title">' + esc(title) +
      '</span><span class="entry-period">' + esc(period) + "</span></div>" +
      '<div class="entry-sub">' + sub + "</div>" +
      (desc ? '<p class="entry-desc small">' + esc(desc) + "</p>" : "") + "</div>";
  }

  function renderMasthead() {
    var p = S.personal || {};
    el("page-updated").textContent = S.updated ? "Last updated " + S.updated : "";
    el("site-title").textContent = p.title || "";
    el("site-links").innerHTML = (S.links || []).map(function (l) {
      return '<a href="' + esc(l.url) + '">' + esc(l.label) + "</a>";
    }).join('<span class="link-sep">·</span>');
  }

  function renderAbout() {
    var p = S.personal || {};
    var text = esc(p.about);
    (p.aboutLinks || []).forEach(function (l) {
      var t = esc(l.text);
      var i = text.indexOf(t); // link the first mention only
      if (i >= 0) {
        text = text.slice(0, i) + '<a class="org-link" href="' + esc(l.url) + '">' + t + "</a>" + text.slice(i + t.length);
      }
    });
    el("about").innerHTML = "<h2>About</h2><p>" + text + "</p>";
  }

  function renderExperience() {
    var html = "<h2>Experience</h2>";
    (S.experience || []).forEach(function (j) {
      html += entry(j.role, j.period, esc(j.org) + (j.location ? " · " + esc(j.location) : ""));
    });
    el("experience").innerHTML = html;
  }

  function serviceList(items) {
    return items.map(function (s) {
      return '<div class="service-item"><span class="service-role">' + esc(s.role) + "</span>" +
        '<span class="service-org">' + esc(s.org) + "</span>" +
        (s.period ? '<span class="service-period">' + esc(s.period) + "</span>" : "") + "</div>";
    }).join("");
  }

  function renderService() {
    var sv = S.service || {};
    var html = "<h2>University and Departmental Service</h2>";
    html += '<div class="service-cols">' +
      "<div><h3>Current positions</h3>" + serviceList(sv.current || []) + "</div>" +
      "<div><h3>Former positions</h3>" + serviceList(sv.former || []) + "</div></div>";
    if ((sv.professional || []).length) {
      html += "<h3>Affiliations and Professional Activities</h3><ul class=\"plain-list\">";
      sv.professional.forEach(function (a) {
        html += "<li><strong>" + esc(a.role) + ",</strong> " + esc(a.org) + "</li>";
      });
      html += "</ul>";
    }
    el("service").innerHTML = html;
  }

  function renderEducation() {
    var html = "<h2>Education</h2>";
    (S.education || []).forEach(function (e) {
      html += entry(e.degree, e.period, esc(e.school) + (e.location ? " · " + esc(e.location) : ""), e.note);
    });
    el("education").innerHTML = html;
  }

  var LABELS = { journal: "Journal", conference: "Conference" };

  function pubHtml(pub, num) {
    var link = pub.doi ? "https://doi.org/" + pub.doi : (pub.url || "");
    var title = link ? '<a href="' + esc(link) + '">' + esc(pub.title) + "</a>" : esc(pub.title);
    var venue = "<em>" + esc(pub.venue) + "</em>";
    if (LABELS[pub.type]) venue += " · " + LABELS[pub.type];
    if (pub.badge) venue += ' · <span class="pub-badge">' + esc(pub.badge) + "</span>";
    return '<div class="pub" data-type="' + esc(pub.type) + '">' +
      '<div class="pub-title">' + (num ? '<span class="pub-num">[' + num + "]</span>" : "") + title + "</div>" +
      '<div class="pub-authors">' + boldMe(pub.authors) + "</div>" +
      '<div class="pub-venue">' + venue + "</div></div>";
  }

  function renderPublications() {
    var html = "<h2>Publications</h2>";
    html += '<p class="small muted">' + PUBS.length + " peer-reviewed publications, numbered chronologically.</p>";

    var counts = {};
    PUBS.forEach(function (p) { counts[p.type] = (counts[p.type] || 0) + 1; });
    html += '<div class="pub-filters" role="group" aria-label="Filter publications">' +
      '<button class="pub-filter" data-type="all" aria-pressed="true">All (' + PUBS.length + ")</button>";
    ["journal", "conference"].forEach(function (t) {
      if (counts[t]) html += '<button class="pub-filter" data-type="' + t + '" aria-pressed="false">' + LABELS[t] + " (" + counts[t] + ")</button>";
    });
    if (REVIEW.length) html += '<button class="pub-filter" data-type="review" aria-pressed="false">Under review (' + REVIEW.length + ")</button>";
    html += '</div><p class="sr-only" role="status" aria-live="polite" id="pubStatus"></p>';

    if (REVIEW.length) {
      html += '<div class="pub-group" data-review="1"><div class="pub-year">UNDER REVIEW</div>';
      REVIEW.forEach(function (r) { html += pubHtml({ title: r.title, authors: r.authors, venue: r.venue, type: "review" }); });
      html += "</div>";
    }

    var years = [], byYear = {};
    PUBS.forEach(function (p, i) {
      if (!byYear[p.year]) { byYear[p.year] = []; years.push(p.year); }
      byYear[p.year].push({ pub: p, num: PUBS.length - i });
    });
    years.sort(function (a, b) { return b - a; });
    years.forEach(function (y) {
      html += '<div class="pub-group"><div class="pub-year">' + esc(y) + "</div>";
      byYear[y].forEach(function (n) { html += pubHtml(n.pub, n.num); });
      html += "</div>";
    });

    var root = el("publications");
    root.innerHTML = html;

    var buttons = root.querySelectorAll(".pub-filter");
    Array.prototype.forEach.call(buttons, function (btn) {
      btn.addEventListener("click", function () {
        var type = btn.getAttribute("data-type");
        Array.prototype.forEach.call(buttons, function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
        var shown = 0;
        Array.prototype.forEach.call(root.querySelectorAll(".pub"), function (p) {
          var on = type === "all" || p.getAttribute("data-type") === type;
          p.style.display = on ? "" : "none";
          if (on) shown++;
        });
        Array.prototype.forEach.call(root.querySelectorAll(".pub-group"), function (g) {
          var any = Array.prototype.some.call(g.querySelectorAll(".pub"), function (p) { return p.style.display !== "none"; });
          g.style.display = any ? "" : "none";
        });
        el("pubStatus").textContent = "Showing " + shown + " publications";
      });
    });
  }

  function renderResearch() {
    var html = "<h2>Current Research</h2>";
    (S.research || []).forEach(function (r) {
      html += '<div class="research-item"><span class="research-name">' + esc(r.name) + ".</span> " + esc(r.text) + "</div>";
    });
    el("research").innerHTML = html;
  }

  function renderTeaching() {
    var html = "<h2>Teaching</h2><p class=\"small muted\">Major courses taught at undergraduate and graduate level.</p><ul class=\"two-col-list\">";
    (S.teaching || []).forEach(function (c) { html += "<li>" + esc(c) + "</li>"; });
    el("teaching").innerHTML = html + "</ul>";
  }

  function renderAccolades() {
    var html = '<h2>Accolades</h2><ul class="plain-list">';
    (S.awards || []).forEach(function (a) {
      html += "<li><strong>" + esc(a.title) + "</strong>" + (a.text ? ' <span class="muted small">· ' + esc(a.text) + "</span>" : "") + "</li>";
    });
    el("accolades").innerHTML = html + "</ul>";
  }

  function renderContact() {
    var c = S.contact || {};
    var html = "<h2>Contact</h2>";
    if (c.note) html += "<p>" + esc(c.note) + "</p>";
    html += '<p><a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>" +
      (c.office ? "<br>" + esc(c.office) : "") + (c.location ? "<br>" + esc(c.location) : "") + "</p>";
    el("contact").innerHTML = html;
  }

  function renderFooter() {
    el("footer-line").textContent = "© " + new Date().getFullYear() + " " + ((S.personal || {}).fullName || "");
  }

  function initScrollSpy() {
    if (!("IntersectionObserver" in window)) return;
    var byId = {};
    Array.prototype.forEach.call(document.querySelectorAll(".site-nav a[href^='#']"), function (a) {
      byId[a.getAttribute("href").slice(1)] = a;
    });
    var current = null;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && byId[e.target.id]) {
          if (current) current.classList.remove("active");
          current = byId[e.target.id];
          current.classList.add("active");
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    Array.prototype.forEach.call(document.querySelectorAll("main section[id]"), function (s) {
      if (byId[s.id]) obs.observe(s);
    });
  }

  renderMasthead();
  renderAbout();
  renderExperience();
  renderService();
  renderEducation();
  renderPublications();
  renderResearch();
  renderTeaching();
  renderAccolades();
  renderContact();
  renderFooter();
  initScrollSpy();
})();
