---
title: Making Azure Work
description: >-
  If you know anything about cloud, you will know that nothing beats AWS. Any
  knowledgeable engineer will always choose AWS over Azure or…
date: '2016-11-07T09:42:16.961Z'
categories: []
keywords: []
slug: /@asadmemon/making-azure-work-36b7a97569b
---

![](/assets/blog/old_posts/1__RFfKe6LRwunh2VbfWrpsZg.png)

If you know anything about cloud, you will know that nothing beats AWS. Any knowledgeable engineer will always choose AWS over Azure or Google Cloud.

But sometimes, you are supposed to make it work with other platforms and life sucks for the Hipster Engineer™ (like myself). There is no sugar-coating it, Azure Portal simply sucks!

![](/assets/blog/old_posts/1__XQs4n__Z8Tn8dZzI__XozRPg.png)

Specially when you are coming from AWS, everything from the Metro-UI to the documentation and community support. It’s all bad.

### Docker

Like any Valley engineer worth their salt, I use Docker for my deployment workflow. So naturally I thought of somehow letting Docker deal with Azure for me.

I learned that I can set up a cluster of docker hosts using [Docker Machine](https://docs.docker.com/machine/overview/), a command-line tool that can connect to Azure on your behalf and provision Docker instances. No more Azure Portal for me!

### GUI

Now I wanted a good GUI wrapper over Docker Machine. Not a big fan of doing everything from CLI.

So I looked at [Docker Cloud](https://www.docker.com/products/docker-cloud) (previously Tutum) which is perfect except that it’s expensive when you have many nodes. I settled for [Rancher](http://rancher.com/rancher/) which is even better and these are the reasons why:

*   Can provision instances right from it’s UI instead of docker-machine CLI.
*   Doesn’t bring anything proprietary and uses Docker Compose config behind-the-scenes.
*   Load balancer, health checks, scheduling, roll-backs, etc.
*   Open-Source!

![](/assets/blog/old_posts/1__H1008zYiVaalHzOj__2lw3w.png)

### Deployment, Now

So here is an overview of how I deploy now:

*   Push my updated code to Github repo.
*   Docker Cloud pulls the repo and builds an image from the Dockerfile.
*   I tell Rancher to upgrade it’s containers to latest Docker image.
*   Rancher upgrades all containers to the newer image while also making sure there is no downtime.
*   I make sure everything is working, if not I can always rollback from Rancher UI.

Pretty cool, huh?