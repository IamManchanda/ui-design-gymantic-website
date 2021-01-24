function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">Testimonials</h2>
      <div className="testimonials__content">
        <div className="testimonials__content--slider">
          <div className="testimonials__content--slider__slide active">
            <p className="testimonials__content--slider__slide--para">
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              autem placeat natus iste aut inventore voluptas nesciunt
              consectetur quod sint. "
            </p>
            <h3 className="testimonials__content--slider__slide--title">
              Natasha Barton
            </h3>
          </div>

          <div className="testimonials__content--slider__slide">
            <p className="testimonials__content--slider__slide--para">
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              autem placeat natus iste aut inventore voluptas nesciunt
              consectetur quod sint. "
            </p>
            <h3 className="testimonials__content--slider__slide--title">
              Ryan Cavill
            </h3>
          </div>

          <div className="testimonials__content--slider__slide">
            <p className="testimonials__content--slider__slide--para">
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              autem placeat natus iste aut inventore voluptas nesciunt
              consectetur quod sint. "
            </p>
            <h3 className="testimonials__content--slider__slide--title">
              Sandra Rogers
            </h3>
          </div>
        </div>

        <div className="testimonials__content--indicator">
          <img
            src="/img/testimonials/testimonial-1.jpg"
            alt="testimonial-1"
            className="testimonials__content--indicator__img active"
            data-id="0"
          />
          <img
            src="/img/testimonials/testimonial-2.jpg"
            alt="testimonial-2"
            className="testimonials__content--indicator__img"
            data-id="1"
          />
          <img
            src="/img/testimonials/testimonial-3.jpg"
            alt="testimonial-3"
            className="testimonials__content--indicator__img"
            data-id="2"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
