import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div id="introduction">
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/keyboard.jpg'})` }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! <br />I'm Yvan</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/drive/folders/1q6yx1p0Nm0skuCDJsEzF1sJI8SL3zyk7?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>   
              </li>
              <li style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/forest.jpg'})` }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Here are some of my projects</h1>
                          <p><a className="btn btn-primary btn-learn smoothscroll" href="#projects" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>       
          </div>
        </section>
      </div>
    )
  }
}
