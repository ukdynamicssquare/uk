import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, FreeMode, Mousewheel, Navigation } from "swiper";
import ModalVideo from "react-modal-video";
import Blog from "../../components/Blog";
const PowerBI = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Power BI Experts, Services, Consultant, Demo & Pricing</title>
        <meta
          name="description"
          content="Need Microsoft Power BI consultant services in the UK? Hire a trusted Power BI expert to transform your data into actionable insights. Get free Power BI demo & pricing today."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/power-bi/" />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Az1NOVaHexs"
        onClose={() => setOpen(false)}
      />
       <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 align-self-center">
              <h1 className="new-heding-colo">
              Microsoft Power BI
              </h1>
              <h2 className="heading-h2">
              Mine your data to boost <br /> business growth
              </h2>
              <p className="banner-para">
              Make your data drive growth and profitability by creating <br /> accurate visualizations with Power BI. Talk to our Power BI consultant today.
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get Free Consultation</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/Power-BI-banner.png"
                alt="Power-BI-banner"
                width={1165}
                height={608}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header section-header-new-ct">
              <h2>Take charge 
                  <br /> <span> of your data with Power BI</span>
                </h2>
              </header>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="vide-s">
                <video className="video-screen" autoPlay loop muted poster="/img/video-thumb.png">
                  <source src="/video/powerBI-vid.mp4" />
                </video>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="new-sol-con-side">
                <p>Data is the new business currency if appropriately used. Although you might be surrounded by it, chances are high that you need to utilise it to produce valuable insights. With the amount of information you produce daily, you are potentially sitting on a gold mine, ready to be explored. However, the challenge is knowing how. This is exactly where Microsoft Power BI helps. Let's understand what Power BI is.</p>
                <p>MS Power BI is a set of Business Intelligence tools that help you collect, analyse, visualise, and integrate data in a way that becomes your second nature to make data-driven decisions.</p>
                <p>More than a digitalisation move, using Power BI is a business transformation strategy. The amazing benefit of Power BI is that any member of your team can visualise data and produce insights regardless of technical aptitude. Power BI comes with easy-to-use dashboards, interactive visualisations, and insightful <Link href="https://blog.dynamicssquare.co.uk/power-bi-reports/">reports</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center" style={{paddingBottom:"40px"}}>
            <div className="col-lg-9">
              <header className="section-header section-header-new-ct">
                <h2>
                <span>Simple & quick way to </span> unlock data
                </h2>
                <p>The market is not short of business intelligence tools, but there is a sharp distinction that Power BI possesses against other software. Deriving intelligent business insights involves integrating data from multiple sources, harvesting contextual value from the volumes of information, and producing easy-to-understand reports. Not every BI tool can handle such an overwhelming and accuracy-demanding process. Power BI, on the other hand, can streamline data analytics and help you make informed business decisions in real-time with on-premises or in-the-cloud dashboards and appealing reports.</p>
                <p style={{color:'#1d3557'}}><b>With Microsoft Power BI, you can</b></p>
              </header>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div>
            <Swiper
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    speed: 20000,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    speed: 20000,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                    speed: 20000,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                    speed: 20000,
                  },
                  1300: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                    speed: 20000,
                  },
                  1400: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                    speed: 20000,
                  }
                }}
                loop={true}
                freeMode={true}
                mousewheel={false}
                pagination={{
                  clickable: false,
                }}
                modules={[Autoplay, FreeMode, Mousewheel]}
                className="mySwiper busine-swiper"
              >
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title power-title">
                      Know what's happening as it happens
                      </h3>
                      <p className="card-text">
                      Understand your business performance quickly with smart dashboards that you can customize as per your needs and business KPIs. Learn contextualised effects of your decisions by predicting their results and avoiding unforeseen pitfalls.
                      </p>
                    </div>
                    <img
                      src="/img/slider-bi-dem-1.png"
                      className="card-img-bottom"
                      alt="..."
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title power-title">
                      Drag & drop data to visualise insights
                      </h3>
                      <p className="card-text">
                      Tweak data visualisations using intuitive filters and drag-and-drop data features to uncover patterns to make smart actions. Generate multiple reports in different contexts to monitor business growth and gain real-time insights.
                      </p>
                    </div>
                    <img
                      src="/img/slider-bi-dem-2.png"
                      className="card-img-bottom"
                      alt="..."
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title power-title">
                      Access intelligence from anywhere
                      </h3>
                      <p className="card-text">
                      Keep your business intelligence hub handy with a mobile Power BI dashboard through the Power BI app for iOS, Android, and Windows. Access your visual reports and personalised insights from anywhere in the world.
                      </p>
                    </div>
                    <img
                      src="/img/slider-bi-dem-3.png"
                      className="card-img-bottom"
                      alt="..."
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title power-title">
                      Keep your data protected at all times
                      </h3>
                      <p className="card-text">
                      Make security an inherent business culture by protecting your data through strong governance policies across report sharing, BYOK (Bring Your Own Key), and real-time access monitoring.
                      </p>
                    </div>
                    <img
                      src="/img/slider-bi-dem-4.png"
                      className="card-img-bottom"
                      alt="..."
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title power-title">
                      Your personal intelligence assistance
                      </h3>
                      <p className="card-text">You don't have to learn complex query language or make complicated adjustments to get the reports you need. All you need to do is ask the questions in natural language and Power BI will produce refined visualisations.</p>
                    </div>
                    <img
                      src="/img/slider-bi-dem-5.png"
                      className="card-img-bottom"
                      alt="..."
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card-ds-slide">
                    <div className="card-body">
                      <h3 className="card-title power-title">
                      Foster a culture of collaboration
                      </h3>
                      <p className="card-text">
                      Give your team access to live reports and dashboards so that you implement a data-led approach to business operations and achieve accuracy and excellence. Enthrall your customers with data-rich presentations.
                      </p>
                    </div>
                    <img
                      src="/img/slider-bi-dem-6.png"
                      className="card-img-bottom"
                      alt="..."
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div>
                <div className="text-center">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Schedule a call</span>
                    </a>
                  </Link>
                </div>
              </div>
        </div>
      </section>

      {/* <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <img src="/img/micrsoft-bc-image.png" alt="" />
          </div>
        </div>
      </div> */}

      <section className="nn-bg">
        {/* <div className="bb">
          <img src="/img/bus-bg.png" alt="bgimage" />
        </div> */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header section-header-new-ct">
                <h2>
                  <span>Microsoft Power BI </span>Capabilities
                </h2>
              </header>
            </div>
          </div>
          <div className="row solution-new-tab-content d-lg-none">
            <div className="col-lg-12">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <span>Power BI Desktop</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <ul>
                        <li>Generate high-quality & visual reports through free to install Windows desktop BI app</li>
                        <li>Build seamless data models through a UI as simple as that of Excel & Powerpoint</li>
                        <li>Impress your board with compelling reports featuring multiple pages, Power BI visuals, buttons, and filters</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Feel Free to Contact Us to Get a Demo</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <span>Power BI Mobile</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <ul>
                        <li>Drive your business remotely by accessing data through your mobile devices</li>
                        <li>Gain a comprehensive view of your data analytics on live dashboards on the go</li>
                        <li>Annotate reports & set alerts and push notifications via Power BI mobile app</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Contact us to get a quote</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <span>Power BI Service</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <ul>
                        <li>Distribute your visually attractive and informative reports easily</li>
                        <li>Pack your reports with enterprise-grade details and enable create & edit features online</li>
                        <li>Streamline collaboration by enabling your team to create reports using your data</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Feel Free to Contact Us to Get a Demo</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <span>Power BI Pro</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <ul>
                        <li>Share data visualisations easily with team for enhanced collaboration</li>
                        <li>Let data guide your decision-making process by accessing visualizations on mobile</li>
                        <li>Adjust permissions to share data visualizations and report to individuals outside the office</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Feel free to contact us to get a demo</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <span>Power BI Premium</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <ul>
                        <li>Utilise advance functionalities like application lifecycle management, paginated reports, etc.</li>
                        <li>Use visual cues to push your content from development through testing to production</li>
                        <li>Access and share Power BI dashboard from mobile with Power BI mobile and also share reports on the go</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Contact us to get a quote</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <span>Power Embedded</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <ul>
                        <li>Leverage capabilities and features with embedded Power BI from within your applications</li>
                        <li>Automate monitoring, management and deployment of analytics</li>
                        <li>Take complete control of access and authorization to make changes in reports</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Streamline your projects today</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin7"
                        aria-expanded="false"
                        aria-controls="fin7"
                      >
                        <span>Power BI Report Server</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="inner-con-div">
                      <ul>
                        <li>Create interactive reports with enterprise capabilities of SQL Server Reporting Services</li>
                        <li>Allow and manage access to reports through a centralized dashboard</li>
                        <li>Customise reports at scale with freeform drag-and-drop capabilities</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Book Free Consultation</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row tabs-none">
            <div className="cpl-lg-12">
              <div className="d-flex align-items-start">
                <div
                  className="nav flex-column nav-pills me-3 solution-new-tab"
                  id="s-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="s-pills-home-1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-1"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-1"
                    aria-selected="true"
                  >
                    <h3>Power BI Desktop</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-2"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-2"
                    aria-selected="false"
                  >
                    <h3>Power BI Mobile</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-hpme-3-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-hpme-3"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-hpme-3"
                    aria-selected="false"
                  >
                    <h3>Power BI Service</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-4-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-4"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-4"
                    aria-selected="false"
                  >
                    <h3>Power BI Pro</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-5-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-5"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-5"
                    aria-selected="false"
                  >
                    <h3>Power BI Premium</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-6-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-6"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-6"
                    aria-selected="false"
                  >
                    <h3>Power Embedded</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-7-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-7"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-7"
                    aria-selected="false"
                  >
                    <h3>Power BI Report Server</h3>
                  </button>
                </div>
                <div
                  className="tab-content solution-new-tab-content"
                  id="s-pills-tabContent-"
                >
                  <div
                    className="tab-pane fade show active"
                    id="s-pills-home-1"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-1-tab"
                  >
                    <div className="inner-con-div">
                      <ul>
                        <li>Generate high-quality & visual reports through free to install Windows desktop BI app</li>
                        <li>Build seamless data models through a UI as simple as that of Excel & Powerpoint</li>
                        <li>Impress your board with compelling reports featuring multiple pages, Power BI visuals, buttons, and filters</li>
                      </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Feel Free to Contact Us to Get a Demo</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-2"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-2-tab"
                  >
                      <div className="inner-con-div">
                        <ul>
                          <li>Drive your business remotely by accessing data through your mobile devices</li>
                          <li>Gain a comprehensive view of your data analytics on live dashboards on the go</li>
                          <li>Annotate reports & set alerts and push notifications via Power BI mobile app</li>
                        </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Contact us to get a quote</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-hpme-3"
                    role="tabpanel"
                    aria-labelledby="s-pills-hpme-3-tab"
                  >
                    <div className="inner-con-div">
                        <ul>
                          <li>Distribute your visually attractive and informative reports easily</li>
                          <li>Pack your reports with enterprise-grade details and enable create & edit features online</li>
                          <li>Streamline collaboration by enabling your team to create reports using your data</li>
                        </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Feel Free to Contact Us to Get a Demo</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-4"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-4-tab"
                  >
                    <div className="inner-con-div">
                    <ul>
                          <li>Share data visualisations easily with team for enhanced collaboration</li>
                          <li>Let data guide your decision-making process by accessing visualizations on mobile</li>
                          <li>Adjust permissions to share data visualizations and report to individuals outside the office</li>
                        </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Feel free to contact us to get a demo</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-5"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-5-tab"
                  >
                    <div className="inner-con-div">
                    <ul>
                          <li>Utilise advance functionalities like application lifecycle management, paginated reports, etc.</li>
                          <li>Use visual cues to push your content from development through testing to production</li>
                          <li>Access and share Power BI dashboard from mobile with Power BI mobile and also share reports on the go</li>
                        </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Contact us to get a quote</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-6"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-6-tab"
                  >
                    <div className="inner-con-div">
                    <ul>
                          <li>Leverage capabilities and features with embedded Power BI from within your applications
</li>
                          <li>Automate monitoring, management and deployment of analytics</li>
                          <li>Take complete control of access and authorization to make changes in reports</li>
                        </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Streamline your projects today</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-7"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-7-tab"
                  >
                    <div className="inner-con-div">
                    <ul>
                          <li>Create interactive reports with enterprise capabilities of SQL Server Reporting Services</li>
                          <li>Allow and manage access to reports through a centralized dashboard</li>
                          <li>Customise reports at scale with freeform drag-and-drop capabilities</li>
                        </ul>
                      <div className="call-butt">
                        <Link href="#exampleModal">
                          <a
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto"
                          >
                            <span>Book Free Consultation</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="casestudys" className="casestudys ">
        <div className="container" data-aos="fade-up">
          <div className="row  gy-4">
     
            <div className="col-lg-6 align-self-center">
              <div className="sec-title">
                <h2>Glimpse Of What We Delivered</h2>
                <p>Dynamics 365 Case Stories</p>
              </div>
              <Swiper
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper casestudys-sled-1"
              >
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      <img
                        src="/img/case-1.png"
                        className="casestudys-slider-item-img"
                        alt=""
                      />
                      <p>
                        A leading British based manufacturer of Military
                        Equipment implemented Microsoft Dynamics 365 Business
                        Central to streamline their finance and inventory
                        management process.
                      </p>
                      <div className="case-content-wrapper">
                        <div className="case-content">
                          <p>2X</p>
                          <span>Data Simplification & Processing</span>
                        </div>
                        <div className="case-content">
                          <p>80%</p>
                          <span>Data Simplification & Processing</span>
                        </div>
                      </div>
                      <div className="case-button">
                        <Link href="/case-studies/cqc/">
                          <a className="btn btn-md btn-custom-1">Read more customer success stories</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      <img
                        src="/img/crm-trading.png"
                        className="casestudys-slider-item-img"
                        alt="crm-trading"
                      />
                      <p>
                        UK's leading fragrance, skincare, cosmetics, and
                        haircare wholesaler was looking to improve its
                        operational efficiencies with Microsoft Dynamics NAV
                        2018. Discover now.
                      </p>
                      <div className="case-content-wrapper">
                        <div className="case-content">
                          <p>4x</p>
                          <span>Improved Inventory System</span>
                        </div>
                        <div className="case-content">
                          <p>100%</p>
                          <span>Alliance with HMRC</span>
                        </div>
                      </div>
                      <div className="case-button">
                        <Link href="/case-studies/crm-trading/">
                          <a className="btn btn-md btn-custom-1">Read more customer success stories</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      <img
                        src="/img/wipersupplywide.png"
                        className="casestudys-slider-item-img"
                        alt="wipersupplywide"
                      />
                      <p>
                        British-based Hygienic Disposable Cleaning & Wiping
                        Products wholesaler wanted to up and cross sell to
                        increase the sales volume with customers. Read how they
                        did it!
                      </p>
                      <div className="case-content-wrapper">
                        <div className="case-content">
                          <p>10x</p>
                          <span>Improved Customer Experience</span>
                        </div>
                        <div className="case-content">
                          <p>50%</p>
                          <span>Increased Sales Revenue</span>
                        </div>
                      </div>
                      <div className="case-button">
                        <Link href="/case-studies/wiper-supply-services/">
                          <a className="btn btn-md btn-custom-1">Read more customer success stories</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>  
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-5 align-self-center">
              <Image
                src="/img/case-study-side-banner.png"
                alt="case-study-side-banner"
                width={640}
                height={592}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Do you want to watch Power BI in Action?</h3>
                <p>Discuss your business problems with our Power BI experts, we can reveal the best-in-class Power BI solution customized to your business.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    
                    className="btn-get-started scrollto"
                  >
                    <span>Get Started Now</span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header section-header-new-ct">
                <h2><span>Why do</span> global brands <span>trust Dynamics Square?</span></h2>
                <p>Eliminate the guesswork from your decisioning process and arm your business with data analytics to leverage the valuable data that you generate. Analyze information from multiple data sources to derive key insights that enable the right action at the right time.</p>
                <p style={{ color: "var(--color-blue)", fontSize: "18px" }}>
                  <br></br>
                  <h3>Our Power BI consulting services include:</h3>
                </p>
              </header>
            </div>
          </div>
          <div className="row ppd-top">
            <div className="col-lg-4">
              <div className="new-card-sol new-card-sol-b">
                <div className="head-img">
                  <img src="/img/power-bi-icons-1.png" alt="icons" />
                </div>
                <div className="body">
                  <h3>Power BI Implementation</h3>
                  <p>Supercharge your business strategy with data analysis, pattern modelling, and visual reporting with successfully implemented Power BI integration. Kickstart your data-driven growth journey with a Power BI dashboard that includes bespoke functions and capabilities. Our team of Power BI experts, analysts, and engineers makes your business relevant in these competitive times with a solid BI roadmap.</p>
                  <Link href="#exampleModal">
                    <a data-bs-toggle="modal">
                      <span>Implement Now</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="new-card-sol new-card-sol-b">
                <div className="head-img">
                  <img src="/img/power-bi-icons-2.png" alt="icons" />
                </div>
                <div className="body">
                  <h3>Power BI Support</h3>
                  <p>Our dedicated <Link href="/power-bi-support/">Power BI support</Link> team offers absolute support and maintenance around the clock at every stage of BI implementation and deployment. Our support offerings include Power BI API assistance for BI templates and staff Power BI training through a hand-holding model. Our end-to-end training and support will ensure that your team is fully capable of data integration, modelling, analysing, and building stunning visuals.</p>
                  <Link href="#exampleModal">
                    <a data-bs-toggle="modal">
                      <span>Call For Support</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="new-card-sol new-card-sol-b">
                <div className="head-img">
                  <img src="/img/power-bi-icons-3.png" alt="icons" />
                </div>
                <div className="body">
                  <h3>Power BI Migration</h3>
                  <p>Microsoft Power BI facilitates ease of use when dealing with advanced capabilities like data mining, data analytics, and data visualization. Although you may manage your datasets on other third-party tools, Power BI will enable you to drive the true value of your data. However, moving from your existing legacy BI tool to Power BI will need a roadmap from an expert migration service provider by us. Our expert team can handle the complete extent of your migration requirements starting from establishing a preliminary BI architecture to migrating from a legacy BI.</p>
                  <Link href="#exampleModal">
                    <a data-bs-toggle="modal">
                      <span>Migrate to BI Today</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="back-bg back-power-bi">
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="sidenn-wr">
                <h2>Dynamics Square - Your Perfect <br /> <span>Power BI partner</span></h2>
                <div className="repet-col">
                  <div className="icon">
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <div className="cont">
                    <p>We are a Gold Microsoft Partner and our core competent team is fully certified and is regularly updated</p>
                  </div>
                </div>
                <div className="repet-col">
                  <div className="icon">
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <div className="cont">
                    <p>Our customer-first policy ensures that businesses derive maximum ROI with an optimized strategy and Power BI help</p>
                  </div>
                </div>
                <div className="repet-col">
                  <div className="icon">
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <div className="cont">
                    <p>Our flexible Power BI pricing options give enterprises of all sizes to leverage the key benefits & capabilities of Power BI</p>
                  </div>
                </div>
                <div className="cll-bt">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Talk to expert</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h2>Microsoft Power BI Pricing</h2>
            <p>
              Being a trusted Power BI implementation partner, we can reveal the
              best-suited <Link href="https://blog.dynamicssquare.co.uk/power-bi-pricing-uk/"><a>Power BI pricing</a></Link> plans for your business to grow.
            </p>
          </header>
          <div className="row gy-4 p-9">
            <div className="col-lg-4">
              <div className="box power-new-price">
                <h3>
                  Power BI <br />
                  Pro
                </h3>
                <div className="price price-power">
                  £7.50<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Connect to over 100 data
                    sources
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Mobile app
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>1GB model size limit
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Embed Power BI visuals
                    into PowerApps, SharePoint and Teams
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>8 Data refreshes daily
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>10 GB per user storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>AI visuals
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Embedded APIs and controls
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Data security and
                    encryption
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Metrics with content
                    creation and publishing
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Native integration with
                    other Microsoft solutions
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Share dashboards,
                    datasets, and reports with other Power BI users
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Create app work and
                    peer-to-peer sharing
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box power-new-price">
                <h3>
                  Power BI
                  <br />
                  Premium
                </h3>
                <div className="price price-power">
                  £15.10<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>100 GB model size limit
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>100 TB of storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Access to one API surface
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>XMLA endpoint read/write
                    connectivity
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Data flows
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Analyse data stored in
                    Azure Data Lake Storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Application lifecycle
                    management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Embed Power BI visuals
                    into PowerApps, SharePoint and Teams
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Larger storage size for
                    extended deployment
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Advanced AI features
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>48 data refreshes daily
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Geo distribution, pin to
                    memory and read-only replicas
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Publish reports to share
                    and collaborate
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box power-new-price">
                <h3>
                  Power BI
                  <br />
                  Premium
                </h3>
                <div className="price price-power">
                  £3,766.70<span>Per Capacity/Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>100 GB model size limit
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>100 TB of storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Access to one API surface
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>XMLA endpoint read/write
                    connectivity
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Data flows
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Analyse data stored in
                    Azure Data Lake Storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Application lifecycle
                    management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Embed Power BI visuals
                    into PowerApps, SharePoint and Teams
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Larger storage size for
                    extended deployment
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Advanced AI features
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>48 data refreshes daily
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Geo distribution, pin to
                    memory and read-only replicas
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>On-premise reporting
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>400 GB model size limit
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Azure Autoscale add-on
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Multi-location deployment
                    management
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link href="#exampleModal">
                  <a data-bs-toggle="modal" className="btn-get-red">
                    <span>Get Power Bi Now</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="solution-faq faq">
        <div className="container">
          <header className="section-header">
            <h2>
              Have you got
              <br />
              questions about Power BI?
            </h2>
            <p>Click through to our FAQ for the best answers!</p>
          </header>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      What is Power BI?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Power BI is Microsoft's highly embedded analytics tool to
                      develop and share reports with people across your
                      business. Power BI is designed that can seamlessly be
                      configured with Microsoft's own applications as well as
                      other well-known third-party applications so as businesses
                      without disturbing their existing system set-up can avail
                      of Power BI and get it configured with their existing
                      system to work in an integrated manner.
                      <br />
                      <br />
                      Power BI helps enterprises to make powerful reporting
                      visuals, key analytics, and other graphical analysis.
                      Users can even develop their own visuals suited to their
                      specific business needs and can share the same within
                      their organization to be used further by their workforce.
                      All the Power BI reports can be published and demonstrated
                      on user dashboards. These reports and insights available
                      in different visualizations help businesses for better
                      decision making. Moreover, dashboards can also be
                      customized to address specific user needs. <br />
                      <br />
                      Get more insight about "
                      <a
                        href="https://blog.dynamicssquare.co.uk/what-is-power-bi/"
                        rel=""
                      >
                        What is Power BI?
                      </a>
                      "
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      Does Power BI produce Paginated reports?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Yes, Power BI allows users to create pixel-perfect and
                      highly formatted Paginated reports that can be leveraged
                      for a printing purpose or to create a pdf version.
                      Paginated reports are developed and available in the Power
                      BI premium plan to fit well on multiple pages. User(s) can
                      publish and share paginated reports through the Power BI
                      dashboard across their workspace.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      Can I use Power BI for Budgeting & Forecasting?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Power BI is a powerful data visualization and business
                      analytics tool that makes effective use of the data
                      sources you connect with and prepares your data for
                      budgeting and forecasting insights.
                      <br />
                      <br />
                      You could have data on MS Excel, Salesforce, or
                      QuickBooks; Power BI utilizes your data sources and
                      prepares your data for budgeting and forecasting insights.
                      For instance, it could be sales forecasting reports,
                      production analysis, operational budgets, Cashflow
                      statements, asset planning, and more. To know more about
                      how it works, you can contact{" "}
                      <Link href="/">Dynamics Square</Link>.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >
                      How is Power BI different from traditional BI
                      implementations?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      When it comes to comparing Power BI with traditional BI
                      tools, there could be several differences. Power BI is a
                      next-generation Business Intelligence tool that is
                      facilitated with cloud and self-service opportunities.
                      <br />
                      <br />
                      The very first benefit of Power BI over a traditional one
                      is - Power BI can be configured for on-premises as well as
                      on-cloud i.e., Software as a Service (SaaS). Users can
                      access their data (hosted on <Link href="/products/microsoft-azure/">Microsof's Azure</Link> Server)
                      simply using their browser. Cloud-based Power BI solution
                      eliminates the upfront cost, hardware investment, and
                      lowers the license pricing.
                      <br />
                      <br />
                      The Next but not the least benefit of Power BI over
                      traditional BI systems is Self-service facilitation. With
                      Power BI, you can create custom reports, create your own
                      visuals, and can extend the existing Power BI reports
                      which are not possible with traditional business
                      intelligence systems. Using traditional BI configuration,
                      users can make decisions based on guided analytics or
                      reports only; they can't make their own reports or perform
                      customizations, etc. Moreover, Power BI reduces your
                      costs, stimulates the development cycle, and accelerates
                      user adoption.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >
                      What is Power BI Report Server? Does this mean you are
                      making Power BI available for on-premises systems?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Power BI Report Server is the on-premises reporting
                      solution wherein users can create reports today and can
                      move to the cloud later. If you want to keep data within
                      your organizational boundaries, you can simply create,
                      access, and share accordingly. It is included in the Power
                      BI premium plan. It works on your own terms.
                      <br />
                      <br />
                      Report Server enables you to create interactive and
                      intuitive reports leveraging the reporting capabilities of
                      SSRS (SQL Server Reporting Services). You can even design
                      pixel-perfect paginated reports configured to your
                      business needs. Since the Power BI Report Server is an
                      enterprise-grade platform, it also allows you to scale
                      thousands of users.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                    >
                      How is Power BI licensed? How much does the Power BI
                      premium cost?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      In terms of Power BI licensing, Power BI Desktop is
                      available to download for free. All you need to register
                      your business at no cost. With this simple step, any
                      business user can start creating their reports, but this
                      will not allow you to share or distribute your reports to
                      the people in your organization.
                      <br />
                      <br />
                      Once you opt for the Power BI Pro license, you will be get
                      permitted to share your reports with other users (each
                      with a Power BI Pro license in your workspace. Rest, you
                      can always contact Dynamics Square to enquire about Power
                      BI licensing costs for your business.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-8"
                    >
                      What if I want more functionality or change?
                    </button>
                  </h3>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist8"
                  >
                    <div className="accordion-body">
                      Power BI is a highly flexible business analytics solution
                      that can be customized as per your specific business
                      domain and contextual needs. Even post-implementation, you
                      can ask for more functionality from your{" "}
                      <Link href="/power-bi-implementation/">
                        Power BI implementation
                      </Link>{" "}
                      provider.
                      <br />
                      <br />
                      For instance, your current system is on-premises
                      facilitated and you want cloud later or you are using
                      Power BI Pro and want to upgrade with Power BI premium.
                      You can even get your custom implementation for now and
                      can ask for more functionality upgrades or customization
                      suited to your continuously changing need. To get more
                      information on this, simply connect with Dynamics Square.
                      <br></br>
                      See related post - 
                      <Link href="https://blog.dynamicssquare.co.uk/sharepoint-integration-with-power-bi/">SharePoint integration with Power BI</Link> | 
                      <Link href="https://blog.dynamicssquare.co.uk/power-bi-vs-tableau/">Power BI vs Tableau</Link> | 
                      <Link href="https://blog.dynamicssquare.co.uk/power-bi-for-mac-learn-how-to-use-power-bi-on-mac-devices/">Power BI for Mac</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs-extra">
        <div className="container">
         <div className="row justify-content-center">
          <div className="col-lg-8">
          <header className="section-header">
            <h2>Explore Our Recent Blogs & Resources</h2>
            <p>
              Whether you are a start-up, an SMB, or an enterprise, the Dynamics
              Square blog is the best place to get inspired and learn more about
              Microsoft Business Applications.
            </p>
          </header>
          </div>
         </div>
          <div className="row top-2 gx-5">
            <Blog />
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Important Power BI Links:</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <a
                      target="_self"
                      rel=""
                      href="https://blog.dynamicssquare.co.uk/what-is-power-bi/"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>What is Power
                      BI?
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.youtube.com/watch?v=Evkj4zfpk0Q"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Free Power BI
                      Webinar
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel=""
                      href="https://docs.microsoft.com/en-gb/power-bi/consumer/end-user-license"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Power BI
                      Licensing Guide
                    </a>
                  </li>
                  <li>
                    <Link href="https://blog.dynamicssquare.co.uk/power-bi-architecture/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Power BI
                        Architecture
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://blog.dynamicssquare.co.uk/power-bi-reports/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Power BI
                        Reports
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://blog.dynamicssquare.co.uk/implement-power-bi-for-your-business/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Why Your
                        Business Should Implement Power BI?
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PowerBI;
