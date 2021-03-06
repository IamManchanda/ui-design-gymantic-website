function Header() {
  return (
    <header className="header">
      <div className="header__menu">
        <div className="header__menu--line"></div>
      </div>

      <div className="header__overlay"></div>

      <nav className="header__nav">
        <a href="#" className="header__nav--logo">
          <img src="/img/logo/logo.svg" alt="logo" />
        </a>

        <ul className="header__nav--links">
          <li className="header__nav--links__item">
            <a href="#" data-text="Home">
              Home
            </a>
          </li>

          <li className="header__nav--links__item">
            <a href="#" data-text="About">
              About
            </a>
          </li>

          <li className="header__nav--links__item">
            <a href="#" data-text="Classes">
              Classes
            </a>
          </li>

          <li className="header__nav--links__item">
            <a href="#" data-text="Events">
              Events
            </a>
          </li>

          <li className="header__nav--links__item">
            <a href="#" data-text="News">
              News
            </a>
          </li>

          <li className="header__nav--links__item">
            <a href="#" data-text="Shop">
              Shop
            </a>
          </li>

          <div className="header__nav--links__toggle-container">
            <input type="checkbox" id="toggle" name="theme" />
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
