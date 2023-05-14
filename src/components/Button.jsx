const Button = ({ children, rest }) => {
  return (
    <button
      className="bg-primary-softRed hover:bg-neutral-darkBlue py-2 px-4 item-start text-neutral-offWhite cursor-pointer uppercase text-[14px] leading-6 tracking-[4.375px] font-medium text-center transition-all duration-75"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
