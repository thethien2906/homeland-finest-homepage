// components/alternatingText/AlternatingTextScene.jsx

import { Environment } from "@react-three/drei";
// import FloatingCan from "../FloatingCan"; // <-- XÓA DÒNG NÀY
import FloatingProduct from "../FloatingProduct"; // <-- THÊM DÒNG NÀY
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// --- ĐÃ THAY ĐỔI MÀU SẮC ---
// (Các màu ấm, hợp với chủ đề truyền thống)
const bgColors = ["#4B5320", "#2E4057", "#8C3A3A"];
const AlternatingTextScene = () => {
  const canRef = useRef(null); // Giữ nguyên tên ref, không sao

  useGSAP(() => {
    if (!canRef.current) return;

    const sections = gsap.utils.toArray(".alternating-section");

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".alternating-text-view",
        endTrigger: ".alternating-text-container",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    sections.forEach((_, index) => {
      if (!canRef.current) return;
      if (index === 0) return;

      const isOdd = index % 2 !== 0;

      scrollTl
        .to(canRef.current.position, {
          x: isOdd ? "-1" : "1",
          ease: "circ.inOut",
          delay: 0.5,
        })
        .to(
          canRef.current.rotation,
          {
            y: isOdd ? "0.4" : "-0.4",
            ease: "back.inOut",
          },
          "<"
        )
        .to(".alternating-text-container", {
          backgroundColor: bgColors[index],
        });
    });
  });

  return (
    <group ref={canRef} position-x={1} rotation-y={-0.3}>
      {/* --- ĐÃ THAY ĐỔI MODEL --- */}
      <FloatingProduct
        productId="hoaSen" // (Đảm bảo ID là chính xác)
        scale={2}
        floatSpeed={3} // Tốc độ nổi
        rotationIntensity={2} // Tốc độ xoay
      />
      <Environment files="/hdrs/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
};

export default AlternatingTextScene;