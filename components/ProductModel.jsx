// components/ProductModel.jsx
import { useGLTF } from "@react-three/drei";

// Preload tất cả model để tải nhanh hơn
import { products } from "@/data/data";
products.forEach((product) => {
  useGLTF.preload(product.modelPath);
});

export function ProductModel({ modelPath, ...props }) {
  // Tải model từ đường dẫn được truyền vào
  const { scene } = useGLTF(modelPath);

  // Dùng <primitive> để render toàn bộ model (scene)
  // Dùng .clone() để bạn có thể dùng model này nhiều lần
  return <primitive object={scene.clone()} {...props} />;
}