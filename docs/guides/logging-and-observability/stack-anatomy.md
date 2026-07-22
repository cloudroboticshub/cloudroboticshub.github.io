---
sidebar_position: 2
---

# Stack Anatomy

A logging and observability stack for robots usually spans four places:

- The robot, where data is produced and sometimes buffered or reduced.
- The network, where bandwidth, latency, outages, and security shape what can
  be sent.
- The cloud or fleet backend, where data is stored, indexed, queried, and
  linked to robots and users.
- The UI and automation layer, where humans and systems decide what to do next.

## Robot Agent

The robot-side agent is the foundation of the stack. It should collect basic
logs, health signals, diagnostics, and selected robot data. Some filtering and
transformation of data will occur on the robot to avoid capturing and sending
too much for higher layers of the stack.

Common robot-side responsibilities include:

- Publishing a low-bandwidth heartbeat so the fleet can tell whether the robot
  is alive and reachable.
- Exporting ROS diagnostics, system metrics, and application-level health
  indicators.
- Buffering logs and recordings locally when the network is unavailable.
- Running rolling buffers for heavy data such as camera streams, lidar, maps,
  and ROS topics.
- Reducing data before upload through filtering, downsampling, compression, or
  extracting compact features.
- Uploading urgent data first after reconnection, rather than blindly uploading
  the oldest data first.
- Attaching metadata such as robot identity, software version, hardware
  version, configuration, task, and trigger reason.

The agent must fail safely. Observability is meant to help the robot, not become
another thing that can take it down. In practice this means bounded CPU, memory,
storage, bandwidth, and retry behaviour.

:::note Diagnostics are a Developer-Level Responsibility

Engineers should consider diagnostics to be a tool similar to unit tests for
debugging and preventing regression. For example, when fixing an issue, a
diagnostic should be created as well as unit tests to spot whether the issue
happens again.

:::

## Data Transfer

Data transfer should be designed in tiers:

- **Always-on low bandwidth:** heartbeat, status, and diagnostics.
- **Regular operational data:** logs, summaries, select data topics, and dashboard
  values.
- **Triggered heavy data:** ROS bags, MCAP files, video clips, maps, and other
  full-fidelity recordings around an event. Events may be manually triggered by a user or automatically triggered based on processed data.
- **Manual or support-driven data:** data captured because an operator,
  developer, or customer support person needs deeper evidence.

This tiered model helps a system keep a useful live view of the fleet while
reserving expensive uploads for situations where the extra detail has value.

Transfer design should include:

- Local queuing and resumable uploads.
- Priority ordering after outages.
- Rate limits and backpressure.
- Compression and chunking.
- A distinction between streaming data and file upload.
- A way to know whether a file or event was successfully uploaded and indexed.
- Clear behaviour for robots with intermittent or very low bandwidth links.

## Cloud Hosting

There are two broad hosting models.

- **Self-hosted stack:** running services directly, such as a Canonical-style
  observability stack, gives teams more control but also more operational
  responsibility.
- **Managed service:** paying for a service can reduce maintenance and speed up
  adoption, but may constrain architecture, data ownership, or custom workflows.

Open stacks such as Grafana, Prometheus, Loki, Alertmanager, object storage, and
ROS/MCAP tooling can be composed into powerful systems. The advantage is
control: teams can tune storage, network, retention, dashboards, and access
rules. The tradeoff is that somebody must operate the stack.

Managed platforms such as those discussed in the working group provide more of
the data model, ingest path, dashboards, search, and fleet integration out of
the box. The tradeoff is that teams must understand where the platform's model
fits or conflicts with their own architecture.

For either model, the backend needs:

- Robot enrolment and identity.
- Authentication and authorisation.
- Time-series storage for metrics.
- Log aggregation and search.
- Object storage for large recordings.
- Metadata storage and indexing.
- Alert routing.
- APIs for automation, analysis, and user interfaces.

## Web and UI

The UI turns stored data into action. It should support:

- Fleet overview: which robots are healthy, degraded, offline, or actively
  failing.
- Robot detail: logs, metrics, diagnostics, current task, recent events, and
  recent recordings.
- Incident review: a timeline that connects alerts, deployments, user actions,
  logs, metrics, and recordings.
- Data search: filters over robot, time, software version, hardware version,
  site, task, event label, and trigger reason.
- Visualisation: maps, camera clips, plots, ROS topics, Foxglove/RViz-style
  views, and custom dashboards.
- Support workflows: opening a case, attaching evidence, escalating to
  developers, and recording the resolution.

Access control should cover:

- **Role-based access:** different views and permissions for operators,
  developers, support staff, customers, and administrators.
- **Timed access:** temporary access for debugging, customer support, incident
  response, or third-party review.

Avoid designing only for expert developers. One of the strongest lessons from
the sessions was that non-technical operators and customers need clear status,
plain explanations, and actionable next steps, while developers need deeper
logs, recordings, and reproduction context.

Visualisation topics that are specific enough to deserve their own treatment
are expanded in [Visualisation and Feedback](/docs/guides/logging-and-observability/visualisation-feedback).
