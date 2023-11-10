# pb-oct-2022

![](https://api.checklyhq.com/v1/badges/checks/1ae52858-2167-4382-a9bd-d0787ba41243?style=flat&theme=dark)
[![OSSAR](https://github.com/pixelbakery/pixelbakery-website/actions/workflows/ossar.yml/badge.svg)](https://github.com/pixelbakery/pixelbakery-website/actions/workflows/ossar.yml)

Link to XD Mockups: [HERE](https://xd.adobe.com/view/a95dc4ca-cea6-4af3-be90-78a0cef0a1dd-fc0e/)

Link to Production Server: [pixelbakery.netlify.app](https://pixelbakery.netlify.app)

## Brand Colors

plz don't use hex codes unless absolutely necessary.

| COLOR                                                                            | HEX     | RGB           | HSL             | CONV. COLORS                                               |
| -------------------------------------------------------------------------------- | ------- | ------------- | --------------- | ---------------------------------------------------------- |
| ![#FF5E64](https://via.placeholder.com/15/FF5E64/000000?text=+) `Peach`          | #FF5E64 | 255, 94, 100  | 358°, 100%, 68% | [Link](https://convertingcolors.com/hex-color-ED6969.html) |
| ![#FAD869](https://via.placeholder.com/15/FAD869/000000?text=+) `Banana Bread`   | #FAD869 | 250, 216, 105 | 46°, 94%, 70%   | [Link](https://convertingcolors.com/hex-color-F5D77A.html) |
| ![#FFE0FF](https://via.placeholder.com/15/FFE0FF/000000?text=+) `Pink (Light)`   | #FFE0FF | 255, 224, 255 | 300°, 100%, 94% | [Link](https://convertingcolors.com/hex-color-FFE0FF.html) |
| ![#FFA3CC](https://via.placeholder.com/15/FFA3CC/000000?text=+) `Pink (Default)` | #FFA3CC | 255, 163, 204 | 333°, 100%, 82% | [Link](https://convertingcolors.com/hex-color-F2A8CA.html) |
| ![#EFE8F2](https://via.placeholder.com/15/EFE8F2/000000?text=+) `Cream`          | #EFE8F2 | 239, 232, 242 | 282°, 28%, 93%  | [Link](https://convertingcolors.com/hex-color-EFE8F2.html) |
| ![#F3F4F6](https://via.placeholder.com/15/F3F4F6/000000?text=+) `Egg`            | #F3F4F6 | 243, 244, 246 | 220°, 14%, 96%  | [Link](https://convertingcolors.com/hex-color-F3F4F6.html) |
| ![#504E57](https://via.placeholder.com/15/504E57/000000?text=+) `Wine`           | #504E57 | 80, 78, 87    | 253°, 5%, 32%   | [Link](https://convertingcolors.com/hex-color-504E57.html) |
| ![#CCEEFF](https://via.placeholder.com/15/CCEEFF/000000?text=+) `Blue (Light)`   | #CCEEFF | 204, 238, 255 | 200°, 100%, 90% | [Link](https://convertingcolors.com/hex-color-CCEEFF.html) |
| ![#38CCFF](https://via.placeholder.com/15/38CCFF/000000?text=+) `Blue (Default)` | #38CCFF | 102, 204, 255 | 195°, 100%, 61% | [Link](https://convertingcolors.com/hex-color-66CCFF.html) |
| ![#005174](https://via.placeholder.com/15/005174/000000?text=+) `Blue (Dark)`    | #005174 | 0, 81, 116    | 198°, 100%, 23% | [Link](https://convertingcolors.com/hex-color-045171.html) |

## Iconography

there are two icon folders containing PB's iconographic assets. One called Abs (absolute) and one called Rel (relative).

_Absolute_
All icons are set to 270x270px, regardless of their relation to other icons. Good for using as individual elements

_Relative_
All icons are sized relative to the other icons. This gives the line thickness a consistant weight

## Template Files

Below is a list of all templates needed to create dynamic content on the website.

1. Visit the linked gist
2. Click on the Raw button
3. Copy/Paste the raw content into a newly made .mdx file
4. Fill 'er out

- [Case Studies](https://gist.github.com/jordanlambrecht/61bf8c478ec2189a2a3c51146e230535)

## Creating new case studies

### Frontmatter Options

As with everything else, you can enter frontmatter variables into the top of the file. A few things of note:

- The client website must begin with https://
- The date does not need to be accurate and is not shown anywhere live on the website. It is simply used for ordering the posts. The date format should be YYYY-MM
- The naming convention for the client logo should be 'pixelbakery_client_clientname.png'. Make sure you use the appropriate illustrator file to generate these. They should be exported as greyscale PNGs with transparent backgrounds.
- All available tags are commented out in the template gist listed above. Simply uncomment any tags you'd like to use or copy/paste them from here. Available tags are:

- 2D animation
- 3D Animation
- Motion design
- 3D modeling
- Artificial reality
- film production
- Post-production
- Video Editing
- Emerging Media
- Drone / Aerial videography
- Set Design
- Casting & Talent Management
- Sound design
- Color grading
- Web design
- Product Photography
- Compositing
- Prototyping
- UI / UX design
- Web hosting
- Ecommerce
- Logo animation
- Kinetic typography
- Creative concepting
- Scripting & storyboarding
- Roll-out marketing plan

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

#### Credits

Credits should be listed in order of hierarchy. The credits should include past or current employees, outside vendors or contractors, talent, etc. Talent should _always_ be listed first and should include a link to their IMDB or website. You can add a URL field if the person has a website (such as an IMDB) to link to. Here's an example:

```
credits:
  - name: Jordan Lambrecht
    title: Creative Director
    website: 'https://google.com'
  - name: Samee Callahan
    title: Associate Creative Director
  - name: Daniel Hinz
    title: Animation Lead
  - name: Olivia Boldt
    title: Project Manager
```

Remove the URL line if you are not including it.

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

### Image Carousels

The Image Carousel component can be added to any blog post using `<Carousel />`. Obviously, you'll need to let it know what images to display. We can use this by passing an array of images to the slides prop. This is what it would look like:

```
<Carousel
  slides={[
    {
      src: '/img/placeholder01.png',
      alt: 'placeholder image',
      fit: 'cover',
    },
    {
      src: '/img/placeholder02.png',
      alt: 'placeholder image',
      fit: 'cover',
    },
    {
      src: '/img/placeholder03.png',
      alt: 'placeholder image',
      fit: 'contain',
    },
    {
      src: '/img/placeholder04.png',
      alt: 'placeholder image',
      fit: 'cover',
    },
  ]}
/>
```

Three items are required for each slide.
**src:** This is the image's path/location
**alt:** A descriptor explaining the content of the image. Make sure it's SEO friendly
**fit:** The least self-explanatory of the three. You can either select _cover_ or _contain_. Cover will scale the image to _cover_ the entire slide, which might cut some off. Contain will not fill the entire slide, but will make sure every part of the image is visible. Create images that are 4x3 and set it to 'cover' for best results.

### Vimeo

Instead of using the Video component, use the VimeoVideo component instead. Eventually there will be a permanent solution for the Video component, but it's low-priority. The VimeoVideo component is a bit different. You'll need to pass the video's ID as a prop instead of the full url. The ID can be found by going to the vimeo link in your browser and copying the first set of numbers in the address bar.

Here's an example using the following url: https://vimeo.com/246759522

`<VimeoPlayer videoID={'246759522'} />`

## APIs

Here's a list of all the external API calls we make:

- Monday.com
- Sendgrid
- Spotify

## AWS S3 CDN

Run the following command to push your local files to s3:
`aws s3 sync public s3://cdn.pixelbakery.com --exclude "*.DS_Store" --cache-control max-age=31536000`

Run the following command to pull the files from s3 to your local folder:
`aws s3 sync s3://cdn.pixelbakery.com public --exclude "*.DS_Store"`

Adding the flag `--delete` will remove any objects on the s3 bucket that are not on the local machine.

All images that are .jpg, .gif, and .png will automatically have their links redirected to the CDN. However, video files and other non-image format files will not automatically be redirected. This means we need to add `https://cdn.pixelbakery.com/` to the file name. This applies to anything that is put into the public/img/ folder.

Documentation for syncing can be found [here](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html)

To generate an index page for each component folder, use the following:

```
echo -n > index.tsx
for f in *.tsx; do
if  [ $f != "index.tsx" ]; then
  echo "export  { default as ${f%.*} } from  \\047./${f%.*}\\047" >> index.tsx;
  fi;
done
```
