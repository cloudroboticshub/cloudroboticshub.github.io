---
sidebar_position: 4
---

# Live Data

Live data supports monitoring, alerting, support, and operational
decision-making while a robot is running.

## Data Transfer

"Obviously MQTT" - Christian Fritz, 2026

<!-- TODO: fill out this section -->

## Querying

Live querying helps users find the current or recent state of a robot, fleet,
site, or task. This may include log search, metric queries, topic inspection,
filtering by robot identity, and drilling down from fleet views to individual
machines.

Useful live queries include:

- Which robots are online, offline, degraded, or in fault?
- Which robots are running a particular software or hardware version?
- Which robots have upload backlogs or low disk space?
- Which robots are producing repeated warnings?
- Which site, customer, task, or route is associated with the failures?
- What changed immediately before the issue started?

Live query tools should make it easy to move from a fleet-wide view to a single
robot, then from a single robot to a time range, event, or recording.

## Anomaly Detection

Anomaly detection covers how abnormal behaviour is detected and how the system
decides what context to preserve.

Anomaly detection should be treated as a trigger and triage mechanism, not as a
replacement for observability. It can decide when to capture more data, create
an event, open an alert, or ask a human to review something.

Common triggers include:

- A metric crossing a threshold.
- A diagnostic status changing to warning or error.
- A robot entering an unexpected state.
- A perception confidence drop.
- A large acceleration, deceleration, collision, near miss, or safety stop.
- A task taking too long or repeatedly failing.
- A user or operator marking an event as interesting.
- An offline analysis job finding a pattern in uploaded data.

The group repeatedly discussed rolling buffers as a practical way to make
anomaly detection useful. The robot can keep recent high-rate data locally, then
upload the window before and after an event. This captures context without
requiring constant full-fidelity upload.

Cloud-triggered capture can also be useful: a cloud-side alert can ask the robot
to preserve or upload heavier local data. This needs careful design because the
robot may be offline, bandwidth-limited, or already under stress.

AI-assisted anomaly detection should be bounded. LLMs can help summarise,
query, and route investigations, but deterministic checks, typed tools, and
reviewable evidence should remain the source of truth.

## Health Monitoring

Health monitoring shows operators and engineers whether the robot, fleet,
network, and cloud services are working as expected. Topics and references from
the sessions include:

- INSAION
- Cockpit-style tools
- Lessons from ROSCon talks and working group reviews

Health monitoring is usually the live-data baseline. It should answer:

- Is the robot alive?
- Is it connected?
- Is it safe?
- Is it performing its task?
- Are core subsystems healthy?
- Is the observability pipeline itself working?

ROS diagnostics are a natural source of robot health. They can be bridged into
fleet dashboards or cloud monitoring systems, and they are understandable to
developers already familiar with ROS. They can also be made visible to
operators and customers, but only if the UI translates diagnostic state into
plain operational meaning.

The monitoring stack should also monitor itself. If logs, metrics, or
recordings are not arriving, the system should show whether the robot is
offline, the upload queue is blocked, the backend is failing, or the indexer is
behind.

## Alerts

Alerts should be reserved for conditions that need action. The AMP discussion
was especially clear on this point: red alerts that nobody can resolve become
background noise.

Good alerts include:

- What happened.
- Which robot, site, task, and customer are affected.
- Severity and confidence.
- The suggested owner: operator, support, developer, or administrator.
- Immediate action, if any.
- Links to relevant dashboards, logs, metrics, events, and recordings.
- Whether the same alert is already open elsewhere in the fleet.

Alert routing should avoid sending every issue to every person. Operators need
operational next steps; developers need enough context to reproduce or debug;
support staff need customer-facing status and history.
