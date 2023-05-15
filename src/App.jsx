import { useState } from "react";
import { ImageWeb3Desktop, ImageWeb3Mobile } from "./assets";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import SecondaryContent from "./components/SecondaryContent";
import { secondaryContentData } from "./data";
const App = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <div className="font-inter text-[15px] relative flex justify-start items-center flex-col w-full min-h-screen pt-[20px] px-[10px] md:px-[30px] md:pt-[60px] lg:px-[165px] lg:pt-[90px]">
      <Navbar sideNav={sideNav} setSideNav={setSideNav} />
      <main className="w-full h-auto bg-neutral-offWhite md:grid md:grid-cols-3 md:gap-4 md:grid-rows-3">
        <div className="md:col-span-2 md:row-span-2 md:grid md:grid-col-2 md:grid-row-2 md:gap-4">
          <img
            className="md:col-span-2"
            src={ImageWeb3Mobile}
            srcSet={`${ImageWeb3Mobile} 800w, ${ImageWeb3Desktop} 1200w`}
            alt="web 3"
          />
          <div className="md:col-span-2 md:grid md:grid-cols-2 md:gap-4">
            <p className="text-[56px] leading-none font-extrabold">
              The Bright Future of Web 3.0?
            </p>
            <div className="flex flex-col justify-between gap-6 items-start ">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <Button>read more</Button>
            </div>
          </div>
        </div>
        <div className="md:row-span-2 bg-neutral-darkBlue flex flex-col justify-start items-start gap-3 px-[24px] py-[32px] group">
          <div className="mb-5 text-neutral-darkBlue group-hover:text-primary-softOrange">
            <p className="text-[40px] text-inherit hover:cursor-pointer">New</p>
          </div>
          <div className="text-neutral-offWhite">
            <div className="border-b-[1px] border-neutral-grayishBlue pb-2 mb-2">
              <p className="font-extrabold text-[20px] leading-6 text-neutral-offWhite hover:cursor-pointer hover:text-primary-softOrange">
                Hydrogen VS Electric Cars
              </p>
              <p className="text-neutral-grayishBlue font-normal text-[15px] leading-[26px]">
                Will Hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className="border-b-[1px] border-neutral-grayishBlue pb-2 mb-2">
              <p className="font-extrabold text-[20px] leading-6 text-neutral-offWhite hover:cursor-pointer hover:text-primary-softOrange">
                The Downsides of AI Artistry
              </p>
              <p className="text-neutral-grayishBlue font-normal text-[15px] leading-[26px]">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="">
              <p className="font-extrabold text-[20px] leading-6 text-neutral-offWhite hover:cursor-pointer hover:text-primary-softOrange">
                Is VC Funding Drying Up?
              </p>
              <p className="text-neutral-grayishBlue font-normal text-[15px] leading-[26px]">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means?
              </p>
            </div>
          </div>
        </div>
        {secondaryContentData.map((data) => {
          return (
            <SecondaryContent
              index={data.index}
              img={data.img}
              title={data.title}
              description={data.description}
            />
          );
        })}
      </main>
    </div>
  );
};

export default App;
