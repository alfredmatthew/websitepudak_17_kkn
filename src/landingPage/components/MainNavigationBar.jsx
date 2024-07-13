import React, { useEffect, useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import * as cc from "../../cloudinaryConfig";
import { Link, Outlet } from "react-router-dom";
import { FaXbox, FaBars } from "react-icons/fa";

const MainNavigationBars = ({ withOutlet = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setisSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setisSticky(true);
      } else {
        setisSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Lokasi", path: "/lokasi" },
    { link: "Galeri", path: "/galeri" },
  ];

  const logoImage = new CloudinaryImage(cc.directory.public + "LogoKKN", {
    cloudName: cc.nameMatthew,
  }).resize(fill().width(96).height(96));

  const logoImage1 = new CloudinaryImage(cc.directory.public + "LogoKKN1", {
    cloudName: cc.nameMatthew,
  }).resize(fill().width(96).height(96));

  const logoImage2 = new CloudinaryImage(cc.directory.public + "LogoAtmaJaya", {
    cloudName: cc.nameMatthew,
  }).resize(fill().width(96).height(96));

  return (
    <>
      <header className="bg-cyan-700 fixed left-0 right-0 top-0 w-full border-b-4 border-cyan-900 md:bg-cyan-700">
        <nav
          className={`px-4 py-4 lg:px-14 ${
            isSticky
              ? "sticky left-0 right-0 top-0 border-b-2 border-amber-900 bg-cyan-700 duration-300"
              : "bg-cyan-700"
          }`}
        >
          <div className="flex items-center justify-between gap-8 text-base">
            <a
              href="/"
              className="flex items-center space-x-3 text-xl font-medium"
            >
              <AdvancedImage
                cldImg={logoImage1}
                className="inline-block w-10 items-center"
              />
              <span className="text-[#263238] text-white">Padukuhan Pudak</span>
            </a>

            <ul className="hidden space-x-20 md:flex">
              {/* Isi dari navigation */}
              {navItems.map(({ link, path }) => {
                return (
                  <Link
                    to={path}
                    key={link}
                    className="block text-base text-white first:font-medium hover:text-brandPrimary"
                  >
                    {link}
                  </Link>
                );
              })}
            </ul>

            {/* Button untuk Mobile Devices */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-neutralDGrey focus:text-gray-500 focus:outline-none"
              >
                {isMenuOpen ? (
                  <FaXbox className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Item navigation untuk mobile */}
          <div
            className={`mt-16 space-y-4 bg-brandPrimary px-4 py-7 ${
              isMenuOpen ? "fixed left-0 right-0 top-0 block" : "hidden"
            }`}
          >
            {/* Isi dari navigation */}
            {navItems.map(({ link, path }) => {
              return (
                <Link
                  to={path}
                  key={link}
                  className="block text-base text-white first:font-medium hover:text-brandPrimary"
                >
                  {link}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
      <div className="h-[2px]"></div>
      {withOutlet && <Outlet />}
    </>
  );
};

export default MainNavigationBars;
