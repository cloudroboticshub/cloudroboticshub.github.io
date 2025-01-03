---
title: "Tomoya Fujita presents Robotics Platforms empowered by Cloud-Native Technologies"
slug: tomoya-fujita-kubeedge
authors: michaelhart
tags: [ros, kubeedge, guest]
---

[Tomoya Fujita](https://github.com/fujitatomoya), a Software Engineer at Sony, contributor to ROS2 core, and well-respected community builder, joined our meeting on 16th December 2024. He spoke about using Cloud-Native Technologies to deploy to edge devices and manage their life cycles, secrets, configuration, and even secure their network connections.

<iframe class="youtube-video" src="https://www.youtube.com/embed/JBaNNQQxq9c?si=SqFSlXxBl-KEo_po" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!-- truncate -->

Resources used during the talk:
- [ROSCon 2023: ROS with Kubernetes / KubeEdge](https://roscon.ros.org/2023/talks/ROS_with_KubernetesKubeEdge.pdf)
- [Some examples to deploy ROS / ROS 2 with Kubernetes](https://github.com/fujitatomoya/ros_k8s)
- [Next-generation Robotics Platform for Edge/Cloud](https://static.sched.com/hosted_files/colocatedeventsna2024/15/Cilium%2BeBPF-Day-NA_Cilium-with-KubeEdge.v0.pdf)

Tomoya started by talking through the same slides he used for the demo he gave at ROSCon in 2023, about deploying ROS/ROS2 code using Kubernetes. He talked about enabling deploying to fleets of robots and the pain points that comes with it. He also spoke about using Kubernetes to automatically connect robots to cloud resources, such as API servers, as well as auto-scale those cloud resources.

Next, Tomoya spoke about KubeEdge, which is built on Kubernetes and allows networking, application deployment, and metadata synchronization between cloud and edge nodes. KubeEdge can be used to configure ROS2 networks so nodes can talk to each other, and allows a user to interact with a robot fleet via cloud-based API servers, for example.

He also spoke about securing the data to the application. When any container starts up, KubeEdge can synchronize secrets and configuration to each container. However, this is not done with any effort from the container it self - Tomoya emphasized his belief that applications should be agnostic to their deployment and metadata synchronization mechanism!

After the ROSCon slides, Tomoya spoke about Cilium at the edge via KubeEdge. This is a way to solve the problem of securing cross-network communications, as Cilium modifies the network interfaces of deployed containers to communicate via WireGuard VPN. In this way, nodes on an edge device can communicate with other nodes on other edge devices or in the cloud as if they are on the same network, using encrypted communication. One note is that edge devices need to be on the same physical layer for this to work - the team are working on making edge to edge communication over different networks work as well!

Finally, Tomoya answered questions from the group, including: whether Cilium supports multicast (can be enabled, but is Work In Progress); whether KubeEdge is currently used in production (no, but it's ready); and the configuration for cloud and edge nodes to communicate correctly; among other questions.

:::info
The Cloud Robotics Working Group is always on the lookout for more guest speakers. If you have a talk you would like to give or a suggestion of another speaker who may be interested, please [let us know](/meetings)!
:::
