# Pixel Bakery Website

![GitHub last commit](https://img.shields.io/github/last-commit/pixelbakery/pixelbakery-website)
![](https://api.checklyhq.com/v1/badges/checks/1ae52858-2167-4382-a9bd-d0787ba41243?style=flat&theme=dark)
[![OSSAR](https://github.com/pixelbakery/pixelbakery-website/actions/workflows/ossar.yml/badge.svg)](https://github.com/pixelbakery/pixelbakery-website/actions/workflows/ossar.yml)

Link to XD Mockups: [HERE](https://xd.adobe.com/view/a95dc4ca-cea6-4af3-be90-78a0cef0a1dd-fc0e/)

Link to Production Server: [pixelbakery.netlify.app](https://pixelbakery.netlify.app)

#### Project Previews

Project previews are what is displayed on the /work page. There are three critical items that need to be added for this.

1. A JPEG image still
2. A short (less than 6 seconds) mp4 preview of the project
3. An additional render of the preview video as a WebM

These all MUST have the same file name. The naming convention is `client-name-project-name-preview`. For example:

1. `first-honey-bee-better-preview.jpg`
2. `first-honey-bee-better-preview.mp4`
3. `first-honey-bee-better-preview.webm`

Once the files are created and properly put into the /img/work/ directory, you can add the following YAML to the mdx file:

`vimeoPreview: first-honey-bee-better-preview`

The system will automatically add all of the appropriate file extensions needed when the page loads.

## Blog Posts

We use markdown to create posts (specifically MDX). Blog posts are created in the /\_posts folder. Each blog post has important 'frontmatter' items at the top of it that help tell the server the details of the post.

We also use an extension of MDX called Github Flavored Markdown. Here's a cheatsheet:

[Github Flavored Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

There are some special components that we can use in these blog posts.

### Videos

The package we use to create videos is called [React-Player](https://github.com/CookPete/react-player). There's a lot of dope things we can do with it like using videos on YouTube, Vimeo, etc. Videos can also be pulled from the public folder. Check out that link to see what all is possible.

To use the video component in a blog post, copy and paste this code:

`<Video url={'https://www.youtube.com/watch?v=5qap5aO4i9A'} />`
The available props that you can pass:

- autoPlay (defaults to false)
- poster={props.poster} (defaults to false), insert an src to an image that you want to use as a title card when the video isn't playing.
- loop (defaults to false)
- muted (defaults to false)
- playsInline (defaults to false)
- controls (defaults to true)

You can pas any of these props like you pass the URL prop. For example, if you wanted a muted video that autoplays and continually loops:

`<Video url={'https://www.youtube.com/watch?v=5qap5aO4i9A'} autoplay={true} loop={true} muted={true}/>`

## APIs

Here's a list of all the external API calls we make:

- Monday.com
- Sendgrid
- Spotify

## Folder Indexing

To generate an index page for each component folder, use the following:

```
echo -n > index.tsx
for f in *.tsx; do
if  [ $f != "index.tsx" ]; then
  echo "export  { default as ${f%.*} } from  \\047./${f%.*}\\047" >> index.tsx;
  fi;
done
```

## Attributions

The html and css for the hamburger nav is forked from Mikael Ainalem's Flippin' Burgers pen: [https://codepen.io/ainalem/pen/LJYRxz](https://codepen.io/ainalem/pen/LJYRxz) All credit goes to him <3
