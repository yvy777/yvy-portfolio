import React, { Component } from 'react';
import './App.css';
import Introduction from './components/introduction'
import Sidebar from './components/sidebar'
import About from './components/about'
import Timeline from './components/timeline'
import Projects from './components/projects'
import Education from './components/education'
import Skills from './components/skills'
// import Blog from './components/blog'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Timeline></Timeline>
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
            {/* <Blog></Blog> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
