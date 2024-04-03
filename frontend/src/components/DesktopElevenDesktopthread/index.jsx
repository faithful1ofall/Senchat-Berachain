import React from "react";

import { Button, Img, Text } from "components";

const DesktopElevenDesktopthread = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
          <div className="bg-gray-200 flex md:flex-1 flex-col items-center justify-start p-10 sm:px-5 w-[23%] md:w-full">
            <Button className="bg-gray-600_01 cursor-pointer font-prompt font-semibold h-[73px] leading-[normal] mt-[35px] py-[21px] rounded-[5px] text-center text-white-A700 text-xl w-[73px]">
              {props?.b}
            </Button>
            <Text
              className="mt-[11px] text-black-900 text-xl"
              size="txtPromptMedium20"
            >
              {props?.anasabdin}
            </Text>
            <Text
              className="mb-[703px] text-teal-A400 text-xl"
              size="txtPromptSemiBold20"
            >
              {props?.seniormember}
            </Text>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[78%] md:w-full">
            <div className="bg-black-900 flex flex-row sm:gap-10 items-center justify-between p-5 w-full">
              <Text
                className="text-[17px] text-teal-A400"
                size="txtPromptMedium17TealA400"
              >
                {props?.time}
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
                  {props?.one}
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-6 h-[890px] md:h-auto items-start justify-start max-w-[808px] px-5 py-2.5 w-full">
              <Text
                className="max-w-[760px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPromptRegular24"
              >
                {props?.description}
              </Text>
              <Img
                className="h-[562px] sm:h-auto object-cover w-[760px] md:w-full"
                src="images/img_rectangle11.png"
                alt="rectangleEleven"
              />
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[51%] md:w-full">
                <Button
                  className="bg-black-900 cursor-pointer flex items-center justify-center min-w-[109px] px-5 py-[15px] rounded-[7px]"
                  leftIcon={
                    <div className="mr-[7px] bg-white-A700 my-[3px]">
                      <Img src="images/img_edit_white_a700.svg" alt="edit" />
                    </div>
                  }
                >
                  <div className="font-medium font-prompt leading-[normal] text-left text-lg text-white-A700">
                    {props?.like}
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
                  <div className="font-medium font-prompt leading-[normal] text-left text-lg text-white-A700">
                    {props?.quote}
                  </div>
                </Button>
                <Button
                  className="bg-teal-A400 cursor-pointer flex items-center justify-center min-w-[108px] sm:ml-[0] ml-[31px] pl-[15px] pr-[11px] py-[15px] rounded-[7px]"
                  leftIcon={
                    <div className="mr-[7px] bg-white-A700 my-[3px]">
                      <Img src="images/img_reply.svg" alt="reply" />
                    </div>
                  }
                >
                  <div className="font-medium font-prompt leading-[normal] text-left text-lg text-white-A700">
                    {props?.reply}
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopElevenDesktopthread.defaultProps = {
  b: "B",
  anasabdin: "@anasabdin",
  seniormember: "Senior member",
  time: "Today at 9pm",
  one: "#1",
  description:
    "Lorem ipsum dolor sit amet consectetur. Platea nibh condimentum quisque ultricies ut. Maecenas non dictum euismod proin morbi netus tellus. Enim interdum massa morbi tellus pretium volutpat. Vitae sed ornare sit ultricies pellentesque in netus mi nec. ",
  like: "Like",
  quote: "Quote",
  reply: "Reply",
};

export default DesktopElevenDesktopthread;
