function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content--about-us footer__content--section">
          <i className="fas fa-user-friends"></i>
          <h3 className="footer__content--about-us__title footer__content--section__title">
            About us
          </h3>
          <a
            href="#"
            className="footer__content--about-us__link footer__content--section__link"
          >
            gYmantic in a nutshell
          </a>

          <a
            href="#"
            className="footer__content--about-us__link footer__content--section__link"
          >
            What we do
          </a>

          <a
            href="#"
            className="footer__content--about-us__link footer__content--section__link"
          >
            History
          </a>

          <a
            href="#"
            className="footer__content--about-us__link footer__content--section__link"
          >
            Location
          </a>

          <a
            href="#"
            className="footer__content--about-us__link footer__content--section__link"
          >
            Management Team
          </a>
        </div>

        <div className="footer__content--classes footer__content--section">
          <i className="fas fa-dumbbell"></i>
          <h3 className="footer__content--classes__title footer__content--section__title">
            Gym Classes
          </h3>
          <a
            href="#"
            className="footer__content--classes__link footer__content--section__link"
          >
            Overview
          </a>

          <a
            href="#"
            className="footer__content--classes__link footer__content--section__link"
          >
            Classes alternate view
          </a>

          <a
            href="#"
            className="footer__content--classes__link footer__content--section__link"
          >
            Class Pricing
          </a>

          <a
            href="#"
            className="footer__content--classes__link footer__content--section__link"
          >
            Single Class
          </a>

          <a
            href="#"
            className="footer__content--classes__link footer__content--section__link"
          >
            Find out more
          </a>
        </div>

        <div className="footer__content--newsletter footer__content--section">
          <i className="far fa-newspaper"></i>
          <h3 className="footer__content--newsletter__title footer__content--section__title">
            Newsletter
          </h3>
          <p className="footer__content--newsletter__para footer__content--section__para">
            Subscribe to our newsletter to receive regular updates & news from
            us.
          </p>
          <input type="email" placeholder="Your Email" />
          <input type="submit" value="Send" />
        </div>

        <div className="footer__content--address footer__content--section">
          <i className="fas fa-map-marked-alt"></i>
          <h3 className="footer__content--address__title footer__content--section__title">
            Head Office
          </h3>
          <p className="footer__content--address__para footer__content--section__para">
            177A Bleecker Street, NYC, USA
          </p>

          <i className="far fa-envelope-open"></i>
          <h3 className="footer__content--address__title footer__content--section__title">
            Email Us
          </h3>
          <p className="footer__content--address__para footer__content--section__para">
            info@cosmically.cool
          </p>
        </div>
      </div>

      <div className="footer__logo">
        <img src="/img/logo/footer.svg" alt="footer-logo" />
        <span>gYmantic</span>
      </div>

      <div className="footer__social">
        <div className="footer__social--call">
          <i className="fas fa-phone-alt"></i>
          <p className="footer__social--call__para">
            CALL US NOW: XXXX XXXX XXX
          </p>
        </div>

        <div className="footer__social--icons">
          <a href="#" className="footer__social--icons__link">
            <i className="fab fa-facebook-f"></i>
          </a>

          <a href="#" className="footer__social--icons__link">
            <i className="fab fa-instagram"></i>
          </a>

          <a href="#" className="footer__social--icons__link">
            <i className="fab fa-twitter"></i>
          </a>

          <a href="#" className="footer__social--icons__link">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
