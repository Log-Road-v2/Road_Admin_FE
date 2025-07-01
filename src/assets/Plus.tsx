import { IconProps } from "./interface";

export const Plus = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" d="M12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5ZM7.5 12h9M12 7.5v9" />
    </svg>
  )
} 