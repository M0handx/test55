// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SearchSmIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 43"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M37.625 37.625l-10.75-10.75m3.583-8.958c0 6.926-5.615 12.541-12.541 12.541-6.927 0-12.542-5.615-12.542-12.541 0-6.927 5.615-12.542 12.542-12.542 6.926 0 12.541 5.615 12.541 12.542z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SearchSmIcon;
/* prettier-ignore-end */
