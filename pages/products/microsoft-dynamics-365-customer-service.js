import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import Blog from "../../components/Blog";

const CustomerService = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>
          Microsoft Dynamics 365 Customer Service Partner | Dynamics Square
        </title>
        <meta
          name="description"
          content="Dynamics 365 Customer Service: Get hassle free solution by Microsoft Partner. This CRM solution can be customized suited to specific business needs and domain contexts. Contact now today!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-customer-service/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-customer-service/" />
        <meta property="og:title" content="Microsoft Dynamics 365 Customer Service Partner | Dynamics Square" />
        <meta property="og:description" content="Dynamics 365 Customer Service: Get hassle free solution by Microsoft Partner. This CRM solution can be customized suited to specific business needs and domain contexts. Contact now today!" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/customer-service-banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-customer-service/" />
        <meta property="twitter:title" content="Microsoft Dynamics 365 Customer Service Partner | Dynamics Square" />
        <meta property="twitter:description" content="Dynamics 365 Customer Service: Get hassle free solution by Microsoft Partner. This CRM solution can be customized suited to specific business needs and domain contexts. Contact now today!" />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/customer-service-banner.png" />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="wVFZVajK2YI"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Dynamics 365
                <br />
                Customer Service
              </h1>
              <p>
                Transform Your Customer Experience, Empower Your Workforce With
                Dynamics 365 Customer Service.
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
                src="/img/customer-service-banner.png"
                alt="Dynamics 365 Customer Service"
                width={759}
                height={513}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div class="col-lg-9">
              <header className="section-header">
                <h2>
                  What is dynamics 365
                  <br />
                  Customer Service?
                </h2>
                <p>
                  Dynamics 365 customer service is designed to serve
                  customizable and highly flexible solutions to the enterprises
                  seeking to simplify their customer, sales, and marketing
                  experience. This{" "}
                  <Link href="/products/microsoft-dynamics-crm/">
                    CRM Solution
                  </Link>{" "}
                  can be customized suited to specific business needs and domain
                  contexts. Businesses can drive omnichannel efficiency by
                  simply integrating their existing apps or systems while
                  implementing Dynamics 365 Customer Service.
                </p>
              </header>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why">
        <div className="container">
          <div className="row">
            <div className="col-lg-5  align-self-center">
              <div className="wy-sultion-left-head">
                <h2>Dynamics 365 Customer Service Features</h2>
                <h3>
                  How Dynamics 365 Customer Service help your team handle
                  multiple cases?
                </h3>
              </div>
              {/* <div className="m-o-t m-o-t-b">
              <Link href="#about" className="btn-get-started scrollto">
                <span>Know More</span>
              </Link>
            </div> */}
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6 align-self-center">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Simplify <br />
                        Processes
                      </h3>
                      <div className="overlay">
                        <p>
                          Simplify and streamline your customer service from
                          setting up things to the maintenance part to the
                          administration of customer service solutions to
                          improve user experiences.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Seamless <br />
                        Visibility
                      </h3>
                      <div className="overlay">
                        <p>
                          Leveraging the AI-based data insights and recent
                          customer interactions, quickly diagnose your
                          customers' requirements and provide them an
                          omnichannel experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m align-self-center">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        AI-Data
                        <br /> Driven
                      </h3>
                      <div className="overlay">
                        <p>
                          By enabling AI-powered virtual support executives,
                          reach out to your customers' exact pain point and
                          resolve the same in real-time and faster.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Omnichannel
                        <br /> Experience
                      </h3>
                      <div className="overlay">
                        <p>
                          Enable your system to drive an omnichannel experience
                          and allow your customers to enjoy the personalized
                          experience through Customer Service Automation.
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
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <Image
                    src="/img/customer-service-side-image.png"
                    className="fix-im"
                    alt="Dynamics 365 Customer Service"
                    width={553}
                    height={591}
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link href="#javascript:void(0)">
                        <a data-bs-toggle="modal" onClick={() => setOpen(true)}>
                          <img
                            src="/img/video-Customer Service.png"
                            alt="Customer-Service"
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
                <h2>Dynamics 365 Customer Service</h2>
                <p>
                  Dynamics 365 Customer Service enables you to bring
                  digitalization in your business and empowers you to lead your
                  processes your way.
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
                    Improve your customer experience and maximize your sales by
                    implementing Dynamics 365 Customer Service Automation.
                  </p>
                  <div className="action-content">
                    <Link href="/dynamics-365-customer-service-implementation/">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business Central Upgrade-icons.svg"
                    alt="Business Central Upgrade-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Upgrade</h3>
                  <p>
                    Upgrade your system capabilities to drive a smarter customer
                    experience with CRM{" "}
                    <Link href="/products/dynamics-365-customer-engagement/">
                      Customer Engagement
                    </Link>{" "}
                    solutions.
                  </p>
                  <div className="action-content">
                    <Link data-bs-toggle="modal" href="#exampleModal">
                      Get Started
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
                    Improve your customer retention rate with a long-lasting
                    impact by embracing Dynamics 365 Customer Service
                    Capabilities.
                  </p>
                  <div className="action-content">
                    <Link data-bs-toggle="modal" href="#exampleModal">
                      Get Started
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
          <div className="row justify-content-center">
            <div class="col-lg-9">
              <header className="section-header">
                <h2>Dynamics 365 Customer Service Pricing</h2>
                <p>
                  Dynamics 365 Customer Service Pricing is simple. Contact us to
                  learn about cost effective licensing based on bundled Dynamics
                  365 Customer Service Products for Commercial, Non-Profit or
                  Educational Use.
                </p>
              </header>
            </div>
          </div>

          <div className="row gy-4 p-9">
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                  Dynamics 365 Customer Service
                  <br />
                  Professional
                </h3>
                <div className="price">
                £41.10<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i> Case management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Knowledge management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> SLAs
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Templates
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Unlimited number of users
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Additional Capabilities
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                  Dynamics 365 Customer Service
                  <br />
                  Essentials
                </h3>
                <div className="price">
                £78.10<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i> All features of the
                    Professional set
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> All features of the
                    Professional set
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Case management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Unified service desk
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Embedded intelligence
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Context-driven
                    suggestions
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Service gamification
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Customization and
                    extensibility
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Portals
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Analytics and KPI
                    reporting
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link href="#exampleModal">
                  <a data-bs-toggle="modal" className="btn-get-red">
                    <span>Get Started Now</span>
                  </a>
                </Link>
                {/* <Link href="#about" className="btn-get-whit">
                            <span>See Licensing Guide</span>
                            </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Connect Professionals at Dynamics Square</h3>
                <p>
                  Discuss, reveal, and implement the solution suited to your
                  exact business needs. Talk to our experts today.
                </p>
                <div className="text-center m-o-t new-btn-nn">
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
          </div>
        </div>
      </section>
      <section className="solution-faq faq">
        <div className="container">
          <header className="section-header">
            <h2>
              Have you got
              <br />
              questions about Microsoft Dynamics Customer?
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
                      What is Microsoft Dynamics Customer Service?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Microsoft Dynamics Customer Service is designed to
                      streamline and automate the customer engagement and
                      support system for enterprises seeking to simplify and
                      automate their customer data and improve their customer
                      experience while eliminating repetitive and redundant
                      tasks. It enables businesses to serve personalized
                      customer experience while keeping real-time eyes through
                      an integrated dashboard.
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
                      What is Dynamics 365 Customer Service Insights?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 customer service insights enable enterprises
                      to access actionable data related to key analytics,
                      operational data, and other industry-related trends. These
                      insights help businesses to make faster and smarter
                      decisions to support growth and profitability. Leveraging
                      customer service insights, businesses can roll out their
                      required changes to improve customer satisfaction,
                      maximize operational efficiency, and more.
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
                      How do I install Dynamics 365 Customer Service?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Customer Service app is recommended to be
                      installed manually in your instance and user roles should
                      be assigned before you allow your users to access it.
                      <br />
                      <br />
                      Following steps are needed while installing Dynamics 365
                      Customer Service: <br />
                      <br />
                      <ul>
                        <li>
                          Administrators are needed to sign in Power Platform
                          administration center.
                        </li>
                        <li>
                          Now, go through the drop-down list of “Resources”, and
                          select{" "}
                          <Link href="/products/microsoft-dynamics-365/">
                            Dynamics 365
                          </Link>{" "}
                          Apps.
                        </li>
                        <li>
                          On this app list page, you will see “customer service
                          Team member”, now, select install.
                        </li>
                        <li>
                          Once you reach on “Install Customer Service Team
                          Member” panel, simply select an environment from the
                          list.
                        </li>
                        <li>
                          Now, select “Terms of Service” to get agreed upon, and
                          then select install.
                        </li>
                        <li>
                          Now, it’s time to assign user roles in the Customer
                          Service app.
                        </li>
                      </ul>
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
                      What are the key features of Dynamics 365 Customer
                      Service?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 customer service comes with a number of vital
                      features to seamlessly and effectively drive your
                      customers, track customer behavior to serve them a
                      personalized solution. Here is the list of Dynamics 365
                      Customer Service key features:
                      <br />
                      <br />
                      <ul>
                        <li>Tracking customer issues and case management</li>
                        <li>
                          Record customer interactions pertained to a particular
                          case
                        </li>
                        <li>Sharing information in the knowledge database.</li>
                        <li>Creating queues and routing cases</li>
                        <li>Creating and tracking service levels</li>
                        <li>Defining service terms using entitlements</li>
                        <li>
                          Track and manage performance through reports and
                          dashboards
                        </li>
                        <li>Creating and scheduling services</li>
                        <li>Taking part in chats</li>
                        <li>
                          Managing conversations across the configured channels.
                        </li>
                      </ul>
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
            <div class="col-lg-9">
              <header className="section-header">
                <h2>Explore Our Recent Blogs & Resources</h2>
                <p>
                  Whether you are a start-up, an SMB, or an enterprise, the
                  Dynamics Square blog is the best place to get inspired and
                  learn more about Microsoft Business Applications.
                </p>
              </header>
            </div>
          </div>

          <div className="row top-2 gx-5">
            <Blog />
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Documents</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <Link href="/pdf/Microsoft-Dynamics-365-ROI-case-study.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>Nucleus
                        Research Report - Dynamics 365 ROI Case Study
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Five-ingredients-to-ignite-always-on-service.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>Five
                        Ingredients to Ignite Always-On Service
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/How-technology-benefits-the-customer-experience.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>How Technology
                        Benefits The Customer Experience
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/CNTNT-ebook-2018-State-of-Global-Customer-Service.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>State of
                        Global Customer Service Report
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide-3.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i> Licensing
                        Guide
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div className="blogs-extra-title">
                      <h4>Learn More</h4>
                   </div>
                   <div className="blogs-extra-right">
                      <ul>
                         <li><Link href="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Collections automation</Link></li>
                         <li><Link href="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Vendor invoice automation</Link></li>
                         <li><Link href="#"><i className="bi bi-box-arrow-up-right"></i> Why to Upgrade Dynamics NAV to Business Central</Link></li>
                         <li><Link href="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Asset leasing</Link></li>
                      </ul>
                   </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerService;
