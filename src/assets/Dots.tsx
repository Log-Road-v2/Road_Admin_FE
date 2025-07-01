import { IconProps } from "./interface";

export const Dots = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path fill={color} d="M10.8 18.297a1.5 1.5 0 1 1 3.001 0 1.5 1.5 0 0 1-3 0Zm0-6a1.5 1.5 0 1 1 3.001 0 1.5 1.5 0 0 1-3 0Zm0-6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
    </svg>
  )
} 