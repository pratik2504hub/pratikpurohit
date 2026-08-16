# CLAUDE.md

This repository contains Pratik Purohit's static professional portfolio website.

## Current Positioning

Primary positioning:

**Technical Manager | Solution Architect | Engineering Leader**

Supporting positioning:

Hands-on technical leader combining software engineering, architecture, cloud, DevOps, security, delivery leadership and AI-assisted engineering.

Do not reduce the site to a generic developer or PHP-developer portfolio. PHP is part of the verified technical background, but the primary identity is senior technology leadership, solution architecture, cloud/platform delivery, DevSecOps coordination and AI-assisted engineering.

## Hosting

- Hosting model: static GitHub Pages website
- Canonical production domain: `https://pratikpurohit.com`
- Custom domain file: [CNAME](CNAME)
- Runtime stack: HTML5, CSS3 and vanilla JavaScript only
- No PHP, Node.js runtime, React, Angular, Vue, backend APIs, databases or server-side rendering

## Page Structure

- [index.html](index.html) - homepage with hero, avatar, leadership positioning, highlights, proof areas and CTAs
- [about/index.html](about/index.html) - career story and leadership philosophy
- [experience/index.html](experience/index.html) - structured professional timeline
- [projects/index.html](projects/index.html) - enterprise and independent case-study cards
- [skills/index.html](skills/index.html) - categorised skills across architecture, delivery, backend, cloud, DevOps, data, security, observability, leadership, AI and tools
- [architecture/index.html](architecture/index.html) - solution architecture capability page
- [cloud-devops/index.html](cloud-devops/index.html) - AWS, Azure, Kubernetes, CI/CD and reliability capability page
- [security/index.html](security/index.html) - engineering-led security, DevSecOps and production-readiness page
- [ai/index.html](ai/index.html) - AI-assisted engineering, Smart PDF Audio Reader and Hermes workflow positioning
- [consulting/index.html](consulting/index.html) - senior consulting offerings
- [resume/index.html](resume/index.html) - resume summary and PDF access
- [contact/index.html](contact/index.html) - email, phone, LinkedIn and verified social links
- [404.html](404.html) - GitHub Pages custom 404 page

## Key Assets

- [assets/css/style.css](assets/css/style.css) - complete custom design system and responsive layout
- [assets/js/script.js](assets/js/script.js) - mobile navigation toggle only
- [assets/img/pratik-purohit-full-stack-developer.png](assets/img/pratik-purohit-full-stack-developer.png) - illustrated avatar; keep this prominently visible unless Pratik explicitly approves replacing it
- [assets/img/pratik-purohit-full-stack-developer.ico](assets/img/pratik-purohit-full-stack-developer.ico) - favicon
- [assets/Pratik-Purohit-Resume.pdf](assets/Pratik-Purohit-Resume.pdf) - PDF resume opened by site links in a new browser tab
- [site.webmanifest](site.webmanifest) - site identity metadata

## SEO Architecture

Every indexable page should keep:

- One unique `<title>`
- One unique meta description
- Canonical URL using `https://pratikpurohit.com`
- Open Graph title, description, URL and image
- Twitter/X summary metadata
- One logical H1
- Semantic page sections
- Descriptive internal links

Technical SEO files:

- [robots.txt](robots.txt) - allows indexing and references the production sitemap
- [sitemap.xml](sitemap.xml) - canonical XML sitemap with production URLs only

Structured data currently includes:

- `Person` and `WebSite` on the homepage
- `BreadcrumbList` on inner pages
- `CollectionPage` on the Projects page
- `SoftwareApplication` on the AI page

## AEO / AI Discovery

AI-facing discovery files:

- [llms.txt](llms.txt) - concise machine-readable site map and positioning
- [llms-full.txt](llms-full.txt) - fuller public professional summary, supported highlights, consulting areas and skills summary

These files must stay factual. Do not add private information, credentials, internal IPs, confidential client details, fake metrics, fake testimonials or unsupported claims.

## Content Rules

- Use the current resume PDF, repository content and Pratik's explicit instructions as source of truth.
- SmartConnect Technologies should be shown as `Sept 2025 - Aug 2026`, not `Present`.
- Do not feature the 40M+ database optimisation as a homepage branding metric. It may appear only in detailed experience/case-study context if needed.
- Supported homepage metrics include 9+ years experience, teams up to 18, 82% to 99% AWS availability improvement and 40% faster deployments.
- Preserve the avatar as a major brand element.
- Keep consulting senior-level: architecture, cloud/DevOps, modernisation, engineering leadership, security readiness and AI-assisted engineering.
- Do not add fake clients, fake roles, fake testimonials, fake certifications, fake download counts or fake project outcomes.
- Keep enterprise security/client details appropriately abstracted.

## Static Site Rules

- Keep the site deployable by GitHub Pages without server-side processing.
- Do not reintroduce PHP files, server-side includes, form handlers or local XAMPP assumptions.
- Use file-relative paths for every local HTML, CSS, JavaScript, image, icon, manifest and PDF reference. Root-level pages use paths such as `assets/css/style.css`; directory pages use paths such as `../assets/css/style.css`.
- Internal navigation must target real static files (`about/index.html` from the root and `../about/index.html` from directory pages) so links work on the custom domain, GitHub Pages project URLs and direct `file://` previews.
- Keep absolute `https://pratikpurohit.com/...` URLs only for canonical metadata, Open Graph metadata, structured data, `robots.txt` and `sitemap.xml`.
- Keep `mailto:purohitpratik2504@gmail.com` and `tel:+919987511946` as the contact mechanisms.
- Keep the resume link pointed at a real file.
- Resume links must use `target="_blank"` with `rel="noopener noreferrer"` and must not use the HTML `download` attribute.
- If the resume file path changes, update all resume CTAs and `CLAUDE.md`.
- If social links change, update header/footer/contact-page references consistently.
- If a stylesheet references local fonts or images, verify those files exist.

## Verification Checklist

Before finishing website changes, run:

```powershell
rg -n '\.php|<\?php|localhost|xampp|pratik2504hub.github.io/pratikpurohit|Present|Full Stack Developer|href="#"|TODO|FIXME' .
rg --files -g '*.php' -g '*.inc.php'
```

Also verify:

- `index.html` and every directory route open correctly on GitHub Pages
- `CNAME` contains `pratikpurohit.com`
- `robots.txt` references `https://pratikpurohit.com/sitemap.xml`
- `sitemap.xml` contains only real canonical production URLs
- All local CSS, JS, image, icon, manifest and PDF links resolve
- No local `href`, `src` or web-manifest asset path begins with `/`
- Resume links open the PDF in a new browser tab
- Email and phone links work
- Mobile navigation opens, closes and remains keyboard accessible
- JSON-LD is valid JSON
- No page has duplicate or missing H1
- No accidental `noindex` exists except on `404.html`
