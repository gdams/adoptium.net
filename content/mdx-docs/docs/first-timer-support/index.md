---
title: 'Eclipse Adoptium&reg; First Timers Support'
authors: MBoegers, hendrikebbers, gdams, tellison
---

At Adoptium we want to help people to get into OpenSource, Java and the Java Community.
Therefore it is quite important for us to provide help to people that want to start working on open source.

> This documentation is still work in progress and some points that are mentioned are ideas for the future that has not been established yet.

Adoptium provides several issues that are labeled as **`good first issue`**.
All this issues are perfect to start working on an open source project.
The issues provide user friendly descriptions and a lot or helpful links to documentations and tutorials to directly start working on such issue.
Even if you are not really familiar with GitHub in general the issues link to user friendly tutorials that will help users to
understand the workflows of forks and pull requests.

You can find [an example of a **`good first issue`** in the IcedTea-Web repository](https://github.com/AdoptOpenJDK/IcedTea-Web/issues/706).

In GitHub you can find [a list of all issues that are labeled by **`good first issue`**](https://github.com/issues?q=org%3AAdoptium+label%3A%22good+first+issue%22+is%3Aopen).

## Templates

We are currently working on an issue template for issues that are labeled as a **`good first issue`**.
[The current version of the issue template](https://gist.github.com/hendrikebbers/8e4dec9ddea5e2a420080d1314af025f) and
[a section about "First timers support" to contributing.md files](https://gist.github.com/hendrikebbers/0f9cdd18076343b3bbe5f2d162733b6e) are currently in development.

## Workflow to create good first issues

Whenever you assume that an issue could be a **`good first issue`** you should label it with the **`good first issue - candidate`** label.
By doing so it can be reviewed and modified to become a **`good first issue`**.

In GitHub you can find [a list of all issues that are labeled by **`good first issue - candidate`**](https://github.com/issues?q=org%3AAdoptium+label%3A%22good+first+issue+-+candidate%22+is%3Aopen).

All issues that are labeled as **`good first issue - candidate`** should be reviewed and maybe refactored to become **`good first issue`** labeled issues.

Here the following rules should be applied:

- The title of the issue must specify the problem
- The description of the issue must be based on [our **`good first issue`** template](https://gist.github.com/hendrikebbers/0f9cdd18076343b3bbe5f2d162733b6e)
- The issue should not contain any comments. Comments make it already harder to understand for a newbie.
All relevant information that are in the comments should be added to the description of the issue.
The comments should be removed afterwards.
If this is not possible the best solution is to create a new issue for the **`good first issue`**, link it to the original one, and close the original one.
- When defining the description of the issue it always makes sense to link to documentations or helpful files (maybe even directly to the code)
to help a newcomer to find the right starting point to work on the issue.

Once the issue is refactored and reviewed it should be labeled as **`good first issue`** and the **`good first issue - candidate`** label should be removed.
Next to this we should label all this issues with **`help wanted`** and **`Hacktoberfest`**.

## Links & Resources

- [List of all issues that are labeled by **`good first issue`**](https://github.com/issues?q=org%3AAdoptium+label%3A%22good+first+issue%22+is%3Aopen)
- [List of all issues that are labeled by **`good first issue - candidate`**](https://github.com/issues?q=org%3AAdoptium+label%3A%22good+first+issue+-+candidate%22+is%3Aopen)
- [Current version of the issue template](https://gist.github.com/hendrikebbers/8e4dec9ddea5e2a420080d1314af025f)
- [Current version of a section about "First timers support" for contributing.md files](https://gist.github.com/hendrikebbers/0f9cdd18076343b3bbe5f2d162733b6e)
- [An example of a **`good first issue`**](https://github.com/AdoptOpenJDK/IcedTea-Web/issues/706)