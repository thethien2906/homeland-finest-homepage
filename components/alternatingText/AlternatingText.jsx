// components/alternatingText/AlternatingText.jsx

"use client";

import { View } from "@react-three/drei";
import Bounded from "../Bounded";
import gsap from "gsap";
import AlternatingTextScene from "./AlternatingTextScene";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// --- ĐÃ THAY ĐỔI TEXT ---
const texts = [
  {
    heading: "Nguồn Gốc Minh Bạch",
    body: "Chúng tôi làm việc trực tiếp với các nghệ nhân và nhà nông trên khắp cả nước, đảm bảo từng sản phẩm bạn nhận được đều có nguồn gốc rõ ràng và chất lượng.",
  },
  {
    heading: "Kỹ Thuật Thủ Công",
    body: "Từ gốm sứ, sơn mài đến lụa tơ tằm, mỗi sản phẩm là một tác phẩm nghệ thuật được chế tác tỉ mỉ, lưu giữ giá trị văn hóa qua nhiều thế hệ.",
  },
  {
    heading: "Hương Vị Nguyên Bản",
    body: "Các đặc sản được lựa chọn kỹ lưỡng, giữ trọn hương vị nguyên bản của vùng miền, không chất bảo quản, mang đến trải nghiệm ẩm thực thuần túy nhất.",
  },
];

const AlternatingText = () => {
  const isDesktop = useMediaQuery("(min-width:768px)", true);

  return (
    <Bounded className="alternating-text-container relative text-gray-100 bg-[#4B5320]">
      <div>
        <div className="grid relative">
          {isDesktop && (
            <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
              <AlternatingTextScene />
            </View>
          )}

          {texts.map((text, index) => (
            <div
              key={text.heading}
              className="alternating-section grid h-[60vh] md:h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={
                  !isDesktop
                    ? "col-start-1"
                    : index % 2 === 0
                      ? "col-start-1"
                      : index % 2 !== 0
                        ? "col-start-2"
                        : ""
                }
              >
                <h2 className="text-balance text-6xl font-bold">
                  {text.heading}
                </h2>
                <div className="mt-4 text-xl">
                  <p>{text.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;