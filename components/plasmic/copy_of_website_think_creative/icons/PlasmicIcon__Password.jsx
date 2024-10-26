// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PasswordIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.417 7.25H3.083C1.933 7.25 1 8.183 1 9.333v6.25c0 1.15.933 2.084 2.083 2.084h8.334c1.15 0 2.083-.933 2.083-2.084v-6.25c0-1.15-.933-2.083-2.083-2.083zM7.25 1a4.167 4.167 0 00-4.167 4.167V7.25h8.334V5.167A4.167 4.167 0 007.25 1v0z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PasswordIcon;
/* prettier-ignore-end */
