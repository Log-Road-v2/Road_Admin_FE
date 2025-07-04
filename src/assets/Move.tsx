import { IconProps } from "./interface";

interface MoveProps extends IconProps {
  rotate?: "top" | "bottom" | "left" | "right";
}

const rotationAngles: { [key: string]: string } = {
  right: "90",
  top: "0",
  bottom: "180",
  left: "-90",
};

export const Move = ({ size = 24, color = "#000", rotate = 'top', onClick }: MoveProps) => {
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
      <path fill={color} fill-rule="evenodd" d="M5.2 15.4A1 1 0 0 0 6 17h12a1 1 0 0 0 .8-1.6l-6-8a1 1 0 0 0-1.6 0l-6 8Z" clip-rule="evenodd" />
    </svg>
  )
} 