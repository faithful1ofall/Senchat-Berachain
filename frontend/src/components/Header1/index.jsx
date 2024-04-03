import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";
import { Link } from "react-router-dom";

const Header1 = (props) => {
  const [framesixvalue, setFramesixvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col gap-[5px] items-center justify-start w-[4%] md:w-full">
          <Link to="/">
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
          </Link>
        </div>
        <Input
          name="frameSix"
          placeholder="Search...."
          value={framesixvalue}
          onChange={(e) => setFramesixvalue(e)}
          className="font-prompt leading-[normal] p-0 placeholder:text-gray-700_a5 sm:px-5 text-gray-700_a5 text-left text-xs w-full"
          wrapClassName="bg-gray-100 border border-gray-500 border-solid flex mb-1.5 md:ml-[0] ml-[77px] pl-[21px] pr-[35px] py-4 rounded-[26px] w-[39%] md:w-full"
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
                visibility: framesixvalue?.length <= 0 ? "hidden" : "visible",
              }}
              height={17}
              width={17}
              viewBox="0 0 17 17"
            />
          }
        ></Input>
        <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-start md:ml-[0] ml-[283px] md:mt-0 my-0.5 w-auto sm:w-full">
          <Link to="/desktopfour">
            <Text
              className="text-teal-A400 text-lg w-auto"
              size="txtPromptRegular18"
            >
              Forum
            </Text>
          </Link>
          <div className="flex flex-col items-center justify-start w-[70px]">
            <Link to="/desktopten" className="text-black-900 text-lg w-[70px]">
              Threads
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start w-[35px]">
            <Link to="/desktopthirteen">
              <Text
                className="text-black-900 text-lg w-[33px]"
                size="txtPromptRegular18"
              >
                NFT
              </Text>
            </Link>
          </div>
          <Text
            className="text-black-900 text-lg w-20"
            size="txtPromptRegular18"
          >
            New Post
          </Text>
          <Button className="bg-teal-A400 cursor-pointer font-medium font-prompt min-w-[91px] py-[13px] rounded-[13px] text-black-900 text-center text-lg">
            Connect
          </Button>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
