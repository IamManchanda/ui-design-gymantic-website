function Register() {
  return (
    <section className="register">
      <div className="register__progress">
        <div className="register__progress--step">
          <span>1</span>
          <i className="fa fa-check"></i>
        </div>

        <div className="register__progress--step">
          <span>2</span>
          <i className="fa fa-check"></i>
        </div>

        <div className="register__progress--step">
          <span>3</span>
          <i className="fa fa-check"></i>
        </div>

        <div className="register__progress--step">
          <span>4</span>
          <i className="fa fa-check"></i>
        </div>
      </div>

      <div className="register__content">
        <div className="register__content--form">
          <div className="register__content--form__page">
            <div className="register__content--form__page--field">
              <label for="first-name">First Name</label>
              <input type="text" />
            </div>

            <div className="register__content--form__page--field">
              <label for="last-name">Last Name</label>
              <input type="text" />
            </div>

            <div className="register__content--form__page--field">
              <button className="next-1 next">Next</button>
            </div>
          </div>

          <div className="register__content--form__page">
            <div className="register__content--form__page--field">
              <label for="email-address">Email Address</label>
              <input type="email" />
            </div>

            <div className="register__content--form__page--field">
              <label for="phone-number">Phone Number</label>
              <input type="number" />
            </div>

            <div className="register__content--form__page--field btns">
              <button className="prev-1 prev">Previous</button>
              <button className="next-2 next">Next</button>
            </div>
          </div>

          <div className="register__content--form__page">
            <div className="register__content--form__page--field">
              <label for="date-of-birth">Data of Birth</label>
              <input type="text" />
            </div>

            <div className="register__content--form__page--field">
              <label for="gender">Gender</label>
              <select>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="register__content--form__page--field btns">
              <button className="prev-2 prev">Previous</button>
              <button className="next-3 next">Next</button>
            </div>
          </div>

          <div className="register__content--form__page">
            <div className="register__content--form__page--field">
              <label for="usernaame">Username</label>
              <input type="text" />
            </div>

            <div className="register__content--form__page--field">
              <label for="password">Password</label>
              <input type="password" />
            </div>

            <div className="register__content--form__page--field btns">
              <button className="prev-3 prev">Previous</button>
              <button className="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
