---
title: "Logging and Observability at ROSCon 2025"
slug: roscon-logging-observability-findings
authors: michaelhart
tags: [ros, community, roscon]
---

The Cloud Robotics Working Group has been researching Logging and Observability in preparation for writing a community guide on the subject. After ROSCon 2025, we spent a couple of sessions reviewing the talks from ROSCon to understand what the community has already presented on the subject. Here is a brief summary of our findings.

<!-- truncate -->

## Method

As none of the members of the group were able to attend the conference live, we were completely dependent on the recorded talks. The talk recordings are excellent! A full list of the talks can be found on the [roscon website](https://roscon.ros.org/2025/). Each talk has a link to "Watch" the talk.

The group gathered the list of talks into a table, then had an initial guess of the talks we thought would be most relevant to Logging & Observability. Our table is publicly available on [Google Drive](https://docs.google.com/document/d/1mxAl90cpy0ZOHO4rjyPqhVOcoSQ6Y-BWLZLCfbtiOTg/edit?tab=t.0).

### The Talks We Reviewed

We then looked at the 3 talks we thought would be most relevant. These talks are as follows:

- "Detecting Complex Events in ROS Data" - Benji Barash of Roboto AI
    - [Vimeo Link](https://vimeo.com/1136157744)
- "Open-Source Robotics Observability at Scale!" - Guillaume Beuzebec of Canonical
    - [Vimeo Link](https://vimeo.com/1136163245)
- "Simplifying Diagnostics: A Ready to Use Robot Webserver" - Hilary Luo of Clearpath Robotics by Rockwell Automation
    - [Vimeo Link](https://vimeo.com/1136204915)

### Detecting Complex Events in ROS Data - Benji Barash, Roboto AI

This talk sounded very similar to a talk already given directly to this group (see the [meeting in question](/meetings/#2025-06-16-guest-expert-benji-barash-from-roboto-ai)). We decided to skip reviewing this talk in-depth due to the similarity to the previous talk.

Despite not reviewing the talk in this instance, we can still provide a summary of the talk. In short, robots generate enormous volumes of data that generally get kept, but not analysed or used. Roboto AI created a platform to upload and analyse robotics data, including the ability to highlight events in robot data and search for similar events; scan camera feeds automatically using Vision Language Models; and summarising logs using AI tools.

### Open-Source Robotics Observability at Scale — Guillaume Beuzebec, Canonical

Guillaume from Canonical presented the **Canonical Observability Stack (COS)**, which is an open-source platform that orchestrates well-known tools, such as Grafana, Prometheus, and Loki. The COS has been extended with other services such as a ROS 2 bag file server, a registration server to automatically enrol robots, and Foxglove Studio integration for visualising robotics data. These tools can be deployed with a single command via Juju and Terraform, and users can write their own tools to add to the stack.

The stack relies on a lightweight agent installed on the robot that will collect and push data to the platform.

The group found the talk so relevant that we invited Guillaume to give a more in-depth, technical talk directly to us in January 2026. The talk is available [here](/meetings/#2026-01-28-guest-expert-mirko-from-canonical). We also proceeded to have two try-out sessions for COS: a [truncated initial try-out](https://youtu.be/BgIjijddgLM), and a [longer try-out](https://youtu.be/OfHzbO1mFd0) with working robot telemetry and logs.

### Simplifying Diagnostics: A Ready-to-Use Robot Web Server — Hilary Luo, ClearPath Robotics

Hilary presented a plugin to Cockpit Project that brings ROS 2 diagnostics into a browser-based web server running directly on the robot. It is intended for individual robots in development or prototyping, with the goal of making diagnostics accessible to non-technical users.

The group found this approach to be complementary to the Logging & Observability tools we have been researching, although our focus has been more on fleet-level tools. It makes the important point that most tools are aimed at developers, but for robotics to scale, non-technical users need to have better access to diagnostic information.

## What We Took Away

We made some observations based on the talks and how they fit with our ongoing research.

1. **Make versus Buy decision**: service designers tend to offer either:
    1. End-to-end services: a complete system offered as a paid service to a customer, with tools such as log analysis and AI insights available. Roboto AI is an example of this.
    2. Developer tooling: provides free tools for developers to launch their own observability systems, such as Foxglove Studio, which collect data from their robots. The Canonical Observability Stack is an example of this.

Hence, developers can choose between paying for a pre-built service or choosing to build their own with increasingly better tools available.

2. **Technical vs Non-Technical Audience**: Most tools seem to be aimed at engineers who are actively developing their robots. However, as robots become more mature and scale up, non-technical users need to be able to monitor and perform basic debugging for robots. We are starting to see some tools offer high-level interfaces for non-technical users, such as the robot web server presented by Hilary Luo.

## What This Means for the Guide

The group aims to produce a community guide on Logging & Observability. After reviewing the most relevant talks and discussing our own related experiences, we are likely to include the following:

- Practical patterns and habits
    - Developers are familiar with the concept of adding a test when fixing a bug to prevent the bug occurring again. We will recommend also creating a diagnostic that can be reported by the robot and give alerts using observability tools. This has worked for one of our members well in the past, and complements the diagnostics server presented by Hilary Luo, where technical and non-technical audiences can see a clear dashboard with indications of working components and errors.
- Design considerations for a Logging & Observability system, such as:
    - Suggestions for data to gather from robots
    - Features that should be available in Logging & Observability tools
    - Designing with the assumption that network connections are unreliable
- The distinction between vendor-provided tools and building your own stack; in short, the make vs buy trade-offs discussed in our take-aways.

We are continuing our research, including inviting guests who have built and operated large robot fleets. If you have experience you would like to share, or feedback based on this post, please [get in touch](/meetings).

## Talk Links

The meetings in which we reviewed the talks are available below:

- [2025-11-19](/meetings#2025-11-19-roscon-review)
- [2026-01-14](/meetings#2026-01-14-roscon-review-continued)
