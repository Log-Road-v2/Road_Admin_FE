import { IconProps } from "./interface";

export const Cancel = ({size = 24, color = "#B3B4B8", onClick }: IconProps) => {
   return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" onClick={onClick} xmlns="http://www.w3.org/2000/svg">
         <path d="M18 6L6 18M6 6L18 18" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
   )
} 