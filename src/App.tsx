import { BsPatchCheck, BsCheckLg } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  AiFillStar,
  AiOutlinePercentage,
  AiOutlineHeart,
} from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import { VscLockSmall } from "react-icons/vsc";
import { PiTruckLight } from "react-icons/pi";
import { FiCheckCircle } from "react-icons/fi";

import img1 from "./assets/sponsor/600a41c73b670a97ae1d4f47_Clarifion_Logo 1.png";
import img2 from "./assets/sponsor/Frame 1484578055.png";
import img3 from "./assets/sponsor/norton-antivirus-logo.png";
import img4 from "./assets/item/image_4.png";
import img5 from "./assets/item/image-removebg-preview.png";
import img6 from "./assets/item/image_6.png";

import visa from "./assets/payments/visa.png";
import shop from "./assets/payments/shop_pay.png";
import paypal from "./assets/payments/paypal.png";
import master from "./assets/payments/mastercard.png";
import google from "./assets/payments/gpay.png";
import apple from "./assets/payments/apple_pay.png";
import amex from "./assets/payments/amex.png";

import user from "./assets/user/user-1.png";

import "./index.css";

function App() {
  return (
    <main className="flex flex-col justify-center bg-white font-display h-full">
      {/* Navbar */}
      <nav className="w-full flex flex-col bg-[#252F3D] justify-between items-center">
        <div className="w-full flex justify-between items-center pt-[10px] pr-[20px] pb-[10px] pl-[20px] gap-[20px] ">
          <MdKeyboardArrowLeft className="w-[20px] h-[20px] text-white cursor-pointer md:hidden" />
          <div className="flex items-center gap-1">
            <BsPatchCheck style={{ color: "white" }} />
            <span className="text-[12px] text-white uppercase">
              30-Day satisfaction guarantee
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <PiTruckLight style={{ color: "white" }} />
            <span className="text-[12px] text-white uppercase">
              Free delivery on orders over $40.00
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <AiOutlineHeart style={{ color: "white" }} />
            <span className="text-[12px] text-white uppercase">
              50.000+ happy customers
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-1">
            <FiCheckCircle style={{ color: "white" }} />
            <span className="text-[12px] text-white">
              100% Money Back Guarantee
            </span>
          </div>
          <MdKeyboardArrowRight className="text-[20px] text-white cursor-pointer md:hidden" />
        </div>
      </nav>
      {/* Navbar */}

      {/* Sponsor */}
      <div className="flex justify-between p-5">
        <img
          src={img1}
          alt="clarifon"
          className="w-[106.67px] h-[20px] object-cover"
        />
        <div className="flex gap-4">
          <img
            src={img2}
            alt="clarifon"
            className="w-[44px] h-[16px] object-cover"
          />
          <img
            src={img3}
            alt="clarifon"
            className="w-[41px] h-[16px] object-cover"
          />
        </div>
      </div>
      {/* Sponsor */}

      <section className="flex flex-col justify-center items-center p-5">
        {/* Title && SubTitle*/}
        <div className="flex flex-col gap-[24px] text-center md:gap-0">
          <h1 className="text-[2rem] font-normal leading-[44.8px]">
            Wait ! your order in progress.
          </h1>
          <span className="p-1 text-[16px] leading-[22.4px] capitalize">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </span>
        </div>
        {/* Title && SubTitle*/}

        {/* Progress Bar */}
        <ul className="w-full flex justify-between mt-[16px]">
          <li className="flex flex-col justify-center items-center gap-2 lg:flex-row ">
            <div className="w-[20px] h-[20px] rounded-full bg-[#85BF55] flex justify-center items-center">
              <BsCheckLg className="text-white" />
            </div>
            <p className="text-[12px] leading-[13.2px] lg:flex gap-1 md:text-[16px]">
              <span className="hidden lg:block">Step 1 : </span> Cart Review
            </p>
          </li>
          <li className="flex flex-col justify-center items-center gap-2 lg:flex-row ">
            <div className="w-[20px] h-[20px] rounded-full bg-[#85BF55] flex justify-center items-center">
              <BsCheckLg className="text-white" />
            </div>
            <p className="text-[12px] leading-[13.2px] lg:flex gap-1 md:text-[16px]">
              <span className="hidden lg:block">Step 2 :</span> Checkout
            </p>
          </li>
          <li className="flex flex-col justify-center items-center gap-2 lg:flex-row ">
            <div className="w-[20px] h-[20px] rounded-full bg-[#2C7EF8] flex justify-center items-center">
              <span className="text-white">3</span>
            </div>
            <p className="text-[12px] leading-[13.2px] font-bold lg:flex gap-1 md:text-[16px]">
              <span className="hidden lg:block">Step 2 : </span>
              Special Offer
            </p>
          </li>
          <li className="flex flex-col justify-center items-center gap-2 lg:flex-row ">
            <div className="w-[20px] h-[20px]  rounded-full border-[#2C7EF8] border-solid border-[1px] flex justify-center items-center">
              <span className=" text-[#2C7EF8]">4</span>
            </div>
            <p className="text-[12px] leading-[13.2px] lg:flex gap-1 md:text-[16px]">
              {" "}
              <span className="hidden lg:block">Step 2 : </span> Confirmation
            </p>
          </li>
        </ul>
        {/* Progress Bar */}

        {/* Content */}
        <div className="flex flex-col max-md:justify-center max-md:items-center mt-[16px] md:flex-row md:gap-4 md:bg-[#FAFAFA]">
          <h1 className="text-[24px] text-center leading-[33.6px] md:hidden">
            <span className="text-[#2C7EF8]">ONE TIME ONLY</span> Special Price
            For 6 Extra Clarifion For Only{" "}
            <span className="text-[#2C7EF8]">$14 Each</span>
            ($84.00 Total!)
          </h1>
          <div className="flex flex-col gap-4 justify-center items-center bg-contain">
            <div
              className="w-[320px] h-[328px] md:w-[540px] md:h-[554px] bg-contain mt-[16px]"
              style={{
                backgroundImage: `url(${img4})`,
              }}
            />
            <div className="hidden md:flex flex-col justify-center w-[575px] rounded-2xl m-[10px] p-[8px] bg-white">
              <div className="flex gap-2">
                <img
                  src={user}
                  alt="user"
                  className="w-[48px] h-[48px] rounded-full"
                />
                <div className="flex-col">
                  <div className="flex gap-2">
                    <AiFillStar className="text-[#FFC000]" />
                    <AiFillStar className="text-[#FFC000]" />
                    <AiFillStar className="text-[#FFC000]" />
                    <AiFillStar className="text-[#FFC000]" />
                    <AiFillStar className="text-[#FFC000]" />
                  </div>
                  <div className="flex gap-1">
                    <p className="text-[14px] font-bold flex gap-1 justify-center items-center">
                      Ken T.{" "}
                      <BsPatchCheck
                        style={{
                          color: "#5BB59A",
                        }}
                      />{" "}
                      <span className="text-[#5BB59A] font-normal text-[12px]">
                        Verified Customer
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <p className="text-[16px] font-normal">
                  “As soon as the Clarifions arrived I put one in my bedroom.
                  This was late in the afternoon. When I went to the bedroom in
                  the evening it smelled clean. When I went to bed I felt I
                  could breathe better. Wonderful.”
                </p>
              </div>
            </div>
          </div>
          <div className="w-[320px] md:w-[550px] flex flex-col gap-4 mt-[16px]">
            <h1 className="hidden md:block text-[24px] leading-[33.6px]">
              <span className="text-[#2C7EF8]">ONE TIME ONLY</span> Special
              Price For 6 Extra Clarifion For Only{" "}
              <span className="text-[#2C7EF8]">$14 Each</span>
              ($84.00 Total!)
            </h1>
            <div className="flex gap-4">
              <div
                className="w-[80px] h-[80px] bg-center bg-[#2C7EF8] rounded-[10px]"
                style={{
                  backgroundImage: `url(${img5})`,
                }}
              />
              <div className="flex flex-col gap-2">
                <div className="w-[224px] flex justify-between">
                  <span className="block">Clarifion Air Ionizer</span>
                  <div className="flex gap-2 justify-center items-center">
                    <span className="text-[#969696] text-[10px] line-through">
                      $180
                    </span>
                    <span className="text-[#2C7EF8] text-[14px]">$84</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <AiFillStar className="text-[#FFC000]" />
                  <AiFillStar className="text-[#FFC000]" />
                  <AiFillStar className="text-[#FFC000]" />
                  <AiFillStar className="text-[#FFC000]" />
                  <AiFillStar className="text-[#FFC000]" />
                </div>
                <div className="w-[106px] flex justify-between">
                  <div className="w-[12px] h-[12px] bg-[#E3EEFF] flex justify-center items-center rounded-full">
                    <div className="w-[6px] h-[6px] bg-[#2C7EF8] rounded-full" />
                  </div>
                  <span className="text-[12px] leading-[16.39px]">
                    12 left in Stock
                  </span>
                </div>
                <p className="hidden md:block md:text-[11px] md:leading-[16.8px] md:font-normal">
                  Simply plug a Clarifion into any standard outlet and replace
                  bulky, expensive air purifiers with a simple.
                </p>
              </div>
            </div>
            <p className="w-[326px] text-[12px] leading-[16.8px] text-center font-normal md:hidden">
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-[12px] items-center">
                <BsCheckLg
                  style={{
                    color: "#2C7EF8",
                    fontSize: "16px",
                  }}
                />
                <p className="text-[12px]">
                  Negative Ion Technology may{" "}
                  <span className="font-semibold">help with allergens</span>
                </p>
              </li>
              <li className="flex gap-[12px] items-center">
                <BsCheckLg
                  style={{
                    color: "#2C7EF8",
                    fontSize: "16px",
                  }}
                />
                <p className="text-[12px]">
                  Designed for{" "}
                  <span className="font-semibold">air rejuvenation</span>
                </p>
              </li>
              <li className="flex gap-[12px] items-center">
                <BsCheckLg
                  style={{
                    color: "#2C7EF8",
                    fontSize: "16px",
                  }}
                />
                <p className="text-[12px]">
                  <span className="font-semibold">Perfect for every room </span>
                  in all types of places.
                </p>
              </li>
            </ul>
            <div className="flex bg-[#EDF3FD] justify-center items-center rounded-md gap-[10px] pt-[12px] pr-[16px] pb-[12px] pl-[16px]">
              <div className="p-[5px] bg-[#2C7EF8] rounded-full flex justify-center items-center">
                <AiOutlinePercentage
                  style={{
                    fontSize: "14.4px",
                    color: "#fff",
                  }}
                />
              </div>
              <p className="text-[14px]">
                Save <span className="text-[#2C7EF8]">53%</span> and get{" "}
                <span className="text-[#2C7EF8]">6 extra Clarifision</span> for
                only <span className="text-[#2C7EF8]">$14 Each.</span>
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="flex justify-center items-center pt-[16px] pr-[64px] pb-[16px] pl-[64px] bg-[#59AE43] rounded-[50px]">
                <a
                  className="flex justify-center items-center uppercase text-[14px]"
                  href="/"
                >
                  <span className="w-[207px] flex justify-center items-center gap-4 uppercase text-white leading-[19.12px]">
                    Yes - Claim my discount{" "}
                    <BiRightArrowAlt
                      style={{
                        fontSize: "20px",
                      }}
                    />
                  </span>
                </a>
              </div>
              <div className="flex flex-col justify-center items-center pt-[8px] pr-[16px] pb-[8px] pl-[16px] border-2 border-[#CFCFCF] rounded-[4px] md:flex-row">
                <div className="flex gap-2 border-b border-[#CFCFCF] pb-4 md:justify-center md:items-center md:border-0 md:pt-[5px]">
                  <span className="text-[12px] leading-[16.8px] border-r border-[#CFCFCF] md:pr-[1px]">
                    Free Shipping
                  </span>
                  <span className="text-[12px] flex justify-center items-center gap-1 md:border-r md:border-[#CFCFCF] md:pr-[1px]">
                    <VscLockSmall /> Secure 256-bit SSL encryption
                  </span>
                </div>
                <ul className="w-[180px] flex justify-center items-center gap-1 pt-2 md:pt-0 md:gap-0 md:mt-[-8px]">
                  <li>
                    <img
                      src={visa}
                      alt="visa"
                      className="bg-cover w-[24px] h-[14px]"
                    />
                  </li>
                  <li>
                    <img
                      src={shop}
                      alt="shop"
                      className="bg-cover w-[24px] h-[14px]"
                    />
                  </li>
                  <li>
                    <img
                      src={paypal}
                      alt="paypal"
                      className="bg-cover w-[24px] h-[14px]"
                    />
                  </li>
                  <li>
                    <img
                      src={master}
                      alt="master"
                      className="bg-cover w-[24px] h-[14px]"
                    />
                  </li>
                  <li>
                    <img
                      src={google}
                      alt="google"
                      className="bg-cover w-[24px] h-[14px]"
                    />
                  </li>
                  <li>
                    <img
                      src={apple}
                      alt="apple"
                      className="bg-cover w-[24px] h-[14px]"
                    />
                  </li>
                  <li>
                    <img
                      src={amex}
                      alt="amex"
                      className="bg-cover w-[24px] h-[14px]"
                    />
                  </li>
                </ul>
              </div>
              <h3 className="text-[12px] text-[#F82C2C] underline uppercase">
                <a href="/">No thanks, I don’t want this.</a>
              </h3>
              <div className="flex gap-4">
                <img
                  src={img6}
                  alt="seal"
                  style={{
                    width: "48px",
                    height: "48px",
                  }}
                />

                <p className="text-[12px] leading-[16.8px] font-normal">
                  If you are not completely thrilled with your Clarifion - We
                  have a{" "}
                  <span className="font-bold">
                    30 day satisfaction guarantee
                  </span>
                  . Please refer to our return policy at the bottom of the page
                  for more details. Happy Shopping!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
      </section>

      {/* Footer*/}
      <footer
        className="
      w-full p-[20px] flex flex-col bg-[#252F3D] items-center text-white gap-4 
      md:flex-row justify-between md:fixed md:bottom-0"
      >
        <div className="flex gap-2 justify-center items-center pt-[8px] pr-[0px] pb-[8px] pl-[0px]">
          <span className="text-[12px] leading-[16.8px] border-r border-[#CFCFCF] flex-1 pr-4 md:text-[16px]">
            Copyright (c) 2023
          </span>
          <span className="text-[12px] flex justify-center items-center gap-1 md:text-[16px]">
            Clarifionsupport@clarifion.com
          </span>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-[12px] flex justify-center items-center gap-1 md:text-[16px]">
            <VscLockSmall
              style={{
                fontSize: "14px",
              }}
            />{" "}
            Secure 256-bit SSL encryption
          </span>
        </div>
      </footer>
      {/* Footer*/}
    </main>
  );
}

export default App;
