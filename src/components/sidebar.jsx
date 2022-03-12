import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/avatar-profile.jpg'})` }} />
              <h1 id="colorlib-logo"><a href="index.html">Yvan Tran</a></h1>
              <span className="position">Software developper</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#education" data-nav-section="education">Education</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills</a></li>      
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>          
                  {/* <li><a href="#blog" data-nav-section="blog">Blog</a></li> */}
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/yvan.tran.10" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.linkedin.com/in/yvan-tran/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/yvy777" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><i className="icon-mail"></i>yvantran777@hotmail.com</li>
                {/* <li><a href="https://twitter.com/ddbarochiya" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li> */}
                {/* <li><a href="https://www.instagram.com/ddbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li> */}
                {/* <li><a href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li> */}
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                Made with <i className="icon-heart" aria-hidden="true" />, <i className="icon-coffee" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"> </i> using React.Js.
              </small></p>
              {/* <p><small>
                Something coming soon !!
              </small></p> */}
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
