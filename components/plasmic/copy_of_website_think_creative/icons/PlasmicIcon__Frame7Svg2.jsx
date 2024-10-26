// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Frame7Svg2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 85 85"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={".25"}
        y={".25"}
        width={"84.5"}
        height={"84.5"}
        rx={"42.25"}
        fill={"currentColor"}
        fillOpacity={".05"}
      ></rect>

      <rect
        x={".25"}
        y={".25"}
        width={"84.5"}
        height={"84.5"}
        rx={"42.25"}
        stroke={"currentColor"}
        strokeWidth={".5"}
      ></rect>

      <path
        d={
          "M61.25 29.712L39.856 51.126l-7.95-7.95 2.644-2.644 5.306 5.306 18.75-18.75 2.644 2.625zm-4.144 9.45A15.05 15.05 0 0157.5 42.5c0 8.288-6.712 15-15 15s-15-6.712-15-15 6.712-15 15-15c2.962 0 5.7.863 8.025 2.344l2.7-2.7A18.562 18.562 0 0042.5 23.75c-10.35 0-18.75 8.4-18.75 18.75s8.4 18.75 18.75 18.75 18.75-8.4 18.75-18.75c0-2.231-.413-4.369-1.125-6.356l-3.019 3.019z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame7Svg2Icon;
/* prettier-ignore-end */
