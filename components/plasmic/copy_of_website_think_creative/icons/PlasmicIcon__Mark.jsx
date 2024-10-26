// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MarkIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.722 8.29c0 5.378-5.51 8.692-6.655 9.323a.429.429 0 01-.414 0C6.507 16.983 1 13.668 1 8.29 1 4.002 3.573 1 7.86 1c4.289 0 6.862 3.002 6.862 7.29z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M4.43 7.86a3.43 3.43 0 106.861 0 3.43 3.43 0 00-6.86 0v0z"}
        stroke={"currentColor"}
        strokeWidth={"1.4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MarkIcon;
/* prettier-ignore-end */
