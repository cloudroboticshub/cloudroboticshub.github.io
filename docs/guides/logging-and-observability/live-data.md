---
sidebar_position: 4
---

# Live Data

Live data supports monitoring, alerting, support, and operational
decision-making while a robot is running.

## Data Transfer

Live data should use a lightweight, persistent channel designed for small,
continuous updates. MQTT is a strong default for this pattern: its
publish/subscribe model lets robots publish once while dashboards, support
tools, and fleet services subscribe to one robot, a group, or the whole fleet.
The same pattern can be implemented with another transport when deployment
constraints require it; the important properties are low overhead, selective
delivery, and reliable reconnection.

The robot should initiate an outbound connection to a broker or cloud endpoint
rather than expose a server that requires inbound access. Customer networks
often block inbound connections and may also prohibit VPNs, while outbound
HTTPS or WebSocket traffic is much more likely to work through firewalls and
NAT. Once established, the persistent connection can carry data in both
directions. Browsers can consume the same MQTT stream over WebSockets; WebRTC
is an alternative for interactive, high-rate streams such as video or remote
visualisation where NAT traversal and lower latency matter.

Transfer state rather than blindly forwarding every message. A synchronization
layer over the transport can maintain a consistent current view across robot,
cloud, and web clients. Organise the state by robot and subsystem so consumers
can subscribe only to the fields they need, and avoid retransmitting unchanged
or redundant values. This is especially important when a fleet has many web
viewers with different scopes.

Use explicit transfer levels so a weak connection does not turn observability
into a burden on robot operation:

1. Always send a low-bandwidth heartbeat and essential health or diagnostic
   state. Use connection liveness and, where supported, MQTT keep-alive and
   last-will messages to distinguish an offline robot from a silent subsystem.
2. Send ordinary metrics, logs, and selected topic values continuously or at a
   bounded rate. Filter, aggregate, sample, or reduce update frequency on the
   robot before transmission.
3. Enable richer topic streams only on demand for a developer or active support
   session, and stop them when the session ends.
4. Transfer ROS bags, video archives, and other large recordings through the
   recorded-data upload pipeline, not through the live MQTT channel.

The implementation should tolerate intermittent connectivity without blocking
the robot. Reconnect automatically, expose connection and delivery health, and
bound any local queue so stale telemetry cannot exhaust disk or memory. Current
state should take priority over an unbounded backlog after reconnection; data
that must arrive eventually belongs in the durable recorded-data path.

Finally, authenticate robots and viewers, encrypt data in transit, and enforce
tenant- and role-based authorization at subscription boundaries. A fleet-wide
topic structure must not allow a customer, operator, or browser to subscribe to
robots outside its permitted scope.

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
