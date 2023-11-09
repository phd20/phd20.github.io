---
published: true
external: false
draft: false
date: 2022-10-30
layout: post
title: "My Obsidian Setup for D&D"
share-description: "This is how I organize my Dungeons & Dragons world and campaigns within Obsidian."
tags:
  - obsidian
  - organization
  - worldbuilding
after-content: footer-subscribe.html
permalink: my-obsidian-setup-for-dnd
---

It's easy to [get started](/blog/getting-started-with-obsidian-dnd/) with Obsidian but the organizational possibilities are endless. Let's take a look "behind the screen" at my setup for Dungeons & Dragons. This is how I organize my world and campaigns within Obsidian. 

## One Vault to rule them all...

I started with two vaults: one for D&D and one for everything else (this blog, home projects, work, etc). Most of my time is spent working in the D&D vault. Eventually, I combined these into a single "main" vault for everything. It was easier than managing two vaults and my non-D&D stuff is pretty light. If you have a lot of extra stuff in your collection, you might consider making D&D its own separate vault. If not, things like the search function might get bogged down with irrelevant results.

### Why One Vault for D&D

You can make the argument that a vault for each D&D campaign would be ideal. But I disagree. I have a number of "shared" notes that I would be referencing in each campaign. I don't like to duplicate notes if I can help it. I run almost every campaign in a shared universal setting so I need to reference world lore (NPCs, locations, cosmology, etc) across games. Additionally, I keep rules references (like the [5E SRD](https://github.com/OldManUmby/DND.SRD.Wiki)) in Obsidian. I reference them regularly in any campaign.

To recap, I have a folder for D&D and folders for non-D&D stuff. So far, my vault's looking like this:

```
main-vault
└───_assets
└───_templates
└───dnd
└───other-stuff
```

Now let's just focus on the D&D stuff.

## Dungeons & Dragons "Behind the Screen" Organization

My `dnd` folder changes over time. But here's the main folder structure. Let's break it down.

```
main-vault
└───dnd
    └───Atlas
    └───Campaigns
    └───DM Tools
    └───History & Cosmology
    └───Items
    └───Life
```

### Atlas

*The gazetteer of my connected settings.*

{: .box-note}
**Note:**  My organizational strategies under the Atlas change more often than any other folder.

I start with *universal regions*. For my universe, those are **Prime** (the material plane and majority of the setting notes), **Feywild**, **Shadowfell**, **Astral Dominion**, and **Elemental Chaos**. Within **Prime**, I separate out *world regions*: **Dorgothian Belt**, **Nerathi Hold**, and **Xanthomir Dominion**. Each of these might contain multiple continents.

```
main-vault
└───dnd
    └───Atlas
        └───Astral Dominion 
        └───Elemental Chaos
        └───Feywild
        └───Prime
            └───Dorgothian Belt
            └───Nerathi Hold
            └───Xanthomir Dominion
        └───Shadowfell
    └───Campaigns
    └───DM Tools
    └───History & Cosmology
    └───Items
    └───Life
```

At this level, we're now looking at what I consider individual "settings" as a campaign will *rarely* span into more than one.

#### Individual Setting Gazetteer

My last campaign took place mostly in the world region of the **Nerathi Hold**. Let's break down what that looks like in Obsidian.

**The Fold** is one major region in the **Nerathi Hold** and **Kandalur** is another. So each gets a folder. Most major regions are too large for a single governmental body (save maybe an empire) so I don't add settlements yet. The only notes I might have for a major region pertain to huge monuments/landmarks or geographical data.

So let's keep going with **Kandalur**. It has five *minor regions*, each of which gets a folder. **Folder or region burnout yet**? Don't worry. We stop here. These *minor regions* are typically tied to governments. It's within these folders that I add a note for each settlement or fantastic location. Here's a simple recap:

```
main-vault
└───dnd
    └───Atlas
        └───Universal Region
            └───World Region (typically single campaign setting)
                └───Major Region (rarely single government)
                    │   geography.md
                    └───Minor Region (typically single government)
                        │   settlement.md
                        │   fantastic-location.md
```

### Campaigns

*Campaign-specific notes for planning and logging.*

To start, I have a folder for each campaign. Within a campaign, a section for **player characters**, **session notes**, and the **world machine**. 

Player characters contains a note for each player character in this campaign. I like to have a picture, passive ability scores, a list of trained skills, and any other information I want to keep track of for this PC. That might include destinies, dream sequences, allies, enemies, etc. I also `iframe` their D&D Beyond character sheet into the note for easy access.

Session notes contains a note for each session. If you're curious about those, check out [how I prepare](/blog/2022-09-07-how-i-prepare-for-dnd-with-obsidian) for D&D.

The world machine is where I keep notes for major campaign storylines. These represent ongoing threats. I document how they will evolve in the world if the player characters do not interfere or change their course. I generally like to have at least three major storylines evolving in the world machine for each campaign. 

```
main-vault
└───dnd
    └───Atlas
    └───Campaigns
        └───Campaign 1
            └───Player Characters 
                │   player-character1.md
                │   player-character2.md
            └───Session Notes
                │   session1.md
                │   session2.md
            └───World Machine
                │   storyline1.md
                │   storyline2.md
                │   storyline3.md
```

### DM Tools

*Tools to make my DM life easier.*

Every DM needs their trusty tools. This is where I keep mine. I'll be honest in that the organization of this folder is almost nonexistent. It's just a collection of tools I find useful. Someday soon, I'll make it make sense. For now, here are a few things I have there:

- Random tables (for NPCs, locations, wild magic, and other stuff)
- Adventure building binder
- Homebrew rules
- Lazy DM Steps
- 5E SRD
- DM Screen

### History & Cosmology

*Universal truths and systems that reach across settings.*

This folder documents the histories and cosmology shared by the universal setting. I have notes for cosmology, creation myths, legends, magic, and the divine pantheon. 

### Items

*Magical and non-magical items of interest. *

This category is self-explanatory.

### Life

*All about the people.*

This is everything related to the people of the shared universe. I have folders for **ancestries**, **classes**, **cultures**, **NPCs**, and **organizations**. 

Ancestries (often called races in D&D) provides notes for each ancestry in my setting. Classes contains notes on the classes available to play. I like to add information that ties each of these to the setting and call out anything that differs from published materials.

Cultures is a newer section that I use to detail any prominent cultures within the setting.

NPCs is my largest folder. Here you'll find a note for each and every NPC that's introduced in a game along with a picture and details about them.

Organizations details the various organizations at play in the setting.

That's a quick overview of how I organize my Obsidian vault for Dungeons & Dragons.

In an upcoming article, I'll dive deeper into my notes and provide note templates for things like NPCs, settlements, and more. Subscribe so you don't miss it.