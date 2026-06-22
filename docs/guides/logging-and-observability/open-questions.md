---
sidebar_position: 7
---

# Open Questions

As the guide develops, the working group should decide which areas need deeper
examples, external references, or review from practitioners.

The transcript review filled in many practical themes, but several topics still
need stronger real-world examples.

## Capture Policy

How should teams decide between:

- Recording triggers
- Constant recording
- Rolling buffers
- User-triggered capture
- Alert-triggered capture
- Cloud-triggered capture
- Manual retrieval from the robot

The guide would benefit from concrete decision tables for different fleet
sizes, bandwidth limits, and safety requirements.

## Retention Policy

What retention policies work in practice for:

- Logs
- Metrics
- ROS bags and MCAP files
- Video
- Customer-sensitive data
- Training datasets
- Golden regression cases

The tradeoff between storage cost, privacy, and future debugging value is still
highly context-dependent.

## Metadata Standards

The sessions repeatedly showed the importance of metadata, but the community
would benefit from examples of a minimum metadata schema for robot recordings.

Open questions:

- What fields should every recording include?
- How should software, firmware, hardware, map, calibration, and schema
  versions be represented?
- How should trigger reason and event labels be standardised?
- Can this be aligned with ROS bag or MCAP metadata conventions?

## AI-Assisted Analysis

LLMs, MCP tools, semantic search, and similarity search are promising, but the
best boundaries are still emerging.

Questions to answer:

- Which analysis tasks should be deterministic tools rather than LLM reasoning?
- How should users validate answers?
- What permissions should MCP tools have?
- How should systems prevent an AI assistant from taking unsafe actions?
- What benchmark tasks would show that AI-assisted analysis is genuinely useful?

## Operator-Facing UX

Many tools are built for developers. The guide still needs stronger examples of
interfaces that work for operators, customers, and support staff.

Questions to answer:

- What should a non-technical user see first?
- How much detail should be hidden by default?
- What makes an alert actionable?
- How should a system preserve previous resolutions so support teams can reuse
  them?

## Reference Architectures

The guide should eventually include example architectures for:

- Small development teams.
- A self-hosted open-source stack.
- A managed observability platform.
- A mixed stack that uses existing fleet management plus separate data
  analytics.
- Robots with unreliable or low-bandwidth networks.
- Fleets that need strict customer access control.
