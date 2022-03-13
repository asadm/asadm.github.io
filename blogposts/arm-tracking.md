---
title: Arm Tracking using Pebble
description: >-
  I, as most other owners love my Pebble watch. It is incredible how a simple
  hardware device (uC + Display + BT + Sensors) strapped to your…
date: '2016-09-09T08:41:43.268Z'
keywords: []
---

![](/assets/blog/old_posts/0__gfDaXqPYbtXRJWsy.jpg)

I, as most other owners love my **Pebble watch**. It is incredible how a simple hardware device (uC + Display + BT + Sensors) strapped to your wrist can provide so many functions thanks to the power of software.

Since its release, I had been interested in the motion sensors onboard and was somewhat disappointed that it just had a **3-axis accelerometer and a compass**. Which means it cannot detect complicated gestures or provide accurate 3-axis direction (where my hand is pointing in 3D space).

Considering the limitations, I still wanted to check just how accurate this can be. Here is a brief write-up of my attempt on doing some arm tracking using Pebble.

### Results

I was able to convert raw sensor data to usable Pitch Roll Yaw values to know where my hand is pointing in 3D space:

![](/assets/blog/old_posts/0__N__0FryXzlGK50V__d.gif)

Knowing direction in 3D space can have many uses like controlling a virtual speaker’s volume by pointing at it and rolling your hand:

![](/assets/blog/old_posts/0__cYQtyoP7kcIQk1Rp.gif)

### The Process

*   First step was to get the accelerometer values and send them to my laptop. There can be two ways to do that:
*   Connect Pebble to your laptops bluetooth and somehow access the data (Trivial)
*   Use Internet API of pebble to send data to your laptop’s IP via your phone’s wifi. So: Watch -> Phone -> Laptop
*   I chose the later method so I can concentrate on main problem rather than the connectivity issues. I know the extra lag will not be practical though.
*   I started with the [Accelerometer Example](https://github.com/pebble-examples/feature-accel-discs) and used [CloudPebble](https://cloudpebble.net) to make a quick app.
*   Web API is only available in JS API of Pebble so first I sent Accel+Compass data from C to JS and then sent them over to a Nodejs server running on my laptop.
*   Created a html page which gets the values and calculates Roll, Pitch, and Yaw.
*   Used these new values to show a 3D pointer of your direction.
*   Used values to build a basic dummy example where you can control your home electronics by pointing at them and doing a hand-roll gesture. Like pointing at your speaker and controlling the volume by rotating your arm clockwise/anticlockwise.

### The Code

*   The code is very very crude and is just to prove the point. To run it yourself:
*   Download the code from [my Github](https://github.com/asadm/pebble-arm-tracking).
*   The ‘server’ folder holds the Nodejs server which will run on your computer.
*   The ‘cloudpebble’ folder is to be deployed to your pebble watch.
*   Please change the IP to your computer’s in cloudpebble/app.js file.
*   Make sure your phone and computer are on same Wifi network.

### Conclusion

Considering this was a crude and quick hack, it might be safe to assume that this can be perfected for practical uses. Another point of this post is that you don’t need another smartphone on your wrist (as [Eric Migicovsky](https://www.linkedin.com/in/ericmigi) rightly pointed out many times) and a minimal hardware should be enough to empower you.
