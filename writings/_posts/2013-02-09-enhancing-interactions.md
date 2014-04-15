---
title: Enhancing in-person interactions with a web app
layout: writingpost
css: main
back: greenbackground
categories: writings
desc: A drink-tracking scoreboard for my friends on a recent vacation, and how it impacted in-person interactions.
---

In short, I made a drink-tracking scoreboard for my friends on a recent vacation. [You can see it live here][6]. I didn’t intend to add to in-person interactions, but I was curious as to how people react to the addition of this application. I definitely wanted to make something small and put it out in a small, contained environment and watch how people reacted. I was expecting people to complain about people pulling their phone out more than they should. Today, you can hear people reminisce about the times when social interactions weren't peppered with interruptions with a mobile phone.

<img src="{{site.url}}/writings/images/drinks1.png" class="wrapimg"></img>
On the trip up to Big Bear after Christmas (yes, this post is quite overdue), I worked on the app, as helped out by my awesome WiFi hotspot. Also, Meteor is a cool framework that helped me rapidly get something up. All I really needed to do was play with their [Leaderboard example][5] for the hour-long trip, make sure it was pretty usable on iPhones and an Android or two, deployed it on Meteor, and huzzah, sent a link off to the people who were going. 

I was curious as to what an honor system where people can add or subtract drinks would do. Originally, I had a whole authentication process mapped out and people could add or subtract only their own drinks.. but then I thought about it-- would people actually cheat the system? How would this affect dynamics of a group of friends?

<img src="{{site.url}}/writings/images/drinks2.png" class="wrapimg"></img>
Also, creating users and keeping track of all the permissions didn't seem like an hour or two-long hack for now. I just kind of wanted to deploy it as soon as possible to see how people would react-- and how they would do so even on the ride up.

The first reaction was to make silly names and to vote up/down people to just compete with each other. It wasn't drink tracking, and perhaps an artifact of when I released the URL to people. One car then began suspecting another car of hitting the links really quickly all at the same time, and it became more of a Team A vs. Team B sort of thing-- which is always fun.

I then got a request to wipe the database and start over, particularly as we were approaching our destination. So I did, and most people actually started keeping track of their drinks on it. I was hoping that I'd see an increase of total drinks, but alas, that didn't happen with this group of people. Didn't seem like they were that competitive. But they'd bring it out in conversation, and ask people if they were cheating, etc. It provided someplace to start, especially if you didn't know each other all too well. I suspect the dynamics might be a bit different in different types of groups, but it was certainly fun to put this together.

Thanks to [Ed][2] for his help with cleaning up the code and making it a bit more mobile-friendly! I've been terrible at approving pull requests, but if it's help to make this more generalized so that people can make their own leaderboards, that'd be awesome.

If you would like to deploy this to your own group (until I carve out time for this project), check out [Meteor][1] and you can use their leaderboard example or just clone [my repo][3]. You can get it deployed in the cloud via Meteor as well with [meteor deploy][4] to a particular URL. Let me know how it goes!

[1]: http://meteor.com/
[2]: https://github.com/podopie
[3]: https://github.com/chrnguyen/leaderboard
[4]: http://docs.meteor.com/#meteordeploy
[5]: http://meteor.com/examples/leaderboard
[6]: http://draaanks.meteor.com/
