import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import BlogSidebar from "@theme/BlogSidebar";

export default function Meetings(): JSX.Element {
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <main>
        <BlogSidebar></BlogSidebar>
        <div className="container margin-vert--lg">
          <Heading as="h1">Cloud Robotics Working Group Meetings</Heading>

          <p>
            This page lists all the meetings that have occurred as part of the
            working group.
          </p>

          <p>
            All meetings are public and held every two weeks from 1600-1700 UTC.
            Please feel free to join us. There are some details below for extra
            information:
          </p>
          <ul>
            <li>
              <a href="https://discourse.ros.org/tag/wg-cloud-robotics">
                ROS Discourse with tag wg-cloud-robotics.
              </a>
            </li>
            <li>
              <a href="https://groups.google.com/g/cloud-robotics-working-group-invites">
                Google Group
              </a>
              , where you can sign up to be notified of future updates.
            </li>
            <li>
              <a href="https://meet.google.com/xox-nshv-uvm">
                Google Meet room
              </a>
              , where we meet online.
            </li>
            <li>
              <a href="https://drive.google.com/drive/folders/1TkuaU2_9_QdL-u0pftaIGQu6ecTN5Ci1">
                Google Drive folder
              </a>
              , where we keep all of our public documents.
            </li>
            <li>
              <a href="https://calendar.google.com/calendar/u/0/embed?src=c_3fc5c4d6ece9d80d49f136c1dcd54d7f44e1acefdbe87228c92ff268e85e2ea0@group.calendar.google.com&ctz=America/Los_Angeles">
                Open Robotics Community Calendar
              </a>
              , where you can sign up to receive calendar reminders of our
              meetings.
            </li>
          </ul>

          <Heading as="h2">
            Upcoming Meeting: 2024-09-09
          </Heading>
          <p>
            The group plans to discuss the launch of the new Cloud Robotics Hub
            site and discuss potential improvements, then talk about news in Cloud Robotics.
          </p>

          <Heading as="h2">2024-08-26</Heading>
          <p>
            This meeting, the group discussed updates on the hub site, then
            talked about the work occurring in academia for cloud robotics.
          </p>
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

          <Heading as="h2">2024-08-12</Heading>
          <p>
            This meeting, the group took a look at progress on the Cloud
            Robotics Hub website, then agreed tasks to split between themselves
            to get the site closer to publishing.
          </p>
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

          <Heading as="h2">2024-07-29</Heading>
          <p>
            This meeting, the group got a first look at the upcoming Cloud
            Robotics Hub website, then heard about rostool from group member
            Christian Fritz of{" "}
            <a href="https://transitiverobotics.com/">Transitive Robotics</a>.
          </p>
          <iframe
            src="https://player.vimeo.com/video/993116963?h=42d98014d9"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>
            <a href="https://vimeo.com/993116963">
              rostool Demo and Explanation -- Cloud Robotics Working Group
              2024-07-29
            </a>{" "}
            from <a href="https://vimeo.com/osrfoundation">Open Robotics</a> on{" "}
            <a href="https://vimeo.com">Vimeo</a>.
          </p>

          <Heading as="h2">2024-07-15</Heading>
          <p>
            This meeting was the first meeting following the new format. The
            group members shared news about the upcoming Cloud Robotics Hub site
            and discussed methods of measuring latency between sending commands
            and the robot responding.
          </p>
          <p>No meeting recording is available for this meeting.</p>

          <Heading as="h2">2024-07-01</Heading>
          <p>
            In this meeting, we had a discussion about the purpose of the
            working group going forwards. We decided to change the meeting
            format to focus less on group member actions and more on being a
            space for cloud robotics enthusiasts can share news with each other,
            with more guest speakers.
          </p>
          <p>No meeting recording is available for this meeting.</p>

          <Heading as="h2">2024-06-17</Heading>
          <p>
            We hosted a guest in this meeting, with Gui Manzato from Ekumen
            talking about his experience working with all layers of the robotics
            stack and contributing back to ROS and open source software.
          </p>
          <p>No meeting recording is available for this meeting.</p>

          <Heading as="h2">2024-06-03</Heading>
          <p>
            This meeting was used to continue processing results from the State
            of Cloud Robotics Survey.
          </p>
          <iframe
            src="https://player.vimeo.com/video/954956852?h=2203952f1b"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>
            <a href="https://vimeo.com/954956852">
              Cloud Robotics Community Group Meeting 2024-06-03
            </a>{" "}
            from <a href="https://vimeo.com/osrfoundation">Open Robotics</a> on{" "}
            <a href="https://vimeo.com">Vimeo</a>.
          </p>

          <Heading as="h2">2024-05-20</Heading>
          <p>
            This meeting, we continued to process our survey results, and
            created an initial set of results to share with the community. The
            resulting LinkedIn post is available{" "}
            <a href="https://www.linkedin.com/posts/michael-hart-a7614262_cloud-robotics-working-group-state-of-cloud-activity-7201271097080623104-V4HY?utm_source=share&utm_medium=member_desktop">
              here
            </a>
            .
          </p>
          <p>No meeting recording is available for this meeting.</p>

          <Heading as="h2">2024-05-06</Heading>
          <p>
            This meeting was the first meeting we started to use to process our
            survey results.
          </p>
          <iframe
            src="https://player.vimeo.com/video/945900555?h=1db85eee84"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>
            <a href="https://vimeo.com/945900555">
              Cloud Robotics Community Group 2024-05-06
            </a>{" "}
            from <a href="https://vimeo.com/osrfoundation">Open Robotics</a> on{" "}
            <a href="https://vimeo.com">Vimeo</a>.
          </p>

          <Heading as="h2">2024-04-22</Heading>
          <p>
            We used this meeting to continue drafting the questionnaire from the
            previous meeting.
          </p>
          <iframe
            src="https://player.vimeo.com/video/941260800?h=e6623c4a1b"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>
            <a href="https://vimeo.com/941260800">
              Cloud Robotics WG Meeting 2024-04-22 | Building State of Cloud
              Robotics Survey
            </a>{" "}
            from <a href="https://vimeo.com/osrfoundation">Open Robotics</a> on{" "}
            <a href="https://vimeo.com">Vimeo</a>.
          </p>

          <Heading as="h2">2024-04-08</Heading>
          <p>
            We used this meeting to discuss how to gather data from folks
            working with cloud robotics. We agreed to gather data using a public
            questionnaire and began drafting it. The draft is available{" "}
            <a href="https://docs.google.com/document/d/1U7qbR1slb51r5iwK3Y2INGKuzLcHvu5QemxUvPdfCWg/edit?usp=sharing">
              here
            </a>
            .
          </p>
          <p>No meeting recording is available for this meeting.</p>

          <Heading as="h2">2024-03-11</Heading>
          <p>
            In this meeting, we discussed our long-term strategy and built a set
            of slides that laid out that strategy. The slides are available{" "}
            <a href="https://docs.google.com/presentation/d/1g-SPEzg9jeJlnTpzg4GblbOBsCkF4b5Zgb3saammgxE/edit?usp=sharing">
              here
            </a>
            .
          </p>
          <iframe
            src="https://player.vimeo.com/video/922530909?h=2c7c0727e6"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>
            <a href="https://vimeo.com/922530909">
              Cloud Robotics Working Group Meeting March 11th, 2024
            </a>{" "}
            from <a href="https://vimeo.com/osrfoundation">Open Robotics</a> on{" "}
            <a href="https://vimeo.com">Vimeo</a>.
          </p>

          <Heading as="h2">2024-02-26</Heading>
          <p>
            This was our first meeting as a community working group. We
            introduced ourselves to each other, then had a presentation from
            Christine Fraser and Ludo Stellingwerff from{" "}
            <a href="https://asimovo.com/">Asimovo</a>.
          </p>
          <iframe
            src="https://player.vimeo.com/video/917307697?h=57c9f37483"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>
            <a href="https://vimeo.com/917307697">
              ROS Cloud Robotics Working Group Meeting February 25th, 2025
            </a>{" "}
            from <a href="https://vimeo.com/osrfoundation">Open Robotics</a> on{" "}
            <a href="https://vimeo.com">Vimeo</a>.
          </p>
        </div>
      </main>
    </Layout>
  );
}
