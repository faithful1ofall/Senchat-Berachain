import React, { useState, useEffect } from "react";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";
import { Link, NavLink } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const Navbar = ({ children }) => {
  const [framesixvalue, setFramesixvalue] = React.useState("");
  const [openNav, setOpenNav] = useState(false);
  const [userData, setUserData] = useState();
  const [userimage, setUserimage] = useState();

  // const location = useLocation();

  useEffect(() => {
    const userDataParam = localStorage.getItem('userData');
    if (userDataParam) {
      const parsedUserData = JSON.parse(userDataParam);
      setUserData(parsedUserData);
      const image = parsedUserData.image.replace('ipfs://', '');
      const imageurl = `https://cloudflare-ipfs.com/ipfs/${image}`;
      setUserimage(imageurl);
    }
  }, []);

  return (
    <>
      <div className="">
        <header className=" flex justify-around md:justify-between items-center py-3 md:py-5 w-full">
          <div className="flex flex-col gap-[5px] mx-6 items-center md:mt-0 my-[7px] w-[5rem]">
          <a href="/education">
            <Img
              className="h-[43px] md:h-auto object-cover w-[4rem] "
              src="../images/img_image3.png"
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
            

            <li className="hover:text-teal-A400 text-xl ml-[51px]">
               <NavLink
                className={({ isPending, isActive }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-teal-A400 text-xl"
                    : ""
                }
                to="/education"
              >
                <Text size="txtPromptBold20"> Feeds </Text>
              </NavLink> 
            </li>

            {/* <Input
              name="frameSix"
              placeholder="Search...."
              value={framesixvalue}
              onChange={(e) => setFramesixvalue(e)}
              className="font-prompt leading-[normal] p-0 placeholder:text-gray-700_a5 sm:px-5 text-gray-700_a5 text-left text-xs sm:w-full md:w-[50rem]"
              wrapClassName="bg-gray-100 flex md:ml-[0] ml-[60px] md:mt-0 my-3 pl-[21px] pr-[35px] py-[15px] rounded-[25px] w-[35rem] md:w-[83%rem]"
              prefix={
                <div className="h-[17px] mr-[5px] w-[17px]  my-px">
                  <BiSearch className="cursor-pointer h-[17px] my-auto" />
                </div>
              }
              suffix={
                <CloseSVG
                  fillColor="#616060a5"
                  className="cursor-pointer h-[17px] my-auto"
                  onClick={() => setFramesixvalue("")}
                  style={{
                    visibility:
                      framesixvalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={17}
                  width={17}
                  viewBox="0 0 17 17"
                />
              }
            ></Input> */}
            <div className="flex items-center gap-4">
            <li className="hover:text-teal-A400 text-xl">
              <NavLink  
              className={({ isPending, isActive }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-teal-A400 text-xl"
                    : ""
                }
                to="/message">
                <Text size="txtPromptBold20WhiteA700">
                  Post
                </Text>
              </NavLink>
              </li>
              <Text className="text-base " size="txtPromptBold16">
                {userData ? userData.name : "Guest"} 
              </Text>
              <NavLink
                className="flex items-center h-[35px] rounded-[50%] w-[35px]"
                to="/user"
              >
                <Img src={userimage} alt="userimage" />
              </NavLink>
             {/*  <Img
                className="h-[23px] "
                src="images/img_notification.svg"
                alt="notification"
              /> */}
            </div>
          </ul>

          <div className="mobile invisible md:visible">
            <button
              className="absolute right-0 top-7 mx-5 flex items-center"
              onClick={() => setOpenNav(!openNav)}
            >
              {!openNav ? (
                <svg
                  style={{ width: "34px", height: "34px" }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                  />
                </svg>
              ) : (
                <svg
                  style={{ width: "24px", height: "24px", color: "black" }}
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 10 10 L 90 90 M 90 10 L 10 90"
                    stroke="black"
                    stroke-width="10"
                  />
                </svg>
              )}
            </button>
            {openNav ? (
              <>
                <ul className="flex flex-col bg-[#ffff] absolute w-full z-10 top-28 left-0 justify-start items-center gap-4 mr-10 shadow-md py-5">
                  <li className="hover:text-teal-A400 text-xl">
                    <NavLink
                      className={({ isPending, isActive }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? " text-teal-A400 text-xl"
                          : ""
                      }
                      to="/education"
                    >
                      <Text size="txtPromptBold20WhiteA700">Feeds</Text>
                    </NavLink>
                  </li>

                  {/*  <li className="hover:text-teal-A400 text-xl">
                    <NavLink
                      className={({ isPending, isActive }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? " text-teal-A400 text-xl"
                          : ""
                      }
                      to="/thread"
                    >
                      <Text size="txtPromptBold20WhiteA700">Threads</Text>
                    </NavLink>
                  </li>

                 <li className=" hover:text-teal-A400 text-xl">
                    <NavLink
                      className={({ isPending, isActive }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? " text-teal-A400 text-xl"
                          : ""
                      }
                      to="/nft-index"
                    >
                      <Text size="txtPromptBold20">NFT</Text>
                    </NavLink>
                  </li> */}

                  {/*<Input
                    name="frameSix"
                    placeholder="Search...."
                    value={framesixvalue}
                    onChange={(e) => setFramesixvalue(e)}
                    className="font-prompt mx-auto leading-[normal] p-0 placeholder:text-gray-700_a5 sm:px-5 text-gray-700_a5 text-left text-xs w-full"
                    wrapClassName="bg-gray-100 flex  pl-[21px] pr-[35px] py-[15px] rounded-[25px] w-[80%]"
                    prefix={
                      <div className="h-[17px] mr-[5px] w-[17px]  my-px">
                        <BiSearch className="cursor-pointer h-[17px] my-auto" />
                      </div>
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#616060a5"
                        className="cursor-pointer h-[17px] my-auto"
                        onClick={() => setFramesixvalue("")}
                        style={{
                          visibility:
                            framesixvalue?.length <= 0 ? "hidden" : "visible",
                        }}
                        height={17}
                        width={17}
                        viewBox="0 0 17 17"
                      />
                    }
                  ></Input>*/}
                  <div className="flex items-center justify-self-end gap-4">
                  <li className="hover:text-teal-A400 text-xl">
                    <NavLink
                    className={({ isPending, isActive }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? " text-teal-A400 text-xl"
                          : ""
                      }
                      to="/message">
                      <Text
                        className="text-[17px]"
                        size="txtPromptBold20WhiteA700"
                      >
                        Post
                      </Text>
                    </NavLink>
                    </li>
                    <Text className="text-base " size="txtPromptBold16">
                      {userData ? userData.name : "Guest"}
                    </Text>
                    <NavLink
                      to="/user"
                      className="flex items-center h-[25px] rounded-[50%] w-[25px]"
                    >
                      <Img
                        src={userimage}
                        alt="userimage"
                      />
                    </NavLink>
                    {/* <Img
                      className="h-[21px] "
                      src="images/img_notification.svg"
                      alt="notification"
                    /> */}
                  </div>
                </ul>
              </>
            ) : (
              <></>
            )}
          </div>
        </header>

        <div className="">{children}</div>
      </div>
    </>
  );
};

Navbar.defaultProps = {};

export default Navbar;
