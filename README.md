# Mohammed Gamal — Portfolio (Approved)

This repository contains the approved static portfolio website. The visual design and hero headline are unchanged.

## Deploy on Vercel using GitHub

1. Create a new **public** GitHub repository in your own account (suggested name: `mohammed-gamal-portfolio`).
2. Upload **the contents of this folder** to the repository root. The file `index.html` must be at the top level.
3. In Vercel, select **Add New > Project**, and import the new GitHub repository.
4. Choose **Framework Preset: Other**, **Root Directory: `./`**, **Build Command: leave unset**, **Output Directory: `.`**. Then deploy.
5. Open the assigned `*.vercel.app` URL, verify all three project pages, certificate and CV links.
6. Add that verified URL to the CV / LinkedIn profile after publishing.

## Local preview

```bash
python -m http.server 8080
```

Visit `http://localhost:8080/`. No backend or external API keys are required.

## Included pages

- `index.html`: About, selected work, project archive, certificate and contact.
- `projects/ish.html` / `projects/edugen.html` / `projects/medical.html`: project case studies.
- `assets/Mohammed_Gamal_CV.pdf`: two-page ATS-friendly CV.
- `assets/Mohammed_Gamal_DEPI_Certificate.pdf`: supplied DEPI certificate.
- `assets/edugen-proctoring.svg`: conceptual proctoring artwork.
- `assets/med-robot-*.webp`: real prototype photos.

**Note:** ISH's photo currently loads from its public GitHub raw image URL. If that remote photo fails to load, the CSS fallback is displayed.

The site and CV contain contact details and the public certificate. Please ensure you wish to make them public before deploying.
