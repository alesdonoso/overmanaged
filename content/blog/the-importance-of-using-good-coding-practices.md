---
title: 'The Importance of using Good Coding Practices'
date: 2019-7-15 12:00:00
category: ''
draft: false
---

_Originally posted in [Medium](https://medium.com/swlh/the-importance-of-using-good-coding-practices-343c5a91e570)._

In code development, as in any other kind of job, it’s very important to organize work, structure efforts and prioritize tasks with the only purpose of having better results.

Although it’s true that there are several different established practices for a set of programming languages, they are not universalized among programmers and engineers to establish a series of guidelines and make processes follow a logical structure — as for the artisanal process _itself_.

Often, engineering teams discover problems only after having launched something; mainly due to factors such as lack of **peer review** and lack of testing resources before it reaches the whole user base.

It’s then when good practices appear. Although they seem to be universally accepted and known by the community, it’s also true that they are informal rules, learned by so many but rarely followed. Often this is what distinguishes a junior developer from a more seasoned one.

> Many problems occur due to not following good practices during the entire process: from hypothesizing a project to its launch.

Even more, the results of the research [What Predicts Software Developers’ Productivity?](https://research.google/pubs/pub47853/) (Emerson Murphy-Hill et al, 2019) from the Google’s Team state that one of the factors with highest variance of response is precisely the “use of best tools and practices”.

At [Scope](https://hackernoon.com/measure-a-developers-impact-e2e18593ac79) 🔬, define good practices as the establishment of guidelines to follow even before starting to write code. They are a requirement that must be followed and used during the entire creative process.

# Which are good practices?

Based on our experience and trivial knowledge, here is a non-exclusive list of proposed good practices:

**Peer Review**: the reviews system is a fundamental piece in the software industry. Sometimes we ignore that we belong to a collective and as an individual we are subject to mistakes that affect the resulting product and can be prevented by simple read-proof.

Other times, the blind faith in our teammates can give us more headaches than expected. Peer Review can be the simplest and most effective way to ensure correct and functional products. Always have at least one approval from a code owner before merging to master.
At that stage we can quickly identify bugs or issues that may degrade our product, user experience or technical debt with very little cost.

**Comments**: comments are always welcome; they are a signal that reviews are well done, and more importantly help other readers than the author to see implicit information hidden in the code structure. Although they are not always necessary, it’s a good way to have an informal documentation on _how to do things_, improve functionality or signal solutions for different kind of bugs.

Peer review and comments can be the main way of teaching new hires the way things are done, and learn from each other. Good advice is to tag your PRs by topic (that will depend on what your organization does) i.e. _Login, Shopping Cart, Checkout…_ so developers can navigate your repository via those labels and find formulas on how to achieve a particular result.

**[Pull-Requests system](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)**: and what if we analyze and comment at the same time? The pull-request (PR) system is a perfect way to make code reviews, since you are warning your team that you have done changes or have modified something in the code and those changes need to be reviewed before merging. The PRs are one of the best practices to follow, since they enforce the use of the two previous practices.

**Tags**: usually we forget them. To have a post-it in a punctual moment will help a lot. The tags, in this case, would be like a post-it that we add to our files and with which we identify them. They ease the workflow and help to identify every feature, bugfix or enhancement, streamlining the processes. Additionally, tags are a good way to index the informal documentation that our repo actually is, as said before in the _comments_ section.

# The benefits of using good practices

**Improve workflow**: with the use of good practices, processes are greatly streamlined, decreasing costs in time and money. The teams communicate better with each other, they understand what others are doing and prioritize goals depending on the project’s needs.

**Notable improvement of efficiency and productivity**: if the guidelines are accepted by all, logically, the workflow and agility of processes will improve and so will the efficiency and productivity of a developer and of the entire team.

**Reduce costs**: more productivity, more efficiency, dynamic processes → time and money guaranteed.

**General awareness**: through tags and pull-requests system, developers can have a broad vision of all the processes that are being carried out inside a project.

**Less risks, more security**: we use reviews to ensure code is well built before deploying it. With this, we notably decrease levels of risk when facing bugs. Time invested into reviews is gained by avoiding facing problems. More stability and performance are also a consequence.

**Non hierarchical organization**: tags are very useful to better organize the work. We try ourselves to find tools that help us organize our work, like Trello, Jira or any other. With the use of tags, we have another way to access our directories and files, linked directly with our tasks and features, rather than an arbitrary hierarchy.

# Some examples with Scope 🔬

In [Scope](https://hackernoon.com/measure-a-developers-impact-e2e18593ac79) 🔬, we look to greatly encourage the use of good practices. It’s a strong value and the essence of our Startup. One of our visualizations called “Toggle by Color” shows us a graphic based on the work done by developers in the function of tags which they have been working with.

Let me show you some examples of public repositories using tags!

### microsoft/terminal repository

![microsoft-terminal repository](https://miro.medium.com/max/1000/1*5EJEStaqmqP-yEgcVEMppg.png)

### joomla/joomla-cms repository

![joomla-cms repository](https://miro.medium.com/max/1000/1*dYioSu9L520zbjiujw-aZw.png)

### ant-design/ant-design repository

![ant-design repository](https://miro.medium.com/max/1000/1*GBeoC4RDL9JomRdbHiZwiA.png)

> This text does not pretend to be moralizing but a reflection based on my own experience and learning. Hope this is useful to you!
