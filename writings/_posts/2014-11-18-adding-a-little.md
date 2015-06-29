---
title: Adding a little to a little and you get a better experience
layout: writingpost
css: [main]
categories: writings
desc: During Addepar’s hackathon, we decided to fix multiple small usability problems that our previous UI caused.
---

During [Addepar][2]’s last hackathon, we decided to fix multiple small usability problems that our previous UI (below) caused.
<img src="/images/writings/adde3.png"></img> 
The first issue that we focused on were the “floating islands.” The table and charts felt like they were draggable and resizable (they’re not) due to the different backgrounds and the drop shadow. Providing a full white background (see the after screenshot) allowed the gutters to be smaller.


Since the main view had a white background, the top navigation needed more distinction. This also needed to balance the left navigation (context chooser), and we decided that the tools should be the top level of the hierarchy. A secondary panel looked too similar to the table, so we provided some shadowing for a layering effect. This is a great example of how things can snowball because it’s difficult to make such changes in isolation.


Though the hamburger menu has become common to denote a menu in iOS devices, it doesn’t have as strong affordance in a desktop environment. We moved the collapse icon to be associated to the actual content that would be expanded or contracted.


We also cleaned up the toolbar–  the buttons now have a different background color and slight rounded corners to make them feel clickable. We streamlined these controls by removing secondary text that was superfluous.


Before:
<img src="/images/writings/adde4.png"></img> 

After:
<img src="/images/writings/adde5.png"></img> 


The tables also used to have dotted lines and spacing in between columns that broke up the flow of information (though the idea seemed to be provide affordance to resize the columns). However, indicating that the columns are resizable in that way is unnatural. We added some indications on hover (not pictured) that helped users discover this.


There were other stylistic changes to give the UI a bit of polish, which probably seem small and incremental– however, they make the product cleaner and more understandable:

<img src="/images/writings/adde.png"></img> 

<img src="/images/writings/adde2.png"></img> 

Originally [posted][1] on the [Addepar Creative blog][3].
[1]: http://creative.addepar.com/post/102981250585/adding-a-little-to-a-little-and-you-get-a-better "Adding a little to a little and you get a better experience"
[2]: https://addepar.com "Addepar"
[3]: http://creative.addepar.com "Addepar Creative Blog"