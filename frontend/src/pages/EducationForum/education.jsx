import React from "react";
import { Button, Img, Text } from "components";
import ForumCol from "components/ForumColumn/forumCol";
import { Link } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";
const EducationForum = () => {
  return (
    <>
      <div className="bg-gray-100 flex sm:justify-center md:flex-col md:items-center flex-row-reverse font-prompt mx-auto relative w-full overflow-hidden">
        <div className="flex flex-col items-center justify-end sm:justify-center ml-auto mr-[60px] mt-[-16px] md:px-5 w-[69%] sm:w-[80%] sm:mx-auto z-[1]">
          <div className="bg-gray-100 flex flex-col items-center justify-start pl-[19px] py-[19px] w-full">
            <div className="flex flex-col gap-[13px] items-start justify-start mb-0.5 mt-12 w-full">
              
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="sm:text-2xl md:text-[36px] text-[30px] text-black-900"
                size="txtPromptBold40"
              >
                Feeds
              </Text>
                <div className="flex flex-row gap-5 sm:gap-2 items-center justify-between">
                  <Link to="/message">
                    <Text
                      className="text-teal-A400 text-[18px] sm:text-[15px]"
                      size="txtPromptBold20"
                    >
                      New post
                    </Text>
                    </Link>
                    <Link to="/message">
                  <Img
                    className="h-[16px] w-[16px] sm:h-[14px] sm:w-[14px]"
                    src="images/img_edit.svg"
                    alt="edit"
                  />
                  </Link>
                </div>
              </div>
              
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <ForumCol className="bg-white-A700_cc flex flex-col items-start justify-start max-w-[1039px] py-2.5 rounded-[10px] w-full" />
          </div>
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
        </div>
      </div>
    </>
  );
};

export default EducationForum;
