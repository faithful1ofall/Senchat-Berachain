import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import ForumCol from "components/ForumColumn/forumCol";
import Header2 from "components/Header2/navbar";
import { Link } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";

import { CloseSVG } from "../../assets/images";

const EntreForum = () => {
  const [framesixvalue, setFramesixvalue] = React.useState("");
  const sideBarMenu = [
    { label: "Title of Thread" },
    { label: "@anasabdin" },
    { label: "Replies 200" },
  ];
  const sideBarMenu1 = [
    { label: "Title of Thread" },
    { label: "@anasabdin" },
    { label: "Replies 200" },
  ];
  const sideBarMenu2 = [
    { label: "Title of Thread" },
    { label: "@anasabdin" },
    { label: "Replies 200" },
  ];
  const sideBarMenu3 = [
    { label: "Title of Thread" },
    { label: "@anasabdin" },
    { label: "Replies 200" },
  ];
  const sideBarMenu4 = [
    { label: "Title of Thread" },
    { label: "@anasabdin" },
    { label: "Replies 200" },
  ];
  const sideBarMenu5 = [
    { label: "Title of Thread" },
    { label: "@anasabdin" },
    { label: "Replies 200" },
  ];
  const sideBarMenu6 = [
    { label: "Title of Thread" },
    { label: "@anasabdin" },
    { label: "Replies 200" },
  ];
  const sideBarMenu7 = [
    { label: "Title of Thread" },
    { label: "@anasabdin" },
    { label: "Replies 200" },
  ];
  const sideBarMenu8 = [
    { label: "Title of Thread" },
    { label: "@anasabdin" },
    { label: "Replies 200" },
  ];
  const sideBarMenu9 = [
    { label: "Title of Thread" },
    { label: "@anasabdin" },
    { label: "Replies 200" },
  ];
  const sideBarMenu10 = [
    { label: "Title of Thread" },
    { label: "@anasabdin" },
    { label: "Replies 200" },
  ];

  return (
    <>
      {/* <Header2 className="flex md:flex-col flex-row md:gap-5 items-center justify-center mb-0.5 md:px-5 w-full" /> */}

      <div className="bg-gray-100 flex sm:justify-center md:flex-col md:items-center flex-row-reverse font-prompt mx-auto relative w-full overflow-hidden">
        <div className="flex flex-col items-center justify-end sm:justify-center ml-auto mr-[60px] mt-[-16px] md:px-5 w-[69%] sm:w-[80%] sm:mx-auto z-[1]">
          <div className="bg-gray-100 flex flex-col items-center justify-start pl-[19px] py-[19px] w-full">
            <div className="flex flex-col gap-[9px] items-start justify-start mb-0.5 mt-[52px] w-full">
              <Text
                className="sm:text-2xl md:text-[36px] text-[30px] text-black-900"
                size="txtPromptBold40"
              >
                Entrepreneurship
              </Text>
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-row items-center justify-between w-[11%]">
                  <Button className="bg-black-900 cursor-pointer font-medium h-[31px] leading-[normal] py-1 md:px-3 sm:flex sm:items-center sm:justify-center rounded-[5px] text-[14.55px] text-center text-teal-A400 w-[31px] sm:w-[27px]">
                    1
                  </Button>
                  <Img
                    className="h-0.5"
                    src="images/img_frame141.svg"
                    alt="frame141"
                  />
                  <Text
                    className="text-[12.47px] text-teal-100"
                    size="txtPromptMedium1247"
                  >
                    30
                  </Text>
                  <Button className="border border-solid border-teal-A400 flex h-[31px] sm:px-3 items-center justify-center p-2.5 rounded-[5px] w-[31px]">
                    <h1 className="text-teal-300">
                      <BiSolidRightArrow />
                    </h1>
                  </Button>
                </div>
                <div className="flex flex-row gap-5 sm:gap-2 items-center justify-between">
                  <Link to="/message">
                    <Text
                      className="text-teal-A400 text-[18px] sm:text-[15px]"
                      size="txtPromptBold20"
                    >
                      New post
                    </Text>
                  </Link>
                  <Img
                    className="h-[16px] w-[16px] sm:h-[14px] sm:w-[14px]"
                    src="images/img_edit.svg"
                    alt="edit"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-1 w-full">
            <ForumCol className="bg-white-A700_cc flex flex-col items-start justify-start max-w-[1039px] py-2.5 rounded-[10px] w-full" />
          </div>
        </div>
        <Sidebar className="!sticky !w-[333px] md:w-full bg-gray-100 flex h-screen justify-start mx-[20px] mt-[-16px] overflow-auto md:px-5 top-[0] z-[1]">
          <div className="bg-gray-100 flex flex-col items-center justify-end py-[38px] w-full"></div>
          <div className="bg-white-A700_cc flex flex-col gap-[26px] items-start justify-start mt-[43px] p-5 rounded-[10px] w-[333px]">
            <div className="flex flex-row gap-1 items-center justify-between w-[292px]">
              <Text
                className="text-base text-teal-A400 w-auto"
                size="txtPromptSemiBold16"
              >
                FORUM
              </Text>
              <Img
                className="h-2.5"
                src="images/img_arrowup_blue_gray_900_01.svg"
                alt="arrowup_One"
              />
            </div>
            <Link
              to="/education"
              className="text-base text-black-900 w-auto font-semibold"
            >
              Education
            </Link>
            <Button className="bg-teal-A400 cursor-pointer font-semibold leading-[normal] py-[9px] rounded-[20px] text-base text-black-900 text-center w-[292px]">
              Entrepreneurship
            </Button>
            <Link
              to="/environment"
              className="text-base text-black-900 w-auto font-semibold"
              size="txtPromptSemiBold16Black900"
            >
              Environment
            </Link>
          </div>
          <div className="h-[51px] md:h-[86px] mt-9 relative w-full">
            <div className="absolute bg-gray-100 h-[50px] inset-[0] justify-center m-auto w-full"></div>
            <Text
              className="absolute left-[0] text-black-900 text-xl top-[0]"
              size="txtPromptBold20Black900"
            >
              New Posts
            </Text>
          </div>
          <Button className="bg-blue_gray-100 cursor-pointer font-semibold h-[46px] leading-[normal] ml-5 md:ml-[0] mr-[266px] mt-7 py-[7px] rounded-[10px] text-black-900 text-center text-xl w-[46px]">
            P
          </Button>
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                "flex-direction": "column",
                color: "#afabab",
                "font-weight": 500,
                "font-size": "14px",
                "padding-left": "109px",
                "padding-right": "109px",
                [`&:hover, &.ps-active`]: {
                  color: "#000000",
                  "font-weight": "600 !important",
                },
              },
            }}
            className="flex flex-col items-center justify-start mb-[15px] pb-[19px] md:pr-10 sm:pr-5 pr-[60px] w-full"
          >
            <div className="flex flex-col gap-[1.55px] items-center justify-start w-full">
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-gray-500_02 text-sm"
                size="txtPromptMedium14"
              >
                Education
              </Text>
              <Text
                className="text-gray-500_02 text-sm"
                size="txtPromptMedium14"
              >
                Views 2k
              </Text>
            </div>
            <Line className="bg-teal-100 h-px mt-3.5 w-full" />
            <div className="flex flex-col gap-[1.55px] items-center justify-start mt-[9px] w-full">
              {sideBarMenu1?.map((menu, i) => (
                <MenuItem key={`sideBarMenu1Item${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-gray-500_02 text-sm"
                size="txtPromptMedium14"
              >
                Education
              </Text>
              <Text
                className="text-gray-500_02 text-sm"
                size="txtPromptMedium14"
              >
                Views 2k
              </Text>
            </div>
            <Button className="bg-teal-A400 cursor-pointer font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl">
              M
            </Button>
            <Line className="bg-teal-100_01 h-px mt-3.5 w-full" />
            <div className="flex flex-col gap-[1.55px] items-center justify-start mt-[9px] w-full">
              {sideBarMenu2?.map((menu, i) => (
                <MenuItem key={`sideBarMenu2Item${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-gray-500_02 text-sm"
                size="txtPromptMedium14"
              >
                Education
              </Text>
              <Text
                className="text-gray-500_02 text-sm"
                size="txtPromptMedium14"
              >
                Views 2k
              </Text>
            </div>
            <Button className="bg-blue_gray-400 cursor-pointer font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl">
              L
            </Button>
            <Line className="bg-teal-100 h-px mt-3.5 w-full" />
            <div className="flex flex-col gap-[1.55px] items-center justify-start mt-[9px] w-full">
              {sideBarMenu3?.map((menu, i) => (
                <MenuItem key={`sideBarMenu3Item${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-gray-500_02 text-sm"
                size="txtPromptMedium14"
              >
                Education
              </Text>
              <Text
                className="text-gray-500_02 text-sm"
                size="txtPromptMedium14"
              >
                Views 2k
              </Text>
            </div>
            <Button className="bg-deep_purple-A200 cursor-pointer font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl">
              O
            </Button>
            <Line className="bg-teal-100 h-px mt-3.5 w-full" />
            <div className="flex flex-col gap-[1.55px] items-center justify-start mt-[9px] w-full">
              {sideBarMenu4?.map((menu, i) => (
                <MenuItem key={`sideBarMenu4Item${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-gray-500_02 text-sm"
                size="txtPromptMedium14"
              >
                Education
              </Text>
              <Text
                className="text-gray-500_02 text-sm"
                size="txtPromptMedium14"
              >
                Views 2k
              </Text>
            </div>
            <Button className="bg-blue_gray-100 cursor-pointer font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-black-900 text-center text-xl">
              M
            </Button>
            <Line className="bg-teal-100 h-px mt-3.5 w-full" />
            <div className="flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full">
              {sideBarMenu5?.map((menu, i) => (
                <MenuItem key={`sideBarMenu5Item${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
            <Button className="bg-blue_gray-400 cursor-pointer font-semibold leading-[normal] min-w-[333px] py-2 rounded-[10px] text-center text-white-A700 text-xl">
              T
            </Button>
            <Line className="bg-teal-100 h-px mt-[34px] w-full" />
            <div className="flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full">
              {sideBarMenu6?.map((menu, i) => (
                <MenuItem key={`sideBarMenu6Item${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
            <Button className="bg-blue_gray-100 cursor-pointer font-semibold leading-[normal] min-w-[333px] py-2 rounded-[10px] text-center text-white-A700 text-xl">
              M
            </Button>
            <Line className="bg-teal-100 h-px mt-[34px] w-full" />
            <div className="flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full">
              {sideBarMenu7?.map((menu, i) => (
                <MenuItem key={`sideBarMenu7Item${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
            <Button className="bg-pink-A200 cursor-pointer font-semibold leading-[normal] min-w-[333px] py-2 rounded-[10px] text-center text-white-A700 text-xl">
              B
            </Button>
            <Line className="bg-teal-100 h-px mt-[34px] w-full" />
            <div className="flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full">
              {sideBarMenu8?.map((menu, i) => (
                <MenuItem key={`sideBarMenu8Item${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
            <Button className="bg-blue_gray-100 cursor-pointer font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl">
              H
            </Button>
            <Line className="bg-teal-100 h-px mt-[35px] w-full" />
            <div className="flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full">
              {sideBarMenu9?.map((menu, i) => (
                <MenuItem key={`sideBarMenu9Item${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
            <Button className="bg-yellow-900 cursor-pointer font-semibold leading-[normal] min-w-[333px] py-2 rounded-[10px] text-center text-white-A700 text-xl">
              C
            </Button>
            <Line className="bg-teal-100 h-px mt-[34px] w-full" />
            <div className="flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full">
              {sideBarMenu10?.map((menu, i) => (
                <MenuItem key={`sideBarMenu10Item${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
            <Button className="bg-blue_gray-100 cursor-pointer font-semibold leading-[normal] min-w-[333px] py-2 rounded-[10px] text-center text-white-A700 text-xl">
              S
            </Button>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};

export default EntreForum;
