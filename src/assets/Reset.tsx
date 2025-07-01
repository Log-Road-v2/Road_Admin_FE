import { IconProps } from "./interface";

export const Reset = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path stroke={color} d="M20 8c-1.403-2.96-4.463-5-8-5a9 9 0 1 0 9 9m0-9v6h-6" />
    </svg>
  )
} 