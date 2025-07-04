import { IconProps } from "./interface";

export const FolderIcon = ({ size = 24, onClick }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" onClick={onClick}>
      <g filter="url(#a)">
        <path fill="url(#b)" d="M2.113 3.85a1.35 1.35 0 0 1 1.35-1.35h5.858c.387 0 .76.15 1.04.418l2.142 2.061c.315.303.733.472 1.17.472h5.804a1.35 1.35 0 0 1 1.35 1.35v6.132l-2.674 7.482H5.114a3 3 0 0 1-3-3V3.85Z" />
      </g>
      <g filter="url(#c)">
        <path fill="#FCA23D" d="M6.005 9.672a2.71 2.71 0 0 1 2.552-1.758h10.659c.871 0 .669.828.406 1.643l-1.262 8.77a1.357 1.357 0 0 1-1.294.93H4.993c-.52 0-1.03-.15-1.47-.43l-.003-.001c-.14-.158-.533-.907-.33-1.427l2.815-7.727Z" />
      </g>
      <g filter="url(#d)">
        <path fill="url(#e)" d="M6.222 9.62a3 3 0 0 1 2.821-1.98h12.602a1.425 1.425 0 0 1 1.358 1.855l-3.122 9.874a1.5 1.5 0 0 1-1.43 1.048H5.103a3 3 0 0 1-1.625-.484l-.003-.001a3 3 0 0 1-.987-1.059c.28-.02.425-.159.495-.291L6.222 9.62Z" />
      </g>
      <defs>
        <filter id="a" width="18.94" height="17.989" x="1.963" y="2.5" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx="-.15" dy=".075" />
          <feGaussianBlur stdDeviation=".15" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.843137 0 0 0 0 0.360784 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_9187_28135" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx=".075" dy=".075" />
          <feGaussianBlur stdDeviation=".15" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.933333 0 0 0 0 0.658824 0 0 0 0 0.313726 0 0 0 1 0" />
          <feBlend in2="effect1_innerShadow_9187_28135" result="effect2_innerShadow_9187_28135" />
        </filter>
        <filter id="c" width="18.715" height="13.344" x="2.133" y="6.914" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur_9187_28135" stdDeviation=".5" />
        </filter>
        <filter id="d" width="20.882" height="12.923" x="2.338" y="7.641" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx=".15" dy=".15" />
          <feGaussianBlur stdDeviation=".125" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.768627 0 0 0 0 0.286275 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_9187_28135" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx="-.15" dy=".15" />
          <feGaussianBlur stdDeviation=".125" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.878431 0 0 0 0 0.290196 0 0 0 1 0" />
          <feBlend in2="effect1_innerShadow_9187_28135" result="effect2_innerShadow_9187_28135" />
        </filter>
        <linearGradient id="b" x1="5.314" x2="7.424" y1="3.018" y2="10.612" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFD052" />
          <stop offset="1" stop-color="#FFBD41" />
        </linearGradient>
        <linearGradient id="e" x1="12.779" x2="12.779" y1="7.64" y2="20.417" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFDF54" />
          <stop offset="1" stop-color="#FFBA5F" />
        </linearGradient>
      </defs>
    </svg>
  )
} 