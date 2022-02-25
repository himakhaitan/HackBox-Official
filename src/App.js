import "./App.css";
import Navigation from "./components/Navigation";
import { Button } from "./components/Helper";
import Footer from "./components/Footer";
import Member from "./components/Layout/Member";
import { Heading } from "./components/Helper";

const sponsorData = [
  {
    src: "https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    src: "https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    src: "https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    src: "https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    src: "https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
];

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
      <section id="about" className="about">
        <Heading primary="What is" secondary="Hack" tertiary="box" quad="?" />
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
      <Member
        data={[
          {
            src: "https://pbs.twimg.com/profile_images/1478298971315400704/1V3GYDdt_400x400.jpg",
            name: "Himanshu Khaitan",
            desc: "CEO",
            linkedin: "https://www.linkedin.com/in/john-doe-1b9b7b1a0/",
            twitter: "https://twitter.com/john_doe",
          },
          {
            src: "https://pbs.twimg.com/profile_images/1478298971315400704/1V3GYDdt_400x400.jpg",
            name: "John Doe",
            desc: "CEO",
            linkedin: "https://www.linkedin.com/in/john-doe-1b9b7b1a0/",
            twitter: "https://twitter.com/john_doe",
          },
          {
            src: "https://pbs.twimg.com/profile_images/1478298971315400704/1V3GYDdt_400x400.jpg",
            name: "John Doe",
            desc: "CEO",
            linkedin: "https://www.linkedin.com/in/john-doe-1b9b7b1a0/",
            twitter: "https://twitter.com/john_doe",
          },
          {
            src: "https://pbs.twimg.com/profile_images/1478298971315400704/1V3GYDdt_400x400.jpg",
            name: "John Doe",
            desc: "CEO",
            linkedin: "https://www.linkedin.com/in/john-doe-1b9b7b1a0/",
            twitter: "https://twitter.com/john_doe",
          },
        ]}
        primary="Meet"
        tertiary="Our"
        quad=" Sharks"
        id="sharks"
      />
      <div className="sponsors">
        <div className="sponsors__data">
          {sponsorData.map((item, index) => {
            return (
              <div className="sponsor__item">
                <img src={item.src} />
              </div>
            );
          })}
        </div>
        <h1>
          <span className="sponsor__text whiteTxt blackBg">Our </span>
          <span className="sponsor__text blackTxt blueBg">Sponsors</span>
        </h1>
      </div>
      <Member
        id="team"
        data={[
          {
            src: "https://pbs.twimg.com/profile_images/1478298971315400704/1V3GYDdt_400x400.jpg",
            name: "Himanshu Khaitan",
            desc: "CEO",
            linkedin: "https://www.linkedin.com/in/john-doe-1b9b7b1a0/",
            twitter: "https://twitter.com/john_doe",
          },
          {
            src: "https://pbs.twimg.com/profile_images/1478298971315400704/1V3GYDdt_400x400.jpg",
            name: "John Doe",
            desc: "CEO",
            linkedin: "https://www.linkedin.com/in/john-doe-1b9b7b1a0/",
            twitter: "https://twitter.com/john_doe",
          },
          {
            src: "https://pbs.twimg.com/profile_images/1478298971315400704/1V3GYDdt_400x400.jpg",
            name: "John Doe",
            desc: "CEO",
            linkedin: "https://www.linkedin.com/in/john-doe-1b9b7b1a0/",
            twitter: "https://twitter.com/john_doe",
          },
          {
            src: "https://pbs.twimg.com/profile_images/1478298971315400704/1V3GYDdt_400x400.jpg",
            name: "John Doe",
            desc: "CEO",
            linkedin: "https://www.linkedin.com/in/john-doe-1b9b7b1a0/",
            twitter: "https://twitter.com/john_doe",
          },
        ]}
        primary="Behind"
        tertiary="The"
        quad=" Scenes"
      />
      <Footer />
    </div>
  );
}

export default App;
