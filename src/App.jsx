import { Icon, IconMenu, ImageWeb3Desktop } from "./assets";
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

      <main className="w-full h-auto bg-neutral-grayishBlue md:grid md:grid-cols-3 md:gap-4 md:grid-rows-3">
        <div className="md:col-span-2 md:row-span-2 md:grid md:grid-col-2 md:grid-row-2 md:gap-4">
          <img className="md:col-span-2" src={ImageWeb3Desktop} alt="web 3" />
          <div className="md:col-span-2 md:grid md:grid-cols-2">
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
        <div className="md:row-span-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          suscipit fugiat doloremque blanditiis iusto voluptatum ratione ipsam
          et nemo quis pariatur ullam deleniti sequi ab voluptate culpa, quo
          optio! Voluptas? Dolores ex exercitationem repellendus nihil, harum
          dolorem voluptatibus? Culpa in eum necessitatibus suscipit inventore
          accusantium voluptatibus quo facere, esse, ullam optio corporis
          aspernatur explicabo! Animi numquam minus repellendus fugit
          distinctio.
        </div>
        <div className="md:col-span-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum
          doloribus accusamus, voluptate ea voluptatibus maxime ad. Mollitia
          temporibus perspiciatis nostrum quidem quod numquam corporis. Corporis
          quae culpa maiores dicta!
        </div>
      </main>
    </div>
  );
};

export default App;
