---
sidebar_position: 1
---

# Logging and Observability Guide

This guide collects lessons from the Cloud Robotics Working Group's Logging and
Observability sessions. A useful system does not just send logs to the cloud; it
has to decide what to collect, where to process it, when to upload it, how to
index it for later searching, and which person is expected to act on it.

Robots produce several different kinds of evidence: logs, metrics, diagnostics,
and raw or processed sensor data, to name a few. The most useful systems combine
these layers rather than treating one data type as sufficient on its own.

:::info Guide Structure

This guide exists to create a scaffolding for the various difficulties of
Logging and Observability. If you want to implement L&O for yourself, these are
the categories that we recommend you think through.

:::

<!-- How to use this guide: check your assumptions, review your design -->
<!-- Each section will review questions you should ask yourself and which tools are already available to avoid rebuilding yourself -->

## Practical Principles

- Start with the user and decision: an operator, support engineer, developer,
  customer, and fleet administrator need different views of the same robot.
- Separate live monitoring from post-incident analysis. They share data, but
  they have different latency, cost, and usability requirements.
- Treat bandwidth and storage as design constraints from the start. Continuous
  full-fidelity recording is useful, but rarely free.
- Prefer tiered collection: heartbeat and diagnostics all the time, richer logs
  when useful, and heavy recordings around events or on request.
- Preserve context with every recording: robot identity, software version,
  hardware version, configuration, location, task, schema, and trigger reason.
- Make data queryable. A recording that cannot be found, filtered, or linked to
  an incident is mostly a storage cost.
- Make alerts actionable. Alerts that do not tell someone what to do, or who
  should do it, quickly become noise.
- Be careful with AI-assisted analysis. LLMs and MCP tools can make robot data
  easier to inspect, but they should be grounded in deterministic tools,
  explicit metadata, and reviewable outputs.

## Sections

- [Stack Anatomy](/docs/guides/logging-and-observability/stack-anatomy)
- [Data Types](/docs/guides/logging-and-observability/data-types)
- [Live Data](/docs/guides/logging-and-observability/live-data)
- [Recorded Data](/docs/guides/logging-and-observability/recorded-data)
- [Visualisation and Feedback](/docs/guides/logging-and-observability/visualisation-feedback)
- [Open Questions](/docs/guides/logging-and-observability/open-questions)

:::note

This guide is still evolving. The current version is based on working group
discussion and transcripts from sessions on Roboto AI, Heex, Bagel, ROSBag MCP
Server, AMP, INSAION, Canonical Observability Stack, Transitive Robotics, and
related group reviews.

:::
