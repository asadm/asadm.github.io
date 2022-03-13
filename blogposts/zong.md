---
title: Zong 4G Hacked?
description: >-
  TL;DR: Zong’s servers are compromised and are randomly serving ads to it’s
  internet customers. Read on!
date: '2016-09-09T08:44:56.935Z'
categories: []
keywords: []
slug: /@asadmemon/zong-4g-hacked-c4ca24b7966d
---

![](/assets/blog/old_posts/0__BGesPt3Oz0kAIBAA.png)

TL;DR: Zong’s servers are compromised and are randomly serving ads to it’s internet customers. Read on!

I am addicted to Zong’s high speed internet and don’t plan on going back to PTCL again. But that doesn’t mean Zong is perfect.

For sometime now, whenever I visit a website that is not on https, I am randomly redirected to some ad and a cycle of redirections start. Here is an example:

![](/assets/blog/old_posts/0__RNTlbBZCYOpn8Z__l.gif)

I came to know that I am not alone. Here is one thread in a Facebook group:

![](/assets/blog/old_posts/0__2UGgTrzvDctzuUXG.png)

It looks like a Zong specific problem. Let’s dig in.

### How?

I started looking at the page source of infected websites and quickly discovered that someone was replacing **Google Analytics** script with their own. This only works when the script is loaded over http. A Man-in-the-middle attack.

Here is how google analytics is usually added in the site:

![](/assets/blog/old_posts/0__u__QFN2kk2GJqdk4n.png)

But if that script is bad, it’s a disaster:

![](/assets/blog/old_posts/0__Gs8HgQB0lASmQjPN.png)

It’s not hard to guess that this attack is happening somewhere inside the Zong empire. Since Zong has [previously been injecting a toolbar too](http://t.umblr.com/redirect?z=https%3A%2F%2Fwww.techjuice.pk%2Falert-zong-is-intercepting-web-traffic-to-install-scripts-on-websites%2F&t=NjhkOGY3NDk0YTRmNmFmNTg2MzIwZjViOTA0OWY3ZjRhNjM4NjE3ZiwyUkRIc3RiVg%3D%3D).

Notice the **Server** in response headers. I don’t think Google would ever use _Microsoft-IIS_ to serve their analytics code:

![](/assets/blog/old_posts/0__vcrjRvwsBiaZi__yF.png)

### Follow The Money

After a few _traceroutes_ It’s pretty clear that this is not DNS cache poisoning and is infact a page-rewrite attack. Also, Zong is not doing this intentionally. Someone has either hacked their servers or an employee has acted on their own.

So let’s find out who owns these ads.

Notice the above code, the **analytics.js** script further loads another script (either a.js or b.js based on what type of device you are using). Here is a snippet from **b.js**:

![](/assets/blog/old_posts/0__xExc9wwXISUbjK83.png)

Line 1 is what causes all those frustrating redirects. The page redirects to **geo-tv.us** domain which further redirects to ads.

Here is a WHOIS snapshot of that domain:

![](/assets/blog/old_posts/0__K9dGaxZPky3mnunk.png)

At this point, I would like to say that **my aim is not to put a blame on this domain’s owner**. But he is probably getting loads of traffic to his website and I don’t think he wouldn’t have noticed that.

### How Do I Fix This?

The bad news is, there is no fix for this! Only and only Zong can put an end to this and frankly their customer service staff is complete dumb in this regard.

~~[Here is a mirror of all scripts discussed above.](http://t.umblr.com/redirect?z=https%3A%2F%2Fgist.github.com%2Fasadm%2Fb74427cd09968352b84dabd214b840d7&t=ZWVkNWVkMDE2MWE0MjE1ZjNhYzAwZDU2ODFhY2YzY2Y4NTcyMTdjYSwyUkRIc3RiVg%3D%3D)~~

Thanks
