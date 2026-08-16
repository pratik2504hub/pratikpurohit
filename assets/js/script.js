function jsInit() {
  var navLabels = document.getElementsByClassName("header__nav__item"),
    navToggleBtn = document.getElementsByClassName("nav-toggle-btn")[0],
    sections = document.getElementsByClassName("main-section"),
    prevSectionIndex,
    filters = document.getElementsByClassName("filters__label"),
    projects = document.getElementsByClassName("portfolio__project");

  function removeClass(classString) {
    return function(el) {
      el.classList.remove(classString);
    };
  }

  function updateNavLabels() {
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var sectionId = section.getAttribute("id");
      var navLabel = document.querySelector('.header__nav__item a[data-ref="' + sectionId + '"]');

      if (!navLabel || section.offsetParent === null) {
        continue;
      }

      var sectionTop = section.getBoundingClientRect().top;
      var sectionBottom = section.getBoundingClientRect().bottom;

      if (
        prevSectionIndex !== i &&
        ((sectionTop < window.innerHeight / 3 && sectionTop >= 0) ||
          (sectionBottom > 3 * window.innerHeight / 4 &&
            sectionBottom < section.getBoundingClientRect().height))
      ) {
        [].forEach.call(navLabels, removeClass("is-active"));
        navLabel.parentNode.classList.add("is-active");
        prevSectionIndex = i;
      }
    }
  }

  function navToggle() {
    var navToggleWrap = this.parentNode;
    navToggleWrap.classList.toggle("expand");
    [].forEach.call(navLabels, function(el) {
      el.addEventListener("click", collapseNav);
    });
    function collapseNav() {
      navToggleWrap.classList.remove("expand");
      [].forEach.call(navLabels, function(el) {
        el.removeEventListener("click", collapseNav);
      });
    }
  }

  function filterProjects() {
    var category = this.getAttribute("data-cat");
    updateFilterLabel(this);
    if (!category) {
      [].forEach.call(projects, displayEl);
    } else {
      [].forEach.call(projects, function(el) {
        if (el.getAttribute("data-cat") !== category) {
          hideEl(el);
        } else {
          displayEl(el);
        }
      });
    }
    function updateFilterLabel(activeEl) {
      [].forEach.call(filters, removeClass("is-active"));
      activeEl.classList.add("is-active");
    }
    function displayEl(el) { el.style.display = "block"; }
    function hideEl(el) { el.style.display = "none"; }
  }

  var jsEl = document.getElementsByClassName("js-dis");
  [].forEach.call(jsEl, removeClass("js-dis"));

  updateNavLabels();
  window.addEventListener("scroll", updateNavLabels);
  navToggleBtn.addEventListener("click", navToggle);
  [].forEach.call(filters, function(el) {
    el.addEventListener("click", filterProjects);
  });
}

function initContactForm() {
  var form = document.getElementById("contactForm");
  if (!form) return;

  var msgEl = document.getElementById("contact-message");
  var submitBtn = form.querySelector('[type="submit"]');

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    var name    = document.getElementById("name").value.trim();
    var email   = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      showMsg("Please fill in all fields.", false);
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "sending...";

    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    fetch("contact.php", { method: "POST", body: formData })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        showMsg(data.message, data.success);
        if (data.success) form.reset();
      })
      .catch(function() {
        showMsg("Something went wrong. Please try again.", false);
      })
      .finally(function() {
        submitBtn.disabled = false;
        submitBtn.textContent = "send";
      });
  });

  function showMsg(text, isSuccess) {
    msgEl.textContent = text;
    msgEl.className = "contact-feedback " + (isSuccess ? "success" : "error");
  }
}

jsInit();
initContactForm();
