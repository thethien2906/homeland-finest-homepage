import { useRef } from "react";
import { Environment } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FloatingCan from "../FloatingCan";
import FloatingProduct from "../FloatingProduct";
import { useStore } from "@/hooks/useStore";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroScene = () => {
  const can1Ref = useRef();//hi
  const can2Ref = useRef();
  const can3Ref = useRef();
  const can4Ref = useRef();
  const can5Ref = useRef();

  const can1GroupRef = useRef();
  const can2GroupRef = useRef();

  const groupRef = useRef();

  const FLOAT_SPEED = 1.5;

  const isReady = useStore((state) => state.isReady);

  useGSAP(() => {
    if (
      !can1Ref.current ||
      !can2Ref.current ||
      !can3Ref.current ||
      !can4Ref.current ||
      !can5Ref.current ||
      !can1GroupRef.current ||
      !can2GroupRef.current ||
      !groupRef.current
    )
      return;

    isReady(true);

    // Set cans starting location
    gsap.set(can1Ref.current.position, { x: -1.5 });
    gsap.set(can1Ref.current.rotation, { z: -0.5, y: -0.8 });

    gsap.set(can2Ref.current.position, { x: 2.2 });
    gsap.set(can2Ref.current.rotation, { z: 0.5 });

    gsap.set(can3Ref.current.position, { y: 5, z: 2 });
    gsap.set(can4Ref.current.position, { x: 2, y: 4, z: 2 });
    gsap.set(can5Ref.current.position, { y: -5 });

    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "back.out(1.4)",
      },
    });

    if (window.scrollY < 20) {
      introTl
        .from(can1GroupRef.current.position, { y: -5, x: 1 }, 0)
        .from(can1GroupRef.current.position, { z: 3 }, 0)
        .from(can2GroupRef.current.position, { y: 5, x: 1 }, 0)
        .from(can2GroupRef.current.position, { z: 3 }, 0);
    }

    const scrollTl = gsap.timeline({
      defaults: { duration: 2 },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    scrollTl
      // Rotate can group
      .to(groupRef.current.rotation, { y: Math.PI * 2 })

      // Can 1 - Nước mắm
      .to(can1Ref.current.position, {
        x: -0.8, // <-- ĐÃ SỬA: Dịch sang trái (từ -0.2 -> -0.8)
        y: -0.65,
        z: -2
      }, 0)
      .to(can1Ref.current.rotation, { z: 0.3, y: -1 }, 0)

      // Can 2 - Đèn lồng (giữ nguyên)
      .to(can2Ref.current.position, { x: 1.2, y: -0.35, z: -1 }, 0)
      .to(can2Ref.current.rotation, { z: 0 }, 0)

      // Can 3 - Rượu (giữ nguyên)
      .to(can3Ref.current.position, { x: -0.3, y: 0.5, z: -1 }, 0)
      .to(can3Ref.current.rotation, { z: -0.1 }, 0)

      // Can 4 - Nem chua (giữ nguyên vị trí)
      .to(can4Ref.current.position, { x: -0.3, y: -0.4, z: 1.5 }, 0)
      .to(can4Ref.current.rotation, { z: 0.3 }, 0)

      // Can 5 - Bánh pía
      .to(can5Ref.current.position, { x: 0.3, y: 0.35, z: -0.5 }, 0)
      .to(can5Ref.current.rotation, {
        z: -0.25,
        y: 0.9 // <-- ĐÃ THÊM: Xoay 45 độ quanh trục Y (Math.PI / 4)
      }, 0)

      // Transform can group
      .to(
        groupRef.current.position,
        { x: 1, duration: 3, ease: "sine.inOut" },
        1.3
      );
  });

  // return (
  //   <group ref={groupRef}>
  //     <group ref={can1GroupRef}>
  //       <FloatingCan
  //         ref={can1Ref}
  //         flavor="blackCherry"
  //         floatSpeed={FLOAT_SPEED}
  //       />
  //     </group>
  //     <group ref={can2GroupRef}>
  //       <FloatingCan
  //         ref={can2Ref}
  //         flavor="lemonLime"
  //         floatSpeed={FLOAT_SPEED}
  //       />{" "}
  //     </group>
  //     <FloatingCan ref={can3Ref} flavor="grape" floatSpeed={FLOAT_SPEED} />{" "}
  //     <FloatingCan
  //       ref={can4Ref}
  //       flavor="strawberryLemonade"
  //       floatSpeed={FLOAT_SPEED}
  //     />
  //     <FloatingCan ref={can5Ref} flavor="watermelon" floatSpeed={FLOAT_SPEED} />
  //     <Environment files="/hdrs/field.hdr" environmentIntensity={1.5} />
  //   </group>
  // );
return (
    <group ref={groupRef}>
      <group ref={can1GroupRef}>
        <FloatingProduct
          ref={can1Ref}
          productId="nuocMam" // <-- Dùng ID sản phẩm
          floatSpeed={FLOAT_SPEED}
        />
      </group>
      <group ref={can2GroupRef}>
        <FloatingProduct
          ref={can2Ref}
          productId="longDen" // <-- Dùng ID sản phẩm
          floatSpeed={FLOAT_SPEED}
        />{" "}
      </group>
      <FloatingProduct
        ref={can3Ref}
        productId="ruou"
        floatSpeed={FLOAT_SPEED}
        scale={1.6}
      />{" "}
      <FloatingProduct
        ref={can4Ref}
        productId="nemChua" // Đây là ref 4 của bạn
        floatSpeed={FLOAT_SPEED}
        scale={1} // <-- GIẢM KÍCH THƯỚC TỪ 2 XUỐNG 1.5 (hoặc nhỏ hơn)
      />
      <FloatingProduct
        ref={can5Ref}
        productId="banhPia" // Bánh pía giờ ở ref 5
        floatSpeed={FLOAT_SPEED}
      />
      <Environment files="/hdrs/field.hdr" environmentIntensity={1.5} />
    </group>
  );
};

export default HeroScene;
