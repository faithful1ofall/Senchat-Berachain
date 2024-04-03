import React from "react";

import { Button, Img, Input, List, Text } from "components";
import DesktopSeventeenListrectangleone from "components/DesktopSeventeenListrectangleone";
import Navbar from "components/Header2/navbar";
import { Link } from "react-router-dom";

import { CloseSVG } from "../../assets/images";

const NftOverview = () => {
  const [framesixvalue, setFramesixvalue] = React.useState("");

  return (
    <>
      {/* <Navbar className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" /> */}
      <div className="bg-gray-100 flex flex-col font-prompt items-center justify-end mx-auto w-full overflow-hidden">
        <div className="sm:h-[1126px] h-[1191px] md:h-[1518px] md:px-5 relative w-full">
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
          <div className="absolute flex flex-col items-center justify-start left-[4%] top-[5%] w-[69%]">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="gap-[45px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start w-[95%] md:w-full">
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
                <div className="flex md:flex-1 flex-col gap-9 items-center justify-start w-[44%] md:w-full">
                  <div className="h-[506px] relative w-full">
                    <Img
                      className="h-[506px] m-auto object-cover rounded-[38px] w-full"
                      src="images/img_rectangle1_506x451.png"
                      alt="rectangleOne"
                    />
                    <div className="absolute bg-white-A700_4c bottom-[10%] flex flex-row gap-[34px] inset-x-[0] items-center justify-center mx-auto p-[13px] w-[55%]">
                      <Text
                        className="text-[17px] text-teal-A400"
                        size="txtPromptSemiBold17TealA400"
                      >
                        Auction ends
                      </Text>
                      <Text
                        className="text-[17px] text-black-900"
                        size="txtPromptSemiBold17"
                      >
                        03:20:32
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-between w-full">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-col items-center justify-start ml-6 md:ml-[0] w-[61%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="sm:text-[17px] md:text-[19px] text-[21px] text-teal-A400"
                            size="txtPromptMedium21"
                          >
                            Highest Bid
                          </Text>
                          <div className="flex flex-row gap-[9px] items-center justify-start w-full">
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
                    <Link
                      to="/nft-bid"
                      className="bg-black-900 cursor-pointer h-[60px] leading-[normal] sm:mt-0 my-[5px] py-[11px] rounded-[30px] text-2xl md:text-[22px] text-center text-teal-A400 sm:text-xl tracking-[-0.72px] w-[216px]"
                    >
                      Place Bid
                    </Link>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[34px] items-center justify-start w-[55%] md:w-full">
                  <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtPromptBold24"
                    >
                      Description
                    </Text>
                    <Text
                      className="sm:text-[17px] md:text-[19px] text-[21px] text-black-900 w-full"
                      size="txtPromptMedium21Black900"
                    >
                      Lorem ipsum dolor sit amet consectetur. Enim viverra amet
                      risus lorem condimentum quam tristique posuere
                      sollicitudin. Neque at morbi massa aenean facilisi.
                      Fermentum urna eget duis sollicitudin. Neque at morbi
                      massa aenean facilisi{" "}
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-3 h-[366px] md:h-auto items-start justify-start sm:px-5 px-[29.16px] w-auto sm:w-full">
                    <Text
                      className="sm:text-[25.16px] md:text-[27.16px] text-[29.16px] text-black-900 w-[243px]"
                      size="txtPromptSemiBold2916"
                    >
                      Previous Owners
                    </Text>
                    <List
                      className="flex flex-col items-center w-full"
                      orientation="vertical"
                    >
                      <div className="bg-white-A700 flex sm:flex-1 sm:flex-col flex-row gap-[29.16px] items-center justify-start py-[14.58px] w-[508px] sm:w-full">
                        <Img
                          className="h-16 md:h-auto rounded-[50%] w-16"
                          src="images/img_rectangle2_64x64.png"
                          alt="rectangleTwo"
                        />
                        <div className="flex flex-col items-start justify-start pr-0.5 py-0.5">
                          <Text
                            className="sm:text-[16.41px] md:text-[18.41px] text-[20.41px] text-black-900"
                            size="txtPromptSemiBold2041"
                          >
                            Lesile Alexander
                          </Text>
                          <Text
                            className="mb-1 text-[17.5px] text-gray-500_02"
                            size="txtPromptMedium175"
                          >
                            @sandygrow
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[11px] items-start justify-between pl-0.5 py-0.5 w-[22%] sm:w-full">
                          <Text
                            className="ml-[7px] sm:text-[16.41px] md:text-[18.41px] text-[20.41px] text-black-900"
                            size="txtPromptSemiBold2041"
                          >
                            0.6ETH
                          </Text>
                          <Img
                            className="h-[21px] mt-1"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 flex sm:flex-1 sm:flex-col flex-row gap-[29.16px] items-center justify-start py-[14.58px] w-[508px] sm:w-full">
                        <Img
                          className="h-16 md:h-auto rounded-[50%] w-16"
                          src="images/img_rectangle2_1.png"
                          alt="rectangleTwo"
                        />
                        <div className="flex flex-col items-start justify-start pr-[3px] py-[3px]">
                          <Text
                            className="sm:text-[16.41px] md:text-[18.41px] text-[20.41px] text-black-900"
                            size="txtPromptSemiBold2041"
                          >
                            Guy Hawkins
                          </Text>
                          <Text
                            className="mb-[3px] text-[17.5px] text-gray-500_02"
                            size="txtPromptMedium175"
                          >
                            @sandygrow
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[15px] items-center justify-between pb-1 pl-1 w-[22%] sm:w-full">
                          <Text
                            className="ml-0.5 sm:text-[16.41px] md:text-[18.41px] text-[20.41px] text-black-900"
                            size="txtPromptSemiBold2041"
                          >
                            0.5ETH
                          </Text>
                          <Img
                            className="h-[21px]"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 flex sm:flex-1 sm:flex-col flex-row gap-[29.16px] items-center justify-start py-[14.58px] w-[508px] sm:w-full">
                        <Img
                          className="h-16 md:h-auto rounded-[50%] w-16"
                          src="images/img_rectangle2_2.png"
                          alt="rectangleTwo"
                        />
                        <div className="flex flex-col items-start justify-start pr-0.5 py-0.5">
                          <Text
                            className="sm:text-[16.41px] md:text-[18.41px] text-[20.41px] text-black-900"
                            size="txtPromptSemiBold2041"
                          >
                            Lesile Gupta
                          </Text>
                          <Text
                            className="mb-0.5 text-[17.5px] text-gray-500_02"
                            size="txtPromptMedium175"
                          >
                            @sandygrow
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[15px] items-end justify-between pb-1 pl-1 w-[22%] sm:w-full">
                          <Text
                            className="ml-0.5 sm:text-[16.41px] md:text-[18.41px] text-[20.41px] text-black-900"
                            size="txtPromptSemiBold2041"
                          >
                            0.5ETH
                          </Text>
                          <Img
                            className="h-[21px] mb-[3px] mt-1.5"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftOverview;
