import React, { Component } from 'react'

export default class Projects extends Component {
	render() {
		return (
			<section className="colorlib-work" data-section="projects">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">My Work</span>
							<h2 className="colorlib-heading animate-box">Recent Projects</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
							<div className="project" style={{ backgroundImage: 'url(images/img-1.jpg)' }}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Ubisoft Contest 2019</a></h3>
										<span>Odeum</span>
										<p className="icon">
											{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<div className="project" style={{ backgroundImage: 'url(images/img-2.jpg)' }}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Retro game look-alike made in Unity</a></h3>
										<span>Totally Not copyright</span>
										<p className="icon">
											{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
							<div className="project" style={{ backgroundImage: 'url(images/img-3.jpg)' }}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Work 03</a></h3>
										<span>Illustration</span>
										<p className="icon">
											{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
							<div className="project" style={{ backgroundImage: 'url(images/img-4.jpg)' }}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Work 04</a></h3>
										<span>Illustration</span>
										<p className="icon">
											{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
										</p>
									</div>
								</div>
							</div>
						</div>
						{/*  */}
					</div>
					{/* <div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div> */}
				</div>
			</section>
		)
	}
}
