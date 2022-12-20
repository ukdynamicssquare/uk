import React, { useState } from "react";
import Head from 'next/head';
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
const NonProfits = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
      <title>Dynamics 365 for Nonprofits | Dynamics 365 for Charities</title>
<meta name="description" content="Bring transparency and drive efficiency in your Nonprofit organization with Microsoft Dynamics 365 for Nonprofits. Schedule a free demo today."/>
<link rel="canonical" href="https://www.dynamicssquare.co.uk/industries/non-profits/" />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="qLjfAsQRWaM"
        onClose={() => setOpen(false)}
      />
      <main>
        <section className="Solution-banner hero-1 hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>
                  Dynamics 365
                  <br />
                  For NonProfit
                </h1>
                <p>
                  Bring Transparency And Drive Efficiency In Your Non-Profit
                  Organization With Microsoft Dynamics 365 For Charities.
                </p>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo</span></a>
                  </Link>
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
            <header className="section-header">
              <h2>
                Grow Your Nonprofit Business <br />
                with Dynamics 365
              </h2>
              <p>
                <b>
                  Engage & drive your donors and volunteers seamlessly by
                  implementing Microsoft Dynamics 365 for Nonprofits embedded
                  with AI-driven insights and real-time data capabilities.
                </b>
                <br /> <br />
                With Dynamics 365 Nonprofit Accelerator, non-profit
                organizations can effectively manage their donors, volunteers,
                vendors, and more. Leveraging this all-in-one platform,
                charity-based organizations can overcome challenges and manage
                their end-to-end non-profit practices from sales, customer
                service, social events & engagement, project service automation
                to field service, awards management, impact tracking, and more.
              </p>
            </header>
          </div>
        </section>
        <section className="Solution-business-why custom-pd-1">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 align-self-center">
                <h2>
                  Why Implement
                  <br />
                  Dynamics 365 <br />
                  for Nonprofits
                </h2>
                <p>
                  Since Non-profit organizations comprise a multitude of
                  practices being managed as an hourly need. Microsoft Dynamics
                  365 for Charities or non-profit units helps to simplify their
                  organizational practices to ensure a smoother flow.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="content-icons-modil-1">
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>
                        Manage your donors, customers, and vendors to impact
                        your entire non-profit ecosystem. Microsoft Dynamics 365
                        for Charities helps organizations to automate and
                        streamline their organizational flow by enabling
                        personal interaction between people and enabling
                        real-time eyes into each process.
                      </p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>
                        Modernize your finance & operations, build & sustain a
                        relationship with people, manage social activities, and
                        enable data-driven decisions to bring greater impact.
                      </p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>
                        Ensure your fund-raising campaign success, drive
                        real-time communication, and sustain a relationship with
                        your donors, vendors, and volunteers with a long-lasting
                        impact to attain mission success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="call_to_action call_to_action-height">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="call_to_action-right over-img">
                  <img src="/img/MaskGroup8.png" alt="image" />
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <div className="call_to_action-left">
                  <h3>
                    Talk to <br />
                    Our Expert Team
                  </h3>
                  <p>
                    Let's talk and come up with a specific solution for your
                    non-profit organisation to drive innovation and efficiency.
                    <br />
                  </p>
                  <div className="m-o-t m-o-t-inde">
                    <Link href="#exampleModal"><a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Schedule a Demo</span></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="industry_service_bottomss">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-8">
              <header className="section-header">
              <h2>
                Microsoft Dynamics 365 For Nonprofits Features
              </h2>
            </header>
              </div>
            </div>
            <div className="row position-relative g-5">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_Constituent-Management-1.svg"
                      alt="icons-nonprofits_Constituent-Management-1"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Constituent Management</h3>
                    <p>
                      Seamlessly manage profiles of people involved in your
                      non-profit campaign comprising biographical details,
                      communication methods, relationships, and more.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_Awards-Management.svg"
                      alt="icons-nonprofits_Awards-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Donation & Awards Management</h3>
                    <p>
                      Have a single and real-time view of your donations and
                      awards data and keep tracking the same with Dynamics 365
                      for non-profits.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Fundraising.svg"
                      alt="Fundraising"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Fundraising &amp; Membership Management</h3>
                    <p>
                      With a nonprofit accelerator, track your high-end
                      fundraising. Create membership levels and manage &amp;
                      track the membership in real-time.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_program-delivery-1.svg"
                      alt="Program Delivery"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Program Delivery</h3>
                    <p>
                      Deliver dedication and efficiency to your mission, track
                      &amp; measure results, and communicate the impact to the
                      resulting dashboard.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/IATI-Processes.svg"
                      alt="IATI-Processes"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>IATI Processes </h3>
                    <p>
                      Manage your global campaigns and bring transparency in
                      your fundraising &amp; programmatic activities along with
                      aid money insights.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_CRM-integrator-1.svg"
                      alt="Finance & CRM Data Integrator"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Finance & CRM Data Integrator</h3>
                    <p>
                      Integrate, connect, and drive your non-profit accelerator
                      constituents, awards, donations, programs, finance, and
                      more.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Assessment-Management.svg"
                      alt="Assessment-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Case & Assessment Management</h3>
                    <p>
                      Seamlessly and effortlessly track clients and cases
                      related to a specific program to accomplish your goals
                      involved in your mission.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Project-Management-Program-Design.svg"
                      alt="Project-Management-Program-Design"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Project Management & Program Design</h3>
                    <p>
                      Track your project activities and progress to assure
                      timely delivery of your programs. Impact objectives,
                      budgets, and results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row movi-up ">
              <div className="col-lg-12">
                <div className="center-pic">
                  <img src="/img/Group-948.png" alt="Group-948.png" />
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <section className="busine_service_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-items-center">
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
                        <Link
                          href="#javascript:void(0)"><a
                          onClick={() => setOpen(true)}
                        >
                          <Image
                            src="/img/Video-Non Profit.png"
                            alt="Video-Non Profit"
                            width={390} height={259}
                          />
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
              <div className="col-lg-6 d-flex align-items-center">
                <div className="side-heading">
                  <h2>
                    How Microsoft Dynamics 365 for Charities can Boost Your
                    Non-profit Flow
                  </h2>
                  <p>
                    Willing to know how Microsoft Dynamics 365 can help you
                    evolve your non-profit organizational flow? Schedule your
                    demo today.
                  </p>
                  <div className="text-lg-start mm-t">
                    <Link href="#exampleModal"><a
                      data-bs-toggle="modal"
                  
                      className="btn-get-started scrollto"
                    >
                      <span>Schedule a Demo</span></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="call-to-action-center hero-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="call-to-action-content">
                  <h3>
                    How To Bring A Seamless Flow <br />
                    to your Non-profit organization?
                  </h3>
                  <p>
                    We can understand your specific business world and can build
                    a solution addressing your custom business needs and
                    considering your enterprise values. Just talk to our experts
                    and let's come up with a specific solution for your business
                    to impact your overall organizational practices and maximize
                    your outcomes.
                  </p>
                  <div className="text-center m-o-t m-o-t-hv">
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
        <section className="industry-more-sec">
          <div className="container">
            <header className="section-header">
              <h2>EXPLORE Other Industries</h2>
            </header>
            <div className="row mobile-margin-01">
              <div className="col-lg-12">
                <div className="swiper mySwiper">
                  <div className="swiper-wrapper">
                    <Swiper
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        1300: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        1400: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                      }}
                      freeMode={true}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Autoplay, FreeMode, Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <Link href="/food-and-beverages/">
                              <a><div className="img-wrp">
                                <img
                                  src="/img/Food-and-beverage.svg"
                                  alt="Food-and-beverage"
                                />
                              </div>
                              <div className="text-wrp-content">
                                <h3>Food & Beverages</h3>
                                <p>
                                  Efficiently manage your inventory and supply
                                  chain by implementing Dynamics 365 for Food
                                  and Beverages business.
                                </p>
                                <span>Explore Now</span>
                              </div></a>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/ecommerce/">
                                <a><div className="img-wrp">
                                  <img
                                    src="/img/Ecommerce.svg"
                                    alt="Ecommerce"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>E-Commerce</h3>
                                  <p>
                                    Optimize Your End-To-End Ecommerce Processes
                                    And Improve Your Customer Experience.
                                  </p>
                                  <span>Explore Now</span>
                                </div></a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/professional-services/">
                                <a><div className="img-wrp">
                                  <img
                                    src="/img/proffesional-service.svg"
                                    alt="proffesional-service"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Professional Services</h3>
                                  <p>
                                    Streamline And Efficiently Manage Your
                                    Professional Services with Microsoft
                                    Dynamics 365 Business Applications.
                                  </p>
                                  <span>Explore Now</span>
                                </div></a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/microsoft-cloud-for-manufacturing/">
                                <a><div className="img-wrp">
                                  <img
                                    src="/img/Food-and-beverage.svg"
                                    alt="Food-and-beverage"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Manufacturing & Distribution</h3>
                                  <p>
                                    Keep track of your production lines and
                                    bring transparency with Microsoft Dynamics
                                    365 for Manufacturing and Distribution.
                                  </p>
                                  <span>Explore Now</span>
                                </div></a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/food-and-beverages/">
                                <a><div className="img-wrp">
                                  <img
                                    src="/img/Food-and-beverage.svg"
                                    alt="Food-and-beverage"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Startups</h3>
                                  <p>
                                    Leverage maximum possible resources to
                                    manage end-to-end business processes for
                                    your Startup with Microsoft Dynamics 365.
                                  </p>
                                  <span>Explore Now</span>
                                </div></a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NonProfits;
