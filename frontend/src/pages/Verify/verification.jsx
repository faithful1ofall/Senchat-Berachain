import React from "react";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const Verification = () => {
  const [framesixvalue, setFramesixvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-prompt gap-11 justify-start mx-auto pb-[83px] w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-white-A700 flex flex-col items-center justify-center md:px-5 w-full" />
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[81px] w-full">
          <div className="bg-white-A700 flex flex-col gap-[53px] items-center justify-start p-[131px] md:px-5 rounded-[70px] w-[59%] md:w-full">
            <div className="flex flex-col gap-[5px] items-center justify-start w-[10%] md:w-full">
              <Img
                className="h-[43px] md:h-auto object-cover w-full"
                src="images/img_image3.png"
                alt="imageThree_One"
              />
              <Text
                className="text-[7.39px] text-teal-A400"
                size="txtPromptSemiBold739"
              >
                SENCHAT
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mb-[51px] pb-0.5 pr-0.5 w-3/4 md:w-full">
              <div className="flex flex-col gap-2.5 h-[101px] md:h-auto items-center justify-start w-auto sm:w-full">
                <Text
                  className="sm:text-[32.4px] md:text-[34.4px] text-[36.4px] text-black-900 w-auto"
                  size="txtPromptSemiBold364"
                >
                  Verify Email
                </Text>
                <Text
                  className="text-[18.2px] text-center text-gray-600 tracking-[0.18px] w-auto"
                  size="txtPromptRegular182"
                >
                  <span className="text-gray-600 font-prompt font-normal">
                    We sent a 4-digit code to{" "}
                  </span>
                  <span className="text-black-900 font-prompt font-normal">
                    a
                  </span>
                  <span className="text-black-900 font-prompt font-medium">
                    md@gmail.com
                  </span>
                </Text>
              </div>
              <div className="flex flex-row gap-[12.48px] items-start justify-start mt-[37px] w-auto">
                <Text
                  className="bg-gray-200 flex h-[62px] items-center justify-center sm:px-5 rounded-[50%] sm:text-[19.77px] md:text-[21.77px] text-[23.77px] text-blue_gray-100_01 text-center w-[62px]"
                  size="txtPromptExtraBold2377"
                >
                  *
                </Text>
                <Text
                  className="bg-gray-200 flex h-[62px] items-center justify-center sm:px-5 rounded-[50%] sm:text-[19.77px] md:text-[21.77px] text-[23.77px] text-blue_gray-100_01 text-center w-[62px]"
                  size="txtPromptExtraBold2377"
                >
                  *
                </Text>
                <Text
                  className="bg-gray-200 flex h-[62px] items-center justify-center sm:px-5 rounded-[50%] sm:text-[19.77px] md:text-[21.77px] text-[23.77px] text-blue_gray-100_01 text-center w-[62px]"
                  size="txtPromptExtraBold2377"
                >
                  *
                </Text>
                <Text
                  className="bg-gray-200 flex h-[62px] items-center justify-center sm:px-5 rounded-[50%] sm:text-[19.77px] md:text-[21.77px] text-[23.77px] text-blue_gray-100_01 text-center w-[62px]"
                  size="txtPromptExtraBold2377"
                >
                  *
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center mb-[15px] mt-[50px] w-[389px] sm:w-full">
                <Button className="bg-teal-A400 cursor-pointer font-medium leading-[normal] min-w-[389px] sm:min-w-full py-5 rounded-[34px] text-[18.2px] text-black-900 text-center">
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;
