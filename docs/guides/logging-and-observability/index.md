---
sidebar_position: 1
---

<!-- I am a person looking to build their own L&O stack. -->
<!-- Or, I'm trying to buy one. -->
<!-- This guide should tell me what to look out for. -->

# Logging and Observability Guide

This guide collects lessons from the Cloud Robotics Working Group's Logging and
Observability sessions. Whether you're building software yourself or buying an
existing solution, this guide helps you work through the important decisions and
requirements you might otherwise overlook.

## Foreword

A useful Logging and Observability (L&O) system does not just send logs to the
cloud; it has to decide **what** to collect, **where** to process it, and
**when** to upload it. The best L&O systems also index and present the data in a
useful way and gives some guidance on which person is expected to act on it, and
how.

Robots produce a vast amount of data, which can be broken data into a few [data
types](./data-types.md): logs, metrics, diagnostics, and raw or processed sensor
data, to name a few. The most useful systems _combine_ these layers rather than
treating one data type as sufficient on its own.

:::info Guide Structure

This guide exists to create a scaffolding for the various difficulties of
Logging and Observability. If you want to implement L&O for yourself, these are
the categories that we recommend you think through.

:::

:::tip Checklist Persistence

The checklists on the following pages allow you to mark off each item as you
consider it. Your progress is saved in your browser, so your selections will be
restored when you return to the guide.

:::

## Key Considerations

- **Start with the End User**: design your system from the end user backwards.
  Consider the different needs of operators, support engineers, developers,
  customers, and fleet administrators.
- **Live vs Post-Incident**: Separate live monitoring from post-incident
  analysis. They share data, but they have different latency, cost, and
  usability requirements.
- **Bandwidth and Storage Constraints**: treat bandwidth and storage as design
  constraints from the start. Continuous high-fidelity recording can be
  valuable, but the volume of data generated can quickly become impractical to
  store, transfer, or process.
- **Prefer Tiered Collection**: collect heartbeat and diagnostics all the time,
  richer data when useful, and high-fidelity recordings around events or upon
  user request.
- **Data Needs Metadata**: metadata provides context for the data. Record robot
  identity, software/hardware versions, configuration etc should be collected.
- **Make Alerts Actionable**: Alerts that do not tell someone what to do, or who
  should do it, quickly become noise and get ignored.
- **Caution with AI**: Be careful with AI-assisted analysis. LLMs and MCP tools
  can make robot data easier to inspect, but they should be grounded in
  deterministic tools, explicit metadata, and reviewable outputs.

## Sections

- [Stack Anatomy](/docs/guides/logging-and-observability/stack-anatomy)
- [Data Types](/docs/guides/logging-and-observability/data-types)
- [Live Data](/docs/guides/logging-and-observability/live-data)
- [Recorded Data](/docs/guides/logging-and-observability/recorded-data)
- [Visualisation and
  Feedback](/docs/guides/logging-and-observability/visualisation-feedback)
- [Open Questions](/docs/guides/logging-and-observability/open-questions)

:::note Evolving Document

This guide is still evolving. The current version is based on working group
discussion and transcripts from sessions on Roboto AI, Heex, Bagel, ROSBag MCP
Server, AMP, INSAION, Canonical Observability Stack, Transitive Robotics, and
related group reviews.

:::
