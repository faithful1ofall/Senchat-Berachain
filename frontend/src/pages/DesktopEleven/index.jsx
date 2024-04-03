import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import DesktopElevenDesktopthread from "components/DesktopElevenDesktopthread";
import DesktopTenDesktopthread from "components/ThreadColumn/threads";
import Sidebar11 from "components/Sidebar11";
import Header2 from "components/Header2/navbar";
import { Link } from "react-router-dom";

import { CloseSVG } from "../../assets/images";

const DesktopElevenPage = () => {
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
      <Header2 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />

      <div className="bg-gray-100 flex flex-col font-prompt items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="flex md:flex-col flex-row gap-[22px] items-start justify-between w-full">
            <Sidebar11 className="!sticky !w-[392px] bg-gray-100 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
            <div className="flex flex-1 flex-col gap-2.5 items-start justify-start pb-[1389px] md:px-5 w-full">
              <div className="bg-gray-100 flex flex-col items-start justify-end pr-[17px] py-[17px] w-full">
                <div className="flex flex-col items-center justify-start mt-[50px] w-[97%] md:w-full">
                  <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
                    <div className="flex flex-col gap-[5px] items-center justify-start">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                        size="txtPromptBold40"
                      >
                        Title of Thread
                      </Text>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Img
                          className="h-5 mt-0.5 w-5"
                          src="images/img_user.svg"
                          alt="user"
                        />
                        <Text
                          className="text-[16.8px] text-blue_gray-400"
                          size="txtPromptMedium168"
                        >
                          @anasabdin
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                        <Text
                          className="text-[16.8px] text-blue_gray-400"
                          size="txtPromptMedium168"
                        >
                          Today at 9pm
                        </Text>
                      </div>
                    </div>
                    <Link
                      to="/desktoptwelve"
                      className="bg-teal-A400 cursor-pointer flex items-center justify-center mb-[5px] min-w-[108px] sm:mt-0 mt-[31px] pl-[15px] pr-[11px] py-3.5 rounded-[7px]"
                      leftIcon={
                        <div className="mt-px mb-[5px] mr-[7px] bg-white-A700">
                          <Img src="images/img_reply.svg" alt="reply" />
                        </div>
                      }
                    >
                      <div className="font-medium leading-[normal] text-left text-lg text-white-A700">
                        Reply
                      </div>
                    </Link>
                  </div>
                  <div className="h-7 md:h-[31px] mt-[3px] w-full">
                    <div className="flex px-5 gap-8 sm:gap-[0.6rem] border border-solid border-teal-100 mt-auto mx-auto w-full md:h-7 h-[26px] m-auto">
                      {/* <div className="border border-solid border-teal-100 h-7 mt-auto mx-auto w-full"></div> */}
                      <div className="flex items-center">
                        <Text
                          className="text-[16.8px] sm:text-[14px] text-blue_gray-400"
                          size="txtPromptMedium168"
                        >
                          Forum
                        </Text>
                        <Img
                          className="h-5 sm:h-4"
                          src="images/img_arrowright.svg"
                          alt="arrowright"
                        />
                      </div>
                      <div className="flex items-center">
                        <Text
                          className="text-[16.8px] sm:text-[14px] text-blue_gray-400"
                          size="txtPromptMedium168"
                        >
                          Education
                        </Text>
                        <Img
                          className="h-5 sm:h-4"
                          src="images/img_arrowright.svg"
                          alt="arrowright_One"
                        />
                      </div>
                      <div className="flex items-center flex-1">
                        <Text
                          className="text-[16.8px] sm:text-[14px] text-blue_gray-400"
                          size="txtPromptMedium168"
                        >
                          Thread topic
                        </Text>
                        <Img
                          className="h-5 sm:h-4"
                          src="images/img_arrowright.svg"
                          alt="arrowright_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[95%] md:w-full">
                <List
                  className="flex flex-col gap-5 h-[1973px] items-start max-w-[1039px] w-full"
                  orientation="vertical"
                >
                  <DesktopElevenDesktopthread className="flex flex-1 flex-col items-center justify-start my-0 w-full" />
                  <DesktopTenDesktopthread className="flex flex-1 flex-col items-center justify-start my-0 w-full" />
                  <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                      <div className="bg-gray-200 flex md:flex-1 flex-col items-center justify-center p-[50px] md:px-10 sm:px-5 w-[23%] md:w-full">
                        <Button className="bg-gray-600_01 cursor-pointer font-semibold h-[73px] leading-[normal] mt-[25px] py-[21px] rounded-[5px] text-center text-white-A700 text-xl w-[73px]">
                          C
                        </Button>
                        <Text
                          className="mt-3 text-black-900 text-center text-xl"
                          size="txtPromptMedium20"
                        >
                          @gygretadin
                        </Text>
                        <Text
                          className="mb-[105px] text-center text-teal-A400 text-xl"
                          size="txtPromptSemiBold20"
                        >
                          member
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[78%] md:w-full">
                        <div className="bg-black-900 flex flex-row sm:gap-10 items-center justify-between p-5 w-full">
                          <Text
                            className="text-[17px] text-teal-A400"
                            size="txtPromptMedium17TealA400"
                          >
                            Today at 9pm
                          </Text>
                          <div className="flex flex-row items-start justify-center mr-4">
                            <Img
                              className="h-[22px] mt-[3px]"
                              src="images/img_search_teal_a400.svg"
                              alt="search"
                            />
                            <Img
                              className="h-[22px] ml-[23px] mt-1"
                              src="images/img_bookmark.svg"
                              alt="bookmark"
                            />
                            <Text
                              className="ml-5 sm:text-[17px] md:text-[19px] text-[21px] text-teal-A400"
                              size="txtPromptMedium21"
                            >
                              #1
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-col gap-6 items-start justify-start max-w-[808px] p-5 w-full">
                          <Text
                            className="max-w-[761px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtPromptRegular24"
                          >
                            Lorem ipsum dolor sit amet consectetur. Platea nibh
                            condimentum quisque ultricies ut. Maecenas non
                            dictum euismod proin morbi netus tellus. Enim
                            interdum massa morbi tellus pretium volutpat. Vitae
                            sed ornare sit ultricies pellentesque in netus mi
                            nec.{" "}
                          </Text>
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[51%] md:w-full">
                            <Button
                              className="bg-black-900 cursor-pointer flex items-center justify-center min-w-[109px] px-5 py-[15px] rounded-[7px]"
                              leftIcon={
                                <div className="mr-[7px] bg-white-A700 my-[3px]">
                                  <Img
                                    src="images/img_edit_white_a700.svg"
                                    alt="edit"
                                  />
                                </div>
                              }
                            >
                              <div className="font-medium leading-[normal] text-left text-lg text-white-A700">
                                Like
                              </div>
                            </Button>
                            <Button
                              className="bg-black-900 cursor-pointer flex items-center justify-center min-w-[108px] sm:ml-[0] ml-[30px] px-3 py-[15px] rounded-[7px]"
                              leftIcon={
                                <div className="h-[21px] mr-[7px] w-[21px] bg-white-A700 my-[3px]">
                                  <Img
                                    className="h-[21px]"
                                    src="images/img_grid.svg"
                                    alt="grid"
                                  />
                                </div>
                              }
                            >
                              <div className="font-medium leading-[normal] text-left text-lg text-white-A700">
                                Quote
                              </div>
                            </Button>
                            <Link
                              to="/desktoptwelve"
                              className="bg-teal-A400 cursor-pointer flex items-center justify-center min-w-[108px] sm:ml-[0] ml-[31px] pl-[15px] pr-[11px] py-[15px] rounded-[7px]"
                              leftIcon={
                                <div className="mr-[7px] bg-white-A700 my-[3px]">
                                  <Img src="images/img_reply.svg" alt="reply" />
                                </div>
                              }
                            >
                              <div className="font-medium leading-[normal] text-left text-lg text-white-A700">
                                Reply
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopElevenPage;
