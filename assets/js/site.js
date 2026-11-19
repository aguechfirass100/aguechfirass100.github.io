(function () {
  "use strict";

  var year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  var mobileMenus = document.querySelectorAll(".mobile-nav");
  mobileMenus.forEach(function (menu) {
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.removeAttribute("open");
      });
    });

    menu.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menu.hasAttribute("open")) {
        menu.removeAttribute("open");
        var summary = menu.querySelector("summary");
        if (summary) {
          summary.focus();
        }
      }
    });
  });

  document.querySelectorAll("[data-copy-email]").forEach(function (button) {
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      return;
    }

    button.hidden = false;
    var status = button.parentElement.querySelector("[data-copy-status]");
    var defaultLabel = button.textContent;
    var timer;

    button.addEventListener("click", function () {
      navigator.clipboard
        .writeText(button.getAttribute("data-copy-email"))
        .then(function () {
          button.textContent = "Copied";
          if (status) {
            status.textContent = "Email copied to clipboard.";
          }
          window.clearTimeout(timer);
          timer = window.setTimeout(function () {
            button.textContent = defaultLabel;
            if (status) {
              status.textContent = "";
            }
          }, 2500);
        })
        .catch(function () {
          if (status) {
            status.textContent = "Copy failed — use the email link instead.";
          }
        });
    });
  });
})();
