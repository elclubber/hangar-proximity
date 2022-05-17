import React, { Component } from 'react';
import pencil from "../assets/img/pencil.gif";

class Main extends Component {
  /**
   * Render
   *
   * @returns {view}
   */
  render() {
    return (
      <main className="main-wrap">
        <section className="pb-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 text-center">
                <h3 className="subtitle">How we do it</h3>
                <h2>
                  We use data driven-creativity <br />
                  to solve business problems
                </h2>
                <div className="block-image mt-5"></div>
              </div>
              <div className="col-md-12">
                <div className="block-text text-center">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat tenetur rem, neque autem nihil odit
                    blanditiis ducimus aut facilis perspiciatis maxime eos, ut quisquam praesentium. Rerum porro
                    praesentium corporis maiores minus ad ut est error ex asperiores deleniti totam id ab, nihil maxime
                    mollitia, nisi nobis!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 text-center">
                <img src={pencil} className="img-fluid" alt="pencil" />
                <h3 className="subtitle">Business problems we have solved</h3>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6 mt-2">
                <div className="box">
                  <h3 className="box__title">Can a love story double as a hearing test?</h3>
                  <a href="./" className="box__link">
                    Find out here
                  </a>
                </div>
              </div>
              <div className="col-md-6 mt-2">
                <div className="box">
                  <h3 className="box__title">How close to an AFL player can you get ?</h3>
                  <a href="./" className="box__link">
                    Find out here
                  </a>
                </div>
              </div>
              <div className="col-md-12 text-center mt-5">
                <a href="./" className="link">
                  view our work
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default (Main);