---
title: "Julien Enoch presents Eclipse Zenoh"
slug: julien-enoch-zenoh
authors: michaelhart
tags: [ros, zenoh, guest]
---

[Julien Enoch](https://www.linkedin.com/in/julienenoch/), a Senior Solutions Architect at [ZettaScale Technology](https://www.zettascale.tech/) and [Eclipse Zenoh](https://github.com/eclipse-zenoh/zenoh) committer, joined our meeting on 4th November 2024. He gave a talk on Eclipse Zenoh, a protocol which can run everywhere, from micro-controllers to the Cloud; over TCP, UDP, QUIC, and Websockets. Zenoh provides a software router that can be deployed in any Cloud instance such as AWS EC2, and that can route the protocol between different subsystems.

<iframe class="youtube-video" src="https://www.youtube.com/embed/ANBG_O0fQwQ?si=X3zJtsKlXY6e-3HM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!-- truncate -->

Julien started by talking about how the Zenoh protocol works, including the software router and example network diagrams. Zenoh is written in Rust, is available in many languages, comes with built-in messaging features like fragmentation and batching, and can operate over any data link, including TCP, Serial, Bluetooth, and so on.

Julien showed how fast the protocol can perform compared to other solutions, and how it's possible to extend the protocol using plugins. He also demonstrated using RViz to control a Turtlebot 4 via Zenoh, where one machine was in France and another in California, United States.

The talk then went on to where the protocol could run, how it could discover other nodes, and how to update network configuration without making code changes. This also includes TLS encryption on the link.

Finally, Julien answered questions from the group, including the maturity of JavaScript language support, how multi-router discovery works, and access control options for Zenoh. For more detail on any of these points, watch the recording above for the full talk!

:::info
The Cloud Robotics Working Group is always on the lookout for more guest speakers. If you have a talk you would like to give or a suggestion of another speaker who may be interested, please [let us know](/meetings)!
:::

