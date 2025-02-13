# Meetings

This page lists all the meetings that have occurred as part of the
working group.

All meetings are public and held every two weeks from 1700-1800 UTC.
Please feel free to join us. There are some details below for extra
information:
- <a href="https://discourse.ros.org/tag/wg-cloud-robotics">ROS Discourse with tag wg-cloud-robotics.</a>
- <a href="https://groups.google.com/g/cloud-robotics-working-group-invites">Google Group</a>, where you can sign up to be notified of future updates.
- <a href="https://meet.google.com/xox-nshv-uvm">Google Meet room</a>, where we meet online.
- <a href="https://drive.google.com/drive/folders/1TkuaU2_9_QdL-u0pftaIGQu6ecTN5Ci1">Google Drive folder</a>, where we keep all of our public documents.
- <a href="https://calendar.google.com/calendar/u/0/embed?src=c_3fc5c4d6ece9d80d49f136c1dcd54d7f44e1acefdbe87228c92ff268e85e2ea0@group.calendar.google.com">Open Robotics Community Calendar</a>, where you can sign up to receive calendar reminders of our meetings.

## 2025-02-24 (Upcoming): General Catch-Up

The group plans to meet to have a general catch-up about the world of cloud
robotics. There is no fixed agenda to the meeting. Anyone is welcome to join and
talk to the group, as in every meeting.

## 2025-02-10: Testing KubeEdge (For Real, This Time)

The group had their second meeting to try out KubeEdge, having heard more about
it from [Tomoya Fujita in a guest talk](/blog/tomoya-fujita-kubeedge).

Two of the members had some success with the prerequisites for KubeEdge, but
neither were able to connect a Raspberry Pi to a cloud machine as an edge
device. They were able to get a Kubernetes cluster connecting to another machine
on the same network, treating it as an edge device and seeing ROS 2 traffic
between the two machines.

The group summarised their experience of KubeEdge:

> We found KubeEdge to be conceptually very powerful, and the functionality we
> did get working was very impressive. This looks to be an excellent way to
> manage robots or other edge devices at an enterprise level. However, we did
> have difficulties setting up KubeEdge for a Raspberry Pi at the edge. We think
> the following might be helpful to get others onboarded with KubeEdge:

> 1. It would be great to have a complete reference setup. Set up an EC2
>    instance with an elastic IP, set up the K8s network from scratch, and get a
>    Raspberry Pi (or VM on another machine) to join as an edge device.
> 2. Some instructions in the setup documentation assume prior knowledge. For
>    example, in the KubeEdge example led-raspberrypi, the last step is to
>    change the device Twin attribute, but the instruction does not say how to
>    do so.
> 3. It would be good to have a way of setting up multicast for ROS 2 that
>    doesn't require changes at the cluster admin level to adjust for changes in
>    the ROS 2 network. For example, if the domain ID changes, a new multicast
>    address must be enabled for the cluster, which requires cluster admin
>    rights. The alternative is to configure both the multicast IP address and
>    subscriber IP addresses for each pod, which is more complicated.

If you would like to see the meeting recording, it is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/pgsbo3-CbYg?si=rQKP-qI_lp2ZHmyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 2025-01-27: Finding KubeEdge Prerequisites

This meeting, the group planned to meet to test out KubeEdge. After the meeting
started, the group realised that there were a number of prerequisites needed to
try KubeEdge, including an active Kubernetes cluster (preferably in the cloud)
and some hardware to deploy to, such as a Raspberry Pi with LED.

The group agreed to set up the prerequisites and attempt the tryout session in
the next session. The group also agreed that for future tryout sessions, they
would read through prerequisites in advance to make sure the meeting can go
ahead.

If you would like to watch the meeting, you can see the recording below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/prVZw4cPT1U?si=_L1DTjXHWpVtmDXc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 2025-01-13

The group had a general discussion of the latest in robotics news, including
NVIDIA Cosmos, the proliferation of humanoid robotics at present, what cloud
robotics encompasses, and what to do in the next meeting. The group settled on
doing a KubeEdge trial unless a guest speaker is available.

If you would like to watch the meeting, you can see the recording below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/bkyplWLAnN8?si=jn1_4_GoJe2Xvt8v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 2024-12-16 Guest Talk: Robotics Platform empowered by Cloud-Native Technologies (Tomoya Fujita)

In this meeting, we hosted a talk by by [Tomoya Fujita](https://github.com/fujitatomoya),
a software engineer, contributor to ROS2 core, and well-respected community builder.

Tomoya talked about a range of Cloud-Native Technologies he has worked on, and their
relevance to robotics. In particular, Tomoya has done a great deal of work on KubeEdge,
a platform built on Kubernetes that can be used to deploy software to robots as if they
are Kubernetes clusters. Some resources from his talk include:

- [ROSCon 2023: ROS with Kubernetes / KubeEdge](https://roscon.ros.org/2023/talks/ROS_with_KubernetesKubeEdge.pdf)
- [Some examples to deploy ROS / ROS 2 with Kubernetes](https://github.com/fujitatomoya/ros_k8s)
- [Next-generation Robotics Platform for Edge/Cloud](https://static.sched.com/hosted_files/colocatedeventsna2024/15/Cilium%2BeBPF-Day-NA_Cilium-with-KubeEdge.v0.pdf)

More information on the talk is available on the [blog post](/blog/tomoya-fujita-kubeedge), including a link to the recording posted on YouTube.

If you are interested in seeing the entire meeting, the recording is available here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/n-yn4ZKM5cQ?si=SX-fmVyN_LRUvcXV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 2024-12-02 | Testing Eclipse Zenoh

In this meeting, the group spent the time trying out the workshop from Eclipse Zenoh that was used in the latest ROSCon. Together, they accomplished a few of the exercises and discussed the ease of setup, and some comments they could give as feedback.

The workshop is available [from Github](https://github.com/ZettaScaleLabs/roscon2024_workshop). The group completed exercises 1, 2, and 5, then two members sent messages to each other using the instructions in exercise 3.

The meeting recording is available below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/NwZrAPGrDpU?si=0vlq9jaoZ7pECU9e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 2024-11-18

The group caught up on the latest robotics news and discussed GenAI in robotics and the start-ups using them. The group then agreed to focus on Eclipse Zenoh for its next meeting.

If you would like to watch the meeting, you can see the recording below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/EIMiKcafRy8?si=vD7uDhfZsLsB6bLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 2024-11-04 Guest Talk: Eclipse Zenoh and its offering for Cloud Connectivity (Julien Enoch)

The group hosted a talk by [Julien Enoch](https://www.linkedin.com/in/julienenoch/), a Senior Solutions Architect at [ZettaScale Technology](https://www.zettascale.tech/) and [Eclipse Zenoh](https://github.com/eclipse-zenoh/zenoh) committer.

Julien spoke about the Zenoh protocol, which can run everywhere, from micro-controllers to the Cloud; over TCP, UDP, QUIC, and Websockets. Zenoh provides a software router that can be deployed in any Cloud instance such as AWS EC2, and that can route the protocol between different subsystems. The talk also covered how this is particularly helpful for Connectivity in Cloud Robotics, with a video demonstration of controlling a robot in California from an RViz instance in France!

If you would like to see the talk, which took the whole meeting time, see the recording below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ANBG_O0fQwQ?si=X3zJtsKlXY6e-3HM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 2024-10-21

The group discussed recent conferences, possible resources for the Cloud Robotics Hub, and methods of working offline to accomplish more between meetings. The group also discussed their opinions on how the Working Group was doing, with the aim of recognising their successes and considering how to improve going forwards.

The full meeting recording is available below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Eie35kh9jDQ?si=ajkJhcelLnZuSUqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 2024-10-07 Guest Talk: Enabling Usable and Reliable Cloud Robotics with FogROS2 (Kaiyuan Eric Chen)

The group hosted a talk about [FogROS2](https://github.com/BerkeleyAutomation/FogROS2) presented by [Kaiyuan Eric Chen](https://keplerc.github.io/), a PhD student in the Department of Computer Sciences at UC Berkeley and a member of Berkeley Automation Lab working closely with [Ken Goldberg](https://goldberg.berkeley.edu/) and Jeffrey Ichnowski.

More information about the presentation, including a summary of its content and some links, are available on the [blog post](/blog/eric-chen-fogros2).

The group spent some time at the end discussing recent news in robotics, and the plan for the next meeting.

The full meeting recording is available below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/OISBgMuVWf4?si=ZoMrmwUkDlM-GInS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 2024-09-23 Talk: CloudGripper (Florian Pokorny)

The group hosted a talk about [CloudGripper](https://cloudgripper.org/), [An Open Source Cloud Robotics Testbed for Robotic Manipulation Research, Benchmarking and Data Collection at Scale](https://arxiv.org/abs/2309.12786) by [Florian Pokorny](https://www.csc.kth.se/~fpokorny/), Associate Professor of Machine Learning at [KTH Royal Institute Technology](https://www.kth.se/) and Co-Founder of [Scaleup Robotics](https://scaleuprobotics.com/).

Here's a link to the [blog post and talk recording](/blog/florian-pokorny-cloudgripper).

Find the full meeting recording below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/qu3Nb416Dpk?si=n4HWA5s4yG9ePs3H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 2024-09-09
The group discussed the launch of the new Cloud Robotics Hub
site and discussed potential improvements. Akash Vibhute from Intrinsic/OpenRMF attended and we discussed him possibly presenting to the group, potentially along the lines of his upcoming ROSCon talk.

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/0Bye6AUCdrg?si=wBUiRBdSSBHbodBv"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>

## 2024-08-26
This meeting, the group discussed updates on the hub site, then
talked about the work occurring in academia for cloud robotics.
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/887wtLwUVgg?si=N_6emhR8PcrzXWQ2"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>

## 2024-08-12

This meeting, the group took a look at progress on the Cloud
Robotics Hub website, then agreed tasks to split between themselves
to get the site closer to publishing.

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/HTSC1bgg1rQ?si=oLsfvzp6UxauOW-q"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>

## 2024-07-29 Talk: ROS Tool (Christian Fritz)

This meeting, the group got a first look at the upcoming Cloud
Robotics Hub website, then heard about rostool from group member
Christian Fritz of <a href="https://transitiverobotics.com/">Transitive Robotics</a>.

<iframe
  src="https://player.vimeo.com/video/993116963?h=42d98014d9"
  width="640"
  height="360"
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen
></iframe>

<a href="https://vimeo.com/993116963">
  rostool Demo and Explanation -- Cloud Robotics Working Group
  2024-07-29
</a>{" "}
from <a href="https://vimeo.com/osrfoundation">Open Robotics</a> on{" "}
<a href="https://vimeo.com">Vimeo</a>.


## 2024-07-15

This meeting was the first meeting following the new format. The
group members shared news about the upcoming Cloud Robotics Hub site
and discussed methods of measuring latency between sending commands
and the robot responding.

No meeting recording is available for this meeting.

## 2024-07-01

In this meeting, we had a discussion about the purpose of the
working group going forwards. We decided to change the meeting
format to focus less on group member actions and more on being a
space for cloud robotics enthusiasts can share news with each other,
with more guest speakers.

No meeting recording is available for this meeting.

## 2024-06-17

We hosted a guest in this meeting, with Gui Manzato from Ekumen
talking about his experience working with all layers of the robotics
stack and contributing back to ROS and open source software.

No meeting recording is available for this meeting.

## 2024-06-03

This meeting was used to continue processing results from the State
of Cloud Robotics Survey.

<iframe
  src="https://player.vimeo.com/video/954956852?h=2203952f1b"
  width="640"
  height="360"
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen
></iframe>

<a href="https://vimeo.com/954956852">
  Cloud Robotics Community Group Meeting 2024-06-03
</a>{" "}
from <a href="https://vimeo.com/osrfoundation">Open Robotics</a> on{" "}
<a href="https://vimeo.com">Vimeo</a>.


## 2024-05-20

This meeting, we continued to process our survey results, and
created an initial set of results to share with the community. The
resulting LinkedIn post is available{" "}
<a href="https://www.linkedin.com/posts/michael-hart-a7614262_cloud-robotics-working-group-state-of-cloud-activity-7201271097080623104-V4HY?utm_source=share&utm_medium=member_desktop">here</a>.

No meeting recording is available for this meeting.

## 2024-05-06

This meeting was the first meeting we started to use to process our
survey results.

<iframe
  src="https://player.vimeo.com/video/945900555?h=1db85eee84"
  width="640"
  height="360"
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen
></iframe>

<a href="https://vimeo.com/945900555">
  Cloud Robotics Community Group 2024-05-06
</a>{" "}
from <a href="https://vimeo.com/osrfoundation">Open Robotics</a> on{" "}
<a href="https://vimeo.com">Vimeo</a>.


## 2024-04-22

We used this meeting to continue drafting the questionnaire from the
previous meeting.

<iframe
  src="https://player.vimeo.com/video/941260800?h=e6623c4a1b"
  width="640"
  height="360"
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen
></iframe>

<a href="https://vimeo.com/941260800">
  Cloud Robotics WG Meeting 2024-04-22 | Building State of Cloud
  Robotics Survey
</a>{" "}
from <a href="https://vimeo.com/osrfoundation">Open Robotics</a> on{" "}
<a href="https://vimeo.com">Vimeo</a>.


## 2024-04-08

We used this meeting to discuss how to gather data from folks
working with cloud robotics. We agreed to gather data using a public
questionnaire and began drafting it. The draft is available{" "}
<a href="https://docs.google.com/document/d/1U7qbR1slb51r5iwK3Y2INGKuzLcHvu5QemxUvPdfCWg/edit?usp=sharing">here</a>.

No meeting recording is available for this meeting.

## 2024-03-11

In this meeting, we discussed our long-term strategy and built a set
of slides that laid out that strategy. The slides are available <a href="https://docs.google.com/presentation/d/1g-SPEzg9jeJlnTpzg4GblbOBsCkF4b5Zgb3saammgxE/edit?usp=sharing">here</a>.

<iframe
  src="https://player.vimeo.com/video/922530909?h=2c7c0727e6"
  width="640"
  height="360"
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen
></iframe>

<a href="https://vimeo.com/922530909">
  Cloud Robotics Working Group Meeting March 11th, 2024
</a>{" "}
from <a href="https://vimeo.com/osrfoundation">Open Robotics</a> on <a href="https://vimeo.com">Vimeo</a>.


## 2024-02-26 Talk: Asimovo (Christine Fraser)

This was our first meeting as a community working group. We
introduced ourselves to each other, then had a presentation from
Christine Fraser and Ludo Stellingwerff from{" "}
<a href="https://asimovo.com/">Asimovo</a>.

<iframe
  src="https://player.vimeo.com/video/917307697?h=57c9f37483"
  width="640"
  height="360"
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen
></iframe>

<a href="https://vimeo.com/917307697">
  ROS Cloud Robotics Working Group Meeting February 25th, 2025
</a>{" "}
from <a href="https://vimeo.com/osrfoundation">Open Robotics</a> on{" "}
<a href="https://vimeo.com">Vimeo</a>.

