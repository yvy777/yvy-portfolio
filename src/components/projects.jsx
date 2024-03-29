import React, { Component } from 'react'

export default class Projects extends Component {
	render() {
		return (
			<div id="projects">
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/Chip8.jpg'})` }}>
									<div className="desc">
										<div className="con">
											<h3>Chip 8 emulator</h3>
											<span>Game emulator/interpreter made in C++ closer to assembly to understand
												more about the basics.
											</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /></a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/Odeum_Sample.jpg'})` }}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://drive.google.com/drive/folders/1LgijRx8x7mDZnr_aa9N0TRmYO1fKRdYB?usp=sharing" target="_blank" rel="noopener noreferrer">Ubisoft Contest 2019</a></h3>
											<span>Odeum</span>
											<span>Made for the sake of ubisoft game lab 2019 with the theme "spectacle made in unity."</span>
											<span>Had replayability, public interaction, and accessibility as some of the criteria.</span>
											<span>Made in 3 months with the collaboration of art/music students.</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /></a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/TotallyNotCopyright.jpg'})` }}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://drive.google.com/drive/folders/1qvaOgx1sN7EO96f7nABirqRy0Mvo_H3H?usp=sharing" target="_blank" rel="noopener noreferrer">Retro game look-alike made in Unity</a></h3>
											<span>Totally not copyright</span>
											<span>Made as an integration project for the last semester of university using unity.</span>
											<span>Tribute to zelda/metroid/ff retro games including top-view, 2d and turn by turn combat components.
											<span>Had a lot of fun being the one to oversee the whole project as team lead/developper.</span>
											</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /></a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/website.jpg'})` }}>
									<div className="desc">
										<div className="con">
											<h3><a className="smoothscroll" href="#introduction">This Website!</a></h3>
											<span>Website in React.Js</span>
											<span>Made from Reacts using JSX, HTML, CSS, Jquery, bootstrap to display
												some of my personal stuff. I try to my best to keep this updated but my resume
												contains complementary info and vice-versa!</span>									
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /></a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div id="bottom" className="scrolldown">
							<a className=" scrolldown smoothscroll" href="#introduction"><i className="icon-arrow-up-outline"></i></a>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
