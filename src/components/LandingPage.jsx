import React, { useState, useEffect } from "react";
import "./LandingPage.scss";
import Vdev from "../assets/vis-dev.png";
import PreBuilt from "../assets/pre-bult.png";
import RealTime from "../assets/real-time.png";
import Analyte from "../assets/analytical.png";
import Automated from "../assets/automated.png";
import CustomSlider from "./CustomSlider";
import Button from "./Button";
import useLocoScroll from "../hooks/useLocoScroll";
import Footer from "./Footer";
import TextSlideUp from "../effects/TextSlideUp";
import TextFadeIn from "../effects/TextFadeIn";
import { AnimatePresence, motion } from "framer-motion";
import ButtonArrow from "./ButtonArrow";

const variants = {
  hidden: {
    top: -100,
    left: -100,
    opacity: 0,
    zIndex: 100,
  },
  initView: {
    top: "100vh",
    left: "100vw",
    opacity: 0,
  },
};

const LandingPage = () => {
  const [view, setView] = useState(false);
  const [exit, setExit] = useState(null);
  const [reviewData, setReviewData] = useState([
    {
      id: 0,
      name: "Cassandra Lee",
      title: "Software Engineer, Google",
      review:
        "The visual development tools are incredibly intuitive, allowing us to build and deploy applications faster than ever. Our team’s productivity has skyrocketed since we adopted this platform. We’ve been able to focus more on innovation rather than coding from scratch.",
      img: "assets/card-girl1.jpeg",
    },
    {
      id: 1,
      name: "Lee Taeyong",
      title: "Art Director",
      review:
        "The visual development tools are incredibly intuitive, allowing us to build and deploy applications faster than ever. Our team’s productivity has skyrocketed since we adopted this platform. We’ve been able to focus more on innovation rather than coding from scratch.",
      img: "assets/card-boy1.jpeg",
    },
    {
      id: 2,
      name: "Haechan",
      title: "Comedian",
      review:
        "The visual development tools are incredibly intuitive, allowing us to build and deploy applications faster than ever. Our team’s productivity has skyrocketed since we adopted this platform. We’ve been able to focus more on innovation rather than coding from scratch.",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/33/20231006_Haechan_%28NCT%29.jpg",
    },
    {
      id: 3,
      name: "Nakamoto Yuta",
      title: "Teacher",
      review:
        "The visual development tools are incredibly intuitive, allowing us to build and deploy applications faster than ever. Our team’s productivity has skyrocketed since we adopted this platform. We’ve been able to focus more on innovation rather than coding from scratch.",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/48/20231006_Yuta_%28NCT%29.jpg",
    },
    {
      id: 4,
      name: "Huang Guan Heng",
      title: "Dancer",
      review:
        "The visual development tools are incredibly intuitive, allowing us to build and deploy applications faster than ever. Our team’s productivity has skyrocketed since we adopted this platform. We’ve been able to focus more on innovation rather than coding from scratch.",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/86/Hendery_Wong_at_Incheon_International_Airport%2C_South_Korea%2C_May_2019_01.png",
    },
  ]);

  const getOpacity = (index) => {
    if (index === 0) {
      return "100%";
    } else if (index === 1) {
      return "80%";
    } else if (index === 2) {
      return "50%";
    } else {
      return "0%";
    }
  };

  function prev() {
    if (!exit) {
      const added = reviewData.pop();
      setReviewData([added, ...reviewData]);
    } else {
      setExit(false);
    }
  }

  function next() {
    if (exit) {
      const hilang = reviewData.shift();
      setReviewData([...reviewData, hilang]);
    } else {
      setExit(true);
    }
  }

  useEffect(() => {
    if (exit === false) {
      prev();
    } else if (exit) {
      next();
    }
  }, [exit]);

  useLocoScroll(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="home-container" id="main-container">
      <CustomSlider />

      {/* landing page section 2 start from here  */}

      <section className="content-prog">
        <div className="text-content-prog">
          <h1>
            <TextSlideUp>Accelerate Development with Power</TextSlideUp>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button text="Start Free Trial" />
        </div>
        <div className="cards">
          <div className="card green card-1">
            <motion.div
              className="progress-fill"
              initial={{ height: "0%" }}
              transition={{ duration: 1 }}
              whileInView={{ height: "99%" }}
              viewport={{ once: true }}
            ></motion.div>
            <div className="card-content">
              <span>
                <h2>
                  <TextSlideUp> 99%</TextSlideUp>
                </h2>
              </span>
              <span>
                <h5>
                  <TextFadeIn defaultValue="Cyber Compliance Ensured Data" />
                </h5>
                <hr />
                <p>
                  <TextFadeIn
                    defaultValue="With a proven 99.9% data protection success rate, we guarantee
                  the integrity and safety of your data at all times."
                  />
                </p>
              </span>
            </div>
          </div>
          <div className="card lightgreen card-2">
            <motion.div
              className="progress-fill"
              initial={{ height: "0%" }}
              transition={{ duration: 1 }}
              whileInView={{ height: "70%" }}
              viewport={{ once: true }}
            >
              <span>
                <h5>
                  <TextFadeIn defaultValue="Reduce Product Development Costs by" />
                </h5>
                <hr />
                <p>
                  <TextFadeIn
                    defaultValue="Streamline your project with conucle.io's managed apps and
                  enjoy substantial savings on development costs."
                  />
                </p>
              </span>

              <h2>
                <TextSlideUp>70%</TextSlideUp>
              </h2>
            </motion.div>
          </div>
          <div className="card white card-3">
            <motion.div
              className="progress-fill"
              initial={{ height: "0%" }}
              transition={{ duration: 1 }}
              whileInView={{ height: "99%" }}
              viewport={{ once: true }}
            ></motion.div>
            <div className="card-content">
              <span>
                <h5>
                  <TextFadeIn defaultValue="Features Designed As Per Different Customer Needs" />
                </h5>
                <hr />
                <p>
                  <TextFadeIn
                    defaultValue="Achieving zero negative feedback guarantees complete customer
                  satisfaction."
                  />
                </p>
              </span>
              <h2>
                <TextSlideUp>0%</TextSlideUp>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ending section */}

      {/* infull wdith image section */}

      <div class="image-container">
        <motion.div
          className="logo"
          initial={{ x: -500 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="assets/leave.png"
            alt=""
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          />
          <h1
            className="conucle-1"
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            CONUCLE
          </h1>
        </motion.div>
        <img src="assets/conucle.png" alt="Full Size" className="big-img" />
        <motion.div
          className="conucle-2"
          initial={{ x: 500 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            CONUCLE
          </h1>
        </motion.div>
      </div>

      {/* third section below full width image  */}

      <nav className="navigation">
        <div className="ribbon">
          <button>
            <p> Development Interface</p>
          </button>
          <button>
            <p>Pre-Built Components</p>
          </button>
          <button>
            <p>Customizable Templates</p>
          </button>
          <button>
            <p>Automated Workflows</p>
          </button>
          <button>
            <p>Analytics and Reporting</p>
          </button>
          <button>
            <p>Scalability</p>
          </button>
          <button>
            <p>Scalability</p>
          </button>
        </div>
      </nav>

      {/* ending of section */}

      {/* custumer review section start here */}
      <section className="content">
        <div className="text-content">
          <span className="quote"></span>
          <h1>
            <TextSlideUp>What our customer says</TextSlideUp>
          </h1>
          <p>
            <TextFadeIn
              defaultValue="At [Your Company], our clients' feedback is at the heart of what we
            do. We’re proud to share the experiences of those who have
            transformed their businesses with our low-code cloud platform."
            />
          </p>
          {/* <Button text="Start Free Trial" /> */}
          <div className="btn-card-container">
            <ButtonArrow left color="white" onClick={() => prev()}>
              prev
            </ButtonArrow>
            <ButtonArrow color="green" onClick={() => next()}>
              next
            </ButtonArrow>
          </div>
        </div>

        <motion.div
          className="cards-container1"
          whileInView={() => setView(true)}
        >
          {reviewData.map((item, index) => (
            <AnimatePresence>
              <motion.div
                className={`card1 card-item-${index}`}
                key={item.id}
                variants={variants}
                style={{
                  top: `${index * 20}px`,
                  left: `${index * 30}px`,
                  zIndex: 0 + (reviewData.length - index),
                  opacity: getOpacity(index),
                }}
                initial={
                 !exit && reviewData[0].id === item.id && "hidden"
                }
                animate={
                  !exit
                    && {
                        top: `${index * 20}px`,
                        left: `${index * 30}px`,
                        zIndex: 0 + (reviewData.length - index),
                        opacity: getOpacity(index),
                      }
                }
                exit={exit && "hidden"}
                transition={
                  { duration: 0.2 }
                }
              >
                <img src={item.img} alt="Customerimg" />
                <div className="description">
                  <span>
                    <h4>{item.name}</h4>
                    <h3>{item.title}</h3>
                  </span>
                  <p>{item.review}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          ))}
        </motion.div>
      </section>
      {/* end of section */}

      {/* last section  */}

      <nav className="navigation">
        <div className="ribbon">
          <button>
            <p> Development Interface</p>
          </button>
          <button>
            <p>Pre-Built Components</p>
          </button>
          <button>
            <p>Customizable Templates</p>
          </button>
          <button>
            <p>Automated Workflows</p>
          </button>
          <button>
            <p>Analytics and Reporting</p>
          </button>
          <button>
            <p>Scalability</p>
          </button>
          <button>
            <p>Scalability</p>
          </button>
        </div>
      </nav>

      <section class="features">
        <div class="feature-card">
          <img src={PreBuilt} alt="Pre-built Component" />
          <p>Pre-built Component</p>
        </div>
        <div class="feature-card">
          <img src={Vdev} alt="Visual Development Interface" />
          <p>Visual Development Interface</p>
        </div>
        <div class="feature-card">
          <img src={RealTime} alt="Real-Time Collaboration" />
          <p>Real-Time Collaboration</p>
        </div>
        <div class="feature-card">
          <img src={Analyte} alt="Analytics and Reporting" />
          <p>Analytics and Reporting</p>
        </div>
        <div class="feature-card">
          <img src={Automated} alt="Automated Workflows" />
          <p>Automated Workflows</p>
        </div>
        <div class="explore-text">
          <h2>Explore Our Features</h2>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
