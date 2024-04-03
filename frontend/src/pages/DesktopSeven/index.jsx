import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import DesktopFourColumnp from "components/ForumColumn/forumCol";
import Header2 from "components/Header2/navbar";

import { CloseSVG } from "../../assets/images";

const DesktopSevenPage = () => {
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
  const sideBarMenu11 = [
    { label: "Title of Thread" },
    { label: "@anasabdin" },
    { label: "Replies 200" },
  ];
  const sideBarMenu12 = [
    { label: "Title of Thread" },
    { label: "@anasabdin" },
    { label: "Replies 200" },
  ];
  const sideBarMenu13 = [
    { label: "Title of Thread" },
    { label: "@anasabdin" },
    { label: "Replies 200" },
  ];
  const sideBarMenu14 = [
    { label: "Title of Thread" },
    { label: "@anasabdin" },
    { label: "Replies 200" },
  ];
  const sideBarMenu15 = [
    { label: "Title of Thread" },
    { label: "@anasabdin" },
    { label: "Replies 200" },
  ];

  return (
    <>
      <Header2 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
      <div className="bg-gray-100 flex font-prompt h-[982px] justify-end mx-auto relative w-full">
        <div className="flex flex-col mt-auto mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start ml-auto mr-[60px] mt-[-16px] w-[69%] z-[1]">
            <div className="bg-gray-100 flex flex-col items-center justify-end py-[13px] w-full">
              <div className="flex flex-col items-center justify-start mt-[82px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[81%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-teal-A400 sm:text-xl"
                      size="txtPromptSemiBold24"
                    >
                      Recent
                    </Text>
                    <Text
                      className="sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtPromptSemiBold24Black900"
                    >
                      My Threads
                    </Text>
                    <Text
                      className="mb-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtPromptSemiBold24Black900"
                    >
                      Unanswered Threads
                    </Text>
                  </div>
                  <Img
                    className="h-1"
                    src="images/img_group94.svg"
                    alt="groupNinetyFour"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <DesktopFourColumnp className="bg-white-A700_cc flex flex-col items-start max-w-[1039px] py-2.5 rounded-[10px] w-full" />
            </div>
          </div>
          <Sidebar className="!sticky !w-[333px] bg-gray-100 flex h-screen md:hidden justify-start ml-[60px] mt-[-NaNpx] overflow-auto top-[0] z-[1]">
            <div className="bg-gray-100 flex flex-col items-start justify-start mb-[1549px] w-full">
              <Text
                className="mb-[11px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPromptBold24"
              >
                Top Trending
              </Text>
            </div>
            <Button className="bg-blue_gray-100 cursor-pointer font-semibold h-[46px] leading-[normal] mb-[1475px] ml-5 mr-[266px] mt-[79px] py-[7px] rounded-[10px] text-black-900 text-center text-xl w-[46px]">
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
              className="flex flex-col items-center justify-start mb-[15px] mt-[74px] pb-[19px] md:pr-10 sm:pr-5 pr-[60px] w-full"
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
              <div className="flex flex-col gap-[1.55px] items-center justify-start mt-[9px] w-full">
                {sideBarMenu5?.map((menu, i) => (
                  <MenuItem key={`sideBarMenu5Item${i}`} {...menu}>
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
                T
              </Button>
              <Line className="bg-teal-100 h-px mt-3.5 w-full" />
              <div className="flex flex-col gap-[1.55px] items-center justify-start mt-[9px] w-full">
                {sideBarMenu6?.map((menu, i) => (
                  <MenuItem key={`sideBarMenu6Item${i}`} {...menu}>
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
              <Button className="bg-blue_gray-100 cursor-pointer font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl">
                M
              </Button>
              <Line className="bg-teal-100 h-px mt-3.5 w-full" />
              <div className="flex flex-col gap-[0.48px] items-center justify-start mt-[9px] w-full">
                {sideBarMenu7?.map((menu, i) => (
                  <MenuItem key={`sideBarMenu7Item${i}`} {...menu}>
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
              <Button className="bg-pink-A200 cursor-pointer font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl">
                B
              </Button>
              <Line className="bg-teal-100 h-px mt-[15px] w-full" />
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
              <Line className="bg-teal-100 h-px mt-[34px] w-full" />
              <div className="flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full">
                {sideBarMenu11?.map((menu, i) => (
                  <MenuItem key={`sideBarMenu11Item${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
              <Button className="bg-blue_gray-100 cursor-pointer font-semibold leading-[normal] min-w-[333px] py-2 rounded-[10px] text-center text-white-A700 text-xl">
                S
              </Button>
              <Line className="bg-teal-100 h-px mt-[34px] w-full" />
              <div className="flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full">
                {sideBarMenu12?.map((menu, i) => (
                  <MenuItem key={`sideBarMenu12Item${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
              <Button className="bg-blue_gray-100 cursor-pointer font-semibold leading-[normal] min-w-[333px] py-2 rounded-[10px] text-center text-white-A700 text-xl">
                S
              </Button>
              <Line className="bg-teal-100 h-px mt-[34px] w-full" />
              <div className="flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full">
                {sideBarMenu13?.map((menu, i) => (
                  <MenuItem key={`sideBarMenu13Item${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
              <Button className="bg-blue_gray-100 cursor-pointer font-semibold leading-[normal] min-w-[333px] py-2 rounded-[10px] text-center text-white-A700 text-xl">
                S
              </Button>
              <Line className="bg-teal-100 h-px mt-[34px] w-full" />
              <div className="flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full">
                {sideBarMenu14?.map((menu, i) => (
                  <MenuItem key={`sideBarMenu14Item${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
              <Button className="bg-blue_gray-100 cursor-pointer font-semibold leading-[normal] min-w-[333px] py-2 rounded-[10px] text-center text-white-A700 text-xl">
                S
              </Button>
              <Line className="bg-teal-100 h-px mt-[34px] w-full" />
              <div className="flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full">
                {sideBarMenu15?.map((menu, i) => (
                  <MenuItem key={`sideBarMenu15Item${i}`} {...menu}>
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
        <div className="absolute bg-gray-100 h-[99px] left-[5%] md:px-5 top-[15%] w-[26%]"></div>
      </div>
    </>
  );
};

export default DesktopSevenPage;
