import React from 'react'
const Developer = () => {
    return (
        <section className="breadcrumb__area breadcrumb-style pt-40 pb-40 p-relative z-index-1" id="community"
            style={{
                height: 'max-content',
                marginBottom: '5px'
            }}
        >
            <div className="breadcrumb__bg-overlay m-img"></div>
            <div className="container mb-10"
                style={{ marginBottom: '30px' }}
            >
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="breadcrumb__content text-center">
                            <h3 className="breadcrumb__title">
                                Developer Community
                                <img src="assets/img/breadcrumb/titile.svg" alt="" />
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid gx-0">
                <div className="row gx-0">
                    <div className="feature-3-active swiper-container"
                        style={{
                            height: 'max-content',
                            important: 'true',
                            marginTop: '0px',
                            padding: '20px 50px'
                        }}                     >
                        <div className="d-flex flex-row flex-sm-row gap-5 overflow-scroll"
                            style={{
                                height: 'max-content'
                            }}
                        >
                            <div className="tp-feature-3-content-inner d-flex align-items-center text-decoration-none"
                                style={{
                                    marginBottom: '20px',
                                    minWidth: '320px',
                                    important: 'true'
                                }}>
                                <div className="tp-feature-3-content">
                                    <h3 className="tp-feature-title">Open a Discussion</h3>
                                    <p>
                                        Explore our source code, engage in technical discussions,
                                        and actively contribute to the community.
                                        <a rel="noreferrer" style={{color:'blue'}} className="text-decoration-none d-flex flex-row justify-content-start  align-items-center" target="_blank" href="https://builder.corover.ai/#/auth/signin" >
                                            Know more <i className="fa fa-link-simple pl-10"></i>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="tp-feature-3-content-inner d-flex align-items-center text-decoration-none"

                                style={{
                                    marginBottom: '20px',
                                    minWidth: '320px',
                                    important: 'true'
                                }}>
                                <div className="tp-feature-3-content">
                                    <h3 className="tp-feature-title">
                                        Participate in the discussion
                                    </h3>
                                    <p>
                                        Let's delve into the growth driven by our product and
                                        community involvement.
                                        <a rel="noreferrer" style={{color:'blue'}} className="text-decoration-none d-flex flex-row justify-content-start  align-items-center" target="_blank" href="https://builder.corover.ai/#/auth/signin">
                                            Know more <i className="fa fa-link-simple pl-10"></i>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="tp-feature-3-content-inner d-flex align-items-center text-decoration-none"
                                style={{
                                    marginBottom: '20px',
                                    minWidth: '320px',
                                    important: 'true'
                                }}>
                                <div className="tp-feature-3-content">
                                    <h3 className="tp-feature-title">
                                        Follow us to webinars & announcements
                                    </h3>
                                    <p>Receive live updates about our webinar announcements.
                                        <a rel="noreferrer" style={{color:'blue'}} className="text-decoration-none d-flex flex-row justify-content-start  align-items-center" target="_blank" href="https://builder.corover.ai/#/auth/signin">
                                            Know more <i className="fa fa-link-simple pl-10"></i>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Developer
