---
title: "Strong opinions on test tooling are funny"
description: "Is there a single reliable tech stack for E2E tests?"
pubDate: "Jul 26 2023"
tags: ["Automation"]
---

I had an ~~interesting~~ weird experience today. I was scrolling through a bunch of tech articles on Medium and saw one from a guy I read from time to time. He's an experienced test engineer, writes interesting articles on theory, and usually has very strong opinions. This time I felt a need to express my opinion too because this is the cool part about the Internet, we can find out what other people think too, right? He wrote an article about how only 0.1% of test engineers 'are not fake' and how the ONLY solution for E2E testing is `Ruby + Selenium + RSpec`. Now, I throw numbers when I'm in sarcastic mode, e.g., '96.34% of people who listen to Snarky Puppy have great musical taste' (might be very true), but he actually means it. As rational people, you ask yourselves, 'well, sure, but where is this data coming from?'. Here are the main arguments:

- a guy from Microsoft said 95% of test engineers write 95% bad UI tests; we should do less UI testing, etc. - not a bad point, sure
- some other guy who wrote in 2008 that UI testing is hard
- he only met `JS testers who are fake testers`
- he worked as a test consultant for several projects and has a lot of experience and does conference talks and so on

Now, sure, we tend to see the world through our own experience, so he would probably be right if statistics were made on a single person. If so, probably 50% of SDET/QA engineers I worked with are great people who can write great test tooling. Is this true for all test engineers in the world? I have no idea. Neither our guy, but he doesn't care much about real numbers.

So a few things here. First of all, what are these 'JS tester' and 'Fake tester' things? Well, 'JS tester' is a tester who writes only JS code, I guess. And 'Fake tester'? He says those people are a shame to Humanity, they pretend to write maintainable tests, but they are not. I was a fake tester too, occasionally, gotta admit.

What's my opinion on a large E2E test codebase that is not working great (flaky, slow, etc.)? There we go:

- try to use the programming language that is known by most engineers in the team. I love Python, but usually, UI tests belong to frontend engineers and they all do Javascript and Typescript. Would they be interested in switching context to Python or Ruby just for writing E2E tests? Maybe, rarely, but why should they? Ok, maybe the ONLY people writing/maintaining tests are the testers, but that might be a problem already. Does this rule apply to every team? NO. We are rational people; we can talk about PROs and CONs, try things, try other things.
- limit E2E tests to really critical user journeys where you can still control test reliability. Anything else should be moved to other test layers. UI table with filtering and sorting? Create a component test where you can stub input data and do actions there. You'll have a lot of UI/component tests that will run in seconds or less without waiting for a 3-minute test to reach that component in a fully integrated environment where you cannot control test data. Want to make sure a user action generates eventually a Kafka event that ends up in analytics? You can write a component test that checks a network call is being made after the action and a service test that checks a network call is processed and results in a Kafka message in a topic (even that test can be a 2-seconds unit test or a 12-seconds integration test, but not a 1-minute system test).
- run the most critical tests out of the so very critical tests in every MR pipeline after the test environment is deployed, run some more tests when the MR is merged into the main branch, run all tests on release candidates. Sure, this depends on the whole infrastructure, so it's not a one-engineer effort next week.
- build architectured test tooling, not just a bunch of scripting, so it's easy to maintain, easy to write new tests. Page Objects used to be the way to go; this is now debatable; you can also write actions as functions. I don't have strong opinions; I only care much about readable and maintainable tests; that's why I'm not a big fan of BDD.

Can you write great test tooling with any framework and programming language? Maybe not with ALL OF THEM, but with most of them.

What's our guy's solution? Always go for Ruby + Selenium + RSpec; Cypress is dead anyway, and Playwright will be also, soon. Somehow you cannot write bad code, bad architecture with Ruby stack. Well, I did that in one project I worked on 2 years ago; it's really easy to write bad code, anytime.

He got pissed off about my comment and blocked me on Medium; that was unexpected. If I would apply his statistics, I should say 'all Ruby testers cannot handle feedback,' I guess. I'll try finding the article and post it in the comments.

So no, don't throw away your test tooling; make it better or try something else. Or go for Ruby and Selenium. I don't have strong opinions.
