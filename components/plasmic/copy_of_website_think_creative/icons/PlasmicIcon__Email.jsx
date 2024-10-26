// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EmailIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.667 3.083v8.334a2.083 2.083 0 01-2.084 2.083h-12.5A2.083 2.083 0 011 11.417V3.083"
        }
        stroke={"currentColor"}
        strokeWidth={"1.4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17.667 3.083A2.083 2.083 0 0015.583 1h-12.5A2.083 2.083 0 001 3.083l7.23 4.514a2.083 2.083 0 002.207 0l7.23-4.514z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EmailIcon;
/* prettier-ignore-end */
