// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ArrowDownwardIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.167 8.5l-1-.999-3.959 3.953v-8.62H7.792v8.62l-3.953-3.96L2.833 8.5 8.5 14.167 14.167 8.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowDownwardIcon;
/* prettier-ignore-end */
