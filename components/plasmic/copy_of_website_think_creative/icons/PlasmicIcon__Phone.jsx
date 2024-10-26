// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PhoneIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.585 17.019l.009.006a4.1 4.1 0 005.1-.56l.574-.573a1.365 1.365 0 000-1.933l-2.417-2.415a1.366 1.366 0 00-1.933 0 1.366 1.366 0 01-1.931 0L7.122 7.68a1.366 1.366 0 010-1.932 1.366 1.366 0 000-1.933L4.707 1.4a1.366 1.366 0 00-1.932 0l-.574.573a4.099 4.099 0 00-.56 5.1l.006.01a36.988 36.988 0 009.938 9.936v0z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PhoneIcon;
/* prettier-ignore-end */
