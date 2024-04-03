import React from "react";

import { Button, Img, Input, Text } from "components";
import Header2 from "components/Header2/navbar";
import { Link } from "react-router-dom";

import { CloseSVG } from "../../assets/images";

const PaintingNft = () => {
  const [framesixvalue, setFramesixvalue] = React.useState("");

  return (
    <>
      {/* <Header2 className="900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" /> */}
      <div className="bg-gray-100 flex flex-col font-prompt gap-[58px] items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end max-w-[1380px] mx-auto pb-20 md:px-5 w-full py-8">
          <Text
            className="bg-clip-text bg-gradient1  md:text-5xl text-6xl text-center text-transparent"
            size="txtPromptBold60Teal100"
          >
            Top Collections
          </Text>
          <div className="gap-[45px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-center mt-11 w-[71%] md:w-full">
            <Link to="/nft-index">
              <Button className="border border-blue_gray-400 border-solid cursor-pointer font-semibold h-[60px] leading-[normal] py-[15px] rounded-[30px] text-[19.27px] text-blue_gray-400 text-center w-full">
                All
              </Button>
            </Link>

            <Link to="/painting-nft">
              <Button className="bg-teal-A400 cursor-pointer font-semibold h-[60px] leading-[normal] py-[15px] rounded-[30px] text-[19.27px] text-black-900 text-center w-full">
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
                  src="images/img_rectangle1_6.png"
                  alt="rectangleOne"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
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
                      className="h-[29px] md:h-auto mt-0.5 rounded-[50%] w-[29px]"
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
                <div className="flex flex-col gap-5 items-center justify-start w-full">
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
                      className="h-[29px] md:h-auto mt-0.5 rounded-[50%] w-[29px]"
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
                <div className="flex flex-col gap-5 items-center justify-start w-full">
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
                    <div className="bg-blue_gray-100 h-[29px] mb-3.5 mt-0.5 rounded-[14px] w-[29px]"></div>
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
                <div className="flex flex-col gap-5 items-center justify-start w-full">
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
                    <div className="bg-blue_gray-100 h-[29px] mb-3.5 mt-0.5 rounded-[14px] w-[29px]"></div>
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
    </>
  );
};

export default PaintingNft;
