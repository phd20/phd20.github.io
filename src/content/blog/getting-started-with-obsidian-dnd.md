---
published: true
external: false
date: 2021-12-20

title: Getting Started with Obsidian for D&D ✨
thumbnail-img: /assets/img/overview.png
share-description: "After years of searching, I’ve found my favorite way to manage my notes and worldbuilding for Dungeons & Dragons campaigns."
tags:
  - obsidian
  - organization
after-content: footer-subscribe.html
redirect_from: /2021-12-20-getting-started-with-obsidian
---

*Updated 2023-06-01*

After years of searching, I've found my favorite way to manage my notes and worldbuilding for *Dungeons & Dragons* campaigns. It's called Obsidian.

![Overview](/images/overview.png)

> Obsidian is a powerful and extensible knowledge base that works on top of your local folder of plain text files. 

What does that mean? Its a simple desktop app that loads files (mainly markdown files and other assets like images, PDFs, etc. ) from your device, allowing you to work with the files directly and **so** much more.

Get Obsidian by visiting their [website](https://obsidian.md).

Your main folder is called a **vault**. You can have more than one but the app will load one vault per window. Start by creating a vault or selecting a folder from your device to act as the vault. From there, you can create more folders and notes and organize them however you like.

When you open a *note* in Obsidian (a markdown file), you'll see the *editor* interface for that note. You can toggle between *editing* the file or *previewing* the rendered markdown. It's as simple as that. Now let's look at a few of the features and plugins that make Obsidian so great for D&D.

## The Power of Linking

Obsidian has a powerful linking system that will suit all of your needs and more. Let's take a look at how to link, backlinks, outgoing links, and unlinked mentions.

Ensure you have the following enabled under **Settings > Core plugins** in Obsidian before proceeding:

- Backlinks
- Outgoing Links

### How to Link Notes

Linking notes is simple. A link to another note or file is just surrounded by a double set of square brackets: `[[]]`. Type `[[` to bring up a search for notes and even headings to link to. 

![Linking](/images/linking-gif.gif)

#### Linking Headings

You can link directly to a heading in another note. Following the same steps as above, simply type `#` after the note name and you can begin a search for headings.

![Linking Headers](/images/linking-headers.gif)

#### Linking Images and Previews

Linking to an image works the same way as linking to a note. But that will only create an actual text link that takes you to the image. If you want the image to display on your current note, just add a `!` before the double-brackets. Ex: `![[image-name.jpg]]`. This also works to display previews of PDF files in your vault. Load a specific page by adding `#page=<pageNumber>`. Ex: `![[example.pdf#page=24]]` will load the PDF at page 24. So stop copying or screenshotting information out of your favorite supplements and start linking to the actual files!

You can also add the `!` before any other links to render a preview of the content rather than a simple link. For example, I have a note that contains the properties for a dozen magic items. I have another note for a character that has one of those items in his possession. Rather than just linking to the item, I can show a preview of the item's properties.

![Linking Previews](/images/linking-previews.gif)

### Backlinks

Backlinks refer to references in *other* notes that directly link to the current note. For example, I have a note for the goddess **Lolth**. The backlinks show that I've mentioned this note in a note about called Drow.

![Backlinks](/images/backlinks.png)

### Outgoing Links

Outgoing links refer to references linking to *other* notes within the current note. For example, my note on **Io** links to a few other notes, creating *outgoing* links. 

![Outgoing Links](/images/outgoing-links.png)

### Unlinked Mentions

That's all great but what if you miss a link? Or what if linking every single mention is a lot of work that you don't want to do? No problem! One **great** feature of Obsidian is its unlinked mentions. 

Unlinked mentions under backlinks show any references to your current note that aren't linked. Unlinked mentions under outgoing links show references to other existing notes within your current note that aren't linked.

Unlinked mentions can take your directly to the note they're referencing. You can also create links directly from unlinked mentions.

![Unlinked Mentions](/images/unlinked-mentions.gif)

## The Power of Plugins

I've only touched on a fraction of the core features of Obsidian so far. Explore the core plugins under **Settings > Core plugins** to see what's offered out of the box. 

But here's where we blow the lid off of this app, making it the most powerful tool in your game master toolbox. **Community plugins** are the lifeblood of Obsidian. Developers have access to the Obsidian API and can develop plugins for the community to use. There are official community plugins (submitted to Obsidian and reviewed) and beta plugins you can add yourself that you might come across online. To enable community plugins, you'll need to go to **Settings > Community plugins** and turn **Turn on community plugins**. **"Community plugins, like any other software you install, could potentially cause data integrity and security issues."** If you're okay with that, you can begin browsing and enabling community plugins.

There are a handful of plugins that are useful for game masters. And a number of them were designed *specifically for* game masters and TTRPG players. I'm not going to go too in-depth here but let's take a look at some of my favorites.

### Banners

Simply put, allows you to add banner images to your notes. You can see some examples in the previous screenshots and gifs in this article.

### Dataview

A powerhouse. Write queries to organize and display your data efficiently.

### Dice Roller

What more to say? Roll some dice in Obsidian! This can also be used to randomly return results from tables and much more.

![Dice Roller](/images/dice-roller.png)

### Fantasy Calendar

This is what originally hooked me on plugins. I've long loved using [Fantasy Calendar](https://app.fantasy-calendar.com) to track the custom calendar for my campaigns. With this plugin, you can actually export your calendar from this site (or create your own) and manage it from within Obsidian.

![Fantasy Calendar](/images/fantasy_calendar.png)

### Initiative Tracker

Track initiative, HP, and AC for combat right inside Obsidian. Pair this with 5e Statblocks (see below) and you can even get statblocks from your initiative order. Pair this with Dice Roller and roll from those stat blocks!

![Initiative Tracker](/images/initiative_tracker.png)

### TTRPG Statblocks

Render various TTRPG statblocks within Obsidian. Comes with built-in monsters from the SRD and allows for homebrew and custom imports from popular monster building sites.

### Obsidian Leaflet

A godsend. Render any image as an interactive map. Drop custom pins on the map to link to any content in Obsidian. It also supports drawings and map layers.

![Obsidian Leaflet](/images/obsidian-leaflet.gif)

### Timelines

Create immersive timelines that link directly to your notes!

![Timeline](/images/timeline.png)

Here's a few other plugins that I've used:

- Advanced Tables
- Buttons
- Custom Frames
- Dice Roller
- [Discord Share](/blog/introducing-discord-share-for-obsidian)
- Folder Note
- Hot Reload (for development only)
- Image Toolkit
- Image Window
- Obsidian42 - BRAT (allows for easy install of a beta plugin)
- Pane Relief
- Templater
- Various Complements

You'll notice that many of these are developed and maintained by Jeremy Valentine. Please [buy him a coffee](https://www.buymeacoffee.com/valentine195) if you enjoy his work.

## Summary

I've only scratched the surface on what this powerful app can do. And more plugins and features are coming out weekly. Dive in. Try some stuff. I've found this to be a single app that can manage every single aspect of my game mastering life. And I love it.

