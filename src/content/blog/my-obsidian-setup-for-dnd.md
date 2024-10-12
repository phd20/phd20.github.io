---
published: true
external: false
draft: false
date: 2022-10-30
ogImagePath: /images/site-cover-2023.png
ogImageAltText: PhD20.com
title: "My Obsidian Setup for D&D"
share-description: "This is how I organize my Dungeons & Dragons world and campaigns within Obsidian."
tags:
  - obsidian
  - organization
  - worldbuilding
after-content: footer-subscribe.html
permalink: my-obsidian-setup-for-dnd
---

*Updated 2024-04-04*

It's easy to [get started](/blog/getting-started-with-obsidian-dnd/) with Obsidian but the organizational possibilities are endless. Let's take a look "behind the screen" at my setup for Dungeons & Dragons. This is how I organize my world and campaigns within Obsidian. 

## One Vault to rule them all...

I started with two vaults: one for D&D and one for everything else (this blog, home projects, work, etc). Most of my time is spent working in the D&D vault. Eventually, I combined these into a single "main" vault for everything. It was easier than managing two vaults and my non-D&D stuff is pretty light. If you have a lot of extra stuff in your collection, you might consider making D&D its own separate vault. If not, things like the search function might get bogged down with irrelevant results. For more, consider the [big picture on vaults](/blog/organizing-obsidian-dnd-big-picture-vaults/).

### Why One Vault for D&D

You can make the argument that a vault for each D&D campaign would be ideal. But I disagree. I have a number of "shared" notes that I would be referencing in each campaign. I don't like to duplicate notes if I can help it. I run almost every campaign in a shared universal setting so I need to reference world lore (NPCs, locations, cosmology, etc) across games. Additionally, I keep some rules references in my vault that I reference in different games.

To recap, I have a folder for D&D and folders for non-D&D stuff. So far, my vault's looking like this:

```
main-vault
└───dnd
└───Ω assets
└───Ω external
└───Ω utility
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
    └───Gamemaster Tools
    └───Items
    └───Life
    └───Lore
```

### Atlas

*The gazetteer of my connected settings.*

I start with notes for my *universal regions*. Think "planes of existence." For my universe, those are **the Known World** (the material plane and majority of the setting notes), **Elder World**, **Dark World**, **Astral Dominion**, and **Elemental Chaos**. Within **the Known World**, I separate out *world regions* into folders.

```
main-vault
└───dnd
    └───Atlas
	    └───The Known World
		    └───Aer 
		    └───Algoria
		    └───Dragonmir
		    └───Eldramir
		    └───Kandalur
		    └───Nentir Vale 
		    └───The Fold 
		    └───Xanthomir
	    │   Astral Dominion.md
	    │   Dark World.md
	    │   Elder World.md
	    │   Elemental Chaos.md
    └───Campaigns
    └───Gamemaster Tools
    └───Items
    └───Life
    └───Lore
```

At this level, we're now looking at what I consider individual "settings" as a campaign will *rarely* span into more than one.

#### Individual Setting Gazetteer

My last campaign took place mostly in the world regions of **The Fold** and **Kandalur**. I have a folder for each with a note that contains an overview. The folder also contains all other notes for that setting that are relevant to locations: settlements, minor regions, geography, landmarks, etc.

Here's a simple recap:

```
main-vault
└───dnd
    └───Atlas
	    └───The Known World
		    └───Kandalur
			    │   Kandalur.md (#region/world)
			    │   K'ndara Thaen.md (#settlement)
			    │   Jovita Valley.md (#region/minor)
			    │   The Gilded Notion.md (#landmark/inn)
			    │   Y'dora's Grove.md (#geography/grove)
```

I use two tools to organize all of these notes: overview notes and tags. For overview notes, think of an index. My `Kandalur.md` note has sections for Regions, Settlements, and Geography and links all important notes in an organized fashion. I also use tags and nested tags for each note that allow me to use Dataview queries easily. My main categories are `#settlement`, `#region/*`, `#landmark/*`, and `#geography/*` (see above for examples).

### Campaigns

*Campaign-specific notes for planning and logging.*

To start, I have a folder for each campaign. Within a campaign, a section for **player characters**, **session notes**, **adventure logs/recaps**, and the **world machine**. 

**Player Characters** contains a note for each player character in this campaign. I like to have a picture, passive ability scores, a list of trained skills, and any other information I want to keep track of for this PC. That might include destinies, dream sequences, allies, enemies, etc. I also `iframe` the character sheet into the note (if using digital) for easy access.

**Session Notes** contains a note for each session. If you're curious about those, check out [how I prepare](/blog/how-i-prepare-for-dnd-with-obsidian) for D&D.

The **World Machine** is where I keep notes for major campaign storylines. These represent ongoing threats and fronts. I document how they will evolve in the world if the player characters do not interfere or change their course. I generally like to have at least three major storylines evolving in the world machine for each campaign. 

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
- Mechanics or rules references
- DM Screen

### Items

*Magical and non-magical items of interest.*

Magic and mundane items like books. I lean heavily into [optional lore](/blog/make-lore-optional/) via books.

### Life

*All about the people.*

This is everything related to the people of the shared universe. I have folders for **Characters**, **Classes**, **Cultures**, **Organizations**, and **Origins**. 

**Characters** is my largest folder. Here you'll find a note for every PC and NPC that's introduced in a game along with a picture and details about them.

**Classes** contains notes on the classes available to play. I like to add information that ties each of these to the setting and call out anything that differs from published materials.

**Cultures** is a newer section that I use to detail any prominent cultures within the setting.

**Organizations** details the various organizations at play in the setting.

**Origins** (often called races or ancestries in D&D) provides notes for each origin in my setting. 

### Lore

*Universal truths and systems that reach across settings.*

This folder documents the histories and cosmology shared by the universal setting. I have notes for cosmology, creation myths, important events, legends, magic, and the divine pantheon. 

---

That's a quick overview of how I organize my Obsidian vault for Dungeons & Dragons.

Game on.