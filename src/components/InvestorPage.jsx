import React, { useState, useEffect } from "react";
import "./InvestorPage.scss";
import { Googlesheet } from "./Googlesheet";
import ReactPlayer from "react-player";
import release from "../data/release.json";
import "@wistia/wistia-player";

import Button from "./Button";
import Footer from "./Footer";

import useLocoScroll from "../hooks/useLocoScroll";
import TextSlideUp from "../effects/TextSlideUp";
import TextFadeIn from "../effects/TextFadeIn";

const InvestorPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [selectedNews, setSelectedNews] = useState(null);
  useLocoScroll(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const sheetData = await Googlesheet();
        setData(sheetData);
        setError(""); // Clear any previous errors
      } catch (error) {
        setData([]); // Clear any previous data
        setError(error.message || "An unexpected error occurred.");
      }
    };

    getData();
  }, []);

  const wistiaVideos = [
    {
      id: "nh7xw6o6x1",
      title:
        "cloud platform that simplifies technology and accelerates your business growth",
    },
    {
      id: "nh7xw6o6x1",
      title:
        "Cyber Compliant Cloud: How we are helping companies bring down their budget of cyber compliance",
    },
    {
      id: "nh7xw6o6x1",
      title: "Zero Touch Deployment: Scalability Auto managed",
    },
    {
      id: "nh7xw6o6x1",
      title:
        "Cut Down on the Development Budget: Eliminate the need of DevOps with our auto managed solutions",
    },
    {
      id: "nh7xw6o6x1",
      title:
        "Platform Built for Customers of All Sizes: See how our platform features are built for Citizen Developers, Startups, Enterprises, and Governments",
    },
    {
      id: "nh7xw6o6x1",
      title:
        "Platform Built for Customers of All Sizes: See how our platform features are built for Citizen Developers, Startups, Enterprises, and Governments",
    },
  ];

  useEffect(() => {
    // Dynamically load the Wistia script
    const script = document.createElement("script");
    script.src = "https://fast.wistia.net/assets/external/E-v1.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Wistia API once the script is loaded
    script.onload = () => {
      wistiaVideos.forEach((video) => {
        window._wq = window._wq || [];
        window._wq.push({
          id: video.id,
          onReady: function (videoApi) {
            // console.log(`I got a handle to the video ${video.id}!`, videoApi);
            // Interact with the video API here if needed
          },
        });
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [wistiaVideos]);

  useEffect(() => {
    console.log("selectedNews", selectedNews);
  }, [selectedNews]);

  return (
    <div className="home-container" id="main-container">
      <header>
        <h1>
          <TextSlideUp>Journey So far</TextSlideUp>
        </h1>
      </header>
      <section className="timeline">
        {/* <video autoPlay muted loop playsInline className="background-video">
        <source src={Bgvd} type="video/mp4"/>
        Your browser does not support HTML5 video.
    </video> */}
        <div className="container-jr right">
          <div className="text">
            <h2>
              <TextSlideUp>June: Launch & Growth</TextSlideUp>
            </h2>
            <p style={{ color: "white" }}>2023</p>
          </div>
          <div className="content-jr cloud">
            <img
              src="assets/clouds/Cloud Thumb 03.png"
              alt="Cloud"
              className="cloud-big"
            />
            <p>
              <TextFadeIn
                defaultValue="Within the first week, customers began to sign up. Our support
              team was on high alert, ready to assist with any issues. We held
              our breath, waiting for feedback. To our delight, the response was
              overwhelmingly positive. Users appreciated the platforms intuitive design and robust features. We collected every piece of
              feedback, knowing it was invaluable for our growth."
              />
            </p>
            <Button text="Read More" />
          </div>
        </div>
        <div className="container-jr left">
          <div className="text">
            <h2>
              <TextSlideUp>June: Launch & Growth</TextSlideUp>
            </h2>
            <p style={{ color: "white" }}>2023</p>
          </div>
          <div className="content-jr cloud">
            <img src="assets/clouds/Cloud Thumb 02.png" alt="Cloud" />
            <p>
              <TextFadeIn
                defaultValue=" Within the first week, customers began to sign up. Our support
              team was on high alert, ready to assist with any issues. We held
              our breath, waiting for feedback. To our delight, the response was
              overwhelmingly positive. Users appreciated the platforms
              intuitive design and robust features. We collected every piece of
              feedback, knowing it was invaluable for our growth."
              />
            </p>
            <Button text="Read More" />
          </div>
        </div>
        <div className="container-jr right cloud">
          <div className="text">
            <h2>
              <TextSlideUp>June: Launch & Growth</TextSlideUp>
            </h2>
            <p style={{ color: "white" }}>2023</p>
          </div>
          <div className="content-jr">
            <img src="assets/clouds/Cloud Thumb 01.png" alt="Cloud" />
            <p>
              <TextFadeIn
                defaultValue=" Within the first week, customers began to sign up. Our support
              team was on high alert, ready to assist with any issues. We held
              our breath, waiting for feedback. To our delight, the response was
              overwhelmingly positive. Users appreciated the platforms
              intuitive design and robust features. We collected every piece of
              feedback, knowing it was invaluable for our growth."
              />
            </p>
            <Button text="Read More" />
          </div>
        </div>
      </section>

      {/* second section start from here */}
      <div className="big-container">
        <div className="main-container">
          <div className="text-section-left">
            <h1>
              <TextSlideUp>
                Our Legacy: Transforming Cloud Technology
              </TextSlideUp>
            </h1>
          </div>
          <div className="text-section-right">
            <p>
              <TextFadeIn
                defaultValue="Welcome to [Company Name], where innovation meets excellence in
              cloud technology. Founded with a vision to redefine the digital
              landscape, our company is dedicated to providing cutting-edge
              cloud solutions that empower businesses to thrive in an
              ever-evolving technological world."
              />
            </p>
            <p>
              <TextFadeIn
                defaultValue="[Company Name] was established in [Year] by a team of visionary
              tech enthusiasts who saw the potential of the cloud to transform
              how businesses operate. With a combined experience of over [X]
              years in cloud computing, software development, and enterprise
              solutions, our founders embarked on a mission to create a platform
              that is not only robust and reliable but also user-centric and
              adaptable."
              />
            </p>
          </div>
        </div>

        <div className="info-section">
          <p>
            <TextFadeIn
              defaultValue="From our humble beginnings, we have grown into a leading player in
            the cloud industry, serving clients across various sectors including
            finance, healthcare, education, and technology. Our commitment to
            innovation and customer satisfaction has been the driving force
            behind our success. Our team is composed of experts who are
            passionate about technology and dedicated to your success. From
            seasoned engineers to creative problem solvers, each member brings
            unique skills and insights that contribute to our collective
            mission. We foster a collaborative and dynamic work environment
            where innovation thrives and ideas flourish."
            />
          </p>
        </div>

        <div className="image-box">
          <img src="assets/mountain2.png" alt="Cloud Technology Image" />
        </div>

        <div className="stats-wrapper">
          <div className="stat-item">
            <h2>
              <TextSlideUp>35 ++</TextSlideUp>
            </h2>
            <p>
              <TextFadeIn defaultValue="Open Source App Already Listed" />
            </p>
          </div>
          <div className="stat-item">
            <h2>
              <TextSlideUp>10</TextSlideUp>
            </h2>
            <p>
              <TextFadeIn defaultValue="Data Center In Cloud Partnership Network" />
            </p>
          </div>
          <div className="stat-item">
            <h2>
              <TextSlideUp>5</TextSlideUp>
            </h2>
            <p>
              <TextFadeIn defaultValue="Enterprises In Pilot Program Network" />
            </p>
          </div>
        </div>
      </div>

      {/* third potencial section start from here  */}

      <div className="container-pt">
        <h1>
          <TextSlideUp>Unleashing Potential:</TextSlideUp>
        </h1>
        <h1>
          <TextSlideUp>The Power of Our Solutions</TextSlideUp>
        </h1>

        <div className="features-pt">
          <div className="feature-item">
            <img src="assets/solution1.png" alt="Reduce Budget" />
            <h3>
              <TextSlideUp>Cut Down Development Costs By 70%</TextSlideUp>
            </h3>
            <p>
              <TextFadeIn
                defaultValue="Our solution lets product owners focus on core functionalities,
              streamlining development and heavily reducing costs."
              />
            </p>
          </div>
          <div className="feature-item">
            <img src="assets/solution2.png" alt="Save Time" />
            <h3>
              <TextSlideUp>Reduce Big Data Management Costs by 60%</TextSlideUp>
            </h3>
            <p>
              <TextFadeIn
                defaultValue="AI-powered scalability automatically tunes databases, reduces
              latency, and handles large data volumes efficiently, cutting
              management costs by 70%."
              />
            </p>
          </div>

          <div className="feature-item">
            <img src="assets/solution3.png" alt="Data Compliance" />
            <h3>
              <TextSlideUp>Data Compliance Costs Eliminated by 50%</TextSlideUp>
            </h3>
            <p>
              <TextFadeIn
                defaultValue="Pre-packaged with integrated compliance features, real-time SIEM
              monitoring, and credential-free workflows, our solution slashes
              data compliance reporting costs."
              />
            </p>
          </div>
          <div className="feature-item">
            <img src="assets/solution4.png" alt="Code Duplicacy" />
            <h3>
              <TextSlideUp>Reduce Code Duplicacy by 50%</TextSlideUp>
            </h3>
            <p>
              <TextFadeIn
                defaultValue="By avoiding the need to develop everything from scratch, our
              solution reduces code duplicity in your project by up to 80%."
              />
            </p>
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-text">
            <h3>
              <TextSlideUp>Let's discuss about our products</TextSlideUp>
            </h3>
            <a href="#" className="cta-button">
              Book a Call
            </a>
          </div>
          <div className="cta-image">
            <img src="assets/mountain3.png" alt="Nature Image" />
          </div>
        </div>
      </div>
      {/* video section start banner start from here */}

      <div className="container-bn">
        <div className="main-banner">
          {/* <div className="banner-img">
            <ReactPlayer
              url={"https://home.wistia.com/medias/nh7xw6o6x1"}
              width="100%"
            ></ReactPlayer>
          </div> */}
          <img src="assets/videosplit.jpg" alt="" className="img-split"/>

          <div className="banner-content">
            <h1>
              cloud platform that simplifies technology and accelerates your
              business growth
            </h1>
          </div>
        </div>

        <div className="video-card-bns">
          <div className="card-bn">
            <div className="banner-img">
              <ReactPlayer
                url={"https://home.wistia.com/medias/nh7xw6o6x1"}
                width="100%"
              ></ReactPlayer>
            </div>

            <p>
              <TextFadeIn
                defaultValue="Cut Down on the Development Budget: Eliminate the need of DevOps
              with our auto managed solutions"
              />
            </p>
          </div>
          <div className="card-bn">
            <div className="banner-img">
              <ReactPlayer
                url={"https://home.wistia.com/medias/nh7xw6o6x1"}
                width="100%"
              ></ReactPlayer>
            </div>

            <p>
              Cut Down on the Development Budget: Eliminate the need of DevOps
              with our auto managed solutions
            </p>
          </div>
          <div className="card-bn">
            <div className="banner-img">
              <ReactPlayer
                url={"https://home.wistia.com/medias/nh7xw6o6x1"}
                width="100%"
              ></ReactPlayer>
            </div>

            <p>
              Cut Down on the Development Budget: Eliminate the need of DevOps
              with our auto managed solutions
            </p>
          </div>
          <div className="card-bn">
            <div className="banner-img">
              <ReactPlayer
                url={"https://home.wistia.com/medias/nh7xw6o6x1"}
                width="100%"
              ></ReactPlayer>
            </div>

            <p>
              <TextFadeIn
                defaultValue="Cut Down on the Development Budget: Eliminate the need of DevOps
              with our auto managed solutions"
              />
            </p>
          </div>
        </div>
      </div>
      {/* wistia video player  section */}

      <div className="videoPlayerSectionContainer"></div>
      {/* last section start from here  */}

      <div className="unique-press-release-container">
        <div className="unique-press-text-section">
          <h1>
            <TextSlideUp>Press Release</TextSlideUp>
          </h1>
          <p className="unique-subtitle">
            <TextFadeIn
              defaultValue="Unleash the power of real-time updates with Concule. Be the first to
            know about groundbreaking features, strategic partnerships, and
            exclusive events. Our platform is constantly evolving, and this is
            your hub for all the exciting news and developments."
            />
          </p>
          <p>
            <TextFadeIn
              defaultValue="Concule was established in 2022 by a team of visionary tech
            enthusiasts who saw the potential of the cloud to transform how
            businesses operate. With a combined experience of over 5 years in
            cloud computing, software development, and enterprise solutions, our
            founders embarked on a mission to create a platform that is not only
            robust and reliable but also user-centric and adaptable."
            />
          </p>
        </div>
        <div className="unique-press-content-section">
          {release.map((item) => (
            <div class="unique-press-item">
              <div
                className="unique-press-header"
                onClick={() =>
                  setSelectedNews(selectedNews === item.id ? null : item.id)
                }
              >
                <i
                  class={`fas fa-${
                    selectedNews === item.id ? "minus" : "plus"
                  }-circle`}
                ></i>
                <h5>{item.title}</h5>
              </div>
              {selectedNews === item.id && (
                <div className="unique-press-content">
                  <p>{item.description}</p>
                </div>
              )}
              <div className="unique-press-footer">
                <a href="#">
                  <i class="fas fa-file-pdf"></i> PDF Version
                </a>
                <a href="#">
                  <i class="fab fa-linkedin"></i> LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* goiogle sheet  */}
      <div>
        <h1>Data from Google Sheets</h1>
        {error ? (
          <div className="error-message">
            <p>{error}</p>
          </div>
        ) : (
          <ul>
            {data.map((row, index) => (
              <li key={index}>{row.join(" - ")}</li>
            ))}
          </ul>
        )}
        <Footer />
      </div>

      {/* ================== */}
    </div>
  );
};

export default InvestorPage;
