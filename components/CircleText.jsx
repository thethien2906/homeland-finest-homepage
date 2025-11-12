import clsx from "clsx";

const CircleText = ({
  text = "Tinh Hoa Quê Nhà • Đậm Hồn Dân Tộc",
  textColor = "#1A871D",
  backgroundColor = "#FFFCFA",
  className,
  fontSize = "12  ",
  radius = 50,
}) => {
  // Tính toán đường tròn cho textPath
  const centerX = 61.5;
  const centerY = 61.5;
  
  // Radius cho textPath - giảm nhiều hơn để text nằm hoàn toàn bên trong
  // Với fontSize lớn (15), cần giảm textRadius nhiều hơn để text không tràn ra ngoài
  const textRadius = radius - 13;
  
  // Tính chu vi nửa vòng tròn để điều chỉnh text
  const halfCircumference = Math.PI * textRadius;
  
  // Tách text thành 2 phần (nếu có dấu • hoặc |)
  const textParts = text.split(/[•|]/).map(part => part.trim()).filter(part => part.length > 0);
  const part1 = (textParts[0] || "Tinh Hoa Quê Nhà") + " •";
  const part2 = (textParts[1] || "Đậm Hồn Dân Tộc") + " •";
  
  // Tính toán điểm bắt đầu và kết thúc dựa trên góc độ
  // Trong SVG: 0° = right, 90° = bottom, 180° = left, 270° = top
  // Nửa trên: từ góc 180° (left) qua 270° (top) đến 0° (right) - đủ nửa vòng tròn
  const angle1 = (180 * Math.PI) / 180;
  const angle2 = (0 * Math.PI) / 180;
  const startX1 = centerX + textRadius * Math.cos(angle1);
  const startY1 = centerY + textRadius * Math.sin(angle1);
  const endX1 = centerX + textRadius * Math.cos(angle2);
  const endY1 = centerY + textRadius * Math.sin(angle2);
  
  // Nửa dưới: từ góc 0° (right) qua 90° (bottom) đến 180° (left) - đủ nửa vòng tròn
  const angle3 = (0 * Math.PI) / 180;
  const angle4 = (180 * Math.PI) / 180;
  const startX2 = centerX + textRadius * Math.cos(angle3);
  const startY2 = centerY + textRadius * Math.sin(angle3);
  const endX2 = centerX + textRadius * Math.cos(angle4);
  const endY2 = centerY + textRadius * Math.sin(angle4);
  
  // Đường path cho nửa trên (từ left qua top đến right) - đủ 180 độ
  const topHalfPath = `M ${startX1},${startY1} A ${textRadius},${textRadius} 0 0,1 ${endX1},${endY1}`;
  
  // Đường path cho nửa dưới (từ right qua bottom đến left) - đủ 180 độ
  const bottomHalfPath = `M ${startX2},${startY2} A ${textRadius},${textRadius} 0 0,1 ${endX2},${endY2}`;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 123 123"
      className={clsx("circle-text", className)}
      aria-labelledby="circle-text"
    >
      <title id="circle-text">{text}</title>
      {/* Nền tròn */}
      <circle
        cx={centerX}
        cy={centerY}
        r={radius + 1}
        fill={backgroundColor}
      />
      {/* Đường path ẩn để textPath đi theo */}
      <defs>
        <path
          id="top-half-path"
          d={topHalfPath}
        />
        <path
          id="bottom-half-path"
          d={bottomHalfPath}
        />
      </defs>
      {/* Text xoay quanh vòng tròn */}
      <g 
        className="animate-spin-slow" 
        style={{ transformOrigin: `${centerX}px ${centerY}px` }}
      >
        {/* Text nửa trên */}
        <text
          fill={textColor}
          fontSize={fontSize}
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
        >
          <textPath
            href="#top-half-path"
            startOffset="0%"
            textAnchor="start"
          >
            {part1}
          </textPath>
        </text>
        {/* Text nửa dưới */}
        <text
          fill={textColor}
          fontSize={fontSize}
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
        >
          <textPath
            href="#bottom-half-path"
            startOffset="0%"
            textAnchor="start"
          >
            {part2}
          </textPath>
        </text>
      </g>
    </svg>
  );
};

export default CircleText;
