---
title: 'Temurin&trade; Support'
authors: gdams, karianna, sxa, tellison, SueChaplain, sxa555, mvitz, ParkerM, M-Davies, Malax, lasombra, practicalli-john, jeffalder, hendrikebbers, douph1, andrew-m-leonard, mr-david-owens, DanHeidinga, sophia-guo, zdtsw
---

## Community Support

We are prepared to stand behind our release quality binaries, so each build that is identified as a release receives support
via the Adoptium® community. Our support means that you can [raise an issue](https://github.com/adoptium/adoptium-support/issues/new/choose) to describe a bug you have found in the build, and we will work with you and the appropriate development team to resolve it. Any fixes we identify will be delivered as part of the next Adoptium release.

As a community of open source developers, our commitment is to triage any issues raised and champion them in the appropriate source code project. Of course, if the problem arises from the way we build and test the code we can fix that directly. For dedicated support with service level agreements you should contact commercial companies offering
support on Temurin binaries. Read [Java Is Still Free (3.0.0)](https://medium.com/@javachampions/java-is-still-free-3-0-0-ocrt-2021-bca75c88d23b) for some background information about Java support options.

## Release Roadmap

The frequency of Adoptium releases is guided by the schedule of our dependencies.

OpenJDK provide a new feature release every six months, and a maintenance/security update based upon each active release every three months. The release dates for those from the OpenJDK project are typically the [Tuesdays closest to the 17th](https://www.oracle.com/security-alerts/) of January, April, July and October. We will follow this schedule for publishing binary releases from Adoptium to ensure you get the latest, most secure builds.

In addition, every two years since 2021 one feature release will be designated as a Long Term Supported (LTS) release. We will support LTS releases for at least four years. This assurance will allow you to stay on a well-defined code stream, and give you time to migrate to the next, new, stable, LTS release when it becomes available.

Based upon this roadmap, here is the timetable showing the current release dates of the various OpenJDK releases used to build Eclipse Temurin. Note that the dates below are from the [upstream OpenJDK project page](https://www.java.com/releases) and should not be considered the date which the Adoptium project will have binaries available - there will be a short delay relative to these dates while we complete our extensive build and test cycles which can take up to three
weeks. Our [Google Calendar with our release cycles](https://calendar.google.com/calendar/embed?src=c_56d7263c0ceda87a1678f6144426f23fb53721480b5ff71b073afb51091e5492%40group.calendar.google.com) shows the expected cycle lengths for each of our releases.  We always prioritise the most popular platforms which will typically appear within a few days of these dates.

|Java Version|First Availability| Latest Release               | Next Release Due                  | End of Availability ¹ |
| ---------- | ---------------- | ---------------------------- | --------------------------------- | ----------------------- |
| Java 20    | Expected Mar 2023| Not available                | Expected Mar 2023                 | Expected Sep 2023       |
| Java 19    | Sep 2022     | 20 Oct 2022 <Small>jdk-19.0.1+10</Small> | 17 Jan 2023 <Small>jdk-19.0.2</Small> | Mar 2023    |
| Java 18    | Mar 2022     | 28 Aug 2022 <Small>jdk-18.0.2.1+1</Small>|  EOSL ²                    | Sep 2022                |
| Java 17 (LTS)| Sep 2021   | 18 Oct 2022 <Small>jdk-17.0.5+8</Small>  | 17 Jan 2023 <Small>jdk-17.0.6</Small> |At least Oct 2027 |
| Java 11 (LTS)| Sep 2018   | 18 Oct 2022 <Small>jdk-11.0.17+8</Small> | 17 Jan 2023 <Small>jdk-11.0.18</Small> |At least Oct 2024 |
| Java 8 (LTS) | Mar 2014   | 20 Oct 2022 <Small>jdk8u352-b08</Small>  | 17 Jan 2023 <Small>jdk8u361</Small> | At least Nov 2026 |

[1]: As a general philosophy, Adoptium will continue to build binaries for LTS releases as long as the corresponding upstream source is actively maintained.

[2]: End of Service/Support Life - this code stream is no longer being maintained. No further builds of Eclipse Temurin are planned.