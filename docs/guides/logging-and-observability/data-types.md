---
sidebar_position: 3
---

import {
  ChecklistItem,
  ChecklistProgress,
  ChecklistProvider,
  ChecklistReset,
} from '@site/src/components/CheckList';

# Data Types

A robot observability system should not collapse every signal into "logs".
Different data types answer different questions and need different storage,
query, and visualisation approaches.

We define these types of data:

- [**Sensor Data**](#sensor-data): raw or processed data collected from the
  robot.
- [**Logs**](#logs): text records collected during the robot's operation.
- [**Metrics**](#metrics): numeric values collected over time, such as CPU usage.
- [**Traces**](#traces): a path through a system or pipeline.
- [**Events**](#events): named moments or time ranges that matter.

## Sensor Data

Sensor data may include camera streams, lidar, depth, audio, joint states,
poses, maps, and other robot-specific signals. For each signal, decide whether
it needs live visibility, sampled upload, feature extraction, or full recording
for later analysis.

Sensor data is often the highest-value evidence and the highest-cost data. A
system should decide:

<ChecklistProvider id="sensor-data-decisions">
  <ChecklistProgress />
  <ChecklistItem id="signals">
    How signals will be collected.
  </ChecklistItem>
  <ChecklistItem id="live-visibility">
    Which signals need to be visible live.
  </ChecklistItem>
  <ChecklistItem id="full-fidelity-recording">
    Which signals need full-fidelity recording.
  </ChecklistItem>
  <ChecklistItem id="downsampling">
    Which signals can be downsampled.
  </ChecklistItem>
  <ChecklistItem id="feature-extraction">
    Which signals can be reduced to features, such as nearest lidar point,
    detected object classes, or confidence scores.
  </ChecklistItem>
  <ChecklistItem id="event-only-upload">
    Which signals should stay on the robot unless an event occurs.
  </ChecklistItem>
  <ChecklistReset />
</ChecklistProvider>

Camera and lidar streams can quickly dominate bandwidth and storage. A common
pattern is to keep a rolling buffer locally and upload a clip only when an
event, user, or alert requests it.

## Logs

Logs should be treated as records of meaningful events, errors, warnings, state
changes, and developer-defined context. Useful logs are different from data
that would be better represented as metrics, topics, traces, or recorded
datasets.

Good logs:

<ChecklistProvider id="good-logs">
  <ChecklistProgress />
  <ChecklistItem id="meaningful-description">
    Describe what happened and why the software believed it mattered.
  </ChecklistItem>
  <ChecklistItem id="stable-identifiers">
    Include stable identifiers such as robot ID, task ID, component, and request
    or event ID.
  </ChecklistItem>
  <ChecklistItem id="consistent-levels">
    Provide guidance on which levels should be used for particular incidents so
    that levels can be consistent.
  </ChecklistItem>
  <ChecklistItem id="avoid-high-rate-state">
    Avoid becoming a dumping ground for high-rate state.
  </ChecklistItem>
  <ChecklistItem id="correlation">
    Can be correlated with metrics, events, deployments, and recordings.
  </ChecklistItem>
  <ChecklistReset />
</ChecklistProvider>

Several sessions warned against putting metrics in logs. If a value is meant to
be plotted, aggregated, alerted on, or sampled regularly, it is usually a
metric, diagnostic value, or topic rather than a log line.

## Metrics

Metrics are numeric values over time, such as CPU usage, memory, battery state,
network quality, queue sizes, error counts, task duration, and fleet-level
health indicators.

Useful metrics include:

<ChecklistProvider id="useful-metrics">
  <ChecklistProgress />
  <ChecklistItem id="system-metrics">
    System metrics: CPU, memory, disk, temperature, process health, and network
    quality.
  </ChecklistItem>
  <ChecklistItem id="robot-metrics">
    Robot metrics: battery state, localisation quality, motor status, safety
    state, navigation progress, and task duration.
  </ChecklistItem>
  <ChecklistItem id="pipeline-metrics">
    Pipeline metrics: queue lengths, dropped messages, upload backlog, recording
    size, and indexing delay.
  </ChecklistItem>
  <ChecklistItem id="fleet-metrics">
    Fleet metrics: number of healthy robots, robots offline, robots in error,
    unresolved incidents, and software-version distribution.
  </ChecklistItem>
  <ChecklistItem id="dashboard">
    Identify the signals needed across the whole stack for dashboards and
    alerts. These will be the highest priority signals to collect.
  </ChecklistItem>
  <ChecklistReset />
</ChecklistProvider>

Metrics are useful because they are cheap to transmit and easy to aggregate.
They are usually the right data type for dashboards and alerts.

## Traces

Traces describe a path through a distributed system or software pipeline. They
are useful when an incident depends on ordering, latency, or cross-component
behaviour.

For robotics, traces may connect a command, planner decision, perception
result, control action, cloud request, upload job, or user operation. They are
especially useful when the question is "where did time go?" or "which component
caused this behaviour?"

## Events

Events are named moments or time ranges that matter. They may come from robot
software, a user action, an alert, an offline analysis job, or an annotation in
a review tool.

Events are useful because they create handles for search and review. Instead of
asking someone to inspect hours of data, the system can say: this robot, this
time range, this task, this trigger, these logs, these metrics, and this
recording belong together.

Good event records should include:

<ChecklistProvider id="good-event-records">
  <ChecklistProgress />
  <ChecklistItem id="time-range">Start and end time.</ChecklistItem>
  <ChecklistItem id="identity">Robot and site identity.</ChecklistItem>
  <ChecklistItem id="trigger-source">Trigger source.</ChecklistItem>
  <ChecklistItem id="severity">Severity or confidence.</ChecklistItem>
  <ChecklistItem id="linked-data">
    Linked logs, metrics, recordings, and annotations.
  </ChecklistItem>
  <ChecklistItem id="resolution-status">
    Resolution status where applicable.
  </ChecklistItem>
  <ChecklistReset />
</ChecklistProvider>
