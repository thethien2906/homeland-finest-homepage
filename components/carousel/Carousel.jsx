"use client";

import { Center, Environment, View } from "@react-three/drei";
import { useRef, useState } from "react";
import { flavors } from "@/data/data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import FloatingCan from "../FloatingCan";
import ArrowButton from "./ArrowButton";
import { WavyCircles } from "./WavyCircles";
import FloatingProduct from "../FloatingProduct";
gsap.registerPlugin(useGSAP);

const SPIN_ON_CHANGE = 8;
const categories = [
  {
    id: "dacSan",
    name: "Đặc Sản",
    description: "Những món ăn đậm đà hương vị truyền thống, là tinh túy của ẩm thực Việt.",
    productId: "nemChua", // ID này phải có trong data/data.js
    color: "#a8553d", // Màu đại diện (ví dụ: màu nâu đất)
  },
  {
    id: "thuCong",
    name: "Đồ thủ công mỹ nghệ",
    description: "Sản phẩm tinh xảo từ đôi tay nghệ nhân, mang đậm dấu ấn văn hóa Việt Nam.",
    productId: "longDen", // ID này phải có trong data/data.js
    color: "#b43434", // Màu đại diện (ví dụ: màu đỏ đèn lồng)
  },
];


const Carousel = () => {
  // Đổi tên state cho rõ nghĩa
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const canRef = useRef(null);

  // Đổi tên hàm
  const changeCategory = (index) => {
    // Dùng categories.length
    const newIndex = (index + categories.length) % categories.length;

    const tl = gsap.timeline();

    tl.to(
      canRef.current.rotation,
      {
        y:
          index > currentCategoryIndex // <-- Dùng state mới
            ? `-=${Math.PI * 2 * SPIN_ON_CHANGE}`
            : `+=${Math.PI * 2 * SPIN_ON_CHANGE}`,
        ease: "power2.inOut",
        duration: 1,
      },
      0
    )
      .to(
        ".background, .wavy-circles-outer, .wavy-circles-inner",
        {
          backgroundColor: categories[newIndex].color, // <-- Dùng categories
          fill: categories[newIndex].color, // <-- Dùng categories
          ease: "power2.inOut",
          duration: 1,
        },
        0
      )
      .to(".text-wrapper", { duration: 0.2, y: -10, opacity: 0 }, 0)
      .to({}, { onStart: () => setCurrentCategoryIndex(newIndex) }, 0.5) // <-- Dùng state mới
      .to(".text-wrapper", { duration: 0.2, y: 0, opacity: 1 }, 0.7);
  };

  // Lấy màu ban đầu
  const initialColor = categories[0].color;

  return (
    <section className="carousel relative grid h-screen grid-rows-[auto, 4fr, auto] justify-center overflow-hidden bg-white py-12 text-white">
      {/* Cập nhật màu ban đầu */}
      <div
        className="background pointer-events-none absolute inset-0 opacity-50"
        style={{ backgroundColor: initialColor }}
      ></div>
      <WavyCircles
        className="absolute left-1/2 top-1/2 h-[120vmin] -translate-x-1/2 -translate-y-1/2"
        style={{ color: initialColor }} // Dùng 'color' thay vì 'text-...'
      />

      {/* Đổi tiêu đề */}
      <h2 className="relative text-center text-5xl font-bold">
        Khám Phá Tinh Hoa
      </h2>

      <div className="grid grid-cols-[auto,auto,auto] items-center">
        {/* Left */}
        <ArrowButton
          onClick={() => changeCategory(currentCategoryIndex + 1)} // <-- Dùng hàm mới
          direction="left"
          label="Lựa chọn tiếp"
        />

        {/* Model 3D */}
        <View className="aspect-square h-[70vmin] min-h-40">
          <Center position={[0, 0, 1.5]}>
            <group ref={canRef}>
              {/* Thay thế 'FloatingCan' bằng 'FloatingProduct' */}
              <FloatingProduct
                floatIntensity={0.3}
                rotationIntensity={1}
                productId={categories[currentCategoryIndex].productId} // <-- Dùng productId động
                scale={categories[currentCategoryIndex].productId === 'longDen' ? 2 : 1} // <-- Tùy chỉnh kích cỡ
              />
            </group>
          </Center>
          <directionalLight intensity={6} position={[0, 1, 1]} />
          <Environment
            files="/hdrs/lobby.hdr"
            environmentIntensity={0.6}
            environmentRotation={[0, 3, 0]}
          />
        </View>

        {/* Right */}
        <ArrowButton
          onClick={() => changeCategory(currentCategoryIndex - 1)} // <-- Dùng hàm mới
          direction="right"
          label="Lựa chọn trước"
        />
      </div>

      {/* Khu vực text */}
      <div className="text-area relative mx-auto max-w-xl text-center">
        <div
          className="text-wrapper text-4xl font-medium"
        >
          {/* Dùng categories */}
          <p>{categories[currentCategoryIndex].name}</p>
        </div>

        {/* Hiển thị description thay vì giá tiền */}
        <div className="text-wrapper mt-4 text-xl font-normal opacity-90">
          <p>{categories[currentCategoryIndex].description}</p>
        </div>
      </div>
    </section>
  );
};

export default Carousel;

// setCurrentFlavorIndex((prevIndex) => {
//   const newIndex =
//     arrow === "right"
//       ? (prevIndex + 1) % flavors.length
//       : (prevIndex - 1 + flavors.length) % flavors.length;

//   setCurrentFlavor(flavors[newIndex].flavor);

//   gsap.to(canRef.current.rotation, {
//     y:
//       arrow === "right"
//         ? canRef.current.rotation.y + Math.PI * 8
//         : canRef.current.rotation.y - Math.PI * 8,
//     z: 0.1,
//   });

//   return newIndex;
// });
