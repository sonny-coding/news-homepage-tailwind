const SecondaryContent = ({ index, img, title, description }) => {
  return (
    <div
      key={index}
      className="md:col-span-1 flex justify-start items-start my-1"
    >
      <div className="min-w-[99px] max-w-[100px] h-auto">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt="retro gaming"
        />
      </div>
      <div className="ml-2">
        <p className="font-bold text-[32px] leading-none text-neutral-grayishBlue">
          {index}
        </p>
        <p className="font-extrabold text-[18px] leading-[24px] text-neutral-darkBlue hover:cursor-pointer hover:text-primary-softRed">
          {title}
        </p>
        <p className="font-normal text-[15px] leading-[26px] text-neutral-darkGrayishBlue">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SecondaryContent;
