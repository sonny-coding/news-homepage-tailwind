const NewsContent = ({ title, description, noBorder }) => {
  return (
    <div
      className={`${
        noBorder ? "" : "border-b-[1px] border-neutral-grayishBlue"
      } pb-2 mb-2`}
    >
      <p className="font-extrabold text-[20px] leading-6 text-neutral-offWhite hover:cursor-pointer hover:text-primary-softOrange">
        {title}
      </p>
      <p className="text-neutral-grayishBlue font-normal text-[15px] leading-[26px]">
        {description}
      </p>
    </div>
  );
};

export default NewsContent;
