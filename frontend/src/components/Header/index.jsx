import React, { useState, useEffect } from "react";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";
import { Link, NavLink } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const Header = ({ children }) => {
  const [framesixvalue, setFramesixvalue] = React.useState("");
  const [openNav, setOpenNav] = useState(false);
  const [userData, setUserData] = useState();

  // const location = useLocation();

  useEffect(() => {
    const userDataParam = localStorage.getItem('userData');
    if (userDataParam) {
      const parsedUserData = JSON.parse(userDataParam);
      setUserData(parsedUserData);
    }
  }, []);

  return (
    <>
      <div className="">
        <header className=" flex justify-around md:justify-between items-center py-3 md:py-5 w-full">
          <div className="flex flex-col gap-[5px] mx-6 items-center md:mt-0 my-[7px] w-[5rem]">
          <a href="/">
            <Img
              className="h-[43px] md:h-auto object-cover w-[4rem] "
              src="images/img_image3.png"
              alt="imageThree"
            />
            <Text
              className="text-[7.39px] text-teal-A400"
              size="txtPromptSemiBold739"
            >
              SENCHAT
            </Text>
            </a>
          </div>
          <ul className="flex md:hidden justify-between items-center gap-2">
            
          </ul>


        </header>
            

        <div className="">{children}</div>
      </div>
    </>
  );
};

Header.defaultProps = {};

export default Header;
