// import React from 'react'
import React, { useState, useEffect } from "react";
import "./PartnerPage.css";
import CustomSlider from "./CustomSlider";
import bx from "../assets/box-icon.png";
import cl from "../assets/cloud-icon.png";

import bg from "../assets/bage-icon.png";
import Button from "./Button";
import Footer from "./Footer";
import useLocoScroll from "../hooks/useLocoScroll";
import TextSlideUp from "../effects/TextSlideUp";
import TextFadeIn from "../effects/TextFadeIn";
import ReactPlayer from "react-player";

const PartnerPage = () => {
  useLocoScroll(true);
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
            console.log(`I got a handle to the video ${video.id}!`, videoApi);
            // Interact with the video API here if needed
          },
        });
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [wistiaVideos]);

  return (
    <div className="home-container" id="main-container">
      {/* <CustomSlider /> */}
      <div className="haha">
        <img src="assets/videosplit.jpg" alt="" className="img-split"/>
        <div className="text-content">
          <h1>
            <TextSlideUp>Low-Code Cloud</TextSlideUp>
          </h1>
          <p>
            <TextFadeIn defaultValue="With our AI-Powered performance management, we ensure that our cloud can be relied upon for time and computational sensitivity." />
          </p>
          <Button text="Start Free Trial" />
        </div>
      </div>
      <section class="prt-partnership-section">
        <h2>
          <TextSlideUp>Partnership Opportunity for Everyone</TextSlideUp>
        </h2>
        <div class="prt-card-container">
          <div class="prt-card">
            <div class="prt-card-icon">
              <img src={bx} alt="Product Partner" />
            </div>
            <h3>
              <TextSlideUp>Product Partner</TextSlideUp>
            </h3>
            <p>
              <TextFadeIn
                defaultValue="Our Product partnership enables open-source partners to present
              their products directly to our customers, expanding their reach
              and market impact."
              />
            </p>
            <Button text="Book a Meeting" />
          </div>

          <div class="prt-card">
            <div class="prt-card-icon">
              <img src={cl} alt="Cloud Partner" />
            </div>
            <h3>
              <TextSlideUp>Cloud Partner</TextSlideUp>
            </h3>
            <p>
              <TextFadeIn
                defaultValue="Our Cloud Partnership enables providers to offer their server
              resources, driving increased revenue and expanding their market
              reach."
              />
            </p>
            <Button text="Book a Meeting" />
          </div>

          <div class="prt-card">
            <div class="prt-card-icon">
              <img src={bg} alt="Expertise Partner" />
            </div>
            <h3>
              <TextSlideUp>Expertise Partner</TextSlideUp>
            </h3>
            <p>
              <TextFadeIn
                defaultValue="Our Expertise Partnership allows product experts to collaborate
              with us, delivering solutions through a revenue-sharing model."
              />
            </p>
            <Button text="Book a Meeting" />
          </div>
        </div>
      </section>
      {/* partner page second section start from here  */}
      <section class="prd-partnership-section">
        <div class="prd-card-container">
          {/* <!-- Product Partnership Card --> */}
          <div class="prd-partnership-card">
            <div class="prd-card-content">
              <h3>
                <TextSlideUp>Product Partnership</TextSlideUp>
              </h3>
              <p>
                <TextFadeIn
                  defaultValue="Welcome to [Company Name], where innovation meets excellence in
                cloud technology. Founded with a vision to reshape the digital
                landscape, we are dedicated to providing cutting-edge cloud
                solutions that empower businesses to thrive in an ever-evolving
                technological world."
                />
              </p>
              <p>
                <TextFadeIn
                  defaultValue="[Company Name] was established in [Year] by a team of visionary
                entrepreneurs who saw the potential of the cloud to transform
                businesses. Today, with a combined experience of over [X] years
                in cloud computing, software development, and enterprise
                solutions, our team has established an all-in-one service
                platform that is not only robust and reliable but also
                user-centric and adaptable."
                />
              </p>
              <Button text="Book a Meeting" />
            </div>
            <div class="prd-video-container">
              <ReactPlayer
                url={"https://home.wistia.com/medias/nh7xw6o6x1"}
                width="100%"
              ></ReactPlayer>
            </div>
          </div>

          {/* <!-- Cloud Partnership Card --> */}
          <div class="prd-partnership-card prd-reverse">
            <div class="prd-card-content">
              <h3>
                <TextSlideUp>Cloud Partnership</TextSlideUp>
              </h3>
              <p>
                <TextFadeIn
                  defaultValue="With our expertise in cloud computing, we help organizations of
                all sizes adapt to the digital age with scalable, secure, and
                cost-effective solutions. Our cloud partnership services are
                designed to provide businesses with the agility they need to
                succeed in a fast-paced environment."
                />
              </p>
              <Button text="Book a Meeting" />
            </div>
            <div class="prd-video-container">
              <ReactPlayer
                url={"https://home.wistia.com/medias/nh7xw6o6x1"}
                width="100%"
              ></ReactPlayer>
            </div>
          </div>

          {/* <!-- Expertise Partnership Card --> */}
          <div class="prd-partnership-card">
            <div class="prd-card-content">
              <h3>
                <TextSlideUp>Expertise Partnership</TextSlideUp>
              </h3>
              <p>
                <TextFadeIn
                  defaultValue="Welcome to [Company Name], where we bring together expertise and
                innovation to deliver unparalleled technology solutions. Our
                focus is on building long-term partnerships that drive business
                success through continuous improvement and innovation."
                />
              </p>
              <p>
                <TextFadeIn
                  defaultValue="With our deep knowledge of the latest technological trends, we
                provide expert guidance and solutions that help businesses stay
                ahead of the competition. Our expertise partnership services are
                tailored to meet the unique needs of each client, ensuring that
                they receive the best possible support."
                />
              </p>
              <Button text="Book a Meeting" />
            </div>
            <div class="prd-video-container">
              <ReactPlayer
                url={"https://home.wistia.com/medias/nh7xw6o6x1"}
                width="100%"
              ></ReactPlayer>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PartnerPage;
