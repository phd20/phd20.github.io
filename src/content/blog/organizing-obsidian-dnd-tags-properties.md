---
title: Organizing Obsidian for D&D | Tags and Properties
external: false
date: 2023-09-10
ogImagePath: /images/site-cover-2023.png
ogImageAltText: PhD20.com
draft: false
tags:
  - organization
  - obsidian
---
Organizing Obsidian for D&D is a big topic. But understanding the [big picture](/blog/organizing-obsidian-dnd-big-picture-vaults) and adhering to a [few principles](/blog/organizing-obsidian-dnd-principles) can make it simple. Now we open the Pandora's Box of *properties*. What's a game master to do?

Properties are structured data to organize information about a note. Tags are a type of property that allow you to use shared keywords or topics to find the notes you want. But you can add any properties to help define your notes. They can be text, lists, dates, numbers, checkboxes, and more.

A big benefit of custom properties is that you can query on them using plugins like Dataview. An example might be a query that gives you a table of all notes of type `Settlement` and includes the property `Population` from each. But remember to beware the [problems of plugins](/blog/organizing-obsidian-dnd-problem-with-plugins). Given that you can do just about anything with properties, what *should* you do? To no one's surprise, I recommend keeping it simple.

## Tags
Tags are a default property in Obsidian—meaning the property exists whether you use it or not. Notes can have multiple tags. When thinking about *which* tags to use, simply ask yourself the following question:

> What sorts of things might I want to search for?

Some examples might be:
- Settlements
- NPCs

In those cases, you could imagine tags like the following:
- `#settlement`
- `#npc`

## Go Further with Nested Tags
What if you want to search for something more specific? Some examples might be:
- Small settlements
- Dead NPCs

In those cases, you can take advantage of nested tags. Nested tags are simply tags connected by forward slashes (`/`). In the cases mentioned above, you could imagine tags like:
- `#location/settlement`
- `#population/small`
- `#npc/dead`

## Favor Tags Over Custom Properties
Tags offer us something that the world of custom properties does not: simplicity. Most of us are not data engineers. Defining, maintaining, and scaling custom properties smells an awful lot like architecting data schemas. It's a specific skillset and without it, they'll come back to bite you. 

If you decide to change your custom property strategy with 50% of your vault already using it, you've got some serious work ahead of you. If your entire approach is using tags and nested tags, that problem becomes a lot smaller. You can simply manage a single property and add/update/remove tags as needed. 

Custom properties are tempting because one can imagine all of the cool things you could do with it. Having your entire D&D world categorized with structured data? Awesome! But most of us don't need that and won't use it anyways. Save yourself time and headaches by sticking with tags and you'll thank yourself later.

Game on.