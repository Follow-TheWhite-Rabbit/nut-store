import React from "react";

export function Star (props) {

    return (
        <svg onClick={(ev) => {
            ev.preventDefault()
            props.clickStar()
        }} version="1.0" xmlns="http://www.w3.org/2000/svg"
             width={props.size} height={props.size} viewBox="0 0 1280.000000 1216.000000"
             preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,1216.000000) scale(0.100000,-0.100000)"
               fill={props.color} stroke="none">
                <path d="M6472 11899 c-11 -24 -241 -548 -512 -1164 -270 -616 -663 -1509
                                    -872 -1985 -209 -476 -383 -868 -387 -873 -4 -4 -257 -25 -562 -47 -305 -22
                                    -1173 -85 -1929 -140 -756 -54 -1454 -105 -1550 -111 -96 -7 -181 -15 -187
                                    -18 -8 -4 81 -91 235 -227 136 -121 373 -332 527 -470 154 -137 782 -697 1395
                                    -1243 613 -546 1123 -1002 1132 -1014 17 -21 -1 -97 -491 -2077 -279 -1130
                                    -504 -2056 -500 -2058 5 -2 793 454 1751 1014 959 559 1819 1062 1913 1116 93
                                    55 177 97 186 95 9 -3 808 -496 1775 -1098 1955 -1214 1823 -1133 1829 -1127
                                    3 2 -65 324 -150 714 -85 390 -269 1238 -410 1884 -141 646 -283 1302 -317
                                    1458 l-62 283 35 33 c19 19 324 279 679 578 2078 1749 2530 2132 2523 2139 -5
                                    3 -999 105 -2211 226 -1211 121 -2205 223 -2208 226 -3 3 -364 884 -801 1959
                                    -437 1074 -799 1957 -804 1962 -5 6 -16 -9 -27 -35z"/>
            </g>
        </svg>
    )
}