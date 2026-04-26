---
title: "Global timeout for 'requests'"
description: "Using a global timeout for REST calls — requests library"
pubDate: "Apr 30 2019"
tags: ["Python", "REST", "Automation"]
---

I really love `requests`, but occasionally, I find myself wanting to use my old Java ways to achieve certain tasks, and I struggle to find the most 'pythonic' approach. One example that comes to mind is configuring a timeout value, which I used to do effortlessly with RestAssured. In RestAssured, I could set a timeout value globally for the session, ensuring that a test fails if a request takes too long to respond. However, in `requests`, the timeout can only be set per individual request, not for the entire session. There is a valid explanation for this design choice, as a timeout is not inherently a property of the session. Nevertheless, for testing purposes, having a global timeout would be quite beneficial.

This is where Python truly shines. It allows you to patch and modify almost everything for the greater good, doesn't it? Essentially, you just need to patch all request types, and you're good to go.

    from requests import Session
    session = Session()
    for method in ("get", "options", "head", "post", "put", "patch", "delete"):
        setattr(
            session,
            method,
            functools.partial(getattr(session, method), timeout=5),
        )
    # there is a 5 seconds timeout behind the scenes
    session.get(url="http://vicus.io/gimme/everything")
