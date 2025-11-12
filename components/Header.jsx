import TinhHoaLogo from "./TinhHoaLogo";

const Header = () => {
  return (
    <header className="flex justify-center py-0.5 mb-[-5rem]">
      <TinhHoaLogo className="z-10 h-16 w-16 cursor-pointer text-orange-500 md:h-16 md:w-16" />
    </header>
  );
};

export default Header;
