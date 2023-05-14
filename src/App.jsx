import {
  Icon,
  IconMenu,
  ImageWeb3Desktop,
  ImgRetro,
  ImgGaming,
  ImgLaptop,
} from "./assets";
import Button from "./components/Button";
const App = () => {
  return (
    <div className="font-inter text-[15px] relative flex justify-start items-center flex-col w-full min-h-screen px-[165px] pt-[90px]">
      <header className="w-full flex justify-between items-center pb-[60px]">
        <a href="#">
          <Icon />
        </a>
        <a href="#">
          <IconMenu className="md:hidden" />
        </a>
        <ul className="hidden md:flex gap-10 text-[15px] font-normal leading-6">
          <li className="transition-all duration-75 hover:cursor-pointer hover:text-primary-softRed">
            Home
          </li>
          <li className="transition-all duration-75 hover:cursor-pointer hover:text-primary-softRed">
            New
          </li>
          <li className="transition-all duration-75 hover:cursor-pointer hover:text-primary-softRed">
            Popular
          </li>
          <li className="transition-all duration-75 hover:cursor-pointer hover:text-primary-softRed">
            Trending
          </li>
          <li className="transition-all duration-75 hover:cursor-pointer hover:text-primary-softRed">
            Categories
          </li>
        </ul>
      </header>

      <main className="w-full h-auto bg-neutral-offWhite md:grid md:grid-cols-3 md:gap-4 md:grid-rows-3">
        <div className="md:col-span-2 md:row-span-2 md:grid md:grid-col-2 md:grid-row-2 md:gap-4">
          <img className="md:col-span-2" src={ImageWeb3Desktop} alt="web 3" />
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
        <div className="md:row-span-2 bg-neutral-darkBlue flex flex-col justify-start items-start gap-3 px-[24px] py-[32px]">
          <div className="mb-5">
            <p className="text-[40px] text-primary-softOrange hover:cursor-pointer">
              New
            </p>
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
        <div className="md:col-span-1 flex justify-center items-start">
          <div className="min-w-[100px] max-w-[150px] min-h-[127px]">
            <img
              className="w-full h-full object-cover"
              src={ImgRetro}
              alt="retro gaming"
            />
          </div>
          <div className="ml-2">
            <p className="font-bold text-[32px] leading-none text-neutral-grayishBlue">
              01
            </p>
            <p className="font-extrabold text-[18px] leading-[24px] text-neutral-darkBlue hover:cursor-pointer hover:text-primary-softRed">
              Reviving Retro PCs
            </p>
            <p className="font-normal text-[15px] leading-[26px] text-neutral-darkGrayishBlue">
              What happens when old PCs are given modern upgrade?
            </p>
          </div>
        </div>
        <div className="md:col-span-1 flex justify-center items-start">
          <div className="min-w-[100px] max-w-[150px] min-h-[127px]">
            <img
              className="w-full h-full object-cover"
              src={ImgLaptop}
              alt="retro gaming"
            />
          </div>
          <div className="ml-2">
            <p className="font-bold text-[32px] leading-none text-neutral-grayishBlue">
              02
            </p>
            <p className="font-extrabold text-[18px] leading-[24px] text-neutral-darkBlue hover:cursor-pointer hover:text-primary-softRed">
              Top 10 Laptops of 2022
            </p>
            <p className="font-normal text-[15px] leading-[26px] text-neutral-darkGrayishBlue">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="md:col-span-1 flex justify-center items-start">
          <div className="min-w-[100px] max-w-[150px] min-h-[127px]">
            <img
              className="w-full h-full object-cover"
              src={ImgGaming}
              alt="retro gaming"
            />
          </div>
          <div className="ml-2">
            <p className="font-bold text-[32px] leading-none text-neutral-grayishBlue">
              03
            </p>
            <p className="font-extrabold text-[18px] leading-[24px] text-neutral-darkBlue hover:cursor-pointer hover:text-primary-softRed">
              The Growth of Gaming
            </p>
            <p className="font-normal text-[15px] leading-[26px] text-neutral-darkGrayishBlue">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
