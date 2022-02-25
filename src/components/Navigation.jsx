import "./Navigation.css";
const navData = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/#about",
    text: "About Us",
  },
  {
    href: "/#team",
    text: "Team",
  },
  {
    href: "/#sharks",
    text: "Our Mentors",
  },
  {
    href: "/#sponsor",
    text: "Sponsors",
  }
];

const Navigation = () => {
  return (
    <nav className="navigation">
      <img className="navigation__logo" src="/brand/logo.svg" />
      <ul className="navigation__data whiteTxt">
        {navData.map((item, index) => {
          return (
            <a className="navigation__item" key={index} href={item.href}>
              <li>{item.text}</li>
            </a>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
