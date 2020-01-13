# Asad's Homepage

This site is made using Jekyll and GitHub Pages. Jekyll allows me to have a single layout/template which every page is wrapped with. GitHub automatically builds Jekyll into HTML and serves it. I just needed to enable pages from the repo settings.

## Running Site Locally

- Install Ruby if you don't have it already.
- Install Bundler with `gem install bundler` command.
- Clone this Repo.
- `cd` and run `bundle install` into this repo's folder.
- Run `bundle exec jekyll serve` to start the server locally.
- Make your changes and just refresh in browser to see them.

## Publishing to your own site

- Edit the `CNAME` file to your own domain or just remove it.
- Once you have made the changes, just `git commit` them and push them to your own GitHub repo.
- In your repo, go to **Settings** and scroll down to **GitHub Pages** section. Select *master branch* from the dropdown.
- This will build your site and host it on the selected domain automatically on each `git push`.

Cheers!

