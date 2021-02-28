import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <section className="colorlib-experience" data-section="timeline">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">highlights</span>
              <h2 className="colorlib-heading animate-box">Timeline</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-1">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Genetec | Full Time Cloud Software developer (AutoVu) <span>(2020-present)</span></h2>
                      <p>C#, Typescript, MICROSOFT AZURE SERVICES, SWAGGER API, ANGULAR, SQL, WPF</p>
                      <ul>
                        <li>Working on Cloud micro-services for a new full on-cloud application using Microsoft azure storage, service bus, azure functions, search Service, etc.</li>
                        <li>Working on the license plate reconnaissance (LPR) module in Security Center.</li>
                        <li>Adding functionality to already existing applications (Simulator, main platform, front-end) depending on needs for the on-premise solution.</li>
                        <li>Making code reviews, integration and unit tests to ensure reliability.</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-2">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>University of Sherbrooke <span>(Sep 2019-December 2019)</span></h2>
                      <p>TEACHER ASSISTANT</p>
                      <ul>
                        <li>Assisted in grading and helping the students for the database structure course (Ift187).</li>
                        <li>Assisted in grading and helping the students for the introduction to programming course (Ift159).</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Genetec | Internship Cloud Software developer (AutoVu) <span>(Summer 2019)</span></h2>
                      <p>C#, SWAGGER API, ANGULAR, SQL</p>
                      <ul>
                        <li>Worked on Cloud micro-services for an upcoming new parking session management software.</li>
                        <li>Worked on the license plate reconnaissance (LPR) module in Security Center.</li>
                        <li>Added functionality to already existing applications (Simulator, main platform, front-end) depending on needs.</li>
                        <li>Made code reviews, integration and unit tests to ensure reliability.</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-4">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Ubisoft Montreal | Intership Software tools developer (Synapse)) <span>(Autumn 2018)</span></h2>
                      <p>C#, C++, MONGODB, SQL, GITLAB API</p>
                      <ul>
                        <li>Contributed on various projects (tools) used by different production teams according to the agile method.</li>
                        <li>Added functionality to already existing applications (SDK, DLL, Data Capture System) depending on needs.</li>
                        <li>Worked on features that needed work to be done on MongoDB database and Sql.</li>
                        <li>Made code reviews, integration and unit tests to ensure reliability.</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Gurit Canada Inc. | Internship Software developer of web and statistical tools) <span>(Winter 2018)</span></h2>
                      <p>C#, VB.NET, TRANSACT-SQL</p>
                      <ul>
                        <li>Developed, upgraded and modified multiple front (ASP.Net) and back end components of the intern web architecture used by the workers.</li>
                        <li>Provided additional statistical tools and/or functionality to the interfaces according to the needs and mandates requested.</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-6">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>University of Sherbrooke’s laboratory of bio-informatics | Web application developer) <span>(Summer 2017)</span></h2>
                      <p>PYTHON, LINUX</p>
                      <ul>
                        <li>Developed a web application in python using a genomic database on Linux for the conception of a genomic application.</li>
                        <li>Improved a visualization project concerning the inclusion of motifs and protein domains in a Genome Browser..</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none">
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
