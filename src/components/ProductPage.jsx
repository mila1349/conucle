import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import CustomSlider from "./CustomSlider";
import bx from "../assets/box-icon.png";
import cl from "../assets/cloud-icon.png";
import bg from "../assets/bage-icon.png";
import Button from "./Button";
import Footer from "./Footer";
import useLocoScroll from "../hooks/useLocoScroll";
import TextSlideUp from "../effects/TextSlideUp";
import TextFadeIn from "../effects/TextFadeIn";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const ProductPage = () => {
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
      <CustomSlider />
      <section className="prt-partnership-section2">
        <h2>
          <TextSlideUp>
            Product page Partnership Opportunity for Everyone
          </TextSlideUp>
        </h2>
        <div className="prt-card-container2">
          <div className="prt-card2">
            <div className="prt-card-icon2">
              <img src={bx} alt="Product Partner" />
            </div>
            <h3>
              <TextSlideUp>Product Partner</TextSlideUp>
            </h3>
          </div>

          <div className="prt-card2">
            <div className="prt-card-icon2">
              <img src={cl} alt="Cloud Partner" />
            </div>
            <h3>
              <TextSlideUp>Cloud Partner</TextSlideUp>
            </h3>
          </div>

          <div className="prt-card2">
            <div className="prt-card-icon2">
              <img src={bg} alt="Expertise Partner" />
            </div>
            <h3>
              <TextSlideUp>Expertise Partner</TextSlideUp>
            </h3>
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
              <ul>
                <li>
                <TextFadeIn
                  defaultValue="where innovation meets excellence in
                cloud technology."
                />
                </li>
                <li>
                <TextFadeIn
                  defaultValue="where innovation meets excellence in
                cloud technology."
                />
                </li>
              </ul>
              
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
              <ul>
                <li>
                <TextFadeIn
                  defaultValue="where innovation meets excellence in
                cloud technology."
                />
                </li>
                <li>
                <TextFadeIn
                  defaultValue="where innovation meets excellence in
                cloud technology."
                />
                </li>
              </ul>
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
              <ul>
                <li>
                <TextFadeIn
                  defaultValue="where innovation meets excellence in
                cloud technology."
                />
                </li>
                <li>
                <TextFadeIn
                  defaultValue="where innovation meets excellence in
                cloud technology."
                />
                </li>
              </ul>
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

export default ProductPage;
