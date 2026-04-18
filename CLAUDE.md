# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the Site

This is a PHP-based static personal portfolio site served via XAMPP. To view it locally:

1. Start Apache in XAMPP Control Panel
2. Open `http://localhost/pratikpurohit/` in a browser

There is no build step, package manager, or test suite — changes to files are reflected immediately on reload.

## Architecture

The site is a single-page PHP portfolio for Pratik Purohit, a Full Stack Developer based in Mumbai.

**Page assembly via PHP includes:**
- [assets/include/header.inc.php](assets/include/header.inc.php) — full `<head>` block plus `<header>` nav with social links
- [index.php](index.php) — main content: About, Services, Skills sections
- [assets/include/footer.inc.php](assets/include/footer.inc.php) — Contact form and social links, then closes `<body>`/`</html>`

**Sections (anchor-linked in nav):** `#about`, `#services`, `#skill`, `#contact`

**Frontend stack:**
- Bootstrap 3 (local copy at `assets/css/bootstrap.min.css`) — grid uses `col-xs`, `col-sm`, `col-md` classes
- Font Awesome (local copy at `assets/css/font-awesome.min.css`)
- Google Fonts: Muli + Raleway loaded from CDN
- Custom styles in [assets/css/style.css](assets/css/style.css)
- Vanilla JS in [assets/js/script.js](assets/js/script.js) — handles scroll-based active nav highlighting, mobile nav toggle, and portfolio category filtering via `data-cat` attributes

**No JavaScript framework, no bundler, no backend logic** — PHP is used only for header/footer include composition.

## Key Notes

- The `index.html` file at the root is essentially empty (1 line); `index.php` is the real entry point.
- Several `<a href="#">` links and buttons have the `hidden` class applied — these are placeholder "Know More" buttons that are intentionally not visible.
- Google Maps integration is fully commented out in `script.js`.
- The `assets/img/source/` directory contains raw design source files (`.ai`, `.eps`, fonts, zips) — not served to users, just version-controlled originals.
- Social links appear twice: once in the header nav and once in the footer contact section — both are in the PHP includes, so update both places when changing social URLs.
