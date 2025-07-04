import { IconProps } from "./interface";

export const Exclamation = ({ size = 24, color = "#000", onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <path fill={color} d="M12 14a.965.965 0 0 1-.712-.288A.973.973 0 0 1 11 13V6c0-.283.096-.52.288-.712A.972.972 0 0 1 12 5c.283 0 .52.095.713.288A.96.96 0 0 1 13 6v7a.968.968 0 0 1-.288.713A.964.964 0 0 1 12 14Zm0 5a.965.965 0 0 1-.712-.288A.973.973 0 0 1 11 18c0-.283.095-.52.288-.712A.97.97 0 0 1 12 17c.282 0 .52.096.713.288.193.192.289.43.287.712a.986.986 0 0 1-.288.713A.952.952 0 0 1 12 19Z" />
    </svg>
  )
} 