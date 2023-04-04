import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link"; 
import ModalVideo from "react-modal-video";

const NonProfitAccelerator = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
      <title>Dynamics 365 Nonprofit Accelerator | Dynamics for Charities</title>
<meta name="description" content="Dynamics 365 Non-Profit Accelerator is meant to empower not-for-profit and other charitable organizations to achieve their objectives without losing focus on delivering quality service and maintaining strong relations with donors and volunteers who make achieving success possible."/>
<link rel="canonical" href="https://www.dynamicssquare.co.uk/products/dynamics-365-non-profit-accelerator/" />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="_W6j-Lzdq_c"
        onClose={() => setOpen(false)}
      />
 <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Microsoft <br /> Dynamics 365
                <br />
                Nonprofit Accelerator
              </h1>
              <p>
                The primary aim of Microsoft Dynamics 365 Nonprofit Accelerator
                is to fuel not-for-profit processes such as program delivery,
                supporter and volunteer management, impact measurement and
                fundraising.
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/Dynamics-non-profit-Banner.png"
                alt="Dynamics-non-profit-Banner"
                width={790} height={470}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <header className="section-header">
                <h2>
                  What is Dynamics 365 Nonprofit Accelerator?
                </h2>
                <p>
                  <b>
                    Your Mission Coming True Through Secure and Reliable
                    Microsoft Solution.
                  </b>
                  <br />
                  <br />
                  Microsoft Dynamics 365 Non-Profit Accelerator is meant to
                  empower not-for-profit and other charitable organizations to
                  achieve their objectives without losing focus on delivering
                  quality service and maintaining strong relations with donors
                  and volunteers who make achieving success possible.
                </p>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <header className="section-header">
            <h2>
              Dynamics 365 Nonprofit
              <br /> Accelerator Features
            </h2>
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
                          <img src="/img/Budget.svg" alt="icons" />
                        </div>
                        <span>Increase donor and volunteer engagement</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Complete constituent profiles for individuals,
                          households, and organizations, including biographical
                          details, communication methods, preferences,
                          relationships, salutations, employment and education
                          history, donations, and awards management.
                        </p>
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
                          <img src="/img/Financials-3.svg" alt="icons" />
                        </div>
                        <span>Donation management</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          The sample dashboard for donations includes gift
                          acknowledgement, tracking of individual and
                          organizational pledges and gifts, one-time and
                          recurring gifts, gifts in kind, and grant
                          disbursements. You can track and manage donations, and
                          their relation to donors and specific campaigns. Full
                          donation history, information on recurring donations,
                          and pledge amounts are accessible in one easily
                          digestible interface.
                        </p>
                        <p>
                          The app integrates with many popular ERP systems so
                          transactional data can be synced with external
                          financial systems. It also connects to third-party
                          payment solutions and gateways to process donations
                          made across digital platforms.
                        </p>
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
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <div className="wr-in">
                          <img src="/img/Financials-3.svg" alt="icons" />
                        </div>
                        <span>Fundraising</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Dynamics 365 nonprofit accelerator can track all major
                          stages of high-touch fundraising.
                        </p>
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
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <div className="wr-in">
                          <img src="/img/Financials-3.svg" alt="icons" />
                        </div>
                        <span>Award management</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Awards management data model and sample application
                          including dockets, inquiries, requests, awards
                          recommendations, reviews, reports, budgets, and
                          disbursements.
                        </p>
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
                          <img src="/img/Financials-3.svg" alt="icons" />
                        </div>
                        <span>Program delivery</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Outcome and result model enables nonprofits to
                          efficiently deliver on their missions, measure
                          results, and communicate impact that includes aligning
                          beneficiaries and funds to the results framework.
                        </p>
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
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <div className="wr-in">
                          <img src="/img/Financials-3.svg" alt="icons" />
                        </div>
                        <span>Volunteer management</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Non-profits are often powered by volunteers who give
                          their time and effort to support an organization's
                          cause. Track volunteer preferences, skills and
                          availability and establish Volunteer Projects
                          leveraging <Link href="/products/microsoft-dynamics-365/"><a>Dynamics 365</a></Link> Project Service Automation.
                        </p>
                        <p>
                          Dynamics 365 Nonprofit Accelerator can help organize
                          and optimize a charity's volunteer force, with
                          rostering and time-sheet features, and profile
                          management that allows non-profits to assign the right
                          volunteers to the right project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accnews">
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
                        <div className="wr-in">
                          <img src="/img/Project.svg" alt="icons" />
                        </div>
                        <span>Membership management</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>
                          Membership Category entity that establishes membership
                          levels and Membership entity that links Constituents
                          to Membership Category, enabling the creation and
                          tracking of membership over time.
                        </p>
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
                        data-bs-target="#fin8"
                        aria-expanded="false"
                        aria-controls="fin8"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/International-Accounting-3.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Finance and CRM data integrator</span>
                      </button>
                    </h3>
                    <div
                      id="fin8"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>
                          Template data integrator tasks to connect nonprofit
                          accelerator constituents, donations, awards, and
                          programs to Finance and Operations.
                        </p>
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
                        data-bs-target="#fin9"
                        aria-expanded="false"
                        aria-controls="fin9"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/International-Accounting-3.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Case management</span>
                      </button>
                    </h3>
                    <div
                      id="fin9"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>
                          Provides building blocks for partners to aid program
                          staff in tracking clients and cases tying cases to
                          specific program goals.
                        </p>
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
                        data-bs-target="#fin10"
                        aria-expanded="false"
                        aria-controls="fin10"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/International-Accounting-3.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Project management & program design</span>
                      </button>
                    </h3>
                    <div
                      id="fin10"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>
                          Build a complete delivery framework that tracks
                          activities and progress to a theory of change assuring
                          delivery of programs aligned to indicators and program
                          objectives, budgets, and results.
                        </p>
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
                        data-bs-target="#fin11"
                        aria-expanded="false"
                        aria-controls="fin11"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/International-Accounting-3.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Functionality</span>
                      </button>
                    </h3>
                    <div
                      id="fin11"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>
                          Program design - In order to support this application,
                          this solution depends on nonprofit core and nonprofit
                          measurement data schemas.
                        </p>
                        <p>
                          Nonprofit operations toolkit - In order to support
                          this application, this solution depends on the
                          nonprofit core data schema.
                        </p>
                        <p>
                          Common Data Model for Nonprofits sample apps - In
                          order to support this application, this solution
                          depends on the nonprofit core data schema.
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

      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="call-to-action-content">
                <h3>
                  How Microsoft Dynamics 365 for Charities can Boost Your
                  Non-profit Flow
                </h3>
                <p>
                  Willing to know how Microsoft Dynamics 365 can help you evolve
                  your non-profit organizational flow?
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link  href="/industries/non-profits/"><a
                    className="btn-get-started scrollto"
                  >
                    <span>Learn more</span></a>
                  </Link>
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
                    src="/img/non-profit side.png"
                    className="fix-im"
                    alt="non-profit side"
                    width={553} height={548}
                  />
                  <div className="video-ytube">
                    <div className="popup-btn">
                      <Link  href="#javascript:void(0)"><a
                        onClick={() => setOpen(true)}
                      >
                        <Image src="/img/Video-Non Profit.png" alt="Video-Non Profit" width={390} height={259} />
                        <span className="cente-icns">
                          <img
                            src="/img/play_icons.svg"
                            alt="play_icons"
                          />
                        </span></a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="blogs-extra-title">
                <h4>Documents</h4>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      href="/pdf/not-for-profit-accelerator.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Microsoft
                      Dynamics 365 Not for Profit Solution
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pdf/not-for-profit-accelerator.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Microsoft
                      Dynamics 365 Not for Profit Feature Availability
                    </a>
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

export default NonProfitAccelerator;
