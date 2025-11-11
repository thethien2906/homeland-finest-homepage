// components/FloatingProduct.jsx

import { Float } from "@react-three/drei";
import { ProductModel } from "./ProductModel";
import { forwardRef } from "react";
import { products } from "@/data/data";

const FloatingProduct = forwardRef(
  (
    {
      productId = "nuocMam",
      floatSpeed = 1.5,
      rotationIntensity = 1,
      floatIntensity = 1,
      floatingRange = [-0.1, 0.1],
      scale = 2, // <-- THÊM DÒNG NÀY, đặt kích thước mặc định là 2
      children,
      ...props
    },
    ref
  ) => {
    const product = products.find(p => p.id === productId);

    if (!product) {
      console.error(`Sản phẩm "${productId}" không tồn tại trong data/data.js`);
      return null;
    }

    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}
          {/* Truyền prop 'scale' xuống ProductModel */}
          <ProductModel modelPath={product.modelPath} scale={scale} />
        </Float>
      </group>
    );
  }
);

export default FloatingProduct;