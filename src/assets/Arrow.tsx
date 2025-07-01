import { IconProps } from "./interface";

interface ArrowProps extends IconProps {
  rotate?: "top" | "bottom" | "left" | "right";
}

const rotationAngles: { [key: string]: string } = {
  right: "90",
  top: "0",
  bottom: "180",
  left: "-90",
};

export const Arrow = ({ size = 24, color = "#000", rotate = 'top', onClick }: ArrowProps) => {
  const rotation = rotationAngles[rotate] || rotationAngles["top"];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      onClick={onClick}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m17 14-5-5-5 5"
      />
    </svg>
  )
} 