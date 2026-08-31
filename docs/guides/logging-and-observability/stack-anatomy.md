---
sidebar_position: 2
---

import {
  ChecklistItem,
  ChecklistProgress,
  ChecklistProvider,
  ChecklistReset,
} from '@site/src/components/CheckList';

# Stack Anatomy

A logging and observability stack for robots usually spans four places:

- The robot, where the raw data is produced. We expect that some form of [data
  collection agent](#data-collection-agent-collector) will run on the robot to
  buffer, filter, and perform early transformations on raw data, ready for
  upload.
- The [network](#data-transfer), which heavily influences the data that should
  be sent due to bandwidth, latency, and security restrictions.
- The [remote backend](#remote-backend), where data is stored, indexed, and
  queried.
- The [UI and automation layer](#web-and-ui), where humans and systems decide
  what to do next.

## Data Collection Agent (Collector)

The collector is the foundation of the stack. It should collect basic
logs, health signals, diagnostics, and selected robot data. Some filtering and
transformation of data will occur on the robot to avoid capturing and sending
too much for higher layers of the stack.

Common robot-side responsibilities include:

<ChecklistProvider id="collector-responsibilities">
  <ChecklistProgress />

  <ChecklistItem id="heartbeat">
    Publishing a low-bandwidth heartbeat so the fleet can tell whether the robot
    is alive and reachable.
  </ChecklistItem>
  <ChecklistItem id="diagnostics">
    Exporting ROS diagnostics, system metrics, and application-level health
    indicators.
  </ChecklistItem>
  <ChecklistItem id="buffering">
    Buffering logs and recordings locally when the network is unavailable.
  </ChecklistItem>
  <ChecklistItem id="rolling-buffer">
    Running rolling buffers for heavy data such as camera streams, lidar, maps,
    and ROS topics.
  </ChecklistItem>
  <ChecklistItem id="downsampling">
    Reducing data before upload through filtering, downsampling, compression, or
    extracting compact features.
  </ChecklistItem>
  <ChecklistItem id="priority">
    Uploading urgent data first after reconnection, rather than blindly
    uploading the oldest data first.
  </ChecklistItem>
  <ChecklistItem id="metadata">
    Attaching metadata such as robot identity, software version, hardware
    version, configuration, task, and trigger reason.
  </ChecklistItem>

  <ChecklistReset />
</ChecklistProvider>

The collector must fail safely. Observability is meant to help the robot, not become
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
- **Regular operational data:** logs, summaries, select data topics, and
  dashboard values.
- **Triggered heavy data:** ROS bags, MCAP files, video clips, maps, and other
  full-fidelity recordings around an event. Events may be manually triggered by
  a user or automatically triggered based on processed data.
- **Manual or support-driven data:** data captured because an operator,
  developer, or customer support person needs deeper evidence.

This tiered model helps a system keep a useful live view of the fleet while
reserving expensive uploads for situations where the extra detail has value.

Data transfer design should include:

<ChecklistProvider id="data-transfer">
  <ChecklistProgress />
  <ChecklistItem id="resumable-uploads">
    Local queuing and resumable uploads.
  </ChecklistItem>
  <ChecklistItem id="priority-ordering">
    Priority ordering after outages.
  </ChecklistItem>
  <ChecklistItem id="backpressure">
    Rate limits and backpressure.
  </ChecklistItem>
  <ChecklistItem id="chunking">
    Compression and chunking.
  </ChecklistItem>
  <ChecklistItem id="streaming-or-file">
    A distinction between streaming data and file upload.
  </ChecklistItem>
  <ChecklistItem id="success">
    A way to know whether a file or event was successfully uploaded and indexed.
  </ChecklistItem>
  <ChecklistItem id="low-bandwidth">
    Clear behaviour for robots with intermittent or very low bandwidth links.
  </ChecklistItem>
  <ChecklistReset />
</ChecklistProvider>

## Remote Backend

The remote backend is the location where all of the robot data can be sent and
collected together. This is usually, but not necessarily, hosted in the cloud.

The remote backend not only stores the data, but makes it available to other
services, such as security, indexing, and viewing the collected data. It is
where the majority of the work is done for observing your robots.

:::tip Cloud Hosting Models

If you are hosting in the cloud, there are two main options for hosting your
services:

- **Self-hosted stack:** choose and run your own services, such as Blah and Foo. This gives more control, but also more operational responsibility.
- **Managed service:** paying for a service can reduce maintenance and speed up
  adoption, but may constrain architecture, data ownership, or custom workflows.

You can also mix and match these for a hybrid model depending on your requirements.

:::

These are features to be aware of when selecting remote backend features. Many
of these include examples from common cloud providers to show existing services
to illustrate what's possible.

<ChecklistProvider id="backend-services">
  <ChecklistProgress />
  <ChecklistItem id="enrolment">
    Robot enrolment and identity (QWS IoT, Azure IoT Hub)
  </ChecklistItem>
  <ChecklistItem id="auth">
    Authentication and authorisation (AWS IAM, Microsoft Entra ID, Keycloak)
  </ChecklistItem>
  <ChecklistItem id="time-series">
    Time-series storage for metrics (InfluxDB, Prometheus, TimescaleDB)
  </ChecklistItem>
  <ChecklistItem id="log-agg">
    Log aggregation and search (Elasticsearch, Grafana Loki)
  </ChecklistItem>
  <ChecklistItem id="object-storage">
    Object storage for large recordings (Amazon S3, CloudFlare)
  </ChecklistItem>
  <ChecklistItem id="metadata">
    Metadata storage and indexing (PostgreSQL, Elasticsearch, DynamoDB)
  </ChecklistItem>
  <ChecklistItem id="alerts">
    Alert routing (Grafana Alerting, Prometheus Alertmanager, Amazon SNS)
  </ChecklistItem>
  <ChecklistItem id="apis">
    APIs for automation, analysis, and user interfaces
  </ChecklistItem>
  
  <ChecklistReset />
</ChecklistProvider>

## Web and UI

The UI turns stored data into action. It should support:

<ChecklistProvider id="web-and-ui">
  <ChecklistProgress />
  <ChecklistItem id="overview">
    Fleet overview: which robots are healthy, degraded, offline, or actively
    failing.
  </ChecklistItem>
  <ChecklistItem id="incident-review">
    Incident review: a timeline that connects alerts, deployments, user actions,
    logs, metrics, and recordings.
  </ChecklistItem>
  <ChecklistItem id="data-search">
    Data search: filters over robot, time, software version, hardware version,
    site, task, event label, and trigger reason.
  </ChecklistItem>
  <ChecklistItem id="visualisation">
    Visualisation: maps, camera clips, plots, ROS topics, Foxglove/RViz-style
    views, and custom dashboards.
  </ChecklistItem>
  <ChecklistItem id="support">
    Support workflows: opening a case, attaching evidence, escalating to
    developers, and recording the resolution.
  </ChecklistItem>

  <ChecklistReset />
</ChecklistProvider>

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
