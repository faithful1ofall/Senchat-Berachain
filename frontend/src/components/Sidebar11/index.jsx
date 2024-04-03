import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Line, Text } from "components";

const Sidebar11 = (props) => {
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
      <Sidebar className={props.className}>
        <div className="bg-gray-100 h-[82px] w-full"></div>
        <div className="md:h-[50px] h-[51px] md:ml-[0] ml-[59px] relative w-[85%]">
          <div className="absolute bg-gray-100 h-[50px] inset-[0] justify-center m-auto w-full"></div>
          <Text
            className="absolute left-[0] text-black-900 text-xl top-[0]"
            size="txtPromptBold20Black900"
          >
            New Posts
          </Text>
        </div>
        <Button className="bg-blue_gray-100 cursor-pointer font-prompt font-semibold h-[46px] leading-[normal] md:ml-[0] ml-[79px] mr-[266px] mt-7 py-[7px] rounded-[10px] text-black-900 text-center text-xl w-[46px]">
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
              "font-family": "Prompt",
              "padding-left": "109px",
              "padding-right": "109px",
              [`&:hover, &.ps-active`]: {
                color: "#000000",
                "font-weight": "600 !important",
              },
            },
          }}
          className="flex flex-col items-center justify-start mb-[15px] pb-[19px] md:pr-10 sm:pr-5 pr-[60px] w-[85%]"
        >
          <div className="flex flex-col gap-[1.55px] items-center justify-start w-full">
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <Text className="text-gray-500_02 text-sm" size="txtPromptMedium14">
              Education
            </Text>
            <Text className="text-gray-500_02 text-sm" size="txtPromptMedium14">
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
            <Text className="text-gray-500_02 text-sm" size="txtPromptMedium14">
              Education
            </Text>
            <Text className="text-gray-500_02 text-sm" size="txtPromptMedium14">
              Views 2k
            </Text>
          </div>
          <Button className="bg-teal-A400 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl">
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
            <Text className="text-gray-500_02 text-sm" size="txtPromptMedium14">
              Education
            </Text>
            <Text className="text-gray-500_02 text-sm" size="txtPromptMedium14">
              Views 2k
            </Text>
          </div>
          <Button className="bg-blue_gray-400 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl">
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
            <Text className="text-gray-500_02 text-sm" size="txtPromptMedium14">
              Education
            </Text>
            <Text className="text-gray-500_02 text-sm" size="txtPromptMedium14">
              Views 2k
            </Text>
          </div>
          <Button className="bg-deep_purple-A200 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl">
            O
          </Button>
          <Line className="bg-teal-100 h-px mt-3.5 w-full" />
          <div className="flex flex-col gap-[1.56px] items-center justify-start mt-[9px] w-full">
            {sideBarMenu4?.map((menu, i) => (
              <MenuItem key={`sideBarMenu4Item${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <Text className="text-gray-500_02 text-sm" size="txtPromptMedium14">
              Education
            </Text>
            <Text className="text-gray-500_02 text-sm" size="txtPromptMedium14">
              Views 2k
            </Text>
          </div>
          <Button className="bg-blue_gray-100 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-black-900 text-center text-xl">
            M
          </Button>
          <Line className="bg-teal-100 h-px mt-3.5 w-full" />
          <div className="flex flex-col gap-[1.56px] items-center justify-start mt-[9px] w-full">
            {sideBarMenu5?.map((menu, i) => (
              <MenuItem key={`sideBarMenu5Item${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <Text className="text-gray-500_02 text-sm" size="txtPromptMedium14">
              Education
            </Text>
            <Text className="text-gray-500_02 text-sm" size="txtPromptMedium14">
              Views 2k
            </Text>
          </div>
          <Button className="bg-blue_gray-400 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl">
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
            <Text className="text-gray-500_02 text-sm" size="txtPromptMedium14">
              Education
            </Text>
            <Text className="text-gray-500_02 text-sm" size="txtPromptMedium14">
              Views 2k
            </Text>
          </div>
          <Button className="bg-blue_gray-100 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl">
            M
          </Button>
          <Line className="bg-teal-100 h-px mt-3.5 w-full" />
          <div className="flex flex-col gap-[1.55px] items-center justify-start mt-[9px] w-full">
            {sideBarMenu7?.map((menu, i) => (
              <MenuItem key={`sideBarMenu7Item${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <Text className="text-gray-500_02 text-sm" size="txtPromptMedium14">
              Education
            </Text>
            <Text className="text-gray-500_02 text-sm" size="txtPromptMedium14">
              Views 2k
            </Text>
          </div>
          <Button className="bg-pink-A200 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl">
            B
          </Button>
          <Line className="bg-teal-100 h-px mt-3.5 w-full" />
          <div className="flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full">
            {sideBarMenu8?.map((menu, i) => (
              <MenuItem key={`sideBarMenu8Item${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </div>
          <Button className="bg-blue_gray-100 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl">
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
          <Button className="bg-yellow-900 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-2 rounded-[10px] text-center text-white-A700 text-xl">
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
          <Button className="bg-blue_gray-100 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-2 rounded-[10px] text-center text-white-A700 text-xl">
            S
          </Button>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar11.defaultProps = {};

export default Sidebar11;
