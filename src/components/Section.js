import React, { Component } from 'react';
import video from "../assets/video/video.mp4";
import videoPoster from "../assets/img/video-poster.jpg";

class Section extends Component {
  /**
   * Render
   *
   * @returns {view}
   */
  render() {
    return (
      <section className="hero">
        <h1 className="hero__txt">
          We make people
          <br />
          more valuable to brands
        </h1>
        <div className="hero__video-container">
          <video className="hero__video" autoPlay muted loop poster={videoPoster}>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </section>
    )
  }
}

export default (Section);