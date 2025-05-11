---
title: "Vibe Coding My Portfolio"
date: "2025-05-08"
readingTime: "10 min read"
---

## How I Built (and Broke) My Site So You Don't Have To

After putting it off for way too long, I finally built a new portfolio from scratch—and I did it my way. No templates, no Squarespace, no Framer. Just me, some helpful AI tools, and a whole lot of spaghetti code. This post breaks down how I did it, what worked (and didn't), and how you can follow a similar process—especially if you're not a dev.

![Old vs. new site](/images/blogs/vibe-coding-portfolio/old-new-site.jpg)

I held off on rebuilding my site for a while—part stubbornness about my design philosophy (minimal, fast, non-intrusive) and part not wanting to give up control using a no-code builder. But I knew my old site wasn't working. It wasn't getting callbacks. It didn't feel like *me*—and it wasn't built for *hiring managers*.

## Tools I Actually Used

![Testing tools](/images/blogs/vibe-coding-portfolio/create-vs-bolt.jpg)

Before landing on the stack I liked, I tried every trending tool. These are the ones I stuck with:

* **ChatGPT** – to read through docs and help troubleshoot
* **Figma** – to A/B test visual directions and layouts
* **Cursor** – to get precise control and iterate with code
* **Create.xyz** – used once to convert my Figma layout into base site structure
* **Visual Studio Code** – manual edits and organization
* **Kap** – for recording demos and micro-interactions
* **FFmpeg** – to convert heavy GIFs into optimized WebP

## Step-by-Step Process

1. **Start with content, not code**  
   The hardest part wasn't technical—it was *gathering the story*. I pulled together research plans, decks, designs, and deliverables.

2. **Create a visual highlight reel**
   I prototyped my top projects in Figma and used videos like [this one](https://www.youtube.com/watch?v=emSv9TTHZVY) for structure.

![Create your highlight reel](/images/blogs/vibe-coding-portfolio/gather-story.jpg)

3. **Make a full presentation version**
   I created a pitch-deck style walkthrough for each case study after creating all the "flashy images" in my highlight reel. I used [Pitch](https://pitch.com/) for inspiration. This will be for the interviews, but better just to do them at the same time.

4. **Prototype the site with Create.xyz**
   I gave it a screenshot of my homepage and it gave back code. Great start—but bulky, uneditable, and impossible to add my custom content. I also hated that I needed to be online for this. Do it on your local computer, you can test on your phone too.

5. **Move code into Cursor**
   I manually broke apart the giant file into usable chunks. Ask for the best practice for folder structure, then piece-by-piece seperate the code. There will be a lot of bugs here. Work in small sections, if your layout has a 3 x 3 grid image. Screenshot image and ask for that. It won't be able to help with a full layout.

![Within Cursor and my Trello board of tasks](/images/blogs/vibe-coding-portfolio/within-cursor.jpg)

6. **Customize every interaction**  
   Once I had a working site, I added scroll behavior, built a working table of contents, added dark mode, etc. Stuff that would've been annoying to prototype within Figma.

7. **Deploy**
   Have it help you connect and deploy your site depending on the type site you have. Have ChatGPT walk you through setting up the hosting and changing custom domain.

8. **Optimize**

   * Converted images to Webp for better performance
   * Resolved errors in the inspection console, I just add it in and slowley removed an errors
   * Debugged layout issues with good prompting

---

## Developer Things That Tripped Me Up
These are the things an actual a developer would have told me "that's not the right solution, here's a better way to do it". But AI will just do as it's told.

* I tried GitHub Pages first. Nope. Learned it only works for static Jekyll sites. If you ask the AI something, even if it's not best practice it will do it. **Remember to Google it too sometimes**. Switched to Vercel. 
* It kept offering to write scripts from scratch, for example to change gifs to webp, a lot of times someone has solved it much better, just use their implementation. I used gifs because it worked on the free plan for Figma, but now I know I should have a mp4 version too for the web.
* Flash errors for dark mode handling, this is a distinct issue from building a site that is server-side rendering, I've only done static site so that was never an issue
* I ignored the inspect view on my site for a while, and when I completed everything, it was really slow - I then had to figure why it was slow and learned about LCP - I had a 15 mb banner which was bad.
* Managing layout bugs, like fixing overlapping elements
* Understanding flex behavior, hydration errors, and deployment pipelines
* Getting components to be reusable across projects
* I probally could have been more lazy like a true developer. If I decide tomorrow to update my dark mode, I know I'll need to change it in a lot of places. Oddly Cursor doesn't do well for tasks like this. 

---

## Moments That Felt Like Magic ✨

* Adding a toggle button via prompt—worked first try
* Never writing a single line of React code and getting a usuable site on  my local computer in a day
* Fixing scroll-to-anchor behavior for my table of contents
* Cursor reading file structure and helping with breaking out the code
* Debugging felt much easier, but I also started to learn how to read the errors
---

## Constraints You Should Know

* **Writing and organizing** all the content (you can't automate storytelling)
* **Lots of manually importing text and photos**, I couldn't get it to just automatically add the text I want, but that's the nature of it being generative
* **Prompt engineering is a skill** the better you are at it, the better the output will be, don't blindly just accept the output

---

## Final Advice
![Tips!](/images/blogs/vibe-coding-portfolio/tips.jpg)

Start small. Break it down. Work like you would if you were building components for a design system in Figma. Use AI as a tool, you still need to guide it to tell the story you want, but the zeros and ones? That part's a little more human readable. Good luck on making your portfolio!

## Thank yous!

* Colm Eccles - Somehow turns everything into polished design speak
* Jessica Ly - Sat through *so many* of my presentations + lil 🧀💔
* David Yen - Tough love that leveled up my design craft
* Kellie Chan -  Moral support forged in the fires of 👁️🐝Ⓜ️ friendship
* Varsha Radhakrishnan - Always reminding me to "just be"
* Chhavi Kankari - Catches mistakes I didn't even know I made
* Michael Palma - Answered my unsolicited dev questions


## All links and references since I am a researcher and I cite 😊

* [Repo of new site](https://github.com/wailingwombat/portfolio-project)
* [My new site's Figma prototype](https://www.figma.com/proto/bo64SLrG2WwRX2UTaWSGzC/Portfolio-2024?page-id=611%3A13622&node-id=1117-16506&viewport=1743%2C343%2C0.12&t=BDdvFBJZPslhGVqf-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1117%3A16506)
* [Hang and Vy's video on the job market for UX designers](https://youtu.be/PqdUQiv4PJM?t=2236)
* [Professor's lecture on writing for the reader](https://youtu.be/vtIzMaLkCaM?list=PLCadRh9rZJxff5lfylnRGqPPZr_VUEwAb&t=238)
* [Formatting case study tutorial](https://www.youtube.com/watch?v=emSv9TTHZVY&list=PLCadRh9rZJxff5lfylnRGqPPZr_VUEwAb&index=15&t=1122s)
* [Effective presentation technique](https://www.youtube.com/watch?v=dh0pJdgY6Lc&list=PLCadRh9rZJxff5lfylnRGqPPZr_VUEwAb&index=10)
* [Sarah's newsletters and how to "brand yourself"](https://www.sarahdoody.com/ux-resources/)
