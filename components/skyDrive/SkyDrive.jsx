"use client";

import { View } from "@react-three/drei";
import Bounded from "../Bounded";
import SkyDriveScene from "./SkyDriveScene";

const SkyDrive = () => {
  return (
    <Bounded className="skydive h-screen">
      <View className="h-screen w-screen">
        <SkyDriveScene
          productId="ruouCan" // <-- ĐÃ ĐỔI: từ 'flavor' sang 'productId'
          sentence="Hương Vị Núi Rừng" // <-- ĐÃ ĐỔI: text
        />
      </View>
    </Bounded>
  );
};

export default SkyDrive;
