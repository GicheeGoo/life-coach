import { FC } from "preact/compat";
import { SVGProps } from ".";

export const FacebookAlt: FC<SVGProps> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" version="1.1" {...props}>
        <defs>
        <linearGradient id="linear0" gradientUnits="userSpaceOnUse" x1="16" y1="2" x2="16" y2="29.917" gradientTransform="matrix(1.125,0,0,1.125,0,0)">
        <stop offset="0" style="stop-color:rgb(9.411765%,67.45098%,99.607843%);stop-opacity:1;"/>
        <stop offset="1" style="stop-color:rgb(0.392157%,38.823529%,87.843137%);stop-opacity:1;"/>
        </linearGradient>
        </defs>
        <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:url(#linear0);" d="M 33.75 18 C 33.75 26.699219 26.699219 33.75 18 33.75 C 9.300781 33.75 2.25 26.699219 2.25 18 C 2.25 9.300781 9.300781 2.25 18 2.25 C 26.699219 2.25 33.75 9.300781 33.75 18 Z M 33.75 18 "/>
        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 23.867188 22.816406 L 24.566406 18.371094 L 20.1875 18.371094 L 20.1875 15.488281 C 20.1875 14.269531 20.796875 13.085938 22.757812 13.085938 L 24.75 13.085938 L 24.75 9.300781 C 24.75 9.300781 22.945312 9 21.21875 9 C 17.613281 9 15.257812 11.128906 15.257812 14.984375 L 15.257812 18.371094 L 11.25 18.371094 L 11.25 22.816406 L 15.257812 22.816406 L 15.257812 33.5625 C 16.0625 33.6875 16.882812 33.75 17.722656 33.75 C 18.5625 33.75 19.382812 33.6875 20.1875 33.5625 L 20.1875 22.816406 Z M 23.867188 22.816406 "/>
        </g>
    </svg>
)