import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

// import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, List, Text } from "components";
import ThreadColumn from "components/ThreadColumn/threads";
// import Sidebar11 from "components/Sidebar11";
import { Link } from "react-router-dom";
import Navbar from "components/Header2/navbar";

// import { CloseSVG } from "../../assets/images";

const Thread = () => {
  const { cid } = useParams();
  const [fdata, setfdata] = useState({});
  const [time, settime] = useState();

  localStorage.setItem('cid', cid);

  const data = async () => {
    const cloudflareUrl = `https://cloudflare-ipfs.com/ipfs/${cid}`;
    const response = await fetch(cloudflareUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch from IPFS. Status: ${response.status}`);
    }

    const jsonData = await response.json();

    setfdata(jsonData);

    const dateObject = new Date(jsonData.date);
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const date = dateObject.toLocaleDateString([], { year: 'numeric', month: '2-digit', day: '2-digit' });
    
  
    settime(` ${hours}:${minutes} ${date} `);

  };

  useEffect(() => {
    data();
  }, []);


  return (
    <>
      <Navbar className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />

      <div className="bg-gray-100 flex flex-col font-prompt items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="flex md:flex-col flex-row gap-5 items-start justify-between mx-auto md:px-5 w-full">
            <div className="flex flex-1 flex-col gap-2.5 items-center justify-start pl-[9px] w-full">
              <div className="bg-gray-100 flex flex-col items-center justify-end pr-[17px] py-[17px] w-full">
                <div className="flex flex-col items-center justify-start mt-[50px] w-[98%] md:w-full">
                  <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                        <Img
                          className="h-5 mt-0.5 w-5"
                          src="../images/img_user.svg"
                          alt="user"
                        />
                        <Text
                          className="text-[16.8px] text-blue_gray-400"
                          size="txtPromptMedium168"
                        >
                          {fdata.username != null ? ` ${fdata.username} ` : ''}
                        </Text>
                      
                        <Img
                          className="h-6 w-6"
                          src="../images/img_clock.svg"
                          alt="clock"
                        />
                        <Text
                          className="text-[16.8px] text-blue_gray-400"
                          size="txtPromptMedium168"
                        >
                            {time}
                        </Text>
                      </div>
                    </div>                    
                  </div>
                  <div className="h-7 md:h-[31px] mt-[3px] w-full">
                    <div className="flex px-5 gap-8 sm:gap-[0.6rem] border border-solid border-teal-100 mt-auto mx-auto w-full md:h-7 h-[26px] m-auto">
                      <div className="flex items-center">
                        <Text
                          className="text-[16.8px] sm:text-[14px] text-blue_gray-400"
                          size="txtPromptMedium168"
                        >
                          Forum
                        </Text>
                        <Img
                          className="h-5 sm:h-4"
                          src="../images/img_arrowright.svg"
                          alt="arrowright"
                        />
                      </div>
                      <div className="flex items-center">
                        <Text
                          className="text-[16.8px] sm:text-[14px] text-blue_gray-400"
                          size="txtPromptMedium168"
                        >
                          Feeds
                        </Text>
                        <Img
                          className="h-5 sm:h-4"
                          src="../images/img_arrowright.svg"
                          alt="arrowright_One"
                        />
                      </div>                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                <List
                  className="flex flex-col gap-5 items-start w-auto"
                  orientation="vertical"
                >
                  {new Array(1).fill({}).map((props, index) => (
                    <React.Fragment key={`ThreadColumn${index}`}>
                      <ThreadColumn
                        className="flex flex-col items-center justify-start my-0 w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Thread;
