# pratikpurohit.com: full redesign brief for Claude Code

Owner: Pratik Purohit (Technical Manager | Solution Architect, Bengaluru).
Stack: **static multi-page HTML** (keep it; no framework, no build step unless trivial). Clean URLs: `/about/`, `/experience/`, `/projects/`, `/skills/`, `/expertise/`, `/consulting/`, `/contact/`, plus `/sitemap.xml` and `/assets/Pratik-Purohit-Resume.pdf`.

**Reference implementation:** `index.html` (homepage, already approved). Every other page must match its tokens, components, tone and SEO pattern. Read it first and reuse its CSS.

---

## 1. Goals

| Audience | Primary action |
|---|---|
| Hiring managers | Click **Resume**, or read **case studies** |
| Consulting clients | **Start a conversation** about their problem |

- **UI:** wow effect. Modern and minimal, but *creatively* minimal: generous space, one memorable interaction per page, no clutter.
- **UX:** hook the visitor so they keep exploring. Every page ends by pointing to a next page or a CTA. Case studies are the hook.
- **SEO, AEO and internal linking are top priority.** The site is brand new (no existing traffic or rankings).

## 2. Hard constraints

1. **The avatar stays exactly as is.** File: `/assets/img/pratik-purohit-full-stack-developer.png` (transparent PNG, 1472x1920). Never crop, recolour, redraw or replace it. The header uses a circular crop of the same file, which is fine.
2. **No invented facts.** Use only claims already on the current site (listed in section 8). No fake testimonials, hourly rates, logos or metrics.
3. Keep all existing URLs. Do not break inbound links.
4. Client details stay abstract, as on the current site.

## 3. Design system (from `index.html`)

**Palette (fresh; approved)**

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FAF7F2` | page background |
| `--paper-2` | `#F2EDE3` | alternate section background |
| `--ink` | `#0E0E10` | text, closing section, primary borders |
| `--ink-2` | `#45454B` | body copy |
| `--muted` | `#65656B` | labels |
| `--line` | `#DED7CA` | hairlines |
| `--vermilion` | `#F0522F` | the single accent (buttons, meter, ring) |
| `--vermilion-text` | `#B8341A` | accent as *text* (passes contrast) |
| `--amber` | `#FBAF1A` | appears only inside the avatar |

Rules: one accent only. Never put white text on vermilion (use ink). Use `--vermilion-text` for small accent text.

**Type:** Bricolage Grotesque (display, headings) plus Hanken Grotesk (body), both via Google Fonts. Sentence case everywhere. No all-caps eyebrow labels. No numbered markers unless the content is truly a sequence (the career steps are). Body line length under 60ch.

**Components (reuse, do not reinvent):** sticky header with mobile menu, `.btn-primary` / `.btn-ghost`, `.text-link` (vermilion underline), accordion rows (`.case`), hairline lists (`.svc`), stepped list (`.steps`), FAQ `<details>`, dark closing CTA, footer.

**Motion:** one orchestrated load moment on the homepage only. Elsewhere, motion answers a user action (expand, hover). No scroll-triggered fade-ins on every section. Respect `prefers-reduced-motion`.

**Quality floor:** responsive to 360px, visible keyboard focus, WCAG AA contrast, skip link, semantic landmarks, one `<h1>` per page, no horizontal scroll.

## 4. Page-by-page tasks

Each page: same header/footer, unique `<title>` (under 60 chars), unique meta description (140 to 160 chars), canonical, OG and Twitter tags, JSON-LD (see section 6), one `<h1>`, and a closing CTA block.

### `/` Homepage: DONE (`index.html`)
Only wire it in and keep the section ids and links intact.

### `/projects/` Case studies (the hook; most important after home)
- Intro plus a list of case studies, each as its own `<section id="...">` with a shareable anchor. **These ids are already linked from the homepage and must exist:**
  `aws-migration`, `cicd-modernisation`, `security-compliance`, `enterprise-integration`, `observability-siem`, `hermes-agentic-ai`, `spar`
  Also add: `aviation-project`, `aks-kubernetes`.
- Structure per case study (already the site's own model): **Problem, My role, Approach, Architecture/technology, Challenges, Outcome, Skills demonstrated.** Where the source has no detail, keep sections short and factual instead of padding.
- Creative moment: a sticky mini index on the left (desktop) that highlights the current case study; case studies open as full-width editorial sections, not identical cards.
- Each case study links to a relevant capability page (`/expertise/`, `/consulting/#...`) and ends with a CTA. The SPAR entry keeps an "Explore SPAR" link.
- JSON-LD: `CollectionPage` with `ItemList`, plus `BreadcrumbList`.

### `/consulting/`
- Sections with ids: `solution-architecture`, `cloud-devops`, `application-modernisation`, `engineering-leadership`, `security-readiness`, `ai-assisted-engineering` (linked from the homepage).
- Each service: who it's for, what the engagement looks like, related case study link (internal link), CTA "Discuss a project".
- Keep the honest line: no fake rates or testimonials.
- JSON-LD: `ProfessionalService` (name Pratik Purohit, areaServed India, `hasOfferCatalog` with the six services), `FAQPage` (3 to 4 questions), `BreadcrumbList`.
- Target terms (use naturally in H1/H2/copy, no stuffing): *application modernisation consulting India*, *cloud migration architecture review*, *AWS architecture review*, *DevSecOps consulting*.

### `/experience/`
- Reverse-chronological timeline. Keep the `.steps` idea but expanded: role, company, dates, 2 to 4 bullets, stack tags as text (not big logos).
- Each role links to the most relevant case study or skill page.
- JSON-LD: `ProfilePage` plus `Person` (`hasOccupation`, `worksFor` history is optional), `BreadcrumbList`.

### `/skills/`
- Keep all 11 groups (Technical Leadership and Architecture, Project and Delivery, Backend, Cloud, DevOps, Databases, Security/DevSecOps, Cybersecurity Coordination, Observability, Leadership, AI/Intelligent Engineering, Tools/Testing).
- Minimal presentation: quiet grouped lists, no rainbow pills. Highlight a "core" subset per group with weight, not colour.
- Where a skill has a matching case study, link it (internal linking).

### `/expertise/`
- Keep: Core capabilities (6), Technical foundations (3), Working model (Assess, Architect, Deliver, Operate and improve), metrics.
- Add sub-anchors for the four deep areas the site already lists (Cloud and DevOps, Security and DevSecOps, AI-assisted engineering, Complete skills map) and link each to the matching skills and case-study sections.

### `/about/`
- The current about page was not in the reviewed screenshots: **fetch https://pratikpurohit.com/about/ and preserve its facts.** Restyle to the new system; add the avatar (unchanged), a short first-person-neutral summary, and links to Experience, Projects and Resume.

### `/contact/`
- Email `purohitpratik2504@gmail.com`, phone `+91 99875 11946`, LinkedIn `https://www.linkedin.com/in/pratik-purohit-leads/`.
- Keep the "Verified social links" list (Twitter/X, Facebook, WhatsApp, Quora, Reddit, Flickr, Tumblr): **fetch the current page and keep the exact existing URLs**, and mark them `rel="me noopener"` (LinkedIn `rel="me"`).
- Add a "what to include in your first message" hint (problem, constraints, desired outcome) to raise inquiry quality.
- JSON-LD: `ContactPage`, `BreadcrumbList`.

## 5. Internal linking rules (very important)

- Every page links to at least 3 other internal pages from the **body**, not just nav and footer.
- Use **descriptive anchor text** ("Read the AWS migration case study"), never "click here" or a bare "Learn more".
- Deep-link to case-study and service anchors (the homepage already does).
- Every case study links to its related capability and to the matching consulting service; every consulting service links back to a case study. This makes a two-way mesh.
- Breadcrumbs on every non-home page (visible and in JSON-LD).
- Footer sitemap links stay on every page. Regenerate `/sitemap.xml` with all URLs and `lastmod`. Confirm `robots.txt` references it.

## 6. SEO and AEO checklist (per page)

- `<title>` pattern: `Topic | Pratik Purohit`. H1 contains the page's main term in plain language.
- Answer-first copy: the first paragraph under each H2 answers the question directly in 1 to 2 sentences (snippet/AI-answer friendly).
- Visible FAQ on Home, Consulting and Projects where relevant; the FAQ JSON-LD must match the visible text exactly.
- Home already has `WebSite`, `Person`, `FAQPage`. Reuse the same `@id` values (`https://pratikpurohit.com/#person`, `#website`) across pages to build one entity graph.
- Language: `en`, use `en-IN` spellings consistently (modernisation, optimisation).
- Images: descriptive `alt`, explicit `width`/`height`, `fetchpriority="high"` only on the hero avatar.
- Performance: no render-blocking scripts, keep inline critical CSS or one shared `/assets/css/site.css` (extract the homepage CSS into it and link from every page), fonts with `display=swap` and preconnect.
- Target Lighthouse: Performance, Accessibility, Best Practices, SEO all 95+ on mobile.
- Search Console: submit the sitemap and request indexing after launch (manual step for the owner).

**Keyword focus (site is new, so target specific, low-competition intents):**
- Hiring: *technical architecture leader*, *DevOps and cloud architect roles India*
- Consulting: *application modernisation consulting India*, *cloud migration architect review*

## 7. Suggested implementation order

1. Extract shared CSS/JS from `index.html` into `/assets/css/site.css` and `/assets/js/site.js`; keep the homepage working.
2. Build `/projects/` (anchors first), then `/consulting/`.
3. Build `/experience/`, `/skills/`, `/expertise/`, `/about/`, `/contact/`.
4. Sitemap, robots, JSON-LD validation (Rich Results Test), link check (no broken anchors), Lighthouse pass.

## 8. Source facts (safe to use; do not add new numbers)

**Headline metrics:** 9+ years; up to 18 cross-functional team members led; AWS availability 82% to 99%; deployment time reduced 40% (Jenkins and Docker CI/CD); about 20% performance improvement at a pharmaceutical company through optimisation and infrastructure tuning.

**Experience**
- Technical Manager, SmartConnect Technologies, Mumbai (Sept 2025 to Aug 2026): solution architecture, HLD/LLD, security reviews, RAID/RAG tracking, CAB/RFC, go-live and hypercare, VAPT/SAST/DAST/SCA, SonarQube, Secure SDLC, CERT-In aligned workstreams; AWS, Azure, AKS/Kubernetes, Docker, Linux, CI/CD, ELK, SIEM, OAuth, SAML, LDAP, JWT, RBAC.
- Manager, Ausha Digital, Mumbai (Apr 2025 to Sept 2025): migration from hosting provider to AWS; availability 82% to 99%; RBI/ISO-aligned audit readiness, VAPT remediation, hardening; MySQL optimisation; intelligent lead-matching/scoring initiatives; AWS, EC2, RDS, IAM, MySQL, Python, Go.
- Technical Lead, Calibehr Business Support Services, Navi Mumbai (Mar 2023 to Apr 2025): architecture and delivery with PHP, Laravel, REST, microservices, MySQL, Linux; system design for a mission-critical aviation project; Product Owner for COUS and MyBranch360; Jenkins and Docker CI/CD cut deployment time 40%.
- Senior PHP Developer, Calibehr (Mar 2022 to Mar 2023): EARC, LMS, DEQC, Calibon CRM, aviation project; Go-based backend; performance, code quality, security, DB design, integration reliability.
- PHP Developer and Webmaster, Mega Lifesciences, Thane (Nov 2020 to Mar 2022): AWS-hosted Ubuntu, Apache/Nginx, deployments, SSL/TLS; about 20% performance improvement.
- Web Developer, Gametion Technologies, Navi Mumbai (Sept 2019 to Nov 2020): custom HRMS (leave and attendance automation), Cricket King API (PHP and MongoDB), mentoring.
- Jr PHP Developer, Calibehr (Jan 2017 to Sept 2019): Mitra, Connect Intranet, onboarding platforms; workflow automation; MVC, APIs, debugging, production support.

**Case studies (abstracted):** Vodafone Enterprise Integration / Google Workspace Migration Architecture; Aviation Project; AWS Migration and Reliability Improvement; CI/CD and Engineering Modernisation; AKS/Kubernetes Operations and Security; ELK/Observability/SIEM Integration; Security and Compliance Initiatives; SPAR (Flutter Android app: PDF processing, TTS, smart chapters, background playback, Android Auto); Hermes Agentic AI Workflow (Claude Code, Gemini, guardrails, PII handling, output validation).

## 9. Definition of done

- All 8 pages share one design system and one CSS file; avatar unchanged.
- Every internal link and anchor resolves (run a link checker).
- Structured data validates with no errors; sitemap complete.
- Lighthouse 95+ on all four categories (mobile) for Home, Projects, Consulting.
- Both CTAs reachable in one click from every page: **Resume** (hiring) and **Start a conversation** (consulting).
