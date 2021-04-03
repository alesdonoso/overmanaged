---
title: 'Why small PRs increase developer productivity.'
date: 2020-10-01 12:00:00
category: ''
draft: false
---

_Originally posted in [Medium](https://alesdonoso.medium.com/why-small-prs-increase-developer-productivity-577ad60ca360)._

Let’s be clear: all of us have dealt with a PR review with tons of lines modified. No one wants to review that kind of PRs, it could be annoying and you probably are not going to give a good look at everything. Here starts the malicious workflow.

Some time ago, a friend of mine, [Jesús Darío](https://jsdario.medium.com/), wrote about [How to make Great Code Reviews](https://itnext.io/how-to-make-great-code-reviews-9fb7d84b77e8). I’d recommend you take a look at the article, it is an easy and understandable approach to greatly improve your review workflow.

He stated that it’s really important to reduce the size of the PRs if you are the contributor. Today I’m willing to explain this concept a little more.

> They should be as small as the minimum functional change that makes sense. — **jsdario**.

![photo by Yancy Min on Unsplash](https://miro.medium.com/max/700/0*E1CbTpVbOAtqSACr)

[Hacktoberfest](https://hacktoberfest.digitalocean.com/) is just getting started and tons of Open Source repositories will start receiving PRs. Maintainers will have to deal with tens or hundreds of change proposals in their repositories.

Do you imagine how much time would it take to review a PR that has several hundreds of lines modified? Not enough time. Too many PRs will be opened at once.

But this is happening in private software companies too on a daily basis, not only in the open-source world, or because of a monthly event.
Managing software teams is something fun, enriching, and creative at the same time. But it can be quite stressful **if you don’t have a clear work structure**.

To this, we must add that, in many cases, technical debt and legacy code have a very important presence. And this is a really important point here: not having a good review culture might lead you to a huge technical debt issue.

Having a correct code structure helps to decrease this debt. For that, clean and understandable code is a must-have for every developer. And there, creating PRs _with sense_ is the most important thing, so we have to be always thinking about the next step: the PRs should be reviewed, and **the sooner it is reviewed, the better**.

> _Does it not start making sense that a small change makes the difference?_

# But...why?

We will probably understand it by now. Creating small PRs has a great and important impact on the engineers’ workflow. It can create significant benefits for development teams, dramatically increasing the efficiency and effectiveness of each code change.

Let’s think it proposing a new feature release in exercise:

1. A new feature has to be implemented. It is a new filter that will affect to 2 other features that are already in production.
2. The filter creates two different outputs.
3. Each output creates different results for each of the two functions in production.
4. Result? You have separated the new feature into 6 different tasks — **_quantifiable and measurable minimum units_**.
5. PRs will be released with ease. People know what to do. PRs could also be subdivided into even smaller ones, but they have to be related to the exact branch. That’s the point. Make things easier.

Let see this scheme:

![An example of a new feature release with PRs associated. Image created using whimsical](https://miro.medium.com/max/700/1*dlGAR8l3RPu-VsUHzm-CbQ.png)

The example is quite simple and I know that’s not going to happen in reality too many often. But what I want for you is to get the point. In software development, everything you do directly affects the workflow, and that's why _things must be thought from their highest level to their lowest level_.

Small PRs help your workflow be as efficient as it deserves. In terms of looking for better team productivity, this flow does not only increases your team velocity but also **your team quality**.

> _Make people think better, work better, be better._

### So, what are the benefits of creating small PRs?

1.Ease commit reading. Small PRs will probably have less number of commits, so it will be easier to read and understand the changes.

2. Regarding point #1, commit’s messages will (and need) be better and more useful and descriptive. Lower changes urge you to be a better developer overall, tho this may be an IMHO.
3. As it seems to be obvious, **reviews will have a great improvement in terms of quality and velocity**.
4. Notable increment in team communication and between engineers, creating a better communication culture and flow.
5. Enhance engineers’ motivation. For this I mean engineers won’t see their PRs in the “pending reviews” dashboard for a long time, since the workflow velocity will be greatly improved.
6. Decrease drastically tech debt since the **code reviews will be done in a better way and with more frequency**, boosting time engineers take to review the other's work.

These are some of the main points, but the list could be endless.
Perhaps the most important point and the one related to the issue I raise is the connection between small PRs and quality reviews. It’s the union that makes the most sense.

Small PRs will motivate teams to create a proper review flow. **It’s a fundamental starting point**. I’d recommend you to try out this workflow and share your results with me. I’d be glad to hear from you in the comments.

Thanks for reading 🙌
