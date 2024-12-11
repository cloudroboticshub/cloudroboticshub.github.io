# State of Cloud Robotics - Results

## Foreword - Please Participate!!!

In April '24 the Cloud Robotics Working Group prepared a survey questionnaire to collect information on the state of cloud robotics, with the initial aim of identifying needs and best-practices.

Call for survey participation were posted on [ROS Discourse](https://discourse.ros.org/t/state-of-cloud-robotics-survey/37488) and [Linkedin](https://www.linkedin.com/feed/update/urn:li:activity:7190764780071075842/).

The survey is **still open**. If you have not already done so, you are kindly **invited to [participate here](https://docs.google.com/forms/d/e/1FAIpQLSeXny5m-2mBcsQotQ1HUrmH0ATyaBYnFBQkXzsQEvH3kL7tRg/viewform)**.

We will periodically update the results below.

## Full Results

An anonymized snapshot of the **full results** is available for download **[here](https://docs.google.com/spreadsheets/d/1BTg5QtNYEcl_HRl-C1clTOrp_WQ1VnVQnxDHss7anZg/edit?usp=sharing)**.


## Results Analysis from the WG (Updated Aug '24)

### Q1 - What’s the largest number of robots you have worked with at one time?

<table>
    <tr>
    <td>
        <table>
            <tr><th>Answer</th><th>Responses</th></tr>
            <tr>
                <td>1</td><td>2</td>
            </tr>
            <tr>
                <td>2-10</td><td>21</td>
            </tr>
            <tr>
                <td>10-100</td><td>8</td>
            </tr>
            <tr>
                <td>100-1000</td><td>3</td>
            </tr>
            <tr>
                <td>1000+</td><td>2</td>
            </tr>
        </table>
    </td>
    <td>
        ![Pie chart of question 1 responses](/img/survey/q1.png)
    </td>
    </tr>
</table>



From this response, we gather our call for participation was mostly answered by *cloud robotics practitioners*, and that's what we were hoping for.

Only 2 respondents were working on single robot deployments, while everybody else has experience working with deployments of multiple robots. Some of the participants have practical experience with **very large fleets of 100+ or even 1000+ robots**.

Needless to say, the WG would like to invite especially these participants to share with the group their experiences, best practices, what worked and what didn't...

### Q2 - What issues did you encounter with your robots that you tried to solve using the cloud? Please specify problem areas.

With this question we wanted to understand the reason why practitioners use cloud robotics solutions.
This was an open question, and each answer touches on multiple issues.

The main issue categories from the answers include:
- Connectivity/Networking -> e.g., stability, making connections work through firewalls, inter-robot communication
- Data collection -> e.g., for fleet dashboards, storage and off-line processing, AI/ML/RL
- Teleoperation -> e.g., easy access for end users
- Offloading computation to cloud / edge -> distributing application logic, simplifying deployment, requiring orchestration
- OTA updates / Fleet Management

In hindsight this question should have probably been formulated more clearly, as some of the answers mention issues with cloud robotic solutions rather than issues to be solved by cloud robotics.

### Q3 - In which of the following use cases did you incorporate the cloud?

The options we provided were:
* Development
* Deployment
* Operating a fleet
* Collecting fleet data
* Cross-device comms
* OTA updates
* Simulation
* Interoperability
* Other (please specify)

![Bar chart of question 3 responses](/img/survey/q3.png)

Unsurprisingly most of the respondents use cloud robotics for most of the use cases we suggested, with the notable exception of OTA updates and interoperability.

The take home result here is possibly that once you start having a solution for operating a fleet of robots you will naturally leverage it to simplify/scale development/deployment and gathering data from your robots.


### Q4 - What would help you the most with implementing your cloud solutions?

The options we provided were:
* More libraries, frameworks, and other tools
* Better integration for tools
* Better documentation, tutorials, and examples for tools
* Better support or more stability for tools
* Recommendations for best practices and successful architectures, e.g. MQTT over DDS for ROS comms
* Other (please specify)

![Bar chart of question 4 responses](/img/survey/q4.png)

The most important take away from this answer is that there is a widespread agreement (75% of respondents) that **not enough recommendations of best practices / successful architectures are available to the cloud robotics community**.

This is one of the **reasons of existence of the Cloud Robotics WG**, and one of the main issue we want to address through it and this Web site. We'd like to gather a collection of experiences and recommendations of **what works** or **what works best** for a specific problem.

Also worth mentioning the unsurprising result that better documentation / turorials / integration of tools would be needed in the community. But this is of course an issue that the community can only solve by itself, by contributing ;)

### Q5 - Please list any cloud robotics technologies or resources that you use and would recommend.

This was an open question.
The most mentioned technologies were various AWS services (6+), Kubernetes (4), Docker (2), Grafana / Prometheus / ELK stack (5+).

Several communication protocols (MQTT, WebRTC, ssl, Zenoh, ws) or MQs (Kafka, amqp) were also mentioned.

A technology maybe worth mentioning from the answers is [Zero Tier](https://www.zerotier.com/) which simplifies accessing robots behind NAT.

Answers to this question seem to confirm what we saw in Q4 (i.e., that there is no *standard* / best-practice approach yet to implement cloud robotics solutions).

### Q6 - What other questions would you like to be included in our next survey of the state of cloud robotics? 

This was also an open question. We report here some answers:

> What technical paths didn't work out well when moving to the cloud?

> Are people using cloud in real-time loops (e.g. localization + navigation in the cloud with limited or no local intelligence/autonomy)?

> Please also share best practices for Control, Monitor, Simulation etc using cloud.
business scenarios, blocking issues or challenges

> What specific task or job you are trying to achieve

> Some architecture, use-case related questions. Cloud robotics can mean many things for different people depending on the use-case/industry and architecture used.

> you might want a survey question to distinguish between robotics developers and tooling developers. Companies that need internal tooling might be bigger thus biased toward the cloud.

> Are there good, low-latency open source communication protocols for the cloud, particularly for video rendering? Are there any ROS integrations with webserver backends (such as django)? 

We will answer questions like this one in the [resources](/docs/resources/foreword) section of the website. Please help us with your own experience / opinion.

> Are there any examples or demos that use multiple TurtleBot3 robots for multi-robot tasks?


### Q7 - Do you have any other comments?

This was also an open question. We report here some answers:

> Cloud robotics shouldn't only be managed under the purview of ROS, but likely extrapolated to a broader industrial view. 

> A substantial part of cloud robotics is also security. That could be another sub branch.