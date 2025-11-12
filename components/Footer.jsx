import CircleText from "./CircleText";
import TinhHoaLogo from "./TinhHoaLogo";

const Footer = () => {
  return (
    <footer className="bg-[#fee832] text-[#fe6334]">
      <div className="relative">
        <div className="relative mx-auto flex w-full max-w-4xl justify-center px-4 py-10">
          <TinhHoaLogo className="z-10 h-28 w-28"/>
          <div className="absolute right-24 top-0 size-28 origin-center -translate-y-14 md:size-48 md:-translate-y-28">
            <CircleText text="Tinh Hoa Quê Nhà • Đậm Hồn Dân Tộc •" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
