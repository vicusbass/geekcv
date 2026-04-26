---
title: "You say REST, I think 'requests'"
description: "REST upload endpoints made easy with Python"
pubDate: "Apr 19 2019"
tags: ["Python", "REST", "Automation"]
---

When testing REST upload endpoints in the past, I often had to make numerous tweaks to combine file upload as multipart with certain tags. However, as a Python enthusiast nowadays, I can't help but smile when I see how easy it is to accomplish this using the `requests` library.

Let's consider a scenario where you need to perform a POST request for uploading a CSV file, and inform the backend about the specific name associated with this resource. I believe the following code is self-explanatory.

    def upload_csv_data(self, resource_name, *csv_lines):
        lines = "\n".join(csv_lines)
        files = {"file": ("report.csv", lines)}
        payload = {
            "resource_name": resource_name,
        }
        return requests.post(self.UPLOAD_CSV_URL, files=files, data=payload)

Have you seen the code where I create a CSV file? There is none, no need for testing purposes, with dearest `requests` library.
