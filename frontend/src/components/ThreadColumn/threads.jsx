import React, { useEffect, useState } from "react";

import { Button, Img, Text } from "components";
import { Link } from "react-router-dom";

const Thread = (props) => {
  const [thread1, setThread] = useState();

  const cid = localStorage.getItem('cid');

  const data = async () => {
    const cloudflareUrl = `https://cloudflare-ipfs.com/ipfs/${cid}`;
              const response = await fetch(cloudflareUrl);
  
              if (!response.ok) {
                throw new Error(`Failed to fetch from IPFS. Status: ${response.status}`);
              }
  
              const jsonData = await response.json();


              const image = jsonData.image.replace('ipfs://', '');
              const imageurl = `https://cloudflare-ipfs.com/ipfs/${image}`;

              let userImageUrl = '';
              if (jsonData.userimage) {
                const userimage = jsonData.userimage.replace('ipfs://', '');
                userImageUrl = `https://cloudflare-ipfs.com/ipfs/${userimage}`;

                }
              const dateObject = new Date(jsonData.date);
              const hours = dateObject.getHours();
              const minutes = dateObject.getMinutes();
              const date = dateObject.toLocaleDateString([], { year: 'numeric', month: '2-digit', day: '2-digit' });
            

              setThread(() => [
                { 
                  data: imageurl, 
                  userimage: userImageUrl,
                  titleofprops: jsonData.description, 
                  description: jsonData.description,
                  anasabdin: jsonData.username, 
                  education: 'Feeds', 
                  time: `${hours}:${minutes} ${date}`, 
                  repliescounter13: 'Replies Counter',
                  anasabdinone10: 'Anas Abdin One',
                  like: "Like",
                  quote: "Quote",
                  reply: "Reply",
                },
              ]);
  }

  useEffect(() => {
    data();
  }, []);


    const handleShare = async () => {
      try {
        if (navigator.share) {
          const item = thread1[0];
          await navigator.share({title: item.anasabdin, text: thread1[0].description, url: thread1[0].data  });
          console.log('Shared successfully');
        } else {
          console.log('Web Share API not supported');
        }
      } catch (error) {
        console.error('Error sharing:', error.message);
      }
    };
  

  return (
    <>
      <div className={props.className}>
      {Array.isArray(thread1) ? (
        thread1.map((thread, index) => (
        <div key={index} className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
          <div className="bg-gray-200 flex md:flex-1 flex-col items-center justify-start p-10 sm:px-5 w-[23%] md:w-full">
            {/* <Button className="bg-gray-600_01 cursor-pointer font-prompt font-semibold h-[73px] leading-[normal] mt-[35px] py-[21px] rounded-[5px] text-center text-white-A700 text-xl w-[73px]">
              {props?.b}
            </Button> */}
            <Img
                  src={thread?.userimage}
                  alt="Image Alt Text"
                  className="h-[46px] w-[46px] rounded-[10px]"
                />
            <Text
              className="mt-[11px] text-black-900 text-xl"
              size="txtPromptMedium20"
            >
              {thread?.anasabdin}
            </Text>
            <Text
              className="mb-[330px] text-teal-A400 text-xl"
              size="txtPromptSemiBold20"
            >
              {thread?.anasabdin}
            </Text>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[78%] md:w-full">
            <div className="bg-black-900 flex flex-row sm:gap-10 items-center justify-between p-5 w-full">
              <Text
                className="text-[17px] text-teal-A400"
                size="txtPromptMedium17TealA400"
              >
                {thread?.time}
              </Text>
              <div className="flex flex-row items-start justify-center mr-4" onClick={handleShare}>
                <Img
                  onClick={handleShare}
                  className="h-[22px] mt-[3px] cursor-pointer"
                  src="../images/img_search_teal_a400.svg"
                  alt="share"
                />
                {/* <Img
                  className="h-[22px] ml-[23px] mt-1"
                  src="../images/img_bookmark.svg"
                  alt="bookmark"
                /> */}
                {/* <Text
                  className="ml-5 sm:text-[17px] md:text-[19px] text-[21px] text-teal-A400"
                  size="txtPromptMedium21"
                >
                  {thread?.one}
                </Text> */}
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-6 items-start justify-start max-w-[808px] p-5 w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPromptRegular24"
              >
                {thread?.description}
              </Text>
              <Img
                  src={thread?.data}
                  alt="Image Alt Text"
                  className="cursor-pointer h-[260px] w-[260px]"
                />
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[51%] md:w-full">
                <Button
                  className="bg-black-900 cursor-pointer flex items-center justify-center min-w-[109px] px-5 py-3.5 rounded-[7px]"
                  leftIcon={
                    <div className="mr-[7px] bg-dark-A700 my-[3px]">
                      <Img src="../images/img_edit_white_a700.svg" alt="edit" />
                    </div>
                  }
                >
                  <div className="font-medium font-prompt leading-[normal] text-left text-lg text-white-A700">
                    {thread?.like}
                  </div>
                </Button>
                <Button
                  className="bg-black-900 cursor-pointer flex items-center justify-center min-w-[108px] sm:ml-[0] ml-[30px] px-3 py-3.5 rounded-[7px]"
                  leftIcon={
                    <div className="h-[21px] mr-[7px] w-[21px] bg-dark-A700 my-[3px]">
                      <Img
                        className="h-[21px]"
                        src="../images/img_grid.svg"
                        alt="grid"
                      />
                    </div>
                  }
                >
                  <div className="font-medium font-prompt leading-[normal] text-left text-lg text-white-A700">
                    {thread?.quote}
                  </div>
                </Button>
                
                  <Button
                    className="bg-teal-A400 cursor-pointer flex items-center justify-center min-w-[108px] sm:ml-[0] ml-[31px] pl-[15px] pr-[11px] py-3.5 rounded-[7px]"
                    leftIcon={
                      <div className="mt-px mb-[5px] mr-[7px] bg-dark-A700">
                        <Img src="../images/img_reply.svg" alt="reply" />
                      </div>
                    }
                  >
                    <div className="font-medium font-prompt leading-[normal] text-left text-lg text-white-A700">
                      {thread?.reply}
                    </div>
                  </Button>
               
              </div>
            </div>
          </div>
        </div>
          ))
          ) : (
            <div>No Feeds available</div>
          )}
      </div>
    </>
  );
};

/* Thread.defaultProps = {
  b: "B",
  anasabdin: "@anasabdin",
  seniormember: "Senior member",
  time: "Today at 9pm",
  one: "#1",
  description: (
    <>
      Lorem ipsum dolor sit amet consectetur. Platea nibh condimentum quisque
      ultricies ut. Maecenas non dictum euismod proin morbi netus tellus. Enim
      interdum massa morbi tellus pretium volutpat. Vitae sed ornare sit
      ultricies pellentesque in netus mi nec. <br />
      <br />
      Lorem ipsum dolor sit amet consectetur. Platea nibh condimentum quisque
      ultricies ut. Maecenas non dictum euismod proin morbi netus tellus. Enim
      interdum massa morbi tellus pretium volutpat. Vitae sed ornare sit
      ultricies pellentesque in netus mi nec.{" "}
    </>
  ),
  like: "Like",
  quote: "Quote",
  reply: "Reply",
}; */

export default Thread;
