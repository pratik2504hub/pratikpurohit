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

## Analytics

- Analytics provider: Google Analytics 4
- Measurement ID: `G-MYH1TMCSFE`
- Every HTML page, including [404.html](404.html), contains the asynchronous Google tag directly before `</head>`.
- New HTML pages must include the same tag exactly once. Do not change the measurement ID or add a second Google tag without Pratik's explicit instruction.

## Page Structure

- [index.html](index.html) - homepage with hero, avatar, case-study accordion, career steps, hire/consult paths, FAQ and CTAs
- [about/index.html](about/index.html) - resume-backed professional summary, leadership approach and recruiter/consulting positioning
- [experience/index.html](experience/index.html) - structured professional timeline
- [projects/index.html](projects/index.html) - nine case studies with shareable anchors (`aws-migration`, `cicd-modernisation`, `security-compliance`, `enterprise-integration`, `aviation-project`, `aks-kubernetes`, `observability-siem`, `hermes-agentic-ai`, `spar`) and a sticky index
- [skills/index.html](skills/index.html) - categorised skills across architecture, delivery, backend, cloud, DevOps, data, security, observability, leadership, AI and tools
- [expertise/index.html](expertise/index.html) - broad expertise overview spanning architecture, engineering leadership, cloud/platform, DevOps/reliability, security, backend/data and AI-assisted engineering
- [cloud-devops/index.html](cloud-devops/index.html) - AWS, Azure, Kubernetes, CI/CD and reliability capability page
- [security/index.html](security/index.html) - engineering-led security, DevSecOps and production-readiness page
- [ai/index.html](ai/index.html) - AI-assisted engineering, Smart PDF Audio Reader and Hermes workflow positioning
- [consulting/index.html](consulting/index.html) - six consulting services with anchors (`solution-architecture`, `cloud-devops`, `application-modernisation`, `engineering-leadership`, `security-readiness`, `ai-assisted-engineering`), each linked to case studies
- [spar/index.html](spar/index.html) - SPAR Smart PDF Audio Reader product page
- [resume/index.html](resume/index.html) - resume summary and PDF access
- [contact/index.html](contact/index.html) - email, phone, LinkedIn and verified social links
- [404.html](404.html) - GitHub Pages custom 404 page

## Key Assets

- [assets/css/site.css](assets/css/site.css) - shared design system (tokens, components, responsive layout) used by every page
- [assets/js/site.js](assets/js/site.js) - mobile menu, homepage case accordion, case-study index highlight, skills core toggle and contact copy buttons
- [REDESIGN.md](REDESIGN.md) and [ui-sample.html](ui-sample.html) - approved redesign brief and homepage reference; excluded from the published site by [_config.yml](_config.yml)
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

- One `@graph` per page that reuses `https://pratikpurohit.com/#person` and `https://pratikpurohit.com/#website`
- `WebSite`, `Person`, `WebPage` and `FAQPage` on the homepage
- `ProfilePage` with a `Person` main entity on the About and Experience pages
- `BreadcrumbList` on inner pages, matching the visible breadcrumbs
- `CollectionPage` with an `ItemList` of case studies and `FAQPage` on the Projects page
- `ProfessionalService` with an `OfferCatalog` and `FAQPage` on the Consulting page
- `ContactPage` on the Contact page
- `SoftwareApplication` on the AI page and `MobileApplication` plus `FAQPage` on the SPAR page
- FAQ JSON-LD question and answer text must match the visible FAQ text exactly

## AEO / AI Discovery

AI-facing discovery files:

- [llms.txt](llms.txt) - concise machine-readable site map and positioning
- [llms-full.txt](llms-full.txt) - fuller public professional summary, supported highlights, consulting areas and skills summary

These files must stay factual. Do not add private information, credentials, internal IPs, confidential client details, fake metrics, fake testimonials or unsupported claims.

## Design System

- Follow [REDESIGN.md](REDESIGN.md): paper/ink palette with a single vermilion accent, Bricolage Grotesque headings and Hanken Grotesk body text via Google Fonts, sentence case, no all-caps eyebrow labels.
- Reuse the existing components in [assets/css/site.css](assets/css/site.css) instead of adding new ones: `.btn-primary`/`.btn-ghost`, `.text-link`, `.case` accordion, `.svc` hairline lists, `.steps`, `.cells`, `.facts`, FAQ `<details>`, dark `.closing` CTA and footer.
- Motion: the orchestrated load animation is homepage-only (`body.home`); elsewhere motion only responds to user actions. Respect `prefers-reduced-motion`.
- Every page ends with a closing CTA offering "Start a conversation" and the resume, and links to at least three other internal pages from the body with descriptive anchor text.
- Use en-IN spellings (modernisation, optimisation). Titles follow `Topic | Pratik Purohit` and stay under 60 characters; meta descriptions stay between 140 and 160 characters.

## Content Rules

- Use the current resume PDF, repository content and Pratik's explicit instructions as source of truth.
- Keep the About page section named `Professional Summary`, not `Professional evolution`.
- The About-page Professional Summary must remain a concise, resume-backed answer to who Pratik is, his 9+ years of experience, leadership level, industries, architecture/cloud/DevOps/security scope, teams of up to 18 and accountable AI-assisted engineering approach.
- Write the Professional Summary for people and answer engines: use direct factual statements, natural search terminology and clear entity context without keyword stuffing or copying the resume verbatim.
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
- Use file-relative paths for local CSS, JavaScript, image, icon, manifest and PDF assets. Root-level pages use paths such as `assets/css/site.css`; directory pages use paths such as `../assets/css/site.css`. Exception: [404.html](404.html) uses root-relative asset paths (`/assets/...`) because GitHub Pages serves it at any missing URL depth.
- Internal navigation must target clean production directory URLs (`/about/`, `/experience/`, `/projects/`) so canonical, sitemap and internal-link signals all agree. Do not link to `/index.html` variants.
- Keep absolute `https://pratikpurohit.com/...` URLs for canonical metadata, Open Graph metadata, structured data, `robots.txt` and `sitemap.xml`; use root-relative clean URLs for internal navigation.
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
- No internal navigation link points to an `index.html` URL; asset `href`, `src` and web-manifest paths remain file-relative
- Resume links open the PDF in a new browser tab
- Email and phone links work
- Mobile navigation opens, closes and remains keyboard accessible
- JSON-LD is valid JSON
- No page has duplicate or missing H1
- No accidental `noindex` exists except on `404.html`
- Every HTML page contains exactly one Google tag loader and one `gtag('config', 'G-MYH1TMCSFE')` call
