import "./App.css";
import Navigation from "./components/Navigation";
import { Button } from "./components/Helper";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navigation />
      <section className="hero">
        <div className="hero__primary">
          <h1 className="whiteTxt">
            When <span className="blueTxt">Hackathon</span> meets SharkTank
          </h1>
          <h3>29th April, 2022 - 6th May, 2022</h3>
          <p className="whiteTxt hero__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            porttitor, dolor id auctor fringilla, magna arcu venenatis eros, id
            scelerisque mi ante luctus sem.
          </p>
          <Button text="Register Now" />
        </div>
        <div className="hero__secondary">
          <img className="hero__img" src="/images/hackathon.webp" />
        </div>
      </section>
      <section className="factors">
        <div className="factors__container">
          <h1>35+</h1>
          <h2>Sponsors</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            porttitor, dolor id.
          </p>
        </div>
        <div className="factors__container">
          <h1>100K+</h1>
          <h2>Worth Gifts</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            porttitor, dolor id.
          </p>
        </div>
        <div className="factors__container">
          <h1>80+</h1>
          <h2>Mentors</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            porttitor, dolor id.
          </p>
        </div>
        <div className="factors__container">
          <h1>30+</h1>
          <h2>Kickass Events</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            porttitor, dolor id.
          </p>
        </div>
      </section>
      <section className="about">
        <h1 className="about__main">
          <span className="whiteTxt">What is</span>
          <span className="blueTxt">
            {" "}
            <span className="whiteTxt">Hack</span>box
            <span className="whiteTxt">?</span>
          </span>
        </h1>

        <div className="about__data">
          <img className="about__img" src="/images/about.webp" />
          <div className="about__data--sec">
            <p className="whiteTxt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
              interdum massa. Maecenas ante odio, tristique ut eleifend non,
              rutrum eu arcu. Suspendisse potenti. Proin in turpis vestibulum,
              porttitor erat a, ultrices mi. Etiam convallis nisl et gravida
              ultrices. Duis ut lacus id metus tristique mollis. Morbi pharetra
              lorem vitae scelerisque luctus.
            </p>
            <p className="whiteTxt">
              Vivamus ut augue placerat, iaculis felis at, laoreet ligula. Sed
              suscipit vulputate elit at ullamcorper. Quisque eu est id orci
              commodo suscipit. Pellentesque mattis nibh nec bibendum porttitor.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
