---
sidebar_position: 3
---

# Data Types

A robot observability system should not collapse every signal into "logs".
Different data types answer different questions and need different storage,
query, and visualisation approaches.

## Sensor Data

Sensor data may include camera streams, lidar, depth, audio, joint states,
poses, maps, and other robot-specific signals. For each signal, decide whether
it needs live visibility, sampled upload, feature extraction, or full recording
for later analysis.

Sensor data is often the highest-value evidence and the highest-cost data. A
system should decide:

- Which signals need to be visible live.
- Which signals need full-fidelity recording.
- Which signals can be downsampled.
- Which signals can be reduced to features, such as nearest lidar point,
  detected object classes, or confidence scores.
- Which signals should stay on the robot unless an event occurs.

Camera and lidar streams can quickly dominate bandwidth and storage. A common
pattern is to keep a rolling buffer locally and upload a clip only when an
event, user, or alert requests it.

## Logs

Logs should be treated as records of meaningful events, errors, warnings, state
changes, and developer-defined context. Useful logs are different from data
that would be better represented as metrics, topics, traces, or recorded
datasets.

Good logs:

- Describe what happened and why the software believed it mattered.
- Include stable identifiers such as robot ID, task ID, component, and request
  or event ID.
- Use levels consistently.
- Avoid becoming a dumping ground for high-rate state.
- Can be correlated with metrics, events, deployments, and recordings.

Several sessions warned against putting metrics in logs. If a value is meant to
be plotted, aggregated, alerted on, or sampled regularly, it is usually a
metric, diagnostic value, or topic rather than a log line.

## Metrics

Metrics are numeric values over time, such as CPU usage, memory, battery state,
network quality, queue sizes, error counts, task duration, and fleet-level
health indicators.

Useful metrics include:

- System metrics: CPU, memory, disk, temperature, process health, and network
  quality.
- Robot metrics: battery state, localisation quality, motor status, safety
  state, navigation progress, and task duration.
- Pipeline metrics: queue lengths, dropped messages, upload backlog, recording
  size, and indexing delay.
- Fleet metrics: number of healthy robots, robots offline, robots in error,
  unresolved incidents, and software-version distribution.

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

- Start and end time.
- Robot and site identity.
- Trigger source.
- Severity or confidence.
- Linked logs, metrics, recordings, and annotations.
- Resolution status where applicable.
