import { useState } from "react";
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  const [toggleFunc, settoggleFunc] = useState(false);
  return (
    <header className="flex justify-between items-center px-4 py-4 bg-gray-300 font-hero-font">
      {/* logo section -> */}
      <a href="#" className="text-4xl">
        Guru's Portfolio
      </a>
      {/* nav-bar section(before toggle menu) -> */}
      <nav className="hidden md:block text-2xl">
        <ul className="flex">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      {/* toggle-menu ->*/}
      {toggleFunc && (
        <nav className="block md:hidden mobile-view  bg-gray-300 text-4xl">
          <ul className="flex flex-col text-white">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      )}
      {/* toggle button section -> */}
      <button
        className="block md:hidden"
        onClick={() => {
          settoggleFunc(!toggleFunc);
        }}
      >
        <TiThMenu className="nav-button" size={40} />
      </button>
    </header>
  );
};

export default Header;
