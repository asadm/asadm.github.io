---
title: High Performance Mobile Game Development in HTML5
description: >-
  Sometime ago, I had to make a decision on development language / framework for
  a cross platform mobile game. I had to at the very least…
date: '2016-09-09T08:39:13.912Z'
categories: []
keywords: []
---

![](/assets/blog/old_posts/0__2A8xQZxm0ups4OIl.png)

Sometime ago, I had to make a decision on development language / framework for a cross platform mobile game. I had to at the very least support Apple iOS and Android. I already had worked with Cocos2d-x so I could have gone that path. But I wanted to use HTML5 as this was a personal project and there was nobody to stop me.

It wasn’t because I was afraid of writing code in C++. Infact, I had been making games and prototypes in [XNA](https://www.youtube.com/watch?v=WM6sYN-uzcA), [Irrlicht](https://sites.google.com/site/therobotronics/1-programming/bomberman), [DirectX](http://apps.microsoft.com/windows/en-us/app/fall-o-water/a066a6bb-8b13-4100-add5-9ca08fb778ac) and Cocos2d-x.

There were reasons for this decision, like debugging the game is easier as I would use Chrome DevTools, also I don’t have any iOS or Android devices so testing would have been easier. And, I feel that for some reason, development is faster using JavaScript.

A possible solution now would have been to develop the core game in JavaScript and wrap it in WebView control on each platform so it acts as a standalone application.

Tadaaa! Problem Solved!

![](/assets/blog/old_posts/0__R9lqaf5C7jXvqHrN.png)

The problem now was **performance**!

To make things worse, this was a physics puzzle game so I had to do real-time simulation of some physics elements and to top that, I had to draw sprites and some hundred lines along with filled polygons on each tick.

![](/assets/blog/old_posts/0__7I6vvSHl0RmRGoLj.png)

A quick performance test proved that it is quite impossible to do what I wanted using barebone WebView control and JavaScript.

Enter **CocoonJS!**

![](/assets/blog/old_posts/0__BC5dUTFQFdnS67a__.png)

CocoonJS, like some other similar solutions is an accelerated canvas control. It overrides default `<canvas>` implementation and accelerates it with OpenGL at the native side of the application.

What this means in my case is, now browser control does not spend time on rendering. It can just concentrate on physics processing.

In comparison, the same code (as the above tick loop) was running at 6–10 FPS in normal mobile browser, but now that number is around 40. Clearly showing that drawing was a big bottleneck.

**Getting To The Code**

I was using the amazing createJS library, I did some changes to my code to support CocoonJS. I am releasing the code after some cleanup for you to play with (and use if you feel like).

I wrote a thin layer over createJS of a tiny SceneManager which helps change the scenes and maintain a Scene stack. It also currently supports fade transition between switching scenes.

[Grab the code from my github.](https://github.com/asadlionpk/cocoonjs-createjs-boilerplate)

The code will work in browser too (host it on apache).

I hope this post will help someone like myself as there isn’t much around on this topic.

Happy Development! :)
