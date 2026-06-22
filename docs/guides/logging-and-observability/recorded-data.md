---
sidebar_position: 5
---

# Recorded Data

Recorded data may live in the cloud, on the robot, or in another storage system.
The full recording pipeline includes how recordings are created, moved, stored,
searched, analysed, and connected back to the software and configuration that
produced them.

The working group discussions consistently returned to the same tension:
recorded data is often the most useful debugging evidence, but it is also the
most expensive to collect, upload, store, and search. The guide therefore
recommends treating recording as a deliberate pipeline, not a side effect of
running `rosbag record`.

## Data Recording Methods

Common recording formats and approaches include ROS bag files, custom
recorders, event snapshots, and partial topic capture.

Common approaches include:

- ROS 1 bags.
- ROS 2 bags, often using MCAP as the storage backend.
- MCAP files produced outside ROS.
- ULog and other domain-specific log formats.
- Short video or sensor clips.
- Custom formats designed for cloud indexing or warehouse queries.
- Extracted summaries or features, such as object detections or nearest
  obstacle readings.

ROS bags and MCAP files are valuable because they preserve robotics context and
can be opened by existing tools. However, large fleets may eventually need
additional processing or alternate formats when the goal is fast cloud query,
large-scale indexing, or analysis in data warehouses.

The recording method should be chosen based on the question the team expects to
answer later. Full bags are excellent for replay and debugging. Indexed,
columnar, or feature-oriented formats may be better for fleet-scale analytics.

## Recording Triggers

Recording may be started in several ways:

- **Anomaly-triggered:** automatically preserve data around unusual or
  important events.
- **User-triggered:** allow operators, developers, or support staff to capture
  context manually.
- **Time-based:** keep a rolling buffer, periodic snapshot, or scheduled
  recording window.

In practice, teams often need all three. A useful pattern is:

1. Always collect lightweight health and diagnostics.
2. Keep rolling buffers for high-value high-rate topics.
3. Promote a window from the rolling buffer to a saved recording when an event
   occurs.
4. Allow humans or automation to request additional capture.

The system should record why a capture happened. "Triggered by high velocity",
"operator requested", "battery alert", "software rollout test", and "support
case" are very different pieces of context.

## Uploading

Recordings need to be uploaded from the robot or edge system with buffering,
retry behaviour, bandwidth limits, resumable uploads, and prioritisation of
urgent data.

Uploading is often the hard part. Robots may operate on weak Wi-Fi, customer
networks, metered links, underwater or remote links, or networks that disappear
at exactly the moment something interesting happens.

Recommended upload behaviour:

- Use resumable uploads for large files.
- Split large recordings into chunks.
- Keep upload queues bounded.
- Prioritise recent or urgent event data over stale backlog.
- Track upload status and expose it in the UI.
- Avoid blocking robot operation on upload success.
- Allow local retention limits to delete old data when space runs low.
- Make it possible to manually retrieve data for rare deep-debug cases.

The upload policy should be explicit. For example, a system may always upload
health metrics, upload logs opportunistically, and upload heavy sensor data only
for events or support requests.

## Cloud Storage

Once uploaded, recorded data needs storage for raw files, databases for
metadata, access policies, encryption, and a data layout that can survive both
debugging and long-term analysis.

Large recordings usually belong in object storage. Metadata and indexes belong
in databases or search systems that can answer questions quickly without
opening every file.

A practical storage design separates:

- Raw files.
- Normalised metadata.
- Derived events and annotations.
- Search indexes.
- Visualisation-ready previews.
- Access-control state.
- Processing status.

This separation lets a team store large data cheaply while still making the
important parts searchable.

## Retention Policies

Retention policy defines what data is kept, how long it is retained, and who is
allowed to change those rules. It must balance debugging value, storage cost,
privacy, and regulatory requirements.

Retention policy should be decided per data class:

- Heartbeat and fleet metrics may be kept for long-term trend analysis.
- Logs may be kept for shorter periods unless attached to an incident.
- Heavy recordings may be kept only for event windows, support cases, or model
  training datasets.
- Customer-sensitive data may need stricter deletion and access rules.
- Golden datasets and regression cases may be retained deliberately as test
  assets.

The policy should also cover the robot's local disk. If upload fails for a long
time, the robot needs predictable rules for what to keep and what to discard.

## Indexing and Querying

Recorded data becomes useful when it can be found again. The system should
connect metadata, indexing, search fields, robot identity, time ranges,
location, task context, event labels, and links between live alerts and stored
recordings.

The group repeatedly identified indexing as one of the most important pieces of
the system. A team may collect excellent recordings, but if the only way to find
them is by filename and timestamp, the data will not be used.

Index at least:

- Robot ID and fleet/site/customer.
- Time range.
- Software, firmware, hardware, and configuration version.
- Recording format and schema.
- Topic list and message types.
- Task, route, mission, or operating mode.
- Trigger source and event labels.
- Upload status and processing status.
- Links to alerts, support tickets, deployments, and annotations.

Advanced systems may also index derived features, embeddings, event segments,
object detections, map regions, or similarity-search representations.

## Analysis

Analysis includes manual review, automated processing, and AI-assisted
workflows. Example questions include finding similar trajectories, comparing
robot behaviour across runs, or identifying cases such as an arm placing a cup
in a cupboard.

Analysis workflows seen in the sessions included:

- Opening recordings in visual tools such as Foxglove-style interfaces.
- Searching metadata to find all recordings from a robot, version, or failure
  mode.
- Running automated jobs when a new file is uploaded.
- Creating events from detected conditions inside a recording.
- Comparing behaviour across software versions.
- Finding similar clips or trajectories across many recordings.
- Asking natural-language questions through MCP tools backed by deterministic
  data queries.

AI-assisted analysis is promising, but it should be designed as a layer over
structured access to the data. LLMs are useful for summarisation, natural
language query, and orchestration of tools. They are less reliable when asked to
infer precise numeric facts from raw context without grounded tools.

## Versioning

Recordings need to be tied to the versions that produced them:

- Robot hardware and configuration
- Recording software
- Robot application software
- Data schema

Versioning should be first-class metadata, not an afterthought. Many questions
cannot be answered without it:

- Did this issue start after a deployment?
- Does it affect one hardware revision or all robots?
- Did the recording schema change?
- Can this file still be opened by current tooling?
- Are two datasets comparable?

For fleet analysis, software and hardware version should be searchable fields.
For replay and debugging, the exact configuration and schema may be as important
as the raw sensor data.

## Traceability

Traceability should connect observed behaviour back to the systems and
definitions that shaped it. This should include robot configuration, data
schemas, cloud resources, deployments, and runtime environment.

It is useful to separate traceability from observability when reviewing robot
operation and incidents.

Observability helps answer "what is happening?" and "why is it happening?"
Traceability helps answer "which version, configuration, data schema, resource,
operator action, or deployment produced this evidence?"

Examples:

- Observability: a robot's battery dropped below threshold and triggered an
  alert.
- Traceability: the alert came from robot `A`, hardware revision `B`, software
  version `C`, diagnostic schema `D`, deployed at time `E`, during task `F`.
- Observability: a perception model produced low confidence before a stop.
- Traceability: the model version, calibration, camera hardware, map version,
  and recording schema are attached to the event.

Without traceability, teams can see symptoms but struggle to compare incidents,
reproduce failures, or decide whether a fix is safe to roll out.
