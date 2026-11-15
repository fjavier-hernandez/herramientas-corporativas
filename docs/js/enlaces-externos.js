(function () {
  function marcarEnlacesExternos() {
    var origen = window.location.hostname;
    var enlaces = document.querySelectorAll("a[href]");

    enlaces.forEach(function (enlace) {
      var href = enlace.getAttribute("href");
      if (!href || href.charAt(0) === "#" || /^(mailto:|tel:|javascript:)/i.test(href)) {
        return;
      }

      var url;
      try {
        url = new URL(href, window.location.href);
      } catch (error) {
        return;
      }

      if (url.protocol !== "http:" && url.protocol !== "https:") {
        return;
      }
      if (url.hostname === origen) {
        return;
      }

      enlace.setAttribute("target", "_blank");
      var rel = (enlace.getAttribute("rel") || "").split(/\s+/).filter(Boolean);
      if (rel.indexOf("noopener") === -1) {
        rel.push("noopener");
      }
      enlace.setAttribute("rel", rel.join(" "));
    });
  }

  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(marcarEnlacesExternos);
  } else {
    document.addEventListener("DOMContentLoaded", marcarEnlacesExternos);
  }
})();
