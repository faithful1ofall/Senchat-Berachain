import React from "react";

import { Button, Img, Input, Text } from "components";
import DesktopSeventeenListrectangleone from "components/DesktopSeventeenListrectangleone";

import { CloseSVG } from "../../assets/images";
import Navbar from "components/Header2/navbar";

const NftBid = () => {
  const [framesixvalue, setFramesixvalue] = React.useState("");

  return (
    <>
      {/* <Navbar className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" /> */}
      <div className="bg-gray-100 flex flex-col font-prompt items-center justify-end mx-auto w-full">
        <div className="sm:h-[1125px] h-[1191px] md:h-[1439px] md:px-5 relative w-full">
          <Text
            className="absolute right-[16%] text-2xl md:text-[22px] text-black-900 sm:text-xl top-[5%]"
            size="txtPromptBold24"
          >
            Related NFTs
          </Text>
          <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[4%] w-[23%]">
            <DesktopSeventeenListrectangleone className="flex flex-col gap-[19.03px] items-start w-[333px] md:w-full" />
          </div>
          <div className="absolute bg-gray-100 h-[59px] inset-x-[0] mx-auto top-[0] w-full"></div>
          <div className="absolute flex flex-col items-center justify-start left-[4%] pb-[124px] top-[5%] w-[70%]">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="gap-[45px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start w-[94%] md:w-full">
                <Button className="bg-teal-A400 cursor-pointer font-semibold h-[60px] leading-[normal] py-[15px] rounded-[30px] text-[19.27px] text-black-900 text-center w-full">
                  All
                </Button>
                <Button className="border-2 border-blue_gray-400 border-solid cursor-pointer font-semibold h-[60px] leading-[normal] py-[15px] rounded-[30px] text-[19.27px] text-blue_gray-400 text-center w-full">
                  Paintings
                </Button>
                <Button className="border-2 border-blue_gray-400 border-solid cursor-pointer font-semibold h-[60px] leading-[normal] py-[15px] rounded-[30px] text-[19.27px] text-blue_gray-400 text-center w-full">
                  3D Animations
                </Button>
                <Button className="border-2 border-blue_gray-400 border-solid cursor-pointer font-semibold h-[60px] leading-[normal] py-[15px] rounded-[30px] text-[19.27px] text-blue_gray-400 text-center w-full">
                  Illustration
                </Button>
              </div>
              <Text
                className="ml-1 md:ml-[0] mt-[31px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtPromptBold40"
              >
                Power of friendship
              </Text>
              <div className="flex md:flex-col flex-row gap-[19px] items-center justify-between ml-1 md:ml-[0] mt-7 w-full">
                <Img
                  className="h-[506px] md:h-auto object-cover rounded-[38px]"
                  src="images/img_rectangle1_506x451.png"
                  alt="rectangleOne"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start pt-1 px-1 w-[38%] md:w-full">
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[21px] w-[65%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-teal-A400"
                          size="txtPromptMedium30"
                        >
                          $1,843.64
                        </Text>
                        <div className="flex flex-row gap-[9px] items-center justify-start w-[98%] md:w-full">
                          <Img
                            className="h-[22px]"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                          <Text
                            className="sm:text-[21.5px] md:text-[23.5px] text-[25.5px] text-black-900"
                            size="txtPromptSemiBold255"
                          >
                            1.02 ETH
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700_cc brightness-75 flex flex-col gap-[16.34px] items-start justify-start mt-5 p-[16.34px] rounded-[32px] w-[571px] sm:w-full z-10 ">
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-[542px] sm:w-full">
                      <Text
                        className="sm:text-[18.88px] md:text-[20.88px] text-[22.88px] text-teal-100 w-auto"
                        size="txtPromptMedium2288"
                      >
                        Type
                      </Text>
                      <Text
                        className="sm:text-[18.88px] md:text-[20.88px] text-[22.88px] text-black-900 w-auto"
                        size="txtPromptSemiBold2288"
                      >
                        NFT Collectibles
                      </Text>
                    </div>
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-[542px] sm:w-full">
                      <Text
                        className="sm:text-[18.88px] md:text-[20.88px] text-[22.88px] text-teal-100 w-auto"
                        size="txtPromptMedium2288"
                      >
                        Name
                      </Text>
                      <Text
                        className="sm:text-[18.88px] md:text-[20.88px] text-[22.88px] text-black-900 w-auto"
                        size="txtPromptSemiBold2288"
                      >
                        Power of Friendship
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700_cc brightness-75 flex flex-col gap-[16.34px] items-start justify-start mt-5 p-[16.34px] rounded-[32px] w-[571px] sm:w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-[542px] sm:w-full">
                      <Text
                        className="sm:text-[18.88px] md:text-[20.88px] text-[22.88px] text-teal-100 w-auto"
                        size="txtPromptMedium2288"
                      >
                        Asset
                      </Text>
                      <Text
                        className="sm:text-[18.88px] md:text-[20.88px] text-[22.88px] text-black-900 w-auto"
                        size="txtPromptSemiBold2288"
                      >
                        Smart Chain (ETH)
                      </Text>
                    </div>
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-[542px] sm:w-full">
                      <Text
                        className="sm:text-[18.88px] md:text-[20.88px] text-[22.88px] text-teal-100 w-auto"
                        size="txtPromptMedium2288"
                      >
                        Network fee
                      </Text>
                      <Text
                        className="sm:text-[18.88px] md:text-[20.88px] text-[22.88px] text-black-900 w-auto"
                        size="txtPromptSemiBold2288"
                      >
                        0.0001ETH
                      </Text>
                    </div>
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-[542px] sm:w-full">
                      <Text
                        className="sm:text-[18.88px] md:text-[20.88px] text-[22.88px] text-teal-100 w-auto"
                        size="txtPromptMedium2288"
                      >
                        Max Total
                      </Text>
                      <Text
                        className="sm:text-[18.88px] md:text-[20.88px] text-[22.88px] text-black-900 w-auto"
                        size="txtPromptSemiBold2288"
                      >
                        $1,845.27
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-black-900 cursor-pointer h-[60px] leading-[normal] mt-[27px] py-[11px] rounded-[30px] text-2xl md:text-[22px] text-center text-teal-A400 sm:text-xl tracking-[-0.72px] w-[216px]">
                    Buy now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftBid;
