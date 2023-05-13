import { Icon } from "./assets";
const App = () => {
  return (
    <div className="font-inter relative justify-center items-center w-full min-h-screen bg-primary-softOrange">
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4">
        <a href="#">
          <Icon />
        </a>
        <ul className="flex gap-5 text-lg">
          <li className="transition-all duration-75 hover:cursor-pointer hover:text-primary-softRed">
            Home
          </li>
          <li className="">New</li>
          <li className="">Popular</li>
          <li className="">Trending</li>
          <li className="">Categories</li>
        </ul>
      </header>
    </div>
  );
};

export default App;
