// components/AboutUs.js
import '../styles/About.css';

function AboutUs() {
  return (
    <section id="about-us" className="section">
      <div className="left"><h1>
        Developing Accessible Technology for All.
      </h1>
        <p>
          For the experience of nearest human touch.
        </p>
        <div className="buttons">
          <input type="button" value="Learn More" />
          <input type="button" value="Connect with Us" />
        </div>
      </div>
      <div className="right">
        <img src="" alt="About Us" />
      </div>
    </section>
  );
}

export default AboutUs;