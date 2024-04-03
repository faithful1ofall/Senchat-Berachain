import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Img, Text, Button } from "components";
import { Link } from "react-router-dom";
import { ConnectButton } from '@particle-network/connect-react-ui';
import '@particle-network/connect-react-ui/dist/index.css';



const User = () => {
  const history = useNavigate();
  const userDataParam = localStorage.getItem('userData');
  const [userimage, setUserimage] = useState();
  const userData = JSON.parse(userDataParam);




  useEffect(() => {
    const image = userData.image.replace('ipfs://', '');
    const imageurl = `https://cloudflare-ipfs.com/ipfs/${image}`;
    setUserimage(imageurl);
  }, [ userData.image ]);


  return (
    <>
      <div className="bg-gray-100 flex flex-col font-prompt items-end justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full"></div>
        <div className="bg-white-A700 flex flex-col gap-10 items-end justify-start p-5 md:px-5 w-auto sm:w-full">
          <Img
            className="h-7 w-7"
            src={userimage}
            alt="frame228"
          />
          <Link
            to="/coming-soon"
            className="bg-white-A700 flex flex-col items-start justify-start p-2"
          >
            <Text
              className="ml-3 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtPromptMedium30Black900"
            >
              {userData.name}
            </Text>
            <Text
              className="mb-0.5 ml-3 md:ml-[0] text-teal-100 text-xl"
              size="txtPromptMedium20Teal100"
            >
              A Senchatian
            </Text>
          </Link>
          <Link
            to="/coming-soon"
            className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full"
          >
            <Img
              className="h-7 w-7 md:h-auto rounded-[50%]"
              src={userimage}
              alt="ellipseFortyTwo_One"
            />
            {/*  <Text
              className="sm:ml-[0] ml-[50px] sm:text-[19px] md:text-[18px] text-[19px] text-black-900"
              size="txtPromptSemiBold23"
            >
              Edit Profile
            </Text>
            <Img
              className="h-[19px] sm:ml-[0] ml-[295px] sm:mt-0 mt-[9px]"
              src="images/img_arrowright_blue_gray_900_01.svg"
              alt="arrowright"
            /> */}
          </Link>
          <Link
            to="/portfolio"
            className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full"
          >
            <Img className="h-7 w-7" src="images/img_frame.svg" alt="frame" />
            <Text
              className="sm:ml-[0] ml-[49px] sm:text-[19px] md:text-[21px] text-[19px] text-black-900"
              size="txtPromptSemiBold23"
            >
              My Portfolio
            </Text>
            <Img
              className="h-[19px] sm:ml-[0] ml-[281px] sm:mt-0 mt-[9px]"
              src="images/img_arrowright_blue_gray_900_01.svg"
              alt="arrowright_One"
            />
          </Link>
          <Link
            to="/coming-soon"
            className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start pt-[3px] w-full"
          >
            <Img
              className="h-7 w-7"
              src="images/img_search_teal_100.svg"
              alt="search_One"
            />
            <Text
              className="sm:ml-[0] ml-[51px] sm:text-[19px] md:text-[21px] text-[19px] text-black-900"
              size="txtPromptSemiBold23"
            >
              Settings
            </Text>
            <Img
              className="h-[19px] sm:ml-[0] ml-[326px] sm:mt-0 mt-[7px]"
              src="images/img_arrowright_blue_gray_900_01.svg"
              alt="arrowright_Two"
            />
          </Link>
          <Link
            to="/coming-soon"
            className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full"
          >
            <Img
              className="h-7 w-7"
              src="images/img_notification_teal_100.svg"
              alt="notification_One"
            />
            <Text
              className="sm:ml-[0] ml-[52px] sm:text-[19px] md:text-[21px] text-[19px] text-black-900"
              size="txtPromptSemiBold23"
            >
              Notification
            </Text>
            <Img
              className="h-[19px] ml-72 sm:ml-[0] sm:mt-0 mt-[9px]"
              src="images/img_arrowright_blue_gray_900_01.svg"
              alt="arrowright_Three"
            />
          </Link>
          
            <ConnectButton.Custom>
            {({ account, openAccountModal }) => {
              if (!account) {
                history('/signin');               
              }
              return (
                <div>
                  <Button
                    onClick={openAccountModal}
                    className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full"
                  >
                    <Img
                      className="h-7 w-7"
                      src="images/img_frame_teal_100.svg"
                      alt="frame_One"
                    />
                  <Text size="txtPromptSemiBold23"
                    className="sm:ml-[0] ml-[54px] sm:mt-0 mt-0.5 sm:text-[19px] md:text-[21px] text-[19px] text-black-900"
                  >Log out</Text>
                  <Img
                      className="h-[19px] sm:ml-[0] ml-[326px] sm:mt-0 mt-[9px]"
                      src="images/img_arrowright_blue_gray_900_01.svg"
                      alt="arrowright_Four"
                    />
                  </Button>
                </div>

              );
            }}
          </ConnectButton.Custom>  
        </div>
      </div>
    </>
  );
};

export default User;
