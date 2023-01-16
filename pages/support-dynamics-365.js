import Head from "next/head";
import Image from "next/image";
import Link from "next/link"; 
import FooterHide from "../components/FooterHide";
import FormCampaign from "../components/FormCampaign";

const SupportDynamics365Mailer = () => {
  return (
    <>
      <Head>
      <title>Get Dynamics 365 Business Central Support in the UK</title>
        <meta
          name="description"
          content="For business central support, guidance plus tech and non-tech assistance with getting your Business Central up and running, please contact Dynamics Square."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/support-dynamics-365/"
        />
        <meta name="robots" content="noindex, nofollow"></meta>
      </Head>
      <section
        className="Solution-banner hero-1 hero"
        style={{ overflow: "hidden", paddingBottom: "160px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
              Maximize your resource utilization and leverage the full potential
              </h1>
              <p>
              To ensure process continuity, stabilize process optimization, and focus on business scope, SMBs require an optimal support system. Businesses should embrace proactive support services for NAV and D365 Business Central from a trustworthy Partner like <b>Dynamics Square.</b>
              </p>
              <p>
                <b>Will handle every aspect of your Dynamics 365 system requirements:</b>
              </p>
              <ul className="checkmark">
                <li>Ad-hoc Support to instantly resolve the issues whenever encountered.</li>
                <li>Prepaid Hours Support to provide 50 hours of priority support to our clients.</li>
                <li>Annual Support to help you keep the system running 24X7.</li>
                <li>Allow users to help them understand the latest features & make the solution easy to access for all users.</li>
              </ul>
            </div>
            <div className="col-lg-1  align-self-center"></div>
            <div className="col-lg-5  align-self-center">
              <div className="main-form-wrper main-form-wrper-nav">
                <h3>Please fill the form to connect further</h3>
                <FormCampaign />
              </div>
            </div>
          </div>
        </div>
      </section>
    <FooterHide />
    </>
  );
};

export default SupportDynamics365Mailer;
