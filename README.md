# Asad's Homepage

This site is made using NextJS and GitHub Pages. GitHub automatically exports a static build for NextJS into HTML and serves it. I just needed to enable pages from the repo settings.

## Running Site Locally

- Install NodeJS if you don't have it already
- Install Yarn by running `npm install -g yarn`
- Clone this repo.
- `cd` and run `yarn install` in this repo's folder.
- Run `yarn dev` to start the server locally.

## Publishing to your own site

- Edit the `CNAME` file to your own domain or just remove it.
- Once you have made the changes, just `git commit` them and push them to your own GitHub repo.
- In your repo, go to **Settings** and scroll down to **GitHub Pages** section. Select *master branch* from the dropdown.
- This will build your site and host it on the selected domain automatically on each `git push`.

Cheers!