---
title: "Merge gate test: an article that breaks the build"
slug: "merge-gate-breaks-muzdcyi6"
description: "A test of the merge gate."
pubDate: "2026-10-08T10:03:55.960Z"
type: "blog"
tags: ["test"]
---

This article points at an image that isn't in the repo, which Astro refuses to build.

![diagram](./does-not-exist.png)

## Why

To prove the merge gate holds a PR whose build fails.
