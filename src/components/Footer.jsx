import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container divide-y  text-gray-800 mt-10 mx-auto absolute lg:ml-28 ">
      <div className=" flex flex-col justify-between py-10 lg:pl-9 space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link to="/" className="flex justify-center gap-2 lg:justify-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 rounded-full text-cyan-600"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <span className="self-center text-2xl font-semibold">
              Smart Home
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase">Product</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/">Features</Link>
              </li>
              <li>
                <Link to="/">Integrations</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase">Smart Home</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/">Privacy</Link>
              </li>
              <li>
                <Link to="/">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase">Developers</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/">Public API</Link>
              </li>
              <li>
                <Link to="/">Documentation</Link>
              </li>
              <li>
                <Link to="/">Guides</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase">Social media</div>
            <div className="flex justify-start space-x-3">
              <Link
                to="/https://web.facebook.com/profile.php?id=100032409277974"
                title="Facebook"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </Link>
              <Link
                to="/https://github.com/mamun4447"
                title="GitHub"
                className="flex items-center p-1"
              >
                <i className="text-xl">
                  <FaGithub />
                </i>
              </Link>
              <Link
                to="/https://www.linkedin.com/in/al-mamun-abdullah"
                title="LinkedIn"
                className="flex items-center p-1"
              >
                <i className="text-xl">
                  <FaLinkedin />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-400">
        © 2023 Smart Home Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
