import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import DesktopFourColumnp from "components/ForumColumn/forumCol";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const DesktopEightPage = () => {
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
      <div className="bg-gray-100 flex flex-col font-prompt items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="bg-black-900 flex md:flex-col flex-row md:gap-5 items-center justify-start p-1.5 w-full">
            <div className="flex md:flex-1 flex-col gap-[5px] items-center justify-start md:ml-[0] ml-[53px] md:px-5 w-[4%] md:w-full">
              <Img
                className="h-[43px] md:h-auto object-cover w-full"
                src="images/img_image3.png"
                alt="imageThree"
              />
              <Text
                className="text-[7.39px] text-teal-A400"
                size="txtPromptSemiBold739"
              >
                SENCHAT
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row items-center justify-center ml-11 md:ml-[0] pr-[27px] md:px-5 w-[21%] md:w-full">
              <Text
                className="text-white-A700 text-xl"
                size="txtPromptBold20WhiteA700"
              >
                Forum
              </Text>
              <Text
                className="ml-[52px] text-teal-A400 text-xl"
                size="txtPromptBold20"
              >
                Threads
              </Text>
              <Text
                className="ml-[51px] text-white-A700 text-xl"
                size="txtPromptBold20WhiteA700"
              >
                NFT
              </Text>
            </div>
            <Input
              name="frameSix"
              placeholder="Search...."
              value={framesixvalue}
              onChange={(e) => setFramesixvalue(e)}
              className="leading-[normal] p-0 placeholder:text-gray-700_a5 sm:px-5 text-gray-700_a5 text-left text-xs w-full"
              wrapClassName="bg-gray-100 flex md:flex-1 md:ml-[0] ml-[60px] md:mt-0 my-[5px] pl-[21px] pr-[35px] py-[15px] rounded-[25px] w-[31%] md:w-full"
              prefix={
                <div className="h-[17px] mr-[5px] w-[17px] bg-gray-500_01 my-px">
                  <Img
                    className="cursor-pointer h-[17px] my-auto"
                    src="images/img_search.svg"
                    alt="search"
                  />
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
            ></Input>
            <div className="flex md:flex-1 flex-row gap-[25px] items-start justify-center md:ml-[0] ml-[181px] md:px-5 w-[13%] md:w-full">
              <Text
                className="text-white-A700 text-xl"
                size="txtPromptBold20WhiteA700"
              >
                New post
              </Text>
              <Text
                className="text-base text-white-A700"
                size="txtPromptBold16"
              >
                username
              </Text>
            </div>
            <Img
              className="h-[34px] md:h-auto md:ml-[0] ml-[19px] rounded-[50%] w-[34px]"
              src="images/img_ellipse42.png"
              alt="ellipseFortyTwo"
            />
            <Img
              className="h-[23px] ml-5 md:ml-[0]"
              src="images/img_notification.svg"
              alt="notification"
            />
          </div>
          <div className="flex md:flex-col flex-row gap-5 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar1 className="!sticky !w-[392px] bg-gray-100 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="bg-gray-100 flex flex-col items-center justify-end py-[13px] w-full">
                <div className="flex flex-col items-center justify-start mt-[82px] w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[81%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtPromptSemiBold24Black900"
                      >
                        Recent
                      </Text>
                      <Text
                        className="sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-teal-A400 sm:text-xl"
                        size="txtPromptSemiBold24"
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
                      alt="groupNinetyFive"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <DesktopFourColumnp
                  className="bg-white-A700_cc flex flex-col items-start max-w-[1039px] py-2.5 rounded-[10px] w-full"
                  time="Today at 3:00pm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopEightPage;
