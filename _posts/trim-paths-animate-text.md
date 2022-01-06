---
title: 'Using Trim Paths to Animate Text'
subtitle: Today we’re going to talk about how to animate the illusion of text being drawn/painted onto the screen in After Effects using Trim Paths.
excerpt: Today we’re going to talk about how to animate the illusion of text being drawn/painted onto the screen in After Effects using Trim Paths.
# Cover Photos MUST be 4x3 resolution
coverImage: /img/blog/Dantheman.jpeg
date: '2020-04-09'
categories: ['education']
tags: ['after effects', 'Animation', 'motion design', 'Track Matte', 'Trim Paths', 'Tutorial', 'Tutorial', 'UNL']
author:
  name: Jordan Lambrecht
  picture: /img/placeholder01.png
  profileURL: '/'
ogImage:
  url: /img/blog/Dantheman.jpeg
---
Today we're going to talk about how to animate the illusion of text being drawn/painted onto the screen in After Effects using Trim Paths. It's a fairly straightforward process, so this will be a short tutorial. This tutorial assumes you already know how to [set up a composition](https://pixelbakery.co/recipes/tutorial-composition-settings-in-after-effects/) inside of After Effects and have already done so. Let's dive in.

#### Step 1: Create a new text layer

Create a new text layer in your composition. You'll want to get it positioned and styled perfectly before you move on to the next step. Pay attention to the size, movement, typeface, and letter spacing of the text.

#### Step 2: Create a new shape layer

Right-click anywhere in the layers panel and create a new shape layer. I recommend renaming the layer to something like "Text Trim Path Mask," but write whatever makes the most sense to you. This layer needs to be ABOVE the text layer in order to work properly.

#### Step 3: Pen Tool

![](/img/blog/Screen-Shot-2020-04-09-at-2.23.40-PM.png)

With your shape layer selected, use your pen tool (hotkey is G on the keyboard) to roughly trace over your text. Start from the left and work your way right. The goal is to replicate the natural movements a hand makes when writing, so be sure to bare that in mind. You may have to save crossing Ts for another layer. Just repeat these steps and then precomp (Command Shift C) your mask layers at the end.

#### Step 4: Tighten up and adjust the path from Step 3

![Change the Line Cap to Round Cap and the Line Join to Round Join in After Effects](/img/blog/Screen-Shot-2020-04-09-at-1.19.20-PM.png)

You'll want to make sure none of your text in the underlying layer is visible before we move forward. Increase the stroke gradually until you find a happy balance where the path isn't overlapping other letters or ligaments but is fully covering the type. Twirl down the shape layer until you get to the settings for the stroke. Change the Line Cap to Round Cap and the Line Join to Round Join.

#### Step 5: Trim Path

![Add a Trim Path to your shape layer in After Effects](/img/blog/Screen-Shot-2020-04-09-at-1.22.16-PM.png)

Dope. So far so good. Now let's set things in motion. On your shape layer, twirl down Contents and hit the little play button that says Add. Select Trim Paths from the menu. This will add a new collapsed selector with the same name to your layer.

#### Step 6: Add Keyframes to the Trim Path

![Add Trim Paths to your shape layer in After Effects](https://media.pixelbakery.co/PB/2020/04/Screen-Shot-2020-04-09-at-2.39.22-PM-1920x416.png)

Scrub forward to your desired start time on the timeline (I would give yourself some breathing room - don't start the animation immediately). Twirl down on the Trim Paths 1 selector in your shape layer. You'll see three attributes: Start, End, and Offset. This can be a bit confusing; even I still get this part messed up. The attributes are represented by a percentage. That percentage is how "complete" a path's line is from the attribute's name. Offset is the percentage the "completeness" is shifted on the path. I put together a gif to help better explain those attributes:

Be sure to add Easy Ease onto the keyframes to give it a cleaner movement.

#### Step 7: TrackMatte

![](/img/blog/Screen-Shot-2020-04-09-at-2.22.21-PM.png)

Switch your shape layer to be an alpha inverted trackmatte. You can do this by selecting the text layer below it and setting the TrkMat mode to Alpha Inverted. This should hide your shape layer. The text layer will now only show pixels that are not included in the non-transparent parts of the shape layer.

#### Step 8: Ya done

Yay. Good for you. We're all very proud of you.

#### Final Notes

-   If you plan on keyframing the text at all, be sure to parent your mask to the text so it moves in lockstep with it.
-   I recommend adding motion blur to your layers with keyframes.
-   I don't actually hate you - I think you're great and I love you.