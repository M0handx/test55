// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function WrapperIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#shDFRziqSRgha)"}>
        <path
          d={
            "M13.213 12.354L9.155 8.296c.63-.814.97-1.81.97-2.856a4.66 4.66 0 00-1.373-3.315A4.653 4.653 0 005.438.752a4.66 4.66 0 00-3.314 1.373A4.65 4.65 0 00.75 5.44c0 1.251.49 2.43 1.374 3.314a4.65 4.65 0 003.314 1.373 4.65 4.65 0 002.854-.969l4.058 4.056a.128.128 0 00.181 0l.682-.68a.128.128 0 000-.18zm-5.3-4.44A3.481 3.481 0 015.438 8.94a3.481 3.481 0 01-2.475-1.025A3.481 3.481 0 011.938 5.44c0-.935.364-1.815 1.025-2.475A3.481 3.481 0 015.438 1.94a3.47 3.47 0 012.475 1.025A3.481 3.481 0 018.938 5.44c0 .934-.364 1.814-1.025 2.475z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"shDFRziqSRgha"}>
          <path fill={"currentColor"} d={"M0 0h14v14H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default WrapperIcon;
/* prettier-ignore-end */
