[![Netlify Status](https://api.netlify.com/api/v1/badges/2f45400a-22ec-4fbf-a0e3-69be82b7aa1b/deploy-status)](https://app.netlify.com/sites/pixelbakery/deploys)

# pb-oct-2022

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

## Creating new case studies

If you see the following error:
`TypeError: undefined is not an object (evaluating 'prev.slug')`
This means that the title in the datafile does not match the title in the project page.

## Blog Posts

We use markdown to create posts (specifically MDX). Blog posts are created in the /\_posts folder. Each blog post has important 'frontmatter' items at the top of it that help tell the server the details of the post.

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

### Coming Soon: Image Carousels

Next on the todo list is to implement image carousels, aka slideshows. We use a package called [Swiper](https://swiperjs.com/react) to do so. Check out the documentation above to see what all is possible.
