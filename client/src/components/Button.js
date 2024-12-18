const Button = ({ container, children, ...props }) => {
  return (
    <button
      className={`w-full max-w-[461px] py-4 px-5 disabled:bg-gray-300 disabled:border-gray-300 bg-[#FF7F50] hover:bg-[#FF7F50]/90 transition-all duration-300 ease-in-out rounded-[8px] text-[14px] sm:text-[16px] leading-[140%] text-black font-semibold ${container}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
