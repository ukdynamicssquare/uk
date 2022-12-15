import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";

const CaseStudyTimosco = () => {
  return (
    <>
      <Head>
        <title>Timesco | Upgrading to Dynamics 365 Business Central</title>
        <meta
          name="description"
          content="Timesco worked with Dynamics Square to upgrade to Dynamics 365 Business Central from Dynamics NAV. Read Timesco case story to gain insights."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/case-studies/timesco/"
        />
      </Head>
      <section className="hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="webin-top-left case-study-bann">
                <div className="top-se">
                  <span className="date-ti">TIMESCO Case Study</span>
                  <h1>
                    The UK's premier manufacturer of medical devices for
                    Anesthesia, Surgery, Podiatry & General Medical.
                  </h1>
                  <p>Upgrade to Dynamics 365 Business Central Online</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sider-over">
                <Image
                  src="/img/Dynamics-365-Business-Central.png"
                  alt="business centeral implementation"
                  width={1024}
                  height={597}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cast-studi-into">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row bg-case">
                <div className="col-lg-3 align-self-center">
                  <img src="/img/timesco-logo.png" alt="timesco-logo" />
                </div>
                <div className="col-lg-9">
                  <p>
                    Established in 1964,{" "}
                    <a href="https://timesco.com/" target="_blank">
                      Timesco
                    </a>{" "}
                    is a well-known manufacturer and supplier of surgical
                    instruments in the UK market and is continuously working to
                    expand the same globally. Timesco is expanding with a
                    product range that includes Anesthesia, Surgery, General
                    Medical, and Podiatry in the medical industry. They are also
                    working toward innovating and developing medical
                    technologies to bring awareness and improve the quality of
                    human life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why custom-pd-1 custom-pd-2">
        <div className="container">
          <header className="section-header">
            <h2>
              What are The <br />
              Business Challenges
            </h2>
          </header>
          <div className="row gx-5">
            <div className="col-lg-6">
              <Image
                src="/img/cast-stu-pic.png"
                alt="cast-stu-pic"
                width={484}
                height={407}
              />
            </div>
            <div className="col-lg-6">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      Timesco was not satisfied with their previous Dynamics NAV
                      support partner in terms of providing on-time system
                      support and the sort of services they anticipate.
                    </p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      Facing difficulties while driving their manufacturing,
                      supplying, and distribution operations through on-premises{" "}
                      <Link
                        href="/products/microsoft-dynamics-nav/"
                        target="_blank"
                        rel="noopener"
                      >
                        Dynamics NAV
                      </Link>{" "}
                      2013 R2.
                    </p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      Finding a trustworthy partner to upgrade their Dynamics
                      NAV 2013 R2 system and getting timely support were a
                      challenge for them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="industry-more-sec casestudy-list-more">
        <div className="container">
          <header className="section-header">
            <h2>Solution Delivered</h2>
            <p>Upgrading to Dynamics 365 Business Central Online</p>
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
                      200: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1200: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1300: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    slidesPerView={3}
                    spaceBetween={15}
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
                          <div className="img-wrp">
                            <img
                              src="/img/material-lightbulb-outline.svg"
                              alt="Food-and-beverage"
                            />
                          </div>
                          <div className="text-wrp-content">
                            <p>
                              Dynamics Square upgraded Timesco's system from
                              Dynamics NAV 2013 R2 to{" "}
                              <Link
                                href="/products/dynamics-365-business-central/"
                                target="_blank"
                              >
                                Dynamics 365 Business Central online.
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="NotforProfit"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                Integrated Timesco's Business Central account
                                with third-party Document Management add on and
                                performed seamless migration to ensure connected
                                and smoother data-driven practices.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="Ecommerce"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                We provided onsite UAT (User Acceptance
                                Training) for two weeks during the pandemic & Go
                                Live Sessions to ensure seamless user adaptation
                                to Timesco team.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="proffesional-service"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                We helped Timesco to easily move to Dynamics 365
                                Business Central and seamlessly start using the
                                newly upgraded system.
                              </p>
                            </div>
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

      <section className="Solution-business-why custom-pd-3">
        <div className="container">
          <header className="section-header">
            <h2>Benefits</h2>
          </header>
          <div className="row gx-5">
            <div className="col-lg-6">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      Timesco is now using D365 Business Central on the cloud
                      while leveraging Azure-based data-driven practices
                      integrated with Outlook helping them to accelerate their
                      business flow while improving their financial capabilities
                      and ensuring reliable compliance management.
                    </p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      Timesco ensured that they have doubled their production
                      capacity and increased their revenue by leveraging
                      connected data experience gained through our integrated
                      business management solution.
                    </p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      Our end-to-end user training and support helped Timesco
                      employees to adapt, learn, and use the system efficiently
                      without losing the current workflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src="/img/Group1435.png"
                alt="Group1435"
                width={640}
                height={598}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="case-clent">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="case-clent-test">
                <p>
                  We are impressed with their product awareness, technical
                  skills and commitment to us. They analyze the situation and
                  deliver to best fit our requirement and solutions.
                </p>
                <h4>Mark Shaxted</h4>
                <span>Operations Manager | CRM Trading</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call_to_action call_to_action-height pd-404">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="call_to_action-right over-img">
                <img src="/img/MaskGroup8.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="call_to_action-left">
                <h3>Consult To Reveal Best Approach</h3>
                <p>
                  Connect with us to facilitate your system to drive a parallel
                  approach in the market you deal with. We help enterprises to
                  implement their unique needs.
                </p>
                <div className="m-o-t m-o-t-inde">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      href="#exampleModal"
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
    </>
  );
};

export default CaseStudyTimosco;
