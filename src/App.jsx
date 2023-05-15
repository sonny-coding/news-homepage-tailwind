import { useEffect, useState } from "react";
import { ImageWeb3Desktop, ImageWeb3Mobile } from "./assets";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import SecondaryContent from "./components/SecondaryContent";
import NewsContent from "./components/NewsContent";
import { secondaryContentData, newsData } from "./data";
const App = () => {
  console.log(newsData);
  const [sideNav, setSideNav] = useState(false);
  const [isSmallScreen, setSmallScreen] = useState(window.innerWidth < 640);
  const updateMedia = () => {
    setSmallScreen(window.innerWidth < 640);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div className="font-inter text-[15px] relative flex justify-start items-center flex-col w-full min-h-screen pt-5 px-3 md:px-6 lg:px-10">
      <Navbar sideNav={sideNav} setSideNav={setSideNav} />
      <main className="w-full h-auto bg-neutral-offWhite grid gap-2 lg:grid-cols-3 lg:grid-rows-3 lg:gap-4">
        <div className="lg:col-span-2 lg:row-span-2">
          {isSmallScreen ? (
            <img
              className="md:col-span-2 object-cover"
              src={ImageWeb3Mobile}
              alt="web 3"
            />
          ) : (
            <img
              className="md:col-span-2 object-cover"
              src={ImageWeb3Desktop}
              alt="web 3"
            />
          )}
          <div className="md:col-span-2 md:grid md:grid-cols-2 md:gap-4 pt-2">
            <p className="text-[56px] leading-none font-extrabold">
              The Bright Future of Web 3.0?
            </p>
            <div className="flex flex-col justify-between gap-5 items-start pt-2 ">
              <p className="text-[15px] leading-[26px] font-normal">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <Button>read more</Button>
            </div>
          </div>
        </div>
        <div className="lg:row-span-2 bg-neutral-darkBlue flex flex-col justify-start items-start gap-1 lg:gap-3 px-[24px] py-[32px] group">
          <div className="mb-5 text-neutral-darkBlue group-hover:text-primary-softOrange">
            <p className="text-[40px] text-inherit hover:cursor-pointer">New</p>
          </div>
          <div className="last:text-primary-softOrange">
            {newsData.map((data, index) => {
              if (newsData.length - 1 !== index) {
                return (
                  <NewsContent
                    key={index}
                    title={data.title}
                    description={data.description}
                  />
                );
              } else {
                return (
                  <NewsContent
                    key={index}
                    title={data.title}
                    description={data.description}
                    noBorder
                  />
                );
              }
            })}
          </div>
        </div>
        {secondaryContentData.map((data) => {
          return (
            <SecondaryContent
              key={data.index}
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
