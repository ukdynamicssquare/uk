import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

const PowerPlatform = () => {
  return (
    <>
      <Head>
        <title>What is Microsoft Power Platform? | Dynamics Square</title>
        <meta
          name="description"
          content="Analyze data, create solutions, automate processes and create virtual agents with Microsoft Power Platform. Schedule a free power platform demo today."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-power-platform/"
        />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-4 align-self-center">
              <h1>
                Power <br />
                Platform
              </h1>
              <p>
                Analyze data, create solutions, automate processes and create
                virtual agents with Microsoft Power Platform. Power Platform
                brings together the power of Power BI, Power Apps and Power
                Automate (Flow).
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
              <Image src="/img/power-platform.png" alt="power-platform" width={1024} height={586} />
            </div>
          </div>
        </div>
      </section>

      <section className="new-bg">
        <div className="container">
          <header className="section-header">
            <h2>What is Power Platform?</h2>
            <p>
              Power Platform is a set of Microsoft solutions that enables you to
              build intelligent, scalable, and automated applications for
              multiple devices with little to no code. Power BI, Power Apps,
              Power Automate, and Power Virtual Agents are based on Common Data
              Service, which stores all the business data and facilitates its
              security and uses in the different applications.
            </p>
          </header>
        </div>
      </section>

      <section className="bg-shape">
        <div className="container">
          <div className="row pad9x rever-1">
            <div className="col-lg-4 align-self-center">
              <div className="commen-lef-pic power-custom text-center ">
                <Image src="/img/Power-BI.png" alt="Power-BI" width={407} height={338} />
              </div>
            </div>
            <div className="col-lg-8 align-self-center">
              <div className="commen-rit-info">
                <h3>Power BI</h3>
                <p>
                  <strong>The Business Intelligence solution</strong>
                </p>
                <p>
                  Power BI is a business analytics solution that enables you to
                  visualize data and share information across your organization.
                  It is a reporting tool capable of unifying data from multiple
                  sources (including Business Central) to create immersive,
                  interactive dashboards and reports that provide actionable
                  insights and improve business results. It is a cloud-based
                  platform that provides a single view of your business KPIs.
                </p>
                <div className="cltt-actt">
                  <Link href="/products/microsoft-power-bi/">
                    Find Out More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row pad9x">
            <div className="col-lg-8 align-self-center">
              <div className="commen-rit-info">
                <h3>Power Apps</h3>
                <p>
                  <strong>Create business apps without codes</strong>
                </p>
                <p>
                  Microsoft Power Apps allows you to create applications without
                  the need to have knowledge of code in an agile and fast way.
                  Develop applications from scratch or using predefined
                  templates. Building applications with Power Apps helps
                  everyone from business analysts to professional developers to
                  work together more efficiently and innovatively.
                </p>
                <div className="cltt-actt">
                  <Link href="/products/microsoft-power-apps/">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-center ">
              <div className="commen-lef-pic power-custom text-center">
                <Image src="/img/Power-Apps.png" alt="Power-Apps" width={410} height={337} />
              </div>
            </div>
          </div>

          <div className="row pad9x rever-1">
            <div className="col-lg-4 align-self-center">
              <div className="commen-lef-pic power-custom text-center">
                <Image src="/img/Power-Automate.png" alt="Power-Automate" width={419} height={328} />
              </div>
            </div>
            <div className="col-lg-8 align-self-center">
              <div className="commen-rit-info">
                <h3>Power Automate</h3>
                <p>
                  <strong>Solution for defining workflow automations</strong>
                </p>
                <p>
                  Power Automate offers the ability to efficiently automate
                  workflow directly in your applications with a no-code approach
                  that connects to hundreds of the most popular applications and
                  services on the market. Connect to your data from any device
                  or place to create automated workflows that enable
                  collaboration and productivity for your business.
                </p>
                <div className="cltt-actt">
                  <Link href="/products/microsoft-power-automate/">
                    Find Out More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row pad9x pad11x">
            <div className="col-lg-8 align-self-center">
              <div className="commen-rit-info">
                <h3>Power Virtual Agents</h3>
                <p>
                  <strong>
                    Tool to create intelligent chatbots. No Codes Required
                  </strong>
                </p>
                <p>
                  Power Virtual Agents is a tool designed to create
                  conversational experiences (chatbots) that offer support by
                  easily creating and maintaining virtual agents, without the
                  need for coding, using a guided graphical interface without
                  the need for data analysts or developers.
                </p>
                <div className="cltt-actt">
                  <Link href="/products/microsoft-power-virtual-agents/">
                    Find Out More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="commen-lef-pic power-custom text-center">
                <Image src="/img/Virtual-Agent.png" alt="Virtual-Agent" width={426} height={328} />
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
                <h3>Talk to our experts</h3>
                <p>
                  Looking to know more about Power Platform? Schedule a free
                  demo!
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

      <section className="bg-333">
        <div className="container">
          <header className="section-header">
            <h2>Power Platform and Business Central</h2>
            <p>
              <b>
                All the potential of Power Platform integrated with your ERP
              </b>
              <br />
              <br />
              Currently it is possible to use any of the Power Platform
              applications with Dynamics 365 Business Central through different
              connectors:
            </p>
          </header>
          <div className="row pad10x">
            <div className="col-lg-4">
              <div className="commen-box-2 commen-box-9">
                <div className="icons icons-0101">
                  <Image
                    src="/img/combo-icon_BI-Bcentral.svg"
                    alt="combo-icon_BI-Bcentral"
                    width={242}
                    height={120}
                  />
                </div>
                <div className="commen-boc-2-info">
                  <h3>
                    Power BI + <br />
                    Business Central
                  </h3>
                  <p>
                    The reporting center role is embedded with Power BI. Through
                    the Web Service connector, you can integrate the ERP data
                    automatically.
                  </p>
                </div>
                <div className="btn-003">
                  <Link href="#exampleModal">
                    <a data-bs-toggle="modal" className="btn btn md btn-danger">
                      Get Integration
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="commen-box-2 commen-box-9">
                <div className="icons icons-0101">
                  <Image
                    src="/img/combo-icon_powerapps-bcentral.svg"
                    alt="combo-icon_powerapps-bcentral"
                    width={242}
                    height={120}
                  />
                </div>
                <div className="commen-boc-2-info">
                  <h3>
                    Power Apps + <br />
                    Business Central
                  </h3>
                  <p>
                    To link Power Apps and Power Automate with Dynamics 365
                    Business Central, it can be done through the available API
                    connector.
                  </p>
                </div>
                <div className="btn-003">
                  <Link href="#exampleModal">
                    <a data-bs-toggle="modal" className="btn btn md btn-danger">
                      Get Integration
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="commen-box-2 commen-box-9">
                <div className="icons icons-0101">
                  <Image
                    src="/img/combo-icon_virtualagent-bcentral.svg"
                    alt="combo-icon_virtualagent-bcentral"
                    width={242}
                    height={120}
                  />
                </div>
                <div className="commen-boc-2-info">
                  <h3>
                    Power Automate + <br />
                    Business Central
                  </h3>
                  <p>
                    Link the automation solution to Dynamics 365 Business
                    Central <br />
                    using reusable flow templates.
                  </p>
                </div>
                <div className="btn-003">
                  <Link href="#exampleModal">
                    <a data-bs-toggle="modal" className="btn btn md btn-danger">
                      Get Integration
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PowerPlatform;
