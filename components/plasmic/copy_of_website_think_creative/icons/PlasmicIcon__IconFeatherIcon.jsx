// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconFeatherIconIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 100 100"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M79.167 12.5H20.833a8.333 8.333 0 00-8.333 8.333v58.334a8.333 8.333 0 008.333 8.333h58.334a8.333 8.333 0 008.333-8.333V20.833a8.333 8.333 0 00-8.333-8.333z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M35.417 41.667a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zM87.5 62.5L66.667 41.667 20.833 87.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconFeatherIconIcon;
/* prettier-ignore-end */
