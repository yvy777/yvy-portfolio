import React, { Component } from 'react';


export default class Skills extends Component {
    render() {
        return (
            <section className="colorlib-skills" data-section="skills">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">My Specialty</span>
                            <h2 className="colorlib-heading animate-box fadeInUp animated">My Skills</h2>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<p>These are some of the skills I've acquired over the years and I hope to get better at those and learn new 
                                ones. My Resume (CV) has a more exhaustive list. This is a general overview on what technology stack 
                                I have been using recently.
                            </p>
						</div>


                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>C#</h3>
                                <div className="progress">
                                    <div className="progress-bar color-1" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width : "95%"}}>
                                        {/* <span>95%</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>Angular/React.JS</h3>
                                <div className="progress">
                                    <div className="progress-bar color-2" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                        {/* <span>80%</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>C++/Rust/Python</h3>
                                <div className="progress">
                                    <div className="progress-bar color-3" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width : "80%"}}>
                                        {/* <span>85%</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>HTML, CSS, typescript</h3>
                                <div className="progress">
                                    <div className="progress-bar color-4" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width : "90%"}}>
                                        {/* <span>90%</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>Java/Kotlin</h3>
                                <div className="progress">
                                    <div className="progress-bar color-5" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                        {/* <span>70%</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>SQL, Cloud and NO-SQL databases</h3>
                                <div className="progress">
                                    <div className="progress-bar color-6" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                        {/* <span>80%</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}