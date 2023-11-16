---
title: Organizing Obsidian for D&D | The Problem With Plugins
external: false
date: 2023-06-25
ogImagePath: /images/site-cover-2023.png
ogImageAltText: PhD20.com
draft: false
tags:
  - obsidian
  - organization
---

Obsidian is awesome. But one core component of this series is future-proofing our [vault](/blog/organizing-obsidian-dnd-big-picture-vaults/). And that requires considering a future without Obsidian. Would your notes survive? Or would they be a useless mess? Our [principles](/blog/organizing-obsidian-dnd-principles/) form a great foundation but we need additional guardrails.

## Your Best Friend and Worst Enemy
Let's be honest, plugins are amazing. It's hard to [get started](/blog/getting-started-with-obsidian-dnd/) using Obsidian for D&D without them—they're just too useful and fun. But plugins have a dark side when it comes to organization. 

At its core, Obsidian is just showing you markdown files from your local computer. A hundred other programs can do the same. And that's wonderful. Future-proof even—until community plugins enter the picture. Community plugins often require additional frontmatter and special syntax to function. 

Consider the following note:

~~~markdown
## The Fold

The Fold stretches north and west of Nerath, nestled north and east of [[Kandalur]].

```leaflet
id: fold-map
image: [[The Fold.jpg]]
height: 900px
width: 95%
lat: 50
long: 50
minZoom:5
maxZoom: 10
zoomDelta: 0.5
defaultZoom: 6
unit: miles
scale: 12
```
~~~

The first few lines are simple markdown. After that, a small code block will render a map if you have the Obsidian Leaflet plugin. What if we stop using Obsidian? What if the Leaflet plugin disappears or changes its syntax? We're left with a bit of a mess in our notes that's pretty useless. 

## Enter Abstraction

![abstraction](/images/abstraction.png)

We can *abstract* plugins to live on their own in our vault. That way, we're future-proofing against the concerns we mentioned previously. A great way to start is an `External` folder. Within that, create a folder for `Plugins`. This is our new home for all plugin syntax that needs to live in the body of a note. For example, all Obsidian Leaflet maps would now live in `External > Plugins > Maps`. This is the strongest level of abstraction because our notes are entirely separate from our plugin syntax.

"But what if I want the map to show in my note *about* the location?" Easy enough. We can *reference* our abstracted note with a linked preview. Now, we manage our plugin syntax *outside* of our main notes while still being able to see the product of it *in* our notes. It's a little less abstract but better than the first example note above:

~~~markdown
## The Fold

The Fold stretches north and west of Nerath, nestled north and east of [[Kandalur]].

![[External/Plugins/Maps/Fold-Map]]
~~~

In this example, if a better plugin came along for maps, we simply update the plugins folder to use the new syntax. We don't need to touch our actual notes at all!

Our notes really shouldn't know or care about plugin syntax. Keep it abstracted into its own folder and reference it using linked previews when you need to. It's easier to add/update plugin syntax this way (it's not scattered throughout our notes) and it sets us up to future-proof our vaults. 

Be sure to subscribe below to get notified when the next article in this series drops.

Game on.