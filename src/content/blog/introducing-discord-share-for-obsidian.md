---
published: true
external: false
date: 2022-11-07

title: "Introducing Discord Share for Obsidian"
share-description: "Have you ever wanted to share something from your Obsidian vault with your players? Are you already using Discord for chatting? Now you can. Introducing Discord Share: a plugin for sharing vault contents to Discord."
thumbnail-img: assets/img/obsidian-discord-share.png
tags:
  - obsidian
  - game mastering
after-content: footer-subscribe.html
permalink: introducing-discord-share-for-obsidian
gh-repo: phd20/obsidian-discord-share
gh-badge: [star, watch, fork, follow]
---

Have you ever wanted to share something from your Obsidian vault with your players? Are you already using Discord for chatting? Now you can. Introducing Discord Share: a plugin for sharing vault contents to Discord.

## Getting Started

You can find the plugin at the above bookmark or at this [link](https://github.com/phd20/obsidian-discord-share). You can add this plugin to your Obsidian vault in one of two ways. 

### Manually
Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/obsidian-discord-share/`.

### BRAT (Recommended)

Install the [BRAT](https://github.com/TfTHacker/obsidian42-brat) plugin. Follow these [instructions](https://github.com/TfTHacker/obsidian42-brat#adding-a-beta-plugin) for adding a beta plugin.

After adding the plugin, enable it. Get a Webhook URL from Discord. See [this guide](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) for more on how to do that. Paste your Discord Webhook URL into the `Discord Webhook URL` setting for this plugin. **You must do this or the plugin will not work**.

![A screenshot highlighting the Discord Webhook URL setting under the plugin's settings tab.](/images/obsidian-discord-share-settings.png)

See the [README](https://github.com/phd20/obsidian-discord-share#optional-settings) for more on the other settings.

## Features

[View the README](https://github.com/phd20/obsidian-discord-share#features)

### Share Attachment to Discord

Open the command palette and search for **Share Attachment to Discord**. Click on it or press `return` on your keyboard. This opens a modal to search your local image files. Search for the file you want and click on it or press `return` on your keyboard.

### Share Note Title to Discord
Open the command palette and search for **Share Note Title** to Discord. Click on it or press `return` on your keyboard. **This option will not show in the menu if you don't have a note open.**

## Future
I've got a lot of ideas on how to extend this to sharing more content. Some of it should be live very soon 😉. But I'd love to hear yours. [Open an Issue](https://github.com/phd20/obsidian-discord-share/issues/new) to request features or report bugs.

Thanks, and enjoy!
