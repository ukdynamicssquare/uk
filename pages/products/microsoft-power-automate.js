import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Blog from "../../components/Blog";
const PowerAutomate = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Power Automate: Demo & Pricing UK | Dynamics Square</title>
        <meta
          name="description"
          content="Power Automate offers the ability to easily create workflows directly in your applications with a no-code approach that connects to hundreds of popular. Do call us for demo & pricing!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-power-automate/"
        />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="yCJ7C1KS-Jw"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Microsoft Power Automate</h1>
              <p>
                Automate processes and increase productivity with Power
                Automate. No coding Required.
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Schedule a Demo</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/power-automate-banner.svg"
                alt="power-automate-banner"
                width={1024} height={586}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>What is Power Automate?</h2>
            <p>
              Power Automate offers the ability to easily create workflows
              directly in your applications with a no-code approach that
              connects to hundreds of popular applications and services on the
              market. Sync files, get notifications, collect data, and much
              more.
            </p>
          </header>
          <div className="row p-lg-6">
            <div className="col-lg-6">
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
                        <div className="wr-in">
                          <img
                            src="/img/icons-power-automate_Quick-and-Secure.svg"
                            alt="icons-power-automate_Quick-and-Secure"
                          />
                        </div>
                        <span>Quick and Secure</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Creating automated systems through Power Automate is not
                        just quick and easy but also quite secure. The platform
                        comes loaded with features such as drag and drop,
                        prebuilt connectors, and low code to create repetitive
                        activities in automated flows that are also very easy.
                        Most importantly, all the automated tasks are kept
                        secure within your Microsoft cloud and you do not have
                        to worry about any data getting leaked or stolen.
                      </div>
                    </div>
                  </div>
                  <hr />
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
                        <div className="wr-in">
                          <img
                            src="/img/icons-power-automate_Enhanced-Efficiency.svg"
                            alt="icons-power-automate_Enhanced-Efficiency"
                          />
                        </div>
                        <span>Enhanced Efficiency</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        While the platform helps in creating automated flows, it
                        also allows you to record the processes from start to
                        end. You can visualize the recording process and analyze
                        the flow and understand it will actually happen. This
                        way, you can check out in advance how the flow is going
                        to work and look before you actually finalize a
                        particular automated flow. Thus, no more guesswork as
                        you can be pretty sure about the automated flow process
                        that you are finalizing for your data or system.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="acccm">
                  <hr className="mob-disp" />
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
                        <div className="wr-in">
                          <img
                            src="/img/icons-power-automate_AI-Support.svg"
                            alt="icons-power-automate_AI-Support"
                          />
                        </div>
                        <span>AI Support</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        Another great thing about Power Automate is that it is
                        supported by an AI system. The Artificial Intelligence
                        system does not just make the working of the system
                        interesting and easy but also quite helpful for the
                        users. It is due to AI technology that you will be able
                        to create new flows on the basis of models that are
                        existing already. The platform can detect texts and
                        images to help you in creating your flow or even help
                        you in analyzing data.
                        <br />
                        <br />
                        Another great thing about Power Automate is that it is
                        supported by an AI system. The Artificial Intelligence
                        system does not just make the working of the system
                        interesting and easy but also quite helpful for the
                        users. It is due to AI technology that you will be able
                        to create new flows on the basis of models that are
                        existing already. The platform can detect texts and
                        images to help you in creating your flow or even help
                        you in analyzing data.
                      </div>
                    </div>
                  </div>
                  <hr />
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
                        <div className="wr-in">
                          <img
                            src="/img/icons-power-automate_Highly-Compatible.svg"
                            alt="icons-power-automate_Highly-Compatible"
                          />
                        </div>
                        <span>Highly Compatible</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        Another great thing about this platform is that it is
                        highly compatible with different devices and platforms.
                        Whether you are using Power Automate for web on your
                        desktop or you are using it in the form of an
                        application on your smartphone, it will work the same
                        and will offer you the same features and functions.
                        Thus, you can get the right one based on your comfort
                        and requirement and start using it at your own
                        convenience.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="wy-sultion-left-head">
                <h2>What are Power Automate Features</h2>
                <h3>
                  Power Automate is available in four different versions from
                  which you can select the right one depending upon your
                  requirements.
                </h3>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        For
                        <br />
                        Desktop
                      </h3>
                      <div className="overlay">
                        <p>
                          You can select Power Automate for desktop so that you
                          can work on your desktop from the comfort of your
                          office and create automated flows on Windows 11 OS.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        For
                        <br />
                        Mobile
                      </h3>
                      <div className="overlay">
                        <p>
                          With Power Automate for Mobile, you can complete the
                          task of creating automated flows on your mobile phone
                          itself from anywhere and at any time at your
                          convenience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        For
                        <br />
                        Web
                      </h3>
                      <div className="overlay">
                        <p>
                          Create your flows with the help of Power Automate for
                          the web. Just sign in to your account from any web
                          browser on any device. You can even save the created
                          flow and then check it later on from the device you
                          usually use the system.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        For
                        <br />
                        Microsoft Teams
                      </h3>
                      <div className="overlay">
                        <p>
                          The most innovative type of Power Automate for
                          Microsoft Teams. This allows the user to create flows
                          in the Microsoft cloud for the conversation of the
                          entire team who are a part of the Microsoft Teams. The
                          whole team can check out the flow and can work
                          accordingly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="busine_service_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <Image
                    src="/img/power automate-side.png"
                    className="fix-im"
                    alt="power automate-side"
                    width={553} height={531}
                  />

                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link href="#javascript:void(0)">
                        <a data-bs-toggle="modal" onClick={() => setOpen(true)}>
                          <Image
                            src="/img/Video Power-automate.png"
                            alt="Power-automate"
                            width={390} height={259}
                          />
                          <span className="cente-icns">
                            <img src="/img/play_icons.svg" alt="play_icons" />
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>Power Automate Services</h2>
                <p>
                  We offer a full range of services to support you on your
                  Dynamics journey including implementation, upgrade and
                  support.
                </p>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Implementation-icons.svg"
                    alt="Business-Central-Implementation-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Implementation</h3>
                  <p>
                    Successfully implement Power Automate solutions by our
                    experts to ensure your needs are met on time and within
                    budget.
                  </p>
                  <div className="action-content">
                    <Link href="#exampleModal">
                      <a data-bs-toggle="modal">Get Started</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Support-icons.svg"
                    alt="Business-Central-Support-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Support</h3>
                  <p>
                    Get constant and seamless support from Dynamics Square team
                    to create and manage your work flows.
                  </p>
                  <div className="action-content">
                    <Link href="#exampleModal">
                      <a data-bs-toggle="modal">Get Started</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h2>Power Automate Pricing</h2>
            <p>
              Explore Power Automate Plans, Costs, And Availability To Start
              Creating Workflows
            </p>
          </header>
          <div className="row gy-4 p-9">
            <div className="col-lg-4">
              <div className="box box-66">
                <h3>Licence by user</h3>
                <p>Per user plan</p>
                <div className="price">
                £12.30<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    Allow individual users to analyse their processes and create
                    unlimited cloud flows based on their unique needs.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box box-66">
                <h3>Licence by user</h3>
                <p>Per user plan with attended RPA</p>
                <div className="price">
                £32.90<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    Allow individual users to analyse their processes and create
                    unlimited cloud flows, plus automate legacy applications
                    through robotic process automation (RPA) and AI.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box box-66">
                <h3>License by flow</h3>
                <p>Per flow plan</p>
                <div className="price">
                £82.20<span>For Five Flows/Month</span>
                </div>
                <ul>
                  <li>
                    Implement cloud flows with reserved capacity for unlimited
                    users across your organisation.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link href="#exampleModal">
                  <a data-bs-toggle="modal" className="btn-get-red">
                    <span>Get Power Automate Now</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs-extra">
        <div className="container">
          <header className="section-header">
            <h2>Explore Our Recent Blogs & Resources</h2>
            <p>
              Whether you are a start-up, an SMB, or an enterprise, the Dynamics
              Square blog is the best place to get inspired and learn more about
              Microsoft Business Applications.
            </p>
          </header>
          <div className="row top-2 gx-5">
            <Blog />
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Important Power BI Links:</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <Link href="https://www.dynamicssquare.co.uk/blog/what-is-power-bi/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>What is
                        Power BI?
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/watch?v=Evkj4zfpk0Q"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Free Power BI
                      Webinar
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://docs.microsoft.com/en-us/power-bi/consumer/end-user-license"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Power BI
                      Licensing Guide
                    </a>
                  </li>
                  <li>
                    <Link href="https://www.dynamicssquare.co.uk/blog/power-bi-architecture/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Power BI
                        Architecture
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.dynamicssquare.co.uk/blog/power-bi-reports/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Power BI
                        Reports
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.dynamicssquare.co.uk/blog/implement-power-bi-for-your-business/">
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

export default PowerAutomate;
