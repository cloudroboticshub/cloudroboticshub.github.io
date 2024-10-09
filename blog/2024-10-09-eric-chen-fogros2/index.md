---
title: "Kaiyuan Eric Chen presents FogROS2"
slug: eric-chen-fogros2
authors: michaelhart
tags: [ros, fogros2, guest]
---

## Enabling Usable and Reliable Cloud Robotics with FogROS2

[Kaiyuan Eric Chen](https://keplerc.github.io/), a PhD student in the Department of Computer Sciences at UC Berkeley and a member of Berkeley Automation Lab working closely with Ken Goldberg and Jeffrey Ichnowski, joined our meeting on 2024-10-07. He gave a talk titled "Enabling Usable and Reliable Cloud Robotics with FogROS2". He then answered questions on the talk and on [FogROS2](https://berkeleyautomation.github.io/FogROS2), a state-of-the-art open source cloud robotics framework that offloads unmodified ROS2 applications to the cloud.

Take a look at the recording of the talk using the link below:

<iframe class="youtube-video" src="https://www.youtube.com/embed/OISBgMuVWf4?si=ZoMrmwUkDlM-GInS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!-- truncate -->

Eric started by defining Cloud Robotics, pointing out that many applications we don't consider to be Cloud Robotics do actually involve the cloud. He then explained how the cloud helped his research team by speeding up tasks such as planning, and that provisioning the cloud resources led to FogROS, a framework that helped with provisioning the resources. Eric explained the iterations of FogROS and FogROS2, including case studies of their use and improvements in performance over local operation.

The talk then went on to the reliability aspect of the title. Cloud connections have many points of failure, any one of which causes the application to fail. Eric explained his team's work on proving that multiple simultaneous connections improved the usability and reliability of Cloud Robotics, showing his work and several key examples.

Finally, Eric answered questions from the group, such as whether to handle transmission failures at the Operating System layer or the application layer, the different models used for comparing responses between simultaneous connections, and how to handle lack of all connection, known as the concert hall problem.

These links are provided from the presentation and directly from Eric:

- [FogROS2 repository](https://github.com/BerkeleyAutomation/FogROS2): contains the source code and description of FogROS2.
- [Fog-RTC x CloudGripper Dataset Visualizer](https://berkeleyautomation.github.io/CloudRobotics_tutorial/): shows the CloudGripper visualization using FogROS2, and collected at ICRA 2024. For more information about CloudGripper, take a look at [Florian Pokorny's presentation](/blog/florian-pokorny-cloudgripper).
- [Leveraging Cloud Computing to Make Autonomous Vehicles Safer](https://arxiv.org/abs/2308.03204): shows work in executing a workload both locally and in the cloud, and comparing the response, for the best safety in autonomous vehicles.

:::info
The Cloud Robotics Working Group is always on the lookout for more guest speakers. If you have a talk you would like to give or a suggestion of another speaker who may be interested, please [let us know](/meetings)!
:::
