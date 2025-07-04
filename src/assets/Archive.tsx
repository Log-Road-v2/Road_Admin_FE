import { IconProps } from "./interface";

export const Archive = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1m5.9-3v-6.5" />
    </svg>
  )
} 