const BigText = () => {
  return (
    <section className="w-screen min-h-screen overflow-hidden bg-[#fe6334] text-[#fee832]">
      <h2 className="grid w-full gap-[3vw] py-10 text-center font-black uppercase leading-[0.7]">
        <div className="text-[34vw]">GOI</div>
        <div className="grid gap-[2vw] text-[30vw] md:flex md:text-[13vw]">
          <span className="inline-block">TRON</span>
          <span className="inline-block max-md:text-[27vw]">BAN</span>
          <span className="inline-block max-md:text-[40vw]">SAC</span>
        </div>
        <div className="text-[34vw]">VIET</div>
      </h2>
    </section>
  );
};

export default BigText;
