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
                      <p>C#, TYPESCRIPT, MICROSOFT AZURE SERVICES, OPENAPI SPECIFICATION, ANGULAR, ETC. </p>
                      <ul>
                        <li>Currently working on an upcoming full-cloud Platform as a service (Paas) for the Security Center AutoVu automatic license plate recognition (ALPR)
                          system. Paas targeting international cities, universities and airports to be used as their parking management software.</li>
                        <li>Worked on the on-premise (ALPR) system used by Montreal-Trudeau airport, Danish police force, University of Wisconsin, City of Aspen etc.</li>
                        <li>Used Angular, Typescript and other front-end libraries to design a user-facing web-app for live-monitoring/vehicle searching based on UX feedback.</li>
                        <li>Used C#, Rest API, and Azure Cognitive Search for fast car reads data retrieval and back end support.</li>
                        <li>Developed a visual studio code plugin to enhance programmers productivity to facilitate test template generation when writing unit tests.</li>
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
                        <li>Assisted in grading and helping the students for the database structure course. Using UML/ER Model, PostgreSQL, MySql etc. (Ift187).</li>
                        <li>Assisted in grading and helping the students for the introduction to programming course in C++. (Ift159).</li>
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
                      <h2>Genetec | Cloud Software developer intern (AutoVu) <span>(Summer 2019)</span></h2>
                      <p>C#, OPENAPI SPECIFICATION, ANGULAR, SQL, WPF </p>
                      <ul>
                        <li>Worked on adding parking occupancy data retrieval mechanismand UI telemetry for anupcomingnewparking session management software using Open API Specification and C#.</li>
                        <li>Enhanced user experience by adding a WPF email configuration page to the LPR module. A functionality used by customers such as police patrollers to notify them via email alerts when specific car reads are detected such as wanted cars or cars with special permits allowing faster response .</li>
                        <li>Addednew functionalities and fixed bugs for the license plate reconnaissance (LPR) module in the Genetec Security Center unified security platform, third-party dlls, plugin and reads simulator.</li>
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
                      <h2>Ubisoft Montreal | Software developer tools intern (Synapse) <span>(Autumn 2018)</span></h2>
                      <p>C#, C++, MONGODB, SQL, GITLAB API </p>
                      <ul>
                        <li>Contributed to making available a newRest API to automatically update a pdb file package management software tool to the most recent successful job artifacts available in GitLab. Used by the VMS support team to automatize the package deployment to all on-going VMS instances saving lot of time and error prone issues.</li>
                        <li>Added a session saving mechanism using SQL queries to the heat map data system. A telemetry tool used for game telemetry information (Fps) when play testing a game.</li>
                        <li>Worked on supplying aggregated data using production data located in a Mongo Database to the Quebec team for their telemetry software.</li>
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
                      <h2>Gurit Canada Inc. | Software developer intern <span>(Winter 2018)</span></h2>
                      <p>C#, VB.NET, TRANSACT-SQL</p>
                      <ul>
                        <li>Added new functionality to the worksheets information interface used by factory workers when processing composite materials.</li>
                        <li>Provided additional statistical tools and/or functionality to the interfaces according to the needs and mandates requested by the product/sales managers.</li>
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
                      <h2>University of Sherbrooke’s laboratory of bio-informatics | Software developer intern ) <span>(Summer 2017)</span></h2>
                      <p>PYTHON, DJANGO, LINUX </p>
                      <ul>
                        <li>Developed a web application in python with the Django framework using a genomic database on Linux for the conception of a genomic application.</li>
                        <li>Improved a 2d visualization project made with Python PIL for a dynamic rendering of motifs inclusions and protein domains in a Genome Browser.</li>
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
