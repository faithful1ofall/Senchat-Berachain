import React from "react";
import { Link } from "react-router-dom";
import { Text, Img} from "components";
//import { CloseSVG } from "assets/images";

const Home = () => {

  return (
    <React.Fragment>
      <div className="flex justify-between bg-white p-2 h-[12px]">
        <div className="flex flex-col gap-[5px] w-[4rem] lg:w-full">
          <Img
            className="h-[43px] md:h-auto object-cover"
            src="images/img_image3.png"
            alt="imageThree"
          />
          <Text
            className="text-[7.39px] text-teal-A400"
            size="txtPromptSemiBold739"
          >
            SENCHAT
          </Text>
        </div>

        <div className="mt-5">
          <Link
            to="/signup"
            className="text-teal-A400 text-center text-[22px] p-5 font-semibold"
          >
            Sign up
          </Link>

          <Link
            to="/signin"
            className="bg-teal-A400 cursor-pointer font-medium font-prompt p-4 rounded-[13px] text-black-900 text-lg"
          >
            Sign in
          </Link>
        </div>
      </div>

      <div className="px-5 h-[100vh] bg-gray-100 mt-20 flex sm:flex-col md:flex-row items-center justify-center gap-28 ">
        <div className="first-layout ">
          <h1 className="text-4xl front-prompt font-semibold">
            WELCOME TO SENCHAT
          </h1>
        </div>
        <div className="second-layout ">
          <Img
            className="w-60"
            src="images/img_rectangle2.png"
            alt="rectangle2"
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
