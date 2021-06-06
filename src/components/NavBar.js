import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function NavBar(props) {
  return (
    <header className="bg-green-500">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-6 text-white hover:text-green-900 text-4xl font-bold cursive tracking-widest"
          >
            LuckyWorks
          </NavLink>

          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 text-white hover:text-green-800"
            activeClassName="text-white font-bold"
          >
            Posts
          </NavLink>

          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-800"
            activeClassName="text-white font-bold"
          >
            Projects
          </NavLink>

          <NavLink
            to="/about"
            activeClassName="text-white font-bold"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-800"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.facebook.com/luky.purdiono"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/lukypurdiono/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UC3jaeqEei5uBnxGAM9G3_Cw"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
