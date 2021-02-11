# Node.js Beginner's Guide
<p align="center">
  <img width="600px" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png"><br>
   <a href="https://www.youtube.com/watch?v=ENrzD9HAZK4" target="_blank">Based on a Fireship Tutorial</a>
</p>

## What is Node.js?
**Node.js is not a programming language**, but rather a JavaScript runtime built on Chrome's V8 JavaScript engine, which allows you to run JavaScript on a server. When JavaScript was first published in 1995, it was designed as a simple scripting language to run in the browser. At that time, most servers were written in Java or PHP. All of this changed in 2009, when we saw the initial release of Node.js.

Node.js can do a lot. When you visit a URL on the Internet, that points to your server. When the request is received, we can use Node to handle the request and read a file from the server's filesystem and then respond back to the client so they can view the HTML in browser.

<p align="center">
  <img width="600px" src="https://i.imgur.com/SwZq3c7.jpg">
</p>

Compared to traditional web-serving techniques where each request spawns a new thread, taking up system RAM and eventually maxing-out at the amount of RAM available, Node.js operates on a single-thread, using non-blocking I/O calls, allowing it to support tens of thousands of concurrent connections held in the event loop. 

When Node.js starts, it initializes the event loop, processes the provided input script (or drops into the REPL, which is not covered in this document) which may make async API calls, schedule timers, or call process.nextTick(), then begins processing the event loop.

## Setup
[Download Node.js on it's official website](https://nodejs.org/en/).

After installing Node.js, picking up a **NVM (Node Version Manager)** is heavily recommended:
- **macOS/Linux:** [Node Version Manager](https://github.com/nvm-sh/nvm).
- **Windows:** [Node for Windows](https://github.com/coreybutler/node-windows)

NVM allows you to choose your preferable Node version when developing.
```zsh
$ node -v
v10.22.0
$ nvm install 12.16.3
Now using node v12.16.3
```

## Links used
- [Node.js Official Website](https://nodejs.org/en/)
- [Node.js Ultimate Beginner's Guide in 7 Easy Steps](https://www.youtube.com/watch?v=ENrzD9HAZK4)
