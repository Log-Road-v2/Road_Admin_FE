import { IconProps } from "./interface";

export const Vote = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.267 10.516H3.894A1.714 1.714 0 0 0 2.18 12.23v5.362m0 0h18.697m-18.697 0v5.205m18.697-5.205V12.23a1.714 1.714 0 0 0-1.714-1.714h-5.369m7.083 7.076v5.205" />
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.35 14.057h6.36m1.302-5.755-3.874 3.878a.857.857 0 0 1-1.212 0L5.774 7.028a.857.857 0 0 1 0-1.212l3.878-3.878a.857.857 0 0 1 1.212 0l5.148 5.152a.857.857 0 0 1 0 1.212Z" />
    </svg>
  )
} 