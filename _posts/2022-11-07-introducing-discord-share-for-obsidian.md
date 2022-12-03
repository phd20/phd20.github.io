---
published: true
layout: post
title: "Introducing Discord Share for Obsidian"
share-description: "Have you ever wanted to share something from your Obsidian vault with your players? Are you already using Discord for chatting? Now you can. Introducing Discord Share: a plugin for sharing vault contents to Discord."
thumbnail-img: assets/img/obsidian-discord-share.png
tags:
  - obsidian
  - game mastering
after-content: footer-subscribe.html
permalink: introducing-discord-share-for-obsidian
---

Have you ever wanted to share something from your Obsidian vault with your players? Are you already using Discord for chatting? Now you can. Introducing Discord Share: a plugin for sharing vault contents to Discord.

[![phd20/obsidian-discord-share - GitHub](https://gh-card.dev/repos/phd20/obsidian-discord-share.svg)](https://github.com/phd20/obsidian-discord-share)

## Getting Started

You can find the plugin at the above bookmark or at this [link](https://github.com/phd20/obsidian-discord-share). You can add this plugin to your Obsidian vault in one of two ways. 

### Manually
Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/obsidian-discord-share/`.

### BRAT (Recommended)

Install the [BRAT](https://github.com/TfTHacker/obsidian42-brat) plugin. Follow these [instructions](https://github.com/TfTHacker/obsidian42-brat#adding-a-beta-plugin) for adding a beta plugin.

After adding the plugin, enable it. Get a Webhook URL from Discord. See [this guide](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) for more on how to do that. Paste your Discord Webhook URL into the `Discord Webhook URL` setting for this plugin. **You must do this or the plugin will not work**.

![A screenshot highlighting the Discord Webhook URL setting under the plugin's settings tab.]({{site.baseurl}}/assets/img/obsidian-discord-share-settings.png)

See the [README](https://github.com/phd20/obsidian-discord-share#optional-settings) for more on the other settings.

## Initial Release Features

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">1.1.0 in action:<a href="https://twitter.com/hashtag/dnd?src=hash&amp;ref_src=twsrc%5Etfw">#dnd</a> <a href="https://t.co/TtLAPenVr2">https://t.co/TtLAPenVr2</a> <a href="https://t.co/OzBzOD96FC">pic.twitter.com/OzBzOD96FC</a></p>&mdash; ☕️ PhD20 ⚔️ (@PhD20_) <a href="https://twitter.com/PhD20_/status/1589343378571137026?ref_src=twsrc%5Etfw">November 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Share Attachment to Discord

Open the command palette and search for **Share Attachment to Discord**. Click on it or press `return` on your keyboard. This opens a modal to search your local image files. Search for the file you want and click on it or press `return` on your keyboard.

### Share Note Title to Discord
Open the command palette and search for **Share Note Title** to Discord. Click on it or press `return` on your keyboard. **This option will not show in the menu if you don't have a note open.**

## Future
I've got a lot of ideas on how to extend this to sharing more content. Some of it should be live very soon 😉. But I'd love to hear yours. [Open an Issue](https://github.com/phd20/obsidian-discord-share/issues/new) to request features or report bugs.

---

{: .box-note}
**Note:** I am not associated with Obsidian or Discord. This is purely a passion project using the tools they make available.

If you'd like to support this effort, consider subscribing below or buying me a coffee:

<script type='text/javascript' src='https://storage.ko-fi.com/cdn/widget/Widget_2.js'></script><script type='text/javascript'>kofiwidget2.init('Support Me on Ko-fi', '#29abe0', 'C0C8XS4N');kofiwidget2.draw();</script> 

Thanks, and enjoy!
