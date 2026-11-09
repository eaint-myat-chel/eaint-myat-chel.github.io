# Aung Kaung Moe

Cybersecurity writeups and notes built with Jekyll and the official Chirpy theme.

## Write a post

1. Copy `templates/writeup.md` to `_posts/YYYY-MM-DD-your-title.md` and replace the template text and metadata.
2. Choose a category such as `CyberDefenders`, `BTLO`, `Web CTF`, or `Cybersecurity Notes`. Add tags for tools or techniques and a short description for the homepage.
3. Save screenshots in `assets/img/posts/` and link to them from the post with descriptive alt text.

Edit `_tabs/about.md` to update the About page.

## Add certificates and awards

For certificates, save public images or PDFs in `assets/img/certificates/` and add an entry under the issuer in `_data/certificates.yml`. Set `image` to a preview image or the image certificate itself, and use `pdf` when a full PDF is available. Both paths are relative to the certificates folder. Add a new issuer to create its filter.

For awards, save images in `assets/img/awards/` and link to them from `_tabs/awards.md`.

## Preview and build

Use Ruby 3.4 and Bundler. From the repository root, run:

```sh
bundle install
bundle exec jekyll serve
```

Open <http://localhost:4000> to preview. To generate the production files in `_site/`, run:

```sh
JEKYLL_ENV=production bundle exec jekyll build --destination _site
bundle exec htmlproofer _site --disable-external
```

## GitHub Pages

Before pushing, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. Confirm **Custom domain** shows `aungkaungmoe.xyz`. GitHub Pages uses that setting for the domain when deploying with Actions.

The workflow builds and checks `_site/`, then deploys that folder on a push to `main` or a manual run on `main`.
