import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Navbar from "components/Header2/navbar";
import { Link } from "react-router-dom";

import { CloseSVG } from "../../assets/images";

const NftIndex = () => {
  const [framesixvalue, setFramesixvalue] = React.useState("");

  return (
    <>
      {/* <Navbar className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" /> */}
      <div className="bg-gray-100 flex flex-col font-prompt items-center justify-start mx-auto pb-[57px] w-full">
        <div className="flex flex-col items-center justify-start max-w-[1392px] mt-[113px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-1/2 md:w-full">
              <Text
                className="leading-[70.00px] md:text-5xl text-6xl text-black-900"
                size="txtPromptBold60"
              >
                <span className="text-black-900 font-prompt text-left font-bold">
                  <>
                    Discover, Buy and Sell
                    <br />
                    Extraordinary{" "}
                  </>
                </span>
                <span className="text-teal-A400 font-prompt text-left font-bold">
                  <>
                    NFTs
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-prompt text-left font-bold">
                  On{" "}
                </span>
                <span className="text-teal-A400 font-prompt text-left font-bold">
                  SenChat
                </span>
              </Text>
              <Text
                className="mt-[34px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                size="txtPromptRegular24"
              >
                Lorem ipsum dolor sit amet consectetur. Platea nibh condimentum
                quisque ultricies ut. Maecenas non dictum euismod proin morbi
                netus tellus. Enim interdum massa morbi tellus pretium volutpat.
                Vitae sed ornare sit ultricies pellentesque in netus mi nec.{" "}
              </Text>
              <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-start mt-[53px] w-[65%] md:w-full">
                <Button className="bg-teal-A400 cursor-pointer font-semibold h-[60px] leading-[normal] py-[15px] rounded-[30px] text-[19.27px] text-black-900 text-center w-[211px]">
                  Explore
                </Button>
                <Button className="border-2 border-solid border-teal-A400 cursor-pointer font-semibold h-[60px] leading-[normal] py-[15px] rounded-[30px] text-[19.27px] text-center text-teal-A400 w-[211px]">
                  NFT Collections
                </Button>
              </div>
            </div>
            <div className="md:h-[331px] h-[596px] relative w-[41%] md:w-full">
              <div className="absolute md:h-[331px] h-[596px] inset-y-[0] my-auto right-[0] w-[69%] sm:w-full">
                <Img
                  className="absolute h-[331px] object-cover right-[0] rounded-[25px] top-[0] w-[77%]"
                  src="images/img_rectangle2.png"
                  alt="rectangleTwo"
                />
                <Img
                  className="absolute bottom-[0] h-[331px] left-[0] object-cover rounded-[16px] w-[77%]"
                  src="images/img_rectangle1.png"
                  alt="rectangleOne"
                />
              </div>
              <Img
                className="absolute h-[331px] left-[0] object-cover rounded-[24px] top-[17%] w-[53%]"
                src="images/img_rectangle3.png"
                alt="rectangleThree"
              />
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1311px] mt-[95px] mx-auto pr-[7px] md:px-5 w-full">
          <div className="flex md:flex-1 flex-row gap-[18px] items-center justify-between w-[13%] md:w-full">
            <Img
              className="h-[74px] w-[75px]"
              src="images/img_arrowup.svg"
              alt="arrowup"
            />
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtPromptBold30"
            >
              Tesla
            </Text>
          </div>
          <div className="flex md:flex-1 flex-row gap-[18px] items-center justify-center md:ml-[0] ml-[71px] w-[19%] md:w-full">
            <Img
              className="h-[59px]"
              src="images/img_vector.svg"
              alt="vector"
            />
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtPromptBold30"
            >
              Amazon
            </Text>
          </div>
          <div className="flex md:flex-1 flex-row gap-[19px] items-end justify-center md:ml-[0] ml-[72px] w-[14%] md:w-full">
            <Img
              className="h-[49px] w-[49px]"
              src="images/img_signal.svg"
              alt="signal"
            />
            <Text
              className="mt-[5px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtPromptBold30"
            >
              Spotify
            </Text>
          </div>
          <div className="flex md:flex-1 flex-row gap-[18px] items-center justify-center md:ml-[0] ml-[86px] w-[17%] md:w-full">
            <Img className="h-[52px]" src="images/img_mail.svg" alt="mail" />
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtPromptBold30"
            >
              Dropbox
            </Text>
          </div>
          <div className="flex md:flex-1 flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[62px] w-[18%] md:w-full">
            <Img
              className="h-[51px]"
              src="images/img_reply_blue_gray_900_01.svg"
              alt="reply"
            />
            <Text
              className="italic text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtPromptBoldItalic30"
            >
              Webflow
            </Text>
          </div>
        </div>
        <List
          className="flex flex-col gap-[78px] items-center mt-[95px] w-full"
          orientation="vertical"
        >
          <div className="bg-gray-900 flex flex-1 flex-col items-center justify-start p-[41px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1380px] mb-[17px] mx-auto w-full">
              <Text
                className="bg-clip-text bg-gradient  md:text-5xl text-6xl text-center text-transparent"
                size="txtPromptBold60"
              >
                What’s Trending
              </Text>
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center min-h-[auto] mt-[30px] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[15px] pt-[5px] px-[5px] rounded-[20px] w-full">
                  <div className="flex flex-col h-[250px] items-center justify-start w-[250px]">
                    <Img
                      className="h-[250px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[250px]"
                      src="images/img_rectangle1_250x250.png"
                      alt="rectangleOne"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                      <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[17px] text-black-900"
                            size="txtPromptSemiBold17"
                          >
                            Power of friendship
                          </Text>
                          <Text
                            className="text-sm text-teal-A400"
                            size="txtPromptMedium14TealA400"
                          >
                            @anasabdin
                          </Text>
                        </div>
                        <Img
                          className="h-[29px] md:h-auto rounded-[50%] w-[29px]"
                          src="images/img_ellipse1.png"
                          alt="ellipseOne"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPromptMedium14Black900"
                        >
                          Current Price
                        </Text>
                        <div className="flex flex-row items-center justify-evenly">
                          <Img
                            className="h-3.5"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                          <Text
                            className="text-black-900 text-sm"
                            size="txtPromptMedium14Black900"
                          >
                            1.02 ETH
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[15px] pt-[5px] px-[5px] rounded-[20px] w-full">
                  <div className="flex flex-col h-[250px] items-center justify-start w-[250px]">
                    <Img
                      className="h-[250px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[250px]"
                      src="images/img_rectangle1_2.png"
                      alt="rectangleOne"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                      <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[17px] text-black-900"
                            size="txtPromptSemiBold17"
                          >
                            Power of friendship
                          </Text>
                          <Text
                            className="text-sm text-teal-A400"
                            size="txtPromptMedium14TealA400"
                          >
                            @anasabdin
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100 h-[29px] mb-3.5 rounded-[14px] w-[29px]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPromptMedium14Black900"
                        >
                          Current Price
                        </Text>
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPromptMedium14Black900"
                        >
                          1.02 ETH
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[15px] pt-[5px] px-[5px] rounded-[20px] w-full">
                  <div className="flex flex-col h-[250px] items-center justify-start w-[250px]">
                    <Img
                      className="h-[250px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[250px]"
                      src="images/img_rectangle1_3.png"
                      alt="rectangleOne"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                      <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[17px] text-black-900"
                            size="txtPromptSemiBold17"
                          >
                            Power of friendship
                          </Text>
                          <Text
                            className="text-sm text-teal-A400"
                            size="txtPromptMedium14TealA400"
                          >
                            @anasabdin
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100 h-[29px] mb-3.5 rounded-[14px] w-[29px]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-start w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPromptMedium14Black900"
                        >
                          Current Price
                        </Text>
                        <Img
                          className="h-3.5 ml-[59px]"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown"
                        />
                        <Text
                          className="ml-[5px] text-black-900 text-sm"
                          size="txtPromptMedium14Black900"
                        >
                          1.02 ETH
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[15px] pt-[5px] px-[5px] rounded-[20px] w-full">
                  <div className="flex flex-col h-[250px] items-center justify-start w-[250px]">
                    <Img
                      className="h-[250px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[250px]"
                      src="images/img_rectangle1_4.png"
                      alt="rectangleOne"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                      <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[17px] text-black-900"
                            size="txtPromptSemiBold17"
                          >
                            Power of friendship
                          </Text>
                          <Text
                            className="text-sm text-teal-A400"
                            size="txtPromptMedium14TealA400"
                          >
                            @anasabdin
                          </Text>
                        </div>
                        <Img
                          className="h-[29px] md:h-auto rounded-[50%] w-[29px]"
                          src="images/img_ellipse1_29x29.png"
                          alt="ellipseOne"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPromptMedium14Black900"
                        >
                          Current Price
                        </Text>
                        <div className="flex flex-row items-center justify-evenly">
                          <Img
                            className="h-3.5"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                          <Text
                            className="text-black-900 text-sm"
                            size="txtPromptMedium14Black900"
                          >
                            1.02 ETH
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[15px] pt-[5px] px-[5px] rounded-[20px] w-full">
                  <div className="flex flex-col h-[250px] items-center justify-start w-[250px]">
                    <Img
                      className="h-[250px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[250px]"
                      src="images/img_rectangle1_5.png"
                      alt="rectangleOne"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                      <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[17px] text-black-900"
                            size="txtPromptSemiBold17"
                          >
                            Power of friendship
                          </Text>
                          <Text
                            className="text-sm text-teal-A400"
                            size="txtPromptMedium14TealA400"
                          >
                            @anasabdin
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100 h-[29px] mb-3.5 rounded-[14px] w-[29px]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPromptMedium14Black900"
                        >
                          Current Price
                        </Text>
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPromptMedium14Black900"
                        >
                          1.02 ETH
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[15px] pt-[5px] px-[5px] rounded-[20px] w-full">
                  <div className="flex flex-col h-[250px] items-center justify-start w-[250px]">
                    <Img
                      className="h-[250px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[250px]"
                      src="images/img_rectangle1_6.png"
                      alt="rectangleOne"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                      <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[17px] text-black-900"
                            size="txtPromptSemiBold17"
                          >
                            Power of friendship
                          </Text>
                          <Text
                            className="text-sm text-teal-A400"
                            size="txtPromptMedium14TealA400"
                          >
                            @anasabdin
                          </Text>
                        </div>
                        <Img
                          className="h-[29px] md:h-auto rounded-[50%] w-[29px]"
                          src="images/img_ellipse1_1.png"
                          alt="ellipseOne"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPromptMedium14Black900"
                        >
                          Current Price
                        </Text>
                        <div className="flex flex-row items-center justify-evenly">
                          <Img
                            className="h-3.5"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                          <Text
                            className="text-black-900 text-sm"
                            size="txtPromptMedium14Black900"
                          >
                            1.02 ETH
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[15px] pt-[5px] px-[5px] rounded-[20px] w-full">
                  <div className="flex flex-col h-[250px] items-center justify-start w-[250px]">
                    <Img
                      className="h-[250px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[250px]"
                      src="images/img_rectangle1_7.png"
                      alt="rectangleOne"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                      <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[17px] text-black-900"
                            size="txtPromptSemiBold17"
                          >
                            Power of friendship
                          </Text>
                          <Text
                            className="text-sm text-teal-A400"
                            size="txtPromptMedium14TealA400"
                          >
                            @anasabdin
                          </Text>
                        </div>
                        <Img
                          className="h-[29px] md:h-auto rounded-[50%] w-[29px]"
                          src="images/img_ellipse1_2.png"
                          alt="ellipseOne"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPromptMedium14Black900"
                        >
                          Current Price
                        </Text>
                        <div className="flex flex-row items-center justify-evenly">
                          <Img
                            className="h-3.5"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                          <Text
                            className="text-black-900 text-sm"
                            size="txtPromptMedium14Black900"
                          >
                            1.02 ETH
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[15px] pt-[5px] px-[5px] rounded-[20px] w-full">
                  <div className="flex flex-col h-[250px] items-center justify-start w-[250px]">
                    <Img
                      className="h-[250px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[250px]"
                      src="images/img_rectangle1_8.png"
                      alt="rectangleOne"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                      <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[17px] text-black-900"
                            size="txtPromptSemiBold17"
                          >
                            Power of friendship
                          </Text>
                          <Text
                            className="text-sm text-teal-A400"
                            size="txtPromptMedium14TealA400"
                          >
                            @anasabdin
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100 h-[29px] mb-3.5 rounded-[14px] w-[29px]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-start w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPromptMedium14Black900"
                        >
                          Current Price
                        </Text>
                        <Img
                          className="h-3.5 ml-[59px]"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown"
                        />
                        <Text
                          className="ml-[5px] text-black-900 text-sm"
                          size="txtPromptMedium14Black900"
                        >
                          1.02 ETH
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[15px] pt-[5px] px-[5px] rounded-[20px] w-full">
                  <div className="flex flex-col h-[250px] items-center justify-start w-[250px]">
                    <Img
                      className="h-[250px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[250px]"
                      src="images/img_rectangle1_2.png"
                      alt="rectangleOne"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                      <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[17px] text-black-900"
                            size="txtPromptSemiBold17"
                          >
                            Power of friendship
                          </Text>
                          <Text
                            className="text-sm text-teal-A400"
                            size="txtPromptMedium14TealA400"
                          >
                            @anasabdin
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100 h-[29px] mb-3.5 rounded-[14px] w-[29px]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPromptMedium14Black900"
                        >
                          Current Price
                        </Text>
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPromptMedium14Black900"
                        >
                          1.02 ETH
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="bg-teal-A400 cursor-pointer font-semibold h-[60px] leading-[normal] mt-20 py-[15px] rounded-[30px] text-[19.27px] text-black-900 text-center w-[211px]">
                see more
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-start max-w-[1380px] mx-auto md:px-5 w-full">
            <Text
              className="bg-clip-text bg-gradient1  md:text-5xl text-6xl text-center text-transparent"
              size="txtPromptBold60Teal100"
            >
              Top Collections
            </Text>
            <div className="gap-[45px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-center mt-11 w-[71%] md:w-full">
              <Link to="/nft-index">
                <Button className="bg-teal-A400 cursor-pointer font-semibold h-[60px] leading-[normal] py-[15px] rounded-[30px] text-[19.27px] text-black-900 text-center w-full">
                  All
                </Button>
              </Link>

              <Link to="/painting-nft">
                <Button className="border-2 border-blue_gray-400 border-solid cursor-pointer font-semibold h-[60px] leading-[normal] py-[15px] rounded-[30px] text-[19.27px] text-blue_gray-400 text-center w-full">
                  Paintings
                </Button>
              </Link>

              <Link to="/animation-nft">
                <Button className="border-2 border-blue_gray-400 border-solid cursor-pointer font-semibold h-[60px] leading-[normal] py-[15px] rounded-[30px] text-[19.27px] text-blue_gray-400 text-center w-full">
                  3D Animations
                </Button>
              </Link>

              <Link to="/illustration-nft">
                <Button className="border-2 border-blue_gray-400 border-solid cursor-pointer font-semibold h-[60px] leading-[normal] py-[15px] rounded-[30px] text-[19.27px] text-blue_gray-400 text-center w-full">
                  Illustration
                </Button>
              </Link>
            </div>
            <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center min-h-[auto] mt-20 w-full">
              <div className="bg-white-A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[15px] pt-[5px] px-[5px] rounded-[20px] w-full">
                <div className="flex flex-col h-[250px] items-center justify-start w-[250px]">
                  <Img
                    className="h-[250px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[250px]"
                    src="images/img_rectangle1_250x250.png"
                    alt="rectangleOne"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                  <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                    <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[17px] text-black-900"
                          size="txtPromptSemiBold17"
                        >
                          Power of friendship
                        </Text>
                        <Text
                          className="text-sm text-teal-A400"
                          size="txtPromptMedium14TealA400"
                        >
                          @anasabdin
                        </Text>
                      </div>
                      <Img
                        className="h-[29px] md:h-auto rounded-[50%] w-[29px]"
                        src="images/img_ellipse1.png"
                        alt="ellipseOne"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPromptMedium14Black900"
                      >
                        Current Price
                      </Text>
                      <div className="flex flex-row items-center justify-evenly">
                        <Img
                          className="h-3.5"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown"
                        />
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPromptMedium14Black900"
                        >
                          1.02 ETH
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[15px] pt-[5px] px-[5px] rounded-[20px] w-full">
                <div className="flex flex-col h-[250px] items-center justify-start w-[250px]">
                  <Img
                    className="h-[250px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[250px]"
                    src="images/img_rectangle1_2.png"
                    alt="rectangleOne"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                  <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                    <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[17px] text-black-900"
                          size="txtPromptSemiBold17"
                        >
                          Power of friendship
                        </Text>
                        <Text
                          className="text-sm text-teal-A400"
                          size="txtPromptMedium14TealA400"
                        >
                          @anasabdin
                        </Text>
                      </div>
                      <div className="bg-blue_gray-100 h-[29px] mb-3.5 rounded-[14px] w-[29px]"></div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPromptMedium14Black900"
                      >
                        Current Price
                      </Text>
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPromptMedium14Black900"
                      >
                        1.02 ETH
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[15px] pt-[5px] px-[5px] rounded-[20px] w-full">
                <div className="flex flex-col h-[250px] items-center justify-start w-[250px]">
                  <Img
                    className="h-[250px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[250px]"
                    src="images/img_rectangle1_3.png"
                    alt="rectangleOne"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                  <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                    <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[17px] text-black-900"
                          size="txtPromptSemiBold17"
                        >
                          Power of friendship
                        </Text>
                        <Text
                          className="text-sm text-teal-A400"
                          size="txtPromptMedium14TealA400"
                        >
                          @anasabdin
                        </Text>
                      </div>
                      <div className="bg-blue_gray-100 h-[29px] mb-3.5 rounded-[14px] w-[29px]"></div>
                    </div>
                    <div className="flex flex-row items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPromptMedium14Black900"
                      >
                        Current Price
                      </Text>
                      <Img
                        className="h-3.5 ml-[59px]"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                      <Text
                        className="ml-[5px] text-black-900 text-sm"
                        size="txtPromptMedium14Black900"
                      >
                        1.02 ETH
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[15px] pt-[5px] px-[5px] rounded-[20px] w-full">
                <div className="flex flex-col h-[250px] items-center justify-start w-[250px]">
                  <Img
                    className="h-[250px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[250px]"
                    src="images/img_rectangle1_4.png"
                    alt="rectangleOne"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                  <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                    <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[17px] text-black-900"
                          size="txtPromptSemiBold17"
                        >
                          Power of friendship
                        </Text>
                        <Text
                          className="text-sm text-teal-A400"
                          size="txtPromptMedium14TealA400"
                        >
                          @anasabdin
                        </Text>
                      </div>
                      <Img
                        className="h-[29px] md:h-auto rounded-[50%] w-[29px]"
                        src="images/img_ellipse1_29x29.png"
                        alt="ellipseOne"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPromptMedium14Black900"
                      >
                        Current Price
                      </Text>
                      <div className="flex flex-row items-center justify-evenly">
                        <Img
                          className="h-3.5"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown"
                        />
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPromptMedium14Black900"
                        >
                          1.02 ETH
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[15px] pt-[5px] px-[5px] rounded-[20px] w-full">
                <div className="flex flex-col h-[250px] items-center justify-start w-[250px]">
                  <Img
                    className="h-[250px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[250px]"
                    src="images/img_rectangle1_5.png"
                    alt="rectangleOne"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                  <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                    <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[17px] text-black-900"
                          size="txtPromptSemiBold17"
                        >
                          Power of friendship
                        </Text>
                        <Text
                          className="text-sm text-teal-A400"
                          size="txtPromptMedium14TealA400"
                        >
                          @anasabdin
                        </Text>
                      </div>
                      <div className="bg-blue_gray-100 h-[29px] mb-3.5 rounded-[14px] w-[29px]"></div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPromptMedium14Black900"
                      >
                        Current Price
                      </Text>
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPromptMedium14Black900"
                      >
                        1.02 ETH
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[15px] pt-[5px] px-[5px] rounded-[20px] w-full">
                <div className="flex flex-col h-[250px] items-center justify-start w-[250px]">
                  <Img
                    className="h-[250px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[250px]"
                    src="images/img_rectangle1_6.png"
                    alt="rectangleOne"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                  <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                    <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[17px] text-black-900"
                          size="txtPromptSemiBold17"
                        >
                          Power of friendship
                        </Text>
                        <Text
                          className="text-sm text-teal-A400"
                          size="txtPromptMedium14TealA400"
                        >
                          @anasabdin
                        </Text>
                      </div>
                      <Img
                        className="h-[29px] md:h-auto rounded-[50%] w-[29px]"
                        src="images/img_ellipse1_1.png"
                        alt="ellipseOne"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPromptMedium14Black900"
                      >
                        Current Price
                      </Text>
                      <div className="flex flex-row items-center justify-evenly">
                        <Img
                          className="h-3.5"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown"
                        />
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPromptMedium14Black900"
                        >
                          1.02 ETH
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[15px] pt-[5px] px-[5px] rounded-[20px] w-full">
                <div className="flex flex-col h-[250px] items-center justify-start w-[250px]">
                  <Img
                    className="h-[250px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[250px]"
                    src="images/img_rectangle1_7.png"
                    alt="rectangleOne"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                  <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                    <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[17px] text-black-900"
                          size="txtPromptSemiBold17"
                        >
                          Power of friendship
                        </Text>
                        <Text
                          className="text-sm text-teal-A400"
                          size="txtPromptMedium14TealA400"
                        >
                          @anasabdin
                        </Text>
                      </div>
                      <Img
                        className="h-[29px] md:h-auto rounded-[50%] w-[29px]"
                        src="images/img_ellipse1_2.png"
                        alt="ellipseOne"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPromptMedium14Black900"
                      >
                        Current Price
                      </Text>
                      <div className="flex flex-row items-center justify-evenly">
                        <Img
                          className="h-3.5"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown"
                        />
                        <Text
                          className="text-black-900 text-sm"
                          size="txtPromptMedium14Black900"
                        >
                          1.02 ETH
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[15px] pt-[5px] px-[5px] rounded-[20px] w-full">
                <div className="flex flex-col h-[250px] items-center justify-start w-[250px]">
                  <Img
                    className="h-[250px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[250px]"
                    src="images/img_rectangle1_8.png"
                    alt="rectangleOne"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                  <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                    <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[17px] text-black-900"
                          size="txtPromptSemiBold17"
                        >
                          Power of friendship
                        </Text>
                        <Text
                          className="text-sm text-teal-A400"
                          size="txtPromptMedium14TealA400"
                        >
                          @anasabdin
                        </Text>
                      </div>
                      <div className="bg-blue_gray-100 h-[29px] mb-3.5 rounded-[14px] w-[29px]"></div>
                    </div>
                    <div className="flex flex-row items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPromptMedium14Black900"
                      >
                        Current Price
                      </Text>
                      <Img
                        className="h-3.5 ml-[59px]"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                      <Text
                        className="ml-[5px] text-black-900 text-sm"
                        size="txtPromptMedium14Black900"
                      >
                        1.02 ETH
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[15px] pt-[5px] px-[5px] rounded-[20px] w-full">
                <div className="flex flex-col h-[250px] items-center justify-start w-[250px]">
                  <Img
                    className="h-[250px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[250px]"
                    src="images/img_rectangle1_2.png"
                    alt="rectangleOne"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                  <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                    <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[17px] text-black-900"
                          size="txtPromptSemiBold17"
                        >
                          Power of friendship
                        </Text>
                        <Text
                          className="text-sm text-teal-A400"
                          size="txtPromptMedium14TealA400"
                        >
                          @anasabdin
                        </Text>
                      </div>
                      <div className="bg-blue_gray-100 h-[29px] mb-3.5 rounded-[14px] w-[29px]"></div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPromptMedium14Black900"
                      >
                        Current Price
                      </Text>
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPromptMedium14Black900"
                      >
                        1.02 ETH
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button className="bg-teal-A400 cursor-pointer font-semibold h-[60px] leading-[normal] mt-20 py-[15px] rounded-[30px] text-[19.27px] text-black-900 text-center w-[211px]">
              see more
            </Button>
          </div>
        </List>
      </div>
    </>
  );
};

export default NftIndex;
