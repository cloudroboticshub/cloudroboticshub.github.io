---
sidebar_position: 6
---

# Visualisation and Feedback

Visualisation is how data is presented to the people who need to act on it. The
best visualisation depends on the user, the robot, the task, and the urgency of
the situation.

The most important design question is: who is looking, and what decision should
they make? A developer diagnosing a failed planner needs different information
from a customer asking whether operations can continue.

## Timelines

Timelines can show events, alerts, metrics, recordings, deployments, and user
actions together. They help incident review and root-cause analysis by putting
related evidence in time order.

A good timeline should combine:

- Alerts.
- Logs and notable events.
- Metric changes.
- Robot state transitions.
- User actions.
- Deployments and configuration changes.
- Recording windows.
- Annotations and resolution notes.

Timelines are especially useful because they turn many independent data sources
into a story. They help reviewers see whether a software rollout, network
dropout, operator action, or environmental event happened before the failure.

## Maps

Maps can help teams understand where robots are, where events happened, and how
behaviour relates to a physical environment. This may include site maps, robot
paths, heatmaps, geofencing, and region-specific alerts.

Maps are useful for:

- Locating failed tasks.
- Identifying repeated problem areas.
- Showing robot paths and stops.
- Linking alerts to physical regions.
- Understanding site-specific network or safety issues.
- Reviewing navigation and localisation problems.

For fleets, map views should support filtering by time, robot, task, alert, and
software version.

## Alerts

Alerts should be actionable and routed to the right audience. This section
should discuss severity, deduplication, alert fatigue, escalation, and whether
the alert includes enough context to resolve the issue.

An alert view should show:

- What happened.
- Why the system believes it matters.
- Who should respond.
- What action is recommended.
- What data was captured.
- Whether similar alerts are open.
- Whether this alert is new, repeated, acknowledged, or resolved.

Alert history is also valuable. Support teams need to know whether an issue has
been seen before and how it was resolved, especially when similar symptoms occur
across a fleet.

## User Technical Level

Different users need different views. The system should distinguish between
operator, customer, developer, support, and administrator needs, and present the
right level of detail to each group.

Suggested views:

- **Operator:** simple status, next action, safety state, task progress, and
  whether to intervene.
- **Customer:** operational status, impact, evidence that support is working on
  the issue, and understandable resolution notes.
- **Support engineer:** incident history, alert context, logs, recent changes,
  and enough data to triage or escalate.
- **Developer:** raw logs, metrics, recordings, schemas, versions, traces,
  replay links, and reproduction context.
- **Fleet administrator:** fleet health, software rollout state, access
  control, retention policy, and backend health.

Avoid exposing raw complexity by default. Make deeper data available, but let
users start from a view that matches their job.

## Search and Review

Search is a visualisation feature as much as a backend feature. Interfaces
should let users search by:

- Robot.
- Fleet, site, or customer.
- Time range.
- Event type.
- Software or hardware version.
- Task, route, or map region.
- Topic, signal, or schema.
- Similar behaviour or similar trajectory.

The best review tools make it easy to pivot: from an alert to a recording, from
a recording to a similar event, from a similar event to a software version, and
from a software version to a fleet-wide impact view.

## Tool Integration

Robot teams often already use tools such as Foxglove, RViz, Grafana, Prometheus,
Loki, object storage, data warehouses, or custom fleet dashboards. A good
observability system should integrate with existing tools rather than forcing
every user into one interface.

Useful integration patterns include:

- Links from dashboards to raw recordings.
- Links from alerts to visualisation tools.
- Export of selected recordings for offline debugging.
- APIs or SDKs for custom analysis jobs.
- Web views that can be shared with support or customers under controlled
  access.
