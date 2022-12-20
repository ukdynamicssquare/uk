import Link from "next/link"; 
import Head from 'next/head';
import Image from 'next/image';
import FormCampaign from "../components/FormCampaign";
import FooterHide from "../components/FooterHide";

const MtdCompliantEmail = () => {
  const mystyle = {
    marginBottom:'15px',paddingBottom:'0px',fontSize:'17px'
  };
    return (
      <>
        <Head>
        <title>
        Get your Business Central MTD Compliant | Dynamics Square
        </title>
        <meta
          name="description"
          content="Hurry, only few days left to get your D365 Business Central and NAV MTD compliant"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/email-mtd-compliant/"
        />
        </Head>
        <section
        className="Solution-banner"
        style={{ overflow: "hidden",paddingBottom:'60px',marginBottom:'100px' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center nav-to">
              <h1>Get Your Business Central <span>MTD Compliant</span></h1>
              <p style={mystyle}><span style={{color:'black',fontWeight:600}}>From 1st November 2022</span>, the HMRC under the U.K Govt. is making MTD (Making Tax Digital) compliance mandatory for all business owners.</p>
              <p style={mystyle}>✔️ This will let you file your TAX returns online, maintain records & bookkeeping anytime. <br/><br/>✔️ If you are still thinking about filing the VAT return as usual (offline mode) without MTD compatible application, you may have to face huge penalties.</p>
              <p style={mystyle}>✔️ To avoid hefty penalties, Dynamics Square can help configure your Dynamics 365 Business Central (or Dynamics NAV users) by adding in-built MTD function, so that you can seamlessly submit the TAX returns within few clicks.</p>
            </div>
            <div className="col-lg-1  align-self-center"></div>
            <div className="col-lg-5  align-self-center">
              <div className="main-form-wrper main-form-wrper-nav">
                <h3>Fill in the form to make your <br />Business Central MTD complaint</h3>
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

  export default MtdCompliantEmail;
  
