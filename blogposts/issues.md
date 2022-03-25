---
title: Using GitHub Issues for Blog Comments
date: '2022-03-13T08:42:50.450Z'
description: I wanted to add a comment system to this blog but I didn't want to make visitors suffer with something like Disqus which are tracking-heavy. So I decided to use GitHub issues.
issue: 4
---

I wanted to add a comment system to this blog but I didn't want to make visitors suffer with something like Disqus which are tracking-heavy. So I decided to use GitHub issues.

### Why?
Using issues automatically gives me comment moderation and spam protection. Users get markdown editor and also get notified when someone replies to their comment without having to deal with another shady service.

### How does it work?
It's actually very simple. For every blog post, I create a new issue and add the issue number to the blog post's markdown metadata like this:
```
---
title: ...
date: ...
issue: 4
---
```

The [GitHub issues component](https://github.com/asadm/asadm.github.io/blob/master/components/github.issues.js) then displays the comments using [GitHub's Issue API](https://docs.github.com/en/rest/reference/issues#list-issue-comments-for-a-repository) which is publicly-accessible endpoint.

### Inspiration
The original inspiration was [this blog](https://ja3k.com/blog/comment) using pull-requests for comments. Upon searching I see a few similar solutions ([like this](https://utteranc.es/)) that other blogs use but I am happy with the custom and simple component I made.